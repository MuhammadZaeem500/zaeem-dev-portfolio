"use client";

import { motion } from "framer-motion";

export default function ProjectDetails() {
  return (
    <section className="bg-black text-white p-8 rounded-xl space-y-12 text-center">
      
      {/* Key Implementations */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <h2 className="text-2xl font-bold mb-6">Key Implementations</h2>
        <ul className="space-y-4 list-none max-w-3xl mx-auto text-gray-300 text-left">
          {[
            {
              title: "Optimized Search with Elasticsearch",
              desc: "Implemented full-text search, typo tolerance, and relevance-based ranking, allowing users to find polls by title, description, and topic, even handling misspellings.",
            },
            {
              title: "Intelligent Poll Recommendation System",
              desc: "Built a personalized recommendation engine based on user interactions, hashtags, and poll titles to boost engagement.",
            },
            {
              title: "Auto-Poll Generation with GPT",
              desc: "Developed an AI-powered feature that automatically generates polls based on a given prompt, streamlining poll creation.",
            },
            {
              title: "Real-Time Engagement with WebSockets",
              desc: "Enabled live poll updates, notifications, and chat messaging for seamless user interaction.",
            },
            {
              title: "Scalable Backend with NestJS & PostgreSQL",
              desc: "Designed a robust, modular architecture ensuring efficient API performance and database management.",
            },
            {
              title: "Optimized Caching & Performance",
              desc: "Integrated lazy caching strategies, reducing redundant database queries and improving response times.",
            },
            {
              title: "Secure Authentication & Authorization",
              desc: "Implemented JWT-based authentication, OAuth login, and RBAC (Role-Based Access Control) to ensure data security.",
            },
            {
              title: "User Follow/Following System",
              desc: "Designed a social networking model allowing users to follow others, view followed users’ polls, and receive real-time updates on new polls and activities.",
            },
          ].map((item, i) => (
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

      {/* Technical Stack */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false }}
      >
        <h2 className="text-2xl font-bold mb-6">Technical Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
          {[
            {
              title: "Frontend",
              items: ["Next.js", "Redux", "TailwindCSS", "Socket.io-client"],
            },
            {
              title: "Backend",
              items: ["Node.js", "NestJS", "Socket.io", "PostgreSQL", "Prisma", "Redis", "Elasticsearch"],
            },
            {
              title: "Storage",
              items: ["AWS S3", "Cloudinary"],
            },
            {
              title: "Real-time Features",
              items: ["Socket.io", "WebSocket", "Redis"],
            },
          ].map((stack, i) => (
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
