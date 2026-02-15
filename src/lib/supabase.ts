import { createClient } from '@supabase/supabase-js';

function getEnv(name: string): string {
  if (typeof process !== 'undefined' && process.env?.[name]) return process.env[name] as string;
  const v = import.meta.env[name];
  return typeof v === 'string' ? v : '';
}

/** Server-side Supabase client for use in Astro pages/endpoints. */
export function getSupabase() {
  const supabaseUrl = getEnv('SUPABASE_URL');
  const supabaseAnonKey = getEnv('SUPABASE_ANON_KEY');
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing SUPABASE_URL or SUPABASE_ANON_KEY in environment.');
  }
  return createClient(supabaseUrl, supabaseAnonKey);
}
