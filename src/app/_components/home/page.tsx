import React from 'react'
import HeroSection from "./_components/heroSection/heroSection";
import Navbar from "./_components/navbar/navbar";
import AboutMe from './_components/aboutMe/aboutMe';
import SkillsSection from './skillSection/skillSection';
import ProjectsSection from './projectSection/projectSection';
import ProjectDetails from './projectDetails/projectDetails';
import ContactSection from './_components/contactSection/contactSection';
import Footer from './_components/footer/footer';


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <SkillsSection/>
      <ProjectsSection />
      <ProjectDetails />
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default HomePage
