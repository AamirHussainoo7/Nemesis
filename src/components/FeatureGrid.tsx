import { Sparkles, Box, ScanSearch, Cloud } from 'lucide-react';
import { features } from '../data';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Sparkles,
  Box,
  ScanSearch,
  Cloud,
};

export default function FeatureGrid() {
  return (
    <section
      id="features"
      className="py-24 lg:py-32"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <p className="section-label mb-4">What It Does</p>
          <h2 id="features-heading" className="section-title mb-5">
            From empty room to shoppable space.
          </h2>
          <p className="section-body max-w-2xl mx-auto text-base lg:text-lg">
            Nemesis Interiors combines generative AI, architectural preservation, and
            computer vision to turn a room photo into an interactive design experience.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => {
            const Icon = ICON_MAP[feature.icon];
            return (
              <div
                key={feature.id}
                className="card-glass p-6 group hover:-translate-y-1 hover:shadow-card-hover
                           transition-all duration-200 reveal-on-scroll"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-nemesis-surface-2 border border-nemesis-border
                                flex items-center justify-center mb-5
                                group-hover:border-nemesis-gold/40 transition-colors duration-200">
                  <Icon size={18} className="text-nemesis-gold" />
                </div>

                {/* Title */}
                <h3 className="text-nemesis-ivory font-semibold text-base mb-2 leading-snug">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-nemesis-muted text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Style chips (only for AI Restyling card) */}
                {feature.chips.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {feature.chips.map((chip) => (
                      <span key={chip} className="style-chip">
                        {chip}
                      </span>
                    ))}
                  </div>
                )}

                {/* Architecture detail card */}
                {feature.id === 'architecture' && (
                  <div className="mt-4 p-3 rounded-lg bg-nemesis-surface-2 border border-nemesis-border">
                    <div className="flex gap-3 items-start">
                      <div className="w-2 h-full min-h-[2.5rem] bg-nemesis-gold/20 rounded-full flex-shrink-0
                                      border-l-2 border-nemesis-gold" />
                      <p className="text-xs text-nemesis-muted leading-relaxed">
                        Walls · Ceilings · Windows · Geometry preserved through every transformation.
                      </p>
                    </div>
                  </div>
                )}

                {/* Hotspot mini visual */}
                {feature.id === 'hotspots' && (
                  <div className="mt-4 relative h-12 rounded-lg bg-nemesis-surface-2 border border-nemesis-border overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-around px-4">
                      {[30, 55, 75].map((x) => (
                        <div key={x} className="relative">
                          <div className="w-3 h-3 rounded-full bg-nemesis-gold/80 animate-pulse-gold" />
                          <div className="absolute inset-0 rounded-full border border-nemesis-gold/30 scale-150 animate-pulse-gold" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Cloud sync visual */}
                {feature.id === 'save-sync' && (
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex-1 h-1 rounded-full bg-nemesis-surface-2 overflow-hidden">
                      <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-nemesis-gold-dim to-nemesis-gold opacity-60" />
                    </div>
                    <span className="text-[10px] text-nemesis-muted">Synced</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
