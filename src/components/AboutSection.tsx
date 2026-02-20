"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

const bioText =
  "I'm Nate, a British Designer based in Barcelona with over seven years of experience. Since 2017, I've contributed to award-winning projects like Mailboard, Viatu, and OpenFortune, crafting distinctive brand identities and intuitive, visually stunning websites.";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Label slide in from left
    gsap.from(labelRef.current, {
      x: -30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });

    // Word-by-word scrub reveal
    const words = textRef.current?.querySelectorAll(".about-word");
    if (words && words.length > 0) {
      gsap.to(words, {
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 70%",
          end: "bottom 40%",
          scrub: 1,
        },
      });
    }

    // CTA fade up
    gsap.from(ctaRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 90%",
      },
    });
  }, { scope: sectionRef });

  // Split bio text into word spans
  const words = bioText.split(" ");

  return (
    <section ref={sectionRef} id="about" className="px-5 py-24">
      <div className="flex">
        <div className="w-1/3">
          <div
            ref={labelRef}
            className="flex items-center gap-2 text-sm text-muted"
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
            <span className="text-xs font-medium uppercase tracking-[0.12em]">
              About
            </span>
          </div>
        </div>

        <div className="w-2/3">
          <p
            ref={textRef}
            className="text-[40px] font-normal leading-[1.25] tracking-tight"
          >
            {words.map((word, i) => (
              <span
                key={i}
                className="about-word inline-block mr-[0.3em]"
                style={{ opacity: 0.15 }}
              >
                {word}
              </span>
            ))}
          </p>

          <a
            ref={ctaRef}
            href="#contact"
            className="mt-10 inline-block text-sm tracking-wide text-black transition-opacity hover:opacity-60"
          >
            [ Find out more ]
          </a>
        </div>
      </div>
    </section>
  );
}
