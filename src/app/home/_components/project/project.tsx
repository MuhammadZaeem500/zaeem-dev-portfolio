"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectDetails from "../projectDetails/projectDetails"; // 👈 import your details component
import { Project } from "../../../../../types";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "TDC HRM",
      description:
        "A Human Resource Management platform with payroll automation, leave tracking, and performance analytics, designed for enterprises.",
      tech: ["React.JS", "NestJS", "Postgres", "MUI", "Redux"],
      image: "/Images/Me.JPG",
      details: "true",
    },
    {
      id: 2,
      title: "Wolves Art",
      description:
        "A creative digital art platform integrating NFTs, artist portfolios, and immersive web experiences.",
      tech: ["React.js", "Next.js", "Framer Motion", "TailwindCSS", "Firebase"],
      image: "/Images/Me.JPG",
      details: "false",
    },
    {
      id: 3,
      title: "Lit Collective",
      description:
        "A community-driven hub for literature enthusiasts, featuring collaborative writing tools and live boards.",
      tech: ["Node.js", "Express", "MongoDB", "React.js", "Chakra UI"],
      image: "/Images/Me.JPG",
      details: "false",
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
          Featured Work &amp; Case Studies
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-2">
          Explore a selection of my recent projects showcasing my expertise in
          full stack development.
        </p>
      </div>

      {/* Project list */}
      <div className="space-y-28 max-w-6xl mx-auto">
        {projects.map((proj, idx) => {
          const isRightImage = idx % 2 === 0;

          return (
            <div
              key={proj.title}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                !isRightImage ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image + Tech Overlay */}
              <motion.div
                className="relative w-full md:w-1/2 h-80 md:h-[400px] rounded-xl overflow-visible"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
              >
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover rounded-xl"
                />

                {/* Tech overlay */}
                <motion.div
                  className="absolute -bottom-15 md:-bottom-12 -translate-y-1/2 -right-6 md:right-[-50px] w-[90%] md:w-auto flex flex-wrap gap-1 bg-white/10 p-3 md:p-2 rounded-lg backdrop-blur-sm z-10 justify-center md:justify-start"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
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

              {/* Text Content */}
              <motion.div
                className="w-full md:w-1/2"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: false }}
              >
                <h3 className="text-xl font-semibold">{proj.title}</h3>
                <p className="text-gray-400 mt-3 text-sm">{proj.description}</p>

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

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#111] p-6 rounded-xl max-w-3xl w-full relative overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                ✕
              </button>

              {/* Modal content */}
              <motion.div
                initial={{ opacity: 0, y: 50 }} // Start hidden and slightly down
                animate={{ opacity: 1, y: 0 }} // Fade in + slide up
                exit={{ opacity: 0, y: -50 }} // (Optional) animation when unmounting
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <h3 className="text-2xl font-bold mb-4">
                  {selectedProject.title}
                </h3>

                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={600}
                  height={300}
                  className="rounded-lg mb-6 object-cover shadow-lg"
                />
              </motion.div>

              {/* 👇 Show full details if available */}
              {selectedProject.details === "true" ? (
                <ProjectDetails />
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
