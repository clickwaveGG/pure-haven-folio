import { useEffect, useState } from "react";

const INITIAL_LOAD_KEY = "home_page_loaded";

export function useInitialLoad() {
  const [isInitialLoad, setIsInitialLoad] = useState(() => {
    // Check if we've already loaded the home page in this session
    return sessionStorage.getItem(INITIAL_LOAD_KEY) !== "true";
  });

  useEffect(() => {
    // Mark that the home page has been loaded
    if (isInitialLoad) {
      // Small delay to allow animations to play on first visit
      const timer = setTimeout(() => {
        sessionStorage.setItem(INITIAL_LOAD_KEY, "true");
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isInitialLoad]);

  return { isInitialLoad, skipAnimations: !isInitialLoad };
}
