import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Calendar } from "lucide-react";
import { useSkipAnimations } from "@/pages/Index";

const insights = [
  {
    id: 1,
    category: "Dicas",
    title: "5 dicas para comprar seu primeiro imóvel com segurança",
    excerpt: "O que você precisa saber antes de dar esse passo importante na sua vida.",
    date: "15 Jan 2024",
  },
  {
    id: 2,
    category: "Guia",
    title: "Como escolher o bairro ideal para sua família",
    excerpt: "Critérios importantes além da localização: escolas, segurança e qualidade de vida.",
    date: "08 Jan 2024",
  },
];

const Insights = () => {
  const ref = useRef(null);
  const skipAnimations = useSkipAnimations();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/30 relative">
      <div className="container-luxury">
        <motion.div
          ref={ref}
          initial={skipAnimations ? false : { opacity: 0, y: 30 }}
          animate={skipAnimations ? { opacity: 1, y: 0 } : (isInView ? { opacity: 1, y: 0 } : {})}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12"
        >
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-medium tracking-wide text-primary mb-4">
              <span className="w-8 h-0.5 bg-primary rounded-full" />
              Blog & Dicas
            </span>
            <h2 className="text-headline text-foreground">
              Conteúdo para ajudar você
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline transition-all"
          >
            Ver todos
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {insights.map((insight, index) => (
            <motion.article
              key={insight.id}
              initial={skipAnimations ? false : { opacity: 0, y: 30 }}
              animate={skipAnimations ? { opacity: 1, y: 0 } : (isInView ? { opacity: 1, y: 0 } : {})}
              transition={{ duration: 0.6, delay: skipAnimations ? 0 : index * 0.15 }}
              className="group welcome-card p-6 hover-lift transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {insight.category}
                </span>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={12} />
                  <span className="text-xs">{insight.date}</span>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {insight.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {insight.excerpt}
              </p>

              <div className="flex items-center gap-2 text-primary">
                <span className="text-sm font-medium group-hover:underline">
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
