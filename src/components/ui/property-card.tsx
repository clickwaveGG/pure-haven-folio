import * as React from "react";
import { ArrowRight, MapPin, Maximize, Ruler, LayoutGrid, Shield, Waves, Building, School, MapPinned } from "lucide-react";
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
    // Build stats items based on property type
    const statsItems: { icon: React.ReactNode; label: string }[] = [];

    statsItems.push({
      icon: <Maximize className="mr-1.5 h-4 w-4 text-muted-foreground" />,
      label: area,
    });

    if (highlights && highlights.length >= 2) {
      statsItems.push({
        icon: <School className="mr-1.5 h-4 w-4 text-muted-foreground" />,
        label: highlights[0],
      });
      statsItems.push({
        icon: <MapPinned className="mr-1.5 h-4 w-4 text-muted-foreground" />,
        label: highlights[1],
      });
    } else if (isGatedCommunity) {
      statsItems.push({
        icon: <Shield className="mr-1.5 h-4 w-4 text-muted-foreground" />,
        label: "Segurança 24h",
      });
      statsItems.push({
        icon: <Waves className="mr-1.5 h-4 w-4 text-muted-foreground" />,
        label: "Lazer",
      });
    } else {
      if (dimensions) {
        statsItems.push({
          icon: <Ruler className="mr-1.5 h-4 w-4 text-muted-foreground" />,
          label: dimensions,
        });
      }
      if (fronts) {
        statsItems.push({
          icon: <LayoutGrid className="mr-1.5 h-4 w-4 text-muted-foreground" />,
          label: `${fronts} Frente${fronts > 1 ? "s" : ""}`,
        });
      }
      if (floors) {
        statsItems.push({
          icon: <LayoutGrid className="mr-1.5 h-4 w-4 text-muted-foreground" />,
          label: `${floors} Pavimento${floors > 1 ? "s" : ""}`,
        });
      }
      if (facadeWidth && !floors) {
        statsItems.push({
          icon: <Ruler className="mr-1.5 h-4 w-4 text-muted-foreground" />,
          label: `Fachada ${facadeWidth}`,
        });
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          "group relative w-full h-[460px] overflow-hidden rounded-2xl border border-border/20 bg-foreground shadow-xl",
          "transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-1 cursor-pointer",
          className
        )}
        onClick={onDetailsClick}
      >
        {/* Background Image with Zoom on Hover */}
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 transition-opacity duration-500" />

        {/* Main Content */}
        <div className="relative flex h-full flex-col justify-between p-6 text-white">
          {/* Top: Badge + Icon */}
          <div className="flex justify-between items-start">
            <span className="bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">
              {category}
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/30 backdrop-blur-md border border-white/20 transition-colors group-hover:bg-white/20">
              <Building className="h-5 w-5 text-white/90" />
            </div>
          </div>

          {/* Bottom: Animated Info */}
          <div className="flex flex-col justify-end relative h-full">
            {/* Main info (slides up on hover) */}
            <div className="space-y-3 transition-transform duration-500 ease-out group-hover:-translate-y-[88px]">
              <div>
                <h3 className="text-2xl font-display font-bold text-white drop-shadow-md leading-tight mb-1">
                  {title}
                </h3>
                <p className="flex items-center text-sm text-zinc-300 font-medium">
                  <MapPin className="mr-1.5 h-4 w-4 text-primary" />
                  {location}
                </p>
              </div>

              {/* Stats row */}
              <div className="flex items-center gap-4 pt-2 border-t border-white/10 flex-wrap">
                {statsItems.slice(0, 3).map((stat, i) => (
                  <div key={i} className="flex items-center text-zinc-200 text-sm">
                    {React.cloneElement(stat.icon as React.ReactElement, {
                      className: "mr-1.5 h-4 w-4 text-zinc-400",
                    })}
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price + Button (appear from below on hover) */}
            <div className="absolute bottom-0 left-0 w-full translate-y-8 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              <div className="flex items-end justify-between pt-4 border-t border-white/10 mt-4">
                <div>
                  {price && (
                    <>
                      <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider mb-0.5">
                        Valor à Vista
                      </p>
                      <span className="text-2xl font-bold text-primary drop-shadow-sm">
                        {price}
                      </span>
                    </>
                  )}
                </div>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDetailsClick?.();
                  }}
                  className="bg-white text-foreground hover:bg-zinc-200 transition-colors shadow-lg"
                >
                  Ver Detalhes <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

PropertyCard.displayName = "PropertyCard";

export { PropertyCard };
