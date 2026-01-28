import React, { createContext, useContext, useState, useCallback } from "react";

interface TransitionData {
  rect: DOMRect | null;
  image: string;
  title: string;
  location: string;
}

interface PageTransitionContextType {
  transitionData: TransitionData | null;
  setTransitionData: (data: TransitionData | null) => void;
  isTransitioning: boolean;
  startTransition: (data: TransitionData) => void;
  endTransition: () => void;
  clearTransition: () => void;
}

const PageTransitionContext = createContext<PageTransitionContextType | null>(null);

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const [transitionData, setTransitionData] = useState<TransitionData | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startTransition = useCallback((data: TransitionData) => {
    setTransitionData(data);
    setIsTransitioning(true);
  }, []);

  const endTransition = useCallback(() => {
    setIsTransitioning(false);
    setTransitionData(null);
  }, []);

  const clearTransition = useCallback(() => {
    setIsTransitioning(false);
    setTransitionData(null);
  }, []);

  return (
    <PageTransitionContext.Provider
      value={{
        transitionData,
        setTransitionData,
        isTransitioning,
        startTransition,
        endTransition,
        clearTransition,
      }}
    >
      {children}
    </PageTransitionContext.Provider>
  );
}

export function usePageTransition() {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error("usePageTransition must be used within a PageTransitionProvider");
  }
  return context;
}
