import { motion, AnimatePresence } from "framer-motion";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useRef, useEffect } from "react";

interface PropertyHeroProps {
  image: string;
  images?: string[];
  title: string;
  imageCount?: number;
}

const PropertyHero = ({ image, images, title, imageCount }: PropertyHeroProps) => {
  const displayImages = images && images.length > 0 ? images : [image];
  const totalImages = imageCount ?? displayImages.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = prev, 1 = next
  const [allLoaded, setAllLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const loadedCount = useRef(0);

  // Preload all images on mount
  useEffect(() => {
    loadedCount.current = 0;
    setAllLoaded(false);

    const total = displayImages.length;
    displayImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loadedCount.current += 1;
        if (loadedCount.current >= total) {
          setAllLoaded(true);
        }
      };
    });
  }, [displayImages]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % displayImages.length);
  }, [displayImages.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  }, [displayImages.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "40%" : "-40%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-40%" : "40%",
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative w-full pt-16 md:pt-20"
    >
      <div className="px-4 md:px-6 lg:px-8">
        {/* Hidden preload: render all images off-screen so the browser decodes them */}
        <div className="sr-only" aria-hidden="true">
          {displayImages.map((src, i) => (
            <img key={i} src={src} alt="" decoding="async" />
          ))}
        </div>

        {/* Image Container */}
        <div
          ref={containerRef}
          className="relative mx-auto w-full max-w-5xl flex items-center justify-center"
        >
          <div className="relative w-full rounded-2xl overflow-hidden border border-border/40 shadow-sm bg-background aspect-[4/3] md:aspect-[16/10]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                src={displayImages[currentIndex]}
                alt={`${title} - Foto ${currentIndex + 1}`}
                loading="eager"
                decoding="sync"
                className="absolute inset-0 w-full h-full object-cover"
                transition={{
                  x: { type: "spring", stiffness: 350, damping: 30 },
                  opacity: { duration: 0.15 },
                  scale: { duration: 0.2 },
                }}
              />
            </AnimatePresence>

            {/* Navigation Arrows */}
            {displayImages.length > 1 && (
              <>
                <motion.button
                  onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 md:p-2.5 rounded-full bg-background/80 backdrop-blur-sm shadow-md hover:bg-background transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
                </motion.button>
                <motion.button
                  onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 md:p-2.5 rounded-full bg-background/80 backdrop-blur-sm shadow-md hover:bg-background transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
                </motion.button>
              </>
            )}

            {/* Photo Counter Badge */}
            <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm text-foreground text-xs font-medium shadow-sm">
              <Camera size={14} />
              {currentIndex + 1} / {totalImages}
            </div>
          </div>
        </div>

        {/* Thumbnails + Dots below the image */}
        {displayImages.length > 1 && (
          <div className="mx-auto max-w-5xl mt-3 space-y-3">
            {/* Thumbnail Strip */}
            <div className="hidden md:flex items-center justify-center gap-2">
              {displayImages.slice(0, 7).map((img, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative w-14 h-10 lg:w-16 lg:h-12 rounded-lg overflow-hidden transition-all border-2 ${
                    currentIndex === index
                      ? "border-primary shadow-sm"
                      : "border-transparent opacity-50 hover:opacity-90"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={img}
                    alt={`Miniatura ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
              {displayImages.length > 7 && (
                <div className="flex items-center justify-center w-14 h-10 lg:w-16 lg:h-12 rounded-lg bg-muted text-muted-foreground text-xs font-medium border-2 border-transparent">
                  +{displayImages.length - 7}
                </div>
              )}
            </div>

            {/* Dot Indicators (mobile) */}
            <div className="flex md:hidden items-center justify-center gap-1.5">
              {displayImages.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-1.5 rounded-full transition-colors ${
                    currentIndex === index ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  animate={{ width: currentIndex === index ? 20 : 6 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default PropertyHero;
