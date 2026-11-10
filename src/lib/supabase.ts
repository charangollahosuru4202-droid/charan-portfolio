import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Project, Skill, ContactMessage } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  supabaseUrl.startsWith('http') &&
  !supabaseUrl.includes('your-project')
);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Fetch projects from Supabase.
 * Returns empty array if not configured or table has no rows.
 */
export async function fetchProjects(): Promise<{ data: Project[]; error: Error | null }> {
  if (!supabase || !isSupabaseConfigured) {
    // Graceful empty state when Supabase credentials haven't been provided yet
    return { data: [], error: null };
  }

  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error) {
      console.warn('Supabase projects fetch error:', error.message);
      return { data: [], error: new Error(error.message) };
    }

    return { data: (data as Project[]) || [], error: null };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to fetch projects';
    return { data: [], error: new Error(message) };
  }
}

/**
 * Fetch skills from Supabase.
 * Returns empty array if not configured or table has no rows.
 */
export async function fetchSkills(): Promise<{ data: Skill[]; error: Error | null }> {
  if (!supabase || !isSupabaseConfigured) {
    return { data: [], error: null };
  }

  try {
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error) {
      console.warn('Supabase skills fetch error:', error.message);
      return { data: [], error: new Error(error.message) };
    }

    return { data: (data as Skill[]) || [], error: null };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to fetch skills';
    return { data: [], error: new Error(message) };
  }
}

/**
 * Submit contact message to Supabase 'messages' table.
 */
export async function insertContactMessage(msg: ContactMessage): Promise<{ success: boolean; error: string | null }> {
  if (!supabase || !isSupabaseConfigured) {
    // If Supabase is not configured yet, save locally so message is not lost and alert the user
    try {
      const stored = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
      stored.push({ ...msg, created_at: new Date().toISOString() });
      localStorage.setItem('portfolio_messages', JSON.stringify(stored));
      return {
        success: true,
        error: null,
      };
    } catch (e) {
      return { success: false, error: 'Could not store message locally' };
    }
  }

  try {
    const { error } = await supabase
      .from('messages')
      .insert([{
        name: msg.name.trim(),
        email: msg.email.trim(),
        message: msg.message.trim(),
      }]);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, error: null };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to send message';
    return { success: false, error: message };
  }
}

/**
 * SQL Schema for Supabase Setup Helper
 */
export const SUPABASE_SQL_SETUP = `-- Run this in Supabase SQL Editor:

-- 1. Projects table
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  tech_stack TEXT[] DEFAULT '{}',
  live_url TEXT,
  github_url TEXT,
  featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access to projects" ON public.projects FOR SELECT USING (true);

-- 2. Skills table
CREATE TABLE IF NOT EXISTS public.skills (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL, -- 'Frontend', 'Tools', 'Learning'
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access to skills" ON public.skills FOR SELECT USING (true);

-- 3. Messages table
CREATE TABLE IF NOT EXISTS public.messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anonymous insert to messages" ON public.messages FOR INSERT WITH CHECK (true);

-- Sample initial skills for Charan
INSERT INTO public.skills (name, category, sort_order) VALUES
  ('HTML5 & CSS3', 'Frontend', 1),
  ('JavaScript', 'Frontend', 2),
  ('React', 'Frontend', 3),
  ('Tailwind CSS', 'Frontend', 4),
  ('Vite', 'Tools', 1),
  ('Git & GitHub', 'Tools', 2),
  ('AI Coding Assistants', 'Tools', 3),
  ('VS Code', 'Tools', 4),
  ('TypeScript', 'Learning', 1),
  ('Backend APIs & Express', 'Learning', 2),
  ('Supabase & Databases', 'Learning', 3),
  ('Product Deployment', 'Learning', 4)
ON CONFLICT DO NOTHING;
`;
