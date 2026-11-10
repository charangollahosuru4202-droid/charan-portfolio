import { useState, useEffect } from 'react';
import { RefreshCw, AlertCircle } from 'lucide-react';
import { Skill } from '../types';
import { fetchSkills } from '../lib/supabase';

interface FoundationSkill {
  name: string;
  category: 'Frontend' | 'Tools' | 'Learning';
  tag: string;
}

const DEFAULT_HONEST_SKILLS: FoundationSkill[] = [
  // Frontend
  { name: 'HTML5 & CSS3', category: 'Frontend', tag: 'Semantic' },
  { name: 'JavaScript', category: 'Frontend', tag: 'ES2022+' },
  { name: 'React', category: 'Frontend', tag: 'v19 SPA' },
  { name: 'Tailwind CSS', category: 'Frontend', tag: 'Utility-first' },
  // Tools
  { name: 'Vite', category: 'Tools', tag: 'Bundler' },
  { name: 'Git & GitHub', category: 'Tools', tag: 'VCS' },
  { name: 'AI Coding Tools', category: 'Tools', tag: 'Workflow' },
  { name: 'VS Code', category: 'Tools', tag: 'Editor' },
  // Learning
  { name: 'TypeScript', category: 'Learning', tag: 'Type safety' },
  { name: 'Backend APIs', category: 'Learning', tag: 'Express / REST' },
  { name: 'Supabase', category: 'Learning', tag: 'Postgres & Auth' },
  { name: 'Product Deployment', category: 'Learning', tag: 'Cloud & Hosting' },
];

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadSkills = async () => {
    setIsLoading(true);
    setError(null);
    const { data, error: err } = await fetchSkills();
    if (err) {
      setError(err.message);
    } else {
      setSkills(data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadSkills();
  }, []);

  const categories = [
    {
      id: 'Frontend',
      title: 'Frontend & UI',
      description: 'Building accessible, fast, and structured interfaces.',
    },
    {
      id: 'Tools',
      title: 'Tools & Workflow',
      description: 'Modern development tools, version control, and AI workflows.',
    },
    {
      id: 'Learning',
      title: 'Currently Learning',
      description: 'Applied technical topics studied at NIAT in Tamil Nadu.',
    },
  ];

  return (
    <section id="skills" className="w-full border-b border-[#e5e0d8] dark:border-[#2a2b28] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#e5e0d8] dark:border-[#2a2b28] gap-4">
          <div>
            <span className="text-[11px] font-sans uppercase tracking-widest text-[#9f3c16] dark:text-[#e06c43] font-semibold block mb-2">
              03 / SKILLS &amp; CRAFT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1b1c1a] dark:text-[#f2f0ed]">
              A simple index of technical capabilities
            </h2>
          </div>

          <button
            onClick={loadSkills}
            disabled={isLoading}
            className="self-start md:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans text-[#5f5e5e] dark:text-[#a8a29e] hover:text-[#1b1c1a] dark:hover:text-[#f2f0ed] border border-[#e5e0d8] dark:border-[#2a2b28] bg-[#f5f3f0] dark:bg-[#191a18] transition-colors disabled:opacity-50"
            title="Refresh skills from Supabase"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
        </div>

        {/* Loading Skeletons */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-6 animate-pulse">
                <div className="h-6 bg-[#e5e0d8] dark:bg-[#2a2b28] w-1/2" />
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((j) => (
                    <div key={j} className="h-8 bg-[#e5e0d8] dark:bg-[#2a2b28]" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error Notice */}
        {!isLoading && error && (
          <div className="mb-8 p-4 border border-amber-300 dark:border-amber-900/60 bg-amber-50/50 dark:bg-amber-950/20 text-xs text-[#57423b] dark:text-[#a8a29e] flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Supabase skills notice: {error}. Showing foundational curriculum skills.</span>
          </div>
        )}

        {/* 3-Column Editorial List matching template */}
        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {categories.map((cat) => {
              // Combine Supabase skills or default foundation skills
              const dbItems = skills.filter(
                (s) => s.category?.toLowerCase() === cat.id.toLowerCase()
              );
              const defaultItems = DEFAULT_HONEST_SKILLS.filter(
                (s) => s.category.toLowerCase() === cat.id.toLowerCase()
              );
              const displayItems = dbItems.length > 0 ? dbItems : defaultItems;

              return (
                <div key={cat.id} className="space-y-6">
                  {/* Column Header */}
                  <div className="pb-3 border-b border-[#1b1c1a] dark:border-[#f2f0ed] flex items-baseline justify-between">
                    <div>
                      <h3 className="font-serif text-xl text-[#1b1c1a] dark:text-[#f2f0ed]">
                        {cat.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-sans uppercase tracking-widest text-[#5f5e5e] dark:text-[#a8a29e]">
                      {String(displayItems.length).padStart(2, '0')} items
                    </span>
                  </div>

                  <p className="text-xs text-[#5f5e5e] dark:text-[#a8a29e]">
                    {cat.description}
                  </p>

                  {/* List items with hairline dividers and right tags */}
                  <ul className="space-y-3 text-sm text-[#1b1c1a] dark:text-[#f2f0ed]">
                    {displayItems.map((item, idx) => {
                      const tagName = 'tag' in item ? (item as FoundationSkill).tag : 'Applied';
                      return (
                        <li
                          key={item.name + idx}
                          className="flex items-center justify-between pb-2.5 border-b border-[#e5e0d8] dark:border-[#2a2b28] hover:border-[#9f3c16] transition-colors"
                        >
                          <span className="font-medium">{item.name}</span>
                          <span className="text-[11px] text-[#5f5e5e] dark:text-[#a8a29e] font-mono">
                            {tagName}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
