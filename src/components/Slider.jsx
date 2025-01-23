import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Slider = () => {
  const slides = [
    {
      id: 1,
      image: "src/assets/mens1.webp",
      caption: "Discover the latest trends!",
      button: "Shop Now",
    },
    {
      id: 2,
      image: "src/assets/slider2.jpg",
      caption: "Unbeatable prices on all products!",
      button: "Shop Now",
    },
    {
      id: 3,
      image: "src/assets/slider3.webp",
      caption: "Shop now and save big!",
      button: "Shop Now",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform ease-in-out duration-700"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 h-72 md:h-[390px]"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
            }}
          >
            <div className="bg-black bg-opacity-50 h-full flex flex-col items-center justify-center">
              <h2 className="text-white text-2xl md:text-4xl font-bold mt-40 mb-3">
                {slide.caption}
              </h2>
              <NavLink to="/shop">
                <button className="bg-white px-3 py-2 rounded-md">
                  {slide.button}
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
