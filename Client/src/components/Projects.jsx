// import ProjectCard from "./ProjectCard"
import buzzvibe from '/project_logos/buzzvibe.svg'
import kioskmeet from '/project_logos/kioskmeet.svg'
import widgetwall from '/project_logos/widgetwall.svg'
import compilex from '/project_logos/compilex.svg'
import squadspeak from '/project_logos/squadspeak.svg'
import jobspool from '/project_logos/jobspool.svg'

import ProjectCard from './ProjectCard'
import { Sparkle } from 'lucide-react'

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col flex-wrap justify-center items-left gap-5 p-5">
      
      <span className="hidden md:flex text-4xl font-bold flex-row gap-2 items-center">
        <Sparkle strokeWidth={1.5} size={36}/> Projects
      </span>

      <span className="flex md:hidden text-2xl font-bold flex-row gap-2 items-center">
        <Sparkle strokeWidth={1.5} size={24}/> Projects
      </span>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <>
        <ProjectCard 
          firebase="Firebase" 
          source={buzzvibe} 
          imgPreview="/project_images/buzzvibe.jpg"
          name="BuzzVibe - Social Media Application" 
          description="A full-stack social platform featuring real-time updates, user interactions, and media sharing capabilities"
          githubLink="https://github.com/aryanploxxx/BuzzVibe-Social-Media-Application" 
          externalLink="https://buzzvibe.aryancodes.tech"
          externalLinkText="buzzvibe.aryancodes.tech"
          wonHackathon={false}
        />
        
        <ProjectCard 
          source={widgetwall} 
          imgPreview="/project_images/widgetwall.jpg"
          name="WidgetWall - Chrome Extension" 
          description="Browser extension for streamlined task management, time tracking, and productivity enhancement"
          githubLink="https://github.com/aryanploxxx/WidgetWall-Chrome-Extension" 
          externalLink="https://widgetwall.aryancodes.tech"
          externalLinkText="widgetwall.aryancodes.tech"
          wonHackathon={true}
        />
        
        <ProjectCard 
          source={jobspool} 
          imgPreview="/project_images/jobspool.jpg"
          name="JobsPool - Job Search Platform" 
          description="Comprehensive job search platform connecting candidates with employers, featuring smart matching and filters"
          githubLink="https://github.com/aryanploxxx/Jobs-Portal-React" 
          externalLink="https://jobspool.aryancodes.tech"
          externalLinkText="jobspool.aryancodes.tech"
          wonHackathon={false}
        />
        
        <ProjectCard 
          source={kioskmeet} 
          imgPreview="/project_images/kioskmeet.jpg"
          name="KioskMeet - One Stop Campus Solution" 
          description="Integrated campus management system streamlining student services, communications, and resource access"
          githubLink="https://github.com/aryanploxxx/KioskMeet-Minor-Project" 
          externalLink="https://github.com/aryanploxxx/SquadSpeak-Chat-App"
          wonHackathon={false}
        />
        
        <ProjectCard 
          source={compilex} 
          imgPreview="/project_images/compilex.jpg"
          name="CompileX - Online Coding Platform" 
          description="Interactive coding platform with real-time compilation, multiple language support, and collaborative features"
          githubLink="https://github.com/pritpalcodes/CodeRaiders-Tally-Codebrewers-24" 
          externalLink="https://github.com/aryanploxxx/SquadSpeak-Chat-App"
          wonHackathon={false}
        />
        
        <ProjectCard 
          source={squadspeak} 
          imgPreview="/project_images/squadspeak.jpg"
          name="SquadSpeak - Chatting Application" 
          description="Real-time messaging application with group chats, file sharing, and encrypted communication"
          githubLink="https://github.com/aryanploxxx/SquadSpeak-Chat-App" 
          externalLink="https://github.com/aryanploxxx/SquadSpeak-Chat-App"
          wonHackathon={false}
        />
        </>
      </div>
    
    </div>
  )
}

export default Projects