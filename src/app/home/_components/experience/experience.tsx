"use client";
import { Briefcase } from "lucide-react";

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    role: "Senior Full Stack Developer",
    company: "The Dev Corporate",
    location: "Lahore, Punjab, Pakistan",
    period: "Jan 2021 – Present",
    achievements: [
      "Led the development of enterprise-level applications using microservices and advanced APIs.",
      "Architected a scalable, event-driven API system with 5+ microservices handling 500+ daily requests.",
      "Built a WhatsApp automation platform with 20k+ active users.",
      "Developed a distributed caching strategy cutting server costs by 20%.",
      "Optimized AI-powered job recommendation system with vector embeddings.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Egy4Tech",
    location: "Lahore, Punjab, Pakistan",
    period: "Jun 2019 – Jan 2021",
    achievements: [
      "Developed web apps using React, Express, and MongoDB.",
      "Collaborated with UI/UX designers for responsive design.",
      "Enhanced database management understanding via Laravel projects.",
      "Played a key role in creating an academic platform for students.",
      "Implemented scalable authentication & reporting features.",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="w-full flex flex-col items-center px-6 py-16 bg-black text-white" id="experience">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
        Professional Journey & Work History
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mb-12">
        A timeline of my professional experience and career milestones in the
        tech industry.
      </p>

      <div className="relative w-full max-w-5xl">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>

        {experiences.map((exp, index) => (
          <div key={index} className="mb-16 flex w-full">
            {/** Left side card */}
            {index % 2 === 0 ? (
              <>
                <div className="w-1/2 pr-8 flex justify-end">
                  <div className="bg-gray-900 rounded-xl shadow-lg p-6 w-full max-w-md">
                    <h3 className="text-lg md:text-xl font-bold flex items-center gap-2">
                      <Briefcase className="w-5 h-5" /> {exp.role}
                    </h3>
                    <p className="text-gray-400 text-sm mb-1">{exp.company}</p>
                    <p className="text-gray-500 text-xs mb-4">
                      {exp.location} • {exp.period}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                      {exp.achievements.map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Dot in middle */}
                <div className="relative">
                  <div className="bg-gray-300 rounded-full w-4 h-4 border-2 border-white absolute left-1/2 transform -translate-x-1/2 top-6"></div>
                </div>
                <div className="w-1/2"></div>
              </>
            ) : (
              <>
                <div className="w-1/2"></div>
                {/* Dot in middle */}
                <div className="relative">
                  <div className="bg-gray-300 rounded-full w-4 h-4 border-2 border-white absolute left-1/2 transform -translate-x-1/2 top-6"></div>
                </div>
                <div className="w-1/2 pl-8 flex justify-start">
                  <div className="bg-gray-900 rounded-xl shadow-lg p-6 w-full max-w-md">
                    <h3 className="text-lg md:text-xl font-bold flex items-center gap-2">
                      <Briefcase className="w-5 h-5" /> {exp.role}
                    </h3>
                    <p className="text-gray-400 text-sm mb-1">{exp.company}</p>
                    <p className="text-gray-500 text-xs mb-4">
                      {exp.location} • {exp.period}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                      {exp.achievements.map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
