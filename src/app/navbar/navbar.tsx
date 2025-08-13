"use client"
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className={` font-serif w-full px-4 sm:px-6 md:px-8 lg:px-12 py-3 flex items-center justify-between bg-black text-white ${darkMode ? "dark" : ""}`}>

      <div className="flex items-center space-x-2">
        <span className="text-xl sm:text-2xl font-mono">{">-"}</span>
        <span className="font-bold text-base sm:text-lg cursor-pointer">Muhammad Zaeem</span>
      </div>

      <button
        className="md:hidden text-xl sm:text-2xl focus:outline-none z-20"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      <div
        ref={menuRef}
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row absolute md:static top-14 left-0 w-full md:w-auto bg-black md:bg-transparent z-10 space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 p-4 sm:p-6 md:p-0 font-semibold text-white transition-all duration-300 ease-in-out`}
      >
        <a href="#" className="hover:underline text-sm sm:text-base" onClick={() => setIsMenuOpen(false)}>
          Home
        </a>
        <a href="#" className="hover:underline text-sm sm:text-base" onClick={() => setIsMenuOpen(false)}>
          About
        </a>
        <a href="#" className="hover:underline text-sm sm:text-base" onClick={() => setIsMenuOpen(false)}>
          Skills
        </a>
        <a href="#" className="hover:underline text-sm sm:text-base" onClick={() => setIsMenuOpen(false)}>
          Projects
        </a>
        <a href="#" className="hover:underline text-sm sm:text-base" onClick={() => setIsMenuOpen(false)}>
          Experience
        </a>
        <a href="#" className="hover:underline text-sm sm:text-base" onClick={() => setIsMenuOpen(false)}>
          Testimonials
        </a>
        <a href="#" className="hover:underline text-sm sm:text-base" onClick={() => setIsMenuOpen(false)}>
          Contact
        </a>
      </div>
      
      <div className="flex items-center space-x-3 sm:space-x-4">
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          className="text-lg sm:text-xl hover:text-gray-400 transition"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
        <button className="bg-white text-black px-3 sm:px-4 py-1 sm:py-2 rounded-md font-semibold text-sm sm:text-base hover:bg-gray-200 transition">
          Resume
        </button>
      </div>
    </nav>
  );
}