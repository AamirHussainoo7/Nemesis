import { ArrowRight, Circle } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col pt-16 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 60% 40%, rgba(201,169,110,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col">
        {/* Label */}
        <div className="flex items-center gap-2.5 mt-12 mb-8 reveal-on-scroll">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-nemesis-border bg-nemesis-surface">
            <span className="w-1.5 h-1.5 rounded-full bg-nemesis-gold animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-nemesis-gold font-medium">
              AI-Powered Interior Design
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-8 flex-1 pb-16">
          {/* ——— Left: Copy ——— */}
          <div className="lg:w-[42%] xl:w-[38%] flex-shrink-0 reveal-on-scroll">
            <h1
              id="hero-heading"
              className="font-display leading-[1.04] tracking-tight text-nemesis-ivory mb-6"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.6rem)' }}
            >
              Turn any room photo into a photorealistic,{' '}
              <span
                className="italic"
                style={{
                  color: '#C9A96E',
                  textShadow: '0 0 40px rgba(201,169,110,0.3)',
                }}
              >
                shoppable design.
              </span>
            </h1>

            <p className="text-nemesis-ivory-dim text-base lg:text-lg leading-relaxed mb-8 max-w-md">
              Restyle your space with AI while preserving its architecture. Discover
              furniture and decor you love — and shop them directly.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <button
                id="hero-cta-primary"
                onClick={() => scrollToSection('how-it-works')}
                className="btn-primary text-base px-7 py-3.5"
              >
                Try Nemesis Interiors
                <ArrowRight size={16} />
              </button>
              <button
                id="hero-cta-secondary"
                onClick={() => scrollToSection('how-it-works')}
                className="btn-secondary text-base px-7 py-3.5"
              >
                See how it works
                <Circle size={10} />
              </button>
            </div>

            {/* Honest attribution */}
            <div className="flex items-center gap-3 pt-5 border-t border-nemesis-border">
              <div className="flex gap-1">
                {['◈', '◉', '◇'].map((s, i) => (
                  <span key={i} className="w-7 h-7 rounded-full bg-nemesis-surface border border-nemesis-border
                                           flex items-center justify-center text-nemesis-gold text-xs">
                    {s}
                  </span>
                ))}
              </div>
              <p className="text-nemesis-muted text-xs leading-snug">
                Built for the{' '}
                <span className="text-nemesis-ivory-dim font-medium">
                  Acdyon Technologies Engineering Challenge
                </span>
              </p>
            </div>
          </div>

          {/* ——— Right: Interactive Visual ——— */}
          <div className="w-full lg:flex-1 reveal-on-scroll" style={{ transitionDelay: '150ms' }}>
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                aspectRatio: '16/11',
                boxShadow: '0 0 0 1px rgba(201,169,110,0.12), 0 32px 80px rgba(0,0,0,0.7), 0 0 60px rgba(201,169,110,0.04)',
              }}
            >
              <BeforeAfterSlider
                beforeSrc="/assets/before-room.jpg"
                afterSrc="/assets/after-room.jpg"
                beforeAlt="Empty architectural room with wall molding and warm wooden floor"
                afterAlt="Same room transformed into a Scandinavian living room with furniture and decor"
              />
            </div>

            {/* Below the visual: hint text */}
            <p className="mt-3 text-center text-nemesis-muted text-xs tracking-wide">
              Drag the slider · Click the markers to explore products
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40"
           aria-hidden="true">
        <span className="text-[9px] uppercase tracking-widest text-nemesis-muted">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-nemesis-gold/60 to-transparent" />
      </div>
    </section>
  );
}
