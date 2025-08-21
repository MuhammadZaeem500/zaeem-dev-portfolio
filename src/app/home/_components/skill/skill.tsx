"use client";

import { motion } from "framer-motion";

export default function SkillsSection() {
  const skills = [
    {
      title: "Frontend",
      icon: "📦",
      items: [
        "React.js",
        "Next.js",
        "MUI",
        "TypeScript",
        "Tailwind CSS",
        "Redux",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "Backend",
      icon: "🖥️",
      items: ["Node.js", "Express", "NestJS"],
    },
    {
      title: "Databases",
      icon: "🗄️",
      items: ["MongoDB", "PostgreSQL", "MySQL"],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.5 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-black text-white py-16 px-6" id="skills">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1 border border-gray-600 rounded-full text-sm">
          My Skills
        </span>
        <h2 className="text-2xl md:text-4xl font-bold mt-4">
          Technical Expertise &amp; Proficiencies
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-2">
          A quick look at my core skills across the full-stack.
        </p>
      </div>

      <motion.div
        className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
      >
        {skills.map((box) => (
          <motion.div
            key={box.title}
            className="bg-[#111] border border-gray-800 rounded-xl p-6 text-left"
            variants={item}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-base md:text-xl">{box.icon}</span>
              <h3 className="font-semibold text-base md:text-lg">{box.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {box.items.map((itemName) => (
                <motion.span
                  key={itemName}
                  className="text-xs md:text-sm bg-[#1a1a1a] border border-gray-700 rounded-full px-3 py-1"
                  variants={item}
                >
                  {itemName}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-12 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <div className="flex items-center gap-6">
          <div
            aria-label="Previous"
            className="p-3 rounded-full border border-gray-700"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <span className="w-2 h-2 rounded-full bg-gray-400 inline-block" />

          <div
            aria-label="Next"
            className="p-3 rounded-full border border-gray-700"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <p className="text-gray-400 text-sm text-center max-w-2xl mt-6">
          Always learning and growing my skill set to stay at the front of web
          development.
        </p>
      </motion.div>
    </section>
  );
}
