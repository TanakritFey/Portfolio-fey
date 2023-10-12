import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import colmar from "../Img/colmar.png";
import countdown from "../Img/countdown.png";
import findhat from '../Img/Finyourhat.png'
import poke from '../Img/Pokemon.png'
import assessment from '../Img/ReactAsset.png'
import food from '../Img/food.png'
import movelife from '../Img/Movelife.png'

const Projects = () => {
  return (
    <div id="project"
      name="project"
      className="w-full bg-black h-auto  text-[#FFFFFF] bg-bodycolor"
    >
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 mx-auto">
          <p className="font-Bangers text-6xl font-bold inline border-b-4 text-white ">
            Projects
          </p>
        </div>

        {/* card 1 */}
        <div className="grid sm:grid-cols-3 md:grid-cols-fluid gap-4" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <div className="bg-[#fdffa1f6] shadow-lg shadow-[#040c16] rounded-md flex flex-col justify-center items-center mx-auto p-[1rem] hover:scale-110 duration-200">
            {/* Hover Effects */}
            <div className="w-[250px] h-[200px] lg:w-[300px] lg:h-[200px] overflow-hidden rounded-lg">
              <img
                src={movelife}  // img
                alt="burger-img"
                className=" w-full hover:translate-y-[-50%] hover:cursor-pointer delay-150 duration-[3000ms] ease-in-out"
              />
            </div>
            {/* Name Project and description */}
            <div className="flex flex-col items-center lg:mt-5">
              <p className="text-[#2b5a79] font-Nanum"> Move Life-Balance</p>
              <div>
                <p className="text-[#000000] font-Nanum">
                  Stack :
                  <span className="text-[#64B7B2] "> ReactJS,Tailwind,Nodejs,Express</span>
                </p>
                <p className="text-[#000000] font-Nanum">
                  Responsive :
                  <span className="text-[#64B7B2]"> Desktop , Mobile</span>
                </p>
              </div>
              {/* button */}
              <div className="flex gap-5 justify-center my-[1rem]">
                <a
                  href="https://github.com/Grop-project-8/PROJECT_MLB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ffffff] rounded-md px-[1.5rem] max-w-[7rem] h-[2.5rem] text-[#000000] flex items-center justify-center hover:bg-[#C987E9] hover:text-[#F8C78E]"
                >
                  <span className="px-1 font-Nanum flex gap-2">
                    CODE <AiFillGithub />
                  </span>
                </a>
                <a
                  href="https://github.com/Grop-project-8/PROJECT_MLB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ffffff] rounded-md px-[1.5rem] max-w-[7rem] h-[2.5rem] text-[#000000] flex items-center justify-center hover:bg-[#C987E9] hover:text-[#F8C78E]"
                >
                  <span className="px-2 font-Nanum flex gap-2">
                    LINK <FiExternalLink />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* card Burger */}
          <div className="bg-[#fdffa1f6] shadow-lg shadow-[#040c16] rounded-md flex flex-col justify-center items-center mx-auto p-[1rem] hover:scale-110 duration-200">
            {/* Hover Effects */}
            <div className="w-[250px] h-[200px] lg:w-[300px] lg:h-[200px] overflow-hidden rounded-lg">
              <img
                src={food}
                alt=""
                className=" w-full hover:translate-y-[-50%] hover:cursor-pointer delay-150 duration-[3000ms] ease-in-out"
              />
            </div>
            {/* Name Project and description */}
            <div className="flex flex-col items-center lg:mt-5">
              <p className="text-[#2b5a79]  font-Nanum">Burger</p>
              <div>
                <p className="text-[#000000] font-Nanum">
                  Stack :<span className="text-[#64B7B2]"> React , Tailwind</span>
                </p>
                <p className="text-[#000000] font-Nanum">
                  Responsive :
                  <span className="text-[#64B7B2]"> Desktop , Mobile</span>
                </p>
              </div>
              {/* button */}
              <div className="flex gap-5 justify-center my-[1rem]">
                <a
                  href="https://github.com/TanakritFey/FoodsDelivered"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ffffff] rounded-md px-[1.5rem] max-w-[7rem] h-[2.5rem] text-[#000000] flex items-center justify-center hover:bg-[#C987E9] hover:text-[#F8C78E]"
                >
                  <span className="px-1 font-Nanum flex gap-2">
                    CODE <AiFillGithub />
                  </span>
                </a>
                <a
                  href="https://foods-delivered.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ffffff] rounded-md px-[1.5rem] max-w-[7rem] h-[2.5rem] text-[#000000] flex items-center justify-center hover:bg-[#C987E9] hover:text-[#F8C78E]"
                >
                  <span className="px-2 font-Nanum flex gap-2">
                    LINK <FiExternalLink />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* card Assessment  */}
          <div className="bg-[#fdffa1f6] shadow-lg shadow-[#040c16] rounded-md flex flex-col justify-center items-center mx-auto p-[1rem] hover:scale-110 duration-200">
            {/* Hover Effects */}
            <div className="w-[250px] h-[200px] lg:w-[300px] lg:h-[200px] overflow-hidden rounded-lg">
              <img src={assessment} alt="" className="h-full" />
            </div>
            {/* Name Project and description */}
            <div className="flex flex-col items-center lg:mt-5">
              <p className="text-[#2b5a79]  font-Nanum">React Assessment</p>
              <div>
                <p className="text-[#000000] font-Nanum">
                  Stack :
                  <span className="text-[#64B7B2]"> ReactJS,CRUD,API</span>
                </p>
                <p className="text-[#000000] font-Nanum">
                  Responsive :<span className="text-[#64B7B2]"> Desktop</span>
                </p>
              </div>
              {/* button */}
              <div className="flex gap-5 justify-center my-[1rem]">
                <a
                  href="https://github.com/TanakritFey/React-Assessment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ffffff] rounded-md px-[1.5rem] max-w-[7rem] h-[2.5rem] text-[#000000] flex items-center justify-center hover:bg-[#C987E9] hover:text-[#F8C78E]"
                >
                  <span className="px-1 font-Nanum flex gap-2">
                    CODE <AiFillGithub />
                  </span>
                </a>
                <a
                  href="https://24-tanakrit-react-assessment.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ffffff] rounded-md px-[1.5rem] max-w-[7rem] h-[2.5rem] text-[#000000] flex items-center justify-center hover:bg-[#C987E9] hover:text-[#F8C78E]"
                >
                  <span className="px-2 font-Nanum flex gap-2">
                    LINK <FiExternalLink />
                  </span>
                </a>
              </div>
            </div>
          </div>

          

          {/* card Poke-API */}
          <div className="bg-[#fdffa1f6] shadow-lg shadow-[#040c16] rounded-md flex flex-col justify-center items-center mx-auto p-[1rem] hover:scale-110 duration-200">
            {/* Hover Effects */}
            <div className="w-[250px] h-[200px] lg:w-[300px] lg:h-[200px] overflow-hidden rounded-lg">
              <img
                src={poke}
                alt=""
                className=" w-full h-full hover:translate-y-[-50%] hover:cursor-pointer delay-150 duration-[3000ms] ease-in-out"
              />
            </div>
            {/* Name Project and description */}
            <div className="flex flex-col items-center lg:mt-5">
              <p className="text-[#2b5a79]  font-Nanum">Pokemon</p>
              <div>
                <p className="text-[#000000] font-Nanum">
                  Stack :<span className="text-[#64B7B2]"> React , Tailwind , Axios</span>
                </p>
                <p className="text-[#000000] font-Nanum">
                  Responsive :
                  <span className="text-[#64B7B2]"> Desktop , Mobile</span>
                </p>
              </div>
              {/* button */}
              <div className="flex gap-5 justify-center my-[1rem]">
                <a
                  href="https://github.com/TanakritFey/Pokemon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ffffff] rounded-md px-[1.5rem] max-w-[7rem] h-[2.5rem] text-[#000000] flex items-center justify-center hover:bg-[#C987E9] hover:text-[#F8C78E]"
                >
                  <span className="px-1 font-Nanum flex gap-2">
                    CODE <AiFillGithub />
                  </span>
                </a>
                <a
                  href="https://pokemon-api-ten-khaki.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ffffff] rounded-md px-[1.5rem] max-w-[7rem] h-[2.5rem] text-[#000000] flex items-center justify-center hover:bg-[#C987E9] hover:text-[#F8C78E]"
                >
                  <span className="px-2 font-Nanum flex gap-2">
                    LINK <FiExternalLink />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* card 4 */}
          <div className="bg-[#fdffa1f6] shadow-lg shadow-[#040c16] rounded-md flex flex-col justify-center items-center mx-auto p-[1rem] hover:scale-110 duration-200">
            {/* Hover Effects */}
            <div className="w-[250px] h-[200px] lg:w-[300px] lg:h-[200px] overflow-hidden rounded-lg">
              <img
                src={findhat}
                alt=""
                className=" w-full hover:translate-y-[-50%] hover:cursor-pointer delay-150 duration-[3000ms] ease-in-out"
              />
            </div>
            {/* Name Project and description */}
            <div className="flex flex-col items-center lg:mt-5">
              <p className="text-[#2b5a79]  font-Nanum">Find Your Hat</p>
              <div>
                <p className="text-[#000000] font-Nanum">
                  Stack :
                  <span className="text-[#64B7B2]"> JavaScript</span>
                </p>
                <p className="text-[#000000] font-Nanum">
                  Responsive :
                  <span className="text-[#64B7B2]"> Desktop , Mobile</span>
                </p>
              </div>
              {/* button */}
              <div className="flex gap-5 justify-center my-[1rem]">
                <a
                  href="https://replit.com/@RastaLife/24TanakritFeyefy-practice-find-your-hat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ffffff] rounded-md px-[1.5rem] max-w-[7rem] h-[2.5rem] text-[#000000] flex items-center justify-center hover:bg-[#C987E9] hover:text-[#F8C78E]"
                >
                  <span className="px-1 font-Nanum flex gap-2">
                    CODE <AiFillGithub />
                  </span>
                </a>
                <a
                  href="https://replit.com/@RastaLife/24TanakritFeyefy-practice-find-your-hat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ffffff] rounded-md px-[1.5rem] max-w-[7rem] h-[2.5rem] text-[#000000] flex items-center justify-center hover:bg-[#C987E9] hover:text-[#F8C78E]"
                >
                  <span className="px-2 font-Nanum flex gap-2">
                    LINK <FiExternalLink />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* card 5 COLMAR */}
          <div className="bg-[#fdffa1f6] shadow-lg shadow-[#040c16] rounded-md flex flex-col justify-center items-center mx-auto p-[1rem] hover:scale-110 duration-200">
            {/* Hover Effects */}
            <div className="w-[250px] h-[200px] lg:w-[300px] lg:h-[200px] overflow-hidden rounded-lg">
              <img
                src={colmar}
                alt=""
                className=" w-full hover:translate-y-[-50%] hover:cursor-pointer delay-150 duration-[3000ms] ease-in-out"
              />
            </div>
            {/* Name Project and description */}
            <div className="flex flex-col items-center lg:mt-5">
              <p className="text-[#2b5a79]  font-Nanum">Colmar Website</p>
              <div>
                <p className="text-[#000000] font-Nanum">
                  Stack :
                  <span className="text-[#64B7B2]"> Html , CSS </span>
                </p>
                <p className="text-[#000000] font-Nanum">
                  Responsive :
                  <span className="text-[#64B7B2]"> Desktop , Mobile</span>
                </p>
              </div>
              {/* button */}
              <div className="flex gap-5 justify-center my-[1rem]">
                <a
                  href="https://github.com/TanakritFey/Colmar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ffffff] rounded-md px-[1.5rem] max-w-[7rem] h-[2.5rem] text-[#000000] flex items-center justify-center hover:bg-[#C987E9] hover:text-[#F8C78E]"
                >
                  <span className="px-1 font-Nanum flex gap-2">
                    CODE <AiFillGithub />
                  </span>
                </a>
                <a
                  href="https://colmar-shid.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ffffff] rounded-md px-[1.5rem] max-w-[7rem] h-[2.5rem] text-[#000000] flex items-center justify-center hover:bg-[#C987E9] hover:text-[#F8C78E]"
                >
                  <span className="px-2 font-Nanum flex gap-2">
                    LINK <FiExternalLink />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* card Count Down */}
          <div className="bg-[#fdffa1f6] shadow-lg shadow-[#040c16] rounded-md flex flex-col justify-center items-center mx-auto p-[1rem] hover:scale-110 duration-200">
            {/* Hover Effects */}
            <div className="w-[250px] h-[200px] lg:w-[300px] lg:h-[200px] overflow-hidden rounded-lg">
              <img src={countdown} alt="" className="h-full" />
            </div>
            {/* Name Project and description */}
            <div className="flex flex-col items-center lg:mt-5">
              <p className="text-[#2b5a79]  font-Nanum">Countdown to 2024</p>
              <div>
                <p className="text-[#000000] font-Nanum">
                  Stack :
                  <span className="text-[#64B7B2]"> JavaScript , HTML , CSS</span>
                </p>
                <p className="text-[#000000] font-Nanum">
                  Responsive :<span className="text-[#64B7B2]"> Desktop</span>
                </p>
              </div>
              {/* button */}
              <div className="flex gap-5 justify-center my-[1rem]">
                <a
                  href="https://github.com/TanakritFey/CountDownToNewYear"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ffffff] rounded-md px-[1.5rem] max-w-[7rem] h-[2.5rem] text-[#000000] flex items-center justify-center hover:bg-[#C987E9] hover:text-[#F8C78E]"
                >
                  <span className="px-1 font-Nanum flex gap-2">
                    CODE <AiFillGithub />
                  </span>
                </a>
                <a
                  href="https://count-down-to-new-year.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ffffff] rounded-md px-[1.5rem] max-w-[7rem] h-[2.5rem] text-[#000000] flex items-center justify-center hover:bg-[#C987E9] hover:text-[#F8C78E]"
                >
                  <span className="px-2 font-Nanum flex gap-2">
                    LINK <FiExternalLink />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;