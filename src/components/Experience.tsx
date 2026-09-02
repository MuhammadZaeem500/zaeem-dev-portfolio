"use client";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { Experience } from "@/types";


const experiences: Experience[] = [
  {
    role: "Front End Developer",
    company: "Fiverr",
    location: "Lahore, Punjab, Pakistan",
    period: "July 2026 – Present",
    technologies: [
      "React",
      "Nest.js",
      "PostgreSQL",
      "TypeScript",
      "Redux",
      "Framer Motion",
      "Tailwind CSS",
      "Next.js",
      "Prisma",
      "UI/UX Design",
      "Express",
      "MongoDB",
      "Authentication",
      "Vercel",
      "Chart.js",
      "D3.js",
    ],
  },
  {
    role: "Front End Developer",
    company: "The Dev Corporate",
    location: "Lahore, Punjab, Pakistan",
    period: "Nov 2024 – May 2025",
    technologies: [
      "Next.js",
      "React.js",
      "Material UI (MUI)",
      "Redux",
      "Framer Motion",
      "Tailwind CSS",
      "Node.js",
      "Nest.js",
      "JavaScript",
      "Custom Integrations",
      "Creative UI/UX Design",
      "Prisma",
      "PostgreSQL",
      "Vercel",
      "Chart.js",
      "D3.js",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section
      className="w-full flex flex-col items-center px-6 py-16 bg-black text-white"
      id="experience"
    >
      <button className="border border-white px-4 py-1 rounded-full text-sm mb-4 ">
        Experience
      </button>
      <h2 className="text-xl md:text-3xl font-bold mb-2 text-center">
        Professional Journey & Work History
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mb-12">
        A timeline of my professional experience and career milestones in the
        tech industry.
      </p>

      <div className="relative w-full max-w-5xl">
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-16 flex flex-col md:flex-row w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {index % 2 === 0 ? (
              <>
                <motion.div
                  className="w-full md:w-1/2 md:pr-8 flex justify-center md:justify-end mb-4 md:mb-0"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-gray-900 rounded-xl shadow-md p-6 w-full max-w-md">
                    <h3 className="text-sm md:text-xl font-bold flex items-center gap-2">
                      <Briefcase className="w-5 h-5" /> {exp.role}
                    </h3>
                    <p className="text-gray-400 text-xs md:text-sm mb-1">
                      {exp.company}
                    </p>
                    <p className="text-gray-500 text-xs mb-4">
                      {exp.location} • {exp.period}
                    </p>
                    <h4 className="mb-2 font-semibold text-sm md:text-base">
                      Technologies worked with
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-xs md:text-sm text-gray-300">
                      {exp.technologies.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  className="relative hidden md:block justify-center md:w-0"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="bg-gray-300 rounded-full w-4 h-4 border-2 border-white absolute md:left-1/2 transform -translate-x-1/2 top-0 md:top-6"></div>
                </motion.div>
                <div className="w-full md:w-1/2"></div>
              </>
            ) : (
              <>
                <div className="w-full md:w-1/2"></div>

                <motion.div
                  className="relative hidden md:block justify-center md:w-0"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="bg-gray-300 rounded-full w-4 h-4 border-2 border-white absolute md:left-1/2 transform -translate-x-1/2 top-0 md:top-6"></div>
                </motion.div>
                <motion.div
                  className="w-full md:w-1/2 md:pl-8 flex justify-center md:justify-start mb-4 md:mb-0"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-gray-900 rounded-xl shadow-md p-6 w-full max-w-md">
                    <h3 className="text-sm md:text-xl font-bold flex items-center gap-2">
                      <Briefcase className="w-5 h-5" /> {exp.role}
                    </h3>
                    <p className="text-gray-400 text-xs md:text-sm mb-1">
                      {exp.company}
                    </p>
                    <p className="text-gray-500 text-xs mb-4">
                      {exp.location} • {exp.period}
                    </p>
                    <h4 className="mb-2 font-semibold text-sm md:text-base">
                      Technologies worked with
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-xs md:text-sm text-gray-300">
                      {exp.technologies.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
