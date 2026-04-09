import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import { useSkipAnimations } from "@/pages/Index";

const testimonials = [
  {
    id: 1,
    quote: "Joíle nos ajudou a comprar nossa primeira casa com muita paciência. Ele entendeu o que queríamos desde o início e nunca empurrou nada que não fosse certo pra gente.",
    author: "Mariana S.",
    role: "Professora",
    rating: 5,
  },
  {
    id: 2,
    quote: "Processo muito claro, sem surpresas. Ele acompanhou tudo — da visita ao cartório. Recomendo para quem quer um corretor que realmente se importa.",
    author: "Carlos A.",
    role: "Engenheiro",
    rating: 5,
  },
  {
    id: 3,
    quote: "Encontrou exatamente o que nossa família precisava em Irecê. Comunicação rápida, atendimento próximo e resolveu cada detalhe sem complicação.",
    author: "Roberto F.",
    role: "Empresário",
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const skipAnimations = useSkipAnimations();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background relative">
      <div className="container-luxury">
        <motion.div
          ref={ref}
          initial={skipAnimations ? false : { opacity: 0, y: 30 }}
          animate={skipAnimations ? { opacity: 1, y: 0 } : (isInView ? { opacity: 1, y: 0 } : {})}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <div>
              <span className="inline-flex items-center gap-3 text-sm font-medium tracking-wide text-primary mb-4">
                <span className="w-8 h-0.5 bg-primary rounded-full" />
                Depoimentos
              </span>
              <h2 className="text-headline text-foreground">
                O que dizem quem passou por aqui
              </h2>
            </div>
            <div className="lg:text-right">
              <div className="inline-flex items-center gap-3 welcome-card px-5 py-4">
                <span className="text-3xl font-serif text-primary">98%</span>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">
                    Taxa de
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    Satisfação
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={skipAnimations ? false : { opacity: 0, y: 30 }}
              animate={skipAnimations ? { opacity: 1, y: 0 } : (isInView ? { opacity: 1, y: 0 } : {})}
              transition={{ duration: 0.6, delay: skipAnimations ? 0 : index * 0.15 }}
              className="welcome-card p-6 hover-lift transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>

              <blockquote className="text-foreground font-serif text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              <div className="divider-primary mb-4" />

              <div>
                <p className="text-foreground font-medium text-sm">
                  {testimonial.author}
                </p>
                <p className="text-muted-foreground text-xs">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
