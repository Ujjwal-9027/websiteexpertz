"use client";

import { useState, useEffect } from "react";
import { MagneticButton } from "./PremiumUIComponents";

interface EnhancedNavProps {
  className?: string;
}

export const EnhancedNav = ({ className = "" }: EnhancedNavProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(progress);
      setIsScrolled(scrollTop > 50);

      // Update active section based on scroll position
      const sections = ["home", "about", "portfolio", "services", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "portfolio", label: "Portfolio", href: "#portfolio" },
    { id: "services", label: "Services", href: "#services" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-black">
        <div
          className="h-full bg-cyan-400 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sticky Navigation */}
      <nav
        className={`
        fixed top-0 left-0 right-0 z-40 transition-all duration-500
        ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-md shadow-lg py-2 sm:py-3 border-b border-blue-400/20"
            : "bg-slate-900/90 backdrop-blur-sm py-3 sm:py-4"
        }
        ${className}
      `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="flex items-center space-x-2 text-lg sm:text-xl md:text-2xl font-heading font-bold cursor-pointer"
              onClick={() => scrollToSection("#home")}
            >
              <span className="text-blue-400">Website Expertz</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className={`
                    relative px-3 py-2 font-medium transition-all duration-300 text-sm lg:text-base min-h-[44px]
                    ${
                      activeSection === item.id
                        ? "text-blue-400"
                        : "text-slate-200 hover:text-blue-400"
                    }
                  `}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-blue-400" />
                  )}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <MagneticButton
                variant="primary"
                className="px-4 py-2 lg:px-6 lg:py-3 text-xs lg:text-sm bg-blue-500 hover:bg-blue-400 text-white rounded-lg min-h-[44px] font-semibold shadow-lg shadow-blue-500/30"
              >
                Free Consultation
              </MagneticButton>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-12 h-12 flex flex-col justify-center items-center space-y-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 bg-black/50 border border-cyan-400/30"
              aria-label="Toggle mobile menu"
            >
              <span
                className={`w-6 h-0.5 transition-all duration-300 bg-white ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 transition-all duration-300 bg-white ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 transition-all duration-300 bg-white ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`
          lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-cyan-400
          transition-all duration-300 transform origin-top z-50
          ${
            isMobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          }
        `}
        >
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`
                  block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 min-h-[48px] text-base
                  ${
                    activeSection === item.id
                      ? "text-cyan-400 bg-black/70 border border-cyan-400"
                      : "text-white hover:text-cyan-400 hover:bg-black/50"
                  }
                `}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-cyan-400/30 mt-3">
              <MagneticButton
                variant="primary"
                className="w-full py-3 min-h-[48px] bg-cyan-400 hover:bg-cyan-300 text-black rounded-lg font-semibold text-base"
              >
                Get Quote
              </MagneticButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

// Floating navigation dots
export const FloatingNavDots = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "portfolio", "services", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          );
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "portfolio", label: "Portfolio" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-4 xl:right-6 top-1/2 transform -translate-y-1/2 z-30 hidden xl:block">
      <div className="flex flex-col space-y-2 bg-black/80 rounded-full p-2 border border-cyan-400">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`
              relative group w-3 h-3 rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center
              ${
                activeSection === section.id
                  ? "bg-cyan-400 scale-125"
                  : "bg-white hover:bg-cyan-400 hover:scale-110"
              }
            `}
            title={section.label}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                activeSection === section.id ? "bg-black" : "bg-current"
              }`}
            />
            {/* Tooltip */}
            <span className="absolute right-6 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-black text-cyan-400 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-cyan-400">
              {section.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
