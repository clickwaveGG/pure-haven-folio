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
  const [imageLoaded, setImageLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    setImageLoaded(false);
    setCurrentIndex((prev) => (prev + 1) % displayImages.length);
  }, [displayImages.length]);

  const prevSlide = useCallback(() => {
    setImageLoaded(false);
    setCurrentIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  }, [displayImages.length]);

  const goToSlide = (index: number) => {
    setImageLoaded(false);
    setCurrentIndex(index);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative w-full pt-16 md:pt-20"
    >
      <div className="px-4 md:px-6 lg:px-8">
        {/* Image Container - fits tightly around image */}
        <div
          ref={containerRef}
          className="relative mx-auto w-full max-w-5xl flex items-center justify-center"
        >
          {/* Image wrapper with border */}
          <div className="relative w-full rounded-2xl overflow-hidden border border-border/40 shadow-sm bg-background">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={displayImages[currentIndex]}
                alt={`${title} - Foto ${currentIndex + 1}`}
                loading="eager"
                decoding="async"
                onLoad={() => setImageLoaded(true)}
                className="w-full h-auto max-h-[50vh] md:max-h-[70vh] lg:max-h-[75vh] object-contain mx-auto block"
                initial={{ opacity: 0 }}
                animate={{ opacity: imageLoaded ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
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
