import { ArrowRight, Circle } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex flex-col pt-24 overflow-hidden"
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

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10 w-full flex-1 flex flex-col">

        <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-12 lg:gap-14 flex-1 pb-16 pt-8">
          {/* ——— Left: Copy ——— */}
          <div className="lg:col-span-5 flex flex-col justify-center reveal-on-scroll">
            <h1
              id="hero-heading"
              className="font-display text-hero text-nemesis-ivory mb-6"
            >
              Turn any room photo<br/>into a photorealistic,<br/>
              <span
                className="italic inline-block mt-1"
                style={{
                  color: '#C9A96E',
                  textShadow: '0 0 40px rgba(201,169,110,0.3)',
                }}
              >
                shoppable design.
              </span>
            </h1>

            <p className="text-nemesis-ivory-dim text-base lg:text-lg leading-relaxed mb-8 max-w-md">
              Restyle your space instantly while preserving its architecture. Discover
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


          </div>

          {/* ——— Right: Interactive Visual ——— */}
          <div className="lg:col-span-7 w-full reveal-on-scroll" style={{ transitionDelay: '150ms' }}>
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                aspectRatio: '16/10',
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
            <p className="mt-4 text-center text-nemesis-muted text-xs tracking-wide">
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
