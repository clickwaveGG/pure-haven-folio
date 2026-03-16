import { Instagram, Linkedin, MessageCircle, Heart } from "lucide-react";
import logoJoile from "@/assets/logo-joile-barreto.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-secondary/30">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start">
            <a href="#hero">
              <img src={logoJoile} alt="Joíle Barreto - RE/MAX Gardense" className="h-14 w-auto" />
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              RE/MAX Gardense | Irecê, BA | Realizando sonhos imobiliários
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
              href="https://wa.me/5574999993009"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Joíle Barreto
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
