import { useState, useEffect } from 'react';
import { ArrowUpRight, Github, FolderGit2, AlertCircle, RefreshCw, Database } from 'lucide-react';
import { Project } from '../types';
import { fetchProjects } from '../lib/supabase';
import ImageWithFallback from './ImageWithFallback';

interface ProjectsProps {
  onOpenDatabaseHelper?: () => void;
}

export default function Projects({ onOpenDatabaseHelper }: ProjectsProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadProjects = async () => {
    setIsLoading(true);
    setError(null);
    const { data, error: err } = await fetchProjects();
    if (err) {
      setError(err.message);
    } else {
      setProjects(data);
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans text-[#5f5e5e] dark:text-[#a8a29e] hover:text-[#1b1c1a] dark:hover:text-[#f2f0ed] border border-[#e5e0d8] dark:border-[#2a2b28] bg-[#f5f3f0] dark:bg-[#191a18] transition-colors disabled:opacity-50"
              title="Refresh projects list from Supabase"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>

            {onOpenDatabaseHelper && (
              <button
                onClick={onOpenDatabaseHelper}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans font-medium text-[#9f3c16] dark:text-[#e06c43] border border-[#9f3c16]/30 dark:border-[#e06c43]/30 hover:bg-[#9f3c16]/5 dark:hover:bg-[#e06c43]/10 transition-colors"
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
                <div className="p-8 space-y-4">
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

        {/* Error State */}
        {!isLoading && error && (
          <div className="p-8 border border-red-300 dark:border-red-900/60 bg-red-50/50 dark:bg-red-950/20 text-center max-w-lg mx-auto">
            <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 mx-auto mb-2" />
            <h3 className="font-serif text-lg text-[#1b1c1a] dark:text-[#f2f0ed]">
              Could not load projects from Supabase
            </h3>
            <p className="text-xs text-[#5f5e5e] dark:text-[#a8a29e] mt-1 mb-4">
              {error}
            </p>
            <button
              onClick={loadProjects}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#1b1c1a] hover:bg-[#9f3c16] transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retry Query</span>
            </button>
          </div>
        )}

        {/* Empty State: Friendly "Projects coming soon" */}
        {!isLoading && !error && projects.length === 0 && (
          <div className="border border-[#e5e0d8] dark:border-[#2a2b28] bg-[#f5f3f0] dark:bg-[#191a18] p-10 md:p-14 text-center max-w-2xl mx-auto">
            <div className="w-10 h-10 border border-[#e5e0d8] dark:border-[#2a2b28] bg-white dark:bg-[#171816] text-[#9f3c16] dark:text-[#e06c43] flex items-center justify-center mx-auto mb-4">
              <FolderGit2 className="w-5 h-5" />
            </div>

            <h3 className="font-serif text-2xl text-[#1b1c1a] dark:text-[#f2f0ed]">
              Projects coming soon
            </h3>

            <p className="text-sm text-[#5f5e5e] dark:text-[#a8a29e] mt-2 max-w-md mx-auto leading-relaxed">
              I'm currently building my first set of projects at NIAT. In the meantime, you can explore my active repositories and commits directly on GitHub.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://github.com/charangollahosuru4202-droid"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#1b1c1a] hover:bg-[#9f3c16] dark:bg-[#f2f0ed] dark:text-[#121312] dark:hover:bg-[#e06c43] dark:hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Visit My GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {onOpenDatabaseHelper && (
                <button
                  onClick={onOpenDatabaseHelper}
                  className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#1b1c1a] dark:text-[#f2f0ed] border border-[#1b1c1a] dark:border-[#f2f0ed] hover:bg-[#1b1c1a] hover:text-[#FAF8F5] dark:hover:bg-[#f2f0ed] dark:hover:text-[#121312] transition-colors"
                >
                  <Database className="w-3.5 h-3.5" />
                  <span>Configure Supabase Tables</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Populated Projects Grid (Editorial 2-Column Cards) */}
        {!isLoading && !error && projects.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {projects.map((project) => (
              <article
                key={project.id}
                className="flex flex-col border border-[#e5e0d8] dark:border-[#2a2b28] bg-white dark:bg-[#171816] group hover:border-[#1b1c1a] dark:hover:border-[#f2f0ed] transition-colors"
              >
                {/* Media frame */}
                <div className="p-4 border-b border-[#e5e0d8] dark:border-[#2a2b28] bg-[#f5f3f0] dark:bg-[#191a18]">
                  <div className="overflow-hidden aspect-[16/9] border border-[#e5e0d8] dark:border-[#2a2b28] bg-[#efeeeb] dark:bg-[#1d1f1b]">
                    <ImageWithFallback
                      src={project.image_url || '/images/project-placeholder.svg'}
                      fallbackSrc="/images/project-placeholder.svg"
                      alt={`Interface preview for ${project.title}`}
                      aspectRatioClass="aspect-[16/9]"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex flex-col justify-between flex-1 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-baseline justify-between">
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

                    {/* Links */}
                    <div className="flex items-center gap-4 shrink-0">
                      {project.live_url && (
                        <a
                          href={project.live_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#9f3c16] dark:text-[#e06c43] hover:underline"
                        >
                          <span>Live</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.github_url && (
                        <a
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#1b1c1a] dark:text-[#f2f0ed] hover:text-[#9f3c16] dark:hover:text-[#e06c43] transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
