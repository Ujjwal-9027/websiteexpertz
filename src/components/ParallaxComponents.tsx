"use client";

import { useEffect, useRef, useState } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

export const ParallaxSection = ({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
}: ParallaxSectionProps) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const parallax = scrolled * speed;

        setOffset(direction === "up" ? -parallax : parallax);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, direction]);

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

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  amplitude?: number;
  frequency?: number;
  delay?: number;
}

export const FloatingElement = ({
  children,
  className = "",
  amplitude = 20,
  frequency = 2000,
  delay = 0,
}: FloatingElementProps) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime + delay;

      const newPosition =
        Math.sin((elapsed / frequency) * 2 * Math.PI) * amplitude;
      setPosition(newPosition);

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [amplitude, frequency, delay]);

  return (
    <div
      className={className}
      style={{
        transform: `translateY(${position}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {children}
    </div>
  );
};
