import { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HotspotMarker from './Hotspot';
import { hotspots } from '../data';

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(42); // % from left
  const [isDragging, setIsDragging] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  // Mouse handlers
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  }, [isDragging, updatePosition]);

  const onMouseUp = useCallback(() => setIsDragging(false), []);

  // Touch handlers
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  const onTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    updatePosition(e.touches[0].clientX);
  }, [isDragging, updatePosition]);

  const onTouchEnd = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', onTouchMove, { passive: false });
      window.addEventListener('touchend', onTouchEnd);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [isDragging, onMouseMove, onMouseUp, onTouchMove, onTouchEnd]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden rounded-2xl select-none"
      style={{ cursor: isDragging ? 'ew-resize' : 'default' }}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      role="img"
      aria-label="Before and after room transformation comparison slider"
    >
      {/* BEFORE image (full) */}
      <div className="absolute inset-0">
        <img
          src={beforeSrc}
          alt={beforeAlt}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* AFTER image (clipped to right of slider) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <img
          src={afterSrc}
          alt={afterAlt}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Hotspots (only visible on AFTER side) */}
        {hotspots.map((hotspot) => (
          <HotspotMarker
            key={hotspot.id}
            hotspot={hotspot}
            isActive={activeHotspot === hotspot.id}
            onToggle={(id) => setActiveHotspot(activeHotspot === id ? null : id)}
            sliderPosition={position}
          />
        ))}
      </div>

      {/* Slider line */}
      <div
        className="slider-line"
        style={{ left: `${position}%` }}
        aria-hidden="true"
      />

      {/* Handle */}
      <div
        className="slider-handle"
        style={{ left: `${position}%` }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        role="slider"
        aria-valuenow={Math.round(position)}
        aria-valuemin={5}
        aria-valuemax={95}
        aria-label="Comparison slider"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') setPosition(p => Math.max(5, p - 2));
          if (e.key === 'ArrowRight') setPosition(p => Math.min(95, p + 2));
        }}
      >
        <div className="flex items-center gap-0.5">
          <ChevronLeft size={12} className="text-nemesis-gold" />
          <ChevronRight size={12} className="text-nemesis-gold" />
        </div>
      </div>

      {/* BEFORE label */}
      <div
        className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase
                   bg-black/60 border border-white/10 text-white/80 backdrop-blur-sm pointer-events-none"
        aria-hidden="true"
      >
        Before
      </div>

      {/* AFTER label */}
      <div
        className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase
                   bg-black/60 border border-nemesis-gold/30 text-nemesis-gold backdrop-blur-sm pointer-events-none"
        aria-hidden="true"
      >
        After
      </div>

      {/* Drag hint overlay (fades after first drag) */}
      {!isDragging && position === 42 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none"
             aria-hidden="true">
          <div className="absolute left-1/3 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-40 text-white text-xs">
            <ChevronLeft size={14} />
            <span className="tracking-wider text-[10px]">DRAG</span>
            <ChevronRight size={14} />
          </div>
        </div>
      )}
    </div>
  );
}
