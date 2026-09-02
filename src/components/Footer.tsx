"use client";

import { Github, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6" id="footer">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-800 pb-10">
        <div>
          <h3 className="text-white font-bold text-lg mb-3">
            {"</> Muhammad Zaeem"}
          </h3>
          <p className="text-gray-400 text-sm mb-4 text-justify">
            Front End Developer specializing in creating exceptional digital
            experiences with React, Next.js, and Nest.
          </p>
          <div className="flex gap-3">
            <a
              href="https://github.com/MuhammadZaeem500"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 p-2 rounded-full hover:bg-gray-700 transition"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-zaeem-sheikh"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 p-2 rounded-full hover:bg-gray-700 transition"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#aboutme" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-white">
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Social</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://github.com/MuhammadZaeem500"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/muhammad-zaeem-sheikh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/muhammadzaeem500"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/CV.pdf"
                download="Muhammad Zaeem Resume.pdf"
                className="hover:text-white"
              >
                Resume
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white">
                Case Studies
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-6 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} MuhammadZaeem. All rights reserved.</p>
        <a
          href="#"
          className="mt-4 md:mt-0 bg-gray-900 p-2 rounded-full hover:bg-gray-700 transition"
        >
          <ArrowUp
            className="fixed bottom-6 right-6 bg-black text-white w-10 h-10 p-2 
             rounded-full cursor-pointer shadow-lg 
             transition-transform duration-300 hover:-translate-y-2"
          />
        </a>
      </div>
    </footer>
  );
}
