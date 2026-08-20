import { Sparkles, Box, ScanSearch, Cloud } from 'lucide-react';
import { features } from '../data';

export default function FeatureGrid() {
  const [restyling, architecture, hotspots, saveSync] = features;
  
  return (
    <section id="features" className="py-24 lg:py-40" aria-labelledby="features-heading">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-20 reveal-on-scroll">
          <p className="section-label mb-4">THE TECHNOLOGY</p>
          <h2 id="features-heading" className="section-title mb-6">
            From empty room to shoppable space.
          </h2>
          <p className="section-body max-w-2xl text-base lg:text-lg">
            Nemesis Interiors combines advanced technology, architectural preservation, and
            computer vision to turn a room photo into an interactive design experience.
          </p>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Feature 1: AI Restyling (Large block) */}
          <div className="lg:col-span-12 flex flex-col md:flex-row gap-10 md:items-center p-8 lg:p-14 border border-nemesis-border rounded-xl bg-nemesis-surface reveal-on-scroll group hover:border-nemesis-gold/30 transition-all duration-700">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <Sparkles size={20} className="text-nemesis-gold group-hover:scale-110 transition-transform duration-700" />
                <h3 className="text-nemesis-ivory font-display text-2xl lg:text-3xl tracking-tight">{restyling.title}</h3>
              </div>
              <p className="text-nemesis-muted text-base leading-relaxed max-w-xl mb-8">
                {restyling.description} {restyling.detail}
              </p>
              <div className="flex flex-wrap gap-2">
                {restyling.chips.map(chip => (
                  <span key={chip} className="text-[10px] uppercase tracking-widest text-nemesis-gold border border-nemesis-border/50 px-3 py-1.5 rounded-full bg-nemesis-surface-2">{chip}</span>
                ))}
              </div>
            </div>
            <div className="w-full md:w-[45%] h-64 md:h-80 rounded-lg overflow-hidden border border-nemesis-border relative bg-nemesis-bg">
               <img src="/assets/style-minimalist.jpg" alt="Style preview" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.2s] ease-out" />
               <div className="absolute inset-0 bg-gradient-to-t from-nemesis-bg to-transparent opacity-50" />
            </div>
          </div>

          {/* Feature 2: Architecture */}
          <div className="lg:col-span-4 p-8 lg:p-10 border border-nemesis-border rounded-xl hover:border-nemesis-gold/30 hover:-translate-y-1 transition-all duration-700 group reveal-on-scroll bg-nemesis-surface">
            <Box size={20} className="text-nemesis-gold mb-6 group-hover:scale-110 transition-transform duration-700" />
            <h3 className="text-nemesis-ivory font-semibold text-lg mb-3">{architecture.title}</h3>
            <p className="text-nemesis-muted text-sm leading-relaxed mb-8">{architecture.description}</p>
            <div className="pt-5 border-t border-nemesis-border">
              <p className="text-xs text-nemesis-ivory-dim leading-relaxed">
                Walls · Ceilings · Windows · Geometry preserved seamlessly.
              </p>
            </div>
          </div>

          {/* Feature 3: Shoppable Hotspots */}
          <div className="lg:col-span-5 p-8 lg:p-10 border border-nemesis-border rounded-xl hover:border-nemesis-gold/30 hover:-translate-y-1 transition-all duration-700 group reveal-on-scroll bg-nemesis-surface" style={{ transitionDelay: '100ms' }}>
            <ScanSearch size={20} className="text-nemesis-gold mb-6 group-hover:scale-110 transition-transform duration-700" />
            <h3 className="text-nemesis-ivory font-semibold text-lg mb-3">{hotspots.title}</h3>
            <p className="text-nemesis-muted text-sm leading-relaxed mb-8">{hotspots.description}</p>
            <div className="mt-auto relative h-16 rounded-lg bg-nemesis-bg border border-nemesis-border overflow-hidden group-hover:border-nemesis-gold/20 transition-colors duration-700">
              <div className="absolute inset-0 flex items-center justify-around px-8">
                {[30, 55, 75].map((x) => (
                  <div key={x} className="relative">
                    <div className="w-2 h-2 rounded-full bg-nemesis-gold" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-nemesis-gold/30 scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:animate-pulse-gold transition-all duration-1000" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature 4: Save & Sync */}
          <div className="lg:col-span-3 p-8 lg:p-10 border border-nemesis-border rounded-xl bg-nemesis-surface-2 flex flex-col justify-between hover:-translate-y-1 transition-all duration-700 group reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
            <div>
              <Cloud size={20} className="text-nemesis-muted group-hover:text-nemesis-ivory transition-colors duration-700 mb-6" />
              <h3 className="text-nemesis-ivory font-semibold text-lg mb-3">{saveSync.title}</h3>
              <p className="text-nemesis-muted text-sm leading-relaxed">{saveSync.description}</p>
            </div>
            <div className="mt-8 flex items-center gap-3 opacity-50 group-hover:opacity-100 transition-opacity duration-700">
              <div className="flex-1 h-px bg-nemesis-border relative">
                <div className="absolute top-0 left-0 h-full w-1/2 bg-nemesis-gold" />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-nemesis-ivory">Synced</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
