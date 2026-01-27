import { motion } from "framer-motion";
import { MapPin, TrendingUp, Maximize, Bed, Bath, Car } from "lucide-react";

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
}: PropertyOverviewProps) => {
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

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight">
          {title}
        </h1>

        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin size={18} className="text-primary" />
          <span className="text-sm md:text-base">{location}</span>
        </div>
      </div>

      {/* Price */}
      <div className="space-y-2">
        <p className="text-3xl md:text-4xl font-serif text-primary font-medium">
          {price}
        </p>
        <div className="flex items-center gap-2 text-sm text-green-600">
          <TrendingUp size={16} />
          <span>Valorização de 12% na zona</span>
        </div>
      </div>

      {/* Key Features Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-border">
        <div className="text-center p-4 bg-muted/50 rounded-xl">
          <Maximize size={24} className="mx-auto mb-2 text-primary" />
          <p className="text-xl font-serif text-foreground">{area}</p>
          <p className="text-xs text-muted-foreground uppercase tracking-wide">Área Útil</p>
        </div>
        <div className="text-center p-4 bg-muted/50 rounded-xl">
          <Bed size={24} className="mx-auto mb-2 text-primary" />
          <p className="text-xl font-serif text-foreground">{bedrooms}</p>
          <p className="text-xs text-muted-foreground uppercase tracking-wide">Suítes</p>
        </div>
        <div className="text-center p-4 bg-muted/50 rounded-xl">
          <Bath size={24} className="mx-auto mb-2 text-primary" />
          <p className="text-xl font-serif text-foreground">{bathrooms}</p>
          <p className="text-xs text-muted-foreground uppercase tracking-wide">Banheiros</p>
        </div>
        <div className="text-center p-4 bg-muted/50 rounded-xl">
          <Car size={24} className="mx-auto mb-2 text-primary" />
          <p className="text-xl font-serif text-foreground">{parking}</p>
          <p className="text-xs text-muted-foreground uppercase tracking-wide">Vagas</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyOverview;
