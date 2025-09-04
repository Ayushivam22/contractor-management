import { NextRequest } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/models/User';
import { authenticateRequest } from '@/lib/middleware';
import { createErrorResponse, createSuccessResponse } from '@/lib/utils/api';

export async function GET(request: NextRequest) {
  try {
    const token = await authenticateRequest(request);
    if (token instanceof Response) return token;

    await connectDB();

    const user = await User.findById(token.sub).select('-password');
    if (!user) {
      return createErrorResponse('User not found', 404);
    }

    return createSuccessResponse({ user });

  } catch (error: any) {
    console.error('Get user profile error:', error);
    return createErrorResponse('Internal server error', 500);
  }
}