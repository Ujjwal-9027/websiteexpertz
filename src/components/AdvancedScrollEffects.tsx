"use client";

import { useState, useEffect, useRef } from "react";

// Intersection Observer Hook
const useIntersectionObserver = (
  elementRef: React.RefObject<HTMLElement | null>,
  { threshold = 0, root = null, rootMargin = "0%" } = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [elementRef, threshold, root, rootMargin]);

  return isIntersecting;
};

// Enhanced Scroll Reveal with Direction Control
interface AdvancedScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "scale" | "rotate";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  triggerOnce?: boolean;
}

export const AdvancedScrollReveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 50,
  className = "",
  triggerOnce = true,
}: AdvancedScrollRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(elementRef, {
    threshold: 0.1,
    rootMargin: "-50px",
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  const shouldAnimate = triggerOnce ? hasAnimated : isVisible;

  const getTransform = () => {
    if (shouldAnimate) return "translate3d(0, 0, 0) scale(1) rotate(0deg)";

    switch (direction) {
      case "up":
        return `translate3d(0, ${distance}px, 0) scale(1) rotate(0deg)`;
      case "down":
        return `translate3d(0, -${distance}px, 0) scale(1) rotate(0deg)`;
      case "left":
        return `translate3d(${distance}px, 0, 0) scale(1) rotate(0deg)`;
      case "right":
        return `translate3d(-${distance}px, 0, 0) scale(1) rotate(0deg)`;
      case "scale":
        return `translate3d(0, 0, 0) scale(0.8) rotate(0deg)`;
      case "rotate":
        return `translate3d(0, 0, 0) scale(1) rotate(180deg)`;
      default:
        return `translate3d(0, ${distance}px, 0) scale(1) rotate(0deg)`;
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all ease-out ${className}`}
      style={{
        transform: getTransform(),
        opacity: shouldAnimate ? 1 : 0,
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        backfaceVisibility: "hidden",
        perspective: "1000px",
      }}
    >
      {children}
    </div>
  );
};

// Parallax Scroll Effect
interface ParallaxScrollProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "up" | "down";
  className?: string;
}

export const ParallaxScroll = ({
  children,
  speed = 0.5,
  direction = "up",
  className = "",
}: ParallaxScrollProps) => {
  const [scrollY, setScrollY] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getTransform = () => {
    const movement = scrollY * speed;
    return direction === "up"
      ? `translate3d(0, ${-movement}px, 0)`
      : `translate3d(0, ${movement}px, 0)`;
  };

  return (
    <div
      ref={elementRef}
      className={`transform-gpu ${className}`}
      style={{
        transform: getTransform(),
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

// Staggered Animation Container
interface StaggeredRevealProps {
  children: React.ReactNode;
  stagger?: number;
  className?: string;
}

export const StaggeredReveal = ({
  children,
  stagger = 0.1,
  className = "",
}: StaggeredRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(containerRef, {
    threshold: 0.1,
  });

  return (
    <div ref={containerRef} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <AdvancedScrollReveal
              key={index}
              delay={isVisible ? index * stagger : 0}
              direction="up"
            >
              {child}
            </AdvancedScrollReveal>
          ))
        : children}
    </div>
  );
};

// Scroll-based Counter Animation
interface ScrollCounterProps {
  end: number;
  start?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const ScrollCounter = ({
  end,
  start = 0,
  duration = 2,
  suffix = "",
  prefix = "",
  className = "",
}: ScrollCounterProps) => {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(elementRef, {
    threshold: 0.5,
  });

  useEffect(() => {
    if (isVisible && !hasStarted) {
      setHasStarted(true);
      const startTime = Date.now();
      const startCount = start;
      const endCount = end;

      const animate = () => {
        const now = Date.now();
        const elapsed = (now - startTime) / 1000;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(
          startCount + (endCount - startCount) * easeOutQuart
        );

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(endCount);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isVisible, hasStarted, start, end, duration]);

  return (
    <div ref={elementRef} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

// Scroll-triggered Text Reveal
interface ScrollTextRevealProps {
  text: string;
  className?: string;
  stagger?: number;
}

export const ScrollTextReveal = ({
  text,
  className = "",
  stagger = 0.05,
}: ScrollTextRevealProps) => {
  const [visibleChars, setVisibleChars] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(elementRef, {
    threshold: 0.3,
  });

  useEffect(() => {
    if (isVisible) {
      const animate = () => {
        setVisibleChars((prev) => {
          if (prev < text.length) {
            setTimeout(() => requestAnimationFrame(animate), stagger * 1000);
            return prev + 1;
          }
          return prev;
        });
      };
      animate();
    }
  }, [isVisible, text.length, stagger]);

  return (
    <div ref={elementRef} className={className}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-300 ${
            index < visibleChars
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
          style={{ transitionDelay: `${index * stagger}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

// Scroll-based Progress Circle
interface ScrollProgressCircleProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
  color?: string;
}

export const ScrollProgressCircle = ({
  size = 60,
  strokeWidth = 4,
  className = "",
  color = "cyan",
}: ScrollProgressCircleProps) => {
  const [progress, setProgress] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setProgress(Math.min(currentProgress, 100));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-gray-300"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (progress / 100) * circumference}
          className={`text-${color}-400 transition-all duration-300 ease-out`}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-sm font-semibold text-${color}-400`}>
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
};

// Scroll-triggered Morphing Background
interface MorphingBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export const MorphingBackground = ({
  children,
  className = "",
}: MorphingBackgroundProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      const progress = Math.max(
        0,
        Math.min(
          1,
          (windowHeight - elementTop) / (windowHeight + elementHeight)
        )
      );

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getMorphStyle = () => {
    const morphPercentage = scrollProgress * 100;
    return {
      background: `
        radial-gradient(ellipse at ${50 + morphPercentage * 0.5}% ${
        50 + morphPercentage * 0.3
      }%, 
        rgba(79, 209, 199, ${0.1 + scrollProgress * 0.1}) 0%, 
        transparent 50%),
        radial-gradient(ellipse at ${50 - morphPercentage * 0.3}% ${
        50 - morphPercentage * 0.5
      }%, 
        rgba(186, 164, 255, ${0.08 + scrollProgress * 0.1}) 0%, 
        transparent 50%)
      `,
      borderRadius: `${20 + scrollProgress * 30}px`,
      transform: `scale(${1 + scrollProgress * 0.05})`,
    };
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-300 ease-out ${className}`}
      style={getMorphStyle()}
    >
      {children}
    </div>
  );
};
