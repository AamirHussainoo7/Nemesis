import { ExternalLink, ShoppingBag } from 'lucide-react';

interface HotspotData {
  id: string;
  label: string;
  price: string;
  position: { x: number; y: number };
  tooltipSide: 'top' | 'right' | 'left' | 'bottom';
}

interface HotspotProps {
  hotspot: HotspotData;
  isActive: boolean;
  onToggle: (id: string) => void;
  sliderPosition?: number;
}

export default function HotspotMarker({ hotspot, isActive, onToggle }: HotspotProps) {
  const { id, label, price, position, tooltipSide } = hotspot;

  const tooltipClass = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-3',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-3',
    left: 'right-full top-1/2 -translate-y-1/2 mr-3',
    right: 'left-full top-1/2 -translate-y-1/2 ml-3',
  }[tooltipSide];

  return (
    <div
      className="absolute"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)',
        zIndex: 25,
      }}
    >
      {/* Outer pulse ring */}
      <div
        className="hotspot-ring absolute inset-0 rounded-full"
        style={{
          width: 32,
          height: 32,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(201, 169, 110, 0.12)',
          border: '1px solid rgba(201, 169, 110, 0.4)',
        }}
        aria-hidden="true"
      />

      {/* Clickable dot */}
      <button
        id={`hotspot-${id}`}
        onClick={(e) => {
          e.stopPropagation();
          onToggle(id);
        }}
        className="relative w-4 h-4 rounded-full bg-nemesis-gold border-2 border-nemesis-bg
                   focus:outline-none focus:ring-2 focus:ring-nemesis-gold focus:ring-offset-1
                   hover:scale-125 transition-transform duration-200 z-10"
        aria-label={`View ${label} — ${price}`}
        aria-expanded={isActive}
        style={{ boxShadow: '0 0 8px rgba(201,169,110,0.6)' }}
      />

      {/* Tooltip card */}
      {isActive && (
        <div
          className={`hotspot-tooltip absolute ${tooltipClass}`}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-label={`Product: ${label}`}
        >
          {/* Demo label */}
          <p className="text-[9px] uppercase tracking-widest text-nemesis-muted mb-2">
            Product Demo — Concept
          </p>

          <div className="flex items-start gap-3">
            {/* Product icon placeholder */}
            <div className="w-10 h-10 rounded-lg bg-nemesis-surface-2 border border-nemesis-border
                            flex items-center justify-center flex-shrink-0">
              <ShoppingBag size={16} className="text-nemesis-gold opacity-60" />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-nemesis-ivory text-sm font-medium leading-tight truncate">
                {label}
              </p>
              <p className="text-nemesis-gold text-sm font-semibold mt-0.5">
                Est. {price}
              </p>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-1 mt-1.5 text-[11px] text-nemesis-muted
                           hover:text-nemesis-gold transition-colors duration-150"
                aria-label={`View ${label} on Google Shopping (demo link)`}
              >
                View on Google Shopping
                <ExternalLink size={9} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
