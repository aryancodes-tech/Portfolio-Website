// import { Element } from "react-scroll"

// import AboutMe from "../components/AboutMe/AboutMe"
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
// import AboutMe from "../components/AboutMe"
import ContactMe from "../components/ContactMe"
import Projects from "../components/Projects"
import Freelance from "../components/Freelance"
import ResumeButton from "../components/ResumeButton"
import { Element } from "react-scroll"
import Experience from "../components/Experience"
import Education from "../components/Education"
import HonorsAndAwards from "../components/HonorsAndAwards"
import PositionsOfResponsibility from "../components/PositionsOfResponsibility"

const Home = () => {
  return (
    <div className="content">
      <Navbar />

      <HeroSection />

      <Element name="education">
        <Education />
      </Element>

      <Element name="experience">
        <Experience />
      </Element>
{/* 
      <Element name="freelance">
        <Freelance />  
      </Element> */}

      <Element name="projects">
        <Projects />  
      </Element>

      <HonorsAndAwards />
      <PositionsOfResponsibility />

      {/* <AboutMe /> */}
      <Element name="contactme">
        <ContactMe />
      </Element>

      <ResumeButton />
    </div>
  )
}

export default Home