export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      audio_cache: {
        Row: {
          id: string
          language: string
          text: string
          audio_blob: string
          created_at: string
          hash: string
          type: 'question' | 'option' | 'feedback'
          last_accessed: string
          access_count: number
        }
        Insert: {
          id?: string
          language: string
          text: string
          audio_blob: string
          created_at?: string
          hash: string
          type: 'question' | 'option' | 'feedback'
          last_accessed?: string
          access_count?: number
        }
        Update: {
          id?: string
          language?: string
          text?: string
          audio_blob?: string
          created_at?: string
          hash?: string
          type?: 'question' | 'option' | 'feedback'
          last_accessed?: string
          access_count?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 