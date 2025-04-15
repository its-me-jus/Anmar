/*
  # Add achievements column to quiz_attempts table

  1. Changes
    - Add achievements column to store user achievements
    - Add session_id column for tracking attempts without auth
    - Add progress tracking columns
    - Add timestamps for better analytics

  2. Security
    - Maintain existing RLS policies
*/

ALTER TABLE quiz_attempts
ADD COLUMN IF NOT EXISTS session_id uuid,
ADD COLUMN IF NOT EXISTS achievements jsonb DEFAULT '[]'::jsonb,
ADD COLUMN IF NOT EXISTS progress_percentage integer DEFAULT 0,
ADD COLUMN IF NOT EXISTS started_at timestamptz DEFAULT now(),
ADD COLUMN IF NOT EXISTS last_updated_at timestamptz DEFAULT now();

-- Add index for faster lookups
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_session_id ON quiz_attempts(session_id);