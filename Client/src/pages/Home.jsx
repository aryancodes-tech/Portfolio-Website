// import { Element } from "react-scroll"

// import AboutMe from "../components/AboutMe/AboutMe"
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import AboutMe from "../components/AboutMe"
import ContactMe from "../dump/ContactMe/ContactMe"
import Projects from "../dump/Projects/Projects"
import { ArrowDownCircle, ArrowUpRight } from "lucide-react"
import Freelance from "../components/Freelance"
// import LandingPage from "../components/HeroSection/LandingPage"
// import Projects from "../components/Projects/Projects"
// import Skills from "../components/AboutMe/Skills"
// import { useEffect } from "react";

// Add a new component for the snow effect


const Home = () => {
  return (
    <div className="">
      <Navbar />
      <HeroSection />

      <Freelance />
      <Projects />      

      <AboutMe />
      <ContactMe />
    </div>
  )
}

export default Home