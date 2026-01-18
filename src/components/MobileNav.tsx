import { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Home, Briefcase, Building2, User, Phone, Menu, X } from "lucide-react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform values based on scroll - button grows from 0 to 250px scroll
  const buttonSize = useTransform(scrollY, [0, 250], [20, 56]);
  const iconOpacity = useTransform(scrollY, [150, 250], [0, 1]);
  const iconScale = useTransform(scrollY, [150, 250], [0.3, 1]);

  const navItems = [
    { title: "Início", icon: Home, href: "#hero" },
    { title: "Serviços", icon: Briefcase, href: "#services" },
    { title: "Imóveis", icon: Building2, href: "#properties" },
    { title: "Sobre", icon: User, href: "#about" },
    { title: "Contato", icon: Phone, href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Nav Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 md:hidden"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div 
          className="relative flex items-center justify-center bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-lg overflow-hidden"
          style={{ 
            width: buttonSize,
            height: buttonSize,
          }}
        >
          {/* Icon */}
          <motion.div
            style={{ 
              opacity: iconOpacity,
              scale: iconScale 
            }}
            className="text-primary-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.div>
        </motion.div>
      </motion.button>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              className="fixed bottom-24 left-6 z-50 md:hidden"
            >
              <div className="bg-background/95 backdrop-blur-md rounded-2xl border border-border shadow-xl p-2 flex flex-col gap-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.title}
                      onClick={() => handleNavClick(item.href)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors duration-200"
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
