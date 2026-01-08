import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background bg-grain flex items-center justify-center">
      <div className="container-luxury text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center justify-center gap-3 text-sm font-sans tracking-[0.3em] uppercase text-primary mb-6">
            <span className="w-12 h-px bg-primary" />
            Erro 404
            <span className="w-12 h-px bg-primary" />
          </span>

          <h1 className="text-display text-foreground mb-6">
            Página não encontrada
          </h1>

          <p className="text-subheadline max-w-lg mx-auto mb-12">
            A página que você está procurando não existe ou foi movida.
          </p>

          <Link to="/" className="luxury-button inline-flex items-center gap-3">
            <ArrowLeft size={16} />
            Voltar ao início
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
