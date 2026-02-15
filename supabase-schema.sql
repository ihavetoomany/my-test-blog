-- Run this in the Supabase SQL Editor (Dashboard → SQL Editor) to create the posts table.

CREATE TABLE posts (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamptz DEFAULT now(),
  title text NOT NULL,
  content text NOT NULL,
  image_url text,
  slug text UNIQUE NOT NULL
);

-- Optional: enable Row Level Security (RLS) and add a policy for public read access
-- ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "Allow public read access on posts" ON posts FOR SELECT USING (true);
