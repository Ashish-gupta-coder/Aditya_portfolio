import React from 'react'
import Nav from './components/Nav'
import Splash_screen from './components/Splash_screen'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState, lazy, Suspense } from "react";
function App() {
  const [introDone,setIntroDone] = React.useState(false);
  const Background = lazy(() => import("./Animated_components/Background"));
const Home = lazy(() => import("./main_pages/Home"));
const About = lazy(() => import("./main_pages/About"));
const Service = lazy(() => import("./main_pages/Service"));
const Projects = lazy(() => import("./main_pages/Projects"));
const Contact = lazy(() => import("./main_pages/Contact"));

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-out-cubic",
      
    });
  }, []);
  useEffect(() => {
  if (introDone) {
    AOS.refresh();
  }
}, [introDone]);
  return (
    <>
    {!introDone && <Splash_screen onFinish={() =>setIntroDone(true)}/>}
      {introDone && (
        <div>
           <Nav />
      <Suspense fallback={null}>
            <Background />
          </Suspense>
     
      <Suspense fallback={<div style={{ height: "100vh" }} />}>
            <Home />
            <About />
            <Service />
            <Projects />
            <Contact />
          </Suspense>
      </div>
      )}
      
    </>
  )
}

export default App