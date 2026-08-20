import { ExternalLink } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Styles', href: '#styles' },
  { label: 'Product', href: '#product' },
];

const TECH_STACK = ['React', 'TypeScript', 'Tailwind CSS', 'Google Gen AI SDK', 'Firebase'];

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
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
              AI-powered interior redesign and visual shopping.
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

          {/* Engineering */}
          <div>
            <p className="text-[10px] uppercase tracking-widest text-nemesis-muted mb-4 font-medium">
              ENGINEERING
            </p>
            <p className="text-nemesis-ivory-dim text-sm mb-3 leading-snug">
              Built for the{' '}
              <span className="text-nemesis-ivory font-medium">
                Acdyon Technologies Engineering Challenge
              </span>
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-[10px] font-mono border border-nemesis-border
                             text-nemesis-muted bg-nemesis-surface"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub link */}
            <a
              href="https://github.com/YOUR_USERNAME/nemesis-interiors"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-nemesis-muted
                         hover:text-nemesis-ivory transition-colors duration-200"
              aria-label="View Nemesis Interiors on GitHub (opens in new tab)"
            >
              <GitHubSVG />
              View on GitHub
              <ExternalLink size={11} />
            </a>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 pt-6 border-t border-nemesis-border flex flex-col sm:flex-row
                        items-center justify-between gap-3">
          <p className="text-nemesis-muted text-xs">
            © 2025 Nemesis Interiors — Acdyon Technologies Engineering Challenge
          </p>
          <p className="text-nemesis-muted text-xs">
            No affiliation with any real commercial entity
          </p>
        </div>
      </div>
    </footer>
  );
}

function GitHubSVG() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}
