/*
  # Add analytics column to quiz_attempts table

  1. Changes
    - Add `analytics` column to store question timing and attempt data
    - Column type is JSONB to store flexible analytics data structure
    - Default value is empty JSON object
    - Drop and recreate policies to ensure proper access

  2. Security
    - Maintain existing RLS policies
    - Update policies to include analytics column access
*/

-- Drop existing policies
DROP POLICY IF EXISTS "quiz_attempts_insert_policy" ON quiz_attempts;
DROP POLICY IF EXISTS "quiz_attempts_select_policy" ON quiz_attempts;
DROP POLICY IF EXISTS "quiz_attempts_update_policy" ON quiz_attempts;

-- Add analytics column if it doesn't exist
ALTER TABLE quiz_attempts 
ADD COLUMN IF NOT EXISTS analytics jsonb DEFAULT '{}'::jsonb;

-- Recreate policies with updated column access
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