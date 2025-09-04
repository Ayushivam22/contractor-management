import { NextRequest } from 'next/server';
import connectDB from '@/lib/db';
import Contract from '@/models/Contract';
import { authenticateRequest, requireRole } from '@/lib/middleware';
import { createErrorResponse, createSuccessResponse } from '@/lib/utils/api';

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const token = await authenticateRequest(request);
    if (token instanceof Response) return token;

    const roleCheck = requireRole(['Manager'])(token.role as string);
    if (roleCheck) return roleCheck;

    const { title, description, budget, deadline, status } = await request.json();

    await connectDB();

    const contract = await Contract.findById(params.id);
    if (!contract) {
      return createErrorResponse('Contract not found', 404);
    }

    // Check if user is the creator
    if (contract.createdBy.toString() !== token.sub) {
      return createErrorResponse('You can only update your own contracts', 403);
    }

    // Update fields if provided
    if (title) contract.title = title;
    if (description) contract.description = description;
    if (budget && budget > 0) contract.budget = budget;
    if (deadline) {
      const deadlineDate = new Date(deadline);
      if (deadlineDate > new Date()) {
        contract.deadline = deadlineDate;
      } else {
        return createErrorResponse('Deadline must be in the future');
      }
    }
    if (status && ['Open', 'In Progress', 'Completed'].includes(status)) {
      contract.status = status;
    }

    await contract.save();
    await contract.populate('createdBy', 'name email');
    await contract.populate('applicants', 'name email');

    return createSuccessResponse({
      message: 'Contract updated successfully',
      contract,
    });

  } catch (error: any) {
    console.error('Update contract error:', error);
    return createErrorResponse('Internal server error', 500);
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const token = await authenticateRequest(request);
    if (token instanceof Response) return token;

    const roleCheck = requireRole(['Manager'])(token.role as string);
    if (roleCheck) return roleCheck;

    await connectDB();

    const contract = await Contract.findById(params.id);
    if (!contract) {
      return createErrorResponse('Contract not found', 404);
    }

    // Check if user is the creator
    if (contract.createdBy.toString() !== token.sub) {
      return createErrorResponse('You can only delete your own contracts', 403);
    }

    await Contract.findByIdAndDelete(params.id);

    return createSuccessResponse({
      message: 'Contract deleted successfully',
    });

  } catch (error: any) {
    console.error('Delete contract error:', error);
    return createErrorResponse('Internal server error', 500);
  }
}