import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

interface PropertyLocationProps {
  location: string;
}

const PropertyLocation = ({ location }: PropertyLocationProps) => {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="space-y-4"
    >
      <h2 className="text-2xl font-serif text-foreground">Localização</h2>
      
      {/* Map Placeholder */}
      <div className="relative h-64 bg-muted rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
          <div className="text-center space-y-3">
            <MapPin size={48} className="mx-auto text-primary/50" />
            <p className="text-muted-foreground text-sm">{location}</p>
          </div>
        </div>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-6 py-3 bg-white text-foreground rounded-full shadow-lg font-medium text-sm hover:shadow-xl transition-shadow"
        >
          <MapPin size={18} className="text-primary" />
          Ver Localização Exata
          <ExternalLink size={14} />
        </a>
      </div>
    </motion.section>
  );
};

export default PropertyLocation;
