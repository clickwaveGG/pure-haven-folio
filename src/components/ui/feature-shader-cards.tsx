"use client"

import type React from "react"
import { Warp } from "@paper-design/shaders-react"
import { Home, Shield, Handshake, TrendingUp, ArrowRight } from "lucide-react"

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

const features: Feature[] = [
  {
    title: "Busca Personalizada",
    description:
      "Entendo suas necessidades e encontro imóveis que realmente fazem sentido para você e sua família.",
    icon: <Home className="w-6 h-6" />,
  },
  {
    title: "Transparência Total",
    description: "Você acompanha cada etapa do processo com clareza. Sem surpresas, sem letras miúdas.",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: "Acompanhamento Completo",
    description: "Estou ao seu lado da primeira visita até a entrega das chaves, cuidando de toda a documentação.",
    icon: <Handshake className="w-6 h-6" />,
  },
  {
    title: "Melhor Negociação",
    description: "Experiência de mercado para garantir as melhores condições na sua compra ou venda.",
    icon: <TrendingUp className="w-6 h-6" />,
  },
]

export default function FeaturesCards() {
  // Cada card tem sua própria paleta de cores única e configuração de shader distinta
  const getShaderConfig = (index: number) => {
    const configs = [
      // Card 1 - Petrol Blue (Busca Personalizada) - Azul profundo e confiável
      {
        proportion: 0.3,
        softness: 0.8,
        distortion: 0.15,
        swirl: 0.6,
        swirlIterations: 8,
        shape: "checks" as const,
        shapeScale: 0.08,
        colors: ["#0d3d4d", "#1a5a6e", "#0f4a5a", "#2a7a8e", "#1d6878"],
      },
      // Card 2 - Terracotta/Coral (Transparência) - Laranja quente e acolhedor
      {
        proportion: 0.4,
        softness: 1.0,
        distortion: 0.2,
        swirl: 0.85,
        swirlIterations: 10,
        shape: "stripes" as const,
        shapeScale: 0.1,
        colors: ["#c45a3a", "#e07050", "#d86545", "#f08060", "#e87555"],
      },
      // Card 3 - Sage Green (Acompanhamento) - Verde natural e tranquilo
      {
        proportion: 0.35,
        softness: 0.9,
        distortion: 0.18,
        swirl: 0.7,
        swirlIterations: 9,
        shape: "edge" as const,
        shapeScale: 0.07,
        colors: ["#4a6b4a", "#5d8a5d", "#527552", "#6a9a6a", "#5f8f5f"],
      },
      // Card 4 - Sand/Golden (Negociação) - Dourado elegante e confiante
      {
        proportion: 0.45,
        softness: 1.1,
        distortion: 0.22,
        swirl: 0.9,
        swirlIterations: 12,
        shape: "checks" as const,
        shapeScale: 0.09,
        colors: ["#b8965c", "#d4ad70", "#c9a264", "#e0be80", "#d5b375"],
      },
    ]
    return configs[index % configs.length]
  }

  return (
    <section id="services" className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="container-luxury relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-medium tracking-wide text-primary mb-4">
            <span className="w-8 h-0.5 bg-primary rounded-full" />
            Como posso ajudar
            <span className="w-8 h-0.5 bg-primary rounded-full" />
          </span>
          <h2 className="text-headline text-foreground mb-6">
            Um atendimento feito para você
          </h2>
          <p className="text-subheadline max-w-2xl mx-auto">
            Cada pessoa tem uma história única. Por isso, meu trabalho é 
            ouvir, entender e encontrar a melhor solução para você.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const shaderConfig = getShaderConfig(index)
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-1 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative h-40 w-full overflow-hidden rounded-xl">
                  <Warp
                    colors={shaderConfig.colors}
                    proportion={shaderConfig.proportion}
                    softness={shaderConfig.softness}
                    distortion={shaderConfig.distortion}
                    swirl={shaderConfig.swirl}
                    swirlIterations={shaderConfig.swirlIterations}
                    shape={shaderConfig.shape}
                    shapeScale={shaderConfig.shapeScale}
                    speed={0.4}
                    scale={1.2}
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>

                <div className="p-5">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    {feature.icon}
                  </div>

                  <h3 className="mb-2 font-serif text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {feature.title}
                  </h3>

                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>

                  <div className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Saiba mais
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
