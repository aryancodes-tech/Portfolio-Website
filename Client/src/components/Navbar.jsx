import { Link } from "react-scroll"
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference for the dropdown

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="font-['Gilroy'] overflow-hidden p-5 w-full bg-[#f4f4f5]">
        <div className="px-3 md:px-6 lg:px-10 flex flex-row justify-between items-center navbar h-16 w-full rounded-md md:rounded-lg bg-white shadow-md">
          {/* Monogram */}
          <div className="flex flex-row justify-between gap-2 items-center">
              <img src="/ag_black.svg" className="w-12 rounded-lg"/>
              <p className="text-2xl uppercase flex flex-col leading-none tracking-normal">
              <span className="font-light">Aryan</span>{" "}
              <span className="font-bold">Gupta</span> 
              </p>
          </div>

          {/* Hamburger Menu for small screens */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {/* Hamburger Icon */}
              <div className="w-6 h-1 bg-black mb-1"></div>
              <div className="w-6 h-1 bg-black mb-1"></div>
              <div className="w-6 h-1 bg-black"></div>
            </button>
          </div>

          {/* Links for larger screens */}
          <div className="hidden md:flex">
              <ul className="flex flex-row gap-5">
              {/* <li className="hover:cursor-pointer">ABOUT ME</li>
              <li>/</li> */}
              <li className="hover:cursor-pointer">
                <Link to="freelance" smooth={true} duration={500}>FREELANCE</Link>
              </li>
              <li>/</li>
              <li className="hover:cursor-pointer">
                <Link to="projects" smooth={true} duration={500}>PROJECTS</Link>
              </li>
              </ul>
          </div>

          {/* CTA for larger screens */}
          <div className="hidden md:block">
            <button className="py-2 bg-gradient-to-t from-black to-blue-900 text-white font-semibold px-5 rounded-lg shadow-md">
              <Link to="contactme" smooth={true} duration={500}>Contact Me</Link>
            </button>
          </div>
        </div>

        {/* Dropdown Menu for small screens */}
        {isOpen && (
          <div ref={dropdownRef} className="z-20 md:hidden text-center bg-white shadow-md rounded-lg mt-2 absolute right-5">
            <ul className="flex flex-col gap-2 p-3">
              {/* <li className="hover:cursor-pointer">ABOUT ME</li> */}
              <li className="hover:cursor-pointer">
                <Link to="freelance" smooth={true} duration={500}>FREELANCE</Link>
              </li>
              <li className="hover:cursor-pointer">
                <Link to="projects" smooth={true} duration={500}>PROJECTS</Link>
              </li>
              <li>
                <button className="py-2 bg-gradient-to-t from-black to-blue-900 text-white font-semibold px-5 rounded-lg shadow-md">
                  <Link to="contactme" smooth={true} duration={500}>Contact Me</Link>
                </button>
              </li>
            </ul>
          </div>
        )}
    </div>
  )
}

export default Navbar