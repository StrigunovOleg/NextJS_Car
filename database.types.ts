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
      cars: {
        Row: {
          brand: string | null
          description: string | null
          id: number
          images: string | null
          model: string | null
          price: number | null
        }
        Insert: {
          brand?: string | null
          description?: string | null
          id?: number
          images?: string | null
          model?: string | null
          price?: number | null
        }
        Update: {
          brand?: string | null
          description?: string | null
          id?: number
          images?: string | null
          model?: string | null
          price?: number | null
        }
        Relationships: []
      }
      db_employees: {
        Row: {
          description: string | null
          email: string | null
          id: number
          image: string | null
          name: string | null
          phone: number | null
        }
        Insert: {
          description?: string | null
          email?: string | null
          id?: number
          image?: string | null
          name?: string | null
          phone?: number | null
        }
        Update: {
          description?: string | null
          email?: string | null
          id?: number
          image?: string | null
          name?: string | null
          phone?: number | null
        }
        Relationships: []
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
