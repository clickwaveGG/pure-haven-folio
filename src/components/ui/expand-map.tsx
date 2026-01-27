"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion"
import { MapPin, ExternalLink, Maximize2, Minimize2 } from "lucide-react"

interface LocationMapProps {
  location?: string
  coordinates?: string
  latitude?: number
  longitude?: number
  mapsUrl?: string
  className?: string
}

export function LocationMap({
  location = "San Francisco, CA",
  coordinates = "37.7749° N, 122.4194° W",
  latitude,
  longitude,
  mapsUrl,
  className,
}: LocationMapProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-50, 50], [4, -4])
  const rotateY = useTransform(mouseX, [-50, 50], [-4, 4])

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || isExpanded) return
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

  const handleExpandClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsExpanded(!isExpanded)
  }

  const handleMapsClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (mapsUrl) {
      window.open(mapsUrl, '_blank', 'noopener,noreferrer')
    }
  }

  // Create Google Maps embed URL - use exact coordinates if available
  const getEmbedUrl = () => {
    if (latitude && longitude) {
      // Use exact coordinates with a marker
      return `https://www.google.com/maps?q=${latitude},${longitude}&z=17&output=embed`
    }
    const encodedLocation = encodeURIComponent(location)
    return `https://www.google.com/maps?q=${encodedLocation}&z=15&output=embed`
  }

  return (
    <div className={`relative ${className}`}>
      <motion.div
        ref={containerRef}
        className="relative w-full overflow-hidden cursor-pointer"
        style={{
          perspective: 1000,
          transformStyle: "preserve-3d",
        }}
        animate={{
          height: isExpanded ? 400 : 288,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="relative w-full h-full bg-card border border-border rounded-2xl overflow-hidden"
          style={{
            rotateX: isHovered && !isExpanded ? springRotateX : 0,
            rotateY: isHovered && !isExpanded ? springRotateY : 0,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Real Map Iframe */}
          <div className="absolute inset-0">
            <iframe
              src={getEmbedUrl()}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title={`Mapa de ${location}`}
            />
          </div>

          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />

          {/* Top overlay with location pin indicator */}
          <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-background/60 to-transparent p-4 pointer-events-none">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border pointer-events-auto">
                <motion.div
                  className="w-2 h-2 rounded-full bg-emerald-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-xs font-medium text-foreground">Mapa em tempo real</span>
              </div>
            </div>
          </div>

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
            <div className="flex items-end justify-between">
              <div className="space-y-1">
                <motion.h3
                  className="text-lg font-display font-semibold text-foreground drop-shadow-sm"
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
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Action buttons */}
      <div className="absolute bottom-4 right-4 z-20 flex gap-2">
        <motion.button
          onClick={handleExpandClick}
          className="flex items-center justify-center w-10 h-10 bg-background/90 backdrop-blur-sm text-foreground rounded-full shadow-lg border border-border hover:bg-background transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title={isExpanded ? "Reduzir mapa" : "Expandir mapa"}
        >
          {isExpanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
        </motion.button>
        
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
    </div>
  )
}
