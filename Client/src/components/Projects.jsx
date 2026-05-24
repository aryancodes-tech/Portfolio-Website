import ProjectCard from './ProjectCard'
import { Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
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
        // kicker="03 — Build"
        title="Projects"
        icon={<Sparkles strokeWidth={2} size={22} className="md:h-7 md:w-7" />}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-8 md:grid-cols-2"
      >
        {projectsData.map((project, index) => (
          <motion.div key={index} variants={item}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Projects
