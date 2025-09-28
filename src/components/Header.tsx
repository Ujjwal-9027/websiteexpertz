"use client";

import { useState, useEffect, MouseEvent } from "react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const updateIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        closeMenu();
      }
    };

    // Scroll to top on page load/refresh
    window.scrollTo({ top: 0, behavior: "instant" });

    updateIsDesktop();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", updateIsDesktop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", updateIsDesktop);
      // Clean up body class on unmount
      if (typeof document !== "undefined") {
        document.body.classList.remove("nav-open");
      }
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    if (typeof document !== "undefined") {
      if (newMenuState) {
        document.body.classList.add("nav-open");
      } else {
        document.body.classList.remove("nav-open");
      }
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    if (typeof document !== "undefined") {
      document.body.classList.remove("nav-open");
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Refresh the page when logo is clicked
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  const navigationItems = [
    { href: "#home", label: "Home", icon: "🏠" },
    { href: "#about", label: "About", icon: "ℹ️" },
    { href: "#services", label: "Services", icon: "⚙️" },
    { href: "#testimonials", label: "Testimonials", icon: "💬" },
    { href: "#contact", label: "Contact", icon: "📧" },
  ];

  const ctaButton = {
    href: "#contact",
    label: "Get Quote",
    icon: "💰",
  };

  const handleNavigation = (href: string, e: MouseEvent) => {
    e.preventDefault();
    closeMenu();

    if (href.startsWith("#")) {
      const sectionId = href.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      return;
    }

    if (typeof window !== "undefined") {
      window.location.href = href;
    }
  };

  if (!isMounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <>
      <header
        className={`mobile-nav ${isScrolled ? "scrolled" : ""} w-full z-50`}
      >
        <div
          className="nav-container px-4 sm:px-6 lg:px-8"
          style={{ position: "relative", zIndex: 2 }}
        >
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="nav-logo flex items-center space-x-2 bg-transparent border-none cursor-pointer p-0"
            aria-label="Website Expertz Home"
          >
            <Image
              src="/logo.png"
              alt="WebsiteExpertz Logo"
              width={120}
              height={40}
              priority
              className="h-6 w-auto sm:h-8 lg:h-10 transition-all duration-300 hover:scale-105"
            />
            <span className="hidden sm:block text-lg lg:text-xl font-bold text-red-600">
              WebsiteExpertz
            </span>
          </button>

          {/* Desktop Navigation - Only visible on large screens */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            <ul className="nav-links flex items-center space-x-6">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={(e) => handleNavigation(item.href, e)}
                    className="text-gray-800 hover:text-red-600 transition-all duration-300 font-medium text-base lg:text-lg px-3 py-2 rounded-lg hover:bg-red-50 border-none bg-transparent cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Desktop CTA Button */}
            {isDesktop && (
              <button
                onClick={(e) => handleNavigation(ctaButton.href, e)}
                className="desktop-nav-cta inline-flex items-center bg-red-600 text-white hover:bg-red-700 transition-all duration-300 font-medium text-base lg:text-lg px-4 py-2 rounded-lg hover:shadow-lg ml-4 border-none cursor-pointer"
              >
                {ctaButton.label}
              </button>
            )}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`nav-toggle lg:hidden ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            type="button"
          >
            <span className="nav-toggle-line"></span>
            <span className="nav-toggle-line"></span>
            <span className="nav-toggle-line"></span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div
        className={`nav-menu lg:hidden ${isMenuOpen ? "open" : ""}`}
        role="navigation"
        aria-hidden={!isMenuOpen}
        aria-label="Mobile navigation menu"
      >
        <div className="nav-menu-inner">
          <ul className="nav-links" role="list">
            {navigationItems.map((item) => (
              <li key={item.href} role="listitem">
                <button
                  onClick={(e) => handleNavigation(item.href, e)}
                  className="w-full text-left border-none bg-transparent cursor-pointer nav-link-button"
                  tabIndex={isMenuOpen ? 0 : -1}
                  aria-label={`Navigate to ${item.label} section`}
                >
                  <span className="nav-icon text-2xl" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="text-lg font-medium">{item.label}</span>
                </button>
              </li>
            ))}

            {/* Mobile CTA Button */}
            <li role="listitem" className="mt-4 px-4">
              <button
                onClick={(e) => handleNavigation(ctaButton.href, e)}
                className="w-full bg-red-600 text-white hover:bg-red-700 transition-all duration-300 font-medium text-lg px-4 py-3 rounded-lg hover:shadow-lg flex items-center justify-center space-x-2 border-none cursor-pointer"
                tabIndex={isMenuOpen ? 0 : -1}
                aria-label={ctaButton.label}
              >
                <span className="text-2xl" aria-hidden="true">
                  {ctaButton.icon}
                </span>
                <span>{ctaButton.label}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`nav-overlay lg:hidden ${isMenuOpen ? "visible" : ""}`}
        onClick={closeMenu}
      />
    </>
  );
};

export default Header;
