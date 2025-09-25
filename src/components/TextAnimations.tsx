"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export const TypewriterText = ({
  text,
  speed = 100,
  delay = 0,
  className = "",
  onComplete,
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(
      () => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else if (onComplete) {
          onComplete();
        }
      },
      currentIndex === 0 ? delay : speed
    );

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, delay, isVisible, onComplete]);

  return (
    <div ref={ref} className={`${className} block w-full`}>
      {displayText}
      <span className="animate-pulse">|</span>
    </div>
  );
};

interface CountUpProps {
  end: number;
  duration?: number;
  delay?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

interface WordTypewriterProps {
  words: string[];
  speed?: number;
  delay?: number;
  className?: string;
  highlightWords?: number[];
  highlightColor?: string;
  onComplete?: () => void;
}

export const WordTypewriter = ({
  words,
  speed = 500,
  delay = 0,
  className = "",
  highlightWords = [],
  highlightColor = "text-cyan-400",
  onComplete,
}: WordTypewriterProps) => {
  const [displayWords, setDisplayWords] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(
      () => {
        if (currentIndex < words.length) {
          setDisplayWords(words.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else if (onComplete) {
          onComplete();
        }
      },
      currentIndex === 0 ? delay : speed
    );

    return () => clearTimeout(timer);
  }, [currentIndex, words, speed, delay, isVisible, onComplete]);

  return (
    <div ref={ref} className={`${className} block w-full`}>
      {displayWords.map((word, index) => (
        <span key={index}>
          <span
            className={`${
              highlightWords.includes(index) ? highlightColor : ""
            } inline-block transform transition-all duration-300 hover:scale-105`}
          >
            {word}
          </span>
          {index < displayWords.length - 1 && <span> </span>}
        </span>
      ))}
      {currentIndex < words.length && (
        <span className="animate-pulse ml-1 text-cyan-400">|</span>
      )}
    </div>
  );
};

export const CountUpNumber = ({
  end,
  duration = 2000,
  delay = 0,
  className = "",
  suffix = "",
  prefix = "",
}: CountUpProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now() + delay;
    const timer = setInterval(() => {
      const now = Date.now();
      const elapsed = now - startTime;

      if (elapsed < 0) return;

      const progress = Math.min(elapsed / duration, 1);
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(end * easeOutProgress));

      if (progress >= 1) {
        clearInterval(timer);
        setCount(end);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, delay, isVisible]);

  return (
    <div ref={ref} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};
