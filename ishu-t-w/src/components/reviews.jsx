import React, { useState, useEffect, useRef } from 'react';
// Make sure AOS is already initialized in your App.js

const Reviews = () => {
  // Sample review data
  const reviews = [
    {
      id: 1,
      name: "Aryan Rodrigues",
      yearSchool: "Physics, 2023",
      text: "Ishu has been an excellent tutor who significantly contributed to my successful HSC marks. He established a genuine connection that made me comfortable expressing difficulties. His systematic teaching was invaluable during stressful examination periods."
    },
    {
      id: 2,
      name: "Rishay Ram",
      yearSchool: "Physics, 2023",
      text: "Ishu was instrumental in my HSC journey. With his tutoring in maths and physics, I improved from a band 4 to a band 6 student. I highly recommend him as a tutor."
    },
    {
      id: 3,
      name: "Thulasi Arun",
      yearSchool: "Mathematics Advanced, 2022",
      text: "Despite my passion for maths, I struggled in certain areas. Ishu adapted his teaching methods to my needs, making Advanced Mathematics much easier to understand. His mentorship improved both my marks and my work ethic."
    },
    {
      id: 4,
      name: "Ramya Krishnan",
      yearSchool: "Advanced Maths & Physics, 2022",
      text: "My Year 12 experience in advanced maths and physics was extraordinary thanks to Ishu. His teaching prowess made a significant difference. He presented complex concepts clearly, helping me grasp fundamentals with ease."
    },
    {
      id: 5,
      name: "Vivica Balmadres",
      yearSchool: "Mathematics Advanced Student, 2022",
      text: "I used to get bored studying maths, but Ishu changed that completely. He improved both my marks in Mathematics Advanced and my confidence. His flexible teaching style made complex concepts much easier to understand."
    }
  ];

  // State for carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef(null);

  // Calculate how many cards to show based on viewport
  const [cardsToShow, setCardsToShow] = useState(3);

  // Calculate maximum valid index
  const maxValidIndex = Math.max(0, reviews.length - cardsToShow);

  // Update cards to show based on window size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  // Handle next slide with proper looping
  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // If we're at the last valid index, reset to 0
    if (currentIndex >= maxValidIndex) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match this with the CSS transition duration
  };

  // Handle previous slide with proper looping
  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // If we're at the first index, go to the last valid index
    if (currentIndex === 0) {
      setCurrentIndex(maxValidIndex);
    } else {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Enhanced touch events for mobile swipe with live slide movement
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const slideWidth = 100 / cardsToShow; // Width of each slide in percentage
  
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX);
    setDragOffset(0);
  };
  
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    setTouchEnd(e.targetTouches[0].clientX);
    
    // Calculate how far we've dragged as a percentage of carousel width
    const carouselWidth = carouselRef.current.offsetWidth;
    const pixelOffset = touchEnd - touchStart;
    const percentageOffset = (pixelOffset / carouselWidth) * 100;
    
    // Limit drag to the next/previous slide only
    const boundedOffset = Math.max(
      Math.min(percentageOffset, slideWidth),
      -slideWidth
    );
    
    setDragOffset(boundedOffset);
  };
  
  const handleTouchEnd = () => {
    setIsDragging(false);
    
    // If drag was significant enough, change slides
    const swipeThreshold = 15; // Percentage threshold to trigger slide change
    
    if (dragOffset > swipeThreshold) {
      // Swiped right - go to previous
      handlePrev();
    } else if (dragOffset < -swipeThreshold) {
      // Swiped left - go to next
      handleNext();
    }
    
    // Reset drag offset
    setDragOffset(0);
  };

  // Review Card Component
  const ReviewCard = ({ review }) => {
    return (
      <div className="h-full bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col">
        {/* Quote icon */}
        <div className="mb-4 text-blue-500">
          <svg className="w-8 h-8 opacity-80" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        
        {/* Review text */}
        <p className="text-gray-700 mb-4 flex-grow text-sm md:text-base leading-relaxed">
          "{review.text}"
        </p>
        
        {/* Reviewer info */}
        <div className="mt-auto">
          <h4 className="font-semibold text-gray-900">{review.name}</h4>
          <p className="text-sm text-blue-600">{review.yearSchool}</p>
        </div>
      </div>
    );
  };

  // Generate pagination dots
  const renderPaginationDots = () => {
    const dots = [];
    const numDots = Math.min(reviews.length - cardsToShow + 1, reviews.length);

    for (let i = 0; i < numDots; i++) {
      dots.push(
        <button
          key={i}
          onClick={() => {
            if (!isAnimating) {
              setIsAnimating(true);
              setCurrentIndex(i);
              setTimeout(() => setIsAnimating(false), 500);
            }
          }}
          className={`w-2.5 h-2.5 rounded-full mx-1 transition-all duration-300 ${
            i === currentIndex ? 'bg-blue-600 w-5' : 'bg-gray-300'
          }`}
          aria-label={`Go to slide ${i + 1}`}
        />
      );
    }

    return dots;
  };

  return (
    <section 
      id="reviews" 
      className="min-h-screen flex items-center py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50/50 to-white scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section heading */}
        <div 
          className="text-center mb-12"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-3">
            Student Reviews
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our students
          </p>
        </div>

        {/* Carousel container */}
        <div 
          className="relative"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {/* Carousel */}
          <div 
            ref={carouselRef}
            className="overflow-hidden touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={(e) => {
              setIsDragging(true);
              setTouchStart(e.clientX);
              setTouchEnd(e.clientX);
              setDragOffset(0);
            }}
            onMouseMove={(e) => {
              if (!isDragging) return;
              setTouchEnd(e.clientX);
              
              // Calculate drag offset for mouse movement
              const carouselWidth = carouselRef.current.offsetWidth;
              const pixelOffset = e.clientX - touchStart;
              const percentageOffset = (pixelOffset / carouselWidth) * 100;
              
              const boundedOffset = Math.max(
                Math.min(percentageOffset, slideWidth),
                -slideWidth
              );
              
              setDragOffset(boundedOffset);
            }}
            onMouseUp={handleTouchEnd}
            onMouseLeave={() => {
              if (isDragging) {
                handleTouchEnd();
              }
            }}
          >
            <div 
              className={`flex ${isDragging ? '' : 'transition-transform duration-500 ease-in-out'}`}
              style={{ 
                transform: `translateX(calc(-${currentIndex * (100 / cardsToShow)}% + ${dragOffset}%))`
              }}
            >
              {reviews.map(review => (
                <div 
                  key={review.id} 
                  className="p-2 min-w-full sm:min-w-[50%] lg:min-w-[33.333%]"
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 -left-5 sm:-left-8 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-blue-600 z-10 hover:bg-blue-50 transition-colors duration-300 focus:outline-none"
            aria-label="Previous slide"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute top-1/2 -right-5 sm:-right-8 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-blue-600 z-10 hover:bg-blue-50 transition-colors duration-300 focus:outline-none"
            aria-label="Next slide"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Pagination dots */}
        <div 
          className="flex justify-center mt-8"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {renderPaginationDots()}
        </div>

        {/* CTA */}
        <div 
          className="text-center mt-12"
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center text-base font-medium h-12 px-8 bg-blue-600 hover:bg-blue-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-white"
          >
            Start Your Learning Journey Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;