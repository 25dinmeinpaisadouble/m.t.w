import React, { useState, useEffect } from 'react';

const SubjectsPricing = () => {
  // Animation on scroll
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

  // Subject Card Component
  const SubjectCard = ({ name, price, level }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <div 
        className={`rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 ${isHovered ? 'shadow-md' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Top color indicator */}
        <div className={`h-1 w-full rounded-t-xl bg-blue-500`}></div>
        
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            {name}
          </h3>
          
          <div className="mt-auto">
            <p className="font-medium text-blue-500">{price}</p>
          </div>
        </div>
      </div>
    );
  };

  // Subject data
  const subjectData = [
    {
      category: "Primary School",
      subtitle: "Years 3-6",
      level: "primary",
      subjects: [
        { 
          name: "Mathematics", 
          price: "$25/hr × 1.5hr class"
        },
        { 
          name: "English", 
          price: "$25/hr × 1.5hr class"
        }
      ]
    },
    {
      category: "Middle School",
      subtitle: "Years 7-10",
      level: "middle",
      subjects: [
        { 
          name: "Mathematics", 
          price: "$30/hr × 2hr class"
        }
      ]
    },
    {
      category: "Senior School",
      subtitle: "Years 11-12 (HSC)",
      level: "senior",
      subjects: [
        { 
          name: "Mathematics (Standard/Advanced)", 
          price: "$35/hr × 2hr class"
        },
        { 
          name: "Physics", 
          price: "$40/hr × 2hr class"
        },
        { 
          name: "Chemistry", 
          price: "$40/hr × 2hr class"
        }
      ]
    }
  ];

  return (
    <section id="subjects" className="min-h-screen flex items-center py-16 sm:py-20 bg-blue-50/50 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12 reveal-item opacity-0 transition-all duration-700">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-3">
            Tutoring Subjects & Pricing
          </h2>
        </div>
        
        {/* Subject Categories */}
        <div className="space-y-12 reveal-item opacity-0 transition-all duration-700 delay-200">
          {/* Map through each category */}
          {subjectData.map((category, idx) => (
            <div key={idx} className="mb-10">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {category.category}
                  <span className="text-lg font-normal text-gray-500 ml-2">
                    {category.subtitle}
                  </span>
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.subjects.map((subject, index) => (
                  <SubjectCard 
                    key={index}
                    name={subject.name}
                    price={subject.price}
                    level={category.level}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Information */}
        <div className="bg-gray-50/50 rounded-lg p-6 mt-10 border border-blue-200 reveal-item opacity-0 transition-all duration-700 delay-300">
          <h4 className="text-lg font-medium text-blue-800 mb-2">Additional Information</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              All prices shown are for group lessons (3-6 students)
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              One-on-one tutoring available at additional rates
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              All lesson materials and resources included
            </li>
          </ul>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-10 reveal-item opacity-0 transition-all duration-700 delay-400">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center text-base font-medium h-12 px-8 bg-blue-600 hover:bg-blue-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-white"
          >
            Enquire about private tuition rates
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

export default SubjectsPricing;