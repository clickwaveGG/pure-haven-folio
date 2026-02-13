"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SlideData {
  title: string;
  button: string;
  src: string;
  href?: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
  handleButtonClick: (href?: string) => void;
  position: number;
}

const Slide = ({ slide, index, current, handleSlideClick, handleButtonClick, position }: SlideProps) => {
  const slideRef = useRef<HTMLDivElement>(null);
  const { src, button, title } = slide;

  const isActive = position === 0;
  
  const getTransformX = () => {
    if (position === 0) return 0;
    if (position === -1) return -85;
    if (position === 1) return 85;
    if (position === -2) return -170;
    if (position === 2) return 170;
    return position * 85;
  };

  const getScale = () => {
    if (position === 0) return 1;
    if (Math.abs(position) === 1) return 0.85;
    return 0.7;
  };

  const getOpacity = () => {
    if (position === 0) return 1;
    if (Math.abs(position) === 1) return 0.7;
    return 0.4;
  };

  const getZIndex = () => {
    if (position === 0) return 30;
    if (Math.abs(position) === 1) return 20;
    return 10;
  };

  return (
    <motion.li
      className="absolute left-1/2 top-0 flex flex-col items-center justify-center text-center cursor-pointer"
      initial={false}
      animate={{
        x: `calc(-50% + ${getTransformX()}%)`,
        scale: getScale(),
        opacity: getOpacity(),
        zIndex: getZIndex(),
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 35,
      }}
      onClick={() => handleSlideClick(index)}
    >
      <div
        ref={slideRef}
        className="relative h-[50vmin] w-[40vmin] md:h-[60vmin] md:w-[45vmin] overflow-hidden rounded-2xl bg-card shadow-lg"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="absolute inset-0 bg-foreground/20 transition-opacity duration-500"
          style={{
            opacity: isActive ? 0 : 0.4,
          }}
        />
        <img
          className="absolute inset-0 h-full w-full object-cover transition-all duration-300"
          loading="lazy"
          decoding="async"
          style={{
            filter: isActive ? "none" : "grayscale(30%)",
          }}
          alt={title}
          src={src}
        />
        {isActive && (
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}

        <motion.article
          className="absolute inset-0 z-10 flex h-full flex-col items-center justify-end p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isActive ? 1 : 0,
            y: isActive ? 0 : 20 
          }}
          transition={{ duration: 0.4, delay: isActive ? 0.1 : 0 }}
        >
          <h3 className="font-serif text-xl md:text-3xl font-normal text-white mb-3 drop-shadow-lg">
            {title}
          </h3>
          <button 
            className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs md:text-sm font-medium text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
            onClick={(e) => { e.stopPropagation(); handleButtonClick(slide.href); }}
          >
            {button}
            <IconArrowNarrowRight className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        </motion.article>
      </div>
    </motion.li>
  );
};

interface CarouselControlProps {
  type: "previous" | "next";
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <motion.button
      className={`flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full border border-primary/30 bg-card shadow-sm transition-colors hover:bg-primary hover:border-primary group ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <IconArrowNarrowRight className="h-5 w-5 md:h-6 md:w-6 text-primary group-hover:text-primary-foreground transition-colors" />
    </motion.button>
  );
};

interface PropertyCarouselProps {
  slides: SlideData[];
  onButtonClick?: (href?: string) => void;
}

export function PropertyCarousel({ slides, onButtonClick }: PropertyCarouselProps) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev - 1 < 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev + 1 === slides.length ? 0 : prev + 1));
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const getPosition = (index: number) => {
    let diff = index - current;
    
    if (diff > slides.length / 2) {
      diff -= slides.length;
    } else if (diff < -slides.length / 2) {
      diff += slides.length;
    }
    
    return diff;
  };

  const id = useId();

  return (
    <div
      className="relative mx-auto h-[60vmin] md:h-[70vmin] w-full overflow-hidden"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul className="relative h-full w-full" style={{ perspective: "1000px" }}>
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
            handleButtonClick={(href) => onButtonClick?.(href)}
            position={getPosition(index)}
          />
        ))}
      </ul>

      <div className="absolute bottom-0 left-1/2 z-40 flex -translate-x-1/2 gap-3 md:gap-4">
        <CarouselControl
          type="previous"
          title="Anterior"
          handleClick={handlePreviousClick}
        />
        
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              className={`h-2 rounded-full transition-colors ${
                current === index ? "bg-primary" : "bg-primary/30"
              }`}
              animate={{ width: current === index ? 24 : 8 }}
              transition={{ duration: 0.3 }}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
        
        <CarouselControl
          type="next"
          title="Próximo"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}
