/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import Section from "../ui/Section";
import Button from "../ui/Button";

export default function ProjectsSlider({ items }) {
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
      <h2 className="text-3xl text-center pb-10 font-bold sm:text-4xl">My Projects</h2>
        <div className="overflow-hidden rounded-3xl border border-slate-950 shadow-sm">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {items.map((p) => (
              <article key={p.title} className="min-w-full">
                <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-2">
                  {/* Text content */}
                  <div className="order-2 lg:order-1">
                    <h3 className="text-2xl font-bold">{p.title}</h3>
                    <p className="mt-2 text-slate-300">
                      {p.desc}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center rounded-full border border-slate-950 px-3 py-1 text-xs font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex gap-3">
                      <Button
                        as="a"
                        href={p.url}
                        className="bg-white text-slate-900 hover:opacity-90"
                      >
                        <ExternalLink className="h-4 w-4" /> Live Demo
                      </Button>
                      <Button
                        as="a"
                        href={p.repo}
                        className="border border-slate-700 bg-slate-900"
                      >
                        <Github className="h-4 w-4" /> Code
                      </Button>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="order-1 lg:order-2">
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-slate-800">
                      <img
                        src={p.img}
                        alt={p.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={prev}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-950 transition hover:bg-slate-900 focus:outline-none focus-visible:ring"
            aria-label="Previous slide"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-6 rounded-full transition ${
                  index === i
                    ? "bg-white"
                    : "bg-slate-700"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-950 transition hover:bg-slate-900 focus:outline-none focus-visible:ring"
            aria-label="Next slide"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </Section>
  );
}
