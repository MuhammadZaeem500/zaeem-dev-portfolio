"use client";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#aboutMe" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Experience", path: "#experience" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-transparent text-white shadow-md backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-lg sm:text-2xl font-mono">{"</>"}</span>
          <span className="font-bold text-base sm:text-lg cursor-pointer">
            Muhammad Zaeem
          </span>
        </div>

        <button
          ref={menuButtonRef}
          className="lg:hidden text-2xl focus:outline-none z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        <div className="hidden lg:flex space-x-6 lg:space-x-8 font-semibold">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="hover:underline text-sm sm:text-base"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex">
          <a
            href="/CV.pdf"
            download="Muhammad Zaeem Resume.pdf"
            className="bg-white text-black px-4 py-2 rounded-md font-semibold text-sm sm:text-base hover:bg-gray-200 transition"
          >
            Resume
          </a>
        </div>
      </div>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden flex flex-col items-center space-y-4 bg-black text-white font-semibold py-6"
        >
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="hover:underline text-sm sm:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}

          <a
            href="/CV.pdf"
            download="Muhammad Zaeem Resume.pdf"
            className="bg-white text-black px-4 py-2 rounded-md font-semibold text-sm hover:bg-gray-200 transition"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
