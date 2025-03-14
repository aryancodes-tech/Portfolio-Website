import { FolderOpenDot, Handshake } from "lucide-react"
import { useEffect } from "react";
import { motion } from 'framer-motion';

const SnowEffect = () => {
    useEffect(() => {
      const canvas = document.getElementById("snowCanvas");
      const ctx = canvas.getContext("2d");
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
  
      const snowflakes = [];
      const maxSnowflakes = 100;
  
      for (let i = 0; i < maxSnowflakes; i++) {
        snowflakes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1, // Small circles
          speed: Math.random() * 1 + 0.5,
        });
      }
  
      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
  
        snowflakes.forEach((flake) => {
          ctx.beginPath();
          ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
          ctx.fill();
          flake.y += flake.speed;
  
          // Reset snowflake to the top if it goes off the screen
          if (flake.y > canvas.height) {
            flake.y = 0;
            flake.x = Math.random() * canvas.width;
          }
        });
      };
  
      const interval = setInterval(draw, 30);
      return () => clearInterval(interval);
    }, []);
  
    return <canvas id="snowCanvas" style={{ position: "absolute", top: 0, left: 0, zIndex: 1, width: 'auto' }} />;
  };
  
const HeroSection = () => {
  return (
    <div className="font-['Gilroy'] p-5 pt-0 w-full">
      <div className="relative py-12 overflow-hidden h-auto bg-white rounded-md md:rounded-lg flex flex-col justify-center items-center gap-5">
        <SnowEffect />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10 bg-white backdrop-blur-xl border border-white rounded-full flex flex-col justify-center items-center gap-5"
        >
          <div className="absolute inset-0 -z-10 bg-white blur-3xl opacity-20"></div>

          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 20 }}
            className="relative w-40 h-40 bg-gray-500 rounded-full border-4 border-gray-200"
          >
            <img src="/photo.svg" className="w-full h-full rounded-full" />
            <div className="absolute top-1/4 -right-[60px] md:-right-24 -rotate-3 rounded-full md:rounded-lg w-fit py-2 px-4 md:px-6 bg-black/80 font-bold text-white text-md md:text-xl flex flex-row items-center gap-2 hover:cursor-pointer">
              <span className="flex items-center flex-row gap-2 md:hidden">Hello! <Handshake /></span>
              <motion.a href="https://aryancodes.tech/resume" target="_blank" className="flex items-center flex-row gap-2 font-bold tracking-wide" whileHover={{ scale: 1.1 }}>
                <span className="hidden md:flex items-center flex-row gap-2">
                    <FolderOpenDot strokeWidth={1.5} size={24}/>Résumé
                </span>
              </motion.a>
            </div>
          </motion.div>
          
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="name text-3xl sm:text-6xl PolySansMedium"
          >
            I&apos;m Aryan Gupta.
          </motion.span>
          
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className='designation text-center max-w-[400px] sm:max-w-[682px] text-xl sm:text-4xl px-5 lowercase'
          >
            backend heavy software developer, specialized in building scalable, user-centric web apps that prioritizes requirements.
          </motion.span>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection