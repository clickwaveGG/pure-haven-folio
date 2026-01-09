import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import brokerPhoto from "@/assets/broker-photo.png";

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
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-primary/20 -z-10" />
              <div className="absolute -inset-8 border border-primary/10 -z-10" />
              
              <img
                src={brokerPhoto}
                alt="Joile Barreto - Corretor de Imóveis de Alto Padrão"
                className="w-full max-w-md mx-auto lg:max-w-none object-cover"
              />
              
              {/* Accent decoration */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 -z-10" />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-3 text-sm font-sans tracking-[0.3em] uppercase text-primary mb-6">
              <span className="w-12 h-px bg-primary" />
              Sobre mim
            </span>
            <h2 className="text-headline text-foreground mb-6">
              Excelência e dedicação em cada negociação
            </h2>
            <p className="text-subheadline mb-8">
              Há mais de uma década, ofereço um atendimento diferenciado e 
              personalizado, focado em entender suas necessidades e superar 
              suas expectativas. Meu compromisso é com resultados — 
              e a satisfação dos meus clientes é a prova disso.
            </p>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-10">
              Combinando profissionalismo, conhecimento de mercado e uma rede 
              de contatos exclusiva, garanto acesso às melhores oportunidades 
              do mercado imobiliário. Cada cliente recebe atenção total, 
              transparência em todas as etapas e a segurança de estar 
              nas mãos de um especialista.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-serif text-primary mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
                  </div>
                  <p className="text-xs font-sans tracking-widest uppercase text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="luxury-card p-6 mb-8">
              <blockquote className="text-lg font-serif italic text-foreground/90 mb-3">
                "Meu compromisso é fazer da sua jornada imobiliária uma experiência excepcional."
              </blockquote>
              <div className="divider-gold mb-3" />
              <p className="text-sm font-sans text-muted-foreground">
                Joile Barreto — CRECI 64117
              </p>
            </div>

            <div className="flex gap-4">
              <a href="#contact" className="luxury-button">
                Fale comigo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
