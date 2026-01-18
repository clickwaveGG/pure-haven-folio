import { Instagram, Linkedin, MessageCircle, Heart } from "lucide-react";
import logoJoile from "@/assets/logo-joile-barreto.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-secondary/30">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start">
            <a href="#hero">
              <img src={logoJoile} alt="Joile Barreto, Corretor de Imóveis" className="h-14 w-auto" />
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              CRECI 64117 | Realizando sonhos imobiliários
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Feito com <Heart size={14} className="text-accent fill-accent" /> © {new Date().getFullYear()} Joile Barreto
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
