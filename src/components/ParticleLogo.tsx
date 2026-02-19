"use client";

import { useEffect, useRef } from "react";

interface Particle {
  targetX: number;
  targetY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  update: () => void;
  draw: () => void;
}

export default function ParticleLogo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;

    const width = (canvas.width = 900);
    const height = (canvas.height = 500);

    // Settings
    const logoParticleCount = 1100;
    const logoParticleSize = 1.4;
    const logoSpacing = 2;
    const logoOpacity = 0.7;

    const bgParticleCount = 1700;
    const bgParticleSize = 1.1;
    const bgOpacity = 0.35;

    const logoShapeSize = 200;

    // Motion settings
    const driftSpeed = 0.11;
    const mouseRadius = 120;
    const mouseForce = 2;
    const springStrength = 0.019;
    const damping = 0.87;

    const mouse: { x: number | null; y: number | null } = {
      x: null,
      y: null,
    };

    const logoPath =
      "M28 0L0 28V56L28 84H0V168L28 196H84V140L140 196H168L196 168V140L168 112H196V28L168 0H112V56L56 0H28Z";

    let logoParticles: Particle[] = [];
    let bgParticles: Particle[] = [];
    let animationId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    function createLogoParticle(px: number, py: number): Particle {
      const p: Particle = {
        targetX: px,
        targetY: py,
        x: px,
        y: py,
        vx: 0,
        vy: 0,
        update() {
          if (mouse.x != null && mouse.y != null) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouseRadius && distance > 0) {
              const forceDirectionX = dx / distance;
              const forceDirectionY = dy / distance;
              const force = (mouseRadius - distance) / mouseRadius;
              this.vx -= forceDirectionX * force * mouseForce;
              this.vy -= forceDirectionY * force * mouseForce;
            }
          }
          const dx2 = this.targetX - this.x;
          const dy2 = this.targetY - this.y;
          this.vx += dx2 * springStrength;
          this.vy += dy2 * springStrength;
          this.vx += (Math.random() - 0.5) * driftSpeed;
          this.vy += (Math.random() - 0.5) * driftSpeed;
          this.vx *= damping;
          this.vy *= damping;
          this.x += this.vx;
          this.y += this.vy;
        },
        draw() {
          ctx.fillStyle = `rgba(0, 0, 0, ${logoOpacity})`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, logoParticleSize, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
        },
      };
      return p;
    }

    function createBgParticle(): Particle {
      const tx = Math.random() * width;
      const ty = Math.random() * height;
      const p: Particle = {
        targetX: tx,
        targetY: ty,
        x: tx,
        y: ty,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        update() {
          if (mouse.x != null && mouse.y != null) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouseRadius && distance > 0) {
              const forceDirectionX = dx / distance;
              const forceDirectionY = dy / distance;
              const force = (mouseRadius - distance) / mouseRadius;
              this.vx -= forceDirectionX * force * mouseForce;
              this.vy -= forceDirectionY * force * mouseForce;
            }
          }
          const dx2 = this.targetX - this.x;
          const dy2 = this.targetY - this.y;
          this.vx += dx2 * springStrength;
          this.vy += dy2 * springStrength;
          this.vx += (Math.random() - 0.5) * driftSpeed;
          this.vy += (Math.random() - 0.5) * driftSpeed;
          this.vx *= damping;
          this.vy *= damping;
          this.x += this.vx;
          this.y += this.vy;
        },
        draw() {
          ctx.fillStyle = `rgba(0, 0, 0, ${bgOpacity})`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, bgParticleSize, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
        },
      };
      return p;
    }

    function getLogoCoordinates() {
      const tempCanvas = document.createElement("canvas");
      const tempCtx = tempCanvas.getContext("2d");
      if (!tempCtx) return [];

      tempCanvas.width = logoShapeSize;
      tempCanvas.height = logoShapeSize;

      const path = new Path2D(logoPath);
      const scale = logoShapeSize / 196;
      tempCtx.scale(scale, scale);
      tempCtx.fillStyle = "black";
      tempCtx.fill(path);

      const imageData = tempCtx.getImageData(0, 0, logoShapeSize, logoShapeSize);
      const pixels = imageData.data;
      const coordinates: { x: number; y: number }[] = [];

      for (let y = 0; y < logoShapeSize; y += logoSpacing) {
        for (let x = 0; x < logoShapeSize; x += logoSpacing) {
          const index = (y * logoShapeSize + x) * 4;
          const alpha = pixels[index + 3];
          if (alpha > 128) {
            const centerX = (width - logoShapeSize) / 2 + x;
            const centerY = (height - logoShapeSize) / 2 + y;
            coordinates.push({ x: centerX, y: centerY });
          }
        }
      }

      return coordinates;
    }

    function init() {
      logoParticles = [];
      bgParticles = [];

      const logoCoordinates = getLogoCoordinates();
      const particlesToCreate = Math.min(
        logoParticleCount,
        logoCoordinates.length
      );

      for (let i = 0; i < particlesToCreate; i++) {
        const coord =
          logoCoordinates[Math.floor(Math.random() * logoCoordinates.length)];
        logoParticles.push(createLogoParticle(coord.x, coord.y));
      }

      for (let i = 0; i < bgParticleCount; i++) {
        bgParticles.push(createBgParticle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (const particle of bgParticles) {
        particle.update();
        particle.draw();
      }

      for (const particle of logoParticles) {
        particle.update();
        particle.draw();
      }

      animationId = requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      style={{
        width: "900px",
        height: "500px",
        position: "relative",
        background: "#ffffff",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          boxShadow: "inset 0 0 80px 40px #ffffff",
          zIndex: 10,
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          background: "#ffffff",
        }}
      />
    </div>
  );
}
