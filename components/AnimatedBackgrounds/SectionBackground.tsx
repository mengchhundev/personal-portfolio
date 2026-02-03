'use client'

import { useReducedMotion } from '@/hooks'

type Variant = 'education' | 'experience' | 'skills'

interface SectionBackgroundProps {
  variant: Variant
}

/** Creative section: gradient wash + floating shapes (same style as Hero) */
export default function SectionBackground({ variant }: SectionBackgroundProps) {
  const prefersReducedMotion = useReducedMotion()
  if (prefersReducedMotion) return null

  return (
    <div
      className="section-creative-bg absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      {/* Soft gradient wash */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            variant === 'education'
              ? 'radial-gradient(ellipse 80% 60% at 30% 40%, rgba(13, 148, 136, 0.06) 0%, transparent 50%)'
              : variant === 'experience'
                ? 'radial-gradient(ellipse 70% 50% at 70% 50%, rgba(16, 185, 129, 0.06) 0%, transparent 50%)'
                : 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(59, 130, 246, 0.06) 0%, transparent 50%)',
        }}
      />

      {/* Floating shapes (same style as Hero) - positions vary by variant */}
      <div className="absolute inset-0">
        {variant === 'education' && (
          <>
            <div className="bg-shape bg-shape-hex section-shape absolute top-[12%] right-[15%] w-12 h-12 sm:w-14 sm:h-14 animate-shape-float" style={{ animationDelay: '0s', animationDuration: '14s' }} />
            <div className="bg-shape bg-shape-triangle section-shape absolute top-[55%] left-[10%] w-10 h-10 sm:w-12 sm:h-12 animate-shape-float" style={{ animationDelay: '-3s', animationDuration: '12s' }} />
            <div className="bg-shape bg-shape-ring section-shape absolute bottom-[20%] right-[8%] w-14 h-14 sm:w-16 sm:h-16 animate-shape-float" style={{ animationDelay: '-5s', animationDuration: '16s' }} />
            <div className="bg-shape bg-shape-diamond section-shape absolute top-[35%] left-[20%] w-8 h-8 sm:w-10 sm:h-10 animate-shape-float" style={{ animationDelay: '-1s', animationDuration: '13s' }} />
            <div className="bg-shape bg-shape-ring section-shape absolute bottom-[30%] right-[25%] w-10 h-10 sm:w-12 sm:h-12 animate-shape-float" style={{ animationDelay: '-2s', animationDuration: '15s' }} />
          </>
        )}
        {variant === 'experience' && (
          <>
            <div className="bg-shape bg-shape-hex section-shape absolute top-[20%] left-[12%] w-12 h-12 sm:w-14 sm:h-14 animate-shape-float" style={{ animationDelay: '-2s', animationDuration: '15s' }} />
            <div className="bg-shape bg-shape-triangle section-shape absolute bottom-[25%] right-[15%] w-10 h-10 sm:w-12 sm:h-12 animate-shape-float" style={{ animationDelay: '0s', animationDuration: '13s' }} />
            <div className="bg-shape bg-shape-ring section-shape absolute top-[45%] right-[8%] w-14 h-14 sm:w-16 sm:h-16 animate-shape-float" style={{ animationDelay: '-4s', animationDuration: '17s' }} />
            <div className="bg-shape bg-shape-diamond section-shape absolute bottom-[15%] left-[25%] w-8 h-8 sm:w-10 sm:h-10 animate-shape-float" style={{ animationDelay: '-1s', animationDuration: '14s' }} />
            <div className="bg-shape bg-shape-ring section-shape absolute top-[30%] left-[8%] w-10 h-10 sm:w-12 sm:h-12 animate-shape-float" style={{ animationDelay: '-3s', animationDuration: '11s' }} />
          </>
        )}
        {variant === 'skills' && (
          <>
            <div className="bg-shape bg-shape-hex section-shape absolute bottom-[22%] left-[10%] w-12 h-12 sm:w-14 sm:h-14 animate-shape-float" style={{ animationDelay: '-1s', animationDuration: '14s' }} />
            <div className="bg-shape bg-shape-triangle section-shape absolute top-[18%] right-[12%] w-10 h-10 sm:w-12 sm:h-12 animate-shape-float" style={{ animationDelay: '-3s', animationDuration: '12s' }} />
            <div className="bg-shape bg-shape-ring section-shape absolute top-[50%] left-[15%] w-14 h-14 sm:w-16 sm:h-16 animate-shape-float" style={{ animationDelay: '0s', animationDuration: '16s' }} />
            <div className="bg-shape bg-shape-diamond section-shape absolute bottom-[35%] right-[20%] w-8 h-8 sm:w-10 sm:h-10 animate-shape-float" style={{ animationDelay: '-2s', animationDuration: '13s' }} />
            <div className="bg-shape bg-shape-ring section-shape absolute top-[28%] right-[5%] w-10 h-10 sm:w-12 sm:h-12 animate-shape-float" style={{ animationDelay: '-4s', animationDuration: '15s' }} />
          </>
        )}
      </div>
    </div>
  )
}
