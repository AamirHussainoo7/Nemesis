import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import HowItWorks from './components/HowItWorks';
import ProductDemo from './components/ProductDemo';
import StyleExplorer from './components/StyleExplorer';
import ShoppableHotspots from './components/ShoppableHotspots';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrolled';

export default function App() {
  useScrollReveal();

  return (
    <ReactLenis root>
      <div className="min-h-screen bg-nemesis-bg text-nemesis-ivory overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <FeatureGrid />
          <HowItWorks />
          <ProductDemo />
          <StyleExplorer />
          <ShoppableHotspots />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}
