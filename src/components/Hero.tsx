"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import TimeWidget from "./TimeWidget";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const timeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Entrance timeline
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    tl.from(timeRef.current, { y: 30, opacity: 0, duration: 0.8 }, 0.1)
      .from(headingRef.current, { y: 40, opacity: 0, duration: 0.9 }, 0.2)
      .from(subtitleRef.current, { y: 20, opacity: 0, duration: 0.7 }, 0.4)
      .from(ctaRef.current, { y: 20, opacity: 0, duration: 0.7 }, 0.5);

    // Parallax on scroll
    gsap.to(timeRef.current, {
      y: -40,
      opacity: 0.3,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.8,
      },
    });

    gsap.to(headingRef.current, {
      y: -80,
      opacity: 0,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.8,
      },
    });

    gsap.to(subtitleRef.current, {
      y: -30,
      opacity: 0,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "20% top",
        end: "bottom top",
        scrub: 0.8,
      },
    });

    gsap.to(ctaRef.current, {
      y: -20,
      opacity: 0,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "20% top",
        end: "bottom top",
        scrub: 0.8,
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="px-5 pb-20 pt-20">
      <div className="flex">
        <div ref={timeRef} className="w-1/2 will-change-transform">
          <TimeWidget />
        </div>

        <div className="w-1/2">
          <h1
            ref={headingRef}
            className="text-[64px] font-normal leading-[1.1] tracking-tight will-change-transform"
          >
            Senior Designer helping
            <br />
            brands around the{" "}
            <span className="inline-block align-middle">
              <svg
                width="52"
                height="52"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="inline -mt-2 globe-animate"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M4.93 4.93l14.14 14.14" />
                <path d="M19.07 4.93L4.93 19.07" />
              </svg>
            </span>{" "}
            globe.
          </h1>

          <p ref={subtitleRef} className="mt-10 text-base text-muted">
            Senior Designer working with Brand
          </p>

          <a
            ref={ctaRef}
            href="#about"
            className="mt-8 inline-block text-sm tracking-wide text-black transition-opacity hover:opacity-60"
          >
            [ Find out more ]
          </a>
        </div>
      </div>
    </section>
  );
}
