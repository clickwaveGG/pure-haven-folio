"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";

interface SlideData {
  title: string;
  button: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLDivElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, button, title } = slide;

  return (
    <li
      className="relative z-10 flex flex-1 flex-col items-center justify-center text-center opacity-100 transition-all duration-300 ease-in-out"
      style={{
        transform:
          current !== index ? "scale(0.98) rotateX(8deg)" : "scale(1) rotateX(0deg)",
        transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        transformOrigin: "bottom",
      }}
    >
      <div
        ref={slideRef}
        className="relative h-[70vmin] w-[70vmin] overflow-hidden rounded-xl bg-card cursor-pointer"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute inset-0 bg-terracotta/30 transition-opacity duration-300"
          style={{
            opacity: current === index ? 0.6 : 0.9,
          }}
        />
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300"
          style={{
            opacity: current === index ? 1 : 0.8,
          }}
          alt={title}
          src={src}
          onLoad={imageLoaded}
        />
        {current === index && (
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        )}

        <article
          className={`relative z-10 flex h-full flex-col items-center justify-end p-8 transition-opacity duration-500 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="font-display text-2xl md:text-4xl font-bold text-cream mb-4 drop-shadow-lg">
            {title}
          </h3>
          <button className="flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-cream shadow-lg backdrop-blur-sm transition-all hover:bg-terracotta/90 hover:scale-105">
            {button}
            <IconArrowNarrowRight className="h-5 w-5" />
          </button>
        </article>
      </div>
    </li>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`flex h-12 w-12 items-center justify-center rounded-full border border-terracotta/30 bg-background/80 backdrop-blur-sm transition-all hover:bg-terracotta hover:text-cream ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="h-6 w-6 text-terracotta" />
    </button>
  );
};

interface PropertyCarouselProps {
  slides: SlideData[];
}

export function PropertyCarousel({ slides }: PropertyCarouselProps) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div
      className="relative mx-auto h-[80vmin] w-[70vmin]"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul className="absolute flex h-full w-full">
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-4">
        <CarouselControl
          type="previous"
          title="Anterior"
          handleClick={handlePreviousClick}
        />
        <CarouselControl
          type="next"
          title="Próximo"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}
