// Interior style definitions
export const styles = [
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Clean lines, open space, purpose-driven design.',
    image: '/assets/style-minimalist.jpg',
    color: '#E8E8E4',
  },
  {
    id: 'scandinavian',
    name: 'Scandinavian',
    description: 'Warm, functional, effortlessly comfortable.',
    image: '/assets/style-scandinavian.jpg',
    color: '#D4C9B0',
  },
  {
    id: 'industrial',
    name: 'Industrial',
    description: 'Raw textures, warm metals, urban character.',
    image: '/assets/style-industrial.jpg',
    color: '#8B7355',
  },
  {
    id: 'bohemian',
    name: 'Bohemian',
    description: 'Layered textures, eclectic warmth, free spirit.',
    image: '/assets/style-bohemian.jpg',
    color: '#C4845A',
  },
  {
    id: 'mid-century',
    name: 'Mid-Century Modern',
    description: 'Organic curves, warm walnut, timeless proportion.',
    image: '/assets/style-midcentury.jpg',
    color: '#B8956A',
  },
  {
    id: 'art-deco',
    name: 'Art Deco',
    description: 'Geometric opulence, bold symmetry, gilded drama.',
    image: '/assets/style-artdeco.jpg',
    color: '#C9A96E',
  },
  {
    id: 'tropical',
    name: 'Tropical',
    description: 'Lush greens, natural rattan, resort-inspired calm.',
    image: '/assets/style-tropical.jpg',
    color: '#5A8A6A',
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    description: 'Neon accents, dark surfaces, near-future edge.',
    image: '/assets/style-cyberpunk.jpg',
    color: '#6B4FA0',
  },
];

// Feature card definitions
export const features = [
  {
    id: 'ai-restyling',
    icon: 'Sparkles',
    title: 'Smart Room Restyling',
    description: 'Transform your room with curated interior styles using our advanced rendering engine.',
    detail: 'Choose from Minimalist, Scandinavian, Industrial, Bohemian, and more — our engine recreates your space while respecting its spatial character.',
    chips: ['Minimalist', 'Scandinavian', 'Industrial', 'Bohemian', 'Mid-Century', 'Art Deco', 'Tropical', 'Cyberpunk'],
  },
  {
    id: 'architecture',
    icon: 'Box',
    title: 'Preserve Architecture',
    description: 'Keep the room\'s geometry, layout, and architectural character — only the style changes.',
    detail: 'The model understands walls, ceilings, windows, and structural elements, maintaining spatial fidelity through every transformation.',
    chips: [],
  },
  {
    id: 'hotspots',
    icon: 'ScanSearch',
    title: 'Shoppable Hotspots',
    description: 'Our engine detects visible furniture and decor and turns them into interactive shopping hotspots.',
    detail: 'Click any glowing marker in the transformed image to identify the item and explore shopping results.',
    chips: [],
  },
  {
    id: 'save-sync',
    icon: 'Cloud',
    title: 'Save & Sync',
    description: 'Save your designs securely and access your full design history whenever you return.',
    detail: 'Cloud persistence means your transformations are always available across devices.',
    chips: [],
  },
];

// How it works steps
export const steps = [
  {
    number: '01',
    title: 'Upload',
    subtitle: 'Start with a photo of your room.',
    description: 'Take a photo with your phone or upload an existing image. Nemesis works with everyday photography — no professional shoot required.',
  },
  {
    number: '02',
    title: 'Restyle',
    subtitle: 'Choose a style and let Nemesis transform the space.',
    description: 'Select from a curated library of interior styles. Nemesis preserves your room\'s architecture while completely transforming its aesthetic.',
  },
  {
    number: '03',
    title: 'Discover',
    subtitle: 'Explore the redesign and discover products through interactive hotspots.',
    description: 'Interact with glowing markers on the transformed image. Each one identifies a piece of furniture or decor with shopping options.',
  },
];

// Hotspot definitions for the before/after slider demo
export const hotspots = [
  {
    id: 'sofa',
    label: 'Modern Linen Sofa',
    price: '$899',
    position: { x: 52, y: 62 },
    tooltipSide: 'right' as const,
  },
  {
    id: 'coffee-table',
    label: 'Oak Coffee Table',
    price: '$299',
    position: { x: 48, y: 78 },
    tooltipSide: 'top' as const,
  },
  {
    id: 'floor-lamp',
    label: 'Arc Floor Lamp',
    price: '$189',
    position: { x: 78, y: 45 },
    tooltipSide: 'left' as const,
  },
  {
    id: 'plant',
    label: 'Fiddle Leaf Fig',
    price: '$85',
    position: { x: 18, y: 50 },
    tooltipSide: 'right' as const,
  },
];
