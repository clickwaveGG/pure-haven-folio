import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 12, suffix: "+", label: "Anos de experiência" },
  { value: 280, suffix: "+", label: "Negócios realizados" },
  { value: 50, suffix: "M+", label: "Em transações" },
];

const AnimatedCounter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary/30 bg-grain relative">
      <div className="container-luxury">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-3 text-sm font-sans tracking-[0.3em] uppercase text-primary mb-6">
              <span className="w-12 h-px bg-primary" />
              Sobre mim
            </span>
            <h2 className="text-headline text-foreground mb-6">
              Especialista em realizar sonhos imobiliários
            </h2>
            <p className="text-subheadline mb-8">
              Há mais de uma década, dedico minha carreira a conectar pessoas
              extraordinárias a propriedades extraordinárias. Meu trabalho vai além
              da intermediação — é sobre entender profundamente o estilo de vida
              que você busca e encontrar o cenário perfeito para ele.
            </p>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-10">
              Com formação em arquitetura e especialização em mercado de luxo,
              trago um olhar diferenciado para cada negociação. Minha rede de
              contatos exclusivos garante acesso a imóveis off-market e
              oportunidades únicas antes mesmo de chegarem ao mercado.
            </p>

            <div className="flex gap-4">
              <a href="#contact" className="luxury-button">
                Vamos conversar
              </a>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-3">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
                  </div>
                  <p className="text-xs font-sans tracking-widest uppercase text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 luxury-card p-8">
              <blockquote className="text-lg font-serif italic text-foreground/90 mb-4">
                "O imóvel perfeito existe. Meu trabalho é encontrá-lo para você."
              </blockquote>
              <div className="divider-gold mb-4" />
              <p className="text-sm font-sans text-muted-foreground">
                Joile Barreto — CRECI 64117
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
