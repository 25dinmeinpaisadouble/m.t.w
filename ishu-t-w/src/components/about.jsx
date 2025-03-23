import React, { useEffect } from "react";
import profilePic from "../assets/profile-pic.jpg";
// Make sure to install AOS: npm install aos --save

// Statistic Card Component
const StatisticCard = ({ value, label, index }) => {
  return (
    <div 
      className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
      data-aos="fade-up"
      data-aos-delay={100 + (index * 100)}
    >
      <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
        {value}
      </div>
      <div className="text-gray-600 font-medium">
        {label}
      </div>
    </div>
  );
};

// Bio Card Component
const BioCard = () => {
  return (
    <div 
      className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
      data-aos="zoom-in"
      data-aos-delay="300"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Ishu Rawat</h3>
      <p className="text-gray-600 leading-relaxed">
        Hi, I'm Ishu - I graduated in 2021 as the school captain with an ATAR of 95.2 and am currently pursuing a Bachelor of Computer Science at UNSW. Over the past years, I've helped countless students achieve their academic goals. I'm passionate about proving that learning doesn't have to be boring — it can be something students genuinely enjoy!
      </p>
      <div className="mt-6">
        <a 
          href="#contact" 
          className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        >
          Start Your Learning Journey Today
        </a>
      </div>
    </div>
  );
};

// Main About Section
const About = () => {
  const stats = [
    { value: "100+", label: "Students Taught" },
    { value: "20+", label: "Reviews" },
    { value: "4+", label: "Years Experience" }
  ];
  
  // We'll keep the useEffect for AOS initialization in App.js or main layout component
  // This is just a reminder to initialize AOS in your main component
  
  return (
    <section id="about" className="min-h-screen py-20 scroll-mt-20 bg-gradient-to-b from-white via-blue-50/40 to-white px-4 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div 
          className="text-center mb-16"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <h2 className="text-5xl font-bold text-blue-600 mb-3">
            About
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming education through expert guidance
          </p>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Image Area - Left on Desktop, Top on Mobile */}
          <div 
            className="lg:col-span-5"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="relative mx-auto max-w-md">
              {/* Circular Image Container */}
              <div className="relative overflow-hidden rounded-full bg-white p-2 aspect-square">
                <img 
                  src={profilePic} 
                  alt="Ishu Rawat" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Content Area - Right on Desktop, Bottom on Mobile */}
          <div className="lg:col-span-7 space-y-8">
            {/* Statistics Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <StatisticCard key={index} value={stat.value} label={stat.label} index={index} />
              ))}
            </div>

            {/* Bio Card */}
            <BioCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;