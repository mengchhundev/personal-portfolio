'use client'

import { useState, useEffect } from 'react'
import { useReducedMotion } from '@/hooks'
import Image from 'next/image'
import { HeroBackground } from '@/components/AnimatedBackgrounds'

const TAGLINES = [
  'Passionate about automation, cloud infrastructure, and continuous integration',
  'Building reliable pipelines and scalable systems',
  'Software delivery · Infrastructure as Code · CI/CD · Kubernetes',
]

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(TAGLINES[0])
      return
    }
    const full = TAGLINES[taglineIndex]
    const speed = isDeleting ? 40 : 60
    if (!isDeleting && displayText === full) {
      const timeout = setTimeout(() => setIsDeleting(true), 2500)
      return () => clearTimeout(timeout)
    }
    if (isDeleting && displayText === '') {
      setTaglineIndex((i) => (i + 1) % TAGLINES.length)
      setIsDeleting(false)
      return
    }
    const timeout = setTimeout(
      () => setDisplayText(isDeleting ? full.slice(0, displayText.length - 1) : full.slice(0, displayText.length + 1)),
      speed
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, taglineIndex, prefersReducedMotion])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50/40 to-slate-100 dark:from-slate-950 dark:via-teal-950/30 dark:to-slate-900"
    >
      {/* Custom animated background - HTML/CSS/JS, no motion lib */}
      <HeroBackground />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 py-24 sm:py-28 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-20">
          {/* Copy block — clear hierarchy: role → headline → tagline → CTAs */}
          <div
            className={`flex-1 order-2 lg:order-1 text-center lg:text-left animate-fade-in-up ${mounted ? 'is-visible' : ''}`}
            style={{ transitionDelay: '0ms' }}
          >
            <div className="mx-auto lg:mx-0 max-w-lg flex flex-col gap-5 sm:gap-6">
              <p
                className={`text-xs font-medium uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400 animate-fade-in ${mounted ? 'is-visible' : ''}`}
                style={{ transitionDelay: '100ms' }}
              >
                Software and DevOps Engineer
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold tracking-tight text-slate-900 dark:text-white leading-[1.2]">
                <span
                  className={`block animate-fade-in-up ${mounted ? 'is-visible' : ''}`}
                  style={{ transitionDelay: '200ms' }}
                >
                  Building reliable{' '}
                  <span className="gradient-text">software & infrastructure</span>
                  {' '}that scales.
                </span>
              </h1>

              <p
                className={`text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed min-h-[3.25rem] flex flex-wrap items-center justify-center lg:justify-start gap-x-1 animate-fade-in ${mounted ? 'is-visible' : ''}`}
                style={{ transitionDelay: '350ms' }}
                aria-live="polite"
                aria-atomic="true"
              >
                <span>{displayText}</span>
                {!prefersReducedMotion && (
                  <span
                    className="inline-block w-0.5 h-4 sm:h-5 bg-teal-500 rounded-full shrink-0 align-middle animate-cursor-blink"
                    aria-hidden
                  />
                )}
              </p>

              {/* CTAs — primary first, 44px+ touch targets */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <a
                  href="#experience"
                  aria-label="View my work experience"
                  className="btn-scale inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 rounded-lg bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white text-sm font-semibold shadow-sm hover:shadow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
                >
                  View my work
                </a>
                <a
                  href="https://github.com/mengchhundev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open GitHub profile"
                  className="btn-scale inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-3 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium shadow-sm hover:shadow transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/chheang-mengchhun-5198b7239/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open LinkedIn profile"
                  className="btn-scale inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-sm font-medium hover:border-teal-400/60 hover:text-teal-600 dark:hover:text-teal-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Profile */}
          <div
            className={`flex-shrink-0 order-1 lg:order-2 flex flex-col items-center gap-5 animate-fade-in-up ${mounted ? 'is-visible' : ''}`}
            style={{ transitionDelay: '150ms' }}
          >
            {/* Wave border — static when user prefers reduced motion */}
            <div className="relative flex items-center justify-center w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
              <div
                className={`absolute inset-0 rounded-full ${prefersReducedMotion ? '' : 'animate-spin-wave'}`}
                style={{
                  background:
                    'conic-gradient(from 0deg, #0d9488, #059669, #14b8a6, #2563eb, #0d9488)',
                }}
                aria-hidden
              />
              <div className="absolute inset-[5px] rounded-full bg-slate-50 dark:bg-slate-950 z-10" aria-hidden />
              <div className="absolute inset-[5px] rounded-full overflow-hidden z-10 shadow-inner ring-1 ring-slate-200/40 dark:ring-slate-700/40">
                <Image
                  src="/assets/logo/my-profile.jpg"
                  alt="DevOps Engineer - profile photo"
                  fill
                  sizes="(max-width: 640px) 208px, (max-width: 1024px) 256px, 288px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <p className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="relative flex h-1.5 w-1.5" aria-hidden>
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              <span>Available for opportunities</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll cue — decorative; hidden from screen readers */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in ${mounted ? 'is-visible' : ''}`}
        style={{ transitionDelay: '900ms' }}
        aria-hidden
      >
        <div
          className={`flex flex-col items-center gap-1 ${!prefersReducedMotion ? 'animate-scroll-bounce' : ''}`}
        >
          <span className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500">Scroll</span>
          <span className="block w-px h-6 rounded-full bg-slate-300 dark:bg-slate-600" />
        </div>
      </div>
    </section>
  )
}
