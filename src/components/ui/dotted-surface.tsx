'use client';
import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';

type DottedSurfaceProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'ref'>;

// Lightweight CSS-only dotted surface for better performance
export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only load if visible in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn('absolute inset-0 overflow-hidden', className)}
      {...props}
    >
      {isVisible && (
        <div 
          className="absolute inset-0 animate-pulse-slow"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, hsl(var(--accent) / 0.06) 0%, transparent 50%),
              radial-gradient(circle, hsl(var(--primary) / 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 100% 100%, 30px 30px',
          }}
        />
      )}
    </div>
  );
}
