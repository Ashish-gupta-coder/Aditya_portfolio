import React from "react";
import { MdOutgoingMail } from "react-icons/md";

function Contact() {
  return (
    <div id="contact" className="w-full min-h-screen text-white flex flex-col items-center overflow-hidden scroll-mt-24">
      {/* Header */}
      <div className="w-full text-center flex flex-col gap-5 items-center justify-center ">
        <h1 className="font-bold text-4xl md:text-5xl" data-aos="fade-up" data-aos-delay="100">
          Get in <span className="text-[#786de6]">touch</span>
        </h1>
        <p className="text-sm md:text-[13px] text-gray-400 leading-6" data-aos="fade-up" data-aos-delay="200">
          Let’s turn your ideas into a reliable digital product.
Built with scalability, performance, and security in mind. <br />
Available for freelance projects and professional collaborations.
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-[90%] md:w-[40%] mt-10" data-aos="zoom-in">
  <form
    action="https://formspree.io/f/mwplrnnb"
    method="POST"
    className="
      max-w-2xl mx-auto
      p-8 md:p-10
      rounded-md
      bg-[#080f1b]
      border border-white/10
      shadow-[0_20px_50px_rgba(0,0,0,0.6)]
    "
  >
    {/* Name */}
    <input
      name="Username"
      type="text"
      placeholder="Your Name"
      required
      className="
        w-full mb-5 p-4
        rounded-xl
        bg-black/30
        text-white placeholder-[#657583]
        outline-none
        border border-white/10
        focus:border-[#786de6]
        transition
      "
    />

    {/* Email */}
    <input
      name="Email"
      type="email"
      placeholder="Your Email"
      required
      className="
        w-full mb-5 p-4
        rounded-xl
        bg-black/30
        text-white placeholder-[#657583]
        outline-none
        border border-white/10
        focus:border-[#786de6]
        transition
      "
    />

    {/* Message */}
    <textarea
      name="message"
      rows="6"
      placeholder="Your Message"
      required
      className="
        w-full mb-8 p-4
        rounded-xl
        bg-black/30
        text-white placeholder-[#657583]
        outline-none
        border border-white/10
        focus:border-[#786de6]
        resize-none
        transition
      "
    />

    {/* Button */}
    <button
      type="submit"
      className="
        w-full py-2
        rounded-xl
        bg-[#786de6]
        text-white font-semibold
        hover:bg-transparent hover:text-[#786de6]
        border border-[#786de6]
        transition-all duration-300
      "
    >
      Send Message
    </button>
  </form>
</div>


      {/* Footer */}
      <div className="w-[80%] text-center flex flex-col gap-5 items-center justify-center mt-10" >
        <h1 className="font-bold text-4xl md:text-5xl" data-aos="zoom-in">
          Ashish Gupta<span className="text-[#786de6]">.</span>
        </h1>
        <p className="text-sm md:text-base text-gray-400 flex items-center justify-center gap-1"
        data-aos="zoom-in-up"
        >
        <MdOutgoingMail className="text-2xl text-[#786de6]" />
          coder3174@gmail.com
        </p>
        <hr className="w-full border-[#616974] my-4" data-aos="zoom-in-up" data-aos-offset="0"/>
        <div className="flex flex-col md:flex-row items-center justify-between w-full text-sm gap-4 mb-5" data-aos="zoom-in-up" data-aos-offset="0">
          <p>© 2025 Ashish Gupta. All rights reserved.</p>
          <ul className=" flex items-center justify-center gap-2 md:hidden">
            <li>Github</li>
            <li>Linkedin</li>
            <li>Tweeter</li>
          </ul>
          <ul className="justify-center gap-8 hidden md:flex">
            <li className="hover:underline cursor-pointer">Terms of Services</li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Connect with me</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;