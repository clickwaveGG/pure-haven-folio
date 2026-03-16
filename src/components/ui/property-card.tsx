import * as React from "react";
import { ArrowRight, MapPin, Maximize, Ruler, LayoutGrid, Shield, Waves, Building, School, MapPinned } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

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
  isGatedCommunity?: boolean;
  highlights?: string[];
  price?: string;
  onDetailsClick?: () => void;
}

const PropertyCard = React.forwardRef<HTMLDivElement, PropertyCardProps>(
  (
    {
      className,
      imageUrl,
      title,
      location,
      category,
      description,
      area,
      dimensions,
      fronts,
      floors,
      facadeWidth,
      isGatedCommunity,
      highlights,
      price,
      onDetailsClick,
    },
    ref
  ) => {
    const statsItems: { icon: React.ReactNode; label: string }[] = [];

    statsItems.push({
      icon: <Maximize className="h-3.5 w-3.5" />,
      label: area,
    });

    if (highlights && highlights.length >= 2) {
      statsItems.push({
        icon: <School className="h-3.5 w-3.5" />,
        label: highlights[0],
      });
      statsItems.push({
        icon: <MapPinned className="h-3.5 w-3.5" />,
        label: highlights[1],
      });
    } else if (isGatedCommunity) {
      statsItems.push({
        icon: <Shield className="h-3.5 w-3.5" />,
        label: "Segurança 24h",
      });
      statsItems.push({
        icon: <Waves className="h-3.5 w-3.5" />,
        label: "Lazer",
      });
    } else {
      if (dimensions) {
        statsItems.push({
          icon: <Ruler className="h-3.5 w-3.5" />,
          label: dimensions,
        });
      }
      if (fronts) {
        statsItems.push({
          icon: <LayoutGrid className="h-3.5 w-3.5" />,
          label: `${fronts} Frente${fronts > 1 ? "s" : ""}`,
        });
      }
      if (floors) {
        statsItems.push({
          icon: <LayoutGrid className="h-3.5 w-3.5" />,
          label: `${floors} Pavimento${floors > 1 ? "s" : ""}`,
        });
      }
      if (facadeWidth && !floors) {
        statsItems.push({
          icon: <Ruler className="h-3.5 w-3.5" />,
          label: `Fachada ${facadeWidth}`,
        });
      }
    }

    return (
      <motion.div
        ref={ref}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "group flex flex-col md:flex-row w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm",
          "transition-shadow duration-500 ease-out hover:shadow-xl cursor-pointer",
          className
        )}
        onClick={onDetailsClick}
      >
        {/* Image Section */}
        <div className="relative w-full md:w-[45%] lg:w-[40%] h-[240px] md:h-auto md:min-h-[280px] overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          
          {/* Gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-card/10" />
          
          {/* Category badge */}
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge className="bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1.5 text-xs font-bold tracking-widest uppercase shadow-sm border-0">
              {category}
            </Badge>
          </div>

          {/* Hover overlay with action */}
          <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="hidden group-hover:flex items-center gap-2 rounded-full bg-card/90 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold text-card-foreground shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <Building className="h-4 w-4" />
              Ver Imóvel
            </motion.div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col justify-between p-5 md:p-6">
          <div className="space-y-3">
            {/* Title */}
            <h3 className="text-lg md:text-xl font-display font-bold text-card-foreground leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>

            {/* Location */}
            <p className="flex items-center text-sm text-muted-foreground font-medium">
              <MapPin className="mr-1.5 h-4 w-4 text-primary flex-shrink-0" />
              {location}
            </p>

            {/* Description */}
            <p className="text-sm text-muted-foreground/80 leading-relaxed line-clamp-2">
              {description}
            </p>

            {/* Stats */}
            <div className="flex items-center gap-3 flex-wrap">
              {statsItems.slice(0, 3).map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-secondary/80 rounded-full px-3 py-1.5"
                >
                  {React.cloneElement(stat.icon as React.ReactElement, {
                    className: "h-3.5 w-3.5 text-primary",
                  })}
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom: Price + Button */}
          <div className="flex items-end justify-between pt-4 mt-4 border-t border-border">
            <div>
              {price && (
                <>
                  <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mb-0.5">
                    Valor à Vista
                  </p>
                  <span className="text-xl md:text-2xl font-bold text-primary">
                    {price}
                  </span>
                </>
              )}
            </div>
            <Button
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onDetailsClick?.();
              }}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm group/btn"
            >
              Ver Detalhes
              <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }
);

PropertyCard.displayName = "PropertyCard";

export { PropertyCard };
