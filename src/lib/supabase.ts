import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type for contact submissions
export interface ContactSubmission {
  id?: string;
  created_at?: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service_type?: string;
  budget?: string;
  timeline?: string;
  description?: string;
  status?: string;
  notes?: string;
}
