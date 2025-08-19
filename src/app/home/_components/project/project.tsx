"use client";

import Image from "next/image";

export default function ProjectsSection() {
  const projects = [
      {
      title: "TDC HRM",
      description:
        "A Human Resource Management platform with payroll automation, leave tracking, and performance analytics, designed for enterprises.",
      tech: ["React.JS", "NestJS", "Postgres", "MUI", "Redux"],
      image: "/Images/Me.JPG",
    },
    {
      title: "Wolves Art",
      description:
        "A creative digital art platform integrating NFTs, artist portfolios, and immersive web experiences, built for scalability and modern UI interactions.",
      tech: ["React.js", "Next.js", "Framer Motion", "TailwindCSS", "Firebase"],
      image: "/Images/Me.JPG",
    },
    {
      title: "Lit Collective",
      description:
        "A community-driven content hub for literature enthusiasts, featuring collaborative writing tools, user-generated stories, and live discussion boards.",
      tech: ["Node.js", "Express", "MongoDB", "React.js", "Chakra UI"],
      image: "/Images/Me.JPG",
    },
    {
      title: "Horizon",
      description:
        "A B2B SaaS solution for logistics and freight management, offering real-time tracking, route optimization, and predictive analytics.",
      tech: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Docker"],
      image: "/Images/Me.JPG",
    },
    {
      title: "TDC HRM",
      description:
        "A Human Resource Management platform with payroll automation, leave tracking, and performance analytics, designed for enterprises.",
      tech: ["React.JS", "NestJS", "Postgres", "MUI", "Redux"],
      image: "/Images/Me.JPG",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6" id="projects">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1 border border-gray-600 rounded-full text-sm">
          My Projects
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Featured Work &amp; Case Studies
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-2">
          Explore a selection of my recent projects showcasing my expertise in full stack development.
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
              {/* Image */}
              <div className="relative w-full md:w-1/2 h-80 md:h-[400px] rounded-xl overflow-visible">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover rounded-xl"
                />

                {/* Tech overlay on right side */}
                <div
                  className={`absolute -bottom-15 md:-bottom-12 -translate-y-1/2 -right-6 md:right-[-50px] w-[90%] md:w-auto flex flex-wrap gap-1 bg-white/10 p-3 md:p-2 rounded-lg backdrop-blur-sm z-10 justify-center md:justify-start`}
                >
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] sm:text-[11px] md:text-xs bg-[#1a1a1a]/70 border border-gray-700 rounded-full px-2 py-1 whitespace-nowrap"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-semibold">{proj.title}</h3>
                <p className="text-gray-400 mt-3 text-sm">{proj.description}</p>

                {/* View Project Button */}
                <button className="mt-6 inline-flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg hover:bg-white hover:text-black transition">
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
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
