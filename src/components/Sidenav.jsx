import React, { useState } from "react";
// icon image
import LogoNavbar from "./image/Logo.png";
import Menuicon from "./image/Menuicon.png";
import Exiticon from "./image/Exiticon.png";
import LinkedinIcon from "./image/linkedin.svg";
import GithubIcon from "./image/github.svg";
import EmailIcon from "./image/email.png";
import ResumeIcon from "./image/resume.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[70px] flex justify-center items-center text-center px-4 bg-navcolor z-10   opacity-80">

      {/* menu */}
      <div className="hidden md:flex shadow shadow-slate-950 items-center text-center">
        <ul className="hidden md:flex  ">
          <li className=" max-w-xs overflow-hidden bg-cover bg-no-repeat ">
            <a href="#main" className="font-Bangers text-3xl mr-2  max-w-xs transition duration-300 ease-in-out hover:scale-110 w-[75%] text-[#ffffff]">
              Home
            </a>
          </li>
          <li className=" max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <a href="#about" className="font-Bangers text-3xl mr-2 mx-2 max-w-xs transition duration-300 ease-in-out hover:scale-110 w-[75%] text-[#ffffff]">
              About
            </a>
          </li>
          <li className=" max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <a href="#skill" className="font-Bangers text-3xl mr-2 mx-2 max-w-xs transition duration-300 ease-in-out hover:scale-110 w-[75%] text-[#ffffff] ">
              Skills
            </a>
          </li>
          <li className=" max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <a href="#work" className="font-Bangers text-3xl mr-2 mx-2 max-w-xs transition duration-300 ease-in-out hover:scale-110 w-[75%] text-[#ffffff]">
              Work
            </a>
          </li>
          <li className=" max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <a href="#project" className="font-Bangers text-3xl mr-2 max-w-xs transition duration-300 ease-in-out hover:scale-110 w-[75%] text-[#ffffff]">
              Project
            </a>
          </li>
          <li className=" max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <a href="#contact" className="font-Bangers text-3xl mr-2 max-w-xs transition duration-300 ease-in-out hover:scale-110 w-[75%] text-[#ffffff]">
              Contact
            </a>
          </li>

        </ul>
      </div>

      {/* menu mobile icon */}
      <div onClick={handleClick} className="md:hidden w-[35px] z-10">
        {!nav ? (
          <img className="w-[100%]" src={Menuicon} alt="icon menu" />
        ) : (
          <img className="w-[100%]" src={Exiticon} alt="exit menu" />
        )}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#419197] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 font-Bangers text-[#FFFFFF] text-[2.5rem]"><a href="#main">Home</a></li>
        <li className="py-6 font-Bangers text-[#FFFFFF] text-[2.5rem]"><a href="#about">About</a></li>
        <li className="py-6 font-Bangers text-[#FFFFFF] text-[2.5rem]"><a href="#skill"></a>Skills</li>
        <li className="py-6 font-Bangers text-[#FFFFFF] text-[2.5rem]"><a href="#project">Project</a></li>
        <li className="py-6 font-Bangers text-[#FFFFFF] text-[2.5rem]"><a href="#contact">Contact</a></li>
      </ul>

      {/* Social icons */}
      <div className="hidden md:block min-[1120px]:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[165px] h-[70px] flex justify-between items-center ml-[-88px] hover:ml-[0px] duration-[200ms] rounded-t-lg hover:rounded-br-lg bg-[#BBD6FF]">
            <a
              className="flex justify-between items-center w-full font-Nanum"
              href="https://www.linkedin.com/in/tanakrit-sonsue-7b3842220/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
              <img
                className="w-[55px] mr-[-3px]"
                src={LinkedinIcon}
                alt="Linked logo"
              />
            </a>
          </li>

          <li className="w-[165px] h-[70px] flex justify-between items-center ml-[-88px] hover:ml-[0px] duration-[200ms]  hover:rounded-r-lg bg-[#D6E5E5]">
            <a
              className="flex justify-between items-center w-full font-Nanum"
              href="https://github.com/TanakritFey"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
              <img
                className="w-[55px] mr-[-3px]"
                src={GithubIcon}
                alt="Github logo"
              />
            </a>
          </li>

          <li className="w-[165px] h-[70px] flex justify-between items-center ml-[-88px] hover:ml-[0px] duration-[200ms] rounded-b-lg hover:rounded-r-lg bg-[#C4E3B5]">
            <a
              className="flex justify-between items-center w-full font-Nanum"
              href="https://www.canva.com/design/DAFtr2cbFno/4DCvVxOQp6ZjHyCujiwvTw/view?utm_content=DAFtr2cbFno&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
              <img
                className="w-[55px] mr-[-3px]"
                src={ResumeIcon}
                alt="Resume logo"
              />
            </a>
          </li>

          <li className="w-[165px] h-[70px] flex justify-between items-center ml-[-88px] hover:ml-[0px] duration-[200ms]  hover:rounded-r-lg bg-[#FF9393]">
            <a
              className="flex justify-between items-center w-full font-Nanum"
              href="mailto:tanakrit.sonsue@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
              <img
                className="w-[55px] mr-[-3px]"
                src={EmailIcon}
                alt="Email logo"
              />
            </a>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;