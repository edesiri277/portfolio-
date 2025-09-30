import React from "react";
import emailjs from "emailjs-com";
import Section from "../ui/Section";
import Button from "../ui/Button";
import { User, Phone, Mail, FileText, MessageSquare, Github, Linkedin } from "lucide-react";


const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_udoq632",     // from EmailJS dashboard
    "template_xgb8y58",    // from EmailJS dashboard
    e.target,              // form data
    "hnDSCU2BQ7v2aaMaa"      // from EmailJS dashboard
  ).then(
    (result) => {
      console.log(result.text);
      alert("✅ Message sent successfully!");
      e.target.reset(); // clear form
    },
    (error) => {
      console.log(error.text);
      alert("❌ Something went wrong. Try again!");
    }
  );
};


export default function ContactSection() {
  return (
    <Section id="contact">
    <section className="py-6">
    <h2 className="text-3xl text-center pb-10 font-bold sm:text-4xl">Contact Me</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8">
            Have a question? <br /> Get in touch!
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-20">
            {/* Email */}
            <div className="flex flex-col justify-center gap-2 p-6 rounded-xl border border-slate-950 shadow-md">
              <div className="flex items-center gap-2">
                <Mail className="w-6 h-6 text-[rgba(0,150,255,0.6)]" />
                <h3 className="font-bold text-xl">
                  Email
                </h3>
              </div>  
              <p className="text-gray-300 break-words">
                avwaruteedesiri@gmail.com
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col justify-center gap-2 p-6 rounded-xl border border-slate-950 shadow-md">
              <div className="flex items-center gap-2">
                <Phone className="w-6 h-6 text-[rgba(255,0,150,0.6)]" />
                <h3 className="font-semibold text-xl">
                  Phone
                </h3>
              </div>
              <p className="text-gray-300">
                09014373643
              </p>
            </div>

            {/* Follow Me */}
            <div className="flex flex-col items-center justify-center gap-2 h-[200px] rounded-xl border border-slate-950 shadow-md sm:col-span-2">
              <h3 className="font-bold text-xl">
                Follow Me
              </h3>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <a
                  href="https://github.com/edesiri277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-950
        text-white shadow-md"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/edesiriavwarute/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white
        text-slate-950 shadow-md"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-md z-10">
          <form className="space-y-12" onSubmit={sendEmail}>
            {/* Name */}
            <div className="">
              <label className="flex items-center gap-2 border-b border-gray-700 pb-2">
                <User className="text-white w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full outline-none bg-transparent text-gray-100 placeholder-gray-400"
                />
              </label>
            </div>

            {/* Phone */}
            <div>
              <label className="flex items-center gap-2 border-b border-gray-700 pb-2">
                <Phone className="text-white w-5 h-5" />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="w-full outline-none bg-transparent text-gray-100 placeholder-gray-400"
                />
              </label>
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center gap-2 border-b border-gray-700 pb-2">
                <Mail className="text-white w-5 h-5" />
                <input
                  type="email"
                   name="email"
                  placeholder="Email Address"
                   required
                  className="w-full outline-none bg-transparent text-gray-100 placeholder-gray-400"
                />
              </label>
            </div>

            {/* Subject */}
            <div>
              <label className="flex items-center gap-2 border-b border-gray-700 pb-2">
                <FileText className="text-white w-5 h-5" />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full outline-none bg-transparent text-gray-100 placeholder-gray-400"
                />
              </label>
            </div>

            {/* Message */}
            <div>
              <label className="flex items-start gap-2 border-b border-gray-700 pb-2">
                <MessageSquare className="text-white w-5 h-5 mt-1" />
                <textarea
                 name="message" 
                  placeholder="How can we help you? Feel free to get in touch!"
                  required
                  className="w-full outline-none bg-transparent resize-none text-gray-100 placeholder-gray-400"
                  rows={3}
                ></textarea>
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[linear-gradient(135deg,rgba(173,0,255,0.4)_20%,rgba(0,150,255,0.35)_50%,rgba(255,0,150,0.35)_80%)] text-white font-semibold py-3 rounded-md"
            >
              Get in Touch
            </button>
          </form>
        </div>
      </div>
    </section>
    </Section>
  );
}
