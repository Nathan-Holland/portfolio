"use client";

import FadeIn from "./FadeIn";

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
  index = 0,
}: ProjectCardProps) {
  return (
    <FadeIn delay={index * 0.1} direction="up">
      <section className="group px-5 mb-4 cursor-pointer">
        {/* Image area */}
        <div className="w-full rounded-sm bg-offwhite aspect-[16/9] overflow-hidden">
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

        {/* Title + Tags row */}
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
    </FadeIn>
  );
}
