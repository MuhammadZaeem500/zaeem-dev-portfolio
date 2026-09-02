import React from "react";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import SkillsSection from "@/components/Skills";
import ProjectsSection from "@/components/Projects";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";
import ExperienceTimeline from "@/components/Experience";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <About />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceTimeline />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
