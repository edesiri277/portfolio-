import React from "react";
import Section from "../ui/Section";
import image6 from "../asset/Me.jpeg";


export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* Left: Image */}
        <div className="relative mx-auto w-full max-w-[420px] h-[350px] sm:h-[450px] overflow-hidden rounded-3xl shadow-lg ring-1 ring-slate-800">
          <img
            alt="Profile"
            src={image6}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Right: Text */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold sm:text-4xl">About Me</h2>
          <p className="mt-4 text-slate-300">
            I’m a passionate Front-End and WordPress Developer driven by creativity and a desire to turn ideas into interactive, user-friendly experiences. What started as curiosity quickly grew into a love for building clean, modern, and responsive websites that not only look great but feel intuitive to use. With a solid foundation in HTML, CSS, and JavaScript, I specialize in creating seamless interfaces that blend design with functionality. I use React to build dynamic, component-based applications, and tools like Tailwind CSS and Bootstrap to develop efficiently and bring designs to life.          
          </p>
            
          <p className="mt-3 text-slate-300">
            I also work extensively with WordPress, building responsive websites, customizing themes, and integrating plugins to deliver scalable solutions. Using Git and GitHub, I maintain a clean, organized workflow that ensures every project is efficient and easy to manage.          
          </p>

          <p className="mt-3 text-slate-300">
            To me, web development is more than writing code—it’s about creating meaningful experiences that connect with people. That’s what drives me to keep learning, building, and growing.
          </p>
        </div>
      </div>

      <section className="py-14 px-4">
            <div className="max-w-7xl mx-auto grid gap-6 lg:grid-cols-6">
              {/* First Card */}
              <div className="relative bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-800 lg:col-span-3">
                {/* Skills list with logos */}
                 <h3 className="text-[25px] text-center pb-3 font-bold text-white">SKILLS</h3>
                <div className="space-y-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <h3 className="text-lg font-semibold text-gray-300">HTML</h3>
                  </div>
                  <div className="flex items-center">
                    <h3 className="text-lg font-semibold text-gray-300">CSS</h3>
                  </div>
                  <div className="flex items-center">
                    <h3 className="text-lg font-semibold text-gray-300">JAVASCRIPT</h3>
                  </div>
                  <div className="flex items-center">
                    <h3 className="text-lg font-semibold text-gray-300">REACT</h3>
                  </div>
                  <div className="flex items-center">
                    <h3 className="text-lg font-semibold text-gray-300">TAILWIND</h3>
                  </div>
                  <div className="flex items-center">
                    <h3 className="text-lg font-semibold text-gray-300">NODE.JS</h3>
                  </div>
                  <div className="flex items-center">
                    <h3 className="text-lg font-semibold text-gray-300">WORDPRESS</h3>
                  </div>
                </div>
              </div>
      
              {/* Second Card */}
              <div className="relative bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-800 lg:col-span-3">
                {/* Services list */}
                <h3 className="text-[25px] text-center pb-3 font-bold text-white">SERVICES</h3>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-300">
                    Responsive Website Design & Development
                  </h3>
                  <h3 className="text-lg font-semibold text-gray-300">
                    API Integration (Frontend)
                  </h3>
                  <h3 className="text-lg font-semibold text-gray-300">
                    Version Control (Git & GitHub)
                  </h3>
                  <h3 className="text-lg font-semibold text-gray-300">
                    Basic Deployment & Hosting
                  </h3>
                </div>
              </div>
            </div>
          </section>
          
    </Section>
  );
}
