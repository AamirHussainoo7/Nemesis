import { useState } from 'react';
import { styles } from '../data';

export default function StyleExplorer() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="styles"
      className="py-24 lg:py-40 border-t border-nemesis-border"
      aria-labelledby="styles-heading"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-12 reveal-on-scroll">
          <p className="section-label mb-4">Interior Styles</p>
          <h2 id="styles-heading" className="section-title mb-4">
            Find your style.
          </h2>
          <p className="section-body max-w-lg">
            Select from a curated library of interior design aesthetics. Nemesis
            transforms your room into any of these styles while keeping its architecture intact.
          </p>
        </div>

        {/* Style grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {styles.map((style, i) => (
            <StyleCard
              key={style.id}
              style={style}
              isHovered={hovered === style.id}
              onHover={() => setHovered(style.id)}
              onLeave={() => setHovered(null)}
              delay={i * 50}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StyleCardProps {
  style: {
    id: string;
    name: string;
    description: string;
    image: string;
    color: string;
  };
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  delay: number;
}

function StyleCard({ style, isHovered, onHover, onLeave, delay }: StyleCardProps) {
  return (
    <div
      className="reveal-on-scroll relative rounded-2xl overflow-hidden cursor-pointer group"
      style={{
        transitionDelay: `${delay}ms`,
        aspectRatio: '3/4',
        boxShadow: isHovered
          ? '0 20px 48px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,169,110,0.2)'
          : '0 4px 16px rgba(0,0,0,0.4)',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'transform 0.25s ease-out, box-shadow 0.25s ease-out',
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
      tabIndex={0}
      role="button"
      aria-label={`Select ${style.name} interior style`}
    >
      {/* Image */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Fallback gradient when image not available */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${style.color}22 0%, #0A0A09 100%)`,
          }}
        />
        <img
          src={style.image}
          alt={`${style.name} interior design style`}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: isHovered ? 'scale(1.06)' : 'scale(1)' }}
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          loading="lazy"
        />
      </div>

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: isHovered
            ? 'linear-gradient(to top, rgba(10,10,9,0.92) 0%, rgba(10,10,9,0.3) 50%, rgba(10,10,9,0.1) 100%)'
            : 'linear-gradient(to top, rgba(10,10,9,0.85) 0%, rgba(10,10,9,0.2) 60%, rgba(10,10,9,0.05) 100%)',
        }}
      />

      {/* Color accent line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300"
        style={{
          background: `linear-gradient(to right, transparent, ${style.color}, transparent)`,
          opacity: isHovered ? 0.8 : 0,
        }}
        aria-hidden="true"
      />

      {/* Text content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3
          className="text-nemesis-ivory font-semibold text-base leading-tight mb-1 transition-all duration-200"
          style={{ color: isHovered ? style.color : '#F5F0E8' }}
        >
          {style.name}
        </h3>
        <p
          className="text-nemesis-muted text-xs leading-snug transition-all duration-300"
          style={{
            maxHeight: isHovered ? '3rem' : '0',
            opacity: isHovered ? 1 : 0,
            overflow: 'hidden',
          }}
        >
          {style.description}
        </p>
        {isHovered && (
          <div className="mt-3 flex items-center gap-1.5">
            <span className="text-[10px] uppercase tracking-widest font-medium"
                  style={{ color: style.color }}>
              Apply style →
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
