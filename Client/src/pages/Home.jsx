// import { Element } from "react-scroll"

// import AboutMe from "../components/AboutMe/AboutMe"
import Navbar from "../components/Navbar"
import AboutMe from "../components/AboutMe"
import ContactMe from "../dump/ContactMe/ContactMe"
// import LandingPage from "../components/HeroSection/LandingPage"
// import Projects from "../components/Projects/Projects"
// import Skills from "../components/AboutMe/Skills"

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <AboutMe /> */}

      <div className="font-['Gilroy'] p-5 pt-0 w-full ">
        <div className=" h-[70vh]  rounded-xl flex flex-row justify-between gap-5">

          <div className="w-1/2 rounded-xl flex flex-col">
            <span className="text-xl font-mono">myself,</span>
            <span className="text-8xl font-bold uppercase">Aryan Gupta</span>
          </div>
          <div className="w-1/2 rounded-xl bg-gradient-to-r to-[#FFAFBD] from-[#FFC3A0]">
          s
          </div>
        </div>
      </div>

      <ContactMe />
    </>
  )
}

export default Home