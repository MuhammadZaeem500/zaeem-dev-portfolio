"use client";

import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      className="bg-black text-white py-16 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center lg:items-start gap-10"
      id="aboutMe"
    >
      <div className="relative w-full lg:w-1/3 h-80 md:h-[500px] flex-shrink-0">
        <Image
          src="/Images/Me.JPG"
          alt="Muhammad Zaeem"
          className="object-cover rounded-lg"
          fill
        />
      </div>

      <div className="flex-1 space-y-6">
        <div className="flex gap-6  justify-center lg:justify-start">
          <div className="bg-gray-900 p-4 rounded-lg text-center">
            <h2 className="text-2xl md:text-3xl font-bold">10+</h2>
            <p className="text-gray-400 text-xs md:text-sm">Projects Completed</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg text-center">
            <h2 className="text-2xl md:text-3xl font-bold">1</h2>
            <p className="text-gray-400 text-xs md:text-sm">Years of Experience</p>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl xl:text-5xl font-bold">
          Front-End Developer @ The Dev Corporate | Freelancer | Developing Scalable Websites
        </h1>

        <p className="text-gray-300 text-base sm:text-base xl:text-lg leading-relaxed">
          As a Front-End Developer at The Dev Corporate, I built responsive and
          dynamic web applications using React, Next.js, Redux, Tailwind CSS and
          Material UI. Now freelancing, I help clients create optimized,
          interactive interfaces.
        </p>

        <p className="text-gray-300 text-base sm:text-base xl:text-lg leading-relaxed">
          I specialize in building scalable front-end architectures,
          implementing modern UI/UX designs, and ensuring seamless integration
          with backend services. My focus is on creating high-performance,
          maintainable, and visually appealing applications.
        </p>
      </div>
    </section>
  );
}
