import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoJoile from "@/assets/logo-joile-barreto.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container-luxury">
        <nav className="flex items-center justify-between h-20 md:h-24">
          <a href="#hero" className="flex items-center">
            <img src={logoJoile} alt="Joile Barreto - Corretor de Imóveis" className="h-32 md:h-28 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-sans tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="hidden md:block luxury-button">
            Agendar Conversa
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background border-b border-border pb-6"
          >
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-sans tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-4">
                <a href="#contact" className="luxury-button w-full text-center">
                  Agendar Conversa
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
