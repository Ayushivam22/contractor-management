import { createClient, SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL) {
    throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL');
}
if (!SUPABASE_ANON_KEY) {
    throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY');
}

// This client is for server-side use (e.g., API routes, server components)
// but uses the public anon key and respects RLS.
// For client-side browser usage, you might create another instance or use a shared one.
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
        persistSession: false, // Sessions are handled by NextAuth, not Supabase client storage
        autoRefreshToken: false,
        detectSessionInUrl: false,
    },
});

export default function getSupabaseClient(): SupabaseClient {
    return supabase;
}