"use client";

import { useEffect, useRef, useState } from "react";

// Animated Background Component
export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`, // Blue to purple range
      });
    }

    const animate = () => {
      ctx.fillStyle = "rgba(248, 250, 252, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Move particle
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Mouse interaction
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          particle.vx += dx * 0.00005;
          particle.vy += dy * 0.00005;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Draw connections
        particles.slice(index + 1).forEach((otherParticle) => {
          const dx2 = particle.x - otherParticle.x;
          const dy2 = particle.y - otherParticle.y;
          const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (distance2 < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${
              0.3 * (1 - distance2 / 120)
            })`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      }}
    />
  );
};

// Floating Geometric Shapes
export const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {/* Animated gradients */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/15 to-pink-600/15 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-32 left-1/4 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Floating geometric shapes */}
      <div className="animate-float-slow absolute top-1/4 left-1/4">
        <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded transform rotate-45 opacity-60"></div>
      </div>
      <div
        className="animate-float-slow absolute top-1/3 right-1/3"
        style={{ animationDelay: "1s" }}
      >
        <div className="w-6 h-6 border-2 border-indigo-400 rounded-full opacity-40"></div>
      </div>
      <div
        className="animate-float-slow absolute bottom-1/4 right-1/4"
        style={{ animationDelay: "3s" }}
      >
        <div
          className="w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-600 opacity-50"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        ></div>
      </div>
      <div
        className="animate-float-slow absolute top-2/3 left-1/6"
        style={{ animationDelay: "2.5s" }}
      >
        <div className="w-8 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-30"></div>
      </div>
    </div>
  );
};

// Gradient Mesh Background
export const GradientMesh = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-5">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-transparent via-blue-100/50 to-purple-100/50 animate-pulse"></div>
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-indigo-100/30 to-pink-100/30 animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>
    </div>
  );
};

// Interactive Orbs
export const InteractiveOrbs = () => {
  const [orbs, setOrbs] = useState<
    Array<{ id: number; x: number; y: number; size: number }>
  >([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newOrb = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 100 + 50,
      };

      setOrbs((prev) => [...prev, newOrb]);

      // Remove orb after animation
      setTimeout(() => {
        setOrbs((prev) => prev.filter((orb) => orb.id !== newOrb.id));
      }, 2000);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full bg-gradient-to-br from-blue-400/30 to-purple-600/30 animate-ping"
          style={{
            left: orb.x - orb.size / 2,
            top: orb.y - orb.size / 2,
            width: orb.size,
            height: orb.size,
            animationDuration: "2s",
          }}
        />
      ))}
    </div>
  );
};
