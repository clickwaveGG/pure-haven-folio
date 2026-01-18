import { Home, Briefcase, Building2, User, Phone } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { motion, useScroll, useTransform } from "framer-motion";

const FloatingNav = () => {
  const tabs = [
    { title: "Início", icon: Home, href: "#hero" },
    { title: "Serviços", icon: Briefcase, href: "#services" },
    { type: "separator" as const },
    { title: "Imóveis", icon: Building2, href: "#properties" },
    { title: "Sobre", icon: User, href: "#about" },
    { type: "separator" as const },
    { title: "Contato", icon: Phone, href: "#contact" },
  ];

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const y = useTransform(scrollY, [0, 100], [20, 0]);

  return (
    <motion.div
      className="fixed bottom-6 left-6 md:left-1/2 md:-translate-x-1/2 z-50"
      style={{ opacity, y }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
    >
      <ExpandableTabs 
        tabs={tabs as any} 
        activeColor="text-primary"
        className="backdrop-blur-md bg-background/95 shadow-lg border-primary/20"
      />
    </motion.div>
  );
};

export default FloatingNav;
