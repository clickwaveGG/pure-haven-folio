import { motion } from "framer-motion";
import { MapPin, TrendingUp, Maximize, Bed, Bath, Car, Ruler, LayoutGrid, Zap, FileCheck, Map, Building2, Square, Layers, Shield, Waves, Home, Droplets, Sun, Wifi, Tractor, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

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
  dimensions?: string;
  fronts?: number;
  hasInfrastructure?: boolean;
  hasDocumentation?: boolean;
  isGatedCommunity?: boolean;
  // Commercial building specific
  floors?: number;
  facadeWidth?: string;
  landArea?: string;
  builtArea?: string;
  // Farm specific
  tarefas?: string;
  waterWells?: number;
  hasSolarEnergy?: boolean;
  hasElectricity?: boolean;
  hasInternet?: boolean;
}

interface FeatureCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  subtext?: string;
  highlight?: boolean;
}

const FeatureCard = ({ icon: Icon, label, value, subtext, highlight = false }: FeatureCardProps) => (
  <div className={cn(
    "group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1",
    highlight 
      ? "bg-primary text-primary-foreground shadow-xl" 
      : "bg-card text-card-foreground shadow-lg hover:shadow-xl border border-border"
  )}>
    <div className="flex items-start justify-between mb-3">
      <div className={cn(
        "p-2.5 rounded-xl transition-colors duration-300",
        highlight ? "bg-primary-foreground/20" : "bg-primary/10 group-hover:bg-primary/15"
      )}>
        <Icon className={cn("w-5 h-5", highlight ? "text-primary-foreground" : "text-primary")} />
      </div>
      {highlight && (
        <span className="text-xs font-medium bg-primary-foreground/20 px-2 py-1 rounded-full backdrop-blur-sm">
          Destaque
        </span>
      )}
    </div>
    
    <div className="relative z-10">
      <h3 className={cn(
        "text-2xl font-bold mb-0.5 tracking-tight",
        highlight ? "text-primary-foreground" : "text-foreground"
      )} style={{ fontFamily: "Helvetica, sans-serif" }}>
        {value}
      </h3>
      <p className={cn(
        "text-xs font-semibold uppercase tracking-wider mb-0.5",
        highlight ? "text-primary-foreground/80" : "text-muted-foreground"
      )}>
        {label}
      </p>
      {subtext && (
        <p className={cn(
          "text-xs",
          highlight ? "text-primary-foreground/60" : "text-muted-foreground/70"
        )}>
          {subtext}
        </p>
      )}
    </div>

    {/* Decorative background icon */}
    <Icon className={cn(
      "absolute -bottom-3 -right-3 w-20 h-20 opacity-[0.07] rotate-12 transition-transform duration-500 group-hover:scale-110",
      highlight ? "text-primary-foreground" : "text-primary"
    )} />
  </div>
);

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
  isGatedCommunity = false,
  floors,
  facadeWidth,
  landArea,
  builtArea,
  tarefas,
  waterWells,
  hasSolarEnergy = false,
  hasElectricity = true,
  hasInternet = false,
}: PropertyOverviewProps) => {
  const isLand = category === "Terreno";
  const isCommercialBuilding = category === "Prédio Comercial";
  const isFarm = category === "Fazenda";
  const isCondominiumLand = isLand && isGatedCommunity;

  const commercialFeatures: FeatureCardProps[] = [
    {
      icon: Maximize,
      label: "Área Construída",
      value: builtArea || area,
      subtext: "3 Pavimentos",
      highlight: true
    },
    {
      icon: Square,
      label: "Área do Terreno",
      value: landArea || "138,88m²",
      subtext: "Escriturado"
    },
    {
      icon: Layers,
      label: "Pavimentos",
      value: String(floors || 3),
      subtext: "Térreo + 2 Andares"
    },
    {
      icon: Ruler,
      label: "Fachada",
      value: facadeWidth || "6,40m",
      subtext: "Alta Visibilidade"
    },
    {
      icon: Building2,
      label: "Uso",
      value: "Misto",
      subtext: "Comercial/Residencial"
    },
    {
      icon: FileCheck,
      label: "Documentação",
      value: "100% OK",
      subtext: "Escritura e Registro"
    },
  ];

  const farmFeatures: FeatureCardProps[] = [
    {
      icon: Maximize,
      label: "Área Total",
      value: area,
      subtext: tarefas || "7,5 Tarefas",
      highlight: true
    },
    {
      icon: Droplets,
      label: "Poços Artesianos",
      value: String(waterWells || 2),
      subtext: "Água Abundante"
    },
    {
      icon: Zap,
      label: "Energia Elétrica",
      value: hasElectricity ? "Rede Pública" : "Não",
      subtext: "Instalada"
    },
    {
      icon: Sun,
      label: "Energia Solar",
      value: hasSolarEnergy ? "Sim" : "Não",
      subtext: hasSolarEnergy ? "Economia e Autonomia" : ""
    },
    {
      icon: Wifi,
      label: "Internet",
      value: hasInternet ? "Disponível" : "Não",
      subtext: hasInternet ? "Conexão Rural" : ""
    },
    {
      icon: Tractor,
      label: "Potencial",
      value: "Agropecuária",
      subtext: "Grãos, Gado, Orgânicos"
    },
  ];

  const condominiumLandFeatures: FeatureCardProps[] = [
    {
      icon: Maximize,
      label: "Área Total",
      value: area,
      subtext: "100% Aproveitável",
      highlight: true
    },
    {
      icon: Ruler,
      label: "Dimensões",
      value: dimensions || "10x20m",
      subtext: "Geometria Regular"
    },
    {
      icon: Shield,
      label: "Segurança",
      value: "24h",
      subtext: "Portaria e Controle"
    },
    {
      icon: Waves,
      label: "Área de Lazer",
      value: "Completa",
      subtext: "Piscina e Churrasqueira"
    },
    {
      icon: Home,
      label: "Localização",
      value: "Privilegiada",
      subtext: "Primeiras Quadras"
    },
    {
      icon: FileCheck,
      label: "Documentação",
      value: hasDocumentation ? "100% OK" : "Verificar",
      subtext: "Escritura e Registro"
    },
  ];

  const landFeatures: FeatureCardProps[] = [
    {
      icon: Maximize,
      label: "Área Total",
      value: area,
      subtext: "100% Aproveitável",
      highlight: true
    },
    {
      icon: Ruler,
      label: "Dimensões",
      value: dimensions || "7x30m",
      subtext: "Geometria Regular"
    },
    {
      icon: LayoutGrid,
      label: "Frentes",
      value: String(fronts || 2),
      subtext: fronts === 2 ? "Acesso Duplo" : "Acesso Único"
    },
    {
      icon: Zap,
      label: "Infraestrutura",
      value: hasInfrastructure ? "Completa" : "Parcial",
      subtext: "Água, Luz e Esgoto"
    },
    {
      icon: Map,
      label: "Topografia",
      value: "Plano",
      subtext: "Pronto para construir"
    },
    {
      icon: FileCheck,
      label: "Documentação",
      value: hasDocumentation ? "100% OK" : "Verificar",
      subtext: "Escritura e Registro"
    },
  ];

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
        <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-500">
          <TrendingUp size={16} />
          <span>Valorização de 12% na zona</span>
        </div>
      </div>

      {/* Key Features */}
      <div className="pt-6 border-t border-border">
        {isFarm ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {farmFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        ) : isCondominiumLand ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {condominiumLandFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        ) : isLand ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {landFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        ) : isCommercialBuilding ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {commercialFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
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
