/*
  # Fix audio cache RLS policies

  1. Changes
    - Update RLS policies for audio_cache table to:
      - Allow public read access to audio files
      - Allow public write access for caching
      - Maintain service role access
    - Add appropriate constraints and indexes

  2. Security
    - Enable RLS on audio_cache table
    - Add policies for read/write access
    - Ensure proper access control while allowing necessary operations
*/

-- Enable RLS
ALTER TABLE audio_cache ENABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS "Allow public read access to audio cache" ON audio_cache;
DROP POLICY IF EXISTS "Allow service role full access" ON audio_cache;

-- Create new policies
CREATE POLICY "Allow public read access to audio cache"
  ON audio_cache
  FOR SELECT
  TO public
  USING (true);

-- Allow public to insert/update for caching
CREATE POLICY "Allow public write access to audio cache"
  ON audio_cache
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public update access to audio cache"
  ON audio_cache
  FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

-- Maintain service role access
CREATE POLICY "Allow service role full access"
  ON audio_cache
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Ensure type constraint exists
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.table_constraints 
    WHERE constraint_name = 'audio_cache_type_check'
  ) THEN
    ALTER TABLE audio_cache
      ADD CONSTRAINT audio_cache_type_check 
      CHECK (type = ANY (ARRAY['question'::text, 'option'::text, 'feedback'::text]));
  END IF;
END $$;