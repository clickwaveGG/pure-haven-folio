import { motion, AnimatePresence } from "framer-motion";
import { usePageTransition } from "@/contexts/PageTransitionContext";
import { useEffect, useState } from "react";

export function PageTransitionOverlay() {
  const { transitionData, isTransitioning, endTransition } = usePageTransition();
  const [phase, setPhase] = useState<"idle" | "expanding" | "filling" | "done">("idle");

  useEffect(() => {
    if (isTransitioning && transitionData?.rect) {
      setPhase("expanding");
      
      // Phase 2: Fill screen
      const fillTimer = setTimeout(() => {
        setPhase("filling");
      }, 300);

      // Phase 3: Done
      const doneTimer = setTimeout(() => {
        setPhase("done");
        endTransition();
      }, 700);

      return () => {
        clearTimeout(fillTimer);
        clearTimeout(doneTimer);
      };
    } else {
      setPhase("idle");
    }
  }, [isTransitioning, transitionData, endTransition]);

  if (!transitionData?.rect || phase === "idle") {
    return null;
  }

  const { rect, image, title, location } = transitionData;

  // Calculate positions
  const startStyles = {
    top: rect.top,
    left: rect.left,
    width: rect.width,
    height: rect.height,
    borderRadius: 16,
  };

  const expandedStyles = {
    top: 0,
    left: 0,
    width: window.innerWidth,
    height: window.innerHeight,
    borderRadius: 0,
  };

  const currentStyles = phase === "expanding" || phase === "filling" || phase === "done" 
    ? expandedStyles 
    : startStyles;

  return (
    <AnimatePresence>
      {(phase === "expanding" || phase === "filling") && (
        <motion.div
          className="fixed inset-0 z-[100] pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute overflow-hidden shadow-2xl"
            initial={startStyles}
            animate={currentStyles}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 200,
              mass: 0.8,
            }}
          >
            {/* Image */}
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: phase === "filling" ? 1.05 : 1 }}
              transition={{ duration: 0.4 }}
            />
            
            {/* Gradient overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: phase === "filling" ? 0.7 : 0.5 }}
            />

            {/* Content that fades out */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
              initial={{ opacity: 1, y: 0 }}
              animate={{ 
                opacity: phase === "filling" ? 0 : 1,
                y: phase === "filling" ? 30 : 0 
              }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-white/80 text-sm mb-1">{location}</p>
              <h2 className="text-white font-display font-bold text-2xl md:text-4xl">
                {title}
              </h2>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
