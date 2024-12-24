/* eslint-disable react/prop-types */
import { Github, ArrowUpRight, Trophy, Globe } from 'lucide-react'
import { useState, useCallback } from 'react'
import { motion } from 'framer-motion';

const ProjectCard = ({source, imgPreview, name, githubLink, externalLink, externalLinkText, description, wonHackathon, isSaaS}) => {
  const [showPreview, setShowPreview] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  
  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }, [])

  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative font-['Gilroy'] flex flex-col gap-8 w-full text-black rounded-xl py-6 px-4 md:p-8 border border-b-4 border-black/30 hover:border-black/60 hover:transition-colors"
      style={{ zIndex: showPreview ? 50 : 0 }}
    >
      
      {wonHackathon && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="absolute -top-5 md:-top-3 inset-x-0 mx-auto md:left-auto md:right-3 w-fit text-nowrap bg-red-600 text-white px-4 py-1 rounded-xl text-sm md:text-lg font-bold shadow-lg flex flex-row items-center gap-2"
        >
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Trophy size={20}/>
          </motion.div>
          Hackathon Winner
        </motion.div>
      )}
      
      <div className="flex flex-row justify-between items-center">
        <img src={source} className="w-24 md:h-10 md:w-40" alt={name}/>
        <div className='flex flex-row md:flex-col lg:flex-row justify-end gap-2'>
        {isSaaS && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="absolute -top-5 md:-top-3 inset-x-0 mx-auto md:left-auto md:right-3 w-fit text-nowrap bg-purple-50 text-purple-800 border-2 border-purple-800 px-4 py-1 rounded-xl text-sm md:text-lg font-bold shadow-lg flex flex-row items-center gap-2"
            >
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
              transition={{ duration: 1, delay: 1 }}
            >
              <span className='hidden md:block'><Globe size={20}/></span>
              <span className='block md:hidden'><Globe size={16}/></span>
            </motion.div>
            Micro-SaaS
          </motion.div>
        )}
        {
          githubLink && 
            <>
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="hidden md:block hover:cursor-pointer">
                <Github size={40}/>
              </a>
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="block md:hidden hover:cursor-pointer">
                <Github size={24}/>
              </a>
            </>
        }
        </div>
        
      </div>
      
      <div className="flex flex-col gap-2">
        <span className="text-lg md:text-2xl PolySansMedian text-gray-800">{name}</span>
        <span className="text-md md:text-lg PolySansSlim leading-tight text-gray-500">{description}</span>
      </div>

      <div className="relative">
        <a 
          href={externalLink} 
          target="_blank" 
          rel="noopener noreferrer"
          onMouseEnter={() => setShowPreview(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setShowPreview(false)}
          className="hover:text-blue-700"
        >
           <div className="PolySansNeutral text-gray-700 hover:cursor-pointer tracking-wide flex flex-row items-center gap-2 md:gap-4 text-md md:text-lg lg:text-xl">
           { externalLinkText && <span>{externalLinkText}</span> }
            <span className="hidden md:block p-1 bg-black/10 rounded-full hover:scale-125 hover:transition-all">
              <ArrowUpRight strokeWidth={1.5} size={20}/>
            </span>
            <span className="block md:hidden p-1 bg-black/10 rounded-full hover:scale-125 hover:transition-all">
              <ArrowUpRight strokeWidth={1.5} size={14}/>
            </span>
          </div> 
        </a>

        {showPreview && (
          <div 
            className="hidden sm:block absolute z-[999] w-[400px] rounded-lg bg-white shadow-xl"
            style={{
              left: `${position.x + 16}px`,
              top: `${position.y + 16}px`,
              pointerEvents: 'none'
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
    </motion.div>
  )
}

export default ProjectCard