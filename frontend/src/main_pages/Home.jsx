import { FaLongArrowAltRight } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { IoIosCloudyNight } from "react-icons/io";
import { HiOutlineDownload } from "react-icons/hi";
import Resume from "../assets/Ashish_gupta.pdf";
import assets from "../assets/assets";
import { useState } from "react";


function Home() {
  
  return (
    <section
      id="home"
      className="w-screen h-screen flex items-center justify-center text-white mt-24 scroll-mt-24 overflow-x-hidden"
    >
      <div className="w-[80%] flex flex-col items-center gap-5 text-center">
        
        {/* Profile */}
        <div className="flex flex-col items-center gap-2">
          <img
            src={assets.hero.image}
            alt="Ashish Gupta"
            className="w-[120px] h-[120px] rounded-full object-cover" data-aos="zoom-in"
          />
          
          <p data-aos="zoom-in">Hi! I'm Ashish Gupta 👋</p>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4" data-aos="zoom-in">
          <h1 className="text-5xl font-bold">
            MERN stack web <span className="text-[#786de6]">developer</span>
          </h1>
          <p className="text-xs font-medium text-gray-400 leading-6">
            Turning ideas into high-quality web applications with MERN technologies. Focused on clean code,<br /> performance, and seamless user experiences.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-5 font-medium">
          <a href="#contact" data-aos="zoom-in" data-aos-offset="0">
            <button className="w-[130px] h-[35px] bg-[#7564e6] rounded-2xl text-xs flex items-center justify-center gap-1">
              Connect with me <FaLongArrowAltRight />
            </button>
          </a>

          <a href={Resume} download data-aos="zoom-in" data-aos-offset="0">
            <button className="w-[130px] h-[35px] border border-[#616974] rounded-2xl text-xs flex items-center justify-center gap-1 text-[#e6e9ed]">
              My Resume <HiOutlineDownload />
            </button>
          </a>
        </div>

      </div>
      
    </section>
  );
}

export default Home;
