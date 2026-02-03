'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  /** Root margin for IntersectionObserver */
  rootMargin?: string
  /** Only trigger once */
  once?: boolean
  /** Class to add when in view (default: is-visible) */
  visibleClass?: string
}

/**
 * Wraps content and adds visibleClass when element enters viewport.
 * Use for scroll-triggered fade-in animations.
 */
export default function ScrollReveal({
  children,
  className = '',
  rootMargin = '0px',
  once = true,
  visibleClass = 'is-visible',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const hasTriggered = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (once && hasTriggered.current) return
            hasTriggered.current = true
            setIsVisible(true)
          } else if (!once) {
            setIsVisible(false)
          }
        })
      },
      { rootMargin, threshold: 0 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin, once])

  return (
    <div ref={ref} className={`${isVisible ? visibleClass : ''} ${className}`.trim()}>
      {children}
    </div>
  )
}
