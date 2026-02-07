import React from "react";
import assets from "../assets/assets";

function About() {
  return (
    <section
      id="about"
      className="relative w-screen min-h-screen flex justify-center text-white scroll-mt-24  md:py-20 overflow-x-hidden"
    >
      <div className="relative w-[90%] max-w-7xl flex flex-col items-center gap-6">
        <p data-aos="fade-up" data-aos-delay="100" className="font-medium text-gray-400">Introduction</p>
        <h1 className="text-5xl font-semibold" data-aos="fade-up" data-aos-delay="200">
          About <span className="text-[#786de6]">me</span>
        </h1>
        <div className="w-full flex flex-col md:flex-row-reverse gap-16 md:mt-20 mt-10 items-start">
          <div className="md:w-[60%] flex flex-col gap-6">
            <h2 className="text-2xl font-semibold" data-aos="fade-left">
              MERN Stack Developer & Problem Solver
            </h2>
            <p className="text-sm text-[#c1c7d0] leading-7" data-aos="zoom-in-left"  data-aos-offset="0">
              MERN stack developer focused on building scalable, responsive, and
              high-performance web applications. Skilled in MongoDB, Express.js,
              React.js, and Node.js, delivering solutions, and taking on
              challenging projects that drive real results.
            </p>
            <p className="text-sm text-[#c1c7d0] leading-7" data-aos="zoom-in-left" data-aos-offset="0">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>
            <div className="mt-2">
              <h3 className="text-3xl font-semibold mb-8" data-aos="fade-left">
                Tools & <span className="text-[#786de6]">Technologies</span>
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {assets.skills.map((item) => (
                  <div
                    className="py-4 md:px-8 px-8 rounded-3xl md:rounded-full flex md:flex-row flex-col justify-center items-center gap-2
                    backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:scale-105 transition-transform duration-300"
                    data-aos="zoom-in-up"
                    data-aos-offset="0"
                  >
                    
                      <span className="text-2xl">
  <item.icon />
</span>
                
                    <span className="text-sm font-medium hidden md:flex">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:w-[40%] hidden md:flex flex-col gap-6">
            {assets.about.descriptionBox.map((item) => (
              <div data-aos="fade-right" className="relative md:w-[420px] w-[300px] h-[150px] rounded-xl bg-gradient-to-br from-[#0b1220] to-[#050c16] border border-white/10  backdrop-blur-xl  text-white cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(120,109,230,0.25)]">
                <div className="absolute inset-0 rounded-xl bg-[#786de6]/10 blur-xl opacity-0 hover:opacity-100 transition" />
                <div className="relative z-10 flex flex-col justify-center gap-3 px-6 h-full">
                  <div className="flex items-center gap-4">
                    <span className="text-[28px] text-[#786de6]">
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
      </div>
    </section>
  );
}

export default About;
