import { NextRequest } from 'next/server';
import connectDB from '@/lib/db';
import Contract from '@/models/Contract';
import { authenticateRequest, requireRole } from '@/lib/middleware';
import { createErrorResponse, createSuccessResponse } from '@/lib/utils/api';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const token = await authenticateRequest(request);
    if (token instanceof Response) return token;

    const roleCheck = requireRole(['Manager'])(token.role as string);
    if (roleCheck) return roleCheck;

    await connectDB();

    const contract = await Contract.findById(params.id)
      .populate('applicants', 'name email createdAt')
      .populate('createdBy', 'name email');

    if (!contract) {
      return createErrorResponse('Contract not found', 404);
    }

    // Check if user is the creator
    if (contract.createdBy._id.toString() !== token.sub) {
      return createErrorResponse('You can only view applicants for your own contracts', 403);
    }

    return createSuccessResponse({
      contract: {
        _id: contract._id,
        title: contract.title,
        description: contract.description,
        budget: contract.budget,
        deadline: contract.deadline,
        status: contract.status,
        createdBy: contract.createdBy,
        applicants: contract.applicants,
      },
    });

  } catch (error: any) {
    console.error('Get contract applicants error:', error);
    return createErrorResponse('Internal server error', 500);
  }
}