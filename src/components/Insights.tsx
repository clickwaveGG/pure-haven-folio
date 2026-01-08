import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Calendar } from "lucide-react";

const insights = [
  {
    id: 1,
    category: "Tendências",
    title: "5 tendências do mercado imobiliário de luxo para 2024",
    excerpt: "O que esperar do mercado de alto padrão nos próximos meses e como se posicionar.",
    date: "15 Jan 2024",
  },
  {
    id: 2,
    category: "Guia",
    title: "Como escolher o terreno ideal para sua casa dos sonhos",
    excerpt: "Critérios essenciais que vão além da localização e metragem.",
    date: "08 Jan 2024",
  },
];

const Insights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/30 bg-grain relative">
      <div className="container-luxury">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16"
        >
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-sans tracking-[0.3em] uppercase text-primary mb-6">
              <span className="w-12 h-px bg-primary" />
              Insights & Ideias
            </span>
            <h2 className="text-headline text-foreground">
              Conteúdo para quem busca conhecimento
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary text-sm font-sans tracking-widest uppercase hover:opacity-80 transition-opacity"
          >
            Ver todos
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {insights.map((insight, index) => (
            <motion.article
              key={insight.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group luxury-card p-8 hover-lift hover-glow transition-all duration-500 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-sans tracking-widest uppercase">
                  {insight.category}
                </span>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={12} />
                  <span className="text-xs font-sans">{insight.date}</span>
                </div>
              </div>

              <h3 className="text-xl font-serif text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {insight.title}
              </h3>

              <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-6">
                {insight.excerpt}
              </p>

              <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-sans tracking-widest uppercase">
                  Ler artigo
                </span>
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
