import contact_bg from '../assets/contact-bg.jpg'
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import CopyToClipboardButton from './CopyToClipboardButton';
import Tooltip from './Tooltip';
import './ContactMe.css'
const ContactMe = () => {

  const defineBG = {
    backgroundImage: `url(${contact_bg})`,
    backgroundColor: "#1a1819",
    backgroundRepeat: "no-repeat",
    backgroundSize: "70% 100%",
    backgroundPosition: "top center",
  };

  return (
    <div id="contactme" className='contact-me-container font-["Gilroy"] contact-me-container w-full h-auto rounded-t-lg md:rounded-t-[40px]' style={defineBG}>
      <div className='py-[120px]  flex flex-col justify-center gap-7 items-center'>
        <p className="contact-me-title about-me-title text-5xl flex flex-row justify-center items-center text-[#f5f5f4] ">
          Contact Me
        </p>
        
        <p className='contact-me-description text-white text-3xl text-center tracking-normal leading-loose'>
          Have questions, ideas, or proposals? <br/>Let&apos;s team up and create something remarkable!
        </p>
        
        <div className='emailClass px-5 py-3 m-5 bg-white rounded-xl hover:cursor-text flex flex-row items-center'>
          <span className='font-semibold'>email:</span> &nbsp; 
          <span className='mr-5'>aryangupta8291@gmail.com</span>
          <span>
            <CopyToClipboardButton content="aryangupta8291@gmail.com"/>
          </span>
        </div>

        <div className='socials-container flex flex-row gap-5 text-5xl mb-5'>
          
          <div>
            <a href="https://github.com/aryanploxxx" target="_blank" rel="noopener noreferrer">
              <FaGithub className='text-white hover:text-[#f5f5f4] transition-all'/>
            </a>
          </div>
          
          <div>
            <a href="https://linkedin.com/in/aryanploxxx" target="_blank" rel="noopener noreferrer">
              <IoLogoLinkedin className='text-white hover:text-[#f5f5f4] transition-all'/>
            </a>
          </div>
          
          <div>
            <Tooltip text="Chat here">
              <a href="https://x.com/aryancodes_tech" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className='text-white hover:text-[#f5f5f4] transition-all'/>
              </a>
            </Tooltip>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default ContactMe