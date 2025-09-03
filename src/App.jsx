/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from "react";
import { Moon, Sun, Github, Linkedin, Mail, Phone, ArrowLeft, ArrowRight, ExternalLink, Download, ChevronRight } from "lucide-react";

// =====================
// Helper: Theme toggler
// =====================
function useTheme() {
  const [theme, setTheme] = useState("system"); // "light" | "dark" | "system"

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const apply = (t) => {
      if (t === "dark" || (t === "system" && media.matches)) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    apply(theme);
    localStorage.setItem("theme", theme);

    const onChange = () => theme === "system" && apply("system");
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [theme]);

  return { theme, setTheme };
}

// =====================
// Basic Button
// =====================
const Button = ({ as: Comp = "button", className = "", children, ...props }) => (
  <Comp
    className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 ${className}`}
    {...props}
  >
    {children}
  </Comp>
);

// =====================
// Layout Shell
// =====================
export default function PortfolioSite() {
  const { theme, setTheme } = useTheme();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const projects = useMemo(
    () => [
      {
        title: "E‑Commerce Fashion Store",
        desc: "Responsive multi‑vendor store with dashboard, cart, and Stripe checkout.",
        tech: ["React", "Tailwind", "Node", "Stripe"],
        img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop",
        url: "#",
        repo: "#",
      },
      {
        title: "PWA Task Manager",
        desc: "Offline‑first to‑do app with service workers and IndexedDB sync.",
        tech: ["Vite", "PWA", "IndexedDB"],
        img: "https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?q=80&w=1600&auto=format&fit=crop",
        url: "#",
        repo: "#",
      },
      {
        title: "Portfolio Starter Kit",
        desc: "Reusable components, theme switch, and motion presets.",
        tech: ["React", "Tailwind"],
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
        url: "#",
        repo: "#",
      },
      {
        title: "Analytics Dashboard",
        desc: "Charts, filters, and real‑time updates via websockets.",
        tech: ["Next.js", "Tailwind", "Socket.io"],
        img: "https://images.unsplash.com/photo-1551281044-8b67ae30e542?q=80&w=1600&auto=format&fit=crop",
        url: "#",
        repo: "#",
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
      <Header navItems={navItems} theme={theme} setTheme={setTheme} />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <ProjectsSlider items={projects} />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

// =====================
// Header with Theme Toggle
// =====================
function Header({ navItems, theme, setTheme }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-slate-800 dark:bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-lg font-bold">
            <span className="inline-grid h-8 w-8 place-content-center rounded-xl bg-gradient-to-br from-primary-500 to-indigo-500 text-white dark:from-primary-400 dark:to-indigo-400">ES</span>
            <span className="hidden sm:inline">edesiri.dev</span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-sm font-medium text-slate-700 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeMenu theme={theme} setTheme={setTheme} />
            <button onClick={() => setOpen((v) => !v)} className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 md:hidden dark:border-slate-800">
              <span className="sr-only">Menu</span>
              <ChevronRight className={`h-5 w-5 transition ${open ? "rotate-90" : "-rotate-90"}`} />
            </button>
          </div>
        </div>

        {open && (
          <div className="grid gap-2 pb-4 md:hidden">
            {navItems.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-900" onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

function ThemeMenu({ theme, setTheme }) {
  return (
    <div className="relative">
      <div className="flex items-center gap-2 rounded-2xl border border-slate-200/80 p-1 dark:border-slate-800">
        <button
          onClick={() => setTheme("light")}
          aria-pressed={theme === "light"}
          className={`inline-flex h-8 items-center gap-1 rounded-xl px-2 text-xs font-medium transition ${theme === "light" ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900" : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"}`}
        >
          <Sun className="h-4 w-4" /> Light
        </button>
        <button
          onClick={() => setTheme("dark")}
          aria-pressed={theme === "dark"}
          className={`inline-flex h-8 items-center gap-1 rounded-xl px-2 text-xs font-medium transition ${theme === "dark" ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900" : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"}`}
        >
          <Moon className="h-4 w-4" /> Dark
        </button>
        <button
          onClick={() => setTheme("system")}
          aria-pressed={theme === "system"}
          className={`hidden sm:inline-flex h-8 items-center gap-1 rounded-xl px-2 text-xs font-medium transition ${theme === "system" ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900" : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"}`}
        >
          System
        </button>
      </div>
    </div>
  );
}

// =====================
// Sections
// =====================
function Section({ id, title, eyebrow, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 ${className}`}>
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow && <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">{eyebrow}</p>}
        {title && <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>}
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function Hero() {
  return (
    <Section id="home" className="pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Hi, I’m <span className="bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent dark:from-primary-400 dark:to-indigo-400">Edesiri</span><br />
            Front‑End Developer
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            I craft responsive, accessible interfaces with delightful micro‑interactions. I love Tailwind, clean UI, and building fast experiences.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button className="bg-slate-900 text-white hover:opacity-90 dark:bg-white dark:text-slate-900" as="a" href="#projects">
              <ExternalLink className="h-4 w-4" /> View Projects
            </Button>
            <Button className="border border-slate-300 bg-white hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800" as="a" href="#contact">
              <Mail className="h-4 w-4" /> Contact Me
            </Button>
            <Button className="border border-slate-300 bg-white hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900" as="a" href="#" download>
              <Download className="h-4 w-4" /> Download CV
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4 lg:justify-start">
            <a href="#" className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"><Github className="h-4 w-4" /> Github</a>
            <a href="#" className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            <a href="tel:+234000000000" className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"><Phone className="h-4 w-4" /> +234 000 000 0000</a>
          </div>
        </div>
        <div>
          <div className="relative mx-auto aspect-square w-full max-w-[480px] overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200 dark:ring-slate-800">
            <img alt="Developer workspace" src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop" className="h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary-500/10 via-transparent to-indigo-500/10 dark:from-primary-400/10 dark:to-indigo-400/10" />
          </div>
        </div>
      </div>
    </Section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="mx-auto max-w-4xl text-center text-slate-700 dark:text-slate-300">
        <p>
          I’m a web designer turned front‑end engineer with a focus on usability and performance. I specialize in HTML5, CSS, JavaScript, Tailwind, and I’m currently learning back‑end development.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { k: "Experience", v: "3+ years" },
          { k: "Projects", v: "20+ shipped" },
          { k: "Clients", v: "10+ happy" },
        ].map((stat) => (
          <div key={stat.k} className="rounded-2xl border border-slate-200 p-6 text-center shadow-sm dark:border-slate-800">
            <div className="text-3xl font-bold">{stat.v}</div>
            <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">{stat.k}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Responsive Design",
    "Accessibility (a11y)",
    "Git & GitHub",
    "PWAs",
  ];
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I use">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {skills.map((s) => (
          <div key={s} className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <span className="text-sm font-semibold">{s}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

// =====================
// Projects Slider (Carousel)
// =====================
function ProjectsSlider({ items }) {
  const [index, setIndex] = useState(0);
  const count = items.length;

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  // auto-play (optional)
  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [count]);

  return (
    <Section id="projects" eyebrow="Work" title="Featured projects">
      <div className="relative">
        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm dark:border-slate-800">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
            {items.map((p, i) => (
              <article key={p.title} className="min-w-full">
                <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-2">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-2xl font-bold">{p.title}</h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-300">{p.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-xs font-medium dark:border-slate-800">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex gap-3">
                      <Button as="a" href={p.url} className="bg-slate-900 text-white hover:opacity-90 dark:bg-white dark:text-slate-900">
                        <ExternalLink className="h-4 w-4" /> Live Demo
                      </Button>
                      <Button as="a" href={p.repo} className="border border-slate-300 bg-white hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900">
                        <Github className="h-4 w-4" /> Code
                      </Button>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800">
                      <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-4 flex items-center justify-between">
          <button onClick={prev} className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 transition hover:bg-slate-50 focus:outline-none focus-visible:ring dark:border-slate-800 dark:hover:bg-slate-900" aria-label="Previous slide">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-6 rounded-full transition ${index === i ? "bg-slate-900 dark:bg-white" : "bg-slate-300 dark:bg-slate-700"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 transition hover:bg-slate-50 focus:outline-none focus-visible:ring dark:border-slate-800 dark:hover:bg-slate-900" aria-label="Next slide">
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </Section>
  );
}

function Experience() {
  const jobs = [
    {
      role: "Front‑End Developer (Freelance)",
      org: "Self‑Employed",
      period: "2023 — Present",
      bullets: [
        "Built responsive landing pages and e‑commerce UIs using Tailwind.",
        "Improved Lighthouse performance scores to 90+ across projects.",
      ],
    },
    {
      role: "Web Designer (Intern)",
      org: "Creative Studio",
      period: "2022 — 2023",
      bullets: [
        "Designed component libraries and design tokens for consistency.",
        "Collaborated with devs to translate Figma to production‑ready code.",
      ],
    },
  ];
  return (
    <Section id="experience" eyebrow="Experience" title="Where I’ve worked">
      <ol className="relative mx-auto max-w-3xl border-s-l border-slate-200 ps-6 dark:border-slate-800">
        {jobs.map((j, idx) => (
          <li key={idx} className="mb-10 ms-6">
            <span className="absolute -start-3 mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-white text-xs dark:border-slate-800 dark:bg-slate-900">{idx + 1}</span>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">{j.role}</h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">{j.period}</span>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300">{j.org}</div>
              <ul className="mt-3 list-disc space-y-1 ps-5 text-sm text-slate-700 dark:text-slate-300">
                {j.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s build something great">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        {/* Modern Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur-md transition hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/80"
        >
          <h3 className="mb-6 text-xl font-semibold">Send me a message</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
              <input
                className="mt-2 rounded-xl border border-slate-300 bg-white/60 px-4 py-3 text-sm shadow-inner outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-400 dark:border-slate-700 dark:bg-slate-950/60"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
              <input
                type="email"
                className="mt-2 rounded-xl border border-slate-300 bg-white/60 px-4 py-3 text-sm shadow-inner outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-400 dark:border-slate-700 dark:bg-slate-950/60"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="mt-6 flex flex-col">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
            <textarea
              rows={5}
              className="mt-2 rounded-xl border border-slate-300 bg-white/60 px-4 py-3 text-sm shadow-inner outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-400 dark:border-slate-700 dark:bg-slate-950/60"
              placeholder="Tell me about your project..."
            />
          </div>
          <div className="mt-8">
            <Button
              className="w-full rounded-xl bg-gradient-to-r from-primary-600 to-indigo-600 text-white shadow-lg hover:opacity-90 focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 dark:from-primary-400 dark:to-indigo-400 dark:text-slate-900"
              type="submit"
            >
              <Mail className="h-4 w-4" /> Send Message
            </Button>
          </div>
        </form>

        {/* Contact Info Card */}
        <div className="space-y-8">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-xl dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
            <h4 className="text-lg font-semibold">Get in touch</h4>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              I’m open to freelance work, collaborations, and internship opportunities. Let’s make something amazing together.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a className="flex items-center gap-3 transition hover:text-primary-600 dark:hover:text-primary-400" href="mailto:edesiri@example.com">
                <Mail className="h-4 w-4" /> edesiri@example.com
              </a>
              <a className="flex items-center gap-3 transition hover:text-primary-600 dark:hover:text-primary-400" href="tel:+234000000000">
                <Phone className="h-4 w-4" /> +234 000 000 0000
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "GitHub", href: "#", icon: Github },
              { label: "LinkedIn", href: "#", icon: Linkedin },
              { label: "Email", href: "mailto:edesiri@example.com", icon: Mail },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/80 p-5 text-sm font-medium shadow-md transition hover:scale-105 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/80"
              >
                <s.icon className="h-5 w-5" /> {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 py-8 text-center text-sm text-slate-600 dark:border-slate-800 dark:text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Edesiri — Built with React & Tailwind
      </div>
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <a
      href="#home"
      className="fixed bottom-6 right-6 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-lg transition hover:translate-y-[-2px] dark:border-slate-800 dark:bg-slate-900"
      aria-label="Back to top"
    >
      <ArrowUpIcon />
    </a>
  );
}

function ArrowUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" {...props}>
      <path d="M12 19V6m0 0l-6 6m6-6l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ===== Tailwind color token (optional) =====
// Add to your tailwind.config.js theme.extend.colors if you want custom primary
// theme: { extend: { colors: { primary: { 50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81" } } } }

// ===== Notes =====
// 1) Ensure Tailwind is configured with darkMode: 'class'.
// 2) Place <PortfolioSite /> into your app root. The theme switch toggles the `dark` class on <html>.
// 3) Replace placeholder links, images, and copy with your own content.
