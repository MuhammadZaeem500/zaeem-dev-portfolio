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
        { title: "Styling", items: ["MUI Theming", "CSS-in-js"] },
        { title: "Deployment", items: ["Vercel"] },
      ],
    },
    2: {
      implementations: [
        {
          title: "Clean UI Design",
          desc: "Developed a modern interface using MUI components with custom theming.",
        },
        {
          title: "Responsive Layout",
          desc: "Applied MUI grid system and breakpoints for seamless mobile and desktop experiences.",
        },
        {
          title: "Reusable Components",
          desc: "Structured the project with modular React components for consistency and maintainability.",
        },
        {
          title: "Fast Deployment",
          desc: "Deployed the project on Vercel with CI/CD for optimized performance and accessibility.",
        },
      ],
      stack: [
        { title: "Frontend", items: ["React.js", "MUI"] },
        { title: "Styling", items: ["MUI Theming", "CSS-in-js"] },
        { title: "Deployment", items: ["Vercel"] },
      ],
    },
    3: {
      implementations: [
        {
          title: "Service Showcase",
          desc: "Designed interactive service cards to present digital design and Webflow offerings clearly and attractively.",
        },
        {
          title: "Responsive Design",
          desc: "Implemented MUI grid system and CSS-in-js to create a responsive layout for all devices.",
        },
        {
          title: "Reusable Components",
          desc: "Built modular React components for consistent UI and easy maintenance across pages.",
        },
        {
          title: "Animations & Interactivity",
          desc: "Enhanced user experience with Framer Motion for smooth transitions and interactive elements.",
        },
        {
          title: "Deployment",
          desc: "Hosted on Vercel for fast, globally accessible performance.",
        },
      ],
      stack: [
        { title: "Framework", items: ["React.js"] },
        { title: "Styling", items: ["MUI", "CSS-in-js"] },
        { title: "Components", items: ["Reusable React Components"] },
        { title: "State & Hooks", items: ["React Hooks"] },
        { title: "Animations", items: ["Framer Motion"] },
        { title: "Deployment", items: ["Vercel"] },
      ],
    },

    4: {
      implementations: [
        {
          title: "Multi-Page Navigation",
          desc: "Built a multi-page application using Next.js routing to provide detailed Saudi passport information.",
        },
        {
          title: "Reusable Components",
          desc: "Developed modular React components for consistent UI and easy maintainability across pages.",
        },
        {
          title: "Data Handling with Utils",
          desc: "Stored structured visa and citizenship information in utility files for quick updates and maintainability.",
        },
        {
          title: "React Hooks & State Management",
          desc: "Used React Hooks, including useMemo, useRef, and useEffect, to handle dynamic content, manage references, and optimize performance.",
        },
        {
          title: "Icons & Visual Enhancements",
          desc: "Integrated React Icons to improve the visual appeal and user experience.",
        },
        {
          title: "Animations",
          desc: "Implemented smooth animations and transitions using Framer Motion for interactive UI elements.",
        },
        {
          title: "Responsive Design",
          desc: "Implemented a mobile-first, responsive UI using Tailwind CSS for seamless experience on all devices.",
        },
        {
          title: "Deployment",
          desc: "Deployed the project on Vercel for fast, globally accessible performance.",
        },
      ],
      stack: [
        { title: "Framework", items: ["Next.js"] },
        { title: "Styling", items: ["Tailwind CSS"] },
        { title: "Components", items: ["Reusable React Components"] },
        {
          title: "State & Hooks",
          items: ["React Hooks", "useMemo", "useRef", "useEffect"],
        },
        { title: "Icons", items: ["React Icons"] },
        { title: "Animations", items: ["Framer Motion"] },
        { title: "Data Handling", items: ["Utility Files - Utils"] },
        { title: "Deployment", items: ["Vercel"] },
      ],
    },
    5: {
      implementations: [
        {
          title: "Multi-Tenant Pharmacy E-Commerce System",
          desc: "Built a role-based e-commerce solution where multiple pharmacies could list medicines and hospitals could track prescriptions and stock levels in real-time.",
        },
        {
          title: "Hierarchical Access & Data Security",
          desc: "Implemented granular access control (RBAC + ABAC) with data encryption for admins, doctors, pharmacists, and patients, ensuring HIPAA & GDPR compliance.",
        },
        {
          title: "Dynamic Scheduling with Conflict Resolution",
          desc: "Designed a smart appointment system that automatically resolves conflicts based on doctor availability, patient urgency, and existing bookings.",
        },
        {
          title: "Real-Time Insurance & Billing System",
          desc: "Developed a dynamic billing engine that calculates costs based on insurance policies and hospital pricing models, with automated claim processing.",
        },
        {
          title: "Optimized Query Performance in PostgreSQL",
          desc: "Implemented materialized views, partitioning, and custom indexing to reduce patient record search times from seconds to milliseconds.",
        },
        {
          title: "Role-Based Dashboards with Personalized UI",
          desc: "Built custom dashboards for patients, doctors, pharmacists, and admins, tailoring features and analytics based on user roles.",
        },

        {
          title: "Minimalist & Intuitive UI for Medical Workflows",
          desc: "Designed a clean, user-friendly interface with one-click actions for appointments, prescriptions, and emergency calls.",
        },
        {
          title: "Smooth Animations & Micro-Interactions",
          desc: "Enhanced UX with fluid transitions, button feedback animations, and gesture-based navigation.",
        },
      ],
      stack: [
        { title: "Frontend", items: ["Next.js", "React Native"] },
        { title: "Styling", items: ["MUI"] },
        { title: "Backend", items: ["Nestjs", "Node.js"] },
        { title: "Database", items: ["PostgreSQL", "Prisma"] },
        {
          title: "State & Hooks",
          items: ["React Hooks", "useState", "useEffect", "useMemo", "useRef"],
        },
        {
          title: "Deployment",
          items: ["Docker", "Vercel"],
        },
      ],
    },

    6: {
      implementations: [
        {
          title: "Task & Attendance Management",
          desc: "Implemented modules for attendance tracking, project assignments, and task monitoring with real-time updates using Redux.",
        },
        {
          title: "Leave Application Management",
          desc: "Enabled employees to apply for leaves and allowed HR to track and manage all leave requests efficiently.",
        },
        {
          title: "Project Tracking",
          desc: "Developed a system to track ongoing projects, monitor progress, and assign responsibilities to team members.",
        },
        {
          title: "Payroll & Employee Records",
          desc: "Developed secure payroll and employee management system with NestJS, PostgreSQL, and Prisma for efficient data storage and retrieval.",
        },
        {
          title: "Authentication & Access Control",
          desc: "Implemented user authentication and role-based access control to secure sensitive employee and payroll information.",
        },
        {
          title: "Reusable Components",
          desc: "Built modular React components for forms, tables, and dashboards to maintain consistency across the app.",
        },
        {
          title: "Responsive UI",
          desc: "Designed a responsive and intuitive interface using MUI, ensuring seamless experience across desktop and mobile devices.",
        },
        {
          title: "Deployment",
          desc: "Deployed the application on Vercel for fast, globally accessible performance.",
        },
      ],
      stack: [
        {
          title: "Frontend",
          items: ["React.js", "MUI", "Redux", "TypeScript", "JavaScript"],
        },
        { title: "Backend", items: ["NestJS"] },
        { title: "Database", items: ["PostgreSQL", "Prisma"] },
        {
          title: "Authentication",
          items: ["Role-Based Access Control", "JWT/Auth System"],
        },
        { title: "Deployment", items: ["Vercel"] },
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
