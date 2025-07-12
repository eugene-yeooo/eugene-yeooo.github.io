'use client'

import { useRef } from 'react'
import { useAnimationFrame } from 'framer-motion'

export default function MarqLandF() {
  const x = useRef(0)
  const ref = useRef<HTMLDivElement>(null)

  useAnimationFrame((t, delta) => {
    if (ref.current) {
      x.current -= delta * 0.05 // Adjust speed here
      const totalWidth = ref.current.scrollWidth / 2
      if (x.current < -totalWidth) {
        x.current = 0
      }
      ref.current.style.transform = `translateX(${x.current}px)`
    }
  })

  const content = [
    'JavaScript',
    'TypeScript',
    'Node.js',
    'React',
    'Next.js',
    'Superagent.js',
  ]

  const itemStyle =
    'inline-block px-4 py-1 mx-2 bg-white rounded shadow text-black hover:bg-green-200 transition whitespace-nowrap transform transition-transform duration-300 ease-in-out hover:scale-105'

  return (
    <div className="mb-6">
      <h1 className="text-black text-lg font-black mb-2 font-mono ">
        Languages & Frontend Frameworks:
      </h1>
      <div className="relative overflow-hidden bg-black text-black py-2">
        {/* Fading edges */}
        <div className="pointer-events-none absolute inset-0 z-10 flex justify-between">
          <div className="w-30 bg-gradient-to-r from-white to-transparent" />
          <div className="w-30 bg-gradient-to-l from-white to-transparent" />
        </div>

        {/* Scrolling text */}
        <div className="whitespace-nowrap text-sm font-mono font-bold">
          <div ref={ref} className="inline-block">
            {[...content, ...content].map((skill, i) => (
              <span key={i} className={itemStyle}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
