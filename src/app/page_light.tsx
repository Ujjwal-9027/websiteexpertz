"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  ParallaxSection,
  FloatingElement,
} from "@/components/ParallaxComponents";
import { TypewriterText, CountUpNumber } from "@/components/TextAnimations";
import { useScrollPosition, useScrollDirection } from "@/hooks/useScroll";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const scrollY = useScrollPosition();
  const scrollDirection = useScrollDirection();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Calculate parallax offset for hero background
  const heroParallax = scrollY * 0.3;

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.2) 0%, transparent 50%)`,
            transition: "background 0.3s ease",
          }}
        ></div>
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-500 rounded-full opacity-40 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollY > 100
            ? "bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-xl"
            : "bg-transparent"
        } ${
          scrollDirection === "up"
            ? "translate-y-0"
            : scrollY > 200
            ? "-translate-y-full"
            : "translate-y-0"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="relative">
              <div className="text-2xl font-bold tracking-wider bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Website Expertz
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur opacity-20 group-hover:opacity-50 transition duration-1000"></div>
            </div>
            <nav className="hidden md:flex space-x-8">
              {["Home", "Services", "About Us", "Testimonials", "Contact"].map(
                (item, index) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="relative text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                )
              )}
            </nav>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        ref={heroRef}
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          transform: `translateY(${heroParallax}px)`,
        }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <ParallaxSection speed={0.2} className="absolute inset-0">
            <div className="w-full h-full bg-gradient-to-br from-blue-100/30 to-purple-100/30"></div>
          </ParallaxSection>

          {/* Floating geometric shapes */}
          <FloatingElement
            className="absolute top-20 left-10"
            amplitude={30}
            frequency={3000}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-xl rotate-45 backdrop-blur-sm"></div>
          </FloatingElement>

          <FloatingElement
            className="absolute top-40 right-20"
            amplitude={25}
            frequency={4000}
            delay={1000}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-200/40 to-indigo-200/40 rounded-full backdrop-blur-sm"></div>
          </FloatingElement>

          <FloatingElement
            className="absolute bottom-32 left-1/4"
            amplitude={20}
            frequency={3500}
            delay={2000}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-200/40 to-blue-200/40 rounded-lg backdrop-blur-sm"></div>
          </FloatingElement>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <AnimatedSection className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                <div className="bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-glow">
                  Creating
                </div>
                <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  <TypewriterText
                    text="Digital Excellence"
                    delay={1000}
                    className="font-extrabold"
                  />
                </div>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                We are a team of expert developers and designers crafting
                exceptional digital experiences that drive business growth and
                user engagement.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl transform-gpu">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </button>

              <button className="group px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold text-lg transition-all duration-300 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50">
                View Our Work
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-2">
                  →
                </span>
              </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-gray-200">
              {[
                { number: 500, label: "Projects Completed", suffix: "+" },
                { number: 98, label: "Client Satisfaction", suffix: "%" },
                { number: 50, label: "Team Members", suffix: "+" },
                { number: 5, label: "Years Experience", suffix: "+" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    <CountUpNumber
                      end={stat.number}
                      duration={2000}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-6">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive digital solutions to transform your
                business and create exceptional user experiences.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description:
                  "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
                icon: "🌐",
                gradient: "from-blue-400 to-indigo-600",
              },
              {
                title: "Mobile App Development",
                description:
                  "Native and cross-platform mobile applications that engage users and drive business growth.",
                icon: "📱",
                gradient: "from-purple-400 to-pink-600",
              },
              {
                title: "UI/UX Design",
                description:
                  "Beautiful, intuitive designs that create meaningful connections between your brand and users.",
                icon: "🎨",
                gradient: "from-green-400 to-blue-600",
              },
              {
                title: "E-commerce Solutions",
                description:
                  "Powerful online stores with secure payment systems and inventory management capabilities.",
                icon: "🛒",
                gradient: "from-orange-400 to-red-600",
              },
              {
                title: "Digital Marketing",
                description:
                  "Strategic marketing campaigns that increase visibility and drive qualified traffic to your business.",
                icon: "📈",
                gradient: "from-teal-400 to-blue-600",
              },
              {
                title: "Cloud Solutions",
                description:
                  "Scalable cloud infrastructure and services to ensure your applications run smoothly and securely.",
                icon: "☁️",
                gradient: "from-indigo-400 to-purple-600",
              },
            ].map((service, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-300 to-purple-300 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                    <div className="flex items-center mb-6">
                      <div
                        className={`text-4xl mr-4 p-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-6">
                      <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-2 transform duration-300 inline-flex items-center">
                        Learn More
                        <span className="ml-2">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="aboutus" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50"></div>

        {/* Floating background elements */}
        <FloatingElement
          className="absolute top-10 right-10"
          amplitude={20}
          frequency={4000}
        >
          <div className="w-32 h-32 bg-gradient-to-br from-blue-100/60 to-purple-100/60 rounded-full blur-xl"></div>
        </FloatingElement>

        <FloatingElement
          className="absolute bottom-20 left-10"
          amplitude={30}
          frequency={3000}
          delay={1000}
        >
          <div className="w-24 h-24 bg-gradient-to-br from-purple-100/60 to-indigo-100/60 rounded-full blur-xl"></div>
        </FloatingElement>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
                  About Website Expertz
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We are passionate digital innovators dedicated to creating
                  exceptional web experiences that drive business success and
                  user satisfaction.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our team combines creativity with technical expertise to
                  deliver solutions that not only meet but exceed expectations.
                  We believe in building long-term partnerships with our clients
                  and helping them achieve their digital goals.
                </p>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <h4 className="font-bold text-gray-800 mb-2">Innovation</h4>
                    <p className="text-gray-600 text-sm">
                      Cutting-edge solutions for modern challenges
                    </p>
                  </div>
                  <div className="p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <h4 className="font-bold text-gray-800 mb-2">Quality</h4>
                    <p className="text-gray-600 text-sm">
                      Exceptional standards in every project
                    </p>
                  </div>
                  <div className="p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <h4 className="font-bold text-gray-800 mb-2">Support</h4>
                    <p className="text-gray-600 text-sm">
                      Dedicated assistance throughout your journey
                    </p>
                  </div>
                  <div className="p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <h4 className="font-bold text-gray-800 mb-2">Results</h4>
                    <p className="text-gray-600 text-sm">
                      Measurable outcomes that matter
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-2xl blur-xl opacity-30"></div>
                <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Expert team with 5+ years of experience",
                      "Custom solutions tailored to your needs",
                      "Cutting-edge technology and best practices",
                      "24/7 support and maintenance",
                      "Proven track record of successful projects",
                      "Transparent communication throughout",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700"
                      >
                        <span className="text-blue-500 mr-3 text-xl">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don&apos;t just take our word for it. Here&apos;s what our
                satisfied clients have to say about working with us.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "Tech Startup Inc.",
                text: "Website Expertz transformed our digital presence completely. Their attention to detail and innovative approach exceeded our expectations.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                company: "E-commerce Solutions",
                text: "The team delivered our project on time and within budget. The quality of work was exceptional and the ongoing support is fantastic.",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                company: "Creative Agency",
                text: "Professional, creative, and technically excellent. They understood our vision and brought it to life beautifully.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-300 to-purple-300 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic leading-relaxed">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="font-bold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-blue-600 text-sm">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100"></div>

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-6">
                Let&apos;s Build Something Amazing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to transform your digital presence? Get in touch with us
                and let&apos;s discuss your next project.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg text-white">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Address</h3>
                    <p className="text-gray-600">
                      123 Business Street, Suite 100, City, State 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg text-white">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg text-white">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Email</h3>
                    <p className="text-gray-600">hello@websiteexpertz.com</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <form className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-xl space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50"
                />
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none bg-white/50"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Website Expertz
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Creating exceptional digital experiences that drive business
                growth and user engagement.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    E-commerce
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
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
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Website Expertz. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
