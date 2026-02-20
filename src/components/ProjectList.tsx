"use client";

import { useRef, useCallback, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import ProjectRow from "@/components/ProjectRow";

interface Project {
  title: string;
  tags: string[];
  year: string;
  image?: string;
}

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const currentSlideRef = useRef<HTMLDivElement>(null);
  const nextSlideRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef<number>(-1);
  const isVisibleRef = useRef(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  // Smooth cursor-follow loop
  useEffect(() => {
    const container = imageContainerRef.current;
    if (!container) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    let currentX = 0;
    let currentY = 0;

    const animate = () => {
      if (isVisibleRef.current) {
        currentX = lerp(currentX, mousePos.current.x, 0.15);
        currentY = lerp(currentY, mousePos.current.y, 0.12);
        container.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!listRef.current) return;
    const rect = listRef.current.getBoundingClientRect();
    // Offset so the image sits to the right and slightly above cursor
    mousePos.current.x = e.clientX - rect.left - 180;
    mousePos.current.y = e.clientY - rect.top - 130;
  }, []);

  const handleRowEnter = useCallback((index: number) => {
    if (!imageContainerRef.current || !currentSlideRef.current || !nextSlideRef.current) return;
    if (index === activeIndexRef.current) return;

    const prevIndex = activeIndexRef.current;
    activeIndexRef.current = index;

    const project = projects[index];
    const container = imageContainerRef.current;
    const current = currentSlideRef.current;
    const next = nextSlideRef.current;

    // Direction: +1 = moving down the list, -1 = moving up
    const direction = prevIndex === -1 ? 1 : index > prevIndex ? 1 : -1;

    if (!isVisibleRef.current) {
      // First hover — show container, set first image
      isVisibleRef.current = true;
      setSlideContent(current, project);

      gsap.set(next, { opacity: 0 });
      gsap.fromTo(
        container,
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
      );
      gsap.fromTo(
        current,
        { y: direction * 100 + "%" },
        { y: "0%", duration: 0.5, ease: "power3.out" }
      );
    } else {
      // Switching rows — simultaneous slide: old out, new in
      // Load new image into the "next" slide
      setSlideContent(next, project);

      // Kill any running slide tweens
      gsap.killTweensOf(current);
      gsap.killTweensOf(next);

      // Position new slide at the entry edge
      gsap.set(next, { y: direction * 100 + "%", opacity: 1 });
      gsap.set(current, { y: "0%" });

      // Slide both simultaneously
      gsap.to(current, {
        y: direction * -100 + "%",
        duration: 0.5,
        ease: "power3.inOut",
      });

      gsap.to(next, {
        y: "0%",
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: () => {
          // Swap: copy next content into current, reset next
          setSlideContent(current, project);
          gsap.set(current, { y: "0%", opacity: 1 });
          gsap.set(next, { opacity: 0 });
        },
      });
    }
  }, [projects]);

  const handleListLeave = useCallback(() => {
    if (!imageContainerRef.current) return;

    gsap.to(imageContainerRef.current, {
      opacity: 0,
      scale: 0.92,
      duration: 0.35,
      ease: "power2.in",
      onComplete: () => {
        isVisibleRef.current = false;
        activeIndexRef.current = -1;
      },
    });
  }, []);

  return (
    <div
      ref={listRef}
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleListLeave}
    >
      {/* Cursor-attached floating image */}
      <div
        ref={imageContainerRef}
        className="pointer-events-none absolute left-0 top-0 z-10 overflow-hidden rounded-md"
        style={{
          width: 360,
          height: 240,
          opacity: 0,
          willChange: "transform",
        }}
      >
        {/* Two layers for seamless crossfade/slide */}
        <div
          ref={currentSlideRef}
          className="absolute inset-0"
          style={{ willChange: "transform" }}
        />
        <div
          ref={nextSlideRef}
          className="absolute inset-0"
          style={{ willChange: "transform", opacity: 0 }}
        />
      </div>

      {/* Project rows */}
      {projects.map((project, i) => (
        <div key={project.title} data-row>
          <ProjectRow
            title={project.title}
            tags={project.tags}
            year={project.year}
            index={i}
            onMouseEnter={() => handleRowEnter(i)}
          />
        </div>
      ))}

      {/* Bottom border for last row */}
      <div className="border-t border-black/[0.06]" />
    </div>
  );
}

function setSlideContent(el: HTMLDivElement, project: Project) {
  if (project.image) {
    el.innerHTML = `<img src="${project.image}" alt="${project.title}" class="h-full w-full object-cover" />`;
  } else {
    el.innerHTML = `<div class="flex h-full w-full items-center justify-center bg-offwhite"><span class="text-sm text-muted">${project.title}</span></div>`;
  }
}
