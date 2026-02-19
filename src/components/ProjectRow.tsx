"use client";

import FadeIn from "./FadeIn";

interface ProjectRowProps {
  title: string;
  tags: string[];
  year: string;
  image?: string;
  index: number;
}

export default function ProjectRow({
  title,
  tags,
  year,
  image,
  index,
}: ProjectRowProps) {
  return (
    <FadeIn delay={index * 0.08} direction="up">
      <a
        href="#"
        className="group grid grid-cols-[1fr_1.2fr_1fr] items-start gap-8 border-t border-black/[0.06] px-5 py-8 transition-colors hover:bg-offwhite/50"
      >
        {/* Title */}
        <h3 className="text-xl font-normal tracking-tight">{title}</h3>

        {/* Image */}
        <div className="aspect-[16/9] w-full max-w-[380px] overflow-hidden rounded-sm bg-offwhite">
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="h-full w-full transition-colors duration-300 group-hover:bg-black/[0.04]" />
          )}
        </div>

        {/* Tags + Year + CTA */}
        <div className="flex flex-col justify-between self-stretch">
          <div className="flex items-start justify-between">
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
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
              {year}
            </span>
          </div>

          <span className="mt-auto text-sm tracking-wide text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            [ View case study ]
          </span>
        </div>
      </a>
    </FadeIn>
  );
}
