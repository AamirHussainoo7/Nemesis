import { useState } from 'react';
import { Upload, History, Focus, Palette, Sparkles } from 'lucide-react';

const DEMO_STYLES = ['Minimalist', 'Scandinavian', 'Industrial', 'Bohemian'] as const;
const DEMO_FOCUS = ['Everything', 'Furniture', 'Walls', 'Ceiling'] as const;

type DemoStyle = typeof DEMO_STYLES[number];
type DemoFocus = typeof DEMO_FOCUS[number];

const SIDEBAR_ITEMS = [
  { icon: Upload, label: 'Upload' },
  { icon: Palette, label: 'Styles' },
  { icon: Focus, label: 'Focus' },
  { icon: History, label: 'History' },
];

export default function ProductDemo() {
  const [activeStyle, setActiveStyle] = useState<DemoStyle>('Scandinavian');
  const [activeFocus, setActiveFocus] = useState<DemoFocus>('Everything');
  const [activeSidebar, setActiveSidebar] = useState('Styles');
  const [generating, setGenerating] = useState(false);

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => setGenerating(false), 2000);
  };

  return (
    <section
      id="demo"
      className="py-24 lg:py-40 border-t border-nemesis-border relative"
      aria-labelledby="demo-heading"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-nemesis-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Text block */}
          <div className="lg:col-span-4 reveal-on-scroll">
            <p className="section-label mb-6">Product Interface</p>
            <h2 id="demo-heading" className="font-display text-4xl lg:text-5xl text-nemesis-ivory tracking-tight mb-6 leading-[1.1]">
              Your room.<br/>Reimagined.
            </h2>
            <p className="text-nemesis-muted text-base lg:text-lg leading-relaxed mb-10 max-w-sm">
              This is what the Nemesis Interiors application looks like. Upload a photo,
              choose a style, and let the AI do the rest.
            </p>
            <div className="h-px w-16 bg-nemesis-gold/30" />
          </div>

          {/* App mockup */}
          <div className="lg:col-span-8 reveal-on-scroll" style={{ transitionDelay: '150ms' }}>
            <div
              className="bg-nemesis-surface rounded-xl overflow-hidden border border-nemesis-border/50"
              style={{
                boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
              }}
            >
              {/* Title bar */}
              <div className="flex items-center gap-3 px-5 py-3 border-b border-nemesis-border/50 bg-nemesis-bg">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-nemesis-border" />
                  <div className="w-2.5 h-2.5 rounded-full bg-nemesis-border" />
                  <div className="w-2.5 h-2.5 rounded-full bg-nemesis-border" />
                </div>
                <span className="text-[10px] text-nemesis-muted font-mono tracking-wider">
                  nemesis-interiors.studio
                </span>
              </div>

              {/* App body */}
              <div className="flex h-[520px] sm:h-[600px]">
                {/* Sidebar */}
                <div className="w-16 sm:w-[180px] border-r border-nemesis-border/50 bg-nemesis-bg flex flex-col py-6 flex-shrink-0">
                  <nav className="flex flex-col gap-2 px-2 sm:px-4 mt-2">
                    {SIDEBAR_ITEMS.map(({ icon: Icon, label }) => (
                      <button
                        key={label}
                        onClick={() => setActiveSidebar(label)}
                        className={`flex items-center justify-center sm:justify-start gap-3 px-3 py-2.5 rounded-lg text-sm
                                   transition-colors duration-300 ${
                          activeSidebar === label
                            ? 'bg-nemesis-surface text-nemesis-ivory'
                            : 'text-nemesis-muted hover:text-nemesis-ivory'
                        }`}
                      >
                        <Icon size={16} className={`flex-shrink-0 ${activeSidebar === label ? 'text-nemesis-gold' : ''}`} />
                        <span className="hidden sm:block font-medium">{label}</span>
                      </button>
                    ))}
                  </nav>

                  {/* Generate button */}
                  <div className="mt-auto px-2 sm:px-4">
                    <button
                      id="demo-generate"
                      onClick={handleGenerate}
                      disabled={generating}
                      className="w-full flex items-center justify-center gap-2 py-3 px-3 rounded-lg
                                 bg-nemesis-surface border border-nemesis-border/50 text-nemesis-ivory text-sm
                                 hover:border-nemesis-gold/30 transition-all duration-300
                                 disabled:opacity-60 disabled:cursor-not-allowed group"
                    >
                      <Sparkles size={14} className={`text-nemesis-gold ${generating ? 'animate-spin' : 'group-hover:scale-110 transition-transform'}`} />
                      <span className="hidden sm:block">
                        {generating ? 'Working…' : 'Generate'}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Main canvas */}
                <div className="flex-1 flex flex-col min-w-0 bg-nemesis-surface-2">
                  {/* Top controls */}
                  <div className="px-6 py-4 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {DEMO_STYLES.map((s) => (
                        <button
                          key={s}
                          onClick={() => setActiveStyle(s)}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                            activeStyle === s
                              ? 'text-nemesis-gold bg-nemesis-surface'
                              : 'text-nemesis-muted hover:text-nemesis-ivory'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {DEMO_FOCUS.map((f) => (
                        <button
                          key={f}
                          onClick={() => setActiveFocus(f)}
                          className={`px-3 py-1.5 rounded-full text-[11px] uppercase tracking-wider transition-all duration-300 ${
                            activeFocus === f
                              ? 'text-nemesis-ivory border border-nemesis-border/50 bg-nemesis-bg'
                              : 'text-nemesis-muted hover:text-nemesis-ivory'
                          }`}
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Canvas area */}
                  <div className="flex-1 relative p-6 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full relative rounded-lg overflow-hidden border border-nemesis-border/30 bg-nemesis-bg">
                      <img
                        src="/assets/after-room.jpg"
                        alt={`Room transformed in ${activeStyle} style`}
                        className={`w-full h-full object-cover transition-all duration-[1.5s] ease-out ${
                          generating ? 'opacity-20 scale-[1.03] blur-sm' : 'opacity-100 scale-100'
                        }`}
                      />
                      {/* Generating overlay */}
                      {generating && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                          <div className="w-8 h-8 rounded-full border border-nemesis-gold/20 border-t-nemesis-gold animate-spin" />
                          <p className="text-nemesis-gold text-xs tracking-widest uppercase">
                            Rendering
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
