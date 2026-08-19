import { useEffect, useRef, useCallback } from 'react';

/**
 * Calls back whenever the window scroll position changes.
 * Returns `true` after the user scrolls past `threshold` px.
 */
export function useScrolled(threshold = 20) {
  const ref = useRef(false);

  const update = useCallback(() => {
    ref.current = window.scrollY > threshold;
  }, [threshold]);

  useEffect(() => {
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [update]);

  return ref;
}

/**
 * Intersection-observer-based scroll reveal.
 * Adds `visible` class to observed elements when they enter the viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    // Bail out if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
