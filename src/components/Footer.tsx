import { Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-grain relative">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <a href="#hero" className="text-2xl font-serif text-foreground tracking-wide">
              <span className="text-primary">LUXE</span>ESTATE
            </a>
            <p className="text-xs text-muted-foreground mt-2">
              Imóveis de alto padrão em São Paulo e região.
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
            © {new Date().getFullYear()} LuxeEstate. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
