import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, Phone } from "lucide-react";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import { Glow } from "@/components/ui/glow";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/hero-joile.jpg";
import heroImageMobile from "@/assets/hero-joile-mobile.png";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeroAction {
  text: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "default" | "glow";
}

interface HeroProps {
  badge?: {
    text: string;
    action: {
      text: string;
      href: string;
    };
  };
  title: string;
  description: string;
  actions: HeroAction[];
  image: {
    src: string;
    alt: string;
  };
}

function HeroSection({
  badge,
  title,
  description,
  actions,
  image,
}: HeroProps) {
  return (
    <section id="hero" className="overflow-hidden bg-background pt-20">
      <div className="container-luxury relative">
        <div className="relative z-10 flex flex-col items-center gap-6 pb-8 pt-12 md:pb-12 md:pt-16 lg:pb-16 lg:pt-24">
          {/* Badge */}
          {badge && (
            <Badge variant="outline" className="animate-appear gap-1 border-primary/30 bg-primary/5 text-primary">
              <span className="text-muted-foreground">{badge.text}</span>
              <a href={badge.action.href} className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors">
                {badge.action.text}
                <ArrowRightIcon className="h-3 w-3" />
              </a>
            </Badge>
          )}

          {/* Title */}
          <h1 className="animate-appear text-balance text-center font-serif text-4xl font-medium tracking-tight text-foreground opacity-0 delay-100 md:text-5xl lg:text-6xl xl:text-7xl">
            {title}
          </h1>

          {/* Description */}
          <p className="animate-appear max-w-2xl text-balance text-center text-base font-light text-muted-foreground opacity-0 delay-300 md:text-lg lg:text-xl">
            {description}
          </p>

          {/* Actions */}
          <div className="animate-appear relative z-10 flex flex-col items-center justify-center gap-4 opacity-0 delay-300 sm:flex-row">
            <div className="flex flex-col gap-4 sm:flex-row">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  asChild
                  size="lg"
                  className={cn(
                    action.variant === "glow" && "bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:border-primary/50"
                  )}
                  variant={action.variant === "glow" ? "outline" : "default"}
                >
                  <a href={action.href} className="flex items-center gap-2">
                    {action.icon}
                    {action.text}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Image with Glow */}
          <div className="animate-appear relative w-full pt-12 opacity-0 delay-700">
            <MockupFrame size="small" className="mx-auto max-w-5xl">
              <Mockup type="responsive" className="w-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto aspect-[16/9] object-cover"
                />
              </Mockup>
            </MockupFrame>
            <Glow variant="bottom" className="animate-appear-zoom opacity-0 delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
}

const Hero = () => {
  const isMobile = useIsMobile();
  const currentHeroImage = isMobile ? heroImageMobile : heroImage;

  return (
    <HeroSection
      badge={{
        text: "Corretor de Imóveis Premium",
        action: {
          text: "Saiba mais",
          href: "#about",
        },
      }}
      title="Joíle Barreto — Seu Corretor de Confiança"
      description="Curadoria personalizada de casas e terrenos premium para quem busca mais que um imóvel — busca um estilo de vida exclusivo em Brasília e região."
      actions={[
        {
          text: "Fale Comigo",
          href: "#contact",
          variant: "default",
          icon: <Phone className="h-4 w-4" />,
        },
        {
          text: "WhatsApp",
          href: "https://wa.me/5561999999999",
          variant: "glow",
          icon: <Icons.whatsapp className="h-4 w-4" />,
        },
      ]}
      image={{
        src: currentHeroImage,
        alt: "Joíle Barreto - Corretor de Imóveis",
      }}
    />
  );
};

export default Hero;
