import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, Building2, User, Phone } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import logoJoile from "@/assets/logo-joile-barreto.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs = [
    { title: "Início", icon: Home, href: "#hero" },
    { title: "Serviços", icon: Briefcase, href: "#services" },
    { type: "separator" as const },
    { title: "Imóveis", icon: Building2, href: "#properties" },
    { title: "Sobre", icon: User, href: "#about" },
    { type: "separator" as const },
    { title: "Contato", icon: Phone, href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-luxury">
        <nav className="flex items-center justify-between h-20 md:h-24">
          <a href="#hero" className="flex items-center">
            <img
              src={logoJoile}
              alt="Joíle Barreto, Corretor de Imóveis"
              className="h-24 md:h-20 w-auto"
            />
          </a>

          {/* Expandable Tabs Navigation */}
          <div className="hidden md:block">
            <ExpandableTabs 
              tabs={tabs as any} 
              activeColor="text-primary"
              className="backdrop-blur-md bg-background/80 shadow-sm border-primary/10"
              defaultSelected={0}
            />
          </div>

          <a href="#properties" className="hidden md:block welcome-button">
            Ver Imóveis
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
