"use client";

import {
  useState,
  useRef,
  useEffect,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent,
} from "react";

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
  const pointerClass = interactive ? "pointer-events-auto" : "pointer-events-none";
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${pointerClass} ${className}`}
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
  children: ReactNode;
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

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  href?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  disabled?: boolean;
  onClick?: (event: ReactMouseEvent<HTMLButtonElement>) => void;
}

export const MagneticButton = ({
  children,
  className = "",
  strength = 0.3,
  href,
  target = "_self",
  disabled = false,
  onClick,
}: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isPressed, setIsPressed] = useState(false);

  const handlePointerMove = (event: PointerEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || disabled) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const relativeX = event.clientX - left - width / 2;
    const relativeY = event.clientY - top - height / 2;
    setOffset({
      x: relativeX * strength,
      y: relativeY * strength,
    });
  };

  const resetOffset = () => {
    setOffset({ x: 0, y: 0 });
    setIsPressed(false);
  };

  const handleClick = (event: ReactMouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }

    if (href) {
      if (href.startsWith("#")) {
        event.preventDefault();
        const sectionId = href.slice(1);
        const targetElement = document.getElementById(sectionId);
        targetElement?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (typeof window !== "undefined") {
        event.preventDefault();
        window.open(href, target);
      }
    }

    onClick?.(event);
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      className={`group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-transform duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 ${className}`}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${isPressed ? 0.97 : 1})`,
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetOffset}
      onPointerDown={() => {
        if (!disabled) setIsPressed(true);
      }}
      onPointerUp={() => {
        if (!disabled) setIsPressed(false);
      }}
      onClick={handleClick}
      disabled={disabled}
      aria-disabled={disabled}
      data-cursor="hover"
    >
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      />
    </button>
  );
};