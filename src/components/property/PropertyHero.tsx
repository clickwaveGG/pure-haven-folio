import { motion, AnimatePresence } from "framer-motion";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback } from "react";

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

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % displayImages.length);
  }, [displayImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  }, [displayImages.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative w-full pt-12 md:pt-14"
    >
      <div className="h-full p-2">
        {/* Main Carousel */}
        <div 
          className="relative h-[35vh] md:h-[45vh] lg:h-[50vh] rounded-2xl overflow-hidden group"
        >
          {/* Images */}
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={displayImages[currentIndex]}
              alt={`${title} - Foto ${currentIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Navigation Arrows - Always visible */}
          {displayImages.length > 1 && (
            <>
              <motion.button
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
              </motion.button>
              <motion.button
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
              </motion.button>
            </>
          )}

          {/* Photo Counter Badge */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm text-foreground text-sm font-medium">
            <Camera size={16} />
            {currentIndex + 1} / {totalImages}
          </div>

          {/* Dot Indicators */}
          {displayImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
              {displayImages.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-colors ${
                    currentIndex === index ? "bg-primary" : "bg-white/50"
                  }`}
                  animate={{ width: currentIndex === index ? 24 : 8 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.2 }}
                 />
              ))}
            </div>
          )}

          {/* Thumbnail Strip - Hidden on Mobile */}
          {displayImages.length > 1 && (
            <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-10 hidden md:flex items-center gap-2 p-2 rounded-xl bg-background/60 backdrop-blur-md">
              {displayImages.slice(0, 6).map((img, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative w-16 h-12 rounded-lg overflow-hidden transition-all ${
                    currentIndex === index ? "ring-2 ring-primary ring-offset-2 ring-offset-background/60" : "opacity-60 hover:opacity-100"
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
              {displayImages.length > 6 && (
                <div className="flex items-center justify-center w-16 h-12 rounded-lg bg-muted/80 text-muted-foreground text-xs font-medium">
                  +{displayImages.length - 6}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default PropertyHero;
