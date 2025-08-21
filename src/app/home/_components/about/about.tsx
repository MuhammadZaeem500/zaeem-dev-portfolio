"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      className="bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-24 flex flex-col gap-10"
      id="aboutMe"
    >
      <div className="text-center">
        <span className="inline-block px-4 py-1 border bg-black border-gray-600 rounded-full text-sm">
          About Me
        </span>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 relative">

        <motion.div
          className="relative w-full lg:w-1/3 h-80 md:h-[400px] flex-shrink-0"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Image
            src="/images/Me-Imagined.png"
            alt="Muhammad Zaeem"
            className="object-cover rounded-lg"
            fill
          />

          <motion.div
            className="absolute top-[-20px] left-[-20px] bg-black p-4 rounded-lg text-center z-10"
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            initial={{ opacity: 0, x: -50, y: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold">10+</h2>
            <p className="text-gray-400 text-xs md:text-sm">
              Projects Completed
            </p>
          </motion.div>

          <motion.div
            className="absolute bottom-[-20px] right-[-20px] bg-black p-4 rounded-lg text-center z-10"
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            initial={{ opacity: 0, x: 50, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold">1</h2>
            <p className="text-gray-400 text-xs md:text-sm">
              Years of Experience
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 space-y-6"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h1 className="text-2xl sm:text-3xl xl:text-5xl font-bold">
            Front-End Developer @ The Dev Corporate | Freelancer | Developing
            Scalable Websites
          </h1>

          <p className="text-gray-300 text-base sm:text-base xl:text-xl leading-relaxed">
            As a Front-End Developer at The Dev Corporate, I built responsive
            and dynamic web applications using React, Next.js, Redux, Tailwind
            CSS and Material UI. Now freelancing, I help clients create
            optimized, interactive interfaces.
          </p>

          <p className="text-gray-300 text-base sm:text-base xl:text-lg leading-relaxed">
            I specialize in building scalable front-end architectures,
            implementing modern UI/UX designs, and ensuring seamless integration
            with backend services. My focus is on creating high-performance,
            maintainable, and visually appealing applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
