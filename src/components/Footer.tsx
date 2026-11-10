import { ArrowUp, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#f5f3f0] dark:bg-[#151614] border-t border-[#e5e0d8] dark:border-[#2a2b28] transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Bio */}
          <div className="space-y-3">
            <p className="font-serif text-2xl text-[#1b1c1a] dark:text-[#f2f0ed]">
              Golla Hosuru Charan
            </p>
            <p className="text-xs text-[#57423b] dark:text-[#a8a29e] leading-relaxed">
              First-year B.Tech engineering student at NIAT (in collaboration with Joy University), learning web development and building websites with AI tools.
            </p>
          </div>

          {/* Location & Status */}
          <div className="space-y-3">
            <p className="text-[11px] font-sans uppercase tracking-widest text-[#5f5e5e] dark:text-[#a8a29e] font-semibold">
              Origin &amp; Campus
            </p>
            <p className="text-sm font-medium text-[#1b1c1a] dark:text-[#f2f0ed]">
              Tamil Nadu, India
            </p>
            <p className="text-xs text-[#5f5e5e] dark:text-[#a8a29e]">
              NIAT / Joy University · IST (UTC+5:30)
            </p>
          </div>

          {/* Network Links */}
          <div className="space-y-3">
            <p className="text-[11px] font-sans uppercase tracking-widest text-[#5f5e5e] dark:text-[#a8a29e] font-semibold">
              Network
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://github.com/charangollahosuru4202-droid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#57423b] dark:text-[#a8a29e] hover:text-[#9f3c16] dark:hover:text-[#e06c43] transition-colors flex items-center gap-1.5 underline decoration-[#dec0b7] underline-offset-4"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/golla-hosuru-charan-260622439/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#57423b] dark:text-[#a8a29e] hover:text-[#9f3c16] dark:hover:text-[#e06c43] transition-colors flex items-center gap-1.5 underline decoration-[#dec0b7] underline-offset-4"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:charangollahosuru4202@gmail.com"
                  className="text-[#57423b] dark:text-[#a8a29e] hover:text-[#9f3c16] dark:hover:text-[#e06c43] transition-colors flex items-center gap-1.5 underline decoration-[#dec0b7] underline-offset-4"
                >
                  <span>Electronic Mail</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Colophon & Back to top */}
          <div className="space-y-3 flex flex-col justify-between">
            <div>
              <p className="text-[11px] font-sans uppercase tracking-widest text-[#5f5e5e] dark:text-[#a8a29e] font-semibold mb-2">
                Colophon
              </p>
              <p className="text-xs text-[#57423b] dark:text-[#a8a29e] leading-relaxed mb-3">
                Set in Newsreader and Plus Jakarta Sans. Designed with strict hairlines and warm editorial craft.
              </p>
              <p className="text-[11px] text-[#767169] dark:text-[#88857f]">
                © 2026 Golla Hosuru Charan. All rights reserved.
              </p>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#1b1c1a] dark:text-[#f2f0ed] hover:text-[#9f3c16] dark:hover:text-[#e06c43] transition-colors pt-2"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
