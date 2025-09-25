"use client";

import React, { useState, useEffect, useRef } from 'react';

// Image Gallery with Lightbox
interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  category?: string;
}

interface InteractiveGalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  showFilters?: boolean;
  className?: string;
}

export const InteractiveGallery: React.FC<InteractiveGalleryProps> = ({
  images,
  columns = 3,
  showFilters = true,
  className = ''
}) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filteredImages, setFilteredImages] = useState(images);
  const [activeFilter, setActiveFilter] = useState('all');
  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>({});

  // Get unique categories
  const categories = Array.from(new Set(images.map(img => img.category).filter(Boolean)));

  const filterImages = (category: string) => {
    setActiveFilter(category);
    if (category === 'all') {
      setFilteredImages(images);
    } else {
      setFilteredImages(images.filter(img => img.category === category));
    }
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  const handleImageLoad = (index: number) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        switch (e.key) {
          case 'Escape':
            closeLightbox();
            break;
          case 'ArrowRight':
            nextImage();
            break;
          case 'ArrowLeft':
            prevImage();
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const getGridClass = () => {
    switch (columns) {
      case 2: return 'grid-cols-1 sm:grid-cols-2';
      case 3: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
      default: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Filter Buttons */}
      {showFilters && categories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => filterImages('all')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeFilter === 'all'
                ? 'bg-purple-600 text-white shadow-lg scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300'
            }`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => filterImages(category!)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 capitalize ${
                activeFilter === category
                  ? 'bg-purple-600 text-white shadow-lg scale-105'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Image Grid */}
      <div className={`grid ${getGridClass()} gap-6`}>
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => openLightbox(index)}
          >
            {/* Loading skeleton */}
            {!imageLoaded[index] && (
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
            )}
            
            <img
              src={image.src}
              alt={image.alt}
              onLoad={() => handleImageLoad(index)}
              className={`w-full h-64 object-cover transition-all duration-300 ${
                imageLoaded[index] ? 'opacity-100' : 'opacity-0'
              } group-hover:scale-110`}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                {image.title && (
                  <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                )}
                {image.description && (
                  <p className="text-white/80 text-sm">{image.description}</p>
                )}
              </div>
              
              {/* View icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-white text-xl">👁️</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center animate-fade-in-up">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200 z-10"
          >
            ✕
          </button>
          
          {/* Navigation buttons */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200 z-10"
          >
            ‹
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200 z-10"
          >
            ›
          </button>
          
          {/* Image */}
          <div className="relative max-w-4xl max-h-[80vh] mx-4">
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            
            {/* Image info */}
            {(filteredImages[selectedImage].title || filteredImages[selectedImage].description) && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-lg">
                {filteredImages[selectedImage].title && (
                  <h3 className="text-white font-bold text-xl mb-2">
                    {filteredImages[selectedImage].title}
                  </h3>
                )}
                {filteredImages[selectedImage].description && (
                  <p className="text-white/80">
                    {filteredImages[selectedImage].description}
                  </p>
                )}
              </div>
            )}
          </div>
          
          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white">
            {selectedImage + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </div>
  );
};

// Interactive Card Component
interface InteractiveCardProps {
  children: React.ReactNode;
  hoverEffect?: 'lift' | 'tilt' | 'glow' | 'flip';
  className?: string;
  onClick?: () => void;
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({
  children,
  hoverEffect = 'lift',
  className = '',
  onClick
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0.5, y: 0.5 });
  };

  const getHoverStyles = () => {
    const { x, y } = mousePosition;
    
    switch (hoverEffect) {
      case 'tilt':
        return {
          transform: `perspective(1000px) rotateX(${(y - 0.5) * 10}deg) rotateY(${(x - 0.5) * -10}deg) scale(1.02)`
        };
      case 'glow':
        return {
          boxShadow: `${(x - 0.5) * 50}px ${(y - 0.5) * 50}px 50px rgba(139, 92, 246, 0.3)`
        };
      case 'flip':
        return {
          transform: `perspective(1000px) rotateY(${(x - 0.5) * 20}deg) scale(1.05)`
        };
      default:
        return {
          transform: 'translateY(-10px) scale(1.02)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
        };
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`
        relative transition-all duration-300 ease-out cursor-pointer
        ${className}
      `}
      style={mousePosition.x !== 0.5 || mousePosition.y !== 0.5 ? getHoverStyles() : {}}
    >
      {children}
      
      {/* Shine effect */}
      {hoverEffect === 'glow' && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            transform: `translateX(${(mousePosition.x - 0.5) * 200}px) rotate(35deg)`
          }}
        />
      )}
    </div>
  );
};

// Enhanced Navigation Tabs
interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
}

interface EnhancedTabsProps {
  tabs: TabItem[];
  defaultTab?: string;
  onTabChange?: (tabId: string) => void;
  variant?: 'pills' | 'underline' | 'cards';
  className?: string;
}

export const EnhancedTabs: React.FC<EnhancedTabsProps> = ({
  tabs,
  defaultTab,
  onTabChange,
  variant = 'underline',
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);
  const [tabIndicator, setTabIndicator] = useState({ width: 0, left: 0 });
  const tabsRef = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
    updateIndicator(tabId);
  };

  const updateIndicator = (tabId: string) => {
    const tabElement = tabsRef.current[tabId];
    if (tabElement && variant === 'underline') {
      setTabIndicator({
        width: tabElement.offsetWidth,
        left: tabElement.offsetLeft
      });
    }
  };

  useEffect(() => {
    updateIndicator(activeTab);
  }, [activeTab]);

  const getTabStyles = (tab: TabItem) => {
    const isActive = activeTab === tab.id;
    const baseStyles = `
      px-6 py-3 font-medium transition-all duration-300 
      ${tab.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    `;

    switch (variant) {
      case 'pills':
        return `${baseStyles} rounded-full ${
          isActive 
            ? 'bg-purple-600 text-white shadow-lg scale-105' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
        }`;
      case 'cards':
        return `${baseStyles} rounded-t-lg border-l border-r border-t ${
          isActive 
            ? 'bg-white border-gray-300 text-purple-600 shadow-sm' 
            : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
        }`;
      default:
        return `${baseStyles} ${
          isActive ? 'text-purple-600' : 'text-gray-600 hover:text-purple-500'
        }`;
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Tab Headers */}
      <div className={`relative ${variant === 'cards' ? 'border-b border-gray-300' : ''}`}>
        <div className="flex space-x-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              ref={el => { tabsRef.current[tab.id] = el; }}
              onClick={() => !tab.disabled && handleTabChange(tab.id)}
              className={getTabStyles(tab)}
            >
              <div className="flex items-center space-x-2">
                {tab.icon && <span>{tab.icon}</span>}
                <span>{tab.label}</span>
              </div>
            </button>
          ))}
        </div>
        
        {/* Animated indicator for underline variant */}
        {variant === 'underline' && (
          <div 
            className="absolute bottom-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-500 transition-all duration-300 ease-out"
            style={{
              width: tabIndicator.width,
              left: tabIndicator.left
            }}
          />
        )}
      </div>
      
      {/* Tab Content */}
      <div className="mt-6">
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={`transition-all duration-300 ${
              activeTab === tab.id 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4 absolute pointer-events-none'
            }`}
          >
            {activeTab === tab.id && tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};