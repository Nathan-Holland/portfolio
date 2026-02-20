"use client";

import { useState, useEffect } from "react";

export default function GridOverlay() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle with "G" key
      if (e.key === "g" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        const tag = (e.target as HTMLElement).tagName;
        if (tag === "INPUT" || tag === "TEXTAREA") return;
        setVisible((v) => !v);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" style={{ padding: "0 20px" }}>
      <div className="mx-auto grid h-full grid-cols-12" style={{ gap: "32px" }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="h-full"
            style={{ background: "rgba(255, 0, 0, 0.07)" }}
          >
            <div
              className="flex h-full items-start justify-center pt-2 text-[10px] font-mono"
              style={{ color: "rgba(255, 0, 0, 0.35)" }}
            >
              {i + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
