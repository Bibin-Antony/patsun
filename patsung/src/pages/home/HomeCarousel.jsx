import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CourosalImage1 from "../../assets/Images/HomeCorsosalImage/bg-img1.jpg"
import  CourosalImage2 from "../../assets/Images/HomeCorsosalImage/bg-img2.jpg"
import CourosalImage3 from "../../assets/Images/HomeCorsosalImage/bg-img3.jpg"

const HomeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Innovations",
      subtitle: "that make kitchen time convenient.",
      image: CourosalImage1, // Replace with your image paths
      textColor: "text-red-600"
    },
    {
      title: "Quality Cookware",
      subtitle: "for every kitchen need.",
      image: CourosalImage2,
      textColor: "text-[#1e3799]"
    },
    {
      title: "Smart Solutions",
      subtitle: "for modern cooking.",
      image: CourosalImage3,
      textColor: "text-[#1e3799]"
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-gray-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-all duration-500 ease-in-out transform ${
            index === currentSlide 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-full'
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute w-full h-full object-cover"
          />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40">
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
              <div className="max-w-xl">
                <h1 className={`${slide.textColor} text-6xl font-bold mb-4`}>
                  {slide.title}
                </h1>
                <p className="text-white text-3xl font-light">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-[#ffd32a] w-8' 
                : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeCarousel;