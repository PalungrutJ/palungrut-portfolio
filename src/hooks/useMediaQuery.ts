import { useEffect, useState } from 'react';

/**
 * Subscribes to a CSS media query. Reads synchronously on first render (client-only
 * SPA, so `window` is available) to avoid a wrong-breakpoint flash.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false,
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}
