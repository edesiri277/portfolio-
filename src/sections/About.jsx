import React from "react";
import Section from "../ui/Section";
import image1 from "../asset/html2.png";
import image2 from "../asset/css2.png";
import image3 from "../asset/js.png";
import image4 from "../asset/react.png";
import image5 from "../asset/tailwind.png";


export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* Left: Image */}
        <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-3xl shadow-lg ring-1 ring-slate-800">
          <img
            alt="Profile"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1600&auto=format&fit=crop"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold sm:text-4xl">About Me</h2>
          <p className="mt-4 text-slate-300">
            I’m a passionate Front-End Developer driven by creativity and the desire to turn ideas into interactive, user-friendly experiences. My journey into web development started with curiosity, but quickly grew into a genuine love for crafting clean, modern, and responsive websites that don’t just look great—but feel intuitive to use.
            With a strong foundation in HTML, CSS, and JavaScript, I specialize in building seamless interfaces that merge functionality with design. I’m proficient in React for building dynamic, component-based applications and love using Tailwind CSS and Bootstrap to bring designs to life with speed and precision. 
          </p>
            
          <p className="mt-3 text-slate-300">
            Alongside that, I make sure my workflow stays clean and professional by leveraging Git and GitHub for version control and collaboration.At the core, I see front-end development as more than just code—it’s about creating experiences that connect with people. And that’s what motivates me to keep building, learning, and growing every day.
          </p>

          <p className="mt-3 text-slate-300">
            When I’m not coding, I love exploring design trends, learning new
            tools, and collaborating with other developers to build meaningful
            digital experiences.
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
                    <img src={image1} alt="HTML" className="w-[60px] h-[60px] object-cover" />
                    <h3 className="text-lg font-semibold text-gray-300">HTML</h3>
                  </div>
                  <div className="flex items-center">
                    <img src={image2} alt="CSS" className="w-[60px] h-[60px] object-cover" />
                    <h3 className="text-lg font-semibold text-gray-300">CSS</h3>
                  </div>
                  <div className="flex items-center">
                    <img src={image3} alt="JavaScript" className="w-[60px] h-[60px] object-cover" />
                    <h3 className="text-lg font-semibold text-gray-300">JAVASCRIPT</h3>
                  </div>
                  <div className="flex items-center">
                    <img src={image4} alt="React" className="w-[65px] h-[65px] object-cover" />
                    <h3 className="text-lg font-semibold text-gray-300">REACT</h3>
                  </div>
                  <div className="flex items-center">
                    <img src={image5} alt="Tailwind" className="w-[65px] h-[65px] object-cover" />
                    <h3 className="text-lg font-semibold text-gray-300">TAILWIND</h3>
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
