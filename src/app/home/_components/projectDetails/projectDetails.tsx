"use client";

import { motion } from "framer-motion";

interface ProjectDetailsProps {
  projectId: number;
}

export default function ProjectDetails({ projectId }: ProjectDetailsProps) {
  const projectDetails: Record<
    number,
    {
      implementations: { title: string; desc: string }[];
      stack: { title: string; items: string[] }[];
    }
  > = {
    1: {
      implementations: [
        {
          title: "Creative Showcase",
          desc: "Built an interactive gallery to display services and artworks with smooth animations using Framer Motion.",
        },
        {
          title: "Responsive Design",
          desc: "Used MUI grid system and breakpoints to create a fully responsive, mobile-first layout.",
        },
        {
          title: "Reusable Components",
          desc: "Developed modular React components (cards, sections, navigation) for consistency and scalability.",
        },
        {
          title: "SEO Optimization",
          desc: "Implemented metadata, Open Graph tags, and server-side rendering in Next.js for improved SEO.",
        },
        {
          title: "Smooth Navigation",
          desc: "Integrated page transitions and hover animations with Framer Motion to enhance user experience.",
        },
        {
          title: "Deployment & Hosting",
          desc: "Deployed the project on Vercel with CI/CD pipeline for automatic builds and global delivery.",
        },
      ],
      stack: [
        { title: "Frontend", items: ["Next.js", "React", "MUI", "TypeScript"] },
        { title: "Animation", items: ["Framer Motion"] },
        { title: "State Management", items: ["React Hooks"] },
        { title: "Styling", items: ["MUI Theming", "CSS-in-JS"] },
        { title: "Deployment", items: ["Vercel"] },
      ],
    },
    2: {
      implementations: [
        {
          title: "Payroll Automation",
          desc: "Automated salary generation, tax deductions, and overtime handling.",
        },
        {
          title: "Leave Tracking",
          desc: "Integrated leave approval workflows with calendar sync.",
        },
        {
          title: "Performance Analytics",
          desc: "Created dashboards for employee KPIs and performance metrics.",
        },
      ],
      stack: [
        { title: "Frontend", items: ["React.js", "MUI", "Redux"] },
        { title: "Backend", items: ["NestJS", "Postgres"] },
        { title: "Auth", items: ["JWT", "RBAC"] },
        { title: "Hosting", items: ["AWS EC2", "Docker"] },
      ],
    },
  };

  const details = projectDetails[projectId];

  if (!details) {
    return (
      <div className="text-gray-400">
        <p>More details coming soon...</p>
      </div>
    );
  }

  return (
    <section className="bg-[#111] text-white p-8 rounded-xl space-y-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <h2 className="text-2xl font-bold mb-6">Key Implementations</h2>
        <ul className="space-y-4 list-none max-w-3xl mx-auto text-gray-300 text-left">
          {details.implementations.map((item, i) => (
            <motion.li
              key={i}
              className="leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: false }}
            >
              <strong>{item.title}</strong> – {item.desc}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false }}
      >
        <h2 className="text-2xl font-bold mb-6">Technical Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
          {details.stack.map((stack, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: false }}
            >
              <h3 className="font-semibold mb-3">{stack.title}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {stack.items.map((item) => (
                  <span
                    key={item}
                    className="bg-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
