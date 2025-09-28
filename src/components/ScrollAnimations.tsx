"use client";

import React, { useEffect, useState, useRef } from "react";

// Custom cursor component
export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, [data-cursor="hover"]')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, [data-cursor="hover"]')) {
        setIsHovering(false);
      }
    };

    document.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`
          fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference
          w-4 h-4 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2
          transition-all duration-150 ease-out
          ${isHovering ? "scale-150" : "scale-100"}
          ${isClicking ? "scale-75" : ""}
        `}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />

      {/* Cursor trail */}
      <div
        className={`
          fixed top-0 left-0 pointer-events-none z-40
          w-8 h-8 border-2 border-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2
          transition-all duration-300 ease-out opacity-50
          ${isHovering ? "scale-200 border-purple-500" : "scale-100"}
        `}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
    </>
  );
};

// Scroll reveal hook
export const useScrollReveal = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, isVisible };
};

// Scroll reveal animation component
interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale";
  delay?: number;
  duration?: number;
}

export const ScrollReveal = ({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.6,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal();

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(60px)";
      case "down":
        return "translateY(-60px)";
      case "left":
        return "translateX(60px)";
      case "right":
        return "translateX(-60px)";
      case "scale":
        return "scale(0.8)";
      default:
        return "translateY(60px)";
    }
  };

  const getFinalTransform = () => {
    switch (direction) {
      case "scale":
        return "scale(1)";
      default:
        return "translateX(0) translateY(0)";
    }
  };

  return (
    <div
      ref={ref}
      className={`
        transition-all ease-out
        ${className}
      `}
      style={{
        transform: isVisible ? getFinalTransform() : getInitialTransform(),
        opacity: isVisible ? 1 : 0,
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

// Text reveal animation
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export const TextReveal = ({
  text,
  className = "",
  delay = 0,
}: TextRevealProps) => {
  const { ref, isVisible } = useScrollReveal();
  const words = text.split(" ");

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block"
          style={{
            transform: isVisible ? "translateY(0)" : "translateY(100%)",
            opacity: isVisible ? 1 : 0,
            transition: `all 0.6s ease ${delay + index * 0.1}s`,
          }}
        >
          {word}&nbsp;
        </span>
      ))}
    </div>
  );
};

// Parallax component
interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export const Parallax = ({
  children,
  speed = 0.5,
  className = "",
}: ParallaxProps) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * speed;
        setOffset(rate);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
      }}
    >
      {children}
    </div>
  );
};

// Staggered animation container
interface StaggeredAnimationProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}

export const StaggeredAnimation = ({
  children,
  className = "",
  stagger = 0.1,
}: StaggeredAnimationProps) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => (
        <div
          style={{
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            opacity: isVisible ? 1 : 0,
            transition: `all 0.6s ease ${index * stagger}s`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

// Morphing background
export const MorphingBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute -inset-10 opacity-30">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "0s", animationDuration: "8s" }}
        />
        <div
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s", animationDuration: "10s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-indigo-400 to-cyan-600 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "4s", animationDuration: "12s" }}
        />
      </div>
    </div>
  );
};
