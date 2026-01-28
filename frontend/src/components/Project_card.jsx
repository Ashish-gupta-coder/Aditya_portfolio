import React from "react";
import { ImArrowUpRight2 } from "react-icons/im";
import { PiArrowUpRight } from "react-icons/pi";
function Project_card({picture,title,name,feature1,feature2,feature3,live,github,index}) {
  return (
   <div
  className="w-[1000px] h-[500px] text-white 
             flex items-center justify-center rounded-md 
             sticky" 
  style={{
    top: `calc(64px + ${index * 50}px)`
  }}
>

    <div className="h-full w-full flex items-center justify-center">
      <div className="max-w-6xl w-full bg-gradient-to-br from-[#0f1b2d] to-[#0b1220] border border-white/10 rounded-2xl p-10 grid md:grid-cols-2 gap-10 shadow-xl">
        {/* Left Content */}
        <div className="flex flex-col justify-center gap-6 text-white">
          <span className="text-sm tracking-widest text-[#786de6]">{title}</span>
          <h1 className="text-4xl md:text-4xl font-semibold leading-tight">
{name}          </h1>

          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-3 text-gray-400">
              <span className="w-5 h-5 rounded-full border border-[#786de6] flex items-center justify-center text-xs text-white">✓</span>
              {feature1}
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <span className="w-5 h-5 rounded-full border border-[#786de6] flex items-center justify-center text-xs text-white">✓</span>
             {feature2}
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <span className="w-5 h-5 rounded-full border border-[#786de6] flex items-center justify-center text-xs text-white">✓</span>
              {feature3}
            </li>
          </ul>
<a href={live}>
          <button className="mt-4 w-fit flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium  transition bg-[#786de6] text-white">
            Visit Live Site <span><PiArrowUpRight/></span>
          </button>
          </a>
        </div>

        {/* Right Preview */}
        <div className="relative rounded-xl overflow-hidden group">
  <img
    src={picture}
    alt="SaaS Preview"
    className="w-full h-full object-cover"
  />

  {/* Overlay */}
  <a href={github}>
  <div className="absolute inset-0 bg-black/60 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex items-center justify-center">
    {/* Icon */}
    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white text-3xl">
      <ImArrowUpRight2 />
    </div>
  </div>
  </a>
</div>

      </div>
    </div>
    </div>
  );
}

export default Project_card;