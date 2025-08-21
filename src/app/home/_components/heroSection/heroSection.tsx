"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="bg-black text-white flex flex-col items-center justify-center min-h-screen px-6 py-10 text-center"
      id="home"
    >
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold leading-snug md:leading-tight"
        initial={{ opacity: 0, x: 400 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        Crafting <span className="text-white">Responsive</span> Modern
        <br className="hidden sm:block" /> Web Apps
        <span className="text-white"> With React & Next.JS</span>
      </motion.h1>

      <motion.p
        className="mt-6 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl text-base sm:text-base md:text-lg text-gray-300 leading-relaxed"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        I am a Front-End Developer with experience in building modern and
        responsive web applications using React, Next.js, and MUI. I create
        interactive and user-friendly interfaces, using Formik, Redux, and
        custom components for efficient state management and seamless user
        experience. I focus on delivering clean, maintainable, and scalable
        front-end solutions while ensuring smooth integration with backend
        services when needed.
      </motion.p>

      <motion.div
        className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <a href="#projects">
          <button className="bg-black text-white border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition">
            View My Work
          </button>
        </a>
        <a href="#contact">
          <button className="bg-black border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition">
            Contact Me
          </button>
        </a>
      </motion.div>
    </section>
  );
}
