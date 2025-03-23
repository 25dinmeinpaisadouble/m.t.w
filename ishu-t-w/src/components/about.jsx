import React, { useEffect } from "react";

// 🔷 Statistics Card Component
const StatisticCard = ({ value, label }) => {
  return (
    <div className="border border-gray-200 p-4 text-center bg-white shadow-sm hover:shadow-md transition-all duration-300 rounded-lg">
      <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">
        {value}
      </div>
      <div className="text-sm text-gray-600">
        {label}
      </div>
    </div>
  );
};

// 🔷 Profile Section Component
const ProfileSection = () => {
  return (
    <div className="border border-gray-200 p-6 bg-white shadow-sm rounded-lg">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Ishu Rawat</h3>
      <p className="text-base text-gray-600 leading-relaxed">
        Hi, I'm Ishu - I graduated in 2021 as the school captain with an ATAR of 95.2 and am currently pursuing a Bachelor of Computer Science at UNSW. Over the past 3 years, I've helped countless students achieve their academic goals. I'm passionate about proving that learning doesn't have to be boring — it can be something students genuinely enjoy!
      </p>
    </div>
  );
};

// 🔷 Main About Section
const About = () => {
  const stats = [
    { value: "100+", label: "Students Taught" },
    { value: "20+", label: "Reviews" },
    { value: "4+", label: "Years Experience" }
  ];
  
  // Add reveal animation on scroll
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

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-16 sm:py-20 scroll-mt-20 bg-gradient-to-b from-white via-blue-50/40 to-white px-4">
      <div className="max-w-6xl mx-auto w-full sm:px-6 lg:px-8 rounded-2xl">
        <div className="text-center mb-10 reveal-item opacity-0 transition-all duration-700">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">
            About
          </h2>
          <p className="text-lg text-gray-600">
            Transforming education through expert guidance
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 max-w-5xl mx-auto pb-10">
          {/* Profile Image & Background Animation */}
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0 reveal-item opacity-0 transition-all duration-700 delay-100">
            <div className="relative mx-auto" style={{ maxWidth: "400px" }}>
              {/* Circular blue gradient background elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] aspect-square bg-blue-100 rounded-full opacity-50"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] aspect-square bg-blue-200 rounded-full opacity-60"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square bg-blue-300 rounded-full opacity-40"></div>
              
              {/* Image container - empty for placeholder */}
              <div className="relative w-full pt-[100%]"> {/* 1:1 Aspect ratio */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* This will be where the profile image goes */}
                </div>
              </div>
            </div>
          </div>

          {/* Statistics and Profile Section */}
          <div className="w-full lg:w-1/2 space-y-6 reveal-item opacity-0 transition-all duration-700 delay-200">
            {/* Statistic Cards */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <StatisticCard key={index} value={stat.value} label={stat.label} />
              ))}
            </div>

            {/* Profile Section */}
            <ProfileSection />

            {/* CTA Button */}
            <div className="text-center mt-8">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center text-base font-medium h-12 px-8 bg-blue-600 hover:bg-blue-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-white"
              >
                Start Your Learning Journey Today
              </a>
            </div>
          </div>
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

export default About;