"use client";

import { useState, useRef, useEffect } from "react";

// Particle Field Component
interface ParticleFieldProps {
  particleCount?: number;
  className?: string;
  color?: string;
  interactive?: boolean;
}

export const ParticleField = ({
  particleCount = 50,
  className = "",
  color = "cyan",
  interactive = true,
}: ParticleFieldProps) => {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {Array.from({ length: particleCount }).map((_, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-${color}-400/30 animate-float-particle`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 10}s`,
          }}
        />
      ))}
    </div>
  );
};

// Floating Elements Component
interface FloatingElementsProps {
  children: React.ReactNode;
  intensity?: "light" | "medium" | "strong";
  className?: string;
}

export const FloatingElements = ({
  children,
  intensity = "medium",
  className = "",
}: FloatingElementsProps) => {
  const intensityMap = {
    light: "hover:scale-102 hover:-translate-y-1",
    medium: "hover:scale-105 hover:-translate-y-2",
    strong: "hover:scale-110 hover:-translate-y-4 hover:rotate-1",
  };

  return (
    <div
      className={`
      transform transition-all duration-500 ease-out
      ${intensityMap[intensity]}
      ${className}
    `}
    >
      {children}
    </div>
  );
};

// Gradient Orb Component
interface GradientOrbProps {
  size?: "sm" | "md" | "lg" | "xl";
  color?: "cyan" | "purple" | "pink" | "orange";
  position?: string;
  blur?: boolean;
}

export const GradientOrb = ({
  size = "md",
  color = "cyan",
  position = "",
  blur = true,
}: GradientOrbProps) => {
  const sizeMap = {
    sm: "w-32 h-32",
    md: "w-48 h-48",
    lg: "w-64 h-64",
    xl: "w-96 h-96",
  };

  const colorMap = {
    cyan: "bg-gradient-to-br from-cyan-400 to-cyan-600",
    purple: "bg-gradient-to-br from-purple-400 to-purple-600",
    pink: "bg-gradient-to-br from-pink-400 to-pink-600",
    orange: "bg-gradient-to-br from-orange-400 to-orange-600",
  };

  return (
    <div
      className={`
      absolute ${position} ${sizeMap[size]} ${colorMap[color]}
      rounded-full opacity-20 animate-pulse
      ${blur ? "blur-3xl" : ""}
    `}
    />
  );
};

// Interactive Cursor Follower
interface CursorFollowerProps {
  color?: string;
  size?: number;
}

export const CursorFollower = ({
  color = "cyan-400",
  size = 20,
}: CursorFollowerProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: position.x - size / 2,
        top: position.y - size / 2,
        width: size,
        height: size,
      }}
    >
      <div
        className={`w-full h-full bg-${color} rounded-full blur-sm opacity-50 animate-pulse`}
      />
    </div>
  );
};