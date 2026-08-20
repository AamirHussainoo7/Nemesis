import { useState } from 'react';
import { ExternalLink, ShoppingBag, X } from 'lucide-react';
import { hotspots } from '../data';

const CATEGORIES = ['Everything', 'Furniture', 'Decor', 'Lighting', 'Textiles'];

export default function ShoppableHotspots() {
  const [activeCategory, setActiveCategory] = useState('Everything');
  const [activeProduct, setActiveProduct] = useState<string | null>(null);

  const activeHotspotData = hotspots.find(h => h.id === activeProduct);

  return (
    <section id="shopping" className="py-24 lg:py-40 border-t border-nemesis-border" aria-labelledby="shopping-heading">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-12 reveal-on-scroll">
          <p className="section-label mb-4">Visual Shopping</p>
          <h2 id="shopping-heading" className="section-title mb-4">
            Discover what's in your room.
          </h2>
          <p className="section-body max-w-lg">
            Nemesis detects furniture and decor in your redesigned space. Click any hotspot to explore similar real-world products.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8 reveal-on-scroll">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeCategory === cat
                  ? 'border-nemesis-gold text-nemesis-gold bg-nemesis-gold/10'
                  : 'border-nemesis-border text-nemesis-muted hover:border-nemesis-gold/50 hover:text-nemesis-ivory'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main interactive area */}
        <div className="relative rounded-2xl overflow-hidden card-glass reveal-on-scroll" style={{ minHeight: '600px' }}>
          <div className={`absolute inset-0 transition-all duration-500 ${activeProduct ? 'md:w-[65%]' : 'w-full'}`}>
            <img src="/assets/after-room.jpg" alt="Shoppable room" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            
            {/* Hotspots */}
            {hotspots.map((hotspot) => (
              <div
                key={hotspot.id}
                className="absolute"
                style={{
                  left: `${hotspot.position.x}%`,
                  top: `${hotspot.position.y}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 20
                }}
              >
                <div className="hotspot-ring absolute inset-0 rounded-full pointer-events-none"
                     style={{ width: 44, height: 44, left: '50%', top: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(201, 169, 110, 0.15)', border: '1px solid rgba(201, 169, 110, 0.5)' }} />
                <button
                  onClick={() => setActiveProduct(hotspot.id)}
                  className={`relative w-5 h-5 rounded-full border-2 border-nemesis-bg transition-all duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-nemesis-gold focus:ring-offset-2 focus:ring-offset-transparent ${
                    activeProduct === hotspot.id ? 'bg-white scale-125' : 'bg-nemesis-gold hover:scale-110'
                  }`}
                  style={{ boxShadow: '0 0 16px rgba(201,169,110,0.8)' }}
                  aria-label={`View ${hotspot.label}`}
                />
              </div>
            ))}
          </div>

          {/* Product Panel (Slide in from right) */}
          <div className={`absolute top-0 right-0 h-full w-full md:w-[35%] bg-nemesis-surface-2/95 backdrop-blur-xl border-l border-nemesis-border transform transition-transform duration-500 ease-in-out flex flex-col z-30 ${
            activeProduct ? 'translate-x-0' : 'translate-x-full'
          }`}>
            {activeHotspotData && (
              <>
                <div className="flex items-center justify-between p-6 border-b border-nemesis-border shrink-0">
                  <h3 className="text-sm uppercase tracking-widest text-nemesis-muted font-medium">Product Details</h3>
                  <button onClick={() => setActiveProduct(null)} className="p-2 text-nemesis-muted hover:text-nemesis-ivory hover:bg-nemesis-surface rounded-full transition-colors" aria-label="Close panel">
                    <X size={20} />
                  </button>
                </div>
                
                <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
                  <div className="aspect-square rounded-xl bg-nemesis-bg border border-nemesis-border mb-6 flex items-center justify-center relative overflow-hidden group">
                     <ShoppingBag size={48} className="text-nemesis-gold/20 transition-transform duration-500 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-gradient-to-tr from-nemesis-gold/5 to-transparent opacity-50" />
                  </div>
                  
                  <h4 className="text-2xl font-display text-nemesis-ivory mb-2 leading-tight">{activeHotspotData.label}</h4>
                  <p className="text-nemesis-gold font-semibold text-xl mb-4">{activeHotspotData.price}</p>
                  
                  <p className="text-nemesis-muted text-sm leading-relaxed mb-8">
                    Minimalist design with premium materials. Perfect for contemporary spaces seeking a touch of warmth and architectural elegance. This is a concept product demo.
                  </p>
                  
                  <button className="w-full btn-primary justify-center py-4 mb-8">
                    View on Google Shopping
                    <ExternalLink size={16} />
                  </button>
                  
                  <div className="border-t border-nemesis-border pt-8">
                    <h5 className="text-sm font-medium text-nemesis-ivory mb-4">Similar items</h5>
                    <div className="grid grid-cols-2 gap-3">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="aspect-square rounded-lg bg-nemesis-bg border border-nemesis-border hover:border-nemesis-gold/50 transition-colors cursor-pointer group flex items-center justify-center relative overflow-hidden shadow-sm">
                           <ShoppingBag size={24} className="text-nemesis-muted group-hover:text-nemesis-gold/50 transition-colors" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
