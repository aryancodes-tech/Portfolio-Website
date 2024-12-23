import contact_bg from '../assets/contact-bg.jpg'
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import CopyToClipboardButton from './CopyToClipboardButton';
// import Tooltip from './Tooltip';
import './ContactMe.css'
import { motion } from 'framer-motion';

const ContactMe = () => {

  const defineBG = {
    backgroundImage: `url(${contact_bg})`,
    backgroundColor: "#1a1819",
    backgroundRepeat: "no-repeat",
    backgroundSize: "70% 100%",
    backgroundPosition: "top center",
  };

  const socialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div id="contactme" className='contact-me-container font-["Gilroy"] contact-me-container w-full h-auto rounded-t-lg md:rounded-t-[40px]' style={defineBG}>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='py-[120px] flex flex-col justify-center gap-7 items-center'
      >
        <p className="text-3xl md:text-5xl flex flex-row justify-center items-center text-[#f5f5f4] ">
          Contact Me
        </p>
        
        <p className='contact-me-description max-w-[300px] sm:max-w-[500px] text-white text-2xl text-center tracking-normal leading-loose'>
          Have questions, ideas, or proposals? <br/>Let&apos;s team up and create something remarkable!
        </p>
        
        <div className='emailClass px-2 sm:px-5 py-1 sm:py-3 m-5 bg-white rounded-lg sm:rounded-xl hover:cursor-text flex flex-row items-center'>
          <span className='font-semibold'>email:</span> &nbsp; 
          <span className='mr-5'>aryangupta8291@gmail.com</span>
          <span>
            <CopyToClipboardButton content="aryangupta8291@gmail.com"/>
          </span>
        </div>

        <motion.div 
          variants={socialVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className='socials-container flex flex-row gap-5 text-5xl mb-5'
        >
          <motion.div variants={itemVariant}>
            <a href="https://github.com/aryanploxxx" target="_blank" rel="noopener noreferrer">
              <FaGithub className='text-white hover:text-[#f5f5f4] transition-all'/>
            </a>
          </motion.div>
          
          <motion.div variants={itemVariant}>
            <a href="https://linkedin.com/in/aryanploxxx" target="_blank" rel="noopener noreferrer">
              <IoLogoLinkedin className='text-white hover:text-[#f5f5f4] transition-all'/>
            </a>
          </motion.div>
          
          <motion.div variants={itemVariant}>
            <a href="https://x.com/aryancodes_tech" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className='text-white hover:text-[#f5f5f4] transition-all'/>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ContactMe