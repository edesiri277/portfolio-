import emailjs from "@emailjs/browser";
import Section from "../ui/Section";
import { useState } from "react";
import { User, Phone, Mail, FileText, MessageSquare, Github, Linkedin } from "lucide-react";


export default function ContactSection() {
    const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [popup, setPopup] = useState({
  show: false,
  success: true,
  message: "",
});

const [errors, setErrors] = useState({});
const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const sendEmail = (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  setLoading(true);

  emailjs.sendForm(     
    import.meta.env.VITE_EMAILJS_SERVICE_ID,  // from EmailJS dashboard
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,   // from EmailJS dashboard
    e.target,              // form data
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY      // from EmailJS dashboard
  ).then(
    () => {
      setPopup({
        show: true,
        success: true,
        message: "Your message has been sent successfully!",
      });
      setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      })
    .catch(() => {
      setPopup({
        show: true,
        success: false,
        message: "Oops! Something went wrong. Please try again.",
      });
    })
    .finally(() => {
      setLoading(false);
    
     setTimeout(() => {
      setPopup((prev) => ({ ...prev, show: false }));
    }, 7000);
  });
};

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
          <form className="space-y-12" onSubmit={sendEmail} noValidate>
            {/* Name */}
            <div className="">
              <label className="flex items-center gap-2 border-b border-gray-700 pb-2">
                <User className="text-white w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full outline-none bg-transparent text-gray-100 placeholder-gray-400"
                />
              </label>
                {errors.name && (<p className="text-red-400 text-sm mt-1">{errors.name}</p>)}
            </div>

            {/* Phone */}
            <div>
              <label className="flex items-center gap-2 border-b border-gray-700 pb-2">
                <Phone className="text-white w-5 h-5" />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full outline-none bg-transparent text-gray-100 placeholder-gray-400"
                />
              </label>
              {errors.phone && (<p className="text-red-400 text-sm mt-1">{errors.phone}</p>)}
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center gap-2 border-b border-gray-700 pb-2">
                <Mail className="text-white w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full outline-none bg-transparent text-gray-100 placeholder-gray-400"
                />
              </label>
               {errors.email && (<p className="text-red-400 text-sm mt-1">{errors.email}</p>)}
            </div>

            {/* Subject */}
            <div>
              <label className="flex items-center gap-2 border-b border-gray-700 pb-2">
                <FileText className="text-white w-5 h-5" />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full outline-none bg-transparent text-gray-100 placeholder-gray-400"
                />
              </label>
              {errors.subject && (<p className="text-red-400 text-sm mt-1">{errors.subject}</p>)}
            </div>

            {/* Message */}
            <div>
              <label className="flex items-start gap-2 border-b border-gray-700 pb-2">
                <MessageSquare className="text-white w-5 h-5 mt-1" />
                <textarea
                 name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you? Feel free to get in touch!"
                  className="w-full outline-none bg-transparent resize-none text-gray-100 placeholder-gray-400"
                  rows={3}
                ></textarea>
              </label>
              {errors.message && (<p className="text-red-400 text-sm mt-1">{errors.message}</p>)}
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className={`relative z-20 w-full bg-[linear-gradient(135deg,rgba(173,0,255,0.4)_20%,rgba(0,150,255,0.35)_50%,rgba(255,0,150,0.35)_80%)] text-white font-semibold py-3 rounded-md ${loading && "opacity-50 cursor-not-allowed"}`}
            >
              {loading ? "Sending..." : "Get in Touch"}
            </button>
          </form>
        </div>
      </div>

              {/* POPUP (outside form is best) */}
        {popup.show && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setPopup({ ...popup, show: false })}
            />

            <div
              className={`relative z-10 w-[90%] max-w-md p-6 rounded-xl shadow-lg
              ${popup.success ? "bg-emerald-600" : "bg-red-600"}
              text-white animate-scaleIn`}
            >
              <h3 className="text-xl font-bold mb-2">
                {popup.success ? "Success 🎉" : "Error ❌"}
              </h3>
              <p className="mb-4">{popup.message}</p>

              <button
                onClick={() => setPopup({ ...popup, show: false })}
                className="px-4 py-2 bg-white text-black rounded-md font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        )}
    </section>
    </Section>
  );
}
