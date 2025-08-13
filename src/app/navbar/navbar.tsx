"use client"
import React from "react";
import { motion } from "framer-motion";
// import { FaReact, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="font-sans bg-gray-900 text-white scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">Muhammad Zaeem</h1>
          <div className="space-x-6">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((section) => (
              <a key={section} href={`#${section.toLowerCase()}`} className="hover:text-blue-400">
                {section}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="about" className="h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.h2 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl font-bold">
          Hi, I’m Muhammad Zaeem
        </motion.h2>
        <p className="mt-4 text-lg max-w-xl">
          Aspiring Web Developer skilled in React, Next.js, Tailwind CSS, and MUI, building modern and responsive web applications.
        </p>
        <a href="#projects" className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg">View My Work</a>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {['React', 'Next.js', 'MUI', 'Tailwind CSS', 'SQL', 'Postman'].map((skill) => (
            <motion.div whileHover={{ scale: 1.1 }} key={skill} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p>{skill}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-gray-800 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[{
            name: 'Darat Booking Engine',
            tech: 'React JS, Nest JS, PostgreSQL, MUI',
            desc: 'Platform for booking doctor appointments and purchasing medications.'
          }, {
            name: 'Horizon',
            tech: 'Next JS, Tailwind CSS',
            desc: 'Immigration platform showcasing residency solutions in Saudi Arabia.'
          }, {
            name: 'Map Animation',
            tech: 'Next JS, Tailwind CSS',
            desc: 'Flight schedule and tracking system with real-time updates.'
          }, {
            name: 'TDC HRM',
            tech: 'React JS, MUI, Redux Toolkit, Nest JS, PostgreSQL',
            desc: 'HR management system for employee tracking and operations.'
          }].map((project) => (
            <motion.div whileHover={{ scale: 1.05 }} key={project.name} className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-sm text-gray-300 mb-2">{project.tech}</p>
              <p>{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold">Intern | The Dev Corporate</h3>
          <p className="text-gray-300 mt-2">Nov 2024 – May 2025</p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Built responsive web pages and UI components using React.</li>
            <li>Collaborated with team to fix bugs and integrate APIs.</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-800 text-center px-4">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <div className="flex justify-center space-x-6 text-2xl">
          {/* <a href="mailto:zaeemsheikh102@gmail.com" className="hover:text-blue-400"><FaEnvelope /></a>
          <a href="https://github.com/MuhammadZaeem500" className="hover:text-blue-400"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/muhammad-zaeem-sheikh-a38215202/" className="hover:text-blue-400"><FaLinkedin /></a> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Muhammad Zaeem Sheikh. All rights reserved.
      </footer>
    </div>
  );
}
