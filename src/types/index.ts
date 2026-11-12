export interface Project {
  id: string | number;
  title: string;
  description: string;
  image_url?: string | null;
  tech_stack: string[];
  live_url?: string | null;
  github_url?: string | null;
  featured?: boolean;
  sort_order?: number;
  created_at?: string;
  what_i_learned?: string | null;
}

export type SkillCategory = 'Frontend' | 'Tools' | 'Learning' | string;

export interface Skill {
  id: string | number;
  name: string;
  category: SkillCategory;
  sort_order?: number;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  created_at?: string;
}

export interface ToastNotification {
  type: 'success' | 'error' | 'info';
  message: string;
}
