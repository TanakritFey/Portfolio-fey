import React from "react";

// import image skill
import Html from "./imageskill/Html.png";
import Css from "./imageskill/Css.png";
import JavaScript from "./imageskill/JavaScript.png";
import Reactlogo from "./imageskill/Reactlogo.png";
import Bootstrap from "./imageskill/Bootstrap.png";
import Tailwind from "./imageskill/Tailwind.png";
import Nodejs from "./imageskill/Nodejs.png";
import Expressjs from "./imageskill/Expressjs.png";
import Mongodb from "./imageskill/Mongodb.png";
import Git from "./imageskill/Git.png";
import Figma from "./imageskill/Figma.png";

const Skills = () => {
  return (
    <div className="bg-[#000000] w-full h-full" id="skill">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-auto">
        {/* หัวข้อ Skills */}
        <div className="text-center">
          <p className="text-6xl font-Bangers inline border-b-4 text-white ">
            Skills
          </p>
          <p className="py-4 font-Nanum  text-2xl text-white">
            These are the Tech Stacks I learned and used in my project.
          </p>
        </div>

        {/* Skill icon card */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8 gap-[1rem] " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          {/* Card skills */}

          <div className="shadow-md rounded-md shadow-[#040c16] bg-[#F5FCCD] hover:scale-110 duration-500">
            <img className="w-[6rem] mx-auto" src={Html} alt="HTML icon" />
            <p className="my-2 font-Nanum">HTML</p>
          </div>

          <div className="shadow-md rounded-md shadow-[#040c16] bg-[#F5FCCD] hover:scale-110 duration-500">
            <img className="w-[6rem] mx-auto" src={Css} alt="CSS icon" />
            <p className="my-2 font-Nanum" >CSS</p>
          </div>

          <div className="shadow-md rounded-md shadow-[#040c16] bg-[#F5FCCD] hover:scale-110 duration-500">
            <img
              className="w-[6rem] mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-2 font-Nanum">JavaScript</p>
          </div>

          <div className="shadow-md rounded-md shadow-[#040c16] bg-[#F5FCCD] hover:scale-110 duration-500">
            <img
              className="w-[6rem] mx-auto"
              src={Reactlogo}
              alt="React icon"
            />
            <p className="my-2 font-Nanum">React</p>
          </div>

          <div className="shadow-md rounded-md shadow-[#040c16] pt-[20px] bg-[#F5FCCD] hover:scale-110 duration-500">
            <img
              className="w-[4.5rem] mx-auto"
              src={Bootstrap}
              alt="Bootstrap icon"
            />
            <p className="my-2 font-Nanum">Bootstrap</p>
          </div>

          <div className="shadow-md rounded-md shadow-[#040c16] bg-[#F5FCCD] hover:scale-110 duration-500">
            <img
              className="w-[6rem] mx-auto"
              src={Tailwind}
              alt="Tailwind icon"
            />
            <p className="my-2 font-Nanum">Tailwind</p>
          </div>

          <div className="shadow-md rounded-md shadow-[#040c16] bg-[#F5FCCD] hover:scale-110 duration-500">
            <img className="w-[6rem] mx-auto" src={Nodejs} alt="Nodejs icon" />
            <p className="my-2 font-Nanum">Nodejs</p>
          </div>

          <div className="shadow-md rounded-md shadow-[#040c16] bg-[#F5FCCD] hover:scale-110 duration-500">
            <img
              className="w-[5rem] mx-auto pt-[5px]"
              src={Expressjs}
              alt="Expressjs icon"
            />
            <p className="my-2 font-Nanum">Express</p>
          </div>

          <div className="shadow-md rounded-md shadow-[#040c16] bg-[#F5FCCD] hover:scale-110 duration-500">
            <img
              className="w-[5.5rem] mx-auto pt-[5px]"
              src={Mongodb}
              alt="MongoDB icon"
            />
            <p className="my-2 font-Nanum">MongoDB</p>
          </div>

          <div className="shadow-md rounded-md shadow-[#040c16] bg-[#F5FCCD] hover:scale-110 duration-500">
            <img
              className="w-[5rem] mx-auto pt-[10px]"
              src={Git}
              alt="Git icon"
            />
            <p className="my-2 font-Nanum">Git</p>
          </div>

          <div className="shadow-md rounded-md shadow-[#040c16] bg-[#F5FCCD] hover:scale-110 duration-500">
            <img
              className="w-[5rem] mx-auto pt-[10px] "
              src={Figma}
              alt="Figma icon"
            />
            <p className="my-2 font-Nanum">Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;