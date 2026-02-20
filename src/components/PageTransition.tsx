"use client";

import { motion } from "framer-motion";
import { ScrollTrigger } from "@/lib/gsap";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onAnimationComplete={() => {
        ScrollTrigger.refresh();
      }}
    >
      {children}
    </motion.div>
  );
}
