'use client'

import { useEffect, useRef, useState } from 'react'

interface UseInViewOptions {
  /** Root margin for IntersectionObserver (default: -40% for section detection) */
  rootMargin?: string
  /** Threshold 0-1 (default: 0) */
  threshold?: number
  /** Only trigger once when first in view */
  once?: boolean
}

/**
 * Returns a ref and isInView state. Attach ref to element; when it enters viewport,
 * isInView becomes true. Respects prefers-reduced-motion.
 */
export function useInView(options: UseInViewOptions = {}) {
  const { rootMargin = '0px', threshold = 0, once = true } = options
  const ref = useRef<HTMLElement | null>(null)
  const [isInView, setIsInView] = useState(false)
  const hasTriggered = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (once && hasTriggered.current) return
            hasTriggered.current = true
            setIsInView(true)
          } else if (!once) {
            setIsInView(false)
          }
        })
      },
      { rootMargin, threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin, threshold, once])

  return { ref, isInView }
}
