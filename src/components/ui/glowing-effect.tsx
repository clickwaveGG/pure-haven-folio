"use client";

import { memo, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: "default" | "white";
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  borderWidth?: number;
}

// Highly optimized version - removes expensive animate() calls and uses CSS transitions
const GlowingEffect = memo(
  ({
    blur = 0,
    spread = 20,
    variant = "default",
    glow = false,
    className,
    borderWidth = 1,
    disabled = false,
  }: GlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (disabled) return;

      const element = containerRef.current;
      if (!element) return;

      let rafId: number | null = null;

      const handlePointerMove = (e: PointerEvent) => {
        if (rafId) return; // Throttle to animation frame

        rafId = requestAnimationFrame(() => {
          rafId = null;
          if (!element) return;

          const { left, top, width, height } = element.getBoundingClientRect();
          const mouseX = e.clientX;
          const mouseY = e.clientY;

          const isActive =
            mouseX > left - 50 &&
            mouseX < left + width + 50 &&
            mouseY > top - 50 &&
            mouseY < top + height + 50;

          if (isActive) {
            const center = [left + width * 0.5, top + height * 0.5];
            const angle =
              (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) /
                Math.PI +
              90;
            element.style.setProperty("--start", String(angle));
            element.style.setProperty("--active", "1");
          } else {
            element.style.setProperty("--active", "0");
          }
        });
      };

      document.addEventListener("pointermove", handlePointerMove, { passive: true });

      return () => {
        if (rafId) cancelAnimationFrame(rafId);
        document.removeEventListener("pointermove", handlePointerMove);
      };
    }, [disabled]);

    if (disabled) return null;

    return (
      <div
        ref={containerRef}
        style={
          {
            "--blur": `${blur}px`,
            "--spread": spread,
            "--start": "0",
            "--active": "0",
            "--glowingeffect-border-width": `${borderWidth}px`,
            "--gradient":
              variant === "white"
                ? `repeating-conic-gradient(
                    from calc(var(--start) * 1deg),
                    hsl(0 0% 100% / 0.15) 0%,
                    hsl(0 0% 100% / 0.25) 20%,
                    hsl(0 0% 100% / 0.15) 20%
                  )`
                : `radial-gradient(circle, hsl(0 0% 100% / 0.15) 0%, transparent 70%),
                   repeating-conic-gradient(
                    from calc(var(--start) * 1deg),
                    hsl(var(--primary)) 0%,
                    hsl(var(--accent)) 5%,
                    hsl(195 55% 50%) 10%,
                    hsl(var(--accent)) 15%,
                    hsl(var(--primary)) 20%
                  )`,
          } as React.CSSProperties
        }
        className={cn(
          "pointer-events-none absolute -inset-px rounded-[inherit] opacity-[var(--active)] transition-opacity duration-300",
          glow &&
            "after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[var(--gradient)] after:opacity-30 after:blur-xl after:content-['']",
          blur > 0 && "blur-[var(--blur)]",
          className
        )}
      >
        <div
          className={cn(
            "absolute inset-0 rounded-[inherit]",
            "bg-[var(--gradient)] bg-[length:300%_300%]",
            "[mask-composite:exclude] [mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)]",
            "p-[var(--glowingeffect-border-width)]"
          )}
        />
      </div>
    );
  }
);

GlowingEffect.displayName = "GlowingEffect";

export { GlowingEffect };
