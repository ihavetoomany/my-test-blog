import { createClient } from '@supabase/supabase-js';

/** Server-side Supabase client for use in Astro pages/endpoints. */
export function getSupabase() {
  const supabaseUrl =
    import.meta.env.SUPABASE_URL ?? (typeof process !== 'undefined' && process.env?.SUPABASE_URL) ?? '';
  const supabaseAnonKey =
    import.meta.env.SUPABASE_ANON_KEY ?? (typeof process !== 'undefined' && process.env?.SUPABASE_ANON_KEY) ?? '';
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing SUPABASE_URL or SUPABASE_ANON_KEY in environment.');
  }
  return createClient(supabaseUrl, supabaseAnonKey);
}
