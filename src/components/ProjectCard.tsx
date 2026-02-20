"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

interface ProjectCardProps {
  title: string;
  tags: string[];
  image?: string;
  index?: number;
}

export default function ProjectCard({
  title,
  tags,
  image,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!cardRef.current) return;

    gsap.from(cardRef.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    if (imageRef.current) {
      gsap.from(imageRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 1.2,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }
  }, { scope: cardRef });

  return (
    <section ref={cardRef} className="group px-5 mb-4 cursor-pointer">
      <div
        ref={imageRef}
        className="w-full rounded-sm bg-offwhite aspect-[16/9] overflow-hidden"
        style={{ clipPath: "inset(0% 0% 0% 0%)" }}
      >
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="h-full w-full transition-colors duration-500 group-hover:bg-black/[0.03]" />
        )}
      </div>

      <div className="mt-4 flex items-baseline justify-between">
        <h2 className="text-xl font-normal tracking-tight transition-opacity duration-300 group-hover:opacity-60">
          {title}
        </h2>
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
      </div>
    </section>
  );
}
