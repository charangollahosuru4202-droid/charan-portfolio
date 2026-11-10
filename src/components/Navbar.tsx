import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'about' | 'projects' | 'skills' | 'contact'>('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['contact', 'skills', 'projects', 'about'] as const;
      const scrollPos = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Selected Work', href: '#projects' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fbf9f6]/95 dark:bg-[#121312]/95 backdrop-blur-xs border-b border-[#e5e0d8] dark:border-[#2a2b28] transition-colors">
      <div className="h-16 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Zone */}
        <div className="flex items-center gap-6">
          <a href="#" className="group flex items-baseline gap-2">
            <span className="text-xl font-serif tracking-tight text-[#1b1c1a] dark:text-[#f2f0ed]">
              Charan
            </span>
            <span className="hidden sm:inline-block text-[11px] font-sans uppercase tracking-widest text-[#5f5e5e] dark:text-[#a8a29e]">
              — B.Tech Student &amp; AI Builder
            </span>
          </a>

          <div className="hidden xl:flex items-center gap-2 pl-4 border-l border-[#e5e0d8] dark:border-[#2a2b28]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9f3c16] dark:bg-[#e06c43] inline-block"></span>
            <span className="text-[11px] text-[#57423b] dark:text-[#a8a29e]">
              NIAT, Tamil Nadu
            </span>
          </div>
        </div>

        {/* Nav Links & Actions */}
        <div className="flex items-center gap-6 lg:gap-8">
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`pb-0.5 text-xs font-medium tracking-wide transition-colors ${
                    isActive
                      ? 'text-[#1b1c1a] dark:text-[#f2f0ed] font-semibold border-b border-[#1b1c1a] dark:border-[#f2f0ed]'
                      : 'text-[#5f5e5e] dark:text-[#a8a29e] hover:text-[#1b1c1a] dark:hover:text-[#f2f0ed]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 pl-4 border-l border-[#e5e0d8] dark:border-[#2a2b28]">
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 text-[#5f5e5e] hover:text-[#1b1c1a] dark:text-[#a8a29e] dark:hover:text-[#f2f0ed] transition-colors"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Direct Email Action */}
            <a
              href="mailto:charangollahosuru4202@gmail.com"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#1A1A1A] hover:bg-[#9f3c16] dark:bg-[#f2f0ed] dark:text-[#121312] dark:hover:bg-[#e06c43] dark:hover:text-white transition-colors"
            >
              <span>Say Hello</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
              className="md:hidden p-2 text-[#1b1c1a] dark:text-[#f2f0ed]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fbf9f6] dark:bg-[#121312] border-b border-[#e5e0d8] dark:border-[#2a2b28] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-[#1b1c1a] dark:text-[#f2f0ed] border-b border-[#e5e0d8]/50 dark:border-[#2a2b28]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="mailto:charangollahosuru4202@gmail.com"
              className="block w-full py-2.5 text-center text-xs uppercase tracking-wider font-semibold text-white bg-[#1A1A1A] hover:bg-[#9f3c16]"
            >
              charangollahosuru4202@gmail.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
