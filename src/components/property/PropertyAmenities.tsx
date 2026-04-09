import { motion } from "framer-motion";
import {
  Wifi,
  ThermometerSun,
  Waves,
  Volume2,
  Shield,
  Dumbbell,
  Sparkles,
  Home,
  Trees,
  Zap,
  FileCheck,
  Car,
  MapPin,
  Building2,
  Sun,
  Droplets,
  CheckCircle2,
} from "lucide-react";

interface PropertyAmenitiesProps {
  amenities: string[];
}

const iconMap: { keywords: string[]; icon: React.ElementType }[] = [
  { keywords: ["piscina", "pool", "aquático", "acqua"], icon: Waves },
  { keywords: ["segurança", "portaria", "câmera", "controle de acesso", "24h", "fechado"], icon: Shield },
  { keywords: ["churrasqueira", "gourmet", "lazer"], icon: Sparkles },
  { keywords: ["wifi", "internet", "conexão"], icon: Wifi },
  { keywords: ["academia", "fitness", "gym"], icon: Dumbbell },
  { keywords: ["energia solar", "solar"], icon: Sun },
  { keywords: ["energia elétrica", "luz", "rede pública"], icon: Zap },
  { keywords: ["água", "poço", "artesiano", "hidrante"], icon: Droplets },
  { keywords: ["documento", "escritura", "registro", "ok"], icon: FileCheck },
  { keywords: ["frente", "acesso", "fachada"], icon: Building2 },
  { keywords: ["varanda", "sacada", "terraço"], icon: Home },
  { keywords: ["garagem", "vaga", "estacionamento"], icon: Car },
  { keywords: ["localização", "localiz", "próximo", "perto"], icon: MapPin },
  { keywords: ["arborizado", "verde", "natureza", "paisagismo", "parquinho"], icon: Trees },
  { keywords: ["piso radiante", "aquecimento"], icon: ThermometerSun },
  { keywords: ["isolamento", "acústico", "som"], icon: Volume2 },
];

const getIcon = (amenity: string): React.ElementType => {
  const lower = amenity.toLowerCase();
  for (const entry of iconMap) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      return entry.icon;
    }
  }
  return CheckCircle2;
};

const PropertyAmenities = ({ amenities }: PropertyAmenitiesProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="space-y-5"
    >
      <div>
        <h2 className="text-2xl font-display font-semibold text-foreground">
          Características e Diferenciais
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          {amenities.length} pontos destacados neste imóvel
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {amenities.map((amenity, index) => {
          const Icon = getIcon(amenity);
          return (
            <motion.div
              key={amenity}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.04 }}
              className="flex items-center gap-3 p-3 bg-muted/40 hover:bg-muted/70 rounded-xl text-sm text-foreground border border-border/40 transition-colors"
            >
              <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-lg bg-primary/10">
                <Icon size={14} className="text-primary" />
              </span>
              <span className="font-medium">{amenity}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default PropertyAmenities;
