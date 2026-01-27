import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface PropertyDescriptionProps {
  description: string;
  fullDescription: string;
}

const PropertyDescription = ({ description, fullDescription }: PropertyDescriptionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="space-y-4"
    >
      <h2 className="text-2xl font-display font-semibold text-foreground">Sobre a Propriedade</h2>
      
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>{description}</p>
        <p>{fullDescription}</p>
      </div>

      <button className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all">
        Ver características técnicas
        <ChevronRight size={16} />
      </button>
    </motion.section>
  );
};

export default PropertyDescription;
