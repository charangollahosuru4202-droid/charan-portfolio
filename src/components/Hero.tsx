import { ArrowDown, ArrowUpRight, Github } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

export default function Hero() {
  return (
    <section className="w-full border-b border-[#e5e0d8] dark:border-[#2a2b28] pb-16 pt-24 lg:pb-24 lg:pt-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8 lg:space-y-10">
            <div className="space-y-6">
              {/* Status / Kicker */}
              <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#f5f3f0] dark:bg-[#1b1c1a] border border-[#e5e0d8] dark:border-[#2a2b28]">
                <span className="w-2 h-2 rounded-full bg-[#9f3c16] dark:bg-[#e06c43] inline-block"></span>
                <span className="text-[11px] uppercase tracking-widest text-[#1b1c1a] dark:text-[#f2f0ed] font-medium">
                  First-Year B.Tech Student · NIAT, Tamil Nadu
                </span>
              </div>

              {/* Massive Editorial Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1b1c1a] dark:text-[#f2f0ed] leading-[1.08] tracking-tight">
                Hi, I'm Charan — I build practical websites with AI tools.
              </h1>

              {/* Plain-English Intro */}
              <p className="text-base sm:text-lg text-[#5f5e5e] dark:text-[#a8a29e] max-w-xl leading-relaxed">
                I'm a first-year engineering student at NIAT, where we learn practical skills by building real projects and turning ideas into working, deployed products.
              </p>
            </div>

            {/* Metadata Matrix */}
            <div className="pt-6 border-t border-[#e5e0d8] dark:border-[#2a2b28] grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#5f5e5e] dark:text-[#a8a29e] mb-1">
                  Location
                </p>
                <p className="text-sm text-[#1b1c1a] dark:text-[#f2f0ed] font-medium">
                  Tamil Nadu, India
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#5f5e5e] dark:text-[#a8a29e] mb-1">
                  Education
                </p>
                <p className="text-sm text-[#1b1c1a] dark:text-[#f2f0ed] font-medium">
                  NIAT (Joy University)
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#5f5e5e] dark:text-[#a8a29e] mb-1">
                  Focus
                </p>
                <p className="text-sm text-[#1b1c1a] dark:text-[#f2f0ed] font-medium">
                  Web Dev &amp; AI Tools
                </p>
              </div>
            </div>

            {/* Actions (0px radius editorial buttons) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3.5 bg-[#1b1c1a] text-[#FAF8F5] dark:bg-[#f2f0ed] dark:text-[#121312] text-xs font-semibold uppercase tracking-wider hover:bg-[#9f3c16] dark:hover:bg-[#e06c43] dark:hover:text-white transition-colors flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://github.com/charangollahosuru4202-droid"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-[#1b1c1a] dark:border-[#f2f0ed] text-[#1b1c1a] dark:text-[#f2f0ed] text-xs font-semibold uppercase tracking-wider hover:bg-[#1b1c1a] hover:text-[#FAF8F5] dark:hover:bg-[#f2f0ed] dark:hover:text-[#121312] transition-colors flex items-center gap-2"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="border border-[#e5e0d8] dark:border-[#2a2b28] p-2 bg-[#ffffff] dark:bg-[#171816]">
              <div className="relative overflow-hidden aspect-[3/4] bg-[#efeeeb] dark:bg-[#1d1f1b]">
                <ImageWithFallback
                  src="/assets/aistudio/CHARAN_1adf79ea.jpeg"
                  fallbackSrc="/images/profile.jpg"
                  alt="Portrait of Golla Hosuru Charan at NIAT"
                  aspectRatioClass="aspect-[3/4]"
                  loading="eager"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
            <p className="text-[11px] text-[#5f5e5e] dark:text-[#a8a29e] mt-3 pl-1 tracking-normal">
              Golla Hosuru Charan in Tamil Nadu — First-year engineering student, web developer, builder.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
