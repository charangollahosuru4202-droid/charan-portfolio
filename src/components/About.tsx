import ImageWithFallback from './ImageWithFallback';

export default function About() {
  const currentlyItems = [
    {
      num: '01',
      title: 'Studying at NIAT',
      description: 'First-year B.Tech engineering student in collaboration with Joy University, learning through practical project-building.',
    },
    {
      num: '02',
      title: 'Learning web development with AI',
      description: 'Mastering modern frontend tools, full-stack workflows, and AI assistants to turn ideas into deployed products.',
    },
    {
      num: '03',
      title: 'Based in Tamil Nadu',
      description: 'Living, studying, and developing web applications in Tamil Nadu, India.',
    },
  ];

  return (
    <section id="about" className="w-full border-b border-[#e5e0d8] dark:border-[#2a2b28] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Side (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <span className="text-[11px] font-sans uppercase tracking-widest text-[#9f3c16] dark:text-[#e06c43] font-semibold block mb-3">
                01 / ABOUT
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1b1c1a] dark:text-[#f2f0ed] leading-tight tracking-tight">
                Bridging curiosity and practical engineering.
              </h2>
            </div>

            <div className="space-y-3 pt-4 lg:pt-0">
              <div className="border border-[#e5e0d8] dark:border-[#2a2b28] p-2 bg-[#ffffff] dark:bg-[#171816]">
                <div className="overflow-hidden aspect-[4/3] bg-[#efeeeb] dark:bg-[#1d1f1b]">
                  <ImageWithFallback
                    src="/images/about.jpg"
                    fallbackSrc="/images/about.svg"
                    alt="Desk setup at NIAT engineering campus with code and notes"
                    aspectRatioClass="aspect-[4/3]"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-[11px] text-[#5f5e5e] dark:text-[#a8a29e] pl-1">
                Workspace at NIAT, Tamil Nadu: code, experimentation, and web development.
              </p>
            </div>
          </div>

          {/* Right Side (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-10">
            {/* Plain-English Narrative */}
            <div className="space-y-5 text-[#1b1c1a] dark:text-[#f2f0ed]">
              <p className="text-lg leading-relaxed text-[#1b1c1a] dark:text-[#f2f0ed]">
                I'm a first-year engineering student at NIAT, where we learn practical skills by building real projects.
              </p>
              <p className="text-base leading-relaxed text-[#5f5e5e] dark:text-[#a8a29e]">
                I build websites using AI tools, and I'm learning how to turn ideas into working, deployed products. I'm always improving my skills and building something new.
              </p>
              <p className="text-sm leading-relaxed text-[#5f5e5e] dark:text-[#a8a29e]">
                NIAT operates in collaboration with Joy University, emphasizing hands-on computer science, project-based learning, and rapid implementation.
              </p>
            </div>

            {/* Currently / Core Focus Callouts matching template */}
            <div className="border-t border-[#e5e0d8] dark:border-[#2a2b28] pt-8 space-y-4">
              <p className="text-[11px] font-sans uppercase tracking-widest text-[#5f5e5e] dark:text-[#a8a29e] mb-4">
                Currently
              </p>

              {currentlyItems.map((item) => (
                <div
                  key={item.num}
                  className="p-6 bg-[#f5f3f0] dark:bg-[#191a18] border border-[#e5e0d8] dark:border-[#2a2b28] space-y-1.5 transition-colors hover:border-[#1b1c1a] dark:hover:border-[#f2f0ed]"
                >
                  <h3 className="font-serif text-xl text-[#1b1c1a] dark:text-[#f2f0ed] flex items-center justify-between">
                    <span>{item.title}</span>
                    <span className="text-xs font-sans text-[#9f3c16] dark:text-[#e06c43] uppercase tracking-widest font-semibold">
                      {item.num}
                    </span>
                  </h3>
                  <p className="text-sm text-[#5f5e5e] dark:text-[#a8a29e] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
