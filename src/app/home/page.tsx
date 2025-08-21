import React from 'react'
import HeroSection from "./_components/heroSection/heroSection";
import Navbar from "./_components/navbar/navbar";
import About from './_components/about/about';
import SkillsSection from './_components/skill/skill';
import ProjectsSection from './_components/project/project';
import ContactSection from './_components/contact/contact';
import Footer from '../home/_components/footer/footer';
import ExperienceTimeline from './_components/experience/experience';


const HomePage = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <HeroSection />
      <About/>
      <SkillsSection/>
      <ProjectsSection />
      <ExperienceTimeline />
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default HomePage
