"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion"
import { MapPin, ExternalLink } from "lucide-react"

interface LocationMapProps {
  location?: string
  coordinates?: string
  mapsUrl?: string
  className?: string
}

export function LocationMap({
  location = "San Francisco, CA",
  coordinates = "37.7749° N, 122.4194° W",
  mapsUrl,
  className,
}: LocationMapProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-50, 50], [8, -8])
  const rotateY = useTransform(mouseX, [-50, 50], [-8, 8])

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  const handleMapsClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (mapsUrl) {
      window.open(mapsUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className={`relative ${className}`}>
      <motion.div
        ref={containerRef}
        className="relative w-full h-72 md:h-80 rounded-2xl overflow-hidden cursor-pointer"
        style={{
          perspective: 1000,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <motion.div
          className="relative w-full h-full bg-card border border-border rounded-2xl overflow-hidden"
          style={{
            rotateX: isHovered ? springRotateX : 0,
            rotateY: isHovered ? springRotateY : 0,
            transformStyle: "preserve-3d",
          }}
          animate={{
            scale: isExpanded ? 1.02 : 1,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                {/* Animated grid streets */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Main roads */}
                  <motion.line
                    x1="0" y1="35" x2="100" y2="35"
                    stroke="hsl(var(--foreground))"
                    strokeWidth="0.8"
                    strokeOpacity="0.15"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                  />
                  <motion.line
                    x1="0" y1="65" x2="100" y2="65"
                    stroke="hsl(var(--foreground))"
                    strokeWidth="0.8"
                    strokeOpacity="0.15"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                  <motion.line
                    x1="30" y1="0" x2="30" y2="100"
                    stroke="hsl(var(--foreground))"
                    strokeWidth="0.8"
                    strokeOpacity="0.15"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                  />
                  <motion.line
                    x1="70" y1="0" x2="70" y2="100"
                    stroke="hsl(var(--foreground))"
                    strokeWidth="0.8"
                    strokeOpacity="0.15"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                  />
                  
                  {/* Secondary streets */}
                  {[20, 50, 80].map((y, i) => (
                    <motion.line
                      key={`h-${i}`}
                      x1="0" y1={y} x2="100" y2={y}
                      stroke="hsl(var(--foreground))"
                      strokeWidth="0.3"
                      strokeOpacity="0.08"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                    />
                  ))}
                  {[15, 45, 55, 85].map((x, i) => (
                    <motion.line
                      key={`v-${i}`}
                      x1={x} y1="0" x2={x} y2="100"
                      stroke="hsl(var(--foreground))"
                      strokeWidth="0.3"
                      strokeOpacity="0.08"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: 0.35 + i * 0.1 }}
                    />
                  ))}
                </svg>

                {/* Buildings */}
                <motion.div
                  className="absolute top-[20%] left-[10%] w-12 h-8 bg-muted-foreground/10 rounded-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                />
                <motion.div
                  className="absolute top-[15%] left-[75%] w-10 h-14 bg-muted-foreground/10 rounded-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.55 }}
                />
                <motion.div
                  className="absolute top-[70%] left-[80%] w-14 h-10 bg-muted-foreground/10 rounded-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                />
                <motion.div
                  className="absolute top-[75%] left-[15%] w-8 h-12 bg-muted-foreground/10 rounded-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.65 }}
                />

                {/* Location pin */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                >
                  <div className="relative">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <MapPin className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-primary" />
                  </div>
                </motion.div>

                {/* Pulse ring */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-primary/30"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Grid pattern - only show when collapsed */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ opacity: isExpanded ? 0 : 1 }}
          >
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" strokeOpacity="0.05" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </motion.div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-between p-6">
            {/* Top section */}
            <div className="flex items-start justify-between">
              <motion.div
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                animate={{ scale: isHovered ? 1.1 : 1 }}
              >
                <MapPin className="w-6 h-6 text-primary" />
              </motion.div>

              {/* Status indicator */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border">
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-xs font-medium text-muted-foreground">Ativo</span>
              </div>
            </div>

            {/* Bottom section */}
            <div className="space-y-3">
              <motion.h3
                className="text-xl font-display font-semibold text-foreground"
                animate={{ y: isExpanded ? -4 : 0 }}
              >
                {location}
              </motion.h3>

              <AnimatePresence>
                {isExpanded && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-sm text-muted-foreground"
                  >
                    {coordinates}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Animated underline */}
              <motion.div
                className="h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                initial={{ width: "30%" }}
                animate={{ width: isHovered ? "100%" : "30%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Action buttons */}
      <div className="absolute bottom-4 right-4 z-20 flex gap-2">
        <motion.button
          onClick={handleMapsClick}
          className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-full shadow-lg font-medium text-sm hover:shadow-xl transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MapPin size={16} />
          <span className="hidden sm:inline">Ver no Google Maps</span>
          <span className="sm:hidden">Maps</span>
          <ExternalLink size={14} />
        </motion.button>
      </div>

      {/* Click hint */}
      <motion.span
        className="absolute top-4 right-4 text-xs text-muted-foreground pointer-events-none"
        animate={{ opacity: isHovered && !isExpanded ? 1 : 0 }}
      >
        Clique para expandir
      </motion.span>
    </div>
  )
}
