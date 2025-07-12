'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null)
  const [vantaEffect, setVantaEffect] = useState<any>(null)

  useEffect(() => {
    if (!vantaEffect) {
      const script = document.createElement('script')
      script.src = '/js/vanta.net.min.js'
      script.async = true
      script.onload = () => {
        // @ts-ignore
        if (window.VANTA?.NET && vantaRef.current) {
          // @ts-ignore
          setVantaEffect(
            // @ts-ignore
            window.VANTA.NET({
              el: vantaRef.current,
              THREE,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              color: 0x82dede,
              backgroundColor: 0x1a1a1a,
              points: 10.0,
              maxDistance: 15.0,
              spacing: 10.0,
            })
          )
        }
      }

      document.body.appendChild(script)
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div
      ref={vantaRef}
      className="fixed top-0 left-0 w-screen h-screen -z-10"
    />
  )
}
