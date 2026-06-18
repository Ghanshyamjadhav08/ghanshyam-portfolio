import React from 'react'
import { Routes,Route } from 'react-router-dom';

import Layout from '../components/Layout';

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Experience from '../components/Experience';
import Contact from '../components/Contact';

function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route  index element={<Home/>}/>
        <Route path="projects" element={<Projects/>} />
         <Route path="experience" element={<Experience/>} />
         <Route path="contact" element={<Contact/>}/>
        </Route>
      </Routes>
  )
}

export default AppRoutes