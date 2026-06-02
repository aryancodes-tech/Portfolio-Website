import ProjectCard from './ProjectCard'
import { Sparkles } from 'lucide-react'
import { m } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { projectsData } from '../constants/data/projects'
import { projectGridContainer, projectGridItem } from '../motion/variants'

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex w-full flex-col gap-8 px-1 py-8 sm:px-2 md:py-12"
      aria-label="Aryan Gupta backend and full-stack projects"
    >
      <SectionHeading
        title="Projects"
        icon={<Sparkles strokeWidth={2} size={22} className="md:h-7 md:w-7" />}
      />

      <m.div
        variants={projectGridContainer}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-8 md:grid-cols-2"
      >
        {projectsData.map((project, index) => (
          <m.div key={index} variants={projectGridItem}>
            <ProjectCard {...project} />
          </m.div>
        ))}
      </m.div>
    </section>
  )
}

export default Projects
