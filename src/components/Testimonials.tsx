import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Um profissional impecável. Encontrou exatamente o que procurávamos, sem nos fazer perder tempo com opções fora do nosso perfil.",
    author: "M.S.",
    role: "Empresário",
    rating: 5,
  },
  {
    id: 2,
    quote: "A discrição e o profissionalismo fizeram toda a diferença. Negociação conduzida com maestria do início ao fim.",
    author: "C.A.",
    role: "Médica",
    rating: 5,
  },
  {
    id: 3,
    quote: "Superou nossas expectativas. Conseguiu uma propriedade que nem sabíamos que estava disponível no mercado.",
    author: "R.F.",
    role: "Investidor",
    rating: 5,
  },
];

const Testimonials = () => {
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
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <div>
              <span className="inline-flex items-center gap-3 text-sm font-sans tracking-[0.3em] uppercase text-primary mb-6">
                <span className="w-12 h-px bg-primary" />
                Depoimentos
              </span>
              <h2 className="text-headline text-foreground">
                O que nossos clientes dizem
              </h2>
            </div>
            <div className="lg:text-right">
              <div className="inline-flex items-center gap-3 luxury-card px-6 py-4">
                <span className="text-4xl font-serif text-primary">98%</span>
                <div className="text-left">
                  <p className="text-xs font-sans tracking-widest uppercase text-muted-foreground">
                    Taxa de
                  </p>
                  <p className="text-sm font-sans text-foreground">
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
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="luxury-card p-8 hover-lift transition-all duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>

              <blockquote className="text-foreground font-serif text-lg leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              <div className="divider-gold mb-6" />

              <div>
                <p className="text-foreground font-sans text-sm font-medium">
                  {testimonial.author}
                </p>
                <p className="text-muted-foreground font-sans text-xs tracking-widest uppercase">
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
