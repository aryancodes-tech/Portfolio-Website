"use client"

import { Sparkle, Play, Pause, ExternalLink } from 'lucide-react'
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Freelance = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
    setIsOverlayVisible(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsOverlayVisible(false);
    }, 3000);
  };

  const handleMouseMove = () => {
    setIsOverlayVisible(true);
    setIsHovered(true);
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    if (isPlaying) {
      timeoutRef.current = setTimeout(() => {
        setIsOverlayVisible(false);
      }, 2000); // Hide overlay after 3 seconds of inactivity
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div id="freelance" className="font-['Gilroy'] p-5 w-full flex flex-col gap-5">
      <span className="hidden md:flex text-4xl font-bold flex-row gap-2 items-center">
        <Sparkle strokeWidth={1.5} size={36}/> Freelance Projects
      </span>

      <span className="flex md:hidden text-2xl font-bold flex-row gap-2 items-center">
        <Sparkle strokeWidth={1.5} size={24}/> Freelance Projects
      </span>

      <div 
        className="relative rounded-md md:rounded-xl overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsOverlayVisible(false);
        }}
        onMouseMove={handleMouseMove}
        onClick={togglePlayPause}
      >
        <video 
          ref={videoRef} 
          src="/freelance.mkv" 
          className="w-full rounded-lg md:rounded-xl" 
          loop 
          muted 
        />

        <AnimatePresence>
          {(!isPlaying || (isHovered && isOverlayVisible)) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white"
            >
              {/* Play/Pause Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlayPause();
                }}
                className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4"
              >
                {isPlaying ? 
                  <Pause className="w-10 h-10" /> : 
                  <Play className="w-10 h-10 ml-1" />
                }
              </motion.button>

              {/* Description */}
              <div className="hidden sm:block text-center px-6 max-w-2xl">
                <h3 className="text-md md:text-2xl font-bold mb-2 flex flex-row gap-2 items-center justify-center">
                    <svg className="svg-icon" width="45.5" height="33.5" viewBox="0 0 71 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.5301 18.4668C38.2789 18.4668 36.3277 20.0198 35.7266 21.8844H43.9821C43.9821 19.8653 42.632 18.4668 40.5301 18.4668Z" fill="#FF073C"/>
                        <path d="M35.4254 0.135742C15.9114 0.135742 0 8.52397 0 21.1049C0 29.1815 6.60418 36.327 16.5111 40.3653L15.4609 46.2682C44.4313 48.7535 71 39.2785 71 21.4152C70.8494 6.34899 51.3367 0.135742 35.4254 0.135742Z" fill="#FF073C"/>
                        <path d="M38.8202 33.3384C42.8734 33.3384 46.1748 31.3192 47.6769 27.5913H42.7228C41.8218 28.8339 40.7715 29.4546 39.1201 29.4546C37.0183 29.4546 35.3669 27.9016 35.2176 25.8825H48.1261C50.0774 19.6692 46.9252 14.8545 40.6209 14.8545C35.5175 14.8545 31.9148 17.806 31.0138 22.7766C29.9649 28.8339 33.2663 33.3384 38.8202 33.3384ZM40.6222 18.7369C42.8734 18.7369 44.2249 20.1354 44.2249 22.1545H35.9693C36.4185 20.2913 38.2205 18.7369 40.6222 18.7369Z" fill="#F8F6F3"/>
                        <path d="M27.1125 33.3405H28.3134L29.2144 28.836H28.1641C26.5127 28.836 25.7624 27.5934 26.0622 25.7301L27.2631 19.2065H31.0164L31.9174 14.7021H28.1628L28.9132 10.3535H24.1096L21.2574 25.5756C20.5083 30.0787 22.309 33.3405 27.1125 33.3405Z" fill="#F8F6F3"/>
                        <path d="M55.7835 33.3389H57.135L58.036 28.8345H56.9858C55.3344 28.8345 54.4334 27.5918 54.8839 25.7285L57.7361 10.3506H52.9326L50.0804 25.5727C49.178 30.3874 51.2799 33.3389 55.7835 33.3389Z" fill="#F8F6F3"/>
                        <path d="M22.3078 10.5078H17.5043L16.7539 15.0122H21.4068L22.3078 10.5078Z" fill="#F8F6F3"/>
                        <path d="M21.108 16.8721H16.3045L13.1523 33.3368H17.9559L21.108 16.8721Z" fill="#F8F6F3"/>
                    </svg>
                    <span>Itel India</span>
                </h3>
                <p className="text-sm md:text-lg text-gray-200 mb-4 max-w-[500px]">
                  This website is a collection of about 48 pages and was developed in the time frame of 1.5 months!
                </p>
                <motion.a
                  href="https://itel-india.aryancodes.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white px-10 py-2 rounded-full inline-flex items-center gap-2 text-black hover:text-blue-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  View Full Website
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress Bar */}
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered && isOverlayVisible ? 1 : 0 }}
            className="absolute bottom-0 left-0 right-0 h-1 bg-white/20"
          >
            <motion.div
              className="h-full bg-blue-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: videoRef.current?.duration || 30,
                ease: "linear",
                repeat: Infinity
              }}
            />
          </motion.div>
        )}
      </div>

      
      <div className="sm:hidden text-center px-6 max-w-2xl flex flex-col items-center gap-1">
            <h3 className="text-md md:text-2xl font-bold mb-2 flex flex-row gap-2 items-center justify-center">
                <svg className="svg-icon" width="45.5" height="33.5" viewBox="0 0 71 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.5301 18.4668C38.2789 18.4668 36.3277 20.0198 35.7266 21.8844H43.9821C43.9821 19.8653 42.632 18.4668 40.5301 18.4668Z" fill="#FF073C"/>
                    <path d="M35.4254 0.135742C15.9114 0.135742 0 8.52397 0 21.1049C0 29.1815 6.60418 36.327 16.5111 40.3653L15.4609 46.2682C44.4313 48.7535 71 39.2785 71 21.4152C70.8494 6.34899 51.3367 0.135742 35.4254 0.135742Z" fill="#FF073C"/>
                    <path d="M38.8202 33.3384C42.8734 33.3384 46.1748 31.3192 47.6769 27.5913H42.7228C41.8218 28.8339 40.7715 29.4546 39.1201 29.4546C37.0183 29.4546 35.3669 27.9016 35.2176 25.8825H48.1261C50.0774 19.6692 46.9252 14.8545 40.6209 14.8545C35.5175 14.8545 31.9148 17.806 31.0138 22.7766C29.9649 28.8339 33.2663 33.3384 38.8202 33.3384ZM40.6222 18.7369C42.8734 18.7369 44.2249 20.1354 44.2249 22.1545H35.9693C36.4185 20.2913 38.2205 18.7369 40.6222 18.7369Z" fill="#F8F6F3"/>
                    <path d="M27.1125 33.3405H28.3134L29.2144 28.836H28.1641C26.5127 28.836 25.7624 27.5934 26.0622 25.7301L27.2631 19.2065H31.0164L31.9174 14.7021H28.1628L28.9132 10.3535H24.1096L21.2574 25.5756C20.5083 30.0787 22.309 33.3405 27.1125 33.3405Z" fill="#F8F6F3"/>
                    <path d="M55.7835 33.3389H57.135L58.036 28.8345H56.9858C55.3344 28.8345 54.4334 27.5918 54.8839 25.7285L57.7361 10.3506H52.9326L50.0804 25.5727C49.178 30.3874 51.2799 33.3389 55.7835 33.3389Z" fill="#F8F6F3"/>
                    <path d="M22.3078 10.5078H17.5043L16.7539 15.0122H21.4068L22.3078 10.5078Z" fill="#F8F6F3"/>
                    <path d="M21.108 16.8721H16.3045L13.1523 33.3368H17.9559L21.108 16.8721Z" fill="#F8F6F3"/>
                </svg>
                <span>Itel India</span>
            </h3>
            <p className="text-sm md:text-lg text-black text-center font-bold mb-2 max-w-[400px]">
                This website is a collection of about 48 pages and was developed in the time frame of 1.5 months!
            </p>
            <motion.a
                href="https://itel-india.aryancodes.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className=" px-10 py-2 rounded-full inline-flex items-center gap-2 bg-black text-white hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                onClick={(e) => e.stopPropagation()}
            >
                View Full Website
                <ExternalLink className="w-4 h-4" />
            </motion.a>
        </div>
    </div>
  )
}

export default Freelance

