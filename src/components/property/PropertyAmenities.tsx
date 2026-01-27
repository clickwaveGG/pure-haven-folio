import { motion } from "framer-motion";
import { 
  Wifi, 
  ThermometerSun, 
  Waves, 
  Volume2, 
  Shield, 
  Dumbbell,
  Sparkles,
  Home
} from "lucide-react";

interface PropertyAmenitiesProps {
  amenities: string[];
}

const amenityIcons: Record<string, React.ReactNode> = {
  "Domótica": <Wifi size={20} />,
  "Piso Radiante": <ThermometerSun size={20} />,
  "Piscina": <Waves size={20} />,
  "Isolamento": <Volume2 size={20} />,
  "Segurança": <Shield size={20} />,
  "Academia": <Dumbbell size={20} />,
  "Churrasqueira": <Sparkles size={20} />,
  "Varanda": <Home size={20} />,
};

const getIcon = (amenity: string) => {
  for (const key of Object.keys(amenityIcons)) {
    if (amenity.toLowerCase().includes(key.toLowerCase())) {
      return amenityIcons[key];
    }
  }
  return <Sparkles size={20} />;
};

const PropertyAmenities = ({ amenities }: PropertyAmenitiesProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="space-y-4"
    >
      <h2 className="text-2xl font-serif text-foreground">Comodidades Premium</h2>
      
      <div className="grid grid-cols-2 gap-3">
        {amenities.map((amenity, index) => (
          <motion.div
            key={amenity}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.05 }}
            className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg text-sm text-foreground"
          >
            <span className="text-primary">{getIcon(amenity)}</span>
            {amenity}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PropertyAmenities;
