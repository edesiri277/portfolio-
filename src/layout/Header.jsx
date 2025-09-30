import React, { useState, useEffect } from "react";
import { Menu, Github, Linkedin } from "lucide-react";
import image from "../asset/logoname2.png"

export default function Header({ navItems }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // toggle after 50px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // closes menu when a nav link is clicked
  const handleNavClick = (id) => {
    setOpen(false); // close menu
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // smooth scroll
    }
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="text-lg font-bold text-white">
          <img alt="Profile" src={image} className="w-[100px]" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden gap-10 md:flex">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm font-medium text-slate-300 hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 hover:bg-slate-800 md:hidden"
        >
          <Menu className="h-5 w-5 text-white" />
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden">
          <nav className="flex flex-col gap-4 border-t border-slate-700 bg-slate-900 px-4 py-8">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className="text-left text-sm font-medium text-slate-300 hover:text-white"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Social Icons at bottom of mobile menu */}
          <div className="flex justify-center gap-6 border-t border-slate-700 bg-slate-900 px-4 py-6 md:hidden">
            <a href="https://github.com/edesiri277" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 text-slate-300 hover:text-purple-400 transition" />
            </a>
            <a href="https://www.linkedin.com/in/edesiriavwarute/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 text-slate-300 hover:text-purple-400 transition" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
