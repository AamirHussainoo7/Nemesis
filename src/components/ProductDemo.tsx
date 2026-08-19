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
      className="py-24 lg:py-32 border-t border-nemesis-border"
      aria-labelledby="demo-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 reveal-on-scroll">
          <p className="section-label mb-4">Product Interface</p>
          <h2 id="demo-heading" className="section-title mb-4">
            Your room. Reimagined.
          </h2>
          <p className="section-body max-w-xl mx-auto">
            This is what the Nemesis Interiors application looks like. Upload a photo,
            choose a style, and let the AI do the rest.
          </p>
        </div>

        {/* App mockup */}
        <div
          className="reveal-on-scroll card-glass overflow-hidden"
          style={{
            boxShadow: '0 0 0 1px rgba(201,169,110,0.1), 0 40px 100px rgba(0,0,0,0.7)',
          }}
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-nemesis-border bg-nemesis-surface-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <span className="text-[11px] text-nemesis-muted ml-2 font-mono">
              nemesis-interiors — design studio
            </span>
          </div>

          {/* App body */}
          <div className="flex h-[520px] sm:h-[560px]">
            {/* Sidebar */}
            <div className="w-16 sm:w-[200px] border-r border-nemesis-border bg-nemesis-surface-2 flex flex-col py-4 flex-shrink-0">
              {/* Logo mini */}
              <div className="px-4 pb-5 border-b border-nemesis-border hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5">
                    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                      <polygon points="16,3 29,10 29,22 16,29 3,22 3,10"
                               stroke="#C9A96E" strokeWidth="1.5" fill="rgba(201,169,110,0.08)"/>
                      <circle cx="16" cy="16" r="2" fill="#C9A96E"/>
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-nemesis-ivory">Nemesis</span>
                </div>
              </div>

              <nav className="flex flex-col gap-1 px-2 mt-3">
                {SIDEBAR_ITEMS.map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    onClick={() => setActiveSidebar(label)}
                    className={`flex items-center gap-3 px-2 sm:px-3 py-2.5 rounded-lg text-sm
                               transition-all duration-150 ${
                      activeSidebar === label
                        ? 'bg-nemesis-gold/10 text-nemesis-gold border border-nemesis-gold/20'
                        : 'text-nemesis-muted hover:text-nemesis-ivory hover:bg-nemesis-surface'
                    }`}
                  >
                    <Icon size={16} className="flex-shrink-0" />
                    <span className="hidden sm:block">{label}</span>
                  </button>
                ))}
              </nav>

              {/* Generate button */}
              <div className="mt-auto px-2 sm:px-3">
                <button
                  id="demo-generate"
                  onClick={handleGenerate}
                  disabled={generating}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl
                             bg-nemesis-gold text-nemesis-bg text-sm font-semibold
                             hover:bg-opacity-90 transition-all duration-200
                             disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Sparkles size={14} className={generating ? 'animate-spin' : ''} />
                  <span className="hidden sm:block">
                    {generating ? 'Generating…' : 'Generate Design'}
                  </span>
                </button>
              </div>
            </div>

            {/* Main canvas */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Top controls */}
              <div className="px-4 sm:px-5 py-3 border-b border-nemesis-border bg-nemesis-surface-2
                              flex flex-wrap items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest text-nemesis-muted mr-1 hidden sm:block">
                  Style
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {DEMO_STYLES.map((s) => (
                    <button
                      key={s}
                      onClick={() => setActiveStyle(s)}
                      className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-150 ${
                        activeStyle === s
                          ? 'border-nemesis-gold text-nemesis-gold bg-nemesis-gold/10'
                          : 'border-nemesis-border text-nemesis-muted hover:border-nemesis-gold/40 hover:text-nemesis-ivory'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>

                <div className="ml-auto flex flex-wrap gap-1.5">
                  {DEMO_FOCUS.map((f) => (
                    <button
                      key={f}
                      onClick={() => setActiveFocus(f)}
                      className={`px-2.5 py-1 rounded-full text-[11px] border transition-all duration-150 ${
                        activeFocus === f
                          ? 'border-nemesis-gold/60 text-nemesis-gold bg-nemesis-gold/10'
                          : 'border-nemesis-border text-nemesis-muted hover:border-nemesis-border-light'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Canvas area */}
              <div className="flex-1 relative bg-nemesis-bg p-4 sm:p-6 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full relative rounded-xl overflow-hidden"
                     style={{ maxHeight: '380px' }}>
                  <img
                    src="/assets/after-room.jpg"
                    alt={`Room transformed in ${activeStyle} style`}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      generating ? 'opacity-30 scale-[1.02] blur-sm' : 'opacity-100 scale-100'
                    }`}
                  />
                  {/* Generating overlay */}
                  {generating && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <div className="w-10 h-10 rounded-full border-2 border-nemesis-gold border-t-transparent animate-spin" />
                      <p className="text-nemesis-gold text-sm font-medium">
                        Transforming your space…
                      </p>
                    </div>
                  )}
                  {/* Style label */}
                  {!generating && (
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full
                                    bg-black/60 border border-nemesis-gold/30 backdrop-blur-sm">
                      <p className="text-nemesis-gold text-xs font-medium">{activeStyle}</p>
                    </div>
                  )}
                  {/* Focus label */}
                  {!generating && activeFocus !== 'Everything' && (
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full
                                    bg-black/60 border border-nemesis-border backdrop-blur-sm">
                      <p className="text-nemesis-ivory-dim text-xs">Focus: {activeFocus}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Status bar */}
              <div className="px-4 sm:px-5 py-2 border-t border-nemesis-border flex items-center justify-between">
                <span className="text-[10px] text-nemesis-muted">
                  {generating ? 'Generating…' : `Ready · ${activeStyle} · ${activeFocus}`}
                </span>
                <span className="text-[10px] text-nemesis-muted">Powered by Google Gemini</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
