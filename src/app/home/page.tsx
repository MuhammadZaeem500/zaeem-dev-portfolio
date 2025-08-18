import React from 'react'
import HeroSection from "./_components/heroSection/heroSection";
import Navbar from "../navbar/navbar";
import AboutMe from '../aboutMe/page';
import SkillsSection from '../skillSection/skillSection';
import ProjectsSection from '../projectSection/projectSection';
import ProjectDetails from '../projectDetails/projectDetails';
import ContactSection from '../contactSection/contactSection';
import Footer from '../footer/footer';


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutMe/>
      <SkillsSection/>
      <ProjectsSection />
      <ProjectDetails />
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default HomePage
