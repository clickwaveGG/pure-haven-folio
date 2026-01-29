import { motion } from "framer-motion";
import { MapPin, TrendingUp, Maximize, Bed, Bath, Car, Ruler, LayoutGrid, Zap, FileCheck } from "lucide-react";

interface PropertyOverviewProps {
  title: string;
  location: string;
  price: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  category: string;
  isExclusive?: boolean;
  // Land-specific properties
  dimensions?: string;
  fronts?: number;
  hasInfrastructure?: boolean;
  hasDocumentation?: boolean;
}

const PropertyOverview = ({
  title,
  location,
  price,
  area,
  bedrooms,
  bathrooms,
  parking,
  category,
  isExclusive = true,
  dimensions,
  fronts,
  hasInfrastructure = true,
  hasDocumentation = true,
}: PropertyOverviewProps) => {
  const isLand = category === "Terreno";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="space-y-6"
    >
      {/* Badges & Title */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wide">
            Venda
          </span>
          {isExclusive && (
            <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full uppercase tracking-wide">
              Exclusivo
            </span>
          )}
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
          {title}
        </h1>

        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin size={18} className="text-primary" />
          <span className="text-sm md:text-base">{location}</span>
        </div>
      </div>

      {/* Price */}
      <div className="space-y-2">
        <p className="text-3xl md:text-4xl text-primary font-semibold" style={{ fontFamily: "Helvetica, sans-serif" }}>
          {price}
        </p>
        <div className="flex items-center gap-2 text-sm text-green-600">
          <TrendingUp size={16} />
          <span>Valorização de 12% na zona</span>
        </div>
      </div>

      {/* Key Features Grid - Different for Land vs Property */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-border">
        {isLand ? (
          <>
            <div className="text-center p-4 bg-muted/50 rounded-xl">
              <Maximize size={24} className="mx-auto mb-2 text-primary" />
              <p className="text-xl font-semibold text-foreground" style={{ fontFamily: "Helvetica, sans-serif" }}>{area}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Área Total</p>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-xl">
              <Ruler size={24} className="mx-auto mb-2 text-primary" />
              <p className="text-xl font-semibold text-foreground" style={{ fontFamily: "Helvetica, sans-serif" }}>{dimensions || "7x30m"}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Dimensões</p>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-xl">
              <LayoutGrid size={24} className="mx-auto mb-2 text-primary" />
              <p className="text-xl font-semibold text-foreground" style={{ fontFamily: "Helvetica, sans-serif" }}>{fronts || 2}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Frentes</p>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-xl">
              <Zap size={24} className="mx-auto mb-2 text-primary" />
              <p className="text-xl font-semibold text-foreground" style={{ fontFamily: "Helvetica, sans-serif" }}>{hasInfrastructure ? "Sim" : "Não"}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Infraestrutura</p>
            </div>
          </>
        ) : (
          <>
            <div className="text-center p-4 bg-muted/50 rounded-xl">
              <Maximize size={24} className="mx-auto mb-2 text-primary" />
              <p className="text-xl font-semibold text-foreground" style={{ fontFamily: "Helvetica, sans-serif" }}>{area}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Área Útil</p>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-xl">
              <Bed size={24} className="mx-auto mb-2 text-primary" />
              <p className="text-xl font-semibold text-foreground" style={{ fontFamily: "Helvetica, sans-serif" }}>{bedrooms}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Suítes</p>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-xl">
              <Bath size={24} className="mx-auto mb-2 text-primary" />
              <p className="text-xl font-semibold text-foreground" style={{ fontFamily: "Helvetica, sans-serif" }}>{bathrooms}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Banheiros</p>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-xl">
              <Car size={24} className="mx-auto mb-2 text-primary" />
              <p className="text-xl font-semibold text-foreground" style={{ fontFamily: "Helvetica, sans-serif" }}>{parking}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Vagas</p>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default PropertyOverview;
