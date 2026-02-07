import React, { useEffect, useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
function Nav() {
  const [scroll, setScroll] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavClick = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  setShow(false); // 👈 close mobile menu
};


  const navBg = scroll ? "bg-black shadow-md" : "bg-transparent";
  
  return (
    <div
      className={`w-screen h-[14vh] z-10 flex items-center justify-center fixed top-0 ${navBg}`}
    >
      <div className="w-[90%] flex items-center justify-between text-white relative">
        <div className="font-extrabold text-3xl px-3" data-aos="zoom-in">
          <h1>
            Ashish <span className="text-[#786de6]">Gupta</span>.
          </h1>
        </div>

        <ul className="hidden md:flex items-center text-sm text-gray-500 gap-8" data-aos="zoom-in">
          <li className="hover:text-[#786de6] cursor-pointer"> <a href="#home">Home</a></li>
          <li className="hover:text-[#786de6] cursor-pointer"> <a href="#about">About</a></li>
          <li className="hover:text-[#786de6] cursor-pointer"> <a href="#service">Service</a></li>
          <li className="hover:text-[#786de6] cursor-pointer"> <a href="#project">Projects</a> </li>
          <li className="hover:text-[#786de6] cursor-pointer"> <a href="#contact">Contact</a> </li>
        </ul>
      </div>

      <button data-aos="zoom-in"
        className="text-gray-400 relative left-2 px-5 md:text-3xl text-4xl md:hidden flex items-center gap-2"
        onClick={() => setShow((prev) => !prev)}
      >
        <RiMenu3Line />
      </button>
      {show && 
     <div className="fixed top-0 right-0 w-[80vw] h-screen bg-black z-50 flex items-center justify-center" data-aos="fade-left" data-aos-duration="400">
      <div className="w-14 h-14 absolute top-5 right-5 md:hidden flex items-center justify-center rounded-md z-10">
         <button
                className="text-white md:text-3xl text-4xl hover:text-[#786de6] flex items-center gap-2 cursor-pointer"
                onClick={() => setShow((prev) => !prev)}
              >
<IoIosClose />         </button>
         
      </div>
      <ul className="md:hidden flex flex-col items-center text-xl text-gray-500 gap-8">
          <li className="hover:text-[#786de6] cursor-pointer" data-aos="fade-left" data-aos-duration="400" data-aos-delay="100" onClick={() => handleNavClick("home")}>Home</li>
          <li className="hover:text-[#786de6] cursor-pointer" data-aos="fade-left" data-aos-duration="400" data-aos-delay="200" onClick={() => handleNavClick("about")}>About</li>
          <li className="hover:text-[#786de6] cursor-pointer" data-aos="fade-left" data-aos-duration="400" data-aos-delay="300" onClick={() => handleNavClick("service")}>Service</li>
          <li className="hover:text-[#786de6] cursor-pointer" data-aos="fade-left" data-aos-duration="400" data-aos-delay="400" onClick={() => handleNavClick("project")}>Projects</li>
          <li className="hover:text-[#786de6] cursor-pointer" data-aos="fade-left" data-aos-duration="400" data-aos-delay="500" onClick={() => handleNavClick("contact")}>Contact</li>
        </ul>
     </div>}

    </div>
  );
}

export default Nav;
