/*
  # Create audio cache table for text-to-speech

  1. New Tables
    - `audio_cache`
      - `id` (uuid, primary key)
      - `language` (text)
      - `text` (text)
      - `audio_blob` (bytea)
      - `created_at` (timestamp)
      - `hash` (text, unique)
      - `type` (text)
      - `last_accessed` (timestamp)
      - `access_count` (integer)

  2. Security
    - Enable RLS on `audio_cache` table
    - Add policies for authenticated users to read
    - Add policies for service role to manage
*/

-- Create audio_cache table
CREATE TABLE IF NOT EXISTS public.audio_cache (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    language text NOT NULL,
    text text NOT NULL,
    audio_blob bytea NOT NULL,
    created_at timestamptz DEFAULT timezone('utc'::text, now()) NOT NULL,
    hash text NOT NULL UNIQUE,
    type text NOT NULL CHECK (type IN ('question', 'option', 'feedback')),
    last_accessed timestamptz DEFAULT timezone('utc'::text, now()),
    access_count integer DEFAULT 0
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_audio_cache_language ON public.audio_cache(language);
CREATE INDEX IF NOT EXISTS idx_audio_cache_type ON public.audio_cache(type);
CREATE INDEX IF NOT EXISTS idx_audio_cache_last_accessed ON public.audio_cache(last_accessed);

-- Create function to update last_accessed and access_count
CREATE OR REPLACE FUNCTION public.update_audio_cache_access()
RETURNS trigger AS $$
BEGIN
    NEW.last_accessed = timezone('utc'::text, now());
    NEW.access_count = NEW.access_count + 1;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update access statistics
CREATE TRIGGER update_audio_cache_access_trigger
    BEFORE UPDATE ON public.audio_cache
    FOR EACH ROW
    EXECUTE FUNCTION public.update_audio_cache_access();

-- Create function to clean up old audio cache entries
CREATE OR REPLACE FUNCTION public.cleanup_audio_cache(days_old integer DEFAULT 30)
RETURNS integer AS $$
DECLARE
    deleted_count integer;
BEGIN
    DELETE FROM public.audio_cache
    WHERE last_accessed < timezone('utc'::text, now()) - (days_old || ' days')::interval
    AND access_count < 10;  -- Keep frequently accessed audio even if old
    
    GET DIAGNOSTICS deleted_count = ROW_COUNT;
    RETURN deleted_count;
END;
$$ LANGUAGE plpgsql;

-- Add comment to cleanup function
COMMENT ON FUNCTION public.cleanup_audio_cache IS 
    'Manual cleanup function. Run this periodically to remove old audio cache entries.';

-- Add RLS policies
ALTER TABLE public.audio_cache ENABLE ROW LEVEL SECURITY;

-- Allow read access to all authenticated users
CREATE POLICY "Allow read access to all authenticated users"
    ON public.audio_cache FOR SELECT
    TO authenticated
    USING (true);

-- Allow insert/update only to service role
CREATE POLICY "Allow insert/update only to service role"
    ON public.audio_cache FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- Add comment to table
COMMENT ON TABLE public.audio_cache IS 'Stores cached audio files for text-to-speech functionality';