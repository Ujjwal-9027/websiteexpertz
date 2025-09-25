"use client";

import { useState, useRef, useEffect } from "react";

// Glassmorphism Card Component
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover3D?: boolean;
}

export const GlassCard = ({
  children,
  className = "",
  hover3D = false,
}: GlassCardProps) => {
  const [transform, setTransform] = useState("");
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!hover3D || !cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
    );
  };

  const handleMouseLeave = () => {
    setTransform("");
  };

  return (
    <div
      ref={cardRef}
      className={`
        backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl
        shadow-xl hover:shadow-2xl transition-all duration-500
        relative overflow-hidden group
        ${className}
      `}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cyan-400/20 blur-xl"></div>
    </div>
  );
};

// Magnetic Button Component
interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "neon";
}

export const MagneticButton = ({
  children,
  onClick,
  className = "",
  variant = "primary",
}: MagneticButtonProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary: `
      bg-cyan-400 
      text-black shadow-lg hover:shadow-cyan-400/50 hover:bg-cyan-300
    `,
    secondary: `
      bg-white/10 backdrop-blur-sm border border-white/20 
      text-white hover:text-black hover:bg-cyan-400
    `,
    neon: `
      bg-transparent border-2 border-cyan-400 text-cyan-400
      hover:bg-cyan-400 hover:text-black hover:shadow-cyan-400/50
    `,
  };

  return (
    <button
      ref={buttonRef}
      className={`
        relative px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold
        transition-all duration-300 transform-gpu
        hover:scale-105 active:scale-95
        overflow-hidden group
        min-h-[48px] min-w-[48px] text-sm sm:text-base
        ${variantStyles[variant]}
        ${className}
      `}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
      </div>

      {/* Button content */}
      <span className="relative z-10">{children}</span>

      {/* Ripple effect on click */}
      <div className="absolute inset-0 rounded-full opacity-0 group-active:opacity-100 bg-white/30 animate-ping"></div>
    </button>
  );
};

// 3D Hover Card
interface Hover3DCardProps {
  children: React.ReactNode;
  className?: string;
}

export const Hover3DCard = ({ children, className = "" }: Hover3DCardProps) => {
  const [style, setStyle] = useState({});
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 15;
    const rotateY = ((centerX - x) / centerX) * 15;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: "none",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform:
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "all 0.5s ease",
    });
  };

  return (
    <div
      ref={cardRef}
      className={`
        transform-gpu cursor-pointer
        ${className}
      `}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

// Neon Text Component
interface NeonTextProps {
  children: React.ReactNode;
  color?:
    | "blue"
    | "purple"
    | "cyan"
    | "pink"
    | "emerald"
    | "amber"
    | "rose"
    | "teal";
  className?: string;
}

export const NeonText = ({
  children,
  color = "blue",
  className = "",
}: NeonTextProps) => {
  const colorStyles = {
    blue: "text-blue-400 shadow-blue-400/50",
    purple: "text-purple-400 shadow-purple-400/50",
    cyan: "text-cyan-400 shadow-cyan-400/50",
    pink: "text-pink-400 shadow-pink-400/50",
    emerald: "text-emerald-400 shadow-emerald-400/50",
    amber: "text-amber-400 shadow-amber-400/50",
    rose: "text-rose-400 shadow-rose-400/50",
    teal: "text-teal-400 shadow-teal-400/50",
  };

  return (
    <div
      className={`
      ${colorStyles[color]}
      text-sm sm:text-base md:text-lg
      drop-shadow-[0_0_8px_currentColor] sm:drop-shadow-[0_0_10px_currentColor]
      hover:drop-shadow-[0_0_15px_currentColor] sm:hover:drop-shadow-[0_0_20px_currentColor]
      transition-all duration-300
      ${className}
    `}
    >
      {children}
    </div>
  );
};

// Liquid Button
interface LiquidButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const LiquidButton = ({
  children,
  onClick,
  className = "",
}: LiquidButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold
        bg-cyan-400
        text-black overflow-hidden group
        transition-all duration-500
        hover:scale-105 active:scale-95 hover:bg-cyan-300
        min-h-[48px] min-w-[48px] text-sm sm:text-base
        ${className}
      `}
    >
      {/* Liquid effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
      </div>

      {/* Bubble effects */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
        <div
          className="absolute top-2 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="absolute top-3 right-6 w-1 h-1 bg-white/40 rounded-full animate-bounce"
          style={{ animationDelay: "0.3s" }}
        ></div>
        <div
          className="absolute bottom-3 left-8 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <span className="relative z-10">{children}</span>
    </button>
  );
};

// Morphing Shape
export const MorphingShape = () => {
  return (
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
      <div className="absolute inset-0 bg-cyan-400 rounded-full animate-pulse"></div>
      <div
        className="absolute inset-1 sm:inset-2 bg-cyan-500 animate-spin"
        style={{
          borderRadius: "50% 20% 50% 20%",
          animationDuration: "8s",
        }}
      ></div>
      <div
        className="absolute inset-2 sm:inset-3 md:inset-4 bg-cyan-300"
        style={{
          borderRadius: "20% 50% 20% 50%",
          animation: "morph 6s ease-in-out infinite alternate",
        }}
      ></div>
    </div>
  );
};

// Advanced Particle System
interface ParticleFieldProps {
  particleCount?: number;
  className?: string;
  color?: string;
  interactive?: boolean;
}

export const ParticleField = ({ 
  particleCount = 50, 
  className = "",
  color = "cyan",
  interactive = true
}: ParticleFieldProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {Array.from({ length: particleCount }).map((_, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-${color}-400/30 animate-float-particle`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 10}s`,
          }}
        />
      ))}
    </div>
  );
};

// Floating Elements Component
interface FloatingElementsProps {
  children: React.ReactNode;
  intensity?: 'light' | 'medium' | 'strong';
  className?: string;
}

export const FloatingElements = ({ 
  children, 
  intensity = 'medium',
  className = "" 
}: FloatingElementsProps) => {
  const intensityMap = {
    light: 'hover:scale-102 hover:-translate-y-1',
    medium: 'hover:scale-105 hover:-translate-y-2',
    strong: 'hover:scale-110 hover:-translate-y-4 hover:rotate-1'
  };

  return (
    <div className={`
      transform transition-all duration-500 ease-out
      ${intensityMap[intensity]}
      ${className}
    `}>
      {children}
    </div>
  );
};

// Gradient Orb Component
interface GradientOrbProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'cyan' | 'purple' | 'pink' | 'orange';
  position?: string;
  blur?: boolean;
}

export const GradientOrb = ({ 
  size = 'md', 
  color = 'cyan',
  position = '',
  blur = true 
}: GradientOrbProps) => {
  const sizeMap = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
    xl: 'w-96 h-96'
  };

  const colorMap = {
    cyan: 'bg-gradient-to-br from-cyan-400 to-cyan-600',
    purple: 'bg-gradient-to-br from-purple-400 to-purple-600',
    pink: 'bg-gradient-to-br from-pink-400 to-pink-600',
    orange: 'bg-gradient-to-br from-orange-400 to-orange-600'
  };

  return (
    <div className={`
      absolute ${position} ${sizeMap[size]} ${colorMap[color]}
      rounded-full opacity-20 animate-pulse
      ${blur ? 'blur-3xl' : ''}
    `} />
  );
};

// Advanced Loading Skeleton
interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'card' | 'avatar' | 'button';
}

export const Skeleton = ({ className = "", variant = 'text' }: SkeletonProps) => {
  const baseClasses = "animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]";
  
  const variantClasses = {
    text: 'h-4 w-full rounded',
    card: 'h-48 w-full rounded-lg',
    avatar: 'h-12 w-12 rounded-full',
    button: 'h-10 w-24 rounded-full'
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} 
         style={{
           backgroundImage: 'linear-gradient(90deg, rgba(79, 209, 199, 0.1) 25%, rgba(79, 209, 199, 0.2) 50%, rgba(79, 209, 199, 0.1) 75%)',
           animation: 'shimmer 2s infinite'
         }}
    />
  );
};

// Interactive Cursor Follower
interface CursorFollowerProps {
  color?: string;
  size?: number;
}

export const CursorFollower = ({ color = 'cyan-400', size = 20 }: CursorFollowerProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        left: position.x - size / 2,
        top: position.y - size / 2,
        width: size,
        height: size,
      }}
    >
      <div className={`w-full h-full bg-${color} rounded-full blur-sm opacity-50 animate-pulse`} />
    </div>
  );
};

// Advanced Button with Ripple Effect
interface RippleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
}

export const RippleButton = ({ 
  children, 
  onClick, 
  className = "",
  variant = 'primary' 
}: RippleButtonProps) => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };

    setRipples(prev => [...prev, newRipple]);

    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);

    onClick?.();
  };

  const variantStyles = {
    primary: 'bg-cyan-400 hover:bg-cyan-300 text-black',
    secondary: 'bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black',
    ghost: 'bg-transparent text-cyan-400 hover:bg-cyan-400/10'
  };

  return (
    <button
      ref={buttonRef}
      className={`
        relative overflow-hidden px-6 py-3 rounded-full font-semibold
        transition-all duration-300 transform
        hover:scale-105 active:scale-95
        ${variantStyles[variant]}
        ${className}
      `}
      onClick={handleClick}
    >
      <span className="relative z-10">{children}</span>
      
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ripple"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
          }}
        />
      ))}
    </button>
  );
};
