import React, { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { IoIosCloudyNight } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";

function Nav() {
  const [mode, setMode] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = scroll ? "bg-black shadow-md" : "bg-transparent";

  return (
    <div
      className={`w-screen h-[12vh] z-10 flex items-center justify-center fixed top-0 ${navBg}`}
    >
      <div className="w-[90%] flex items-center justify-between text-white relative">
        <div className="font-extrabold text-3xl md:px-10 px-3">
          <h1>
            Ashish <span className="text-[#786de6]">Gupta</span>.
          </h1>
        </div>

        <ul className="hidden md:flex items-center text-sm text-gray-500 gap-8">
          <li className="hover:text-[#786de6] cursor-pointer">Home</li>
          <li className="hover:text-[#786de6] cursor-pointer">About</li>
          <li className="hover:text-[#786de6] cursor-pointer">Service</li>
          <li className="hover:text-[#786de6] cursor-pointer">Projects</li>
          <li className="hover:text-[#786de6] cursor-pointer">Contact</li>
        </ul>
      </div>

      <button
        className="text-gray-400 relative left-2 px-5 md:text-3xl text-4xl hover:text-[#786de6] hidden md:flex items-center gap-2"
        onClick={() => setMode((prev) => !prev)}
      >
        {mode ? <MdLightMode /> : <IoIosCloudyNight />}
      </button>
      <button
        className="text-gray-400 relative left-2 px-5 md:text-3xl text-4xl md:hidden flex items-center gap-2"
        onClick={() => setMode((prev) => !prev)}
      >
        <RiMenu3Line />
      </button>
    </div>
  );
}

export default Nav;
