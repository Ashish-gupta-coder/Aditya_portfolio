import React from "react";
import assets from "../assets/assets";
import { MdOutlineArrowRightAlt } from "react-icons/md";

function Service() {
  return (
    <div
      id="service"
      className="w-full lg:h-screen flex flex-col gap-10 px-4 py-10 overflow-hidden scroll-mt-20 overflow-x-hidden"
    >
      <div className="w-full flex flex-col items-center text-center text-white">
        <div className="max-w-3xl flex flex-col items-center justify-center">
          <h2
            className="text-sm font-medium uppercase tracking-wide"
            
            data-aos="fade-up" data-aos-delay="100"
          >
            What I Offer
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold" data-aos="fade-up" data-aos-delay="200">
            My <span className="text-[#13d3c4]">services</span>
          </h1>
          <p className="text-sm md:text-base text-gray-400 max-w-xl mt-6" data-aos="zoom-in" data-aos-delay="300">
            Full Stack Developer | React.js, Node.js & Tailwind CSS | Building
            scalable, responsive end-to-end web applications 🚀
          </p>
        </div>
      </div>
      <div
        className="md:flex hidden flex-wrap items-center justify-center w-full  gap-6 md:gap-10 mt-10"
        data-aos="fade-up"
      >
        {assets.services.map((item,index) => (
          <div
            key={index}
            className="w-[280px] h-[230px] rounded-2xl bg-gradient-to-br
            from-[#0b1220] to-[#050c16] border border-white/10
            text-white flex items-center justify-center transition-all
             duration-300 hover:-translate-y-2 hover:border-[#13d3c4]/40
             hover:shadow-[0_20px_40px_-15px_rgba(148,99,202,0.35)]"
          >
            <div className="w-[85%] flex flex-col gap-4">
              <div className="flex flex-col items-start gap-3">
                <span className="text-3xl text-[#13d3c4] bg-[#13d3c4]/10 p-3 rounded-xl">
                  <item.icon/>
                </span>
                <h1 className="font-semibold text-[15px] tracking-wide">
                  {item.heading}
                </h1>
              </div>
              <p className="text-[11px] leading-relaxed text-gray-400">
                {item.paragraph}
              </p>
              <button
                className="
            mt-2 w-fit flex items-center gap-1
            text-[11px] text-[#13d3c4]
            border border-[#13d3c4]/30
            px-4 py-1.5 rounded-full
            hover:bg-[#13d3c4] hover:text-white
            transition-all duration-300
          "
              >
                Read more
                <MdOutlineArrowRightAlt className="text-[15px]" />
              </button>
            </div>
          </div>
        ))}
      </div>
       <div className="md:w-[40%] md:hidden flex flex-col gap-6">
            {assets.about.descriptionBox.map((item) => (
              <div className="relative md:w-[420px] w-[300px] h-[150px] rounded-xl bg-gradient-to-br from-[#0b1220] to-[#050c16] border border-white/10  backdrop-blur-xl  text-white cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(120,109,230,0.25)]">
                <div className="absolute inset-0 rounded-xl bg-[#13d3c4]/10 blur-xl opacity-0 hover:opacity-100 transition" />
                <div className="relative z-10 flex flex-col justify-center gap-3 px-6 h-full">
                  <div className="flex items-center gap-4">
                    <span className="text-[28px] text-[#13d3c4]">
                      <item.icon/>
                    </span>
                    <p className="text-[18px] font-semibold">{item.heading}</p>
                  </div>
                  <p className="text-[13px] leading-relaxed text-[#c1c7d0]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
    </div>
  );
}

export default Service;
