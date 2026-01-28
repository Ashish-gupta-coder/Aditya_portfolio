import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import About from './main_pages/About'
import Home from './main_pages/Home'
import Projects from './main_pages/Projects'
import Contact from './main_pages/Contact'
import Background from './Animated_components/Background'
import Service from './main_pages/Service'

function App() {
  return (
    <>
   <Background/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<>
      <Nav/>
      <Home/>
      <About/>
      <Service/>
      <Projects/>
      <Contact/>
      </>}/>
    </Routes>
    </BrowserRouter>
     </>
  )
}

export default App