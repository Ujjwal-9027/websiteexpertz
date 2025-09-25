"use client";

import { useState, useRef, useEffect } from "react";

// Advanced Parallax Container
interface ParallaxContainerProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxContainer = ({
  children,
  speed = 0.5,
  className = "",
}: ParallaxContainerProps) => {
  const [scrollY, setScrollY] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transform-gpu ${className}`}
      style={{
        transform: `translateY(${scrollY * speed}px)`,
      }}
    >
      {children}
    </div>
  );
};

// Magnetic Text Effect
interface MagneticTextProps {
  children: string;
  className?: string;
  magnetStrength?: number;
}

export const MagneticText = ({
  children,
  className = "",
  magnetStrength = 0.3,
}: MagneticTextProps) => {
  const [letters, setLetters] = useState<
    Array<{ char: string; x: number; y: number }>
  >([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLetters(
      children.split("").map((char, i) => ({
        char,
        x: 0,
        y: 0,
      }))
    );
  }, [children]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    setLetters((prev) =>
      prev.map((letter, i) => {
        const letterX = rect.left + (i * rect.width) / prev.length;
        const letterY = rect.top + rect.height / 2;
        const distanceX = mouseX - letterX;
        const distanceY = mouseY - letterY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
        const maxDistance = 100;

        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * magnetStrength;
          return {
            ...letter,
            x: distanceX * force,
            y: distanceY * force,
          };
        }
        return { ...letter, x: 0, y: 0 };
      })
    );
  };

  const handleMouseLeave = () => {
    setLetters((prev) => prev.map((letter) => ({ ...letter, x: 0, y: 0 })));
  };

  return (
    <div
      ref={containerRef}
      className={`inline-block cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {letters.map((letter, i) => (
        <span
          key={i}
          className="inline-block transition-transform duration-200 ease-out"
          style={{
            transform: `translate(${letter.x}px, ${letter.y}px)`,
          }}
        >
          {letter.char === " " ? "\u00A0" : letter.char}
        </span>
      ))}
    </div>
  );
};

// Advanced Card Tilt Effect
interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

export const TiltCard = ({
  children,
  className = "",
  maxTilt = 20,
}: TiltCardProps) => {
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
    const rotateX = ((y - centerY) / centerY) * maxTilt;
    const rotateY = ((centerX - x) / centerX) * maxTilt;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: "none",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    });
  };

  return (
    <div
      ref={cardRef}
      className={`transform-gpu ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

// Interactive Background Dots
interface InteractiveDotsProps {
  dotCount?: number;
  className?: string;
  color?: string;
}

export const InteractiveDots = ({
  dotCount = 100,
  className = "",
  color = "cyan",
}: InteractiveDotsProps) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const dots = Array.from({ length: dotCount }).map((_, i) => {
    const x = (i % 10) * 10 + 5;
    const y = Math.floor(i / 10) * 10 + 5;
    const distance = Math.sqrt((mousePos.x - x) ** 2 + (mousePos.y - y) ** 2);
    const maxDistance = 100;
    const opacity = Math.max(0.1, 1 - distance / maxDistance);
    const scale = Math.max(0.5, 1 - distance / (maxDistance * 2));

    return { x, y, opacity, scale };
  });

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      onMouseMove={handleMouseMove}
    >
      {dots.map((dot, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 bg-${color}-400 rounded-full transition-all duration-200`}
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            opacity: dot.opacity,
            transform: `scale(${dot.scale})`,
          }}
        />
      ))}
    </div>
  );
};

// Advanced Scroll Progress
interface ScrollProgressProps {
  className?: string;
  color?: string;
}

export const ScrollProgress = ({
  className = "",
  color = "cyan-400",
}: ScrollProgressProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setProgress(Math.min(currentProgress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 h-1 z-50 ${className}`}>
      <div
        className={`h-full bg-${color} transition-all duration-150 ease-out shadow-lg shadow-${color}/50`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

// Morphing Button
interface MorphingButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  morphShape?: "circle" | "square" | "rounded";
}

export const MorphingButton = ({
  children,
  onClick,
  className = "",
  morphShape = "rounded",
}: MorphingButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const shapeStyles = {
    circle: isHovered ? "rounded-full" : "rounded-lg",
    square: isHovered ? "rounded-none" : "rounded-lg",
    rounded: isHovered ? "rounded-3xl" : "rounded-lg",
  };

  return (
    <button
      className={`
        px-6 py-3 bg-cyan-400 text-black font-semibold
        transform transition-all duration-500 ease-out
        hover:scale-105 hover:bg-cyan-300
        hover:shadow-2xl hover:shadow-cyan-400/30
        ${shapeStyles[morphShape]}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

// Glitch Text Effect
interface GlitchTextProps {
  children: string;
  className?: string;
  intensity?: "low" | "medium" | "high";
}

export const GlitchText = ({
  children,
  className = "",
  intensity = "medium",
}: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false);

  const intensityStyles = {
    low: "animate-glitch",
    medium: "animate-glitch hover:animate-pulse",
    high: "animate-glitch animate-pulse",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative inline-block ${className}`}>
      <span
        className={`
          relative inline-block
          ${isGlitching ? intensityStyles[intensity] : ""}
        `}
        data-text={children}
      >
        {children}
      </span>
      {isGlitching && (
        <>
          <span
            className="absolute top-0 left-0 text-red-500 opacity-70 animate-glitch"
            style={{ clipPath: "inset(0 0 70% 0)" }}
          >
            {children}
          </span>
          <span
            className="absolute top-0 left-0 text-blue-500 opacity-70 animate-glitch"
            style={{ clipPath: "inset(70% 0 0 0)" }}
          >
            {children}
          </span>
        </>
      )}
    </div>
  );
};

// Advanced Loading Spinner
interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "dots" | "bars" | "ring" | "pulse";
  color?: string;
}

export const LoadingSpinner = ({
  size = "md",
  variant = "ring",
  color = "cyan-400",
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const variants = {
    dots: (
      <div className="flex space-x-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`w-2 h-2 bg-${color} rounded-full animate-bounce`}
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
    ),
    bars: (
      <div className="flex space-x-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`w-1 h-6 bg-${color} rounded animate-pulse`}
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
    ),
    ring: (
      <div
        className={`${sizeClasses[size]} border-2 border-gray-200 border-t-${color} rounded-full animate-spin`}
      />
    ),
    pulse: (
      <div
        className={`${sizeClasses[size]} bg-${color} rounded-full animate-pulse`}
      />
    ),
  };

  return <div className="flex items-center justify-center">{variants[variant]}</div>;
};

// Interactive Particle Field
interface ParticleFieldProps {
  particleCount?: number;
  color?: string;
  interactive?: boolean;
}

export const ParticleField = ({
  particleCount = 50,
  color = "cyan",
  interactive = true,
}: ParticleFieldProps) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || !interactive) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const particles = Array.from({ length: particleCount }).map((_, i) => {
    const baseX = Math.random() * 100;
    const baseY = Math.random() * 100;
    
    let offsetX = 0;
    let offsetY = 0;
    
    if (interactive && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const particleX = (baseX / 100) * rect.width;
      const particleY = (baseY / 100) * rect.height;
      const distance = Math.sqrt(
        (mousePos.x - particleX) ** 2 + (mousePos.y - particleY) ** 2
      );
      const maxDistance = 100;
      
      if (distance < maxDistance) {
        const force = (1 - distance / maxDistance) * 20;
        const angle = Math.atan2(mousePos.y - particleY, mousePos.x - particleX);
        offsetX = Math.cos(angle) * force;
        offsetY = Math.sin(angle) * force;
      }
    }

    return {
      x: baseX + offsetX,
      y: baseY + offsetY,
      size: Math.random() * 4 + 1,
    };
  });

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      onMouseMove={handleMouseMove}
    >
      {particles.map((particle, i) => (
        <div
          key={i}
          className={`absolute bg-${color}-400/30 rounded-full animate-float-particle`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${i * 0.1}s`,
            transition: "all 0.3s ease",
          }}
        />
      ))}
    </div>
  );
};