import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import logoJoile from "@/assets/logo-joile-barreto.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-grain relative">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start">
            <a href="#hero">
              <img src={logoJoile} alt="Joile Barreto - Corretor de Imóveis" className="h-14 w-auto" />
            </a>
            <p className="text-xs text-muted-foreground mt-2">
              CRECI 64117 | Imóveis de alto padrão
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Joile Barreto. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
