/*
  # Fix audio cache RLS policies and constraints

  1. Changes
    - Add RLS policies for audio_cache table to allow:
      - Public read access to audio files
      - Service role write access for caching
    - Add indexes for performance
    - Add constraints for data integrity

  2. Security
    - Enable RLS on audio_cache table
    - Add policies for read/write access
    - Ensure proper access control
*/

-- Enable RLS if not already enabled
ALTER TABLE audio_cache ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any
DROP POLICY IF EXISTS "Allow insert/update only to service role" ON audio_cache;
DROP POLICY IF EXISTS "Allow read access to all authenticated users" ON audio_cache;

-- Create new policies
CREATE POLICY "Allow public read access to audio cache"
  ON audio_cache
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow service role full access"
  ON audio_cache
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Add unique constraint on hash if not exists
ALTER TABLE audio_cache
  DROP CONSTRAINT IF EXISTS audio_cache_hash_key,
  ADD CONSTRAINT audio_cache_hash_key UNIQUE (hash);

-- Add indexes for performance if not exists
CREATE INDEX IF NOT EXISTS idx_audio_cache_type_hash 
  ON audio_cache (type, hash);

CREATE INDEX IF NOT EXISTS idx_audio_cache_language_hash 
  ON audio_cache (language, hash);