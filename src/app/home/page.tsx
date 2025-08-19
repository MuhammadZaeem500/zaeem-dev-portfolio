import React from 'react'
import HeroSection from "./_components/heroSection/heroSection";
import Navbar from "./_components/navbar/navbar";
import About from './_components/about/about';
import SkillsSection from './_components/skill/skill';
import ProjectsSection from './_components/project/project';
import ProjectDetails from '../home/_components/projectDetails/projectDetails';
import ContactSection from '../home/_components/contactSection/contactSection';
import Footer from '../home/_components/footer/footer';


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About/>
      <SkillsSection/>
      <ProjectsSection />
      <ProjectDetails />
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default HomePage
