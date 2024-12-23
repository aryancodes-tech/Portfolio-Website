/* eslint-disable react/prop-types */
import { Github, ArrowUpRight, Trophy } from 'lucide-react'
import { useState, useCallback } from 'react'

const ProjectCard = ({source, imgPreview, name, githubLink, externalLink, externalLinkText, description, wonHackathon}) => {
  const [showPreview, setShowPreview] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  
  const handleMouseMove = useCallback((e) => {
    // Get position relative to viewport
    setPosition({
      x: e.clientX,
      y: e.clientY
    })
  }, [])

  return (
    <div className="relative font-['Gilroy'] flex flex-col gap-8 w-full text-black rounded-xl py-6 px-4 md:p-8 border border-b-4 border-black/30 hover:border-black/60 hover:transition-colors">
      
      {wonHackathon && (
        <div className="absolute -top-5 md:-top-3 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 w-auto text-nowrap md:-right-3 bg-red-600 text-white px-4 py-1 rounded-xl text-sm md:text-lg font-bold shadow-lg flex flex-row items-center gap-2">
          <Trophy size={20}/> Hackathon Winner
        </div>
      )}
      
      <div className="flex flex-row justify-between items-center">
        <img src={source} className="w-24 md:h-10 md:w-40"/>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="hidden md:block hover:cursor-pointer">
          <Github size={40}/>
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="block md:hidden hover:cursor-pointer">
          <Github size={24}/>
        </a>
      </div>
      
      <div className="flex flex-col gap-2">
        <span className="text-lg md:text-2xl PolySansMedian text-gray-800">{name}</span>
        <span className="text-md md:text-lg PolySansSlim leading-tight text-gray-500">{description}</span>
      </div>

      <div className="relative hover:text-blue-700">
        <a 
          href={externalLink} 
          target="_blank" 
          rel="noopener noreferrer"
          onMouseEnter={() => setShowPreview(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setShowPreview(false)}
        >
           <div className="PolySansNeutral text-gray-700 hover:cursor-pointer tracking-wide flex flex-row items-center gap-2 md:gap-4 text-md md:text-lg lg:text-xl">
           { externalLinkText && <span className="">{externalLinkText}</span> }
            <span className="hidden md:block p-1 bg-black/10 rounded-full hover:scale-125 hover:transition-all">
              <ArrowUpRight strokeWidth={1.5} size={20}/>
            </span>
            <span className="block md:hidden p-1 bg-black/10 rounded-full hover:scale-125 hover:transition-all">
              <ArrowUpRight strokeWidth={1.5} size={14}/>
            </span>
          </div> 
        </a>

        {/* Preview Image/GIF */}
        {showPreview && (
          <div 
            className="fixed z-10 w-[400px] rounded-lg bg-white shadow-xl"
            style={{
              left: `${position.x + 16}px`, // Offset from cursor
              top: `${position.y + 16}px`,  // Offset from cursor
              pointerEvents: 'none'  // Prevent the preview from interfering with hover
            }}
          >
            <img
              src={imgPreview}
              alt="Preview"
              className="w-full rounded"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectCard