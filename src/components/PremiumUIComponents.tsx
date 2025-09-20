"use client";

import { useState, useRef, useEffect } from "react";

// Glassmorphism Card Component
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover3D?: boolean;
}

export const GlassCard = ({
  children,
  className = "",
  hover3D = false,
}: GlassCardProps) => {
  const [transform, setTransform] = useState("");
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!hover3D || !cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
    );
  };

  const handleMouseLeave = () => {
    setTransform("");
  };

  return (
    <div
      ref={cardRef}
      className={`
        backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl
        shadow-xl hover:shadow-2xl transition-all duration-500
        relative overflow-hidden group
        ${className}
      `}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-orange-600/20 blur-xl"></div>
    </div>
  );
};

// Magnetic Button Component
interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "neon";
}

export const MagneticButton = ({
  children,
  onClick,
  className = "",
  variant = "primary",
}: MagneticButtonProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary: `
      bg-orange-800 
      text-white shadow-lg hover:shadow-orange-500/50 hover:bg-orange-700
    `,
    secondary: `
      bg-white/10 backdrop-blur-sm border border-white/20 
      text-gray-800 hover:text-white hover:bg-orange-600
    `,
    neon: `
      bg-transparent border-2 border-orange-600 text-orange-600
      hover:bg-orange-600 hover:text-white hover:shadow-orange-600/50
    `,
  };

  return (
    <button
      ref={buttonRef}
      className={`
        relative px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold
        transition-all duration-300 transform-gpu
        hover:scale-105 active:scale-95
        overflow-hidden group
        min-h-[44px] min-w-[44px]
        ${variantStyles[variant]}
        ${className}
      `}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
      </div>

      {/* Button content */}
      <span className="relative z-10">{children}</span>

      {/* Ripple effect on click */}
      <div className="absolute inset-0 rounded-full opacity-0 group-active:opacity-100 bg-white/30 animate-ping"></div>
    </button>
  );
};

// 3D Hover Card
interface Hover3DCardProps {
  children: React.ReactNode;
  className?: string;
}

export const Hover3DCard = ({ children, className = "" }: Hover3DCardProps) => {
  const [style, setStyle] = useState({});
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 15;
    const rotateY = ((centerX - x) / centerX) * 15;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: "none",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform:
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "all 0.5s ease",
    });
  };

  return (
    <div
      ref={cardRef}
      className={`
        transform-gpu cursor-pointer
        ${className}
      `}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

// Neon Text Component
interface NeonTextProps {
  children: React.ReactNode;
  color?:
    | "blue"
    | "purple"
    | "cyan"
    | "pink"
    | "emerald"
    | "amber"
    | "rose"
    | "teal";
  className?: string;
}

export const NeonText = ({
  children,
  color = "blue",
  className = "",
}: NeonTextProps) => {
  const colorStyles = {
    blue: "text-blue-400 shadow-blue-400/50",
    purple: "text-purple-400 shadow-purple-400/50",
    cyan: "text-cyan-400 shadow-cyan-400/50",
    pink: "text-pink-400 shadow-pink-400/50",
    emerald: "text-emerald-400 shadow-emerald-400/50",
    amber: "text-amber-400 shadow-amber-400/50",
    rose: "text-rose-400 shadow-rose-400/50",
    teal: "text-teal-400 shadow-teal-400/50",
  };

  return (
    <div
      className={`
      ${colorStyles[color]}
      drop-shadow-[0_0_10px_currentColor]
      hover:drop-shadow-[0_0_20px_currentColor]
      transition-all duration-300
      ${className}
    `}
    >
      {children}
    </div>
  );
};

// Liquid Button
interface LiquidButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const LiquidButton = ({
  children,
  onClick,
  className = "",
}: LiquidButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold
        bg-orange-600
        text-white overflow-hidden group
        transition-all duration-500
        hover:scale-105 active:scale-95 hover:bg-orange-700
        min-h-[44px] min-w-[44px]
        ${className}
      `}
    >
      {/* Liquid effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-orange-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
      </div>

      {/* Bubble effects */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
        <div
          className="absolute top-2 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="absolute top-3 right-6 w-1 h-1 bg-white/40 rounded-full animate-bounce"
          style={{ animationDelay: "0.3s" }}
        ></div>
        <div
          className="absolute bottom-3 left-8 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <span className="relative z-10">{children}</span>
    </button>
  );
};

// Morphing Shape
export const MorphingShape = () => {
  return (
    <div className="relative w-32 h-32">
      <div className="absolute inset-0 bg-orange-600 rounded-full animate-pulse"></div>
      <div
        className="absolute inset-2 bg-orange-800 animate-spin"
        style={{
          borderRadius: "50% 20% 50% 20%",
          animationDuration: "8s",
        }}
      ></div>
      <div
        className="absolute inset-4 bg-orange-700"
        style={{
          borderRadius: "20% 50% 20% 50%",
          animation: "morph 6s ease-in-out infinite alternate",
        }}
      ></div>
    </div>
  );
};
