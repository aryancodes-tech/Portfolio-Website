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

const Home = () => {
  return (
    <div className="content">
      <Navbar />

      <HeroSection />

      <Element name="freelance">
        <Freelance />  
      </Element>

      <Element name="projects">
        <Projects />  
      </Element>

      {/* <AboutMe /> */}
      <Element name="contactme">
        <ContactMe />
      </Element>

      <ResumeButton />
    </div>
  )
}

export default Home