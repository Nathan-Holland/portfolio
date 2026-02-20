"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

interface ProjectRowProps {
  title: string;
  tags: string[];
  year: string;
  index: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function ProjectRow({
  title,
  tags,
  year,
  onMouseEnter,
  onMouseLeave,
}: ProjectRowProps) {
  const rowRef = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    if (!rowRef.current) return;

    gsap.from(rowRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: rowRef.current,
        start: "top 88%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: rowRef });

  return (
    <a
      ref={rowRef}
      href="#"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="group grid grid-cols-[1fr_1fr] items-center border-t border-black/[0.06] px-5 py-8 transition-colors hover:bg-offwhite/50"
    >
      <h3 className="text-xl font-normal tracking-tight">{title}</h3>

      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
            {year}
          </span>
          <span className="text-sm tracking-wide text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            [ View ]
          </span>
        </div>
      </div>
    </a>
  );
}
