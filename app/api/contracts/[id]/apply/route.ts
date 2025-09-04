import { NextRequest } from 'next/server';
import connectDB from '@/lib/db';
import Contract from '@/models/Contract';
import { authenticateRequest, requireRole } from '@/lib/middleware';
import { createErrorResponse, createSuccessResponse } from '@/lib/utils/api';

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const token = await authenticateRequest(request);
    if (token instanceof Response) return token;

    const roleCheck = requireRole(['Applicant'])(token.role as string);
    if (roleCheck) return roleCheck;

    await connectDB();

    const contract = await Contract.findById(params.id);
    if (!contract) {
      return createErrorResponse('Contract not found', 404);
    }

    // Check if contract is open
    if (contract.status !== 'Open') {
      return createErrorResponse('This contract is no longer open for applications');
    }

    // Check if user already applied
    if (contract.applicants.includes(token.sub as any)) {
      return createErrorResponse('You have already applied to this contract', 409);
    }

    // Check if deadline has passed
    if (new Date() > contract.deadline) {
      return createErrorResponse('The application deadline has passed');
    }

    // Add applicant
    contract.applicants.push(token.sub as any);
    await contract.save();

    await contract.populate('createdBy', 'name email');
    await contract.populate('applicants', 'name email');

    return createSuccessResponse({
      message: 'Application submitted successfully',
      contract,
    });

  } catch (error: any) {
    console.error('Apply to contract error:', error);
    return createErrorResponse('Internal server error', 500);
  }
}