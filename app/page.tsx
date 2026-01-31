import dynamic from 'next/dynamic'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'

/* Lazy load below-fold sections for faster initial paint */
const Education = dynamic(() => import('@/components/Education'), {
  ssr: true,
  loading: () => <section id="education" className="min-h-[400px]" aria-hidden />,
})

const WorkExperience = dynamic(() => import('@/components/WorkExperience'), {
  ssr: true,
  loading: () => <section id="experience" className="min-h-[400px]" aria-hidden />,
})

const Skills = dynamic(() => import('@/components/Skills'), {
  ssr: true,
  loading: () => <section id="skills" className="min-h-[400px]" aria-hidden />,
})

const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: true,
})

const BackToTop = dynamic(() => import('@/components/BackToTop'), {
  ssr: false,
})

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <main id="main-content" className="relative" tabIndex={-1}>
        <Navigation />
        <Hero />
        <Education />
        <WorkExperience />
        <Skills />
        <Footer />
        <BackToTop />
      </main>
    </>
  )
}

