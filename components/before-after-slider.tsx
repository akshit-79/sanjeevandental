'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface BeforeAfterSliderProps {
  beforeSrc: string
  afterSrc: string
  caption: string
  beforeLabel?: string
  afterLabel?: string
}

function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  caption,
  beforeLabel = 'Before',
  afterLabel = 'After',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.min(Math.max(newPosition, 0), 100))
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const newPosition = ((e.touches[0].clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.min(Math.max(newPosition, 0), 100))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center"
    >
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden cursor-col-resize select-none"
      >
        {/* After Image (Background) */}
        <Image
          src={afterSrc}
          alt={`${caption} - After`}
          fill
          className="object-cover"
        />

        {/* Before Image (Overlay) */}
        <div
          style={{ width: `${sliderPosition}%` }}
          className="absolute top-0 left-0 h-full overflow-hidden"
        >
          <Image
            src={beforeSrc}
            alt={`${caption} - Before`}
            fill
            className="object-cover"
          />
        </div>

        {/* Divider Line and Handle */}
        <div
          style={{ left: `${sliderPosition}%` }}
          className="absolute top-0 h-full w-1 bg-white transform -translate-x-1/2 transition-none"
        >
          {/* Circular Handle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-primary">
            <div className="flex gap-1">
              <div className="w-0.5 h-4 bg-primary" />
              <div className="w-0.5 h-4 bg-primary" />
            </div>
          </div>
        </div>

        {/* Before Label */}
        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm font-medium">
          {beforeLabel}
        </div>

        {/* After Label */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded text-sm font-medium">
          {afterLabel}
        </div>
      </div>

      {/* Caption */}
      <p className="mt-4 text-center text-muted-foreground">{caption}</p>
    </motion.div>
  )
}

export default BeforeAfterSlider
