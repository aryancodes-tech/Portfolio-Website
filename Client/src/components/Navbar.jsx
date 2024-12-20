const Navbar = () => {
  return (
    <div className="font-['Gilroy'] overflow-hidden p-5 w-full bg-[#dbdadf]">
        <div className="px-10 flex flex-row justify-between items-center navbar h-16 w-full rounded-xl bg-white shadow-md">
        {/* Monogram */}
        <div className="flex flex-row justify-between gap-2 items-center">
            <img src="/ag_black.svg" className="w-12 rounded-lg"/>
            <p className="text-2xl uppercase flex flex-col leading-none tracking-normal">
            <span className="font-light">Aryan</span>{" "}
            <span className="font-bold">Gupta</span> 
            </p>
        </div>


        <div>
            <ul className="flex flex-row gap-5">
            <li className="hover:cursor-pointer">ABOUT ME</li>
            <li>/</li>
            <li className="hover:cursor-pointer">FREELANCE</li>
            <li>/</li>
            <li className="hover:cursor-pointer">PROJECTS</li>
            </ul>
        </div>


        {/* CTA */}
        <button className="py-2 bg-black text-white font-semibold px-5 rounded-lg border-2 border-black">
            Contact Me
        </button>
        </div>



































    {/* <Element name="home" className=" overflow-hidden h-screen w-screen flex flex-col items-center">
      <LandingPage />
    </Element>
    
    <Element name="about" className="w-screen mt-20 flex justify-center rounded-t-[50px]">
      <AboutMe />
    </Element>

    <Element name="skills" className="w-screen mt-2 flex justify-center rounded-t-[50px]">
      <Skills />
    </Element>
    
    <Element name="projects" className="w-screen mt-20 flex justify-center items-center">
      <Projects />
    </Element>
    
    <Element name="contact"className="w-screen h-screen mt-28 bg-black mt-[50px] rounded-t-[70px] flex justify-center items-center">
      <ContactMe />
    </Element> */}


    {/* <div className="fixed bottom-0 left-0 right-0 mb-4 z-50 flex justify-center cursor-pointer">
      <BottomNavbar />
    </div> */}
    </div>
  )
}

export default Navbar