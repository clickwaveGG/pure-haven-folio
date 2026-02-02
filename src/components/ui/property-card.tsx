import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Maximize, Ruler, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  className?: string;
  imageUrl: string;
  mapImageUrl?: string;
  title: string;
  location: string;
  category: string;
  description: string;
  area: string;
  dimensions?: string;
  fronts?: number;
  floors?: number;
  facadeWidth?: string;
  price?: string;
  onDetailsClick?: () => void;
}

const PropertyCard = React.forwardRef<HTMLDivElement, PropertyCardProps>(
  (
    {
      className,
      imageUrl,
      mapImageUrl,
      title,
      location,
      category,
      description,
      area,
      dimensions,
      fronts,
      floors,
      facadeWidth,
      price,
      onDetailsClick,
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "group relative flex flex-col overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer",
          className
        )}
        whileHover="hover"
        initial="initial"
        onClick={onDetailsClick}
      >
        {/* Top section with background image and content */}
        <div className="relative h-56 overflow-hidden">
          <motion.img
            src={imageUrl}
            alt={title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1.05 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className="inline-block px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
              {category}
            </span>
          </div>

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="flex items-center gap-2 text-white/80 mb-2">
              <MapPin size={14} />
              <span className="text-sm">{location}</span>
            </div>
            <h3 className="text-xl font-display font-semibold text-white leading-tight">
              {title}
            </h3>

            {/* Animated button on hover */}
            <motion.div
              className="mt-3 overflow-hidden"
              variants={{
                initial: { opacity: 0, height: 0 },
                hover: { opacity: 1, height: "auto" },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Button
                size="sm"
                className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30"
                onClick={(e) => {
                  e.stopPropagation();
                  onDetailsClick?.();
                }}
              >
                Ver detalhes
                <ArrowRight size={16} />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Bottom section with property details */}
        <div className="flex flex-col gap-4 p-5 bg-card">
          {/* Description and optional map */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              {price && (
                <p className="text-lg font-semibold text-primary mb-1" style={{ fontFamily: "Helvetica, sans-serif" }}>
                  {price}
                </p>
              )}
              <p className="text-sm text-muted-foreground line-clamp-2">
                {description}
              </p>
            </div>

            {/* Mini map preview */}
            {mapImageUrl && (
              <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border border-border">
                <img 
                  src={mapImageUrl} 
                  alt="Localização" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}
          </div>

          {/* Separator */}
          <div className="h-px bg-border" />

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2">
            <div className="flex items-center gap-2 justify-center p-2 bg-muted/50 rounded-lg">
              <Maximize size={16} className="text-primary" />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-foreground">{area}</span>
                <span className="text-[10px] text-muted-foreground uppercase">Área</span>
              </div>
            </div>
            
            {dimensions && (
              <div className="flex items-center gap-2 justify-center p-2 bg-muted/50 rounded-lg">
                <Ruler size={16} className="text-primary" />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-foreground">{dimensions}</span>
                  <span className="text-[10px] text-muted-foreground uppercase">Dimensões</span>
                </div>
              </div>
            )}
            
            {fronts && (
              <div className="flex items-center gap-2 justify-center p-2 bg-muted/50 rounded-lg">
                <LayoutGrid size={16} className="text-primary" />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-foreground">{fronts}</span>
                  <span className="text-[10px] text-muted-foreground uppercase">Frentes</span>
                </div>
              </div>
            )}

            {floors && (
              <div className="flex items-center gap-2 justify-center p-2 bg-muted/50 rounded-lg">
                <LayoutGrid size={16} className="text-primary" />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-foreground">{floors}</span>
                  <span className="text-[10px] text-muted-foreground uppercase">Pavimentos</span>
                </div>
              </div>
            )}

            {facadeWidth && !floors && (
              <div className="flex items-center gap-2 justify-center p-2 bg-muted/50 rounded-lg">
                <Ruler size={16} className="text-primary" />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-foreground">{facadeWidth}</span>
                  <span className="text-[10px] text-muted-foreground uppercase">Fachada</span>
                </div>
              </div>
            )}

            {!dimensions && !fronts && !floors && !facadeWidth && (
              <>
                <div className="flex items-center gap-2 justify-center p-2 bg-muted/50 rounded-lg">
                  <Ruler size={16} className="text-primary" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-foreground">—</span>
                    <span className="text-[10px] text-muted-foreground uppercase">Dimensões</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 justify-center p-2 bg-muted/50 rounded-lg">
                  <LayoutGrid size={16} className="text-primary" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-foreground">—</span>
                    <span className="text-[10px] text-muted-foreground uppercase">Frentes</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </motion.div>
    );
  }
);

PropertyCard.displayName = "PropertyCard";

export { PropertyCard };
