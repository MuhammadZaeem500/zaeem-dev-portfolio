import React from "react";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import SkillsSection from "@/components/Skill";
import ProjectsSection from "@/components/Project";
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
