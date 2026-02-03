'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

const SECTIONS = ['home', 'education', 'experience', 'skills'] as const

function useThrottledScroll(callback: () => void) {
  const rafRef = useRef<number | null>(null)
  const callbackRef = useRef(callback)
  callbackRef.current = callback

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        callbackRef.current()
        rafRef.current = null
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    callback()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState<string>('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const updateScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50)
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight
    setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0)
  }, [])

  useThrottledScroll(updateScroll)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-[60] h-[3px] bg-slate-200/80 dark:bg-gray-700/80 overflow-hidden transition-opacity duration-150 ${
          isScrolled ? 'opacity-100' : 'opacity-70'
        }`}
      >
        <div
          className="scroll-progress h-full transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-[3px] animate-slide-down ${mounted ? 'is-visible' : ''} ${
          isScrolled
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-glass border-b border-slate-200/50 dark:border-gray-800'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              type="button"
              onClick={() => scrollToSection('home')}
              className="btn-scale text-xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent dark:from-emerald-400 dark:via-teal-400 dark:to-blue-400"
            >
              Chhun.dev
            </button>

            {/* Desktop nav with active indicator */}
            <div className="hidden md:flex items-center space-x-1">
              {SECTIONS.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => scrollToSection(item)}
                  className={`btn-scale relative px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                    activeSection === item
                      ? 'text-teal-600 dark:text-teal-400'
                      : 'text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400'
                  }`}
                >
                  {activeSection === item && (
                    <span className="absolute inset-0 bg-teal-100 dark:bg-teal-900/40 rounded-lg -z-10" />
                  )}
                  {item === 'home' ? 'Home' : item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 btn-scale"
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className="block h-0.5 w-full bg-current rounded transition-transform duration-200 origin-center"
                  style={{
                    transform: mobileMenuOpen ? 'rotate(45deg) translateY(8px)' : 'rotate(0) translateY(0)',
                  }}
                />
                <span
                  className="block h-0.5 w-full bg-current rounded transition-opacity duration-200"
                  style={{ opacity: mobileMenuOpen ? 0 : 1 }}
                />
                <span
                  className="block h-0.5 w-full bg-current rounded transition-transform duration-200 origin-center"
                  style={{
                    transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-8px)' : 'rotate(0) translateY(0)',
                  }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        <div
          className={`md:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-slate-200/50 dark:border-gray-800 mobile-menu-drawer ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0 h-0'
          }`}
          style={{ height: mobileMenuOpen ? 'auto' : 0 }}
        >
          <div className="px-4 py-4 space-y-1">
            {SECTIONS.map((item, i) => (
              <button
                key={item}
                type="button"
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium capitalize transition-colors animate-fade-in-up ${
                  mobileMenuOpen ? 'is-visible' : ''
                } ${
                  activeSection === item
                    ? 'bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {item === 'home' ? 'Home' : item}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}
