// components/ProjectsSection.js
export default function ProjectsSection() {
  const projects = [
    {
      title: "Apex Darat - Enterprise-Grade Microservices Ecosystem",
      description:
        "Apex Darat is a microservices-based enterprise solution built with NestJS, PostgreSQL, Kafka, Redis, and Prisma, covering HRM, eCommerce, procurement, project management, and sales management. It features event-driven architecture, optimized database performance, robust security (JWT, OAuth, RBAC), and automated CI/CD pipelines, ensuring scalability, efficiency, and seamless real-time data processing.",
      tech: [
        "Node.js", "NestJS", "Postgres", "Microservices", "Kafka",
        "Prisma", "Next.js", "Redux", "TailwindCSS"
      ],
    },
    {
      title: "Wolves Art",
      description:
        "A creative digital art platform integrating NFTs, artist portfolios, and immersive web experiences, built for scalability and modern UI interactions.",
      tech: ["React.js", "Next.js", "Framer Motion", "TailwindCSS", "Firebase"],
    },
    {
      title: "Lit Collective",
      description:
        "A community-driven content hub for literature enthusiasts, featuring collaborative writing tools, user-generated stories, and live discussion boards.",
      tech: ["Node.js", "Express", "MongoDB", "React.js", "Chakra UI"],
    },
    {
      title: "Horixon",
      description:
        "A B2B SaaS solution for logistics and freight management, offering real-time tracking, route optimization, and predictive analytics.",
      tech: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Docker"],
    },
    {
      title: "TDC HRM",
      description:
        "A Human Resource Management platform with payroll automation, leave tracking, and performance analytics, designed for enterprises.",
      tech: ["Node.js", "NestJS", "Postgres", "AWS", "TailwindCSS"],
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
      <div className="space-y-20 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <div
            key={proj.title}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            {/* Left placeholder grid (UI Mock) */}
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-2 bg-[#111] p-4 rounded-xl border border-gray-800 min-h-[250px]">
              <div className="bg-indigo-500/70 rounded-lg"></div>
              <div className="bg-gray-700 rounded-lg"></div>
              <div className="bg-gray-700 rounded-lg"></div>
              <div className="bg-indigo-500/70 rounded-lg"></div>
            </div>

            {/* Right content */}
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="text-gray-400 mt-3 text-sm">{proj.description}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-[#1a1a1a] border border-gray-700 rounded-full px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Button */}
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
        ))}
      </div>
    </section>
  );
}
