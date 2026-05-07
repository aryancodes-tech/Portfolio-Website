import ProjectCard from './ProjectCard'
import { Sparkles, Plus, Minus } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from './SectionHeading'

const projectsData = [
  {
    source: "/project_logos/placementbuddy.svg",
    imgPreview: "/project_images/placementbuddy.jpg",
    name: "PlacementBuddy - JIIT's Placement Data",
    description: "Access and analyze the past 2 years of placement data with advanced sorting, filtering, and interactive features.",
    githubLink: "",
    externalLink: "https://placementbuddy.aryancodes.tech/",
    externalLinkText: "placementbuddy.aryancodes.tech",
    wonHackathon: false,
    isSaaS: true
  },
  {
    source: "/project_logos/widgetwall.png",
    imgPreview: "/project_images/widgetwall.jpg",
    name: "WidgetWall - Chrome Extension",
    description: "Browser extension for streamlined task management, time tracking, and productivity enhancement",
    githubLink: "https://github.com/aryancodes-tech/WidgetWall-Chrome-Extension",
    externalLink: "https://widgetwall.aryancodes.tech",
    externalLinkText: "widgetwall.aryancodes.tech",
    wonHackathon: true
  },
]

const Projects = () => {
  const [showAll, setShowAll] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const visibleProjects = isMobile
    ? (showAll ? projectsData : projectsData.slice(0, 3))
    : projectsData

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  }

  return (
    <section id="projects" className="flex w-full flex-col gap-8 px-1 py-8 sm:px-2 md:py-12">
      <SectionHeading
        kicker="03 — Build"
        title="Projects"
        icon={<Sparkles strokeWidth={2} size={22} className="md:h-7 md:w-7" />}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-8 md:grid-cols-2"
      >
        <AnimatePresence mode="wait">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              layout
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: 20 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {isMobile && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          onClick={() => setShowAll(!showAll)}
          className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-[hsl(var(--ink))] bg-[hsl(var(--paper))] px-6 py-4 font-mono text-sm font-semibold uppercase tracking-wider text-[hsl(var(--ink))] shadow-[6px_6px_0_hsl(var(--signal)/0.35)] transition-colors hover:bg-[hsl(var(--signal)/0.1)]"
        >
          <motion.div
            animate={{ rotate: showAll ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {showAll ? <Minus size={20} /> : <Plus size={20} />}
          </motion.div>
          {showAll ? "Show less" : "Show more"}
        </motion.button>
      )}
    </section>
  )
}

export default Projects
