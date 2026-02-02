import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Maximize, ArrowRight, Ruler, LayoutGrid, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewDetails: () => void;
  property: {
    image: string;
    title: string;
    location: string;
    category: string;
    description: string;
    area: string;
    dimensions?: string;
    fronts?: number;
    price?: string;
    builtArea?: string;
    landArea?: string;
    floors?: number;
  } | null;
}

export function PropertyPreviewModal({
  isOpen,
  onClose,
  onViewDetails,
  property,
}: PropertyPreviewModalProps) {
  if (!property) return null;

  const isCommercial = property.category === "Prédio Comercial";
  const isLand = property.category === "Terreno";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 md:max-w-2xl md:w-full md:max-h-[85vh] overflow-hidden rounded-2xl bg-card shadow-2xl flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Hero Image */}
            <div className="relative h-64 md:h-80 flex-shrink-0">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  {property.category}
                </span>
              </div>

              {/* Title on Image */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 text-white/80 mb-2">
                  <MapPin size={14} />
                  <span className="text-sm">{property.location}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
                  {property.title}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto p-6 space-y-5">
              {/* Price */}
              {property.price && (
                <p className="text-2xl font-bold text-primary" style={{ fontFamily: "Helvetica, sans-serif" }}>
                  {property.price}
                </p>
              )}

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {property.description}
              </p>

              {/* Stats - Dynamic based on property type */}
              <div className="grid grid-cols-3 gap-3">
                {/* Common: Area */}
                <div className="flex items-center gap-2 justify-center p-3 bg-muted/50 rounded-xl">
                  <Maximize size={18} className="text-primary" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-foreground">
                      {isCommercial ? property.builtArea || property.area : property.area}
                    </span>
                    <span className="text-[10px] text-muted-foreground uppercase">
                      {isCommercial ? "Construído" : "Área"}
                    </span>
                  </div>
                </div>

                {/* Commercial: Floors */}
                {isCommercial && property.floors && (
                  <div className="flex items-center gap-2 justify-center p-3 bg-muted/50 rounded-xl">
                    <Building2 size={18} className="text-primary" />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-foreground">{property.floors}</span>
                      <span className="text-[10px] text-muted-foreground uppercase">Pavimentos</span>
                    </div>
                  </div>
                )}

                {/* Commercial: Land Area */}
                {isCommercial && property.landArea && (
                  <div className="flex items-center gap-2 justify-center p-3 bg-muted/50 rounded-xl">
                    <LayoutGrid size={18} className="text-primary" />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-foreground">{property.landArea}</span>
                      <span className="text-[10px] text-muted-foreground uppercase">Terreno</span>
                    </div>
                  </div>
                )}
                
                {/* Land: Dimensions */}
                {isLand && property.dimensions && (
                  <div className="flex items-center gap-2 justify-center p-3 bg-muted/50 rounded-xl">
                    <Ruler size={18} className="text-primary" />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-foreground">{property.dimensions}</span>
                      <span className="text-[10px] text-muted-foreground uppercase">Dimensões</span>
                    </div>
                  </div>
                )}
                
                {/* Land: Fronts */}
                {isLand && property.fronts && (
                  <div className="flex items-center gap-2 justify-center p-3 bg-muted/50 rounded-xl">
                    <LayoutGrid size={18} className="text-primary" />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-foreground">{property.fronts}</span>
                      <span className="text-[10px] text-muted-foreground uppercase">Frentes</span>
                    </div>
                  </div>
                )}

                {/* Fallback for other property types */}
                {!isCommercial && !isLand && (
                  <>
                    <div className="flex items-center gap-2 justify-center p-3 bg-muted/50 rounded-xl">
                      <Ruler size={18} className="text-primary" />
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-foreground">—</span>
                        <span className="text-[10px] text-muted-foreground uppercase">Dimensões</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 justify-center p-3 bg-muted/50 rounded-xl">
                      <LayoutGrid size={18} className="text-primary" />
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-foreground">—</span>
                        <span className="text-[10px] text-muted-foreground uppercase">Frentes</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* CTA Button */}
            <div className="p-6 pt-0">
              <Button
                onClick={onViewDetails}
                className="w-full py-6 text-base font-semibold"
                size="lg"
              >
                Ver página do imóvel
                <ArrowRight size={18} />
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
