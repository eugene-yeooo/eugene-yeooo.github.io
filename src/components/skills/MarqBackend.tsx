'use client'

import { useRef } from 'react'
import { useAnimationFrame } from 'framer-motion'

export default function MarqBackend() {
  const x = useRef(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const content = [
    'Express.js',
    'Knex.js',
    'SQLite',
    'PostgreSQL',
    'Multer',
    'Cloudinary',
    'Postman',
  ]

  const itemStyle =
    'inline-block px-4 py-1 mx-2 bg-white rounded shadow text-black hover:bg-green-200 transition whitespace-nowrap transform transition-transform duration-300 ease-in-out hover:scale-105'

  useAnimationFrame((_, delta) => {
    if (scrollRef.current) {
      const totalWidth = scrollRef.current.scrollWidth / 2

      if (x.current === 0) {
        // Initialize starting position to -totalWidth so we start from left offset
        x.current = -totalWidth
      }

      x.current += delta * 0.05 // scroll right

      if (x.current >= 0) {
        // Reset back to -totalWidth for seamless loop
        x.current = -totalWidth
      }

      scrollRef.current.style.transform = `translateX(${x.current}px)`
    }
  })

  return (
    <div className="mb-6">
      <h1 className="text-black font-mono text-lg font-bold mb-2">
        Backend Frameworks & Databases:
      </h1>
      <div className="relative overflow-hidden bg-black text-black py-2">
        {/* Fading edges */}
        <div className="pointer-events-none absolute inset-0 z-10 flex justify-between">
          <div className="w-40 bg-gradient-to-r from-white to-transparent" />
          <div className="w-40 bg-gradient-to-l from-white to-transparent" />
        </div>

        {/* Scrolling content */}
        <div className="whitespace-nowrap text-sm font-mono font-bold">
          <div ref={scrollRef} className="inline-block">
            {[...content, ...content, ...content, ...content].map(
              (skill, i) => (
                <span key={i} className={itemStyle}>
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
