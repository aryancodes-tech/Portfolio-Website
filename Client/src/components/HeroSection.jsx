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
    <div className="font-['Gilroy'] p-5 pt-0 w-full ">
        <div className="relative py-12 overflow-hidden h-auto bg-white rounded-md md:rounded-lg flex flex-col justify-center items-center gap-5">
            <SnowEffect />
            <div className="z-10 bg-white backdrop-blur-xl border border-white rounded-full flex flex-col justify-center items-center gap-5">
              <div className="absolute inset-0 -z-10 bg-white blur-3xl opacity-20"></div>

              <div className="relative w-40 h-40 bg-gray-500 rounded-full border-4 border-gray-200">
                <img src="/photo.svg" className="w-full h-full rounded-full" />
                <div className="absolute top-1/4 -right-[60px] md:-right-24 -rotate-3 rounded-full md:rounded-lg w-fit py-2 px-4 md:px-6 bg-black/80 font-bold text-white text-md md:text-xl flex flex-row items-center gap-2 hover:cursor-pointer">
                  <span className="flex items-center flex-row gap-2 md:hidden">Hello! <Handshake /></span>
                  <motion.a href="https://bit.ly/aryan-gupta-pdf" target="_blank" className="flex items-center flex-row gap-2 font-bold tracking-wide" whileHover={{ scale: 1.1 }}>
                    <span className="hidden md:flex items-center flex-row gap-2">
                        <FolderOpenDot strokeWidth={1.5} size={24}/>Résumé
                    </span>
                  </motion.a>
                </div>
              </div>
              
              <span className="name text-4xl sm:text-6xl PolySansMedium">
                I&apos;m Aryan.
              </span>
              
              <span className='designation text-center max-w-[400px] sm:max-w-[682px] text-2xl sm:text-4xl px-5 lowercase'>
                front-end heavy software developer, specialized in building scalable, user-centric web apps that prioritizes requirements.
              </span>
            </div>
        </div>
      </div>
  )
}

export default HeroSection