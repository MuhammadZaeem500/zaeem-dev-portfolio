"use client";

import { Github, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-800 pb-10">
        {/* Brand/About */}
        <div>
          <h3 className="text-white font-bold text-lg mb-3">{"</> HassanTahir"}</h3>
          <p className="text-gray-400 text-sm mb-4">
            Full Stack Engineer specializing in creating exceptional digital experiences with
            Node.js, React, and Next.js.
          </p>
          <div className="flex gap-3">
            <a href="#" className="bg-gray-900 p-2 rounded-full hover:bg-gray-700 transition">
              <Github className="w-4 h-4" />
            </a>
            <a href="#" className="bg-gray-900 p-2 rounded-full hover:bg-gray-700 transition">
              <Linkedin className="w-4 h-4" />
            </a>
            =
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Skills</a></li>
            <li><a href="#" className="hover:text-white">Projects</a></li>
            <li><a href="#" className="hover:text-white">Experience</a></li>
            <li><a href="#" className="hover:text-white">Testimonials</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white font-semibold mb-3">Social</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">GitHub</a></li>
            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white">Twitter</a></li>
            <li><a href="#" className="hover:text-white">Instagram</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Resume</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Case Studies</a></li>
            <li><a href="#" className="hover:text-white">Testimonials</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-6 text-sm text-gray-500">
<p>© {new Date().getFullYear()} HassanTahir. All rights reserved.</p>
        <a
          href="#"
          className="mt-4 md:mt-0 bg-gray-900 p-2 rounded-full hover:bg-gray-700 transition"
        >
          <ArrowUp className="w-4 h-4" />
        </a>
      </div>
    </footer>
  );
}
