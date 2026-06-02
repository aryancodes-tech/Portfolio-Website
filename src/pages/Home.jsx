import { lazy, Suspense } from 'react'
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"

const Education = lazy(() => import("../components/Education"))
const Experience = lazy(() => import("../components/Experience"))
const Projects = lazy(() => import("../components/Projects"))
const HonorsAndAwards = lazy(() => import("../components/HonorsAndAwards"))
const PositionsOfResponsibility = lazy(() => import("../components/PositionsOfResponsibility"))
const ContactMe = lazy(() => import("../components/ContactMe"))
const ResumeButton = lazy(() => import("../components/ResumeButton"))

/** Lightweight placeholder while below-fold sections load. */
const SectionFallback = () => (
  <div className="w-full px-1 py-12 sm:px-2" aria-hidden>
    <div className="surface-card mx-auto h-48 max-w-6xl animate-pulse rounded-2xl bg-[hsl(var(--muted))]" />
  </div>
)

const Home = () => {
  return (
    <main
      className="content site-shell pb-16"
      role="main"
      aria-label="Aryan Gupta — Backend Developer, Software Engineer, Golang developer portfolio"
    >
      <Navbar />
      <HeroSection />

      <Suspense fallback={<SectionFallback />}>
        <Education />
        <Experience />
        <Projects />
        <HonorsAndAwards />
        <PositionsOfResponsibility />
        <ContactMe />
        <ResumeButton />
      </Suspense>
    </main>
  )
}

export default Home
