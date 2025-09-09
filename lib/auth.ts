import { DefaultSession, NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import AzureADProvider from 'next-auth/providers/azure-ad';
import getSupabaseClient from './supabaseClient'; // Import the new public client

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession['user'];
  }

  interface User {
    role: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Enter Your Email Here' },
        password: { label: 'Password', type: 'password', placeholder: 'Enter Your Password Here' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          // Use the public Supabase client for user authentication
          const supabase = getSupabaseClient();

          const { data, error } = await supabase.auth.signInWithPassword({
            email: credentials.email,
            password: credentials.password,
          });

          if (error || !data.user) {
            console.error('Supabase authentication error:', error?.message);
            throw new Error(error?.message || 'Invalid credentials. Please try again.');
          }

          const user = data.user;

          // After a successful email+password login, the user object from Supabase
          // should always have an email. We add this check for type safety and
          // to handle any unexpected cases where the email might be missing.
          if (!user.email) {
            throw new Error('Email not found for the user.');
          }

          return {
            id: user.id,
            email: user.email,
            name: user.user_metadata.name,
            role: user.user_metadata.role,
          };
        } catch (error) {
          console.error('Auth error:', error);
          // Re-throw the error to be handled by NextAuth and passed to the client
          throw new Error(error instanceof Error ? error.message : 'An unexpected error occurred during authentication.');
        }
      }
    })
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role; // Persist the role to the token
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub; // Persist the user ID to the session
        session.user.role = token.role; // Persist the role to the session
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin'
  },
};