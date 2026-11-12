import { useState, useEffect } from 'react';
import { ArrowUpRight, Github, AlertCircle, RefreshCw, Database } from 'lucide-react';
import { Project } from '../types';
import { fetchProjects } from '../lib/supabase';
import ImageWithFallback from './ImageWithFallback';

interface ProjectsProps {
  onOpenDatabaseHelper?: () => void;
}

const DEFAULT_PROJECTS: Project[] = [
  {
    id: 'todo-list-app',
    title: 'To-Do List App',
    description:
      'A task manager with secure login where each user has their own private tasks. Supports priorities, categories, due dates, search, filters, drag-and-drop ordering and a progress tracker.',
    what_i_learned:
      'Learned authentication, database design, row-level security and deployment.',
    tech_stack: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'Vercel'],
    live_url: 'https://tws-sepia.vercel.app/',
    github_url: 'https://github.com/charangollahosuru4202-droid/TWS',
    image_url: '/images/todo-app.webp',
    featured: true,
    sort_order: 1,
  },
];

export default function Projects({ onOpenDatabaseHelper }: ProjectsProps) {
  const [projects, setProjects] = useState<Project[]>(DEFAULT_PROJECTS);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadProjects = async () => {
    setIsLoading(true);
    setError(null);
    const { data, error: err } = await fetchProjects();
    if (err) {
      setError(err.message);
      // Fallback to default featured projects when database is unreachable
      setProjects(DEFAULT_PROJECTS);
    } else if (data && data.length > 0) {
      // Loaded from Supabase table
      setProjects(data);
    } else {
      // Empty Supabase table fallback
      setProjects(DEFAULT_PROJECTS);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <section id="projects" className="w-full border-b border-[#e5e0d8] dark:border-[#2a2b28] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#e5e0d8] dark:border-[#2a2b28] gap-4">
          <div>
            <span className="text-[11px] font-sans uppercase tracking-widest text-[#9f3c16] dark:text-[#e06c43] font-semibold block mb-2">
              02 / SELECTED WORK
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1b1c1a] dark:text-[#f2f0ed] leading-tight">
              Projects &amp; Experiments
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadProjects}
              disabled={isLoading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans text-[#5f5e5e] dark:text-[#a8a29e] hover:text-[#1b1c1a] dark:hover:text-[#f2f0ed] border border-[#e5e0d8] dark:border-[#2a2b28] bg-[#f5f3f0] dark:bg-[#191a18] transition-colors disabled:opacity-50 cursor-pointer"
              title="Refresh projects list from Supabase"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>

            {onOpenDatabaseHelper && (
              <button
                onClick={onOpenDatabaseHelper}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans font-medium text-[#9f3c16] dark:text-[#e06c43] border border-[#9f3c16]/30 dark:border-[#e06c43]/30 hover:bg-[#9f3c16]/5 dark:hover:bg-[#e06c43]/10 transition-colors cursor-pointer"
              >
                <Database className="w-3.5 h-3.5" />
                <span>Supabase SQL</span>
              </button>
            )}
          </div>
        </div>

        {/* Loading Skeletons */}
        {isLoading && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="flex flex-col border border-[#e5e0d8] dark:border-[#2a2b28] bg-white dark:bg-[#171816] animate-pulse"
              >
                <div className="p-4 border-b border-[#e5e0d8] dark:border-[#2a2b28] bg-[#f5f3f0] dark:bg-[#191a18]">
                  <div className="aspect-[16/9] bg-[#e5e0d8] dark:bg-[#2a2b28]" />
                </div>
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="h-4 bg-[#e5e0d8] dark:bg-[#2a2b28] w-1/4" />
                  <div className="h-6 bg-[#e5e0d8] dark:bg-[#2a2b28] w-3/4" />
                  <div className="h-4 bg-[#e5e0d8] dark:bg-[#2a2b28] w-full" />
                  <div className="pt-6 border-t border-[#e5e0d8] dark:border-[#2a2b28] flex gap-2">
                    <div className="h-5 bg-[#e5e0d8] dark:bg-[#2a2b28] w-16" />
                    <div className="h-5 bg-[#e5e0d8] dark:bg-[#2a2b28] w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error Notice */}
        {!isLoading && error && (
          <div className="mb-8 p-4 border border-amber-300 dark:border-amber-900/60 bg-amber-50/50 dark:bg-amber-950/20 text-center max-w-lg mx-auto">
            <div className="flex items-center justify-center gap-2 text-amber-700 dark:text-amber-400 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Could not connect to Supabase: {error}. Displaying featured project.</span>
            </div>
          </div>
        )}

        {/* Projects Grid (Responsive 1-col on mobile/tablet, 2-cols on desktop) */}
        {!isLoading && projects.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {projects.map((project) => {
              const learnedText =
                project.what_i_learned ||
                (project.title?.toLowerCase().includes('to-do')
                  ? 'Learned authentication, database design, row-level security and deployment.'
                  : null);

              return (
                <article
                  key={project.id}
                  className="flex flex-col border border-[#e5e0d8] dark:border-[#2a2b28] bg-white dark:bg-[#171816] group hover:border-[#1b1c1a] dark:hover:border-[#f2f0ed] transition-colors"
                >
                  {/* Media Frame with fixed 16/9 aspect ratio and matching border */}
                  <div className="p-4 border-b border-[#e5e0d8] dark:border-[#2a2b28] bg-[#f5f3f0] dark:bg-[#191a18]">
                    <div className="overflow-hidden aspect-[16/9] border border-[#e5e0d8] dark:border-[#2a2b28] bg-[#efeeeb] dark:bg-[#1d1f1b]">
                      <ImageWithFallback
                        src={project.image_url || '/images/todo-app.webp'}
                        fallbackSrc="/images/todo-app.png"
                        alt={`Screenshot of ${project.title} - ${project.description}`}
                        aspectRatioClass="aspect-[16/9]"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-[11px] font-sans uppercase tracking-widest text-[#9f3c16] dark:text-[#e06c43] font-semibold">
                          2026
                        </span>
                        {project.featured && (
                          <span className="text-[11px] font-sans uppercase tracking-wider text-[#5f5e5e] dark:text-[#a8a29e]">
                            Featured Project
                          </span>
                        )}
                      </div>

                      <div>
                        <h3 className="font-serif text-2xl text-[#1b1c1a] dark:text-[#f2f0ed] group-hover:text-[#9f3c16] dark:group-hover:text-[#e06c43] transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-sm text-[#57423b] dark:text-[#a8a29e] leading-relaxed">
                        {project.description}
                      </p>

                      {/* What I learned callout */}
                      {learnedText && (
                        <div className="pt-3 border-t border-[#e5e0d8]/70 dark:border-[#2a2b28]/70 text-xs text-[#57423b] dark:text-[#a8a29e] leading-relaxed">
                          <span className="font-semibold text-[#1b1c1a] dark:text-[#f2f0ed]">
                            What I learned:{' '}
                          </span>
                          <span>{learnedText}</span>
                        </div>
                      )}
                    </div>

                    <div className="pt-6 border-t border-[#e5e0d8] dark:border-[#2a2b28] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      {/* Tech Stack Chips (Sharp 0px radius matching template) */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech_stack?.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 bg-[#f5f3f0] dark:bg-[#1f201e] text-[#5f5e5e] dark:text-[#a8a29e] text-[11px] border border-[#e5e0d8] dark:border-[#2a2b28]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons: Live Demo and GitHub */}
                      <div className="flex items-center gap-4 shrink-0">
                        {project.live_url && (
                          <a
                            href={project.live_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#9f3c16] dark:text-[#e06c43] hover:underline"
                          >
                            <span>Live Demo</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}

                        {project.github_url && (
                          <a
                            href={project.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1b1c1a] dark:text-[#f2f0ed] hover:text-[#9f3c16] dark:hover:text-[#e06c43] transition-colors"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>GitHub</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
