'use client'

import { useReducedMotion } from '@/hooks'

/** Creative footer: animated shimmer wave (CSS) */
export default function FooterBackground() {
  const prefersReducedMotion = useReducedMotion()
  if (prefersReducedMotion) return null

  return (
    <div
      className="footer-creative-bg absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      <div className="absolute inset-0 bg-footer-base" />
      <div className="footer-shimmer absolute inset-0 opacity-70" />
      {/* Floating shapes (same style as Hero) */}
      <div className="absolute inset-0">
        <div className="bg-shape bg-shape-hex section-shape absolute top-[15%] left-[10%] w-10 h-10 sm:w-12 sm:h-12 animate-shape-float" style={{ animationDelay: '0s', animationDuration: '14s' }} />
        <div className="bg-shape bg-shape-triangle section-shape absolute top-[40%] right-[12%] w-8 h-8 sm:w-10 sm:h-10 animate-shape-float" style={{ animationDelay: '-2s', animationDuration: '12s' }} />
        <div className="bg-shape bg-shape-ring section-shape absolute bottom-[25%] left-[20%] w-12 h-12 sm:w-14 sm:h-14 animate-shape-float" style={{ animationDelay: '-4s', animationDuration: '16s' }} />
        <div className="bg-shape bg-shape-diamond section-shape absolute top-[25%] right-[25%] w-6 h-6 sm:w-8 sm:h-8 animate-shape-float" style={{ animationDelay: '-1s', animationDuration: '13s' }} />
        <div className="bg-shape bg-shape-ring section-shape absolute bottom-[35%] right-[8%] w-10 h-10 sm:w-12 sm:h-12 animate-shape-float" style={{ animationDelay: '-3s', animationDuration: '15s' }} />
      </div>
    </div>
  )
}
