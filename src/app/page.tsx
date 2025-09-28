"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  ParticleField,
  FloatingElements,
  GradientOrb,
} from "../components/PremiumUIComponents";
import {
  ScrollReveal,
  StaggeredAnimation,
} from "../components/ScrollAnimations";
import {
  ParallaxContainer,
  MagneticText,
  TiltCard,
  InteractiveDots,
  ScrollProgress,
} from "../components/AdvancedInteractions";
import { LazyWrapper } from "../components/ModernLoadingStates";

import {
  AdvancedScrollReveal,
  StaggeredReveal,
  MorphingBackground,
} from "../components/AdvancedScrollEffects";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const scrollToSection = (sectionId: string) => {
    if (typeof document === "undefined") return;
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      {/* Header rendered by RootLayout */}

      {/* Scroll Progress Bar */}
      <ScrollProgress color="red-500" />

      {/* Enhanced Modern Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="relative flex items-start justify-center overflow-hidden pt-4 sm:pt-6 lg:pt-8 pb-6 sm:pb-8 lg:pb-7"
        style={{
          minHeight: "calc(100vh - var(--header-height))",
          background: `
            radial-gradient(ellipse at top, rgba(239, 68, 68, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at bottom, rgba(220, 38, 38, 0.08) 0%, transparent 50%),
            linear-gradient(135deg, #ffffff 0%, #f9fafb 25%, #ffffff 50%, #f3f4f6 75%, #ffffff 100%)
          `,
        }}
      >
        {/* Advanced Particle System - Reduced for mobile performance */}
        <div className="hidden md:block">
          <ParticleField particleCount={60} color="red" />
          <GradientOrb size="xl" color="pink" position="top-10 -left-20" />
          <GradientOrb size="lg" color="pink" position="bottom-20 -right-16" />
          <GradientOrb size="md" color="pink" position="top-1/3 right-10" />
          <InteractiveDots dotCount={80} className="opacity-30" />
        </div>

        {/* Mobile-optimized background effects */}
        <div className="md:hidden absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-red-300 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Desktop: Animated Particle Background */}
        <div className="hidden lg:block absolute inset-0 overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <FloatingElements key={i} intensity="medium">
              <div
                className="absolute rounded-full bg-red-500/20 animate-particle-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            </FloatingElements>
          ))}
        </div>

        {/* Desktop: Geometric Shapes */}
        <div className="hidden lg:block absolute inset-0 opacity-10">
          <div
            className="absolute top-20 left-10 w-32 h-32 border border-red-500/30 rotate-45"
            style={{
              animation: "float-slow 8s ease-in-out infinite",
            }}
          />
          <div
            className="absolute top-1/3 right-20 w-24 h-24 border border-red-500/20 rounded-full"
            style={{
              animation: "float-fast 6s ease-in-out infinite",
            }}
          />
          <div
            className="absolute bottom-32 left-1/4 w-20 h-20 border border-red-500/25"
            style={{
              animation: "float-slow 7s ease-in-out infinite reverse",
            }}
          />
        </div>

        {/* Dynamic Gradient Overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(239, 68, 68, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(185, 28, 28, 0.2) 0%, transparent 50%)
            `,
            animation: "morph 12s ease-in-out infinite",
          }}
        />

        {/* Desktop: Animated Grid Background */}
        <div className="hidden md:block absolute inset-0 opacity-15">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              animation: "moveGrid 25s linear infinite",
            }}
          ></div>
        </div>

        {/* Main Content Container - Mobile First */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-5 sm:py-6 lg:py-7">
            {/* Content Area - Mobile First Layout */}
            <div className="order-2 lg:order-1 text-center lg:text-left space-y-6 sm:space-y-8">
              {/* Headlines - Responsive Typography */}
              <div className="space-y-4 sm:space-y-6">
                <ScrollReveal>
                  <h1 className="font-heading">
                    <span className="block text-lg sm:text-xl lg:text-2xl font-medium text-gray-600 mb-2 sm:mb-4">
                      <MagneticText magnetStrength={0.2}>
                        Transform Your Business Online
                      </MagneticText>
                    </span>
                    <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent animate-subtle-glow">
                      Drive Real Results
                    </span>
                  </h1>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    Stop losing customers to outdated websites. We create{" "}
                    <span className="text-red-600 font-semibold">
                      high-converting digital experiences
                    </span>{" "}
                    that turn visitors into customers and grow your revenue.
                  </p>
                </ScrollReveal>
              </div>

              {/* Primary CTA - Mobile Optimized */}
              <ScrollReveal delay={0.4}>
                <div className="flex flex-col items-center lg:items-start gap-4 pt-4 sm:pt-6">
                  <FloatingElements intensity="strong">
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-red-600 text-white text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:from-red-600 hover:to-red-700 hover:scale-105 font-semibold min-h-[56px] flex items-center justify-center border-none cursor-pointer"
                    >
                      🚀 Get Your Free Website Audit
                    </button>
                  </FloatingElements>

                  {/* Trust Indicators - Mobile Responsive */}
                  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-gray-600 text-sm sm:text-base">
                    <span className="flex items-center gap-1">
                      <span className="text-green-500">✓</span>
                      No obligation
                    </span>
                    <span className="hidden sm:block">•</span>
                    <span className="flex items-center gap-1">
                      <span className="text-green-500">✓</span>
                      24-hour response
                    </span>
                    <span className="hidden sm:block">•</span>
                    <span className="flex items-center gap-1">
                      <span className="text-green-500">✓</span>
                      Free consultation
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Visual Area - Mobile First */}
            <div className="order-1 lg:order-2 flex items-center justify-center py-8 lg:py-0">
              <ScrollReveal delay={0.5} direction="right">
                <ParallaxContainer speed={0.3}>
                  <TiltCard
                    maxTilt={8}
                    className="w-full max-w-sm sm:max-w-md lg:max-w-lg"
                  >
                    <div className="relative aspect-square flex items-center justify-center">
                      <FloatingElements intensity="medium">
                        <div className="relative">
                          <Image
                            src="/logo.png"
                            alt="Website Expertz Logo"
                            fill
                            priority
                            className="w-full h-full max-w-[200px] sm:max-w-[300px] lg:max-w-[400px] object-contain hover:scale-105 transition-all duration-500 drop-shadow-2xl"
                            sizes="(max-width: 640px) 200px, (max-width: 1024px) 300px, 400px"
                            style={{
                              filter:
                                "drop-shadow(0 20px 40px rgba(220, 38, 38, 0.3))",
                            }}
                          />
                          {/* Subtle glow effect */}
                          <div
                            className="absolute inset-0 rounded-full opacity-30"
                            style={{
                              background:
                                "radial-gradient(circle, rgba(220, 38, 38, 0.2) 0%, transparent 70%)",
                              animation: "gentle-pulse 3s ease-in-out infinite",
                            }}
                          />
                        </div>
                      </FloatingElements>
                    </div>
                  </TiltCard>
                </ParallaxContainer>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Scroll Cue - Mobile Optimized */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-gray-700 text-xs sm:text-sm font-medium">
              Scroll to explore
            </span>
            <div className="w-6 h-10 border-2 border-red-400 rounded-full flex justify-center">
              <div
                className="w-1 h-3 bg-red-400 rounded-full mt-2"
                style={{
                  animation: "floatUp 2s ease-in-out infinite",
                }}
              />
            </div>
            <div className="text-red-400 text-lg">↓</div>
          </div>
        </div>
      </section>

      {/* Social Proof Section - Mobile First */}
      <section
        id="social-proof"
        className="py-12 sm:py-16 lg:py-20 bg-gray-50 border-y border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Trusted by 150+ Growing Businesses
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Join successful companies that have transformed their online
                presence with our proven strategies
              </p>
            </div>
          </ScrollReveal>

          {/* Stats Grid - Mobile Responsive */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            {[
              { number: "150+", label: "Projects Delivered", icon: "🚀" },
              { number: "98%", label: "Client Satisfaction", icon: "⭐" },
              { number: "300%", label: "Average ROI Increase", icon: "📈" },
              { number: "3 Weeks", label: "Average Delivery", icon: "⚡" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3">
                  {stat.icon}
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Client Logos - Mobile Optimized */}
          <ScrollReveal delay={0.2}>
            <div className="text-center">
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                Proud to work with innovative companies
              </p>
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 opacity-60">
                {[
                  "TechStart Solutions",
                  "Urban Fitness Studio",
                  "Artisan Jewelry Co.",
                  "Digital Dynamics",
                  "Growth Labs",
                ].map((company, index) => (
                  <div
                    key={index}
                    className="text-sm sm:text-base lg:text-lg font-semibold text-gray-500 px-3 py-2 bg-white/50 rounded-lg hover:bg-white/80 transition-all duration-300"
                  >
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Problem/Solution Section - Mobile First */}
      <MorphingBackground className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggeredReveal stagger={0.15}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
              {/* Problem Side - Mobile First */}
              <div className="space-y-6 sm:space-y-8">
                <ScrollReveal>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center lg:text-left leading-tight">
                    Is Your Website
                    <span className="text-red-600 block sm:inline">
                      {" "}
                      Costing You Business?
                    </span>
                  </h2>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                  <div className="space-y-4 sm:space-y-6">
                    {[
                      "Your website looks outdated and unprofessional",
                      "Visitors leave without taking action or contacting you",
                      "You're invisible on Google and losing to competitors",
                      "Your site is slow and doesn't work well on mobile",
                    ].map((problem, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 sm:space-x-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-500"
                      >
                        <div className="w-6 h-6 sm:w-7 sm:h-7 bg-red-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                          <span className="text-white text-sm font-bold">
                            ✕
                          </span>
                        </div>
                        <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed font-medium">
                          {problem}
                        </p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              {/* Solution Side - Mobile First */}
              <div className="space-y-6 sm:space-y-8">
                <ScrollReveal delay={0.2}>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center lg:text-left leading-tight">
                    We Fix These Problems
                    <span className="text-red-600 block sm:inline"> Fast</span>
                  </h2>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <div className="space-y-4 sm:space-y-6">
                    {[
                      "Modern, professional websites that build trust",
                      "High-converting designs that turn visitors into customers",
                      "SEO optimization that gets you found on Google",
                      "Mobile-first, lightning-fast performance",
                    ].map((solution, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 sm:space-x-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-500"
                      >
                        <div className="w-6 h-6 sm:w-7 sm:h-7 bg-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                          <span className="text-white text-sm font-bold">
                            ✓
                          </span>
                        </div>
                        <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed font-medium">
                          {solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <div className="pt-6 flex justify-center lg:justify-start">
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-red-600 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-xl shadow-lg font-bold text-base sm:text-lg hover:from-red-600 hover:to-red-700 hover:scale-105 transition-all duration-300 border-none cursor-pointer min-h-[56px] flex items-center justify-center"
                    >
                      Get Your Free Website Audit
                    </button>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </StaggeredReveal>
        </div>
      </MorphingBackground>

      {/* Enhanced How We Deliver Section - Mobile First */}
      <section
        id="about"
        className="py-12 sm:py-16 lg:py-20 bg-gray-50 relative overflow-hidden"
      >
        {/* Background Elements - Desktop Only */}
        <div className="hidden lg:block absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-red-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
                How We Deliver Results
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our proven 4-step process transforms your vision into a
                high-converting digital experience that drives real business
                growth.
              </p>
            </div>
          </ScrollReveal>

          {/* Mobile-First Process Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-6">
            {[
              {
                title: "Discovery & Strategy",
                description:
                  "We dive deep into your business goals, analyze your target audience, and study your competition to create a winning digital strategy.",
                icon: "🎯",
                number: "1",
                duration: "Week 1",
                color: "red",
                deliverables: [
                  "Market Research",
                  "Competitor Analysis",
                  "Strategy Blueprint",
                  "Goals & KPIs",
                ],
              },
              {
                title: "Design & Prototype",
                description:
                  "We craft beautiful, conversion-focused designs that reflect your brand identity and create engaging user experiences.",
                icon: "🎨",
                number: "2",
                duration: "Week 2",
                color: "orange",
                deliverables: [
                  "Wireframes",
                  "Visual Design",
                  "Interactive Prototype",
                  "Brand Guidelines",
                ],
              },
              {
                title: "Development & Build",
                description:
                  "We build your website with clean, modern code, ensuring it's lightning-fast, secure, and works flawlessly on all devices.",
                icon: "💻",
                number: "3",
                duration: "Week 3-4",
                color: "blue",
                deliverables: [
                  "Responsive Website",
                  "Performance Optimization",
                  "Security Setup",
                  "Testing & QA",
                ],
              },
              {
                title: "Launch & Optimize",
                description:
                  "We launch your site with comprehensive monitoring and continuously optimize for maximum performance and conversions.",
                icon: "🚀",
                number: "4",
                duration: "Week 5+",
                color: "green",
                deliverables: [
                  "Site Launch",
                  "Analytics Setup",
                  "Performance Monitoring",
                  "Ongoing Optimization",
                ],
              },
            ].map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group relative border border-gray-100 hover:border-red-200 h-full flex flex-col">
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 sm:w-10 sm:h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base shadow-lg">
                    {step.number}
                  </div>

                  {/* Card Header */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors leading-tight">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <div className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider">
                      {step.duration}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex-grow">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
                      {step.description}
                    </p>

                    {/* Deliverables */}
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-gray-700 mb-3 sm:mb-4 border-l-4 border-red-500 pl-3">
                        What You Get:
                      </h4>
                      <div className="space-y-2 sm:space-y-3">
                        {step.deliverables.map((deliverable, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
                          >
                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-xs font-bold">
                                ✓
                              </span>
                            </div>
                            <span className="text-gray-600">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Desktop: Progress Connector */}
                  {index < 3 && (
                    <div className="hidden xl:block absolute top-1/2 -right-3 w-6 h-0.5 bg-red-200 transform -translate-y-1/2">
                      <div className="absolute right-0 top-1/2 w-2 h-2 bg-red-400 rounded-full transform -translate-y-1/2"></div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Enhanced Process Benefits */}
          <ScrollReveal delay={0.6}>
            <div className="cta-section mt-16">
              <div className="text-center space-y-6">
                <h3 className="section-heading text-gray-900">
                  Why Our Process Works
                </h3>

                <div className="process-benefits">
                  <div className="benefit-card">
                    <div className="benefit-icon">⚡</div>
                    <h4 className="content-heading text-gray-900 mb-3">
                      Fast Delivery
                    </h4>
                    <p className="text-body text-gray-600">
                      Most projects completed in 3-5 weeks with regular updates
                      and transparent communication throughout.
                    </p>
                  </div>

                  <div className="benefit-card">
                    <div className="benefit-icon">🎯</div>
                    <h4 className="content-heading text-gray-900 mb-3">
                      Results-Focused
                    </h4>
                    <p className="text-body text-gray-600">
                      Every decision is data-driven, focused on increasing
                      conversions and growing your bottom line.
                    </p>
                  </div>

                  <div className="benefit-card">
                    <div className="benefit-icon">🛡️</div>
                    <h4 className="content-heading text-gray-900 mb-3">
                      Risk-Free
                    </h4>
                    <p className="text-body text-gray-600">
                      100% satisfaction guarantee with unlimited revisions until
                      you&apos;re completely happy.
                    </p>
                  </div>
                </div>

                {/* Process CTA */}
                <div className="pt-8">
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 min-h-[56px] shadow-2xl rounded-lg font-bold text-lg hover:from-red-600 hover:to-red-700 hover:scale-105 transition-all duration-300 border-none cursor-pointer"
                  >
                    🚀 Start Your Project Today
                  </button>
                  <p className="text-caption text-gray-600 mt-4">
                    Free consultation • No commitment required • 24-hour
                    response guaranteed
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section - Mobile First */}
      <MorphingBackground>
        <section
          id="services"
          className="py-12 sm:py-16 lg:py-20 bg-white relative"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AdvancedScrollReveal direction="up" delay={0.1}>
              <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Core Services That Drive Growth
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Three essential services that transform your business and
                  maximize your online potential.
                </p>
              </div>
            </AdvancedScrollReveal>

            <StaggeredAnimation stagger={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                {[
                  {
                    title: "Website Development",
                    valueProposition:
                      "Turn visitors into customers with high-converting designs",
                    description:
                      "Professional websites built for speed, security, and results. Modern responsive design that works perfectly on all devices.",
                    icon: "💻",
                    features: [
                      "Mobile-First Design",
                      "Lightning Fast Loading",
                      "SEO Optimized",
                      "Conversion Focused",
                    ],
                    cta: "View Website Projects",
                  },
                  {
                    title: "Digital Marketing",
                    valueProposition:
                      "Get found on Google and grow your business",
                    description:
                      "Complete SEO, PPC, and social media strategies that drive qualified traffic and increase your online visibility.",
                    icon: "📈",
                    features: [
                      "Google SEO",
                      "Paid Advertising",
                      "Social Media",
                      "Analytics & Reporting",
                    ],
                    cta: "Boost My Visibility",
                  },
                  {
                    title: "E-commerce Solutions",
                    valueProposition:
                      "Online stores that sell 24/7 automatically",
                    description:
                      "From product showcases to secure checkout, we build e-commerce sites that maximize sales and customer satisfaction.",
                    icon: "🛒",
                    features: [
                      "Secure Payments",
                      "Inventory Management",
                      "Mobile Shopping",
                      "Sales Analytics",
                    ],
                    cta: "Start Selling Online",
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 sm:p-8 lg:p-10 rounded-2xl border border-gray-200 h-full shadow-sm hover:shadow-lg hover:bg-white transition-all duration-300 group"
                  >
                    {/* Service Icon */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {service.icon}
                    </div>

                    {/* Service Title */}
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-red-600 transition-colors">
                      {service.title}
                    </h3>

                    {/* Value Proposition */}
                    <p className="text-sm sm:text-base text-red-600 font-semibold uppercase tracking-wider mb-4 sm:mb-6">
                      {service.valueProposition}
                    </p>

                    {/* Description */}
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="mb-6 sm:mb-8">
                      <ul className="space-y-3 sm:space-y-4">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center space-x-3 text-sm sm:text-base text-gray-600"
                          >
                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-xs sm:text-sm font-bold">
                                ✓
                              </span>
                            </div>
                            <span className="font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="w-full bg-transparent text-red-600 border-2 border-red-500 hover:bg-red-500 hover:text-white px-6 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 min-h-[48px] cursor-pointer"
                    >
                      {service.cta}
                    </button>
                  </div>
                ))}
              </div>
            </StaggeredAnimation>
          </div>
        </section>
      </MorphingBackground>

      {/* Testimonials Section - Mobile First */}
      <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdvancedScrollReveal direction="up" delay={0.1}>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
                Real Results From Real Clients
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                See how we&apos;ve helped businesses like yours grow their
                online presence and increase revenue.
              </p>
            </div>
          </AdvancedScrollReveal>

          <LazyWrapper delay={500}>
            {/* Testimonials Grid - Mobile Responsive */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20">
              {[
                {
                  name: "Sarah Johnson",
                  position: "CEO",
                  company: "TechStart Solutions",
                  result: "300% increase in leads",
                  quote:
                    "WebsiteExpertz transformed our online presence completely. Our new website not only looks amazing but actually converts visitors into customers. The results speak for themselves - we've tripled our lead generation in just 3 months.",
                  rating: 5,
                },
                {
                  name: "Michael Chen",
                  position: "Founder",
                  company: "Urban Fitness Studio",
                  result: "250% boost in bookings",
                  quote:
                    "The team understood our vision perfectly. They created a mobile-first website that makes it easy for clients to book classes. Our online bookings have increased dramatically since the launch.",
                  rating: 5,
                },
                {
                  name: "Emma Rodriguez",
                  position: "Owner",
                  company: "Artisan Jewelry Co.",
                  result: "400% growth in sales",
                  quote:
                    "Our e-commerce site is now our biggest revenue driver. The design is beautiful and the checkout process is seamless. We've seen a 400% increase in online sales since working with WebsiteExpertz.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
                    {/* Rating and Result Badge */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-lg sm:text-xl ${
                              i < testimonial.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="inline-block bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                        {testimonial.result}
                      </span>
                    </div>

                    {/* Quote */}
                    <blockquote className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 flex-grow italic group-hover:text-gray-900 transition-colors">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                        <span className="text-white font-bold text-lg sm:text-xl">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">
                          {testimonial.name}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600">
                          {testimonial.position}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Results Stats - Mobile Responsive Grid */}
            <ScrollReveal>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
                {[
                  {
                    number: "150+",
                    label: "Projects Completed",
                    icon: "🚀",
                  },
                  {
                    number: "98%",
                    label: "Client Satisfaction",
                    icon: "⭐",
                  },
                  {
                    number: "300%",
                    label: "Average ROI Increase",
                    icon: "📈",
                  },
                  {
                    number: "24/7",
                    label: "Support Available",
                    icon: "🛟",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center group hover:scale-105 transition-transform duration-300 p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-md"
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-xl sm:text-2xl mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {stat.icon}
                    </div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-1 sm:mb-2">
                      {stat.number}
                    </div>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </LazyWrapper>
        </div>
      </section>

      {/* Contact Us Section - Mobile First */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Get a free consultation and see how we can transform your
                business online
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg border border-gray-200">
                {/* Form Header */}
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Get Your Free Website Audit
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Tell us about your project and we&apos;ll get back to you
                    within 24 hours
                  </p>
                </div>

                {/* Contact Form - Mobile Optimized */}
                <form className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-4 text-base border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 bg-gray-50 focus:bg-white min-h-[56px]"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="w-full px-4 py-4 text-base border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 bg-gray-50 focus:bg-white min-h-[56px]"
                    />
                  </div>

                  <input
                    type="tel"
                    placeholder="Phone Number (optional)"
                    className="w-full px-4 py-4 text-base border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 bg-gray-50 focus:bg-white min-h-[56px]"
                  />

                  <textarea
                    placeholder="Brief message about your project (optional)"
                    rows={4}
                    className="w-full px-4 py-4 text-base border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 resize-none bg-gray-50 focus:bg-white"
                  />

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:from-red-600 hover:to-red-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl min-h-[56px] border-none cursor-pointer"
                  >
                    🚀 Get My Free Audit
                  </button>
                </form>

                {/* Trust Indicators - Mobile Responsive */}
                <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm sm:text-base text-gray-600">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500 text-lg">✓</span>
                      <span className="font-medium">No obligation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500 text-lg">✓</span>
                      <span className="font-medium">24-hour response</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500 text-lg">✓</span>
                      <span className="font-medium">Free consultation</span>
                    </div>
                  </div>
                </div>

                {/* Alternative Contact - Mobile Optimized */}
                <div className="mt-6 sm:mt-8 text-center">
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    Prefer to talk directly?
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                    <a
                      href="mailto:info@websiteexpertz.com"
                      className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors font-medium min-h-[44px] px-4 py-2 rounded-lg hover:bg-red-50"
                    >
                      <span className="text-xl">📧</span>
                      <span className="text-sm sm:text-base">
                        info@websiteexpertz.com
                      </span>
                    </a>
                    <a
                      href="tel:+918923992522"
                      className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors font-medium min-h-[44px] px-4 py-2 rounded-lg hover:bg-red-50"
                    >
                      <span className="text-xl">📞</span>
                      <span className="text-sm sm:text-base">
                        +91-8923992522
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Enhanced Footer - Mobile First */}
      <footer className="bg-gray-200 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4 sm:mb-6">
                <Image
                  src="/logo.png"
                  alt="WebsiteExpertz Logo"
                  width={160}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 max-w-sm">
                Transforming businesses with cutting-edge web solutions and
                digital marketing strategies that drive real results.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-gray-300"
                >
                  <span className="text-xl">📘</span>
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-gray-300"
                >
                  <span className="text-xl">🐦</span>
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-gray-300"
                >
                  <span className="text-xl">💼</span>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4 sm:mb-6 text-gray-900 text-base sm:text-lg">
                Services
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-700 hover:text-red-500 transition-colors text-sm sm:text-base bg-transparent border-none cursor-pointer p-0 text-left"
                  >
                    Website Development
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-700 hover:text-red-500 transition-colors text-sm sm:text-base bg-transparent border-none cursor-pointer p-0 text-left"
                  >
                    Digital Marketing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-700 hover:text-red-500 transition-colors text-sm sm:text-base bg-transparent border-none cursor-pointer p-0 text-left"
                  >
                    E-commerce Solutions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-700 hover:text-red-500 transition-colors text-sm sm:text-base bg-transparent border-none cursor-pointer p-0 text-left"
                  >
                    SEO Optimization
                  </button>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4 sm:mb-6 text-gray-900 text-base sm:text-lg">
                Company
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-gray-700 hover:text-red-500 transition-colors text-sm sm:text-base bg-transparent border-none cursor-pointer p-0 text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-gray-700 hover:text-red-500 transition-colors text-sm sm:text-base bg-transparent border-none cursor-pointer p-0 text-left"
                  >
                    Our Process
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("testimonials")}
                    className="text-gray-700 hover:text-red-500 transition-colors text-sm sm:text-base bg-transparent border-none cursor-pointer p-0 text-left"
                  >
                    Case Studies
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("social-proof")}
                    className="text-gray-700 hover:text-red-500 transition-colors text-sm sm:text-base bg-transparent border-none cursor-pointer p-0 text-left"
                  >
                    Social Proof
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 sm:mb-6 text-gray-900 text-base sm:text-lg">
                Contact
              </h4>
              <div className="space-y-3 sm:space-y-4">
                <a
                  href="mailto:info@websiteexpertz.com"
                  className="flex items-center gap-3 text-gray-700 hover:text-red-500 transition-colors text-sm sm:text-base p-2 rounded-lg hover:bg-gray-300 -ml-2"
                >
                  <span className="text-xl">📧</span>
                  <span>info@websiteexpertz.com</span>
                </a>
                <a
                  href="tel:+918923992522"
                  className="flex items-center gap-3 text-gray-700 hover:text-red-500 transition-colors text-sm sm:text-base p-2 rounded-lg hover:bg-gray-300 -ml-2"
                >
                  <span className="text-xl">📞</span>
                  <span>+91-8923992522</span>
                </a>
                <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
                  <span className="text-xl">📍</span>
                  <span>India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-400 mt-8 sm:mt-12 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-xs sm:text-sm text-center sm:text-left">
                &copy; 2025. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-xs sm:text-sm">
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-500 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-500 transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-500 transition-colors"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
