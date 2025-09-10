// src/components/MedicalCarousel.jsx
import React, { useState, useEffect, useRef } from 'react';
import doctorImg1 from '../assets/carousel1.jpg';
import doctorImg2 from '../assets/carousel2.jpg';
import doctorImg3 from '../assets/carousel3.jpg';

const slides = [
  {
    title: "Medical Services That You Can Trust",
    subtitle: "We give you the best!",
    description: "Need professional help? Our support staff will answer your questions. Visit us Now or Make an Appointment!",
    cta: "Make an Appointment!",
    doctor: doctorImg1,
    bannerDoctor: "Dr. Alex Murry",
  },
  {
    title: "Expert Counselling For Mental Wellbeing",
    subtitle: "Your wellness, our priority.",
    description: "Connect with certified professionals to improve your mental health. Secure, private, and student focused.",
    cta: "Book a Counsellor!",
    doctor: doctorImg2,
    bannerDoctor: "Dr. Susan Lee",
  },
  {
    title: "Digital Support Tailored For You",
    subtitle: "Empowering Students Everyday",
    description: "Discover resources, chat, and group counseling, all in one platform. Join us and start your journey.",
    cta: "Explore Tools!",
    doctor: doctorImg3,
    bannerDoctor: "Dr. Ravi Shah",
  }
];

const MedicalCarousel = () => {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef(null);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    timeoutRef.current = setTimeout(() => handleNext(), 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [active]);

  const handleNext = () => {
    setAnimating(true);
    setTimeout(() => {
      setActive((prev) => (prev + 1) % slides.length);
      setAnimating(false);
    }, 600); // Match animation duration
  };

  const handlePrev = () => {
    setAnimating(true);
    setTimeout(() => {
      setActive((prev) => (prev - 1 + slides.length) % slides.length);
      setAnimating(false);
    }, 450);
  };

  return (
    <div className="relative w-full h-[700px] md:h-[700px] bg-[#093a4a] flex overflow-hidden rounded-2xl shadow-xl select-none mb-10">
      {/* Content: Left */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center pl-8 md:pl-16 text-white z-10">
        <div className="mb-5 flex items-center gap-4">
          {/* Banner */}
          <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-[#13eec7]">
            <path stroke="#13eec7" strokeWidth="3" d="M24 44V36"></path>
            <circle cx="24" cy="24" r="22" stroke="#13eec7" strokeWidth="2" />
            <path stroke="#13eec7" strokeWidth="3" d="M12 28c0-6 4-10 12-10s12 4 12 10" />
          </svg>
          <span className="text-sm md:text-base uppercase tracking-widest font-semibold text-white">
            {slides[active].subtitle}
          </span>
        </div>
        <h1
          className={`font-bold text-3xl md:text-5xl transition-all duration-500 ease-in
            ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
          `}
        >
          <span className="text-[#13eec7]">{slides[active].title.split(' ')[0]}</span>{" "}
          {slides[active].title.substring(slides[active].title.indexOf(" ") + 1)}
        </h1>
        <p
          className={`mt-6 text-lg md:text-xl font-light transition-all duration-500 ease-in
            ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
          `}
        >
          {slides[active].description}
        </p>
        <button className="mt-7 px-7 py-3 bg-[#13eec7] text-[#093a4a] font-bold rounded-md shadow-md hover:bg-[#11b78b] transition">
          {slides[active].cta}
        </button>
        <div className="mt-6 font-semibold text-base md:text-lg text-white">
          {slides[active].bannerDoctor}
        </div>
      </div>
      {/* Image: Right */}
      <div className="hidden md:block absolute right-0 top-0 w-[53%] h-full">
        <img
          src={slides[active].doctor}
          alt="doctor visual"
          className={`object-cover w-full h-full transition-all duration-500 ease-in ${animating ? 'opacity-0 scale-105' : 'opacity-100 scale-100'} rounded-l-lg`}
        />
        <div className="absolute inset-0 w-full h-full bg-[#093a4acc] pointer-events-none"></div>
      </div>
      {/* Arrows */}
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 z-20 bg-[#093a4a70] hover:bg-[#13eec7cc] text-white rounded-full p-2 transition"
        onClick={handlePrev}
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2"/></svg>
      </button>
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 z-20 bg-[#093a4a70] hover:bg-[#13eec7cc] text-white rounded-full p-2 transition"
        onClick={handleNext}
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2"/></svg>
      </button>
      {/* Dots */}
      <div className="absolute bottom-6 left-7 flex gap-2 mb-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-4 h-4 rounded-full border-2 border-white ${idx === active ? 'bg-[#13eec7]' : 'bg-transparent'} transition`}
            onClick={() => setActive(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MedicalCarousel;
