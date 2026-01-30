import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Education from '@/components/Education'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main id="home" className="relative">
      <Navigation />
      <Hero />
      <Education />
      <WorkExperience />
      <Skills />
      <Footer />
    </main>
  )
}

