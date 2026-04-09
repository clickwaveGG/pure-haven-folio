import * as React from "react";
import {
  MapPin, Maximize2, ArrowRight, BedDouble, Bath,
  Ruler, Shield, Building2, Trees, Waves, CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PropertyCardProps {
  className?: string;
  imageUrl: string;
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
  bedrooms?: number;
  bathrooms?: number;
  onDetailsClick?: () => void;
}

const categoryConfig: Record<string, { color: string; icon: React.ReactNode }> = {
  "Terreno":        { color: "bg-emerald-600",  icon: <Trees  size={11} /> },
  "Terreno Rural":  { color: "bg-lime-700",      icon: <Trees  size={11} /> },
  "Casa":           { color: "bg-primary",        icon: <Building2 size={11} /> },
  "Apartamento":    { color: "bg-blue-600",       icon: <Building2 size={11} /> },
  "Prédio Comercial":{ color: "bg-slate-700",    icon: <Building2 size={11} /> },
  "Fazenda":        { color: "bg-amber-700",      icon: <Trees  size={11} /> },
};

const PropertyCard = React.forwardRef<HTMLDivElement, PropertyCardProps>(
  (
    {
      className, imageUrl, title, location, category, description,
      area, dimensions, fronts, floors, facadeWidth,
      isGatedCommunity, highlights, price, bedrooms, bathrooms,
      onDetailsClick,
    },
    ref
  ) => {
    const cat = categoryConfig[category] ?? { color: "bg-primary", icon: <Building2 size={11} /> };

    // Build stat chips
    const chips: { icon: React.ReactNode; label: string }[] = [
      { icon: <Maximize2 size={12} />, label: area },
    ];
    if (bedrooms)           chips.push({ icon: <BedDouble  size={12} />, label: `${bedrooms} quartos` });
    if (bathrooms)          chips.push({ icon: <Bath       size={12} />, label: `${bathrooms} banheiros` });
    if (dimensions && !bedrooms) chips.push({ icon: <Ruler size={12} />, label: dimensions });
    if (fronts)             chips.push({ icon: <Ruler      size={12} />, label: `${fronts} frente${fronts > 1 ? "s" : ""}` });
    if (floors)             chips.push({ icon: <Building2  size={12} />, label: `${floors} pav.` });
    if (isGatedCommunity)   chips.push({ icon: <Shield     size={12} />, label: "Cond. fechado" });
    if (facadeWidth && !floors) chips.push({ icon: <Ruler  size={12} />, label: `Fachada ${facadeWidth}` });

    const topChips = chips.slice(0, 3);

    return (
      <motion.div
        ref={ref}
        onClick={onDetailsClick}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "group relative flex flex-col w-full overflow-hidden rounded-2xl bg-card cursor-pointer",
          "border border-border shadow-sm hover:shadow-2xl transition-shadow duration-500",
          className
        )}
      >
        {/* ── IMAGE ── */}
        <div className="relative h-56 sm:h-60 overflow-hidden bg-muted/20">
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

          {/* Top row: category + available */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span className={cn(
              "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold text-white shadow-md",
              cat.color
            )}>
              {cat.icon}
              {category}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-semibold text-slate-800 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Disponível
            </span>
          </div>

          {/* Bottom: price over image */}
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
            {price && (
              <div>
                <p className="text-[10px] font-medium text-white/70 uppercase tracking-wider mb-0.5">
                  Valor à vista
                </p>
                <p className="text-xl font-bold text-white drop-shadow-md leading-none">
                  {price}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ── CONTENT ── */}
        <div className="flex flex-col flex-1 p-5">

          {/* Title */}
          <h3 className="text-base font-bold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-300 mb-2">
            {title}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-muted-foreground mb-3">
            <MapPin size={13} className="text-primary flex-shrink-0" />
            <span className="text-xs font-medium truncate">{location}</span>
          </div>

          {/* Description */}
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-4">
            {description}
          </p>

          {/* Stat chips */}
          <div className="flex flex-wrap gap-2 mb-4">
            {topChips.map((chip, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 rounded-lg bg-secondary px-2.5 py-1.5 text-[11px] font-medium text-muted-foreground"
              >
                <span className="text-primary">{chip.icon}</span>
                {chip.label}
              </span>
            ))}
          </div>

          {/* Highlights */}
          {highlights && highlights.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {highlights.slice(0, 2).map((h, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-[11px] font-medium text-primary"
                >
                  <CheckCircle2 size={10} />
                  {h}
                </span>
              ))}
            </div>
          )}

          {/* Spacer */}
          <div className="flex-1" />

          {/* Divider + CTA */}
          <div className="pt-3 border-t border-border">
            <button
              onClick={(e) => { e.stopPropagation(); onDetailsClick?.(); }}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all duration-200 group/btn"
            >
              Ver detalhes do imóvel
              <ArrowRight size={15} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      </motion.div>
    );
  }
);

PropertyCard.displayName = "PropertyCard";
export { PropertyCard };
