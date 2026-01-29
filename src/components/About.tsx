import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import brokerPhoto from "@/assets/broker-photo.png";
import { useSkipAnimations } from "@/pages/Index";

const stats = [
  { value: 8, suffix: "+", label: "Anos de experiência" },
  { value: 150, suffix: "+", label: "Famílias atendidas" },
  { value: 98, suffix: "%", label: "Clientes satisfeitos" },
];

const AnimatedCounter = ({ value, suffix, inView, skipAnimations }: { value: number; suffix: string; inView: boolean; skipAnimations: boolean }) => {
  const [count, setCount] = useState(skipAnimations ? value : 0);

  useEffect(() => {
    if (skipAnimations || !inView) return;

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
  }, [value, inView, skipAnimations]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  const ref = useRef(null);
  const skipAnimations = useSkipAnimations();
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldAnimate = !skipAnimations && isInView;

  return (
    <section id="about" className="section-padding bg-background relative">
      <div className="container-luxury">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={skipAnimations ? false : { opacity: 0, x: -40 }}
            animate={skipAnimations ? { opacity: 1, x: 0 } : (isInView ? { opacity: 1, x: 0 } : {})}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-2xl -z-10" />
              
              <img
                src={brokerPhoto}
                alt="Joile Barreto, Corretor de Imóveis"
                className="w-full max-w-md mx-auto lg:max-w-none object-cover rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={skipAnimations ? false : { opacity: 0, x: 40 }}
            animate={skipAnimations ? { opacity: 1, x: 0 } : (isInView ? { opacity: 1, x: 0 } : {})}
            transition={{ duration: 0.8, delay: skipAnimations ? 0 : 0.2 }}
          >
            <span className="inline-flex items-center gap-3 text-sm font-medium tracking-wide text-primary mb-4">
              <span className="w-8 h-0.5 bg-primary rounded-full" />
              Sobre mim
            </span>
            <h2 className="text-headline text-foreground mb-6">
              Prazer, sou Joíle Barreto
            </h2>
            <p className="text-subheadline mb-6">
              Corretor afiliado à RE/MAX Gardense em Irecê, Bahia. Há anos ajudo 
              pessoas a encontrarem o imóvel ideal na nossa região. Seja você um 
              jovem casal comprando o primeiro apartamento ou uma família buscando 
              mais espaço, meu compromisso é o mesmo: entender suas necessidades 
              e transformar sonhos em realidade.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Como parte da maior rede imobiliária do mundo, ofereço acesso a 
              ferramentas exclusivas, treinamento de excelência e uma metodologia 
              comprovada. Trabalho com transparência, proximidade e dedicação em 
              cada atendimento. Você pode contar comigo do início ao fim.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={skipAnimations ? false : { opacity: 0, y: 20 }}
                  animate={skipAnimations ? { opacity: 1, y: 0 } : (isInView ? { opacity: 1, y: 0 } : {})}
                  transition={{ duration: 0.6, delay: skipAnimations ? 0 : 0.4 + index * 0.1 }}
                  className="text-center p-4 bg-secondary/50 rounded-xl"
                >
                  <div className="text-2xl md:text-3xl font-serif text-primary mb-1">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} skipAnimations={skipAnimations} />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="welcome-card p-5 mb-6">
              <blockquote className="text-base font-serif italic text-foreground/90 mb-2">
                "Minha missão é tornar a sua jornada imobiliária simples, segura e, por que não, prazerosa."
              </blockquote>
              <div className="divider-primary mb-2" />
              <p className="text-sm text-muted-foreground">
                Joíle Barreto | RE/MAX Gardense | CRECI BA
              </p>
            </div>

            <div className="flex gap-4">
              <a href="#contact" className="welcome-button">
                Vamos conversar
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
