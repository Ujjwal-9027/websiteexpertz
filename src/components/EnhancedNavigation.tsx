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
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-200/30">
        <div
          className="h-full bg-orange-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav
        className={`
        fixed top-0 left-0 right-0 z-40 transition-all duration-500
        ${isScrolled ? "glass py-2" : "bg-transparent py-4"}
        ${className}
      `}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="flex items-center space-x-2 text-lg sm:text-xl font-bold cursor-pointer"
              onClick={() => scrollToSection("#home")}
            >
              <span
                className={`transition-colors duration-300 ${
                  isScrolled ? "text-orange-800" : "text-orange-800"
                }`}
              >
                Website Expertz
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className={`
                    relative px-4 py-2 rounded-full font-medium transition-all duration-300
                    hover:bg-white/10 hover:backdrop-blur-sm text-sm sm:text-base
                    ${
                      activeSection === item.id
                        ? "text-orange-600 bg-white/20 backdrop-blur-sm"
                        : `${
                            isScrolled ? "text-orange-800" : "text-orange-800"
                          } hover:text-orange-600`
                    }
                  `}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-600 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <MagneticButton
                variant="primary"
                className="px-4 py-2 sm:px-6 sm:py-3 text-sm min-h-[44px]"
              >
                Get Quote
              </MagneticButton>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center space-y-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600/50 transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              <span
                className={`w-6 h-0.5 transition-all duration-300 ${
                  isScrolled ? "bg-orange-800" : "bg-orange-800"
                } ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              />
              <span
                className={`w-6 h-0.5 transition-all duration-300 ${
                  isScrolled ? "bg-orange-800" : "bg-orange-800"
                } ${isMobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-6 h-0.5 transition-all duration-300 ${
                  isScrolled ? "bg-orange-800" : "bg-orange-800"
                } ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`
          md:hidden absolute top-full left-0 right-0 glass backdrop-blur-xl bg-white/95 border-b border-white/20
          transition-all duration-300 transform origin-top z-50
          ${
            isMobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          }
        `}
        >
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`
                  block w-full text-left px-4 py-4 rounded-xl font-medium transition-all duration-300 min-h-[44px]
                  ${
                    activeSection === item.id
                      ? "text-orange-600 bg-orange-50 border border-orange-200"
                      : "text-gray-800 hover:text-orange-600 hover:bg-orange-50"
                  }
                `}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <MagneticButton
                variant="primary"
                className="w-full py-4 min-h-[44px]"
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
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
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
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block">
      <div className="flex flex-col space-y-3 glass rounded-full p-3">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`
              relative group w-3 h-3 rounded-full transition-all duration-300
              ${
                activeSection === section.id
                  ? "bg-orange-600 scale-125"
                  : "bg-gray-400 hover:bg-orange-400 hover:scale-110"
              }
            `}
            title={section.label}
          >
            {/* Tooltip */}
            <span className="absolute right-6 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {section.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
