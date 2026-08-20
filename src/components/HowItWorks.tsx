import { steps } from '../data';
import { Upload, Wand2, ScanSearch } from 'lucide-react';

const STEP_ICONS = [Upload, Wand2, ScanSearch];
const STYLE_CHIPS = ['Minimalist', 'Scandinavian', 'Industrial', 'Bohemian'];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 lg:py-40 border-t border-nemesis-border"
      aria-labelledby="hiw-heading"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-16 reveal-on-scroll">
          <p className="section-label mb-4">Process</p>
          <h2 id="hiw-heading" className="section-title">
            Design in three steps.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {steps.map((step, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <div
                key={step.number}
                className="relative reveal-on-scroll"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-[calc(100%+0px)] w-6 h-px
                               bg-gradient-to-r from-nemesis-border to-transparent z-10"
                    aria-hidden="true"
                  />
                )}

                <div className="card-glass p-7 h-full group hover:-translate-y-1 transition-all duration-200 hover:shadow-card-hover">
                  {/* Step number + icon row */}
                  <div className="flex items-center gap-4 mb-6">
                    <span
                      className="font-display text-4xl font-bold leading-none"
                      style={{ color: 'rgba(201,169,110,0.18)' }}
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl border border-nemesis-border bg-nemesis-surface-2
                                    flex items-center justify-center
                                    group-hover:border-nemesis-gold/40 transition-colors duration-200">
                      <Icon size={18} className="text-nemesis-gold" />
                    </div>
                  </div>

                  <h3 className="text-nemesis-ivory font-semibold text-xl mb-1">
                    {step.title}
                  </h3>
                  <p className="text-nemesis-gold text-sm mb-3 font-medium">
                    {step.subtitle}
                  </p>
                  <p className="text-nemesis-muted text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Step-specific mini UI */}
                  <div className="mt-6">
                    {i === 0 && <UploadMockup />}
                    {i === 1 && <StyleSelectMockup />}
                    {i === 2 && <HotspotMockup />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function UploadMockup() {
  return (
    <div className="border-2 border-dashed border-nemesis-border rounded-xl p-5 flex flex-col
                    items-center justify-center gap-2 bg-nemesis-surface-2 h-24
                    hover:border-nemesis-gold/30 transition-colors duration-200">
      <Upload size={18} className="text-nemesis-muted" />
      <p className="text-xs text-nemesis-muted text-center">
        Drop a room photo or{' '}
        <span className="text-nemesis-gold">browse</span>
      </p>
    </div>
  );
}

function StyleSelectMockup() {
  return (
    <div className="space-y-2">
      <p className="text-[10px] uppercase tracking-widest text-nemesis-muted mb-2">Choose style</p>
      <div className="flex flex-wrap gap-1.5">
        {STYLE_CHIPS.map((s, i) => (
          <span
            key={s}
            className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-colors duration-200 ${
              i === 1
                ? 'border-nemesis-gold text-nemesis-gold bg-nemesis-gold/10'
                : 'border-nemesis-border text-nemesis-muted'
            }`}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function HotspotMockup() {
  return (
    <div className="relative h-20 rounded-xl bg-nemesis-surface-2 border border-nemesis-border overflow-hidden">
      <div className="absolute inset-0 opacity-30"
           style={{ background: 'linear-gradient(135deg, #1a1a18 0%, #252520 100%)' }} />
      {/* Simulated hotspot dots */}
      {[{ x: '25%', y: '55%' }, { x: '55%', y: '65%' }, { x: '78%', y: '40%' }].map((pos, i) => (
        <div
          key={i}
          className="absolute"
          style={{ left: pos.x, top: pos.y, transform: 'translate(-50%,-50%)' }}
        >
          <div className="w-3 h-3 rounded-full bg-nemesis-gold/80 animate-pulse-gold
                          shadow-[0_0_8px_rgba(201,169,110,0.6)]" />
        </div>
      ))}
      <p className="absolute bottom-2 right-2 text-[9px] text-nemesis-muted">
        Click to explore →
      </p>
    </div>
  );
}
