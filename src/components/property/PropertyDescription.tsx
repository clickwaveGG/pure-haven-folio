import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface PropertyDescriptionProps {
  description: string;
  fullDescription: string;
}

const PropertyDescription = ({ description, fullDescription }: PropertyDescriptionProps) => {
  const paragraphs = fullDescription.split("\n\n").filter(Boolean);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-display font-semibold text-foreground">Sobre este Imóvel</h2>

      {/* Lead callout */}
      <div className="relative pl-5 border-l-4 border-primary rounded-r-xl bg-primary/5 py-4 pr-10">
        <Quote
          size={28}
          className="absolute top-3 right-3 text-primary/15"
          strokeWidth={1.5}
        />
        <p className="text-[15px] text-foreground font-medium leading-relaxed">{description}</p>
      </div>

      {/* Full description */}
      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`leading-relaxed ${
              index === 0
                ? "text-sm text-foreground/90 font-medium"
                : "text-sm text-muted-foreground"
            }`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </motion.section>
  );
};

export default PropertyDescription;
