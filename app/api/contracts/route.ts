import { NextRequest } from 'next/server';
import connectDB from '@/lib/db';
import Contract from '@/models/Contract';
import { authenticateRequest, requireRole } from '@/lib/middleware';
import { createErrorResponse, createSuccessResponse, validateRequiredFields } from '@/lib/utils/api';

export async function POST(request: NextRequest) {
  try {
    const token = await authenticateRequest(request);
    if (token instanceof Response) return token;

    const roleCheck = requireRole(['Manager'])(token.role as string);
    if (roleCheck) return roleCheck;

    const { title, description, budget, deadline } = await request.json();

    // Validate required fields
    validateRequiredFields({ title, description, budget, deadline }, ['title', 'description', 'budget', 'deadline']);

    // Validate budget
    if (budget <= 0) {
      return createErrorResponse('Budget must be a positive number');
    }

    // Validate deadline
    const deadlineDate = new Date(deadline);
    if (deadlineDate <= new Date()) {
      return createErrorResponse('Deadline must be in the future');
    }

    await connectDB();

    const contract = new Contract({
      title,
      description,
      budget,
      deadline: deadlineDate,
      createdBy: token.sub,
    });

    await contract.save();
    await contract.populate('createdBy', 'name email');

    return createSuccessResponse({
      message: 'Contract created successfully',
      contract,
    }, 201);

  } catch (error: any) {
    console.error('Create contract error:', error);
    return createErrorResponse(error.message || 'Internal server error', 500);
  }
}

export async function GET(request: NextRequest) {
  try {
    const token = await authenticateRequest(request);
    if (token instanceof Response) return token;

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const status = searchParams.get('status');

    await connectDB();

    const query: any = {};
    if (status && ['Open', 'In Progress', 'Completed'].includes(status)) {
      query.status = status;
    }

    const skip = (page - 1) * limit;

    const contracts = await Contract
      .find(query)
      .populate('createdBy', 'name email')
      .populate('applicants', 'name email')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Contract.countDocuments(query);

    return createSuccessResponse({
      contracts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });

  } catch (error: any) {
    console.error('Get contracts error:', error);
    return createErrorResponse('Internal server error', 500);
  }
}