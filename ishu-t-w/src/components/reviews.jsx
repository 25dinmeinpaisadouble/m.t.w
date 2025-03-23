import React, { useState, useEffect, useRef } from 'react';

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

  // Animation for scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-reveal');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.reveal-item');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
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

  // Handle next slide
  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex(prevIndex => 
      prevIndex === reviews.length - cardsToShow ? 0 : prevIndex + 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match this with the CSS transition duration
  };

  // Handle previous slide
  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? reviews.length - cardsToShow : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match this with the CSS transition duration
  };

  // Handle touch events for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      handleNext();
    }
    
    if (touchStart - touchEnd < -75) {
      // Swipe right
      handlePrev();
    }
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
    const numDots = reviews.length - cardsToShow + 1;

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
    <section id="reviews" className="min-h-screen flex items-center py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50/50 to-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section heading */}
        <div className="text-center mb-12 reveal-item opacity-0 transition-all duration-700">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-3">
            Student Reviews
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our students
          </p>
        </div>

        {/* Carousel container */}
        <div className="relative reveal-item opacity-0 transition-all duration-700 delay-100">
          {/* Carousel */}
          <div 
            ref={carouselRef}
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
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
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute top-1/2 -right-5 sm:-right-8 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-blue-600 z-10 hover:bg-blue-50 transition-colors duration-300 focus:outline-none"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-8 reveal-item opacity-0 transition-all duration-700 delay-200">
          {renderPaginationDots()}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 reveal-item opacity-0 transition-all duration-700 delay-300">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center text-base font-medium h-12 px-8 bg-blue-600 hover:bg-blue-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-white"
          >
            Start Your Learning Journey Today
          </a>
        </div>
      </div>

      {/* Add CSS for reveal animation */}
      <style jsx>{`
        .animate-reveal {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-item {
          transform: translateY(20px);
        }
      `}</style>
    </section>
  );
};

export default Reviews;