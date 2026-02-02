import { motion } from "framer-motion";
import { LocationMap } from "@/components/ui/expand-map";

interface PropertyLocationProps {
  location: string;
  coordinates?: string;
}

const PropertyLocation = ({ location, coordinates }: PropertyLocationProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="space-y-4"
    >
      <h2 className="text-2xl font-display font-semibold text-foreground">Localização</h2>
      
      <LocationMap 
        location={location}
        coordinates={coordinates || "Brasília, Distrito Federal"}
      />
    </motion.section>
  );
};

export default PropertyLocation;
