import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import brokerPhoto from "@/assets/broker-photo.png";
import { Shield, Award, Users } from "lucide-react";
import { useSkipAnimations } from "@/pages/Index";

const stats = [
  { value: 150, suffix: "+", label: "Famílias atendidas" },
  { value: 98, suffix: "%", label: "Clientes satisfeitos" },
  { value: 100, suffix: "%", label: "Dedicação em cada atendimento" },
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

  return (
    <section id="about" className="section-padding bg-background relative">
      <div className="container-luxury">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Photo */}
          <motion.div
            initial={skipAnimations ? false : { opacity: 0, x: -40 }}
            animate={skipAnimations ? { opacity: 1, x: 0 } : (isInView ? { opacity: 1, x: 0 } : {})}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col gap-4"
          >
            {/* Photo */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-2xl -z-10" />
              <img
                src={brokerPhoto}
                alt="Joíle Barreto, Corretor de Imóveis RE/MAX Gardense"
                className="w-full max-w-md mx-auto lg:max-w-none object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={skipAnimations ? false : { opacity: 0, y: 20 }}
                  animate={skipAnimations ? { opacity: 1, y: 0 } : (isInView ? { opacity: 1, y: 0 } : {})}
                  transition={{ duration: 0.6, delay: skipAnimations ? 0 : 0.4 + index * 0.1 }}
                  className="text-center p-4 bg-card border border-border rounded-xl shadow-sm"
                >
                  <div className="text-2xl md:text-3xl font-serif text-primary mb-1">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} skipAnimations={skipAnimations} />
                  </div>
                  <p className="text-xs text-muted-foreground leading-tight">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Credential badge */}
            <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl shadow-sm">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Award size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">CRECI 34117 — RE/MAX Gardense</p>
                <p className="text-xs text-muted-foreground">Credenciado pela maior rede imobiliária do mundo</p>
              </div>
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
              Corretor afiliado à RE/MAX Gardense em Irecê, Bahia. Ajudo
              famílias e investidores a encontrar o imóvel certo — seja a primeira
              casa do casal jovem, o espaço maior que a família precisa ou o
              terreno ideal para construir do zero.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Como parte da maior rede imobiliária do mundo, tenho acesso a
              ferramentas exclusivas e uma metodologia comprovada. Mas o que
              diferencia meu trabalho é simples: eu ouço antes de oferecer.
              Cada atendimento é único, próximo e transparente — do primeiro
              contato à entrega das chaves.
            </p>

            {/* Trust signals */}
            <div className="flex flex-col gap-3 mb-8">
              {[
                { icon: <Shield size={16} />, text: "Processo claro e sem surpresas do início ao fim" },
                { icon: <Users size={16} />, text: "Mais de 150 famílias atendidas em Irecê e região" },
                { icon: <Award size={16} />, text: "Credenciado CRECI — RE/MAX Gardense" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="text-primary flex-shrink-0">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>

            <div className="welcome-card p-5 mb-6">
              <blockquote className="text-base font-serif italic text-foreground/90 mb-2">
                "Minha missão é tornar a sua jornada imobiliária simples, segura e, por que não, prazerosa."
              </blockquote>
              <div className="divider-primary mb-2" />
              <p className="text-sm text-muted-foreground">
                Joíle Barreto — Corretor de Imóveis
                <br />CRECI 34117 | RE/MAX Gardense
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
