import React from "react"
import Navbar from "./components/navbar"
import { Route,Routes } from "react-router"
import Home from "./components/home"
import Services from "./components/services"
import Pages from "./components/pages"
import Blog from "./components/blog"
import About from "./components/about"
import Contact from "./components/contact"




function  App() {
  

  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path ="/" element = {<Home/>}/>
          <Route path="/" element = {<About/>}/>
          <Route path ="/" element = {<Services/>}/>
          <Route path="/" element = {<Blog/>}/>
          <Route path="/" element = {<Pages/>}/>
          <Route path ="/" element = {<Contact/>}/>

        </Routes>
        </div>
    </>
  )
}

export default App