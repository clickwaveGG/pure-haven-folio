"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface ExpandableCardProps {
  title: string;
  src: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  classNameExpanded?: string;
  autoExpand?: boolean;
  onClose?: () => void;
  [key: string]: any;
}

export function ExpandableCard({
  title,
  src,
  description,
  children,
  className,
  classNameExpanded,
  autoExpand = false,
  onClose,
  ...props
}: ExpandableCardProps) {
  const [active, setActive] = React.useState(autoExpand);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const id = React.useId();

  React.useEffect(() => {
    if (autoExpand) {
      setActive(true);
    }
  }, [autoExpand]);

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(false);
        onClose?.();
      }
    };

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [active, onClose]);

  const handleClose = () => {
    setActive(false);
    onClose?.();
  };

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 h-full w-full z-50"
            onClick={handleClose}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[60] p-4">
            <motion.div
              layoutId={`card-${id}`}
              ref={cardRef}
              className={cn(
                "w-full max-w-3xl h-full max-h-[90vh] flex flex-col bg-background rounded-3xl overflow-hidden shadow-2xl",
                classNameExpanded
              )}
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 300,
                duration: 0.5 
              }}
            >
              <motion.div
                layoutId={`image-${id}`}
                className="relative w-full h-64 md:h-80"
              >
                <img
                  src={src}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>

              <div className="flex justify-between items-start p-6 bg-background">
                <div className="flex flex-col gap-1">
                  <motion.p
                    layoutId={`description-${id}`}
                    className="text-muted-foreground text-sm"
                  >
                    {description}
                  </motion.p>
                  <motion.h3
                    layoutId={`title-${id}`}
                    className="font-display font-bold text-2xl text-foreground"
                  >
                    {title}
                  </motion.h3>
                </div>

                <button
                  onClick={handleClose}
                  className="flex items-center justify-center bg-muted hover:bg-muted/80 rounded-full h-10 w-10 transition-colors"
                >
                  <X size={20} className="text-foreground" />
                </button>
              </div>

              <div className="flex-1 overflow-auto p-6 pt-0">
                <div className="text-muted-foreground">
                  {children}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div
        layoutId={`card-${id}`}
        onClick={() => setActive(true)}
        className={cn(
          "p-3 flex flex-col justify-between items-center bg-card shadow-sm rounded-2xl cursor-pointer border border-border hover:shadow-lg transition-shadow",
          className
        )}
        {...props}
      >
        <motion.div layoutId={`image-${id}`} className="w-full">
          <img
            src={src}
            alt={title}
            className="w-full h-48 md:h-64 rounded-xl object-cover"
          />
        </motion.div>

        <div className="flex justify-between items-center w-full p-4">
          <div className="flex flex-col gap-1">
            <motion.p
              layoutId={`description-${id}`}
              className="text-muted-foreground text-sm"
            >
              {description}
            </motion.p>
            <motion.h3
              layoutId={`title-${id}`}
              className="font-display font-semibold text-lg text-foreground"
            >
              {title}
            </motion.h3>
          </div>

          <motion.button className="px-4 py-2 text-sm rounded-full font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            Ver mais
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}

// Entry animation wrapper for property pages
interface PropertyEntryAnimationProps {
  image: string;
  title: string;
  location: string;
  children: React.ReactNode;
  onAnimationComplete?: () => void;
}

export function PropertyEntryAnimation({
  image,
  title,
  location,
  children,
  onAnimationComplete,
}: PropertyEntryAnimationProps) {
  const [showContent, setShowContent] = React.useState(false);
  const [animationPhase, setAnimationPhase] = React.useState<'initial' | 'expanding' | 'complete'>('initial');

  React.useEffect(() => {
    // Start expansion immediately
    const expandTimer = setTimeout(() => {
      setAnimationPhase('expanding');
    }, 100);

    // Show content after expansion
    const contentTimer = setTimeout(() => {
      setAnimationPhase('complete');
      setShowContent(true);
      onAnimationComplete?.();
    }, 800);

    return () => {
      clearTimeout(expandTimer);
      clearTimeout(contentTimer);
    };
  }, [onAnimationComplete]);

  return (
    <div className="min-h-screen bg-background">
      {/* Animated overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: animationPhase === 'complete' ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 pointer-events-none"
        style={{ display: animationPhase === 'complete' ? 'none' : 'block' }}
      >
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <motion.div
            initial={{ 
              width: "300px", 
              height: "400px",
              borderRadius: "1.5rem",
            }}
            animate={{ 
              width: animationPhase === 'expanding' ? "100vw" : "300px",
              height: animationPhase === 'expanding' ? "100vh" : "400px",
              borderRadius: animationPhase === 'expanding' ? "0" : "1.5rem",
            }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 200,
              duration: 0.6 
            }}
            className="relative overflow-hidden shadow-2xl"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
              initial={{ opacity: 1, y: 0 }}
              animate={{ 
                opacity: animationPhase === 'expanding' ? 0 : 1,
                y: animationPhase === 'expanding' ? 20 : 0 
              }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-white/80 text-sm mb-1">{location}</p>
              <h2 className="text-white font-display font-bold text-2xl md:text-3xl">
                {title}
              </h2>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Actual page content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
