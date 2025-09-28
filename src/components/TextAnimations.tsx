"use client";

import { useEffect, useMemo, useRef, useState } from "react";

interface SplitTextRevealProps {
  text: string;
  className?: string;
  delayStep?: number;
  threshold?: number;
}

export const SplitTextReveal = ({
  text,
  className = "",
  delayStep = 0.05,
  threshold = 0.15,
}: SplitTextRevealProps) => {
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const characters = useMemo(() => text.split(""), [text]);

  return (
    <span ref={containerRef} className={`inline-block overflow-hidden ${className}`}>
      {characters.map((character, index) => (
        <span
          key={`${character}-${index}`}
          className="inline-block translate-y-full opacity-0 transition-all duration-500 ease-out"
          style={{
            transform: isVisible ? "translateY(0)" : undefined,
            opacity: isVisible ? 1 : undefined,
            transitionDelay: `${index * delayStep}s`,
          }}
        >
          {character === " " ? "\u00A0" : character}
        </span>
      ))}
    </span>
  );
};

interface TextLoopProps {
  phrases: string[];
  interval?: number;
  className?: string;
}

export const TextLoop = ({
  phrases,
  interval = 2500,
  className = "",
}: TextLoopProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (phrases.length <= 1) {
      return undefined;
    }

    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % phrases.length);
    }, interval);

    return () => {
      window.clearInterval(id);
    };
  }, [interval, phrases.length]);

  const displayed = phrases[activeIndex] ?? "";

  return (
    <span className={`relative inline-flex overflow-hidden ${className}`}>
      <span
        key={displayed}
        className="animate-fade-in-up block whitespace-nowrap"
      >
        {displayed}
      </span>
    </span>
  );
};

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export const AnimatedCounter = ({
  value,
  duration = 800,
  className = "",
  prefix = "",
  suffix = "",
}: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(Math.round(value * easedProgress));

      if (progress < 1) {
        frameRef.current = window.requestAnimationFrame(animate);
      }
    };

    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
      startTimeRef.current = null;
      frameRef.current = null;
    };
  }, [duration, value]);

  return (
    <span className={className}>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
};

interface HighlightOnHoverProps {
  children: React.ReactNode;
  className?: string;
  highlightClassName?: string;
}

export const HighlightOnHover = ({
  children,
  className = "",
  highlightClassName = "bg-gradient-to-r from-red-500/20 to-red-600/20",
}: HighlightOnHoverProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className={`relative inline-flex items-center ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={`absolute inset-y-1 left-0 right-0 rounded-full transition-opacity duration-200 ${highlightClassName}`}
        style={{ opacity: isHovered ? 1 : 0 }}
        aria-hidden
      />
      <span className="relative z-10">{children}</span>
    </span>
  );
};

export const TEXT_ANIMATION_COMPONENTS = {
  SplitTextReveal,
  TextLoop,
  AnimatedCounter,
  HighlightOnHover,
};
