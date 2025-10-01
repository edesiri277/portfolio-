import React from "react";
import Section from "../ui/Section";
import Button from "../ui/Button";
import { ExternalLink, Mail, Download, Github, Linkedin} from "lucide-react";

// Import the images
import centerFace from "../asset/_digital__art__illustration_-removebg-preview.png"; 
import leftFace from "../asset/image (2).png";   
import rightFace from "../asset/image3 (2).png"; 

export default function Hero() {
  return (
    <Section
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >

    {/* === LEFT VERTICAL ICON BAR (inside Hero only) === */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center z-20">
        {/* line above */}
         <div className="w-px h-16 bg-slate-500/50"></div>

        {/* icons */}
        <div className="flex flex-col items-center gap-6 my-6">
          <a href="https://github.com/edesiri277" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 text-slate-300 hover:text-purple-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/edesiriavwarute/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 text-slate-300 hover:text-purple-400 transition" />
          </a>
        </div>

        {/* line below */}
        <div className="w-px h-16 bg-slate-500/50"></div>
      </div>


      {/* Left Face */}
      <div className="fixed inset-y-0 left-0 w-1/3 z-0 ">
        <img
          src={leftFace}
          alt="AI Face Left"
          className="w-full h-full object-cover block"
          style={{
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0))",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0))",
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
          opacity: 0.4, // optional global transparency
        }}
        />
      </div>

      {/* RIGHT: full-height, flush to right edge */}
      <div className="fixed inset-y-0 right-0 w-1/3 z-0 hidden md:block">
        <img
          src={rightFace}
          alt="AI Face Right"
          className="w-full h-full object-cover block"
          style={{
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0))",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0))",
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
          opacity: 0.4,
        }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
          Hi, I’m Edesiri <br />
          Front-End Developer
        </h1>
        <p className="mt-4 text-slate-200 text-xl">
          I create elegant, user-friendly interfaces that are responsive, accessible,
          and visually engaging. My focus is on delivering seamless digital experiences
          that feel both intuitive and enjoyable.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button className="bg-white text-slate-900 hover:opacity-90" as="a" href="#projects">
            <ExternalLink className="h-4 w-4" /> View Projects
          </Button>
          <Button className="border border-slate-700 bg-slate-900 hover:bg-slate-800" as="a" href="#contact">
            <Mail className="h-4 w-4" /> Contact Me
          </Button>
          <Button className="border border-slate-700 bg-slate-900 hover:bg-slate-800" as="a" href="/public/Ecv .pdf" download>
            <Download className="h-4 w-4" /> Download CV
          </Button>
        </div>
      </div>
    </Section>
  );
}
