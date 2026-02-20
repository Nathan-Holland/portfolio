"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "@/lib/gsap";
import Logo from "./Logo";

const navItems = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Curation", href: "/#curation" },
];

interface NavbarProps {
  activePage?: string;
}

export default function Navbar({ activePage }: NavbarProps) {
  const navRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!navRef.current) return;

    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "+=100",
      onUpdate: (self) => {
        if (!navRef.current) return;
        const p = self.progress;
        navRef.current.style.paddingTop = `${20 - p * 8}px`;
        navRef.current.style.paddingBottom = `${20 - p * 8}px`;
        navRef.current.style.backdropFilter = `blur(${p * 12}px)`;
        navRef.current.style.backgroundColor = `rgba(255,255,255,${p * 0.85})`;
        navRef.current.style.borderBottomColor = `rgba(0,0,0,${p * 0.06})`;
      },
    });
  }, { scope: navRef });

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-5 border-b border-transparent"
      >
        <Logo />

        <div className="flex items-center gap-[3px]">
          {navItems.map((item) => {
            const isActive = activePage === item.label.toLowerCase();
            return (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-center gap-1.5 rounded-sm px-4 py-1.5 text-[13px] tracking-wide transition-colors ${
                  isActive
                    ? "bg-black/[0.06] text-black"
                    : "bg-tag-bg text-black hover:bg-black/10"
                }`}
              >
                {item.label}
                <span className="text-[10px] text-muted">
                  {isActive ? "×" : "+"}
                </span>
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          className="flex items-center gap-2 rounded-sm bg-black px-5 py-1.5 text-[13px] tracking-wide text-white transition-opacity hover:opacity-80"
        >
          Get in touch
          <span className="text-xs">→</span>
        </a>
      </nav>
      {/* Spacer for fixed nav */}
      <div className="h-[72px]" />
    </>
  );
}
