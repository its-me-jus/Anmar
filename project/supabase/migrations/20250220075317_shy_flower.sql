/*
  # Quiz Database Schema

  1. New Tables
    - `quiz_attempts`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `name` (text)
      - `language` (text)
      - `attempt_number` (integer)
      - `answers` (jsonb)
      - `score` (integer)
      - `completed` (boolean)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `quiz_attempts` table
    - Add policies for:
      - Users can insert their own attempts
      - Users can read their own attempts
      - Users can update their own attempts
*/

CREATE TABLE IF NOT EXISTS quiz_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  name text NOT NULL,
  language text NOT NULL,
  attempt_number integer NOT NULL DEFAULT 1,
  answers jsonb NOT NULL DEFAULT '[]'::jsonb,
  score integer,
  completed boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;

-- Allow users to insert their own attempts
CREATE POLICY "Users can insert own attempts"
  ON quiz_attempts
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Allow users to read their own attempts
CREATE POLICY "Users can read own attempts"
  ON quiz_attempts
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Allow users to update their own attempts
CREATE POLICY "Users can update own attempts"
  ON quiz_attempts
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);