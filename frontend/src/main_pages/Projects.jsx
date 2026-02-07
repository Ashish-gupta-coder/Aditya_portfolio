import React from "react";
import Project_card from "../components/Project_card";
import assets from "../assets/assets";


function Projects() {
  return (
    <section
      id="project"
      className="w-full min-h-screen text-white flex flex-col items-center px-4 scroll-mt-24"
    >
      {/* Heading */}
      <div className="max-w-4xl text-center flex flex-col gap-5 mb-16">
        <h1
          className="font-bold text-4xl md:text-5xl"
          data-aos="fade-up" data-aos-delay="100"
        >
          My latest <span className="text-[#786de6]">work</span>
        </h1>
        <p
          className="text-sm md:text-base text-gray-400 max-w-[700px] leading-relaxed tracking-wide"
         data-aos="fade-up" data-aos-delay="200"
        >
Some of my latest projects showcasing clean code, responsive design, and end-to-end solutions that combine design with functionality.        </p>
      </div>

      {/* Projects */}
      <div className="flex flex-col items-center gap-12 mb-10 relative w-full min-h-[300vh]" data-aos="zoom-in">
        {assets.projects.map((item,index) => (
          <Project_card
             key={index}
      index={index}
            className="snap-center"
            name={item.name}
            title={item.title}
            feature1={item.feature1}
            feature2={item.feature2}
            feature3={item.feature3}
            picture={item.picture}
            live={item.live}
            github={item.github}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
