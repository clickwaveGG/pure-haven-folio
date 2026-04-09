"use client"

import type React from "react"
import { Home, Shield, Handshake, TrendingUp } from "lucide-react"
import { GlowingEffect } from "./glowing-effect"

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

const features: Feature[] = [
  {
    title: "Busca Personalizada",
    description:
      "Ouço antes de oferecer. Entendo seu perfil, orçamento e momento de vida para encontrar opções que realmente fazem sentido.",
    icon: <Home className="w-5 h-5" />,
  },
  {
    title: "Processo Transparente",
    description: "Cada etapa explicada com clareza. Sem surpresas, sem letras miúdas — você sabe exatamente onde está no processo.",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    title: "Suporte do Início ao Fim",
    description: "Da primeira visita à entrega das chaves: cuido de toda a documentação e estou disponível para você em cada etapa.",
    icon: <Handshake className="w-5 h-5" />,
  },
  {
    title: "Negociação Estratégica",
    description: "Conhecimento profundo do mercado de Irecê para garantir as melhores condições na sua compra ou venda.",
    icon: <TrendingUp className="w-5 h-5" />,
  },
]

// Cores únicas para cada card
const cardColors = [
  { bg: "from-primary/5 to-primary/10", icon: "bg-primary/10 text-primary", border: "border-primary/20" },
  { bg: "from-accent/5 to-accent/10", icon: "bg-accent/10 text-accent", border: "border-accent/20" },
  { bg: "from-sage/5 to-sage/10", icon: "bg-sage/10 text-sage", border: "border-sage/20" },
  { bg: "from-primary/5 to-accent/5", icon: "bg-primary/10 text-primary", border: "border-primary/20" },
]

export default function FeaturesCards() {
  return (
    <section id="services" className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="container-luxury relative z-10">
        <div className="text-center mb-8 lg:mb-10">
          <span className="inline-flex items-center gap-3 text-sm font-medium tracking-wide text-primary mb-4">
            <span className="w-8 h-0.5 bg-primary rounded-full" />
            Como posso ajudar
            <span className="w-8 h-0.5 bg-primary rounded-full" />
          </span>
          <h2 className="text-headline text-foreground mb-6">
            Como trabalho com você
          </h2>
          <p className="text-subheadline max-w-2xl mx-auto">
            Cada cliente tem uma necessidade diferente. Meu trabalho é
            entender a sua e encontrar o caminho mais seguro para realizá-la.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const colors = cardColors[index % cardColors.length]
            return (
              <div
                key={index}
                className="group relative rounded-2xl"
              >
                {/* Glowing Effect */}
                <GlowingEffect
                  spread={40}
                  glow={true}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />

                {/* Card Content */}
                <div className={`relative z-10 p-6 min-h-[240px] flex flex-col rounded-2xl border ${colors.border} bg-gradient-to-br ${colors.bg} backdrop-blur-sm transition-all duration-300 hover:shadow-lg`}>
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${colors.icon} transition-all duration-300 group-hover:scale-110`}>
                    {feature.icon}
                  </div>

                  <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground flex-grow">
                    {feature.description}
                  </p>

                  <span className="text-xs font-medium text-primary/60 mt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Joíle Barreto
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
