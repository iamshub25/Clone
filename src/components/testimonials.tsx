import React, { useState, useEffect } from 'react';
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Image from 'next/image';
import { useMediaQuery } from '../hooks/useMediaQuery';

const TestimonialsComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Benny",
      role: "ARCHITECT",
      type: "INTJ-A",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      text: "Incredibly thorough and scary. It's like someone putting a mirror to your face and you seeing your true self whether you like it or not.",
      color: "purple"
    },
    {
      id: 2,
      name: "Nicole",
      role: "ADVOCATE",
      type: "INFJ-T",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      text: "Wow! This site is just AMAZING! I took the test and the results were so spot on, I felt like I had been vindicated. Like someone finally gets me and I'm not a weirdo.",
      color: "teal"
    },
    {
      id: 3,
      name: "Caroline",
      role: "DEFENDER",
      type: "ISFJ-A",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      text: "Reading this profile is comforting, exciting, inspiring, and a little bit freaky :) It's great to have my strengths and weaknesses so clearly articulated.",
      color: "blue"
    },
    {
      id: 4,
      name: "Marta",
      role: "COMMANDER",
      type: "ENTJ-A",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      text: "It is awesome to read something that describes you so well... and knowing you are not a weirdo! I did not expect a profile so accurate.",
      color: "purple"
    },
    {
      id: 5,
      name: "Margarita",
      role: "Adventurer",
      type: "ISFP-A",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
      text: "I was really reading my profile. What started as a fun online test, finished as a deep and insightful look at my everyday life, work and relationships.",
      color: "teal"
    },
    {
      id: 6,
      name: "Dorrian",
      role: "ADVOCATE",
      type: "INFJ-T",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
      text: "This profile has opened up a Pandora’s box of ideas. I felt as though someone was reading my mind. Such a valuable tool for self-evaluation and real introspection.",
      color: "teal"
    },
      {
      id: 7,
      name: "Roald",
      role: "Commander",
      type: "ENTJ-T",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
      text: "The accuracy of this profile was almost unnerving at first. The mechanisms of my mind are described in a strikingly accurate way. It is truly eye opening.",
      color: "teal"
    }
    
  ];

  const getColorClasses = (color: string | undefined) => {
    const colorMap = {
      purple: {
        topBorder: 'border-t-purple-400',
        icon: 'bg-purple-500 text-white',
        accent: 'text-purple-600'
      },
      teal: {
        topBorder: 'border-t-teal-400',
        icon: 'bg-teal-500 text-white',
        accent: 'text-teal-600'
      },
      blue: {
        topBorder: 'border-t-blue-400',
        icon: 'bg-blue-500 text-white',
        accent: 'text-blue-600'
      }
    };
    // Make sure color is lowercase to handle case inconsistencies
    const normalizedColor = color?.toLowerCase() || 'purple';
    return normalizedColor || colorMap.purple;
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Responsive breakpoints
  const isLargeScreen = useMediaQuery('(min-width: 1280px)');
  const isMediumScreen = useMediaQuery('(min-width: 768px) and (max-width: 1279px)');
  const isSmallScreen = useMediaQuery('(max-width: 767px)');

  const getVisibleTestimonials = () => {
    // Show different number of cards based on screen size
    let visibleCount = 5; // Default for large screens
    
    if (isMediumScreen) {
      visibleCount = 3;
    } else if (isSmallScreen) {
      visibleCount = 1;
    }
    
    const result = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    
    return result;
  };

  return (
    <div className="w-full bg-[#f6f6f7] py-8 md:py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Horizontal Scrolling Container */}
          <div className="flex flex-wrap md:flex-nowrap space-y-4 md:space-y-0 md:space-x-6 overflow-hidden justify-center">
            {getVisibleTestimonials().map((testimonial, index) => {
              // Ensure color exists, default to purple if not
              const colors = getColorClasses(testimonial.color || 'purple');
              return (
                <div
                  key={`${testimonial.id}-${index}`}
                  className={`flex-shrink-0 w-full sm:w-[90%] md:w-72 lg:w-80 mx-auto md:mx-0 bg-white rounded-lg shadow-md border-t-4  hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                >
                  {/* Header */}
                  <div className="p-4 sm:p-5 md:p-6 pb-3 md:pb-4">
                    <div className="flex items-center mb-4">
                      <div className="relative">
                        <Image
                          width={48}
                          height={48}
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                        />
                        <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full  flex items-center justify-center text-xs font-bold shadow-sm`}>
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>
                      <div className="ml-3">
                        <h3 className="font-semibold text-gray-900 text-base md:text-lg">{testimonial.name}</h3>
                        <div className="flex flex-col">
                          <span className={`text-xs font-semibold  uppercase tracking-wider`}>
                            {testimonial.role}
                          </span>
                          <span className="text-xs text-gray-500 mt-0.5">({testimonial.type})</span>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 items-center justify-center group border border-gray-200 hover:border-gray-300"
          >
            <IconArrowLeft className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600 group-hover:text-gray-800 transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 items-center justify-center group border border-gray-200 hover:border-gray-300"
          >
            <IconArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600 group-hover:text-gray-800 transition-colors" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center mt-6 md:mt-8 space-x-1.5 md:space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-gray-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center mt-6 space-x-4">
          <button
            onClick={prevSlide}
            className="px-3 sm:px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-xs sm:text-sm font-medium text-gray-700 border border-gray-200"
          >
            Previous
          </button>
          <button
            onClick={nextSlide}
            className="px-3 sm:px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-xs sm:text-sm font-medium text-gray-700 border border-gray-200"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsComponent;