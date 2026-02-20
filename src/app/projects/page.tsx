"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Navbar from "@/components/Navbar";
import ProjectList from "@/components/ProjectList";

const projects = [
  { title: "Crunch", tags: ["Branding", "UI Design"], year: "2025", image: "/projects/crunch/main_img.jpg" },
  { title: "Wedge", tags: ["App Design"], year: "2026" },
  { title: "Preply", tags: ["Product Design"], year: "2025" },
  { title: "SplitMetrics", tags: ["Branding"], year: "2026" },
  { title: "Viatu", tags: ["Branding"], year: "2026" },
  { title: "OpenFortune", tags: ["Branding"], year: "2026" },
  { title: "The Despatch Company", tags: ["Branding"], year: "2026" },
  { title: "Sophic", tags: ["Branding"], year: "2026" },
];

export default function ProjectsPage() {
  const heroRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    if (!heroRef.current) return;

    // Staggered entrance timeline
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    tl.from(labelRef.current, { x: -30, opacity: 0, duration: 0.8 }, 0.1)
      .from(headingRef.current, { y: 40, opacity: 0, duration: 0.9 }, 0.2)
      .from(subtitleRef.current, { y: 20, opacity: 0, duration: 0.7 }, 0.35)
      .from(ctaRef.current, { y: 20, opacity: 0, duration: 0.7 }, 0.45);

    // Parallax on scroll
    gsap.to(headingRef.current, {
      y: -60,
      opacity: 0,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.8,
      },
    });

    gsap.to(labelRef.current, {
      y: -30,
      opacity: 0,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.8,
      },
    });

    gsap.to(subtitleRef.current, {
      y: -20,
      opacity: 0,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "20% top",
        end: "bottom top",
        scrub: 0.8,
      },
    });

    gsap.to(ctaRef.current, {
      y: -20,
      opacity: 0,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "20% top",
        end: "bottom top",
        scrub: 0.8,
      },
    });
  }, { scope: heroRef });

  return (
    <main className="min-h-screen">
      <Navbar activePage="projects" />

      {/* Hero */}
      <section ref={heroRef} className="px-5 pb-16 pt-24">
        <div className="flex">
          {/* Left label */}
          <div className="w-1/2">
            <div
              ref={labelRef}
              className="flex items-center gap-2 text-muted will-change-transform"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span className="text-[11px] font-medium uppercase tracking-[0.14em]">
                Partnering with brands
                <br />
                all around the world
              </span>
            </div>
          </div>

          {/* Right heading */}
          <div className="w-1/2">
            <h1
              ref={headingRef}
              className="text-[64px] font-normal leading-[1.1] tracking-tight will-change-transform"
            >
              Projects
            </h1>

            <p
              ref={subtitleRef}
              className="mt-8 text-base text-muted will-change-transform"
            >
              Senior Designer working with Brand
            </p>

            <a
              ref={ctaRef}
              href="#contact"
              className="mt-6 inline-block text-sm tracking-wide text-black transition-opacity hover:opacity-60 will-change-transform"
            >
              [ Find out more ]
            </a>
          </div>
        </div>
      </section>

      {/* Project List */}
      <section className="pb-20">
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}
