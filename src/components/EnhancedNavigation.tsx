"use client";

import { useEffect, useMemo, useState } from "react";
import { MagneticButton } from "./PremiumUIComponents";

const NAV_SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

const scrollTo = (sectionId: string) => {
  if (typeof document === "undefined") return;
  const target = document.getElementById(sectionId);
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const EnhancedNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 56);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <button
          type="button"
          onClick={() => scrollTo("home")}
          className="flex items-center space-x-2 rounded-full bg-white/40 px-3 py-1 text-sm font-semibold text-red-600 backdrop-blur transition hover:bg-white/60"
        >
          <span className="text-lg">🚀</span>
          <span>WebsiteExpertz</span>
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {NAV_SECTIONS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium text-gray-700 transition hover:text-red-600"
            >
              {item.label}
            </button>
          ))}
        </div>

        <MagneticButton
          className="bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg hover:shadow-xl"
          href="#contact"
        >
          Free Consultation
        </MagneticButton>
      </div>
    </nav>
  );
};

export const FloatingNavDots = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        root: null,
        threshold: 0.4,
      }
    );

    const observedElements = NAV_SECTIONS.map(({ id }) =>
      document.getElementById(id)
    ).filter((element): element is HTMLElement => Boolean(element));

    observedElements.forEach((element) => observer.observe(element));

    return () => {
      observedElements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, []);

  const dots = useMemo(() => NAV_SECTIONS, []);

  return (
    <div className="pointer-events-none fixed right-4 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex">
      {dots.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollTo(item.id)}
            className={`pointer-events-auto h-3 w-3 rounded-full transition-all duration-200 ${
              isActive ? "scale-125 bg-red-500" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Scroll to ${item.label}`}
          />
        );
      })}
    </div>
  );
};
