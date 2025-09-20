"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatedSection } from "../components/AnimatedSection";
import {
  ParallaxSection,
  FloatingElement,
} from "../components/ParallaxComponents";
          
          <FloatingElement className="absolute top-40 right-20" amplitude={25} frequency={4000} delay={1000}>
            <div className="w-16 h-16 bg-gradient-to-br from-purple-200/40 to-indigo-200/40 rounded-full backdrop-blur-sm"></div>atedSection";
import { ParallaxSection, FloatingElement } from "@/components/ParallaxComponents";
import { TypewriterText, CountUpNumber } from "@/components/TextAnimations";
import { useScrollPosition, useScrollDirection } from "@/hooks/useScroll";

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

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
            transition: 'background 0.3s ease'
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
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollY > 100 
            ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-xl' 
            : 'bg-transparent'
        } ${scrollDirection === 'up' ? 'translate-y-0' : scrollY > 200 ? '-translate-y-full' : 'translate-y-0'}`}
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
              {['Home', 'Services', 'About Us', 'Testimonials', 'Contact'].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className="relative text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
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
            <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
          </ParallaxSection>
          
          {/* Floating geometric shapes */}
          <FloatingElement className="absolute top-20 left-10" amplitude={30} frequency={3000}>
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-xl rotate-45 backdrop-blur-sm"></div>
          </FloatingElement>
          
          <FloatingElement className="absolute top-40 right-20" amplitude={25} frequency={4000} delay={1000}>
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full backdrop-blur-sm"></div>
          </FloatingElement>
          
          <FloatingElement className="absolute bottom-40 left-1/4" amplitude={20} frequency={3500} delay={2000}>
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-lg backdrop-blur-sm"></div>
          </FloatingElement>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center min-h-screen">
            <AnimatedSection className="text-center">
              <div className="space-y-8">
                {/* Main heading with typewriter effect */}
                <div className="space-y-4">
                  <TypewriterText
                    text="CREATING YOUR"
                    speed={150}
                    className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  />
                  <TypewriterText
                    text="VIRTUAL WORLD"
                    speed={150}
                    delay={2000}
                    className="text-6xl md:text-8xl font-bold text-white"
                  />
                </div>
                
                {/* Subtitle with fade-in effect */}
                <AnimatedSection delay={4000}>
                  <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Website Expertz specializes in developing visually captivating websites for all types and sizes of businesses, 
                    both nationwide and globally. We help your business make an online presence and start making profits.
                  </p>
                </AnimatedSection>

                {/* CTA Buttons with advanced hover effects */}
                <AnimatedSection delay={5000}>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button 
                      onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                      className="group relative px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:from-blue-500 group-hover:to-purple-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <span className="relative text-white">View Our Services</span>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
                    </button>
                    
                    <button 
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="group relative px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-full font-semibold text-lg hover:bg-blue-400 hover:text-black transition-all duration-300 overflow-hidden"
                    >
                      <span className="relative z-10">Get Quote</span>
                      <div className="absolute inset-0 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>
                  </div>
                </AnimatedSection>

                {/* Stats with count-up animation */}
                <AnimatedSection delay={6000}>
                  <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <span className="text-green-400">✓</span>
                      <CountUpNumber end={5000} suffix="+" className="text-blue-400 font-bold" />
                      <span>Websites Delivered</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <span className="text-green-400">✓</span>
                      <span className="text-blue-400 font-bold">24/7</span>
                      <span>Support</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <span className="text-green-400">✓</span>
                      <CountUpNumber end={100} suffix="%" className="text-blue-400 font-bold" />
                      <span>Satisfaction</span>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Scroll indicator */}
                <AnimatedSection delay={7000}>
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                      <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <AnimatedSection>
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Our Services
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer a comprehensive range of web development services to help your business thrive online
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "WEB DESIGN",
                subtitle: "RESPONSIVE & MODERN",
                color: "from-blue-500 to-blue-700",
                icon: "🎨",
                description: "Beautiful, responsive designs that captivate your audience"
              },
              {
                title: "WEB DEVELOPMENT",
                subtitle: "CUSTOM SOLUTIONS",
                color: "from-purple-500 to-purple-700",
                icon: "💻",
                description: "Custom web applications built with cutting-edge technology"
              },
              {
                title: "SEO & SMO",
                subtitle: "DIGITAL MARKETING",
                color: "from-green-500 to-green-700",
                icon: "📈",
                description: "Boost your online visibility and drive more traffic"
              },
              {
                title: "E-COMMERCE",
                subtitle: "ONLINE STORES",
                color: "from-orange-500 to-red-600",
                icon: "🛒",
                description: "Complete e-commerce solutions to sell online"
              },
              {
                title: "MOBILE APPS",
                subtitle: "iOS & ANDROID",
                color: "from-pink-500 to-pink-700",
                icon: "📱",
                description: "Native and cross-platform mobile applications"
              },
              {
                title: "HOSTING",
                subtitle: "RELIABLE & SECURE",
                color: "from-indigo-500 to-indigo-700",
                icon: "☁️",
                description: "Fast, secure hosting solutions for your website"
              }
            ].map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <div className="group relative">
                  {/* Card */}
                  <div className="relative h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:scale-105 hover:rotate-2 cursor-pointer border border-gray-700 hover:border-gray-600">
                    {/* Background glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Icon */}
                      <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                        {service.icon}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      {/* Subtitle */}
                      <p className="text-sm uppercase tracking-wide text-gray-400 mb-4">
                        {service.subtitle}
                      </p>
                      
                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        {service.description}
                      </p>
                      
                      {/* Arrow indicator */}
                      <div className="mt-auto flex justify-end">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center transform translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating particles inside card */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-1000"
                          style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                            animationDelay: `${i * 200}ms`,
                            animation: 'float 3s ease-in-out infinite'
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Card shadow/glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900"></div>
        
        {/* Background Elements */}
        <ParallaxSection speed={0.1} className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        </ParallaxSection>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Who We Are
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection delay={200}>
                <div className="space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    You are facing problem to connect to your customers online.
                    Reason might be no web presence or poor web design! Modern
                    day world where each and everything is connected to internet
                    whether it is shopping, food order or book services, your
                    website is your online business card.
                  </p>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    Website Expertz specializes in developing visually
                    captivating websites for all types and sizes of businesses,
                    both nationwide and globally. We offer you wide range of web
                    development services which help your business to make online
                    presence and start making profits.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    We are a team of experienced specialists in the field of web
                    designing, SEO and SMO promotions, web and mobile
                    applications and many more.
                  </p>

                  <div className="grid grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">
                        5000+
                      </div>
                      <div className="text-sm text-gray-600">Websites</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">
                        24/7
                      </div>
                      <div className="text-sm text-gray-600">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">
                        100%
                      </div>
                      <div className="text-sm text-gray-600">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Whether you are looking to refresh your existing company's
                      online presence or to create whole new digital platform,
                      we are available round the clock to address your needs.
                    </p>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20"></div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's what our satisfied clients say about our services
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedSection delay={100}>
              <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-yellow-400 mb-4">★★★★★</div>
                <p className="text-gray-700 mb-6 italic">
                  "Working with Website expertz was breeze. Their time to
                  respond on email queries was exceptional, and they delivered
                  as per the commitment."
                </p>
                <div className="font-semibold text-gray-900">Ryan Reid</div>
                <div className="text-sm text-gray-600">EMC</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-yellow-400 mb-4">★★★★★</div>
                <p className="text-gray-700 mb-6 italic">
                  "Great response from everyone who saw the website... the
                  website is extremely professional, appealing and very
                  user-friendly."
                </p>
                <div className="font-semibold text-gray-900">Paula Thomas</div>
                <div className="text-sm text-gray-600">Business Owner</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-yellow-400 mb-4">★★★★★</div>
                <p className="text-gray-700 mb-6 italic">
                  "Amazing Delivery! I am wowed by their commitment to quality
                  and customers. Very responsive and dedicated team."
                </p>
                <div className="font-semibold text-gray-900">James Warner</div>
                <div className="text-sm text-gray-600">United Kingdom</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-yellow-400 mb-4">★★★★★</div>
                <p className="text-gray-700 mb-6 italic">
                  "Nice Work folks! You guys went beyond the call of duty to
                  deliver my app. My sincere appreciation for an amazing
                  delivery!"
                </p>
                <div className="font-semibold text-gray-900">Juliana Mello</div>
                <div className="text-sm text-gray-600">Brazil</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-yellow-400 mb-4">★★★★★</div>
                <p className="text-gray-700 mb-6 italic">
                  "Great work Team. Constant communication was of great help.
                  Absolute transparency! Will use you guys for my future
                  projects as well."
                </p>
                <div className="font-semibold text-gray-900">Mark Thomas</div>
                <div className="text-sm text-gray-600">Bahamas</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white"
      >
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              Let's Create Your
              <br />
              Virtual World
              <span className="text-yellow-400">.</span>
            </h2>

            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Ready to take your business online? Get a free quote today and
              let's discuss your project.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <a
                href="mailto:contact@websiteexpertz.com"
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Free Quote
              </a>

              <a
                href="mailto:contact@websiteexpertz.com"
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Email Us
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl mb-2">📧</div>
                <div className="font-semibold">Email</div>
                <div className="text-blue-200">contact@websiteexpertz.com</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⏰</div>
                <div className="font-semibold">Support</div>
                <div className="text-blue-200">24/7 Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🌍</div>
                <div className="font-semibold">Serving</div>
                <div className="text-blue-200">Worldwide</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-4">
                Website Expertz
              </div>
              <p className="text-gray-400 text-sm">
                Creating your virtual world with professional web development
                services.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#home"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-blue-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Web Design</li>
                <li>Web Development</li>
                <li>SEO & SMO</li>
                <li>E-commerce</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>📧 contact@websiteexpertz.com</div>
                <div>⏰ 24/7 Support Available</div>
                <div>🌍 Serving Worldwide</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Website Expertz. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
