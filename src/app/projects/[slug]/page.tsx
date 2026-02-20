"use client";

import { use, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─────────────────────────── Data ─────────────────────────── */

interface ProjectData {
  title: string;
  subtitle: string;
  year: string;
  tags: string[];
  overview: string;
  challenge: string;
  approach: string;
  solution: string;
  results: string;
  stats: { label: string; value: number; suffix: string }[];
  testimonial: { quote: string; author: string; role: string };
  nextProject: { title: string; slug: string; tags: string[] };
}

const projects: Record<string, ProjectData> = {
  crunch: {
    title: "Crunch",
    subtitle: "Reimagining financial analytics for the modern enterprise",
    year: "2025",
    tags: ["Branding", "UI Design"],
    overview:
      "Crunch needed a complete brand overhaul and digital platform redesign to position themselves as the leading financial analytics tool for growing startups. The project spanned brand strategy, visual identity, and a full product design system.",
    challenge:
      "The existing brand felt dated and failed to communicate the sophistication of the product. Users reported confusion navigating complex data sets, and the visual language didn't differentiate Crunch from established competitors in the space.",
    approach:
      "We started with extensive user research and competitive analysis. Through collaborative workshops, we defined a brand personality that balanced analytical precision with approachable warmth. The design system was built component-first, ensuring consistency at scale.",
    solution:
      "A refined visual identity built on clarity and confidence paired with a redesigned product experience that transforms complex financial data into intuitive actionable insights for teams of every size.",
    results:
      "The redesign drove measurable improvements across every key metric, validating the strategic approach and design decisions made throughout the project.",
    stats: [
      { label: "Timeline", value: 8, suffix: " wks" },
      { label: "Deliverables", value: 24, suffix: "+" },
      { label: "Team Size", value: 6, suffix: "" },
      { label: "Satisfaction", value: 98, suffix: "%" },
    ],
    testimonial: {
      quote:
        "Nathan transformed our entire digital presence. The attention to detail and strategic thinking elevated Crunch beyond what we imagined possible.",
      author: "Sarah Chen",
      role: "CEO, Crunch",
    },
    nextProject: { title: "Wedge", slug: "wedge", tags: ["App Design"] },
  },
  wedge: {
    title: "Wedge",
    subtitle: "A fitness tracking app designed for the modern athlete",
    year: "2026",
    tags: ["App Design"],
    overview:
      "Wedge approached us to design a fitness tracking application that stands apart from the crowded market. The goal was to create an experience that felt personal, motivating, and seamlessly integrated into daily routines.",
    challenge:
      "Most fitness apps overwhelm users with data while failing to provide meaningful motivation. Wedge needed to balance comprehensive tracking capabilities with an interface that felt inviting rather than intimidating.",
    approach:
      "We conducted interviews with athletes across disciplines, mapping their daily workflows and identifying friction points. The design process prioritised progressive disclosure, revealing complexity only when users sought it.",
    solution:
      "An app experience that adapts to the user presenting relevant insights at the right moment while maintaining a clean focused interface that celebrates personal progress over raw metrics.",
    results:
      "Since launch, Wedge has seen exceptional user engagement and retention metrics that far exceed industry benchmarks for fitness applications.",
    stats: [
      { label: "Timeline", value: 12, suffix: " wks" },
      { label: "Screens", value: 48, suffix: "+" },
      { label: "Team Size", value: 4, suffix: "" },
      { label: "Retention", value: 89, suffix: "%" },
    ],
    testimonial: {
      quote:
        "The design speaks for itself. Users tell us Wedge feels like it was made specifically for them, and that is exactly what we wanted.",
      author: "Marcus Rivera",
      role: "Founder, Wedge",
    },
    nextProject: { title: "Crunch", slug: "crunch", tags: ["Branding", "UI Design"] },
  },
};

/* ─────────────────────────── Globe Icon ─────────────────────────── */

function GlobeIcon() {
  return (
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
  );
}

/* ─────────────────────────── Section Label ─────────────────────────── */

function SectionLabel({
  children,
  ref,
}: {
  children: string;
  ref?: React.Ref<HTMLDivElement>;
}) {
  return (
    <div ref={ref} className="flex items-center gap-2 text-muted">
      <GlobeIcon />
      <span className="text-[11px] font-medium uppercase tracking-[0.14em]">
        {children}
      </span>
    </div>
  );
}

/* ─────────────────────────── Page ─────────────────────────── */

export default function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = projects[slug];
  if (!project) notFound();

  const pageRef = useRef<HTMLElement>(null);

  // Hero
  const heroLabelRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroTagsRef = useRef<HTMLDivElement>(null);
  const heroYearRef = useRef<HTMLSpanElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  // Overview
  const overviewRef = useRef<HTMLElement>(null);
  const overviewLabelRef = useRef<HTMLDivElement>(null);
  const overviewTextRef = useRef<HTMLDivElement>(null);

  // Stats
  const statsRef = useRef<HTMLElement>(null);
  const statBlockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const statValueRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Challenge
  const challengeRef = useRef<HTMLElement>(null);
  const challengeLabelRef = useRef<HTMLDivElement>(null);
  const challengeColRef = useRef<HTMLDivElement>(null);
  const approachColRef = useRef<HTMLDivElement>(null);
  const challengeImageRef = useRef<HTMLDivElement>(null);

  // Gallery
  const galleryImg1Ref = useRef<HTMLDivElement>(null);
  const galleryImg2Ref = useRef<HTMLDivElement>(null);
  const galleryImg3Ref = useRef<HTMLDivElement>(null);
  const galleryImg3InnerRef = useRef<HTMLDivElement>(null);
  const galleryImg4Ref = useRef<HTMLDivElement>(null);
  const galleryImg5Ref = useRef<HTMLDivElement>(null);

  // Solution
  const solutionRef = useRef<HTMLElement>(null);
  const solutionLabelRef = useRef<HTMLDivElement>(null);
  const solutionTextRef = useRef<HTMLParagraphElement>(null);
  const solutionImg1Ref = useRef<HTMLDivElement>(null);
  const solutionImg2Ref = useRef<HTMLDivElement>(null);

  // Results
  const resultsRef = useRef<HTMLElement>(null);
  const resultsLabelRef = useRef<HTMLDivElement>(null);
  const resultsTextRef = useRef<HTMLDivElement>(null);
  const metricRefs = useRef<(HTMLDivElement | null)[]>([]);
  const metricValueRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const testimonialRef = useRef<HTMLDivElement>(null);

  // Next Project
  const nextRef = useRef<HTMLElement>(null);
  const nextLabelRef = useRef<HTMLDivElement>(null);
  const nextTitleRef = useRef<HTMLHeadingElement>(null);
  const nextImageRef = useRef<HTMLDivElement>(null);

  /* ─────────────── GSAP Animations ─────────────── */

  useGSAP(
    () => {
      if (!pageRef.current) return;

      // ── Hero entrance ──
      const heroTl = gsap.timeline({ defaults: { ease: "power2.out" } });
      heroTl
        .from(heroLabelRef.current, { x: -30, duration: 0.8 }, 0.1)
        .from(heroTitleRef.current, { y: 40, duration: 0.9 }, 0.2)
        .from(heroTagsRef.current, { y: 20, duration: 0.7 }, 0.35)
        .from(heroYearRef.current, { y: 20, duration: 0.7 }, 0.45);

      gsap.from(heroImageRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 1.4,
        ease: "power4.inOut",
        delay: 0.3,
      });

      // ── Overview ──
      gsap.from(overviewLabelRef.current, {
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: overviewRef.current,
          start: "top 75%",
        },
      });
      gsap.from(overviewTextRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: overviewRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // ── Stats counters ──
      statBlockRefs.current.forEach((ref) => {
        if (!ref) return;
        gsap.from(ref, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });

      project.stats.forEach((stat, i) => {
        const el = statValueRefs.current[i];
        if (!el) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + stat.suffix;
          },
        });
      });

      // ── Challenge & Approach ──
      gsap.from(challengeLabelRef.current, {
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: challengeRef.current, start: "top 75%" },
      });
      gsap.from(
        [challengeColRef.current, approachColRef.current],
        {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: challengeRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
      gsap.from(challengeImageRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 1.2,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: challengeImageRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // ── Image Gallery ──
      // Composition A — staggered pair
      [galleryImg1Ref, galleryImg2Ref].forEach((ref, i) => {
        gsap.from(ref.current, {
          clipPath: "inset(100% 0% 0% 0%)",
          duration: 1.2,
          ease: "power4.inOut",
          delay: i * 0.15,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // Composition B — full-bleed parallax
      gsap.from(galleryImg3Ref.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 1.2,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: galleryImg3Ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
      gsap.fromTo(
        galleryImg3InnerRef.current,
        { y: -60 },
        {
          y: 60,
          ease: "none",
          scrollTrigger: {
            trigger: galleryImg3Ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      // Composition C — offset pair
      [galleryImg4Ref, galleryImg5Ref].forEach((ref) => {
        gsap.from(ref.current, {
          clipPath: "inset(100% 0% 0% 0%)",
          duration: 1.2,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // ── Solution ──
      gsap.from(solutionLabelRef.current, {
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: solutionRef.current, start: "top 75%" },
      });

      const solutionWords =
        solutionTextRef.current?.querySelectorAll(".solution-word");
      if (solutionWords && solutionWords.length > 0) {
        gsap.to(solutionWords, {
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: solutionTextRef.current,
            start: "top 70%",
            end: "bottom 50%",
            scrub: 1,
          },
        });
      }

      [solutionImg1Ref, solutionImg2Ref].forEach((ref, i) => {
        gsap.from(ref.current, {
          clipPath: "inset(100% 0% 0% 0%)",
          duration: 1.2,
          ease: "power4.inOut",
          delay: i * 0.15,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // ── Results ──
      gsap.from(resultsLabelRef.current, {
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: resultsRef.current, start: "top 75%" },
      });
      gsap.from(resultsTextRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: resultsRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      metricRefs.current.forEach((ref, i) => {
        if (!ref) return;
        gsap.from(ref, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: resultsRef.current,
            start: "top 65%",
            toggleActions: "play none none none",
          },
        });
      });

      const resultMetrics = [
        { value: 340, suffix: "%" },
        { value: 52, suffix: "%" },
        { value: 4.9, suffix: "/5" },
      ];
      resultMetrics.forEach((metric, i) => {
        const el = metricValueRefs.current[i];
        if (!el) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: metric.value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            const rounded =
              metric.value % 1 !== 0
                ? obj.val.toFixed(1)
                : Math.round(obj.val).toString();
            el.textContent = rounded + metric.suffix;
          },
        });
      });

      gsap.from(testimonialRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: testimonialRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // ── Next Project ──
      gsap.from(nextLabelRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: nextRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      gsap.from(nextTitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: nextRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
      gsap.from(nextImageRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 1.2,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: nextImageRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: pageRef }
  );

  /* ─────────────── Solution word split ─────────────── */
  const solutionWords = project.solution.split(" ");

  /* ─────────────── Render ─────────────── */

  return (
    <main ref={pageRef} className="min-h-screen">
      <Navbar activePage="projects" />

      {/* ═══════════════ HERO ═══════════════ */}
      <section style={{ padding: "0 20px" }} className="pb-10 pt-24">
        <div className="flex">
          {/* Left label */}
          <div className="w-1/2">
            <div
              ref={heroLabelRef}
              className="flex items-center gap-2 text-muted will-change-transform"
            >
              <GlobeIcon />
              <span className="text-[11px] font-medium uppercase tracking-[0.14em]">
                Case Study
              </span>
            </div>
          </div>

          {/* Right content */}
          <div className="w-1/2">
            <h1
              ref={heroTitleRef}
              className="text-[64px] font-normal leading-[1.1] tracking-tight will-change-transform"
            >
              {project.title}
            </h1>

            <div ref={heroTagsRef} className="mt-5 flex gap-2 will-change-transform">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-tag-bg px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            <span
              ref={heroYearRef}
              className="mt-4 block text-base text-muted will-change-transform"
            >
              {project.year}
            </span>
          </div>
        </div>

        {/* Hero image */}
        <div
          ref={heroImageRef}
          className="mt-12 aspect-[16/9] w-full rounded-sm bg-offwhite"
          style={{ clipPath: "inset(0% 0% 0% 0%)" }}
        />
      </section>

      {/* ═══════════════ OVERVIEW ═══════════════ */}
      <section ref={overviewRef} style={{ padding: "120px 20px" }}>
        <div className="grid grid-cols-12" style={{ gap: "32px" }}>
          <div className="col-span-3">
            <SectionLabel ref={overviewLabelRef}>Overview</SectionLabel>
          </div>
          <div ref={overviewTextRef} className="col-start-5 col-end-10">
            <p className="text-[22px] font-normal leading-[1.5] tracking-tight">
              {project.overview}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ STATS BAR ═══════════════ */}
      <section
        ref={statsRef}
        className="border-t border-b border-black/[0.06]"
        style={{ padding: "64px 20px" }}
      >
        <div className="grid grid-cols-12" style={{ gap: "32px" }}>
          {project.stats.map((stat, i) => (
            <div
              key={stat.label}
              className="col-span-3"
              ref={(el) => {
                statBlockRefs.current[i] = el;
              }}
            >
              <span
                ref={(el) => {
                  statValueRefs.current[i] = el;
                }}
                className="block text-[48px] font-normal tracking-tight"
              >
                0{stat.suffix}
              </span>
              <span className="mt-2 block text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ CHALLENGE & APPROACH ═══════════════ */}
      <section ref={challengeRef} style={{ padding: "120px 20px" }}>
        <div className="grid grid-cols-12" style={{ gap: "32px" }}>
          <div className="col-span-3">
            <SectionLabel ref={challengeLabelRef}>Challenge</SectionLabel>
          </div>
          <div className="col-start-5 col-end-13">
            <div className="grid grid-cols-2" style={{ gap: "32px" }}>
              <div ref={challengeColRef}>
                <span className="mb-4 block text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                  The Challenge
                </span>
                <p className="text-base leading-[1.7] text-muted">
                  {project.challenge}
                </p>
              </div>
              <div ref={approachColRef}>
                <span className="mb-4 block text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                  The Approach
                </span>
                <p className="text-base leading-[1.7] text-muted">
                  {project.approach}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting image */}
        <div
          ref={challengeImageRef}
          className="mt-20 aspect-[16/9] w-full rounded-sm bg-offwhite"
          style={{ clipPath: "inset(0% 0% 0% 0%)" }}
        />
      </section>

      {/* ═══════════════ IMAGE GALLERY ═══════════════ */}
      <section style={{ padding: "80px 20px" }}>
        {/* Composition A — asymmetric pair */}
        <div
          className="grid grid-cols-12 items-end"
          style={{ gap: "32px" }}
        >
          <div
            ref={galleryImg1Ref}
            className="col-span-7 aspect-[16/9] rounded-sm bg-offwhite"
            style={{ clipPath: "inset(0% 0% 0% 0%)" }}
          />
          <div
            ref={galleryImg2Ref}
            className="col-span-5 aspect-[3/4] rounded-sm bg-offwhite"
            style={{ clipPath: "inset(0% 0% 0% 0%)" }}
          />
        </div>

        {/* Composition B — full-bleed parallax */}
        <div
          ref={galleryImg3Ref}
          className="-mx-5 mt-8 overflow-hidden"
          style={{ clipPath: "inset(0% 0% 0% 0%)" }}
        >
          <div
            ref={galleryImg3InnerRef}
            className="aspect-[16/9] bg-offwhite will-change-transform"
            style={{ transform: "scale(1.15)" }}
          />
        </div>

        {/* Composition C — offset pair */}
        <div className="mt-8 grid grid-cols-12" style={{ gap: "32px" }}>
          <div
            ref={galleryImg4Ref}
            className="col-start-1 col-end-6 aspect-[1/1] rounded-sm bg-offwhite"
            style={{ clipPath: "inset(0% 0% 0% 0%)" }}
          />
          <div
            ref={galleryImg5Ref}
            className="col-start-7 col-end-13 mt-24 aspect-[16/9] rounded-sm bg-offwhite"
            style={{ clipPath: "inset(0% 0% 0% 0%)" }}
          />
        </div>
      </section>

      {/* ═══════════════ SOLUTION ═══════════════ */}
      <section ref={solutionRef} style={{ padding: "120px 20px" }}>
        <div className="grid grid-cols-12" style={{ gap: "32px" }}>
          <div className="col-span-3">
            <SectionLabel ref={solutionLabelRef}>Solution</SectionLabel>
          </div>
          <div className="col-start-5 col-end-11">
            <p
              ref={solutionTextRef}
              className="text-[32px] font-normal leading-[1.35] tracking-tight"
            >
              {solutionWords.map((word, i) => (
                <span
                  key={i}
                  className="solution-word mr-[0.3em] inline-block"
                  style={{ opacity: 0.15 }}
                >
                  {word}
                </span>
              ))}
            </p>
          </div>
        </div>

        {/* Inline images */}
        <div className="mt-20 grid grid-cols-12" style={{ gap: "32px" }}>
          <div
            ref={solutionImg1Ref}
            className="col-start-2 col-end-7 aspect-[1/1] rounded-sm bg-offwhite"
            style={{ clipPath: "inset(0% 0% 0% 0%)" }}
          />
          <div
            ref={solutionImg2Ref}
            className="col-start-7 col-end-12 aspect-[1/1] rounded-sm bg-offwhite"
            style={{ clipPath: "inset(0% 0% 0% 0%)" }}
          />
        </div>
      </section>

      {/* ═══════════════ RESULTS ═══════════════ */}
      <section ref={resultsRef} style={{ padding: "120px 20px" }}>
        <div className="grid grid-cols-12" style={{ gap: "32px" }}>
          <div className="col-span-3">
            <SectionLabel ref={resultsLabelRef}>Results</SectionLabel>
          </div>
          <div className="col-start-5 col-end-13">
            <div ref={resultsTextRef}>
              <p className="text-base leading-[1.7] text-muted">
                {project.results}
              </p>
            </div>

            {/* Metric cards */}
            <div className="mt-12 grid grid-cols-3" style={{ gap: "32px" }}>
              {[
                { value: "340%", label: "Increase in engagement" },
                { value: "52%", label: "Reduction in bounce rate" },
                { value: "4.9/5", label: "Average user rating" },
              ].map((metric, i) => (
                <div
                  key={metric.label}
                  className="border-t border-black/[0.06] pt-6"
                  ref={(el) => {
                    metricRefs.current[i] = el;
                  }}
                >
                  <span
                    ref={(el) => {
                      metricValueRefs.current[i] = el;
                    }}
                    className="block text-[48px] font-normal tracking-tight"
                  >
                    0
                  </span>
                  <span className="mt-2 block text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-32 grid grid-cols-12" style={{ gap: "32px" }}>
          <div
            ref={testimonialRef}
            className="col-start-3 col-end-11 text-center"
          >
            <span className="block text-[120px] font-normal leading-none text-black/10">
              &ldquo;
            </span>
            <p className="-mt-16 text-[28px] font-normal leading-[1.45] tracking-tight">
              {project.testimonial.quote}
            </p>
            <span className="mt-8 block text-sm font-medium">
              {project.testimonial.author}
            </span>
            <span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
              {project.testimonial.role}
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════ NEXT PROJECT ═══════════════ */}
      <section
        ref={nextRef}
        className="border-t border-black/[0.06]"
        style={{ padding: "120px 20px" }}
      >
        <div className="text-center">
          <span
            ref={nextLabelRef}
            className="block text-[11px] font-medium uppercase tracking-[0.14em] text-muted"
          >
            Next Project
          </span>

          <a
            href={`/projects/${project.nextProject.slug}`}
            className="group mt-6 inline-block"
          >
            <h2
              ref={nextTitleRef}
              className="text-[64px] font-normal leading-[1.1] tracking-tight transition-opacity duration-300 group-hover:opacity-60"
            >
              {project.nextProject.title}
            </h2>
          </a>

          <div className="mt-5 flex justify-center gap-2">
            {project.nextProject.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-tag-bg px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="mt-8 block text-2xl">→</span>
        </div>

        {/* Next project preview image */}
        <div
          ref={nextImageRef}
          className="mt-12 aspect-[16/9] w-full rounded-sm bg-offwhite"
          style={{ clipPath: "inset(0% 0% 0% 0%)" }}
        />
      </section>

      <Footer />
    </main>
  );
}
