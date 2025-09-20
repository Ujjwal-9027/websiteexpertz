"use client";

import { useEffect, useState, useRef } from "react";
import { useScrollPosition, useScrollDirection } from "../hooks/useScroll";
import { AnimatedSection } from "../components/AnimatedSection";
import {
  ParallaxSection,
  FloatingElement,
} from "../components/ParallaxComponents";
import { TypewriterText, CountUpNumber } from "../components/TextAnimations";
import {
  GlassCard,
  MagneticButton,
  Hover3DCard,
  NeonText,
  LiquidButton,
} from "../components/PremiumUIComponents";
import {
  ScrollReveal,
  TextReveal,
  StaggeredAnimation,
} from "../components/ScrollAnimations";
import { EnhancedNav, FloatingNavDots } from "../components/EnhancedNavigation";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const scrollY = useScrollPosition();
  const scrollDirection = useScrollDirection();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-orange-50 text-gray-900 relative overflow-hidden">
      {/* Enhanced Navigation */}
      <EnhancedNav />
      <FloatingNavDots />

      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden touch-manipulation"
      >
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-8 md:py-12 lg:py-20 pt-20 sm:pt-24 md:pt-32 lg:pt-36">
          {/* Mobile: Stacked Layout */}
          <div className="block md:hidden text-center space-y-4 sm:space-y-6">
            {/* Mobile Image - Moved to Top */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="pt-0 px-4">
                <img
                  src="/Gemini_Generated_Image_2o3wz2o3wz2o3wz2.png"
                  alt="Gemini Generated Design"
                  className="w-full max-w-sm sm:max-w-md mx-auto rounded-xl transition-all duration-300"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="scale" delay={0.5}>
              <Hover3DCard>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-center px-2 sm:px-4">
                  <div className="text-orange-800 text-center py-2">
                    <TypewriterText
                      text="We don't just design websites, we design growth for your business."
                      delay={500}
                      className="font-extrabold text-center block w-full"
                    />
                  </div>
                </h1>
              </Hover3DCard>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={1.0}>
              <TextReveal
                text="A team of experts building digital experiences that don't just look stunning — they perform, engage, and grow your business."
                className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light px-2"
                delay={0.5}
              />
            </ScrollReveal>

            <ScrollReveal direction="up" delay={1.5}>
              <StaggeredAnimation
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6 px-4"
                stagger={0.2}
              >
                <MagneticButton
                  variant="primary"
                  className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base shadow-xl hover-glow"
                >
                  Get Started Today
                </MagneticButton>

                <LiquidButton className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base">
                  View Our Work →
                </LiquidButton>
              </StaggeredAnimation>
            </ScrollReveal>
          </div>

          {/* Desktop: Two Column Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Content */}
            <div className="text-left space-y-6">
              <ScrollReveal direction="left" delay={0.2}>
                <Hover3DCard>
                  <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    <div className="text-orange-800 py-4">
                      <TypewriterText
                        text="We don't just design websites, we design growth for your business."
                        delay={500}
                        className="font-extrabold block w-full"
                      />
                    </div>
                  </h1>
                </Hover3DCard>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={1.5}>
                <TextReveal
                  text="A team of experts building digital experiences that don't just look stunning — they perform, engage, and grow your business."
                  className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light"
                  delay={0.5}
                />
              </ScrollReveal>

              <ScrollReveal direction="left" delay={2}>
                <StaggeredAnimation
                  className="flex flex-row gap-6 items-center pt-8"
                  stagger={0.2}
                >
                  <MagneticButton
                    variant="primary"
                    className="px-8 py-4 text-lg shadow-xl hover-glow"
                  >
                    Get Started Today
                  </MagneticButton>

                  <LiquidButton className="px-8 py-4 text-lg">
                    View Our Work →
                  </LiquidButton>
                </StaggeredAnimation>
              </ScrollReveal>
            </div>

            {/* Right: Image */}
            <div className="text-center">
              <ScrollReveal direction="right" delay={0.3}>
                <div className="relative">
                  <img
                    src="/Gemini_Generated_Image_2o3wz2o3wz2o3wz2.png"
                    alt="Gemini Generated Design"
                    className="w-full max-w-lg mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Simple decorative elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-orange-200 rounded-full opacity-30 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-32 h-32 bg-orange-800 rounded-full opacity-10 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-orange-800">
                About Us
              </h2>
              <TextReveal
                text="At Website Expertz, we believe that a website is more than just design — it's your digital identity and the key to connecting with your customers."
                className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0"
              />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-4 sm:space-y-6 px-4 sm:px-0">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
                  Your Digital Success Starts Here
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  In today&apos;s world, if your business can&apos;t be found
                  online or your website fails to impress, you&apos;re losing
                  opportunities. That&apos;s where we come in.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Our team of experienced designers, developers, and digital
                  strategists specialize in building modern, user-friendly, and
                  performance-driven websites for businesses of all sizes —
                  nationwide and globally. From web design and SEO to mobile
                  apps and digital marketing, we deliver solutions that look
                  stunning and work seamlessly.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  With 500+ successful projects and a track record of client
                  satisfaction, we&apos;re committed to helping you stand out
                  online, attract more customers, and grow your business.
                  Whether you need a fresh digital presence or a complete
                  transformation, we&apos;re here to make it happen.
                </p>
                <div className="pt-4">
                  <MagneticButton
                    variant="primary"
                    className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4"
                  >
                    Learn More About Our Journey
                  </MagneticButton>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <GlassCard className="p-6 sm:p-8">
                <div className="space-y-6 sm:space-y-8">
                  <div className="text-center">
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                      Our Values
                    </h4>
                  </div>

                  <StaggeredAnimation stagger={0.2}>
                    <div className="space-y-4 sm:space-y-6">
                      {[
                        {
                          icon: "💡",
                          title: "Innovation",
                          description:
                            "We stay ahead of trends and technologies to deliver cutting-edge solutions.",
                        },
                        {
                          icon: "🤝",
                          title: "Partnership",
                          description:
                            "We work closely with our clients as partners in their success journey.",
                        },
                        {
                          icon: "🎯",
                          title: "Results-Driven",
                          description:
                            "Every project is focused on achieving measurable business outcomes.",
                        },
                        {
                          icon: "⚡",
                          title: "Speed & Quality",
                          description:
                            "We deliver exceptional quality without compromising on timelines.",
                        },
                      ].map((value, index) => (
                        <Hover3DCard key={index}>
                          <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg hover:bg-white/50 transition-all duration-300">
                            <div className="text-xl sm:text-2xl">
                              {value.icon}
                            </div>
                            <div>
                              <h5 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">
                                {value.title}
                              </h5>
                              <p className="text-gray-600 text-xs sm:text-sm">
                                {value.description}
                              </p>
                            </div>
                          </div>
                        </Hover3DCard>
                      ))}
                    </div>
                  </StaggeredAnimation>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>

          {/* Team Highlight */}
          <ScrollReveal delay={0.5}>
            <div className="mt-12 sm:mt-16 md:mt-20 text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">
                Meet Our Expert Team
              </h3>
              <StaggeredAnimation stagger={0.15}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                  {[
                    { role: "Full-Stack Developers", count: 15, icon: "👨‍💻" },
                    { role: "UI/UX Designers", count: 8, icon: "🎨" },
                    { role: "Digital Strategists", count: 5, icon: "📊" },
                    { role: "Project Managers", count: 6, icon: "🚀" },
                  ].map((team, index) => (
                    <Hover3DCard key={index}>
                      <div className="text-center p-4 sm:p-6 bg-white/30 backdrop-blur-sm rounded-xl border border-white/20">
                        <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">
                          {team.icon}
                        </div>
                        <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                          <CountUpNumber
                            end={team.count}
                            duration={2000}
                            suffix="+"
                          />
                        </div>
                        <div className="text-gray-600 font-medium text-xs sm:text-sm px-1">
                          {team.role}
                        </div>
                      </div>
                    </Hover3DCard>
                  ))}
                </div>
              </StaggeredAnimation>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-8 sm:py-12 md:py-16 lg:py-20 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-orange-800">
                Our Services
              </h2>
              <TextReveal
                text="We offer comprehensive digital solutions to transform your business and create exceptional user experiences."
                className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0"
              />
            </div>
          </ScrollReveal>

          <StaggeredAnimation stagger={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  title: "Web Development",
                  description:
                    "Custom websites built with cutting-edge technologies for optimal performance and user experience.",
                  icon: "🚀",
                },
                {
                  title: "UI/UX Design",
                  description:
                    "Beautiful, intuitive designs that convert visitors into customers and enhance brand identity.",
                  icon: "🎨",
                },
                {
                  title: "E-commerce Solutions",
                  description:
                    "Powerful online stores that drive sales and provide seamless shopping experiences.",
                  icon: "🛒",
                },
                {
                  title: "Digital Marketing",
                  description:
                    "Strategic marketing campaigns that boost your online presence and drive targeted traffic.",
                  icon: "📈",
                },
                {
                  title: "SEO Optimization",
                  description:
                    "Improve your search rankings and visibility with our comprehensive SEO strategies.",
                  icon: "🔍",
                },
                {
                  title: "Maintenance & Support",
                  description:
                    "Ongoing support and maintenance to keep your website secure, fast, and up-to-date.",
                  icon: "🛠️",
                },
              ].map((service, index) => (
                <Hover3DCard key={index} className="h-full">
                  <GlassCard
                    hover3D
                    className="p-6 sm:p-8 h-full flex flex-col"
                  >
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6 flex-grow">
                      {service.description}
                    </p>
                    <div className="mt-auto">
                      <MagneticButton
                        variant="secondary"
                        className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 text-sm"
                      >
                        Learn More
                      </MagneticButton>
                    </div>
                  </GlassCard>
                </Hover3DCard>
              ))}
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <StaggeredAnimation stagger={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {[
                { number: 500, label: "Trusted by businesses", suffix: "+" },
                { number: 98, label: "Client satisfaction", suffix: "%" },
                { number: 50, label: "Powered by experts", suffix: "+" },
                {
                  number: 5,
                  label: "Years of delivering results",
                  suffix: "+",
                },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 text-orange-800">
                    <CountUpNumber
                      end={stat.number}
                      duration={2000}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-base px-2 sm:px-0">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* Contact Us Section */}
      <section
        id="contact"
        className="py-8 sm:py-12 md:py-16 lg:py-20 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-orange-800">
                Contact Us
              </h2>
              <TextReveal
                text="We've helped startups and enterprises scale online — your project could be next. Ready to start your project? Get in touch with us today and let's discuss how we can help your business grow."
                className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0"
              />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Contact Information */}
            <ScrollReveal direction="left">
              <div className="space-y-6 sm:space-y-8 px-4 sm:px-0">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Get In Touch
                </h3>

                <StaggeredAnimation stagger={0.2}>
                  <div className="space-y-4 sm:space-y-6">
                    <Hover3DCard>
                      <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white/30 backdrop-blur-sm rounded-xl border border-white/20">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-600 rounded-lg flex items-center justify-center text-white text-lg sm:text-xl">
                          📧
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-sm sm:text-base">
                            Email
                          </h4>
                          <p className="text-gray-600 text-sm sm:text-base">
                            hello@websiteexpertz.com
                          </p>
                        </div>
                      </div>
                    </Hover3DCard>

                    <Hover3DCard>
                      <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white/30 backdrop-blur-sm rounded-xl border border-white/20">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-600 rounded-lg flex items-center justify-center text-white text-lg sm:text-xl">
                          📱
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-sm sm:text-base">
                            Phone
                          </h4>
                          <p className="text-gray-600 text-sm sm:text-base">
                            +91-8923992522
                          </p>
                        </div>
                      </div>
                    </Hover3DCard>
                  </div>
                </StaggeredAnimation>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="right">
              <GlassCard className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-3 sm:px-4 sm:py-4 rounded-lg border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all duration-300 bg-white/50 backdrop-blur-sm text-sm sm:text-base min-h-[44px]"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-3 sm:px-4 sm:py-4 rounded-lg border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all duration-300 bg-white/50 backdrop-blur-sm text-sm sm:text-base min-h-[44px]"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-3 py-3 sm:px-4 sm:py-4 rounded-lg border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all duration-300 bg-white/50 backdrop-blur-sm text-sm sm:text-base min-h-[44px]"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-3 sm:px-4 sm:py-4 rounded-lg border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none text-sm sm:text-base min-h-[120px]"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <MagneticButton
                    variant="primary"
                    className="w-full py-4 sm:py-5 text-base sm:text-lg min-h-[44px]"
                  >
                    Send Message
                  </MagneticButton>
                </form>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <ScrollReveal>
            <GlassCard className="p-6 sm:p-8 md:p-10 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-orange-800">
                Ready to Transform Your Business?
              </h2>
              <TextReveal
                text="Your growth starts here. Let's build something extraordinary today."
                className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-4 sm:px-0"
              />
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center">
                <MagneticButton
                  variant="primary"
                  className="w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-5 md:px-10 text-base sm:text-lg min-h-[44px]"
                >
                  Start Your Project
                </MagneticButton>
                <MagneticButton
                  variant="neon"
                  className="w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-5 md:px-10 text-base sm:text-lg min-h-[44px]"
                >
                  Schedule Consultation
                </MagneticButton>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 md:py-16 lg:py-20 relative bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
            {/* Company Info */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Website Expertz
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Website Expertz – Designing growth-driven digital experiences
                since 2019.
              </p>
            </div>

            {/* Services & Menu Combined */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-12">
                {/* Services */}
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">
                    Services
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-xs sm:text-sm"
                      >
                        Web Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-xs sm:text-sm"
                      >
                        UI/UX Design
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-xs sm:text-sm"
                      >
                        E-commerce Solutions
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-xs sm:text-sm"
                      >
                        Digital Marketing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-xs sm:text-sm"
                      >
                        SEO Optimization
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-xs sm:text-sm"
                      >
                        Maintenance & Support
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">
                    Quick Links
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#home"
                        className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-xs sm:text-sm"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#about"
                        className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-xs sm:text-sm"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#services"
                        className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-xs sm:text-sm"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="#portfolio"
                        className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-xs sm:text-sm"
                      >
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact"
                        className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-xs sm:text-sm"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-xs sm:text-sm"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">
                Contact Info
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-orange-400">📧</span>
                  <span className="text-gray-400 text-sm sm:text-base">
                    hello@websiteexpertz.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-orange-400">📱</span>
                  <span className="text-gray-400 text-sm sm:text-base">
                    +91-8923992522
                  </span>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="pt-4">
                <h5 className="text-sm font-bold text-white mb-3">Follow Us</h5>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-center md:text-left text-xs sm:text-sm">
                © 2024 Website Expertz. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-xs sm:text-sm"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-xs sm:text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-xs sm:text-sm"
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
