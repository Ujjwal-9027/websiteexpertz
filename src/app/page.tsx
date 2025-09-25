"use client";

import { useRef } from "react";
import { CountUpNumber } from "../components/TextAnimations";
import { 
  GlassCard, 
  MagneticButton, 
  ParticleField,
  FloatingElements,
  GradientOrb,
  RippleButton,
  CursorFollower
} from "../components/PremiumUIComponents";
import {
  ScrollReveal,
  TextReveal,
  StaggeredAnimation,
} from "../components/ScrollAnimations";
import { EnhancedNav, FloatingNavDots } from "../components/EnhancedNavigation";
import {
  ParallaxContainer,
  MagneticText,
  TiltCard,
  InteractiveDots,
  ScrollProgress,
  MorphingButton,
  GlitchText,
  LoadingSpinner
} from "../components/AdvancedInteractions";
import { 
  Skeleton, 
  LoadingButton, 
  ProgressiveImage, 
  LoadingOverlay,
  LazyWrapper 
} from "../components/ModernLoadingStates";
import {
  EnhancedInput,
  EnhancedTextarea,
  InteractiveForm,
  AnimatedSubmitButton
} from "../components/InteractiveForm";
import {
  InteractiveCard,
  EnhancedTabs
} from "../components/InteractiveComponents";
import {
  AdvancedScrollReveal,
  ParallaxScroll,
  StaggeredReveal,
  ScrollCounter,
  ScrollTextReveal,
  ScrollProgressCircle,
  MorphingBackground
} from "../components/AdvancedScrollEffects";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Advanced Cursor Follower */}
      <CursorFollower color="cyan-400" size={24} />
      
      {/* Scroll Progress Bar */}
      <ScrollProgress color="cyan-400" />
      
      {/* Enhanced Navigation */}
      <EnhancedNav />
      <FloatingNavDots />

      {/* Enhanced Modern Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse at top, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at bottom, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #0f172a 50%, #1e293b 75%, #0f172a 100%)
          `,
        }}
      >
        {/* Advanced Particle System */}
        <ParticleField particleCount={80} color="cyan" />
        
        {/* Gradient Orbs */}
        <GradientOrb size="xl" color="cyan" position="top-10 -left-20" />
        <GradientOrb size="lg" color="purple" position="bottom-20 -right-16" />
        <GradientOrb size="md" color="pink" position="top-1/3 right-10" />

        {/* Interactive Background Dots */}
        <InteractiveDots dotCount={120} className="opacity-30" />

        {/* Animated Particle Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Enhanced Floating Particles */}
          {Array.from({ length: 30 }).map((_, i) => (
            <FloatingElements key={i} intensity="medium">
              <div
                className="absolute rounded-full bg-cyan-400/20 animate-particle-float"
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

        {/* Geometric Shapes */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-20 left-10 w-32 h-32 border border-cyan-400/30 rotate-45"
            style={{
              animation: "float-slow 8s ease-in-out infinite",
            }}
          />
          <div
            className="absolute top-1/3 right-20 w-24 h-24 border border-cyan-400/20 rounded-full"
            style={{
              animation: "float-fast 6s ease-in-out infinite",
            }}
          />
          <div
            className="absolute bottom-32 left-1/4 w-20 h-20 border border-cyan-400/25"
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
              radial-gradient(circle at 20% 80%, rgba(34, 211, 238, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(8, 145, 178, 0.2) 0%, transparent 50%)
            `,
            animation: "morph 12s ease-in-out infinite",
          }}
        />

        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-15">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              animation: "moveGrid 25s linear infinite",
            }}
          ></div>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full pt-20 sm:pt-24 lg:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-16 sm:py-20">
            {/* Left Content Area */}
            <div className="text-left space-y-6 sm:space-y-8">
              {/* Streamlined Headlines */}
              <div className="space-y-6 sm:space-y-8">
                <ScrollReveal>
                  <h1 className="font-heading text-center lg:text-left">
                    <span className="block text-heading-4 font-medium text-secondary content-spacing-xs">
                      <MagneticText magnetStrength={0.2}>
                        Transform Your Business Online
                      </MagneticText>
                    </span>
                    <span className="block text-display font-bold gradient-text animate-subtle-glow hover-neon">
                        Drive Real Results
                    </span>
                  </h1>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="content-spacing-lg">
                    <p className="text-body-xl text-primary max-w-2xl font-body leading-relaxed text-center lg:text-left">
                      Stop losing customers to outdated websites. We create{" "}
                      <span className="text-accent font-semibold text-gradient-animated">
                        high-converting digital experiences
                      </span>{" "}
                      that turn visitors into customers and grow your revenue.
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              {/* Trust Signals - Moved up for better trust building */}
              <ScrollReveal delay={0.3}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 py-6 content-spacing-lg">
                  <AdvancedScrollReveal direction="scale" delay={0.1}>
                    <div className="text-center lg:text-left">
                      <div className="text-heading-3 font-bold text-accent">
                        <ScrollCounter end={150} suffix="+" duration={2.5} />
                      </div>
                      <div className="text-caption text-muted">
                        Projects Delivered
                      </div>
                    </div>
                  </AdvancedScrollReveal>

                  <AdvancedScrollReveal direction="scale" delay={0.2}>
                    <div className="text-center lg:text-left">
                      <div className="text-heading-3 font-bold text-accent">
                        <ScrollCounter end={98} suffix="%" duration={2.5} />
                      </div>
                      <div className="text-caption text-muted">
                        Client Satisfaction
                      </div>
                    </div>
                  </AdvancedScrollReveal>

                  <AdvancedScrollReveal direction="scale" delay={0.3}>
                    <div className="text-center lg:text-left">
                      <div className="text-heading-3 font-bold text-accent">
                        <ScrollCounter end={3} suffix="" duration={2} /> Weeks
                      </div>
                      <div className="text-caption text-muted">
                        Average Delivery
                      </div>
                    </div>
                  </AdvancedScrollReveal>
                </div>
              </ScrollReveal>

              {/* Primary CTA - Enhanced */}
              <ScrollReveal delay={0.4}>
                <div className="flex flex-col items-center lg:items-start gap-4 pt-6">
                  <FloatingElements intensity="strong">
                    <RippleButton 
                      variant="primary" 
                      className="bg-cyan-500 hover:bg-cyan-400 text-white border-0 text-lg px-10 py-4 min-h-[56px] font-accent rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      🚀 Get Your Free Website Audit
                    </RippleButton>
                  </FloatingElements>
                  <div className="flex items-center gap-2 text-muted text-body-sm animate-slide-in-bottom">
                    <span className="micro-bounce">✓ No obligation</span>
                    <span>•</span>
                    <span className="micro-bounce" style={{ animationDelay: '0.1s' }}>✓ 24-hour response</span>
                    <span>•</span>
                    <span className="micro-bounce" style={{ animationDelay: '0.2s' }}>✓ Free consultation</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Visual Area */}
            <div className="relative lg:h-[600px] flex items-center justify-center mt-8 lg:mt-0">
              <ScrollReveal delay={0.5} direction="right">
                <ParallaxContainer speed={0.3}>
                  <TiltCard maxTilt={15} className="relative w-full max-w-lg">
                    {/* 3D Globe/Website Preview Container */}
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto card-holographic">
                    {/* Rotating Globe Background */}
                    <div
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-cyan-600/30 border border-cyan-400/30"
                      style={{
                        animation: "rotate3d 20s ease-in-out infinite",
                      }}
                    >
                      {/* Globe Grid Lines */}
                      <div className="absolute inset-4 rounded-full border border-cyan-400/20"></div>
                      <div className="absolute inset-8 rounded-full border border-cyan-400/15"></div>
                      <div className="absolute top-1/2 left-0 right-0 h-px bg-cyan-400/20"></div>
                      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-cyan-400/20"></div>
                    </div>

                    {/* Floating Website Mockups */}
                    <div className="absolute inset-0">
                      {/* Main Website Preview */}
                      <div
                        className="absolute top-8 left-8 w-32 h-20 bg-gray-900 rounded-lg shadow-2xl border border-cyan-400/30"
                        style={{
                          animation: "floatUp 6s ease-in-out infinite",
                          transform:
                            "perspective(1000px) rotateY(-15deg) rotateX(10deg)",
                        }}
                      >
                        <div className="h-4 bg-gray-800 rounded-t-lg flex items-center px-2 space-x-1">
                          <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="p-2 space-y-1">
                          <div className="w-16 h-1 bg-cyan-400 rounded"></div>
                          <div className="w-12 h-1 bg-cyan-300 rounded"></div>
                          <div className="w-20 h-1 bg-cyan-200 rounded"></div>
                        </div>
                      </div>

                      {/* Mobile App Preview */}
                      <div
                        className="absolute top-16 right-12 w-12 h-20 bg-gray-900 rounded-lg shadow-xl border border-cyan-400/30"
                        style={{
                          animation: "floatUp 7s ease-in-out infinite",
                          animationDelay: "1s",
                          transform:
                            "perspective(1000px) rotateY(15deg) rotateX(-5deg)",
                        }}
                      >
                        <div className="h-2 bg-gray-800 rounded-t-lg"></div>
                        <div className="p-1 space-y-1">
                          <div className="w-8 h-1 bg-cyan-400 rounded mx-auto"></div>
                          <div className="w-6 h-1 bg-cyan-300 rounded mx-auto"></div>
                          <div className="w-7 h-1 bg-cyan-200 rounded mx-auto"></div>
                        </div>
                      </div>

                      {/* Dashboard Preview */}
                      <div
                        className="absolute bottom-12 left-12 w-24 h-16 bg-gray-900 rounded-lg shadow-xl border border-cyan-400/30"
                        style={{
                          animation: "floatUp 8s ease-in-out infinite",
                          animationDelay: "2s",
                          transform:
                            "perspective(1000px) rotateY(-10deg) rotateX(5deg)",
                        }}
                      >
                        <div className="h-3 bg-gray-800 rounded-t-lg"></div>
                        <div className="p-1 space-y-1">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-cyan-400 rounded"></div>
                            <div className="w-3 h-2 bg-cyan-300 rounded"></div>
                          </div>
                          <div className="w-16 h-1 bg-cyan-200 rounded"></div>
                        </div>
                      </div>
                    </div>

                    {/* Orbiting Service Elements */}
                    <div className="absolute inset-0">
                      {/* SEO Service */}
                      <div
                        className="absolute top-4 right-4 w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold shadow-lg cursor-pointer hover:scale-110 transition-transform group"
                        style={{
                          animation: "floatUp 5s ease-in-out infinite",
                          animationDelay: "0.5s",
                        }}
                        title="SEO Optimization"
                      >
                        🔍
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          SEO Optimization
                        </div>
                      </div>

                      {/* Digital Marketing */}
                      <div
                        className="absolute bottom-4 right-8 w-14 h-14 bg-cyan-400 rounded-2xl flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform group"
                        style={{
                          animation: "floatUp 6s ease-in-out infinite",
                          animationDelay: "1.5s",
                        }}
                        title="Digital Marketing"
                      >
                        <div className="w-8 h-8 flex items-end space-x-1">
                          <div className="w-1 h-3 bg-black rounded-full"></div>
                          <div className="w-1 h-4 bg-black rounded-full"></div>
                          <div className="w-1 h-6 bg-black rounded-full"></div>
                          <div className="w-1 h-5 bg-black rounded-full"></div>
                        </div>
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          Digital Marketing
                        </div>
                      </div>

                      {/* Performance Optimization */}
                      <div
                        className="absolute left-4 bottom-8 w-10 h-10 bg-cyan-400 rounded-lg flex items-center justify-center text-black shadow-lg cursor-pointer hover:scale-110 transition-transform group"
                        style={{
                          animation: "floatUp 4s ease-in-out infinite",
                          animationDelay: "2.5s",
                        }}
                        title="Performance Optimization"
                      >
                        ⚡
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          Performance
                        </div>
                      </div>

                      {/* Web Development */}
                      <div
                        className="absolute top-12 left-2 w-11 h-11 bg-cyan-400 rounded-xl flex items-center justify-center text-black shadow-lg cursor-pointer hover:scale-110 transition-transform group"
                        style={{
                          animation: "floatUp 7s ease-in-out infinite",
                          animationDelay: "3s",
                        }}
                        title="Web Development"
                      >
                        💻
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          Web Development
                        </div>
                      </div>

                      {/* UI/UX Design */}
                      <div
                        className="absolute top-8 left-1/3 w-10 h-10 bg-cyan-400 rounded-lg flex items-center justify-center text-black shadow-lg cursor-pointer hover:scale-110 transition-transform group"
                        style={{
                          animation: "floatUp 5.5s ease-in-out infinite",
                          animationDelay: "4s",
                        }}
                        title="UI/UX Design"
                      >
                        🎨
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          UI/UX Design
                        </div>
                      </div>
                    </div>

                    {/* Center Brand Message */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FloatingElements intensity="medium">
                        <div className="w-24 h-24 bg-black/80 backdrop-blur-sm rounded-full border-2 border-cyan-400 flex flex-col items-center justify-center hover:scale-105 transition-transform card-glass-morphism micro-rotate">
                          <span className="text-cyan-400 font-bold text-sm animate-neon-pulse">
                            Your
                          </span>
                          <span className="text-white font-bold text-xs">
                            Success
                          </span>
                        </div>
                      </FloatingElements>
                    </div>
                  </div>
                  </TiltCard>
                </ParallaxContainer>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center space-y-1 sm:space-y-2 animate-bounce">
            <span className="text-white text-xs sm:text-sm font-medium">
              Scroll to explore
            </span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-cyan-400 rounded-full flex justify-center">
              <div
                className="w-1 h-2 sm:h-3 bg-cyan-400 rounded-full mt-1 sm:mt-2"
                style={{
                  animation: "floatUp 2s ease-in-out infinite",
                }}
              ></div>
            </div>
            <div className="text-cyan-400 text-base sm:text-lg animate-bounce">
              ↓
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <MorphingBackground className="section-padding bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <StaggeredReveal stagger={0.15}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Problem Side */}
            <div className="space-y-6 h-full flex flex-col justify-center">
              <ScrollReveal>
                <h2 className="text-heading-2 font-heading font-bold text-slate-100 content-spacing text-center lg:text-left">
                  Is Your Website
                  <span className="text-red-400"> Costing You </span>
                  Business?
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="space-y-4 flex-grow">
                  {[
                    "Your website looks outdated and unprofessional",
                    "Visitors leave without taking action or contacting you",
                    "You&apos;re invisible on Google and losing to competitors",
                    "Your site is slow and doesn&apos;t work well on mobile",
                  ].map((problem, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-white text-sm">✕</span>
                      </div>
                      <p className="text-gray-300 text-body">{problem}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Solution Side */}
            <div className="space-y-6 h-full flex flex-col justify-center">
              <ScrollReveal delay={0.2}>
                <h2 className="text-heading-2 font-heading font-bold text-slate-100 content-spacing text-center lg:text-left">
                  We Fix These Problems
                  <span className="text-blue-400"> Fast</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="space-y-4 flex-grow">
                  {[
                    "Modern, professional websites that build trust",
                    "High-converting designs that turn visitors into customers",
                    "SEO optimization that gets you found on Google",
                    "Mobile-first, lightning-fast performance",
                  ].map((solution, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-black text-sm">✓</span>
                      </div>
                      <p className="text-gray-200 text-body font-medium">
                        {solution}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="pt-6 flex justify-center lg:justify-start">
                  <MagneticButton
                    variant="primary"
                    className="px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white rounded-full font-bold text-lg min-h-[48px] shadow-lg shadow-blue-500/30"
                  >
                    Get Your Free Website Audit
                  </MagneticButton>
                </div>
              </ScrollReveal>
            </div>
            </div>
          </StaggeredReveal>
        </div>
      </MorphingBackground>

      {/* Enhanced How We Deliver Section */}
      <section
        id="about"
        className="section-padding bg-navy relative overflow-hidden pt-16 sm:pt-20 lg:pt-24"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="content-container relative z-10">
          <ScrollReveal>
            <div className="text-center content-spacing-xl">
              <h2 className="display-heading text-slate-100">
                How We Deliver Results
              </h2>
              <p className="text-block large text-slate-300 max-w-3xl mx-auto mb-8">
                Our proven 4-step process transforms your vision into a
                high-converting digital experience that drives real business growth.
              </p>

              {/* Mobile Process Navigation */}
              <div className="process-nav-mobile lg:hidden">
                {[1, 2, 3, 4].map((num, idx) => (
                  <div 
                    key={num} 
                    className={`process-nav-item ${idx === 0 ? 'active' : ''}`}
                    title={`Step ${num}`}
                  >
                    {num}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Mobile-First Process Timeline */}
          <div className="cards-grid">
            {[
              {
                title: "Discovery & Strategy",
                description:
                  "We dive deep into your business goals, analyze your target audience, and study your competition to create a winning digital strategy.",
                icon: "🎯",
                number: "1",
                duration: "Week 1",
                color: "teal",
                deliverables: ["Market Research", "Competitor Analysis", "Strategy Blueprint", "Goals & KPIs"]
              },
              {
                title: "Design & Prototype",
                description:
                  "We craft beautiful, conversion-focused designs that reflect your brand identity and create engaging user experiences.",
                icon: "🎨",
                number: "2",
                duration: "Week 2",
                color: "coral",
                deliverables: ["Wireframes", "Visual Design", "Interactive Prototype", "Brand Guidelines"]
              },
              {
                title: "Development & Build",
                description:
                  "We build your website with clean, modern code, ensuring it's lightning-fast, secure, and works flawlessly on all devices.",
                icon: "💻",
                number: "3",
                duration: "Week 3-4",
                color: "lavender",
                deliverables: ["Responsive Website", "Performance Optimization", "Security Setup", "Testing & QA"]
              },
              {
                title: "Launch & Optimize",
                description:
                  "We launch your site with comprehensive monitoring and continuously optimize for maximum performance and conversions.",
                icon: "🚀",
                number: "4",
                duration: "Week 5+",
                color: "mint",
                deliverables: ["Site Launch", "Analytics Setup", "Performance Monitoring", "Ongoing Optimization"]
              },
            ].map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className={`card-service step-${step.color} group relative`}>
                  {/* Step Number Badge */}
                  <div className={`absolute -top-4 left-6 w-12 h-12 step-badge-${step.color} rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg z-10`}>
                    {step.number}
                  </div>

                  {/* Card Header */}
                  <div className="card-header">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`card-icon step-badge-${step.color} group-hover:scale-110`}>
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="content-heading text-slate-100 group-hover:text-cyan-400 transition-colors mb-2">
                          {step.title}
                        </h3>
                        <div className="text-caption text-cyan-400 font-semibold uppercase tracking-wider bg-cyan-400/10 px-3 py-1 rounded-full inline-block">
                          {step.duration}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="card-body">
                    <p className="text-block text-slate-300 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Deliverables */}
                    <div className="space-y-4">
                      <h4 className="text-body-sm font-semibold text-slate-200 uppercase tracking-wide border-l-3 border-cyan-400 pl-3">
                        What You Get:
                      </h4>
                      <div className="deliverables-list">
                        {step.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="deliverable-item">
                            <div className="deliverable-icon">
                              ✓
                            </div>
                            <span className="text-slate-300">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Progress Connector (Desktop Only) */}
                  {index < 3 && (
                    <div className="hidden lg:block process-connector"></div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Enhanced Process Benefits */}
          <ScrollReveal delay={0.6}>
            <div className="cta-section mt-16">
              <div className="text-center space-y-6">
                <h3 className="section-heading text-slate-100">
                  Why Our Process Works
                </h3>
                
                <div className="process-benefits">
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      ⚡
                    </div>
                    <h4 className="content-heading text-slate-100 mb-3">
                      Fast Delivery
                    </h4>
                    <p className="text-body text-slate-300">
                      Most projects completed in 3-5 weeks with regular updates and transparent communication throughout.
                    </p>
                  </div>

                  <div className="benefit-card">
                    <div className="benefit-icon">
                      🎯
                    </div>
                    <h4 className="content-heading text-slate-100 mb-3">
                      Results-Focused
                    </h4>
                    <p className="text-body text-slate-300">
                      Every decision is data-driven, focused on increasing conversions and growing your bottom line.
                    </p>
                  </div>

                  <div className="benefit-card">
                    <div className="benefit-icon">
                      🛡️
                    </div>
                    <h4 className="content-heading text-slate-100 mb-3">
                      Risk-Free
                    </h4>
                    <p className="text-body text-slate-300">
                      100% satisfaction guarantee with unlimited revisions until you&apos;re completely happy.
                    </p>
                  </div>
                </div>

                {/* Process CTA */}
                <div className="pt-8">
                  <button className="btn-primary text-lg px-8 py-4 min-h-[56px] hover-lift font-semibold bg-cyan-400 hover:bg-cyan-300 text-black rounded-full shadow-2xl shadow-cyan-400/30">
                    🚀 Start Your Project Today
                  </button>
                  <p className="text-caption text-slate-400 mt-4">
                    Free consultation • No commitment required • 24-hour response guaranteed
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <MorphingBackground>
        <section id="services" className="section-padding bg-charcoal relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <AdvancedScrollReveal direction="up" delay={0.1}>
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-heading-1 font-heading font-bold text-slate-100 content-spacing">
                  Core Services That Drive Growth
                </h2>
                <p className="text-body-lg text-slate-300 max-w-3xl mx-auto px-4 font-body">
                  Three essential services that transform your business and
                  maximize your online potential.
                </p>
              </div>
            </AdvancedScrollReveal>

          <StaggeredAnimation stagger={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  title: "Website Development",
                  valueProposition: "Turn visitors into customers with high-converting designs",
                  description:
                    "Professional websites built for speed, security, and results. Modern responsive design that works perfectly on all devices.",
                  icon: "💻",
                  iconBg: "bg-coral",
                  features: [
                    "Mobile-First Design",
                    "Lightning Fast Loading",
                    "SEO Optimized",
                    "Conversion Focused",
                  ],
                  cta: "View Website Projects",
                  accent: "teal",
                },
                {
                  title: "Digital Marketing",
                  valueProposition: "Get found on Google and grow your business",
                  description:
                    "Complete SEO, PPC, and social media strategies that drive qualified traffic and increase your online visibility.",
                  icon: "📈",
                  iconBg: "bg-lavender",
                  features: [
                    "Google SEO",
                    "Paid Advertising",
                    "Social Media",
                    "Analytics & Reporting",
                  ],
                  cta: "Boost My Visibility",
                  accent: "coral",
                },
                {
                  title: "E-commerce Solutions",
                  valueProposition: "Online stores that sell 24/7 automatically",
                  description:
                    "From product showcases to secure checkout, we build e-commerce sites that maximize sales and customer satisfaction.",
                  icon: "🛒",
                  iconBg: "bg-mint",
                  features: [
                    "Secure Payments",
                    "Inventory Management",
                    "Mobile Shopping",
                    "Sales Analytics",
                  ],
                  cta: "Start Selling Online",
                  accent: "lavender",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-8 lg:p-10 rounded-xl border border-gray-200 dark:border-gray-700 h-full"
                >
                  <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-heading-3 font-heading font-bold text-primary content-spacing-xs">
                    {service.title}
                  </h3>
                  
                  <p className={`text-body-sm font-accent text-${service.accent} content-spacing-sm uppercase tracking-wider`}>
                    {service.valueProposition}
                  </p>
                  
                  <p className="text-body text-secondary content-spacing-lg leading-relaxed">
                    {service.description}
                  </p>

                  {/* Enhanced Features List */}
                  <div className="content-spacing-lg">
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center space-x-3 text-body-sm text-secondary"
                        >
                          <div className="w-5 h-5 bg-teal rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-navy text-xs font-bold">✓</span>
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <MorphingButton morphShape="rounded" className="w-full text-base font-accent">
                    {service.cta}
                  </MorphingButton>
                </div>
              ))}
            </div>
          </StaggeredAnimation>
        </div>
      </section>
      </MorphingBackground>

      {/* Social Proof Section */}
      <section className="section-padding-lg bg-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <AdvancedScrollReveal direction="up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Real Results From Real Clients
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                See how we&apos;ve helped businesses like yours grow their
                online presence and increase revenue.
              </p>
            </div>
          </AdvancedScrollReveal>

          <LazyWrapper delay={500}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Sarah Johnson",
                title: "CEO",
                company: "TechStart Solutions",
                result: "300% increase in leads",
                quote:
                  "WebsiteExpertz transformed our online presence completely. Our new website not only looks amazing but actually converts visitors into customers.",
                image: "👩‍💼",
                bgGradient: "from-coral/10 to-lavender/10",
                accentColor: "coral",
              },
              {
                name: "Michael Chen",
                title: "Founder",
                company: "Urban Fitness Studio",
                result: "250% boost in bookings",
                quote:
                  "The team understood our vision perfectly. They created a mobile-first website that makes it easy for clients to book classes.",
                image: "👨‍💼",
                bgGradient: "from-teal/10 to-mint/10",
                accentColor: "teal",
              },
              {
                name: "Emma Rodriguez",
                title: "Owner",
                company: "Artisan Jewelry Co.",
                result: "400% growth in sales",
                quote:
                  "Our e-commerce site is now our biggest revenue driver. The design is beautiful and the checkout process is seamless.",
                image: "👩‍💻",
                bgGradient: "from-lavender/10 to-coral/10",
                accentColor: "lavender",
              },
            ].map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className={`card-elevated hover-lift-subtle bg-gradient-to-br ${testimonial.bgGradient} p-8 group`}>
                  {/* Result Badge */}
                  <div className="flex justify-between items-start mb-6">
                    <span className={`inline-block bg-${testimonial.accentColor} text-navy px-4 py-2 rounded-full text-caption font-bold`}>
                      {testimonial.result}
                    </span>
                    <div className="flex text-accent">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-sm">★</span>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-body text-primary leading-relaxed italic content-spacing-lg">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 bg-${testimonial.accentColor} rounded-2xl flex items-center justify-center text-2xl`}>
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-primary text-body-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-secondary text-body-sm">
                        {testimonial.title}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Enhanced Results Stats */}
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { 
                  number: "150+", 
                  label: "Projects Completed",
                  icon: "🚀",
                  color: "teal"
                },
                { 
                  number: "98%", 
                  label: "Client Satisfaction",
                  icon: "⭐",
                  color: "coral"
                },
                { 
                  number: "300%", 
                  label: "Average ROI Increase",
                  icon: "📈",
                  color: "lavender"
                },
                { 
                  number: "24/7", 
                  label: "Support Available",
                  icon: "🛟",
                  color: "mint"
                },
              ].map((stat, index) => (
                <div key={index} className="text-center group hover-lift-subtle">
                  <div className={`w-16 h-16 bg-${stat.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className="text-heading-2 font-heading font-bold text-accent mb-2">
                    <CountUpNumber
                      end={parseInt(stat.number)}
                      suffix={stat.number.replace(/\d+/g, "")}
                    />
                  </div>
                  <p className="text-caption text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          </LazyWrapper>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="section-padding bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <ScrollReveal>
            <div className="text-center content-spacing-xl">
              <h2 className="text-heading-1 font-heading font-bold text-primary content-spacing-sm">
                Ready to Get Started?
              </h2>
              <p className="text-body-lg text-secondary max-w-2xl mx-auto leading-relaxed">
                Get a free consultation and see how we can transform your business online
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="card-elevated p-8 lg:p-12">
                {/* Simplified Contact Form */}
                <div className="content-spacing-lg text-center">
                  <h3 className="text-heading-3 font-heading font-bold text-primary content-spacing-xs">
                    Get Your Free Website Audit
                  </h3>
                  <p className="text-body text-secondary">
                    Tell us about your project and we&apos;ll get back to you within 24 hours
                  </p>
                </div>

                <InteractiveForm className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <EnhancedInput
                      type="text"
                      placeholder="Your Name"
                      required
                      icon={<span>👤</span>}
                      validation={(value) => value.length < 2 ? "Name must be at least 2 characters" : null}
                    />
                    <EnhancedInput
                      type="email"
                      placeholder="Email Address"
                      required
                      icon={<span>📧</span>}
                      validation={(value) => !/\S+@\S+\.\S+/.test(value) ? "Please enter a valid email" : null}
                    />
                  </div>

                  <EnhancedTextarea
                    rows={4}
                    placeholder="Tell us about your business and goals..."
                    required
                    maxLength={500}
                  />

                  <FloatingElements intensity="medium">
                    <AnimatedSubmitButton className="w-full text-lg py-4 font-heading font-bold tracking-wide">
                      Get My Free Audit
                    </AnimatedSubmitButton>
                  </FloatingElements>
                </InteractiveForm>

                {/* Trust Indicators */}
                <div className="mt-8 pt-6 border-t border-tertiary-gray/30">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-body-sm text-muted">
                    <div className="flex items-center gap-2">
                      <span className="text-accent">✓</span>
                      <span>No obligation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-accent">✓</span>
                      <span>24-hour response</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-accent">✓</span>
                      <span>Free consultation</span>
                    </div>
                  </div>
                </div>

                {/* Alternative Contact */}
                <div className="mt-8 text-center">
                  <p className="text-body-sm text-muted content-spacing-xs">
                    Prefer to talk directly?
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="mailto:info@websiteexpertz.com" className="flex items-center gap-2 text-accent hover:text-coral transition-colors">
                      <span>📧</span>
                      <span>info@websiteexpertz.com</span>
                    </a>
                    <a href="tel:+918923992522" className="flex items-center gap-2 text-accent hover:text-coral transition-colors">
                      <span>📞</span>
                      <span>+91-8923992522</span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-black border-t border-cyan-400/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                WebsiteExpertz
              </h3>
              <p className="text-white leading-relaxed mb-6">
                We transform businesses through innovative digital solutions,
                creating exceptional user experiences that drive growth and
                success.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center text-black hover:bg-cyan-300 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center text-black hover:bg-cyan-300 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center text-black hover:bg-cyan-300 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#services"
                    className="text-white hover:text-cyan-400 transition-colors"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white hover:text-cyan-400 transition-colors"
                  >
                    App Development
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white hover:text-cyan-400 transition-colors"
                  >
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white hover:text-cyan-400 transition-colors"
                  >
                    Digital Marketing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-4">
                Contact Info
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-cyan-400">📧</span>
                  <span className="text-white text-sm">
                    info@websiteexpertz.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-cyan-400">📞</span>
                  <span className="text-white text-sm">+91-8923992522</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-cyan-400/20 mt-8 pt-8 text-center">
            <p className="text-white">
              © 2024 WebsiteExpertz. All rights reserved. | Transforming
              businesses through innovative digital solutions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
