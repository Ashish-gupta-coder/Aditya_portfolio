import {FaHtml5,FaCss3Alt,FaReact,FaNodeJs,FaGithub,FaDocker,FaAws,} from "react-icons/fa";
import {SiJavascript,SiTailwindcss,SiNextdotjs,SiMongodb,SiVercel,SiNotion,SiSlack,} from "react-icons/si";
import { GrHtml5 } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { ImEmbed2 } from "react-icons/im";
import { GiPencilBrush } from "react-icons/gi";
import { FaAppStore } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import ProfilePic from "../assets/Image.jpg";
import thumblify from "../assets/Thumbnailify.png";
import quickstay from "../assets/Quickstay.png";
import Greencart from "../assets/Greencart.png";
import Portfolio from "../assets/Portfolio.png";
import { SiNginxproxymanager } from "react-icons/si";
const assets = {
  hero: {
    image: ProfilePic,
    title: "Hi, I'm Ashish",
    subtitle: "Full Stack Developer | MERN Stack",
  },  
  about: {
    descriptionBox: [
      {
        icon: ImEmbed2,
        heading: "Web Development",
        text: "Proficient in developing responsive, user-friendly web applications using MongoDB, Express, React, and Node.js.",
      },
      {
        icon:GiPencilBrush,
        heading: "UI/UX Design",
        text: "Creating visually appealing and highly functional designs that enhance user interaction.",
      },
      {
        icon:SiNginxproxymanager,
        heading: "Project Management",
        text: "Leading projects from planning to execution with a focus on delivering high-quality outcomes on time.",
      },
    ],
  },
  skills: [
    { icon: GrHtml5, name: "HTML5" },
    { icon: FaCss3Alt, name: "CSS3" },
    { icon: IoLogoNodejs, name: "JavaScript" },
    { icon: FaReact, name: "React.js" },
    { icon: SiTailwindcss, name: "Tailwind CSS" },
    { icon: FaReact, name: "React Native" },
    { icon: IoLogoNodejs, name: "Node.js" },
    { icon: SiExpress, name: "Express.js" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: DiVisualstudio, name: "VS Code" },
    { icon: FaGithub, name: "Git & GitHub" },
    { icon: SiVercel, name: "Vercel" },
  ],
 services: [
  {
    icon: ImEmbed2,
    heading: "Web Development",
    paragraph:
      "Building responsive, scalable web apps with React.js, Node.js & Tailwind CSS — clean and high-performance solutions...",
  },
  {
    icon: GiPencilBrush,
    heading: "UI/UX Design",
    paragraph:
      "Designing intuitive, user-friendly interfaces — smooth, engaging, and accessible experiences...",
  },
  {
    icon: FaAppStore,
    heading: "App Development",
    paragraph:
      "Creating fast, responsive mobile apps with React Native — seamless experiences across devices...",
  },
],
  projects: [
    {
      picture: thumblify,
      title: "Thumblify",
      name:"Thumbnail generating using AI",
      feature1:"Create a thumbnail generator using AI",
      feature2:"Implement user authentication (signup & login)",
      feature3:"Save generated thumbnails to the database",
      live: "https://my-portfolio-ashish.netlify.app/",
      github: "https://github.com/yourusername/portfolio",
    },
    {
      picture: quickstay,
      title: "QuickStay",
      name:"Hotel Booking Website",
      feature1:"Hotel booking system where users can book hotel rooms...",
      feature2:"Admin can also add new hotel rooms on this website and manage dashboard...",
      feature3:"Login & registration feature like jwt, password hashing, and secure APIs. ",
      live: "https://my-portfolio-ashish.netlify.app/",
      github: "https://github.com/yourusername/portfolio",
    },
    {
      picture: Greencart,
      title: "Greencart",
      name:"Grocery Store Web App",
      feature1:"User Authentication & Authorization",
      feature2:"Product Search & Filtering",
      feature3:"Implemented add-to-cart functionality with quantity control.",
      live: "https://my-portfolio-ashish.netlify.app/",
      github: "https://github.com/yourusername/portfolio",
    },
    {
      picture: Portfolio,
      title: "Portfolio",
      name:"Portfolio website that express my self",
      feature1:"Responsive layout with dark/light mode toggle",
      feature2:"Contact form integrated with email service",
      feature3:"Resume upload & download functionality",
      live: "https://my-portfolio-ashish.netlify.app/",
      github: "https://github.com/yourusername/portfolio",
    },
    
  ],
  tools: [
    { icon: SiNotion, name: "Notion" },
    { icon: SiSlack, name: "Slack" },
    { icon: SiVercel, name: "Vercel" },
  ],
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "mailto:your@email.com",
  },
};

export default assets;
