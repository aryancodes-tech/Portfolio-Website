import ProjectCard from './ProjectCard'
import { Sparkle, Plus, Minus } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projectsData = [
  {
    source: "/project_logos/placementbuddy.svg",
    imgPreview: "/project_images/placementbuddy.jpg",
    name: "PlacementBuddy - JIIT's Placement Data",
    description: "Access and analyze the past 2 years of placement data with advanced sorting, filtering, and interactive features.",
    githubLink: "",
    externalLink: "https://www.placementbuddy.pro/",
    externalLinkText: "placementbuddy.pro",
    wonHackathon: false,
    isSaaS: true
  },
  {
    source: "/project_logos/widgetwall.png",
    imgPreview: "/project_images/widgetwall.jpg",
    name: "WidgetWall - Chrome Extension",
    description: "Browser extension for streamlined task management, time tracking, and productivity enhancement",
    githubLink: "https://github.com/aryanploxxx/WidgetWall-Chrome-Extension",
    externalLink: "https://widgetwall.aryancodes.tech",
    externalLinkText: "widgetwall.aryancodes.tech",
    wonHackathon: true
  },
  {
    source: "/project_logos/buzzvibe.svg",
    imgPreview: "/project_images/buzzvibe.jpg",
    name: "BuzzVibe - Social Media Application",
    description: "A full-stack social platform featuring real-time updates, user interactions, and media sharing capabilities",
    githubLink: "https://github.com/aryanploxxx/BuzzVibe-Social-Media-Application",
    externalLink: "https://buzzvibe.aryancodes.tech",
    externalLinkText: "buzzvibe.aryancodes.tech",
    wonHackathon: false
  },
  {
    source: "/project_logos/compilex.png",
    imgPreview: "/project_images/compilex.jpg",
    name: "CompileX - Online Coding Platform",
    description: "Interactive coding platform with real-time compilation, multiple language support, and collaborative features",
    githubLink: "https://github.com/pritpalcodes/CodeRaiders-Tally-Codebrewers-24",
    externalLink: "https://compilex.aryancodes.tech",
    externalLinkText: "compilex.aryancodes.tech",
    wonHackathon: false
  },
  {
    source: "/project_logos/jobspool.svg",
    imgPreview: "/project_images/jobspool.jpg",
    name: "JobsPool - Job Search Platform",
    description: "Comprehensive job search platform connecting candidates with employers, featuring smart matching and filters",
    githubLink: "https://github.com/aryanploxxx/Jobs-Portal-React",
    externalLink: "https://jobspool.aryancodes.tech",
    externalLinkText: "jobspool.aryancodes.tech",
    wonHackathon: false
  },
  {
    source: "/project_logos/kioskmeet.svg",
    imgPreview: "/project_images/kioskmeet.jpg",
    name: "KioskMeet - One Stop Campus Solution",
    description: "Integrated campus management system streamlining student services, communications, and resource access",
    githubLink: "https://github.com/aryanploxxx/KioskMeet-Minor-Project",
    externalLink: "https://github.com/aryanploxxx/SquadSpeak-Chat-App",
    wonHackathon: false
  },
  {
    source: "/project_logos/squadspeak.svg",
    imgPreview: "/project_images/squadspeak.jpg",
    name: "SquadSpeak - Chatting Application",
    description: "Real-time messaging application with group chats, file sharing, and encrypted communication",
    githubLink: "https://github.com/aryanploxxx/SquadSpeak-Chat-App",
    externalLink: "https://github.com/aryanploxxx/SquadSpeak-Chat-App",
    wonHackathon: false
  }
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
    <div id="projects" className="flex flex-col flex-wrap justify-center items-left gap-5 p-5">
      <motion.span 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex text-4xl font-bold flex-row gap-2 items-center"
      >
        <Sparkle strokeWidth={1.5} size={36}/> Projects
      </motion.span>

      <motion.span 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex md:hidden text-2xl font-bold flex-row gap-2 items-center"
      >
        <Sparkle strokeWidth={1.5} size={24}/> Projects
      </motion.span>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAll(!showAll)}
          className="w-full flex justify-center border border-b-4 border-black/30 items-center gap-2 px-6 py-3 text-black rounded-xl hover:bg-gray-100 transition-all duration-300"
        >
          <motion.div
            animate={{ rotate: showAll ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {showAll ? <Minus size={20} /> : <Plus size={20} />}
          </motion.div>
          {showAll ? "Show Less" : "Show More"}
        </motion.button>
      )}
    </div>
  )
}

export default Projects