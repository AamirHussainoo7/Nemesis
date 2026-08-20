import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Styles', href: '#styles' },
  { label: 'Product', href: '#product' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [eggActive, setEggActive] = useState(false);
  const eggCount = useRef(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Easter egg: click logo 5x quickly
  const handleLogoClick = () => {
    eggCount.current += 1;
    if (eggCount.current >= 5) {
      setEggActive(true);
      setTimeout(() => { setEggActive(false); eggCount.current = 0; }, 3000);
    }
    setTimeout(() => { if (eggCount.current < 5) eggCount.current = 0; }, 1500);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'nav-glass' : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={handleLogoClick}
              className={`flex items-center gap-2.5 group focus:outline-none ${
                eggActive ? 'animate-spin' : ''
              }`}
              aria-label="Nemesis Interiors home"
              title={eggActive ? '✨ You found the easter egg!' : 'Nemesis Interiors'}
            >
              <div className="relative w-8 h-8 flex-shrink-0">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Geometric architecture icon */}
                  <rect x="1" y="1" width="30" height="30" rx="4" stroke="#C9A96E" strokeWidth="1.5" fill="none"/>
                  <polygon points="16,5 28,12 28,20 16,27 4,20 4,12" stroke="#C9A96E" strokeWidth="1.2" fill="rgba(201,169,110,0.08)" strokeLinejoin="round"/>
                  <line x1="16" y1="5" x2="16" y2="27" stroke="#C9A96E" strokeWidth="0.8" opacity="0.5"/>
                  <line x1="4" y1="12" x2="28" y2="12" stroke="#C9A96E" strokeWidth="0.8" opacity="0.5"/>
                  <circle cx="16" cy="16" r="2" fill="#C9A96E"/>
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-nemesis-ivory font-semibold text-sm tracking-wide group-hover:text-nemesis-gold transition-colors duration-200">
                  NEMESIS
                </span>
                <span className="text-nemesis-muted text-[9px] tracking-[0.2em] uppercase">
                  INTERIORS
                </span>
              </div>
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-nemesis-muted text-sm hover:text-nemesis-ivory transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-nemesis-gold transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Right side */}
            <div className="hidden md:flex items-center gap-3">
              <span className="px-2 py-0.5 rounded text-[10px] font-medium border border-nemesis-border text-nemesis-muted tracking-wider">
                v1.0
              </span>
              <button
                id="google-sign-in"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                           bg-nemesis-surface border border-nemesis-border text-nemesis-ivory
                           hover:border-nemesis-gold hover:text-nemesis-gold
                           transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-nemesis-gold"
              >
                <GoogleIcon />
                Sign in with Google
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-nemesis-muted hover:text-nemesis-ivory transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!mobileOpen}
        >
          <div className="nav-glass border-t border-nemesis-border px-4 py-4 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2.5 text-nemesis-ivory-dim text-sm hover:text-nemesis-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-1 border-t border-nemesis-border flex items-center justify-between">
              <span className="px-2 py-0.5 rounded text-[10px] font-medium border border-nemesis-border text-nemesis-muted">
                v1.0
              </span>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                                 bg-nemesis-surface border border-nemesis-border text-nemesis-ivory
                                 hover:border-nemesis-gold transition-all duration-200">
                <GoogleIcon />
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Easter egg toast */}
      {eggActive && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] px-5 py-3 rounded-full
                        bg-nemesis-surface border border-nemesis-gold text-nemesis-gold text-sm
                        shadow-gold-md animate-fade-up">
          ✦ You found the Nemesis easter egg ✦
        </div>
      )}
    </>
  );
}

function GoogleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}
