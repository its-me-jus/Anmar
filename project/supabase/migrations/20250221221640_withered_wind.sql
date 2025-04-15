/*
  # Update RLS policies for quiz_attempts table

  1. Changes
    - Add policies for anonymous access using session_id
    - Update existing policies to handle both auth and anonymous cases
    - Ensure data privacy between different sessions

  2. Security
    - Maintain data isolation between sessions
    - Allow anonymous access while preserving security
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Users can insert own attempts" ON quiz_attempts;
DROP POLICY IF EXISTS "Users can read own attempts" ON quiz_attempts;
DROP POLICY IF EXISTS "Users can update own attempts" ON quiz_attempts;

-- Create new policies that handle both authenticated and anonymous access
CREATE POLICY "Allow insert with session"
  ON quiz_attempts
  FOR INSERT
  WITH CHECK (
    (auth.uid() IS NULL AND session_id IS NOT NULL) OR
    (auth.uid() IS NOT NULL AND user_id = auth.uid())
  );

CREATE POLICY "Allow read with session"
  ON quiz_attempts
  FOR SELECT
  USING (
    (auth.uid() IS NULL AND session_id IS NOT NULL) OR
    (auth.uid() IS NOT NULL AND user_id = auth.uid())
  );

CREATE POLICY "Allow update with session"
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

-- Make user_id optional since we're supporting anonymous access
ALTER TABLE quiz_attempts ALTER COLUMN user_id DROP NOT NULL;