import { NextRequest, NextResponse } from 'next/server';
import getSupabaseAdmin from '@/lib/db';
import { createErrorResponse, validateRequiredFields } from '@/lib/utils/api';
import { AuthApiError } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {
  let body;
  try {
    body = await request.json();
  } catch (error) {
    return createErrorResponse('Invalid request body: please provide valid JSON.', 400);
  }

  try {
    const supabase = getSupabaseAdmin();
    // console.log("Supabase client : ",supabase)
    console.log("Control reached register")
    const { name, email, password, role } = body;

    // Validate required fields
    validateRequiredFields({ name, email, password }, ['name', 'email', 'password']);

    // Validate email format
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return createErrorResponse('Please provide a valid email address', 400);
    }

    // Validate password length
    if (password.length < 6) {
      return createErrorResponse('Password must be at least 6 characters long', 400);
    }

    // Validate role
    const validRoles = ['Applicant', 'Manager'];
    const userRole = role || 'Applicant';
    if (!validRoles.includes(userRole)) {
      return createErrorResponse('Invalid role. Must be Applicant or Manager', 400);
    }



    const { data, error } = await supabase.auth.admin.createUser({
      email: email.toLowerCase(),
      password: password,
      email_confirm: true, // Automatically confirm user's email
      user_metadata: {
        name,
        role: userRole,
      },

    });


    if (error) {
      // Check for a specific Supabase error for existing users.
      if (error instanceof AuthApiError && error.message.includes('User already registered')) {
        return createErrorResponse('A user with this email already exists.', 409);
      }
      return createErrorResponse(error.message, error.status || 500);
    }

    return NextResponse.json({ message: 'User registered successfully.' }, { status: 201 });

  } catch (error: any) {
    console.error('Registration error:', error);
    // This will catch errors from `validateRequiredFields` or other unexpected issues.
    // A 400 Bad Request is a reasonable default for errors thrown during input processing.
    if (error.message) {
      return createErrorResponse(error.message, 400);
    }

    return createErrorResponse(error.message || 'Internal server error', 500);
  }
}