import React, { useEffect, useMemo, useRef, useState } from "react";

// Layout
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import BackToTop from "./layout/BackToTop";
import Preloader from "./layout/Preloader";

// Sections
import Hero from "./sections/Hero";
import About from "./sections/About";
import ProjectsSlider from "./sections/ProjectsSlider";
import Contact from "./sections/Contact";

// Assets
import image1 from "./asset/proj_img1.png";
import image2 from "./asset/proj_img2.png";

export default function PortfolioSite() {
  const [loading, setLoading] = useState(true);
  const canvasRef = useRef(null);

  // ===== Preloader Timer =====
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

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
        tech: ["HTML", "CSS", "JAVASCRIPT"],
        img: image2,
        url: "https://elohor.vercel.app/",
        repo: "https://github.com/edesiri277/elohor",
      },
    ],
    []
  );

  // ===== Starfield Background Effect =====
  useEffect(() => {
    if (loading) return; // ⛔ wait until preloader is gone
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let stars = [];
    const numStars = 200;
    let animationId;

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
      animationId = requestAnimationFrame(animate);
    }

    initStars();
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [loading]);

  // ===== Preloader First =====
  if (loading) return <Preloader />;

  return (
    <div className="min-h-screen relative bg-[#0d0221] text-slate-100">
      {/* Aurora background */}
      <div className="fixed inset-0 bg-[linear-gradient(135deg,rgba(173,0,255,0.4)_20%,rgba(0,150,255,0.35)_50%,rgba(255,0,150,0.35)_80%)] blur-[120px] animate-[aurora_10s_infinite_alternate_ease-in-out] z-0" />

      {/* Starfield */}
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

      {/* Aurora animation */}
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
