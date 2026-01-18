import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

  const navItems = [
    { label: "Início", href: "#hero" },
    { label: "Serviços", href: "#services" },
    { label: "Imóveis", href: "#properties" },
    { label: "Sobre", href: "#about" },
    { label: "Contato", href: "#contact" },
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
              alt="Joile Barreto, Corretor de Imóveis"
              className="h-24 md:h-20 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#properties" className="hidden md:block welcome-button">
            Ver Imóveis
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
