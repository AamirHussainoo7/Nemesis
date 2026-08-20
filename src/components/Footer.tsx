

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Styles', href: '#styles' },
  { label: 'Product', href: '#product' },
];


export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="border-t border-nemesis-border bg-nemesis-surface-2"
      role="contentinfo"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect x="1" y="1" width="30" height="30" rx="4" stroke="#C9A96E" strokeWidth="1.5" fill="none"/>
                  <polygon points="16,5 28,12 28,20 16,27 4,20 4,12" stroke="#C9A96E" strokeWidth="1.2"
                           fill="rgba(201,169,110,0.08)" strokeLinejoin="round"/>
                  <circle cx="16" cy="16" r="2" fill="#C9A96E"/>
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-nemesis-ivory font-semibold text-sm tracking-wide">NEMESIS</span>
                <span className="text-nemesis-muted text-[9px] tracking-[0.2em] uppercase">INTERIORS</span>
              </div>
            </div>
            <p className="text-nemesis-muted text-sm leading-relaxed max-w-[220px]">
              Premium interior redesign and visual shopping.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="text-[10px] uppercase tracking-widest text-nemesis-muted mb-4 font-medium">
              PRODUCT
            </p>
            <nav className="flex flex-col gap-2.5" aria-label="Product navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-nemesis-muted text-sm hover:text-nemesis-ivory transition-colors duration-200 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div>
            <p className="text-[10px] uppercase tracking-widest text-nemesis-muted mb-4 font-medium">
              RESOURCES
            </p>
            <nav className="flex flex-col gap-2.5" aria-label="Resources navigation">
              <a href="#documentation" className="text-nemesis-muted text-sm hover:text-nemesis-ivory transition-colors duration-200 w-fit">Documentation</a>
              <a href="#privacy" className="text-nemesis-muted text-sm hover:text-nemesis-ivory transition-colors duration-200 w-fit">Privacy</a>
              <a href="#terms" className="text-nemesis-muted text-sm hover:text-nemesis-ivory transition-colors duration-200 w-fit">Terms</a>
            </nav>
          </div>


        </div>

        {/* Bottom strip */}
        <div className="mt-12 pt-6 border-t border-nemesis-border flex flex-col sm:flex-row
                        items-center justify-between gap-3">
          <p className="text-nemesis-muted text-xs">
            © 2025 Nemesis Interiors. All rights reserved.
          </p>
          <p className="text-nemesis-muted text-xs">
            No affiliation with any real commercial entity
          </p>
        </div>
      </div>
    </footer>
  );
}


