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

      {/* Key Features - Different for Land vs Property */}
      <div className="pt-6 border-t border-border">
        {isLand ? (
          <div className="grid grid-cols-2 gap-3">
            {/* Area Total - Featured */}
            <div className="col-span-2 relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-5 border border-primary/20">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/15 backdrop-blur-sm">
                  <Maximize size={28} className="text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground tracking-tight" style={{ fontFamily: "Helvetica, sans-serif" }}>{area}</p>
                  <p className="text-sm text-muted-foreground font-medium">Área Total</p>
                </div>
              </div>
            </div>

            {/* Dimensões */}
            <div className="relative overflow-hidden rounded-2xl bg-card p-4 border border-border hover:border-primary/30 transition-colors group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex flex-col gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted">
                  <Ruler size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground" style={{ fontFamily: "Helvetica, sans-serif" }}>{dimensions || "7x30m"}</p>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Dimensões</p>
                </div>
              </div>
            </div>

            {/* Frentes */}
            <div className="relative overflow-hidden rounded-2xl bg-card p-4 border border-border hover:border-primary/30 transition-colors group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex flex-col gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted">
                  <LayoutGrid size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground" style={{ fontFamily: "Helvetica, sans-serif" }}>{fronts || 2} frentes</p>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Acessos</p>
                </div>
              </div>
            </div>

            {/* Infraestrutura & Documentação */}
            <div className="col-span-2 rounded-2xl bg-card p-4 border border-border">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3 flex-1">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${hasInfrastructure ? 'bg-green-500/15' : 'bg-muted'}`}>
                    <Zap size={18} className={hasInfrastructure ? 'text-green-600' : 'text-muted-foreground'} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{hasInfrastructure ? "Infraestrutura" : "Sem Infraestrutura"}</p>
                    <p className="text-xs text-muted-foreground">Água, luz, esgoto</p>
                  </div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="flex items-center gap-3 flex-1">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${hasDocumentation ? 'bg-green-500/15' : 'bg-muted'}`}>
                    <FileCheck size={18} className={hasDocumentation ? 'text-green-600' : 'text-muted-foreground'} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{hasDocumentation ? "Documentação OK" : "Verificar Docs"}</p>
                    <p className="text-xs text-muted-foreground">Escritura, IPTU</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PropertyOverview;
