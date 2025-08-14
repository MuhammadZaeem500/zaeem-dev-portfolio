import React from 'react'
import HeroSection from "./_components/heroSection/heroSection";
import Navbar from "./_components/navbar/navbar";
import AboutMe from './_components/aboutMe/aboutMe';


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutMe />
    </div>
  )
}

export default HomePage
