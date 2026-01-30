import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Education from '@/components/Education'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

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

