import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';

export async function authenticateRequest(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  
  if (!token) {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
  }

  return token;
}

export function requireRole(allowedRoles: string[]) {
  return (userRole: string) => {
    if (!allowedRoles.includes(userRole)) {
      return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 });
    }
    return null;
  };
}