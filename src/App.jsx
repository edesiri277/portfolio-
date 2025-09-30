import React, { useEffect, useMemo, useRef } from "react";

// Layout
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import BackToTop from "./layout/BackToTop";

// Sections
import Hero from "./sections/Hero";
import About from "./sections/About";
import ProjectsSlider from "./sections/ProjectsSlider";
import Contact from "./sections/Contact";


import image1 from "./asset/proj_img1.png";
import image2 from "./asset/proj_img2.png";

export default function PortfolioSite() {
  const canvasRef = useRef(null);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const projects = useMemo(
    () => [
      {
        title: "Charity Organization",
        desc: "Responsive website for a charity organization showcasing causes, donations, and community support.",
        tech: ["HTML", "CSS", "JAVASCRIPT"],
        img: image1,
        url: "https://charity-org-one.vercel.app/",
        repo: "https://github.com/edesiri277/CharityOrg",
      },
      {
        title: "A Portfolio Website",
        desc: "Personal portfolio website designed to showcase work, skills, and contact details in a simple and responsive layout.",
        tech: ["HTML", "CSS"],
        img: image2,
        url: "https://elohorrr.github.io/ELOHOR/",
        repo: "https://github.com/edesiri277/elohor",
      },
      {
        title: "E-Commerce Fashion Store",
        desc: "Responsive multi-vendor store with dashboard, cart, and Stripe checkout.",
        tech: ["React", "Tailwind", "Node", "Stripe"],
        img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop",
        url: "#",
        repo: "#",
      },
    ],
    []
  );

  // ===== Starfield Background Effect =====
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];
    const numStars = 200;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function initStars() {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 0.8,
          dx: (Math.random() - 0.5) * 0.2,
          dy: (Math.random() - 0.5) * 0.2,
        });
      }
    }

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function updateStars() {
      stars.forEach((star) => {
        star.x += star.dx;
        star.y += star.dy;

        if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
      });
    }

    function animate() {
      drawStars();
      updateStars();
      requestAnimationFrame(animate);
    }

    initStars();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="min-h-screen relative bg-[#0d0221] text-slate-100">
    {/* Aurora background */}
    <div className="fixed inset-0 bg-[linear-gradient(135deg,rgba(173,0,255,0.4)_20%,rgba(0,150,255,0.35)_50%,rgba(255,0,150,0.35)_80%)] blur-[120px] animate-[aurora_10s_infinite_alternate_ease-in-out] z-0" />
    <canvas ref={canvasRef} className="fixed inset-0 z-0" />


      {/* Main Content */}
      <div className="relative z-10">
        <Header navItems={navItems} />
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Hero />
          <About />
          <ProjectsSlider items={projects} />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>

      {/* Aurora animation keyframes */}
      <style>{`
        @keyframes aurora {
          0% { transform: translate(-5%, -5%) rotate(0deg); }
          50% { transform: translate(5%, 5%) rotate(2deg); }
          100% { transform: translate(-3%, -3%) rotate(-2deg); }
        }
      `}</style>
    </div>
  );
}
