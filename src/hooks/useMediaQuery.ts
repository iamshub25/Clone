import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    // Check if window is defined (so if in the browser or in SSR)
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      
      // Set initial value
      setMatches(media.matches);
      
      // Define a callback function to handle changes
      const listener = () => setMatches(media.matches);
      
      // Add the callback function as a listener for changes to the media query
      media.addEventListener('change', listener);
      
      // Remove the listener when the component is unmounted
      return () => {
        media.removeEventListener('change', listener);
      };
    }
    
    return undefined;
  }, [query]);
  
  return matches;
}