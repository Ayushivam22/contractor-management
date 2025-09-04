import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware(req) {
    // Add any additional middleware logic here if needed
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Protect all API routes except auth routes
        if (req.nextUrl.pathname.startsWith('/api/')) {
          if (req.nextUrl.pathname.startsWith('/api/auth/')) {
            return true;
          }
          return !!token;
        }
        return true;
      },
    },
  }
);

export const config = {
  matcher: ['/api/:path*']
};