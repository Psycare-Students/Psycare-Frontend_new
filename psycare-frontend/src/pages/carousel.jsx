import React, { useState, useEffect, useRef, useCallback } from 'react';

// Placeholder images - use your URLs
const doctorImg1 = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=800&fit=crop&crop=face";
const doctorImg2 = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=800&fit=crop&crop=face";
const doctorImg3 = "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=800&fit=crop&crop=face";

const slides = [
  {
    title: "Medical Services That You Can Trust",
    subtitle: "We give you the best!",
    description: "Need professional help? Our support staff will answer your questions. Visit us now or make an appointment for personalized care.",
    cta: "Make an Appointment",
    doctor: doctorImg1,
    bannerDoctor: "Dr. Alex Murry",
    speciality: "General Medicine"
  },
  {
    title: "Expert Counselling For Mental Wellbeing",
    subtitle: "Your wellness, our priority",
    description: "Connect with certified mental health professionals to improve your wellbeing. Secure, private, and student-focused counseling services.",
    cta: "Book a Counsellor",
    doctor: doctorImg2,
    bannerDoctor: "Dr. Susan Lee",
    speciality: "Mental Health Counselor"
  },
  {
    title: "Digital Support Tailored For You",
    subtitle: "Empowering students everyday",
    description: "Discover comprehensive resources, chat support, and group counseling sessions, all in one integrated platform designed for your success.",
    cta: "Explore Tools",
    doctor: doctorImg3,
    bannerDoctor: "Dr. Ravi Shah",
    speciality: "Digital Health Specialist"
  }
];

const MedicalCarousel = () => {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const timeoutRef = useRef(null);
  const slideRef = useRef(null);

  const clearAutoPlay = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    if (isPlaying) {
      clearAutoPlay();
      timeoutRef.current = setTimeout(() => handleNext(), 5000);
    }
  }, [isPlaying, clearAutoPlay]);

  useEffect(() => {
    startAutoPlay();
    return clearAutoPlay;
  }, [active, isPlaying, startAutoPlay, clearAutoPlay]);

  const handleNext = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive((prev) => (prev + 1) % slides.length);
      setAnimating(false);
    }, 300);
  }, [animating, slides.length]);

  const handlePrev = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive((prev) => (prev - 1 + slides.length) % slides.length);
      setAnimating(false);
    }, 300);
  }, [animating, slides.length]);

  const goToSlide = useCallback((index) => {
    if (animating || index === active) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(index);
      setAnimating(false);
    }, 300);
  }, [active, animating]);

  const togglePlayPause = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
    if (e.key === ' ') {
      e.preventDefault();
      togglePlayPause();
    }
  }, [handleNext, handlePrev, togglePlayPause]);

  useEffect(() => {
    const node = slideRef.current;
    if (node) {
      node.addEventListener('keydown', handleKeyDown);
      return () => node.removeEventListener('keydown', handleKeyDown);
    }
  }, [handleKeyDown]);

  const current = slides[active];

  return (
    <div className="relative w-full mb-12">
      <div
        className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-xl overflow-hidden shadow-2xl mt-3 bg-gradient-to-br from-[#0a4454] to-[#093a4a] select-none focus:outline-none group"
        tabIndex={0}
        ref={slideRef}
        role="region"
        aria-label="Medical Services Carousel"
        aria-live="polite"
        onMouseEnter={clearAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        {/* Main Content Container */}
        <div className="flex flex-col md:flex-row h-full w-full">
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-8 md:py-12 z-20 w-full">
            {/* Medical Icon and Subtitle */}
            <div className={`mb-4 flex items-center gap-3 transition-all duration-500 ${
              animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}>
              <div className="flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#13eec7]">
                  <path d="M12 2L13.09 8.26L19 7.27L17.91 13.53L24 12.54L22.91 18.8L16 19.79L17.09 26L11 25.01L9.91 18.75L4 19.74L5.09 13.48L-1 14.47L0.09 8.21L7 7.22L5.91 1L12 2Z" fill="currentColor"/>
                  <path d="M12 6v6l4-2-4-4z" fill="#093a4a"/>
                </svg>
              </div>
              <span className="text-sm md:text-base uppercase tracking-wider font-semibold text-[#13eec7] drop-shadow">
                {current.subtitle}
              </span>
            </div>

            {/* Main Title */}
            <h1 className={`font-black text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-4 text-white drop-shadow-xl transition-all duration-500 ${
              animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}>
              <span className="text-[#13eec7]">{current.title.split(' ')[0]}</span>{" "}
              <span className="text-white">{current.title.substring(current.title.indexOf(" ") + 1)}</span>
            </h1>

            {/* Description */}
            <p className={`mb-6 text-base md:text-lg lg:text-xl font-light leading-relaxed text-gray-100 max-w-2xl transition-all duration-500 ${
              animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}>
              {current.description}
            </p>

            {/* CTA Button */}
            <div className={`mb-6 transition-all duration-500 ${
              animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#13eec7] to-[#0ea78a] text-[#093a4a] font-bold rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#13eec7]/30 transition-all duration-300 text-base md:text-lg">
                {current.cta}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Doctor Info */}
            <div className={`transition-all duration-500 ${
              animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}>
              <div className="text-lg md:text-xl font-bold text-white drop-shadow">
                {current.bannerDoctor}
              </div>
              <div className="text-sm md:text-base text-[#13eec7] font-medium">
                {current.speciality}
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex-1 relative overflow-hidden h-full w-full">
            <img
              src={current.doctor}
              alt={`${current.bannerDoctor} - ${current.speciality}`}
              className={`object-cover w-full h-full transition-all duration-700 ease-out ${
                animating ? "opacity-0 scale-110" : "opacity-100 scale-100"
              }`}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#093a4a]/60 via-transparent to-transparent md:bg-gradient-to-r md:from-[#093a4a]/40 md:via-transparent md:to-transparent" />
          </div>
        </div>

        {/* Navigation Controls */}
        <button
          className="absolute top-1/2 left-4 md:left-6 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm hover:bg-[#13eec7] hover:text-[#093a4a] text-white rounded-full p-3 shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#13eec7]/30 group-hover:translate-x-0 -translate-x-12 md:-translate-x-0"
          onClick={handlePrev}
          aria-label="Previous slide"
          disabled={animating}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button
          className="absolute top-1/2 right-4 md:right-6 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm hover:bg-[#13eec7] hover:text-[#093a4a] text-white rounded-full p-3 shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#13eec7]/30 group-hover:translate-x-0 translate-x-12 md:translate-x-0"
          onClick={handleNext}
          aria-label="Next slide"
          disabled={animating}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Play/Pause Button */}
        <button
          className="absolute top-6 right-6 z-30 bg-white/10 backdrop-blur-sm hover:bg-[#13eec7] hover:text-[#093a4a] text-white rounded-full p-2 shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#13eec7]/30"
          onClick={togglePlayPause}
          aria-label={isPlaying ? 'Pause autoplay' : 'Start autoplay'}
        >
          {isPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`relative overflow-hidden rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#13eec7]/50 ${
                idx === active 
                  ? 'w-8 h-3 bg-[#13eec7]' 
                  : 'w-3 h-3 bg-white/30 hover:bg-white/50'
              }`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}: ${slides[idx].title}`}
              disabled={animating}
            >
              {idx === active && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#13eec7] to-[#0ea78a] animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-6 right-6 text-[#13eec7] bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold shadow-lg hidden md:block">
          <span className="text-white">{active + 1}</span>
          <span className="text-white/60"> / </span>
          <span className="text-white/80">{slides.length}</span>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
          <div 
            className="h-full bg-gradient-to-r from-[#13eec7] to-[#0ea78a] transition-all duration-300"
            style={{ 
              width: `${((active + 1) / slides.length) * 100}%`,
              transform: animating ? 'scaleX(0.95)' : 'scaleX(1)'
            }}
          />
        </div>
      </div>

      {/* Accessibility Instructions */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {active + 1} of {slides.length}: {current.title}. {current.description}
        Use arrow keys to navigate, space bar to pause autoplay.
      </div>
    </div>
  );
};

export default MedicalCarousel;
