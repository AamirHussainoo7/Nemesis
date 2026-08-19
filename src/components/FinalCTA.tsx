import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <section
      id="cta"
      className="relative py-32 lg:py-40 overflow-hidden border-t border-nemesis-border"
      aria-labelledby="cta-heading"
    >
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/assets/after-room.jpg"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0"
             style={{ background: 'linear-gradient(to bottom, #0A0A09 0%, rgba(10,10,9,0.6) 40%, rgba(10,10,9,0.6) 60%, #0A0A09 100%)' }} />
      </div>

      {/* Radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(201,169,110,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p className="section-label mb-6 reveal-on-scroll">Get Started</p>

        <h2
          id="cta-heading"
          className="font-display text-nemesis-ivory mb-6 reveal-on-scroll"
          style={{
            fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)',
            lineHeight: '1.06',
            letterSpacing: '-0.03em',
            transitionDelay: '60ms',
          }}
        >
          Your next room starts
          <br />
          <span style={{ color: '#C9A96E', textShadow: '0 0 60px rgba(201,169,110,0.35)' }}>
            with one photo.
          </span>
        </h2>

        <p
          className="text-nemesis-ivory-dim text-base lg:text-lg leading-relaxed mb-10 max-w-xl mx-auto reveal-on-scroll"
          style={{ transitionDelay: '120ms' }}
        >
          Upload your space. Choose a style. See what it could become.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-on-scroll"
          style={{ transitionDelay: '180ms' }}
        >
          <button
            id="final-cta-btn"
            onClick={scrollToTop}
            className="btn-primary text-base px-8 py-4 shadow-gold-md"
          >
            Try Nemesis Interiors
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Subtle decorative line */}
        <div
          className="mx-auto mt-16 h-px max-w-xs reveal-on-scroll"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(201,169,110,0.3), transparent)',
            transitionDelay: '240ms',
          }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
