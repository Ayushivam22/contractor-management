import { NextResponse } from 'next/server';
import {
  createErrorResponse,
  createSuccessResponse,
  validateRequiredFields,
} from '@/lib/utils/api';
import getSupabaseClient from '@/lib/supabaseClient';

export async function POST(request: Request) {
  const supabase = getSupabaseClient();
  console.log('[Signup API] - Received request.');
  try {
    const body = await request.json();
    console.log('[Signup API] - Parsed request body:', body);

    const requiredFields = ['email', 'password', 'firstName', 'lastName'];
    validateRequiredFields(body, requiredFields);
    console.log('[Signup API] - Required fields validated successfully.');

    const { email, password, firstName, lastName, company } = body;

    console.log(`[Signup API] - Calling Supabase signUp for user: ${email}`);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: `${firstName} ${lastName}`,
          company: company || '',
          role: 'user', // Default role for new users
        },
      },
    });

    if (error) {
      console.error('[Signup API] - Supabase signUp returned an error:', error);
      return createErrorResponse(error.message, 400);
    }

    console.log(`[Signup API] - User created successfully. User ID: ${data.user?.id}`);
    return createSuccessResponse({ message: 'Signup successful! Please check your email for verification.' }, 201);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.';
    console.error('[Signup API] - An unexpected error occurred in the handler:', error);
    return createErrorResponse(errorMessage, 400);
  }
}