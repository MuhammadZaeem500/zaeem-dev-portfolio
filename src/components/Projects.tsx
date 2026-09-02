"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectDetails from "./ProjectDetails";
import { Project } from "@/types";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Wolves Art",
      description:
        "Wolves Art is a modern creative agency website built using Next.js, MUI, and Framer Motion. It showcases a wide range of design services, including Web Design, UI/UX Design, Print, Illustration, Motion Design, and Interactive Design. The website features a clean and responsive layout with smooth animations, making it easy for visitors to explore services and projects. Wolves Art combines creativity, functionality, and an engaging user experience to present professional design work in a visually appealing way.",
      tech: ["Next.js", "Framer Motion", "MUI", "React Hooks", "TypeScript"],
      image: "/Images/WolvesArt-2.jpg",
      details: "true",
    },
    {
      id: 2,
      title: "Lit Collective",
      description:
        "Lit Collective is a modern web application built with React.js and MUI (Material-UI). The website delivers a clean, responsive, and professional design that highlights creative content in a simple and user-friendly way. MUI was used for building consistent UI components and applying custom themes. The project was deployed on Vercel, ensuring fast performance and global accessibility.",
      tech: ["React.js", "MUI", "TypeScript", "CSS-in-js"],
      image: "/Images/LitCollective.jpg",
      details: "true",
    },
    {
      id: 3,
      title: "Ethan Suero",
      description:
        "Ethan Suero is a web application built with React.js and MUI that delivers a sleek and responsive user interface. The project makes use of Material-UI’s theming and grid system to ensure a consistent design across devices. Structured with reusable components, the site is easy to maintain and extend. Deployed on Vercel, it benefits from fast loading speeds and reliable global hosting.",
      tech: ["React.js", "MUI", "TypeScript", "CSS-in-js"],
      image: "/Images/EthanSuero.png",
      details: "true",
    },
    {
      id: 4,
      title: "Horizon",
      description:
        "Horizon is a multi-page web application built with Next.js and Tailwind CSS that provides detailed information about the Saudi passport. It shows which countries require a visa to enter Saudi Arabia and offers guidance on obtaining Saudi citizenship. The project uses reusable React components for a consistent UI, utility files to manage structured data, and React Hooks (useState, useEffect, useMemo, useRef) to handle dynamic content and optimize performance. React Icons and Framer Motion enhance the visuals, Next.js Image ensures optimized loading, and Tailwind CSS provides a responsive layout. The project is deployed on Vercel for fast and globally accessible performance.",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "React Hooks",
        "Framer Motion",
        "Utils",
      ],
      image: "/Images/Horizon.jpg",
      details: "true",
    },
    {
      id: 5,
      title: "Dr Wafa Clinics App/Booking Engine",
      description:
        "Dr Wafa Clinics App/Booking Engine is a scalable hospital management system designed to streamline healthcare operations. Built with Nestjs and PostgreSQL,  it manages appointments, pharmacy e-commerce, billing, and procurement. The system features conflict-free scheduling, automated insurance billing, and real-time stock tracking. A React Native mobile app ensures real-time updates, offline support, and role-based dashboards for doctors, patients, and admins. Deployed with Docker and Vercel, the solution guarantees high availability, seamless scaling, and secure data handling.",
      tech: [
        "Next.js",
        "Nestjs",
        "PostgreSQL",
        "React Native",
        "MUI",
        "Docker",
      ],
      image: "/Images/WafaClinic.jpg",
      details: "true",
    },
    {
      id: 6,
      title: "HRM",
      description:
        "HRM is a comprehensive office management application built with React.js and MUI, designed to streamline tasks such as attendance tracking, leave applications, project management, payroll processing, and other administrative operations. The platform uses Redux for state management to ensure a consistent and responsive user experience. Authentication and role-based access control secure sensitive employee and payroll data. The backend is built with NestJS, PostgreSQL, and Prisma for scalable, efficient, and reliable data handling. Deployed on Vercel, it provides fast performance and reliable access for office staff.",
      tech: [
        "React.js",
        "MUI",
        "Redux",
        "NestJS",
        "PostgreSQL",
        "Prisma",
        "TypeScript",
        "JavaScript",
        "Vercel",
      ],
      image: "/Images/TDC.png",
      details: "true",
    },
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="bg-gray-900 text-white py-16 px-6" id="projects">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1 border border-gray-600 rounded-full text-sm">
          My Projects
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Featured Work & Case Studies
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-2">
          Explore a selection of my recent projects showcasing my expertise in
          full stack development.
        </p>
      </div>

      <div className="space-y-28 max-w-6xl mx-auto">
        {projects.map((proj, idx) => {
          const isRightImage = idx % 2 === 0;

          return (
            <div
              key={proj.title}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                !isRightImage ? "lg:flex-row-reverse" : ""
              }`}
            >
              <motion.div
                className="relative w-full lg:w-2/3 rounded-xl overflow-visible"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
              >
                <Image
                  src={proj.image}
                  alt={proj.title}
                  width={600}
                  height={400}
                  className="object-cover rounded-xl w-full h-auto"
                />

                <motion.div
                  className={`absolute left-6/11 md:left-6/9 transform -translate-x-1/2 -bottom-8 md:-bottom-6 flex flex-wrap gap-2 bg-white/10 p-2 rounded-lg backdrop-blur-sm justify-center md:justify-start w-[100%] md:w-[70%] lg:w-[75%]`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: false }}
                >
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] sm:text-[11px] md:text-xs bg-[#1a1a1a]/70 border border-gray-700 rounded-full px-2 py-1 whitespace-nowrap"
                    >
                      {t}
                    </span>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                className="w-full lg:w-1/2 mt-6 md:mt-0"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: false }}
              >
                <h3 className="text-base md:text-xl font-semibold">
                  {proj.title}
                </h3>
                <p className="text-gray-400 mt-3 text-xs md:text-sm text-justify">
                  {proj.description}
                </p>

                <button
                  onClick={() => setSelectedProject(proj)}
                  className="mt-6 inline-flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg hover:bg-white hover:text-black transition"
                >
                  View Project
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </motion.div>
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-[#111] backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gray-900 p-6 rounded-xl max-w-3xl w-full relative overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                ✕
              </button>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <h3 className="text-2xl font-bold mb-4">
                  {selectedProject.title}
                </h3>

                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={750}
                  height={300}
                  className="rounded-lg mb-6 object-cover shadow-lg"
                />
              </motion.div>

              {selectedProject.details === "true" ? (
                <ProjectDetails projectId={selectedProject.id} />
              ) : (
                <div className="text-gray-400">
                  <p>More details coming soon...</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
