'use client'

import { useRef, useEffect } from 'react'
import { useReducedMotion } from '@/hooks'

/** Creative hero: aurora gradient + floating shapes + mouse parallax (CSS + JS) */
export default function HeroBackground() {
  const prefersReducedMotion = useReducedMotion()
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (prefersReducedMotion) return
    const el = parallaxRef.current
    if (!el) return

    const handleMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 2
      const y = (clientY / window.innerHeight - 0.5) * 2
      el.style.setProperty('--mouse-x', String(x))
      el.style.setProperty('--mouse-y', String(y))
    }
    const handleLeave = () => {
      el.style.setProperty('--mouse-x', '0')
      el.style.setProperty('--mouse-y', '0')
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    window.addEventListener('mouseleave', handleLeave)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
    }
  }, [prefersReducedMotion])

  if (prefersReducedMotion) return null

  return (
    <div
      className="hero-creative-bg absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      {/* Aurora-style animated gradient base */}
      <div className="absolute inset-0 bg-aurora-base" />

      {/* Parallax layer: shapes follow mouse via CSS vars */}
      <div
        ref={parallaxRef}
        className="hero-parallax-layer absolute inset-0"
        style={
          {
            '--mouse-x': 0,
            '--mouse-y': 0,
          } as React.CSSProperties
        }
      >
        {/* Floating geometric shapes - CSS animations */}
        <div className="bg-shape bg-shape-hex absolute top-[18%] right-[12%] w-16 h-16 sm:w-20 sm:h-20 animate-shape-float" style={{ animationDelay: '0s', animationDuration: '12s' }} />
        <div className="bg-shape bg-shape-triangle absolute top-[45%] left-[8%] w-12 h-12 sm:w-14 sm:h-14 animate-shape-float" style={{ animationDelay: '-2s', animationDuration: '14s' }} />
        <div className="bg-shape bg-shape-ring absolute bottom-[25%] right-[20%] w-20 h-20 sm:w-24 sm:h-24 animate-shape-float" style={{ animationDelay: '-4s', animationDuration: '16s' }} />
        <div className="bg-shape bg-shape-diamond absolute top-[28%] left-[25%] w-10 h-10 sm:w-12 sm:h-12 animate-shape-float" style={{ animationDelay: '-1s', animationDuration: '13s' }} />
        <div className="bg-shape bg-shape-ring absolute bottom-[35%] left-[15%] w-14 h-14 sm:w-16 sm:h-16 animate-shape-float" style={{ animationDelay: '-3s', animationDuration: '15s' }} />
      </div>
    </div>
  )
}
