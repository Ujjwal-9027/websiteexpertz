"use client";

import React, { useState, useRef, useEffect } from 'react';

// Enhanced Input Field with animations
interface EnhancedInputProps {
  type?: 'text' | 'email' | 'tel' | 'password';
  placeholder?: string;
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  icon?: React.ReactNode;
  validation?: (value: string) => string | null;
  className?: string;
}

export const EnhancedInput: React.FC<EnhancedInputProps> = ({
  type = 'text',
  placeholder,
  label,
  value = '',
  onChange,
  required = false,
  icon,
  validation,
  className = ''
}) => {
  const [focused, setFocused] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange?.(newValue);
    
    if (validation) {
      const validationError = validation(newValue);
      setError(validationError);
      setIsValid(!validationError && newValue.length > 0);
    } else {
      setIsValid(newValue.length > 0);
      setError(null);
    }
  };

  const handleFocus = () => {
    setFocused(true);
    inputRef.current?.focus();
  };

  return (
    <div className={`relative group ${className}`}>
      {label && (
        <label className={`block text-sm font-medium mb-2 transition-colors duration-200 ${
          focused ? 'text-purple-600' : 'text-gray-700 dark:text-gray-300'
        }`}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        
        <input
          ref={inputRef}
          type={type}
          value={value}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          required={required}
          className={`
            w-full px-4 py-3 ${icon ? 'pl-10' : ''} 
            border-2 rounded-lg transition-all duration-300
            bg-white dark:bg-gray-800
            ${focused ? 'border-purple-500 ring-2 ring-purple-200 dark:ring-purple-800' : 
              error ? 'border-red-500' : 
              isValid ? 'border-green-500' : 
              'border-gray-300 dark:border-gray-600'
            }
            ${focused ? 'scale-105' : 'scale-100'}
            hover:border-purple-400 dark:hover:border-purple-500
            focus:outline-none
            placeholder-gray-400 dark:placeholder-gray-500
            text-gray-900 dark:text-white
          `}
        />
        
        {/* Validation Icons */}
        {(isValid || error) && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {isValid && !error ? (
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            ) : error ? (
              <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">!</span>
              </div>
            ) : null}
          </div>
        )}
        
        {/* Animated underline */}
        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transform transition-all duration-300 ${
          focused ? 'w-full scale-x-100' : 'w-0 scale-x-0'
        }`} />
      </div>
      
      {/* Error message */}
      {error && (
        <p className="mt-1 text-sm text-red-500 animate-fade-in-up">
          {error}
        </p>
      )}
    </div>
  );
};

// Enhanced Textarea
interface EnhancedTextareaProps {
  placeholder?: string;
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  rows?: number;
  maxLength?: number;
  className?: string;
}

export const EnhancedTextarea: React.FC<EnhancedTextareaProps> = ({
  placeholder,
  label,
  value = '',
  onChange,
  required = false,
  rows = 4,
  maxLength,
  className = ''
}) => {
  const [focused, setFocused] = useState(false);
  const [charCount, setCharCount] = useState(value.length);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    onChange?.(newValue);
    setCharCount(newValue.length);
  };

  return (
    <div className={`relative group ${className}`}>
      {label && (
        <label className={`block text-sm font-medium mb-2 transition-colors duration-200 ${
          focused ? 'text-purple-600' : 'text-gray-700 dark:text-gray-300'
        }`}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      
      <div className="relative">
        <textarea
          value={value}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          required={required}
          rows={rows}
          maxLength={maxLength}
          className={`
            w-full px-4 py-3 border-2 rounded-lg transition-all duration-300 resize-none
            bg-white dark:bg-gray-800
            ${focused ? 'border-purple-500 ring-2 ring-purple-200 dark:ring-purple-800 scale-105' : 
              'border-gray-300 dark:border-gray-600 scale-100'
            }
            hover:border-purple-400 dark:hover:border-purple-500
            focus:outline-none
            placeholder-gray-400 dark:placeholder-gray-500
            text-gray-900 dark:text-white
          `}
        />
        
        {/* Animated underline */}
        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transform transition-all duration-300 ${
          focused ? 'w-full scale-x-100' : 'w-0 scale-x-0'
        }`} />
        
        {/* Character count */}
        {maxLength && (
          <div className="absolute bottom-2 right-2 text-xs text-gray-400">
            {charCount}/{maxLength}
          </div>
        )}
      </div>
    </div>
  );
};

// Interactive Form Container
interface InteractiveFormProps {
  children: React.ReactNode;
  onSubmit?: (data: FormData) => void;
  className?: string;
}

export const InteractiveForm: React.FC<InteractiveFormProps> = ({
  children,
  onSubmit,
  className = ''
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    
    // Add submission animation
    formRef.current.style.transform = 'scale(0.98)';
    
    try {
      const formData = new FormData(formRef.current);
      await onSubmit?.(formData);
      
      // Success animation
      formRef.current.style.transform = 'scale(1.02)';
      setTimeout(() => {
        if (formRef.current) {
          formRef.current.style.transform = 'scale(1)';
        }
      }, 200);
    } catch (error) {
      // Error shake animation
      formRef.current.style.animation = 'micro-shake 0.5s ease';
      setTimeout(() => {
        if (formRef.current) {
          formRef.current.style.animation = '';
        }
      }, 500);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      ref={formRef}
      onSubmit={handleSubmit}
      className={`
        transition-transform duration-300 ease-out
        ${className}
      `}
    >
      {children}
    </form>
  );
};

// Floating Label Input
interface FloatingLabelInputProps {
  type?: 'text' | 'email' | 'tel' | 'password';
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  className?: string;
}

export const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  type = 'text',
  label,
  value = '',
  onChange,
  required = false,
  className = ''
}) => {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className={`relative ${className}`}>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        className={`
          w-full px-4 pt-6 pb-2 border-2 rounded-lg transition-all duration-300
          bg-transparent
          ${focused ? 'border-purple-500 ring-2 ring-purple-200' : 'border-gray-300'}
          focus:outline-none
          text-gray-900 dark:text-white
        `}
      />
      <label className={`
        absolute left-4 transition-all duration-300 pointer-events-none
        ${focused || hasValue 
          ? 'top-2 text-xs text-purple-600' 
          : 'top-4 text-base text-gray-400'
        }
      `}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    </div>
  );
};

// Multi-step Form Progress
interface MultiStepProgressProps {
  steps: string[];
  currentStep: number;
  completedSteps: number[];
  onStepClick?: (step: number) => void;
}

export const MultiStepProgress: React.FC<MultiStepProgressProps> = ({
  steps,
  currentStep,
  completedSteps,
  onStepClick
}) => {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="flex items-center cursor-pointer"
            onClick={() => onStepClick?.(index)}
          >
            <div className={`
              w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold
              transition-all duration-300 hover:scale-110
              ${completedSteps.includes(index) 
                ? 'bg-green-500 text-white' 
                : index === currentStep 
                  ? 'bg-purple-500 text-white ring-4 ring-purple-200' 
                  : 'bg-gray-200 text-gray-600'
              }
            `}>
              {completedSteps.includes(index) ? '✓' : index + 1}
            </div>
            <span className={`ml-2 text-sm ${
              index === currentStep ? 'text-purple-600 font-semibold' : 'text-gray-500'
            }`}>
              {step}
            </span>
            {index < steps.length - 1 && (
              <div className={`w-12 h-1 mx-4 rounded ${
                completedSteps.includes(index) ? 'bg-green-500' : 'bg-gray-200'
              }`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Animated Submit Button
interface AnimatedSubmitButtonProps {
  children: React.ReactNode;
  isLoading?: boolean;
  success?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export const AnimatedSubmitButton: React.FC<AnimatedSubmitButtonProps> = ({
  children,
  isLoading = false,
  success = false,
  disabled = false,
  onClick,
  className = ''
}) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 200);
    onClick?.();
  };

  return (
    <button
      type="submit"
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={`
        relative px-8 py-4 rounded-lg font-bold text-white overflow-hidden
        bg-gradient-to-r from-purple-600 to-cyan-500
        hover:from-purple-700 hover:to-cyan-600
        transition-all duration-300
        ${clicked ? 'scale-95' : 'scale-100'}
        ${success ? 'bg-green-500' : ''}
        ${disabled || isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}
        ${className}
      `}
    >
      {/* Ripple effect */}
      <div className="absolute inset-0 -top-40 -bottom-40 bg-white/20 transform -skew-x-12 transition-transform duration-700 hover:translate-x-full" />
      
      <span className={`relative transition-opacity duration-200 ${
        isLoading ? 'opacity-0' : 'opacity-100'
      }`}>
        {success ? '✓ Success!' : children}
      </span>
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}
    </button>
  );
};