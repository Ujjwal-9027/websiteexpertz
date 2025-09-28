"use client";

import NextImage from "next/image";
import React, { useState, useEffect } from "react";

// Skeleton Loader Component
interface SkeletonProps {
  variant?: "text" | "rectangular" | "circular" | "rounded";
  width?: string | number;
  height?: string | number;
  animation?: "pulse" | "wave" | "shimmer";
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = "rectangular",
  width = "100%",
  height = variant === "text" ? "1rem" : "2rem",
  animation = "pulse",
  className = "",
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "text":
        return "rounded h-4";
      case "circular":
        return "rounded-full";
      case "rounded":
        return "rounded-lg";
      default:
        return "rounded-md";
    }
  };

  const getAnimationClasses = () => {
    switch (animation) {
      case "wave":
        return "animate-wave-loading";
      case "shimmer":
        return "animate-shimmer";
      default:
        return "animate-pulse";
    }
  };

  return (
    <div
      className={`bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 ${getVariantClasses()} ${getAnimationClasses()} ${className}`}
      style={{ width, height }}
    />
  );
};

// Card Skeleton
export const CardSkeleton: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <div className={`space-y-4 p-6 ${className}`}>
    <Skeleton variant="circular" width={60} height={60} />
    <div className="space-y-2">
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="text" width="60%" />
    </div>
    <div className="space-y-2">
      <Skeleton height="8rem" />
      <Skeleton variant="text" width="40%" />
    </div>
  </div>
);

// Progressive Image Loader
interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderSrc?: string;
  blur?: boolean;
}

export const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  src,
  alt,
  className = "",
  placeholderSrc,
  blur = true,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(placeholderSrc ?? src);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const preloadImage = new window.Image();
    preloadImage.onload = () => {
      setImageSrc(src);
      setImageLoaded(true);
    };
    preloadImage.src = src;

    return () => {
      preloadImage.onload = null;
    };
  }, [src]);

  return (
    <div className="relative overflow-hidden">
      {!imageLoaded && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          className="absolute inset-0 z-10"
        />
      )}
      <NextImage
        src={imageSrc}
        alt={alt}
        fill
        sizes="100vw"
        className={`transition-all duration-700 ${
          imageLoaded
            ? "opacity-100 scale-100"
            : `opacity-0 scale-105 ${blur ? "blur-sm" : ""}`
        } ${className}`}
      />
    </div>
  );
};

// Loading Overlay
interface LoadingOverlayProps {
  isLoading: boolean;
  children: React.ReactNode;
  message?: string;
  spinnerVariant?: "dots" | "spinner" | "bars" | "wave";
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isLoading,
  children,
  message = "Loading...",
  spinnerVariant = "spinner",
}) => {
  const renderSpinner = () => {
    switch (spinnerVariant) {
      case "dots":
        return (
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-3 h-3 bg-white rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        );
      case "bars":
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-1 h-8 bg-white rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        );
      case "wave":
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-2 bg-white rounded-full animate-wave"
                style={{
                  height: `${20 + Math.sin(i * 0.5) * 10}px`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
        );
    }
  };

  return (
    <div className="relative">
      {children}
      {isLoading && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300">
          <div className="text-center">
            {renderSpinner()}
            {message && (
              <p className="text-white mt-4 text-sm font-medium">{message}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Content Placeholder
interface ContentPlaceholderProps {
  lines?: number;
  showAvatar?: boolean;
  showImage?: boolean;
  className?: string;
}

export const ContentPlaceholder: React.FC<ContentPlaceholderProps> = ({
  lines = 3,
  showAvatar = false,
  showImage = false,
  className = "",
}) => (
  <div className={`space-y-4 ${className}`}>
    {showAvatar && (
      <div className="flex items-center space-x-3">
        <Skeleton variant="circular" width={40} height={40} />
        <div className="space-y-2 flex-1">
          <Skeleton variant="text" width="30%" />
          <Skeleton variant="text" width="20%" />
        </div>
      </div>
    )}

    {showImage && <Skeleton height="12rem" className="mb-4" />}

    <div className="space-y-2">
      {Array.from({ length: lines }, (_, i) => (
        <Skeleton
          key={i}
          variant="text"
          width={i === lines - 1 ? "70%" : "100%"}
        />
      ))}
    </div>
  </div>
);

// Button Loading State
interface LoadingButtonProps {
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  isLoading = false,
  children,
  className = "",
  disabled = false,
  onClick,
  variant = "primary",
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "secondary":
        return "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600";
      case "ghost":
        return "bg-transparent text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800";
      default:
        return "bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:from-purple-700 hover:to-cyan-600";
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`
        relative px-6 py-3 rounded-lg font-medium transition-all duration-200
        ${getVariantClasses()}
        ${
          disabled || isLoading
            ? "opacity-50 cursor-not-allowed"
            : "hover:scale-105"
        }
        ${className}
      `}
    >
      <span
        className={`transition-opacity duration-200 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </span>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}
    </button>
  );
};

// Page Transition Skeleton
export const PageSkeleton: React.FC = () => (
  <div className="space-y-8 p-6">
    {/* Header skeleton */}
    <div className="space-y-4">
      <Skeleton height="3rem" width="60%" />
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="text" width="40%" />
    </div>

    {/* Content grid skeleton */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }, (_, i) => (
        <CardSkeleton key={i} className="border rounded-lg" />
      ))}
    </div>
  </div>
);

// Lazy Loading Wrapper
interface LazyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  delay?: number;
}

export const LazyWrapper: React.FC<LazyWrapperProps> = ({
  children,
  fallback = <Skeleton height="10rem" />,
  delay = 300,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="transition-all duration-500">
      {isLoaded ? children : fallback}
    </div>
  );
};
