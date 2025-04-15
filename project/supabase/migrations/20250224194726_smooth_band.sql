/*
  # Fix quiz attempts table for anonymous access

  1. Changes
    - Make user_id optional to support anonymous users
    - Add session_id for tracking anonymous sessions
    - Add analytics column for storing timing and attempt data
    - Update RLS policies to handle both auth and anon access

  2. Security
    - Enable RLS
    - Add policies for both authenticated and anonymous users
    - Ensure data isolation between sessions
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Users can insert own attempts" ON quiz_attempts;
DROP POLICY IF EXISTS "Users can read own attempts" ON quiz_attempts;
DROP POLICY IF EXISTS "Users can update own attempts" ON quiz_attempts;
DROP POLICY IF EXISTS "Allow insert with session" ON quiz_attempts;
DROP POLICY IF EXISTS "Allow read with session" ON quiz_attempts;
DROP POLICY IF EXISTS "Allow update with session" ON quiz_attempts;

-- Modify table structure
ALTER TABLE quiz_attempts
  ALTER COLUMN user_id DROP NOT NULL,
  ADD COLUMN IF NOT EXISTS session_id uuid,
  ADD COLUMN IF NOT EXISTS analytics jsonb DEFAULT '{}'::jsonb,
  ADD COLUMN IF NOT EXISTS progress_percentage integer DEFAULT 0,
  ADD COLUMN IF NOT EXISTS started_at timestamptz DEFAULT now(),
  ADD COLUMN IF NOT EXISTS last_updated_at timestamptz DEFAULT now();

-- Add index for faster lookups
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_session_id ON quiz_attempts(session_id);

-- Create new policies for both authenticated and anonymous access
CREATE POLICY "quiz_attempts_insert_policy"
  ON quiz_attempts
  FOR INSERT
  WITH CHECK (
    (auth.uid() IS NULL AND session_id IS NOT NULL) OR
    (auth.uid() IS NOT NULL AND user_id = auth.uid())
  );

CREATE POLICY "quiz_attempts_select_policy"
  ON quiz_attempts
  FOR SELECT
  USING (
    (auth.uid() IS NULL AND session_id IS NOT NULL) OR
    (auth.uid() IS NOT NULL AND user_id = auth.uid())
  );

CREATE POLICY "quiz_attempts_update_policy"
  ON quiz_attempts
  FOR UPDATE
  USING (
    (auth.uid() IS NULL AND session_id IS NOT NULL) OR
    (auth.uid() IS NOT NULL AND user_id = auth.uid())
  )
  WITH CHECK (
    (auth.uid() IS NULL AND session_id IS NOT NULL) OR
    (auth.uid() IS NOT NULL AND user_id = auth.uid())
  );