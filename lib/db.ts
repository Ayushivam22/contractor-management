import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Note: This client is meant for server-side use ONLY, where you need to
// bypass RLS policies. It uses the SERVICE_ROLE_KEY, which has admin
// privileges.
//
// For operations that should respect user permissions and RLS,
// use the client from `utils/supabase/server.ts` or `utils/supabase/client.ts`.

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL');
}
if (!SUPABASE_SERVICE_KEY) {
  throw new Error('Missing env.SUPABASE_SERVICE_ROLE_KEY');
}

// To prevent memory leaks in development with hot-reloading, we cache the client
// in a global object. This is because Next.js clears `require` cache on every
// page request in development, which would lead to a new client being created
// on every request.
declare global {
  // Allow global `var` declarations
  // eslint-disable-next-line no-var
  var supabaseAdmin: SupabaseClient | undefined;
}

const createAdminClient = () =>
  createClient(SUPABASE_URL!, SUPABASE_SERVICE_KEY!, {
    auth: {
      // For server-side clients, it's best to disable session persistence
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });

const supabaseAdmin = global.supabaseAdmin ?? (global.supabaseAdmin = createAdminClient());

/**
 * Returns a cached Supabase client with service_role permissions.
 * This client bypasses all Row Level Security policies and should only be
 * used on the server for administrative tasks.
 */
export default function getSupabaseAdmin(): SupabaseClient {
  return supabaseAdmin;
}