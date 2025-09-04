import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import getSupabaseClient from './supabaseClient'; // Import the new public client

export const authOptions: NextAuthOptions = {
  providers: [
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
            return null;
          }

          const user = data.user;

          // After a successful email+password login, the user object from Supabase
          // should always have an email. We add this check for type safety and
          // to handle any unexpected cases where the email might be missing.
          if (!user.email) {
            return null;
          }

          return {
            id: user.id,
            email: user.email,
            name: user.user_metadata.name,
            role: user.user_metadata.role,
          };
        } catch (error) {
          console.error('Auth error:', error);
          return null;
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