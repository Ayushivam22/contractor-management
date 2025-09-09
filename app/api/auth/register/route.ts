import { NextRequest, NextResponse } from 'next/server';
import getSupabaseClient from '@/lib/supabaseClient'; // Use the public client for sign-ups
import {
  createErrorResponse,
  createSuccessResponse,
  validateRequiredFields,
} from '@/lib/utils/api';
import { AuthApiError } from '@supabase/auth-js';

export async function POST(request: NextRequest) {
  let body;
  try {
    body = await request.json();
  } catch (error) {
    return createErrorResponse('Invalid request body: please provide valid JSON.', 400);
  }

  try {
    // Use the public Supabase client for user sign-ups, not the admin client.
    // The admin client bypasses RLS and should only be used in trusted server environments for administrative tasks.
    const supabase = getSupabaseClient();
    console.log('[Register API] - Received request with body:', body);

    const { firstName, lastName, email, password, company } = body;

    // Validate required fields
    validateRequiredFields({ firstName, lastName, email, password }, [
      'firstName',
      'lastName',
      'email',
      'password',
    ]);
    console.log('[Register API] - Required fields validated.');

    // Validate email format
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return createErrorResponse('Please provide a valid email address', 400);
    }
    // Validate password length
    if (password.length < 6) {
      return createErrorResponse('Password must be at least 6 characters long', 400);
    }

    console.log(`[Register API] - Attempting to sign up user: ${email}`);
    const { data, error } = await supabase.auth.signUp({
      email: email.toLowerCase(),
      password: password,
      options: {
        data: {
          name: `${firstName} ${lastName}`,
          company: company || '',
          role: 'user', // Assign a default role for new sign-ups
        },
      },
    });

    if (error) {
      console.error('[Register API] - Supabase signup error:', error);
      // Use the status from the error if available, otherwise default to 400
      return createErrorResponse(error.message, (error as AuthApiError).status || 400);
    }

    // Supabase signUp doesn't error on existing users to prevent email enumeration.
    // A new user has an empty `identities` array, while an existing one doesn't.
    if (data.user && data.user.identities && data.user.identities.length > 0) {
      return createErrorResponse('A user with this email already exists.', 409); // 409 Conflict
    }

    // This indicates a new user was created and needs to verify their email.
    console.log(`[Register API] - New user created, pending verification. User ID: ${data.user?.id}`);
    return createSuccessResponse(
      { message: 'Signup successful! Please check your email for verification.' },
      201
    );
  } catch (error: unknown) {
    console.error('[Register API] - Unexpected error in handler:', error);
    // This will catch errors from `validateRequiredFields` or other unexpected issues.
    // A 400 Bad Request is a reasonable default for errors thrown during input processing.
    if (error instanceof Error) {
      return createErrorResponse(error.message, 400);
    }

    return createErrorResponse('Internal server error', 500);
  }
}