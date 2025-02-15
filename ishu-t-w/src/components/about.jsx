import React from "react";

// 🟢 Statistics Card Component
const StatisticCard = ({ value, label }) => {
  return (
    <div className="border-border border text-card-foreground p-2 sm:p-4 text-center bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg">
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-0.5 sm:mb-1">
        {value}
      </div>
      <div className="text-sm sm:text-base text-gray-600 font-medium">
        {label}
      </div>
    </div>
  );
};

// 🟢 Profile Section Component
const ProfileSection = () => {
  return (
    <div className="border-border border text-card-foreground p-4 sm:p-6 bg-white shadow-md overflow-hidden rounded-lg">
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Ishu Rawat</h3>
      <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
        Hi, I’m Ishu - I graduated in 2021 as the school captain with an ATAR of 95.2 and am currently pursuing a Bachelor of Computer Science at UNSW.
        Over the past 3 years, I've helped countless students achieve their academic goals. I’m passionate about proving that learning doesn’t have to be boring — it can be something students genuinely enjoy!
      </p>
      <button className="inline-flex items-center justify-center text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md text-sm font-medium h-9 px-4 py-2 w-full mt-2">
        Read More
      </button>
    </div>
  );
};

// 🟢 Main About Section
const About = () => {
  const stats = [
    { value: "100+", label: "Students Taught" },
    { value: "20+", label: "Reviews" },
    { value: "3+", label: "Years Experience" }
  ];

  return (
    <section id="about" className="bg-gradient-to-b from-white via-blue-50/50 to-white pb-6 sm:pb-8 px-4 scroll-mt-16 animate-fade-left">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-2">
            About
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Transforming education through expert guidance
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Profile Image & Background Animation */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative" style={{ width: "min(100%, 400px)", height: "min(460px, 115vw)", maxHeight: "460px" }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[75%] aspect-square bg-blue-100 rounded-full opacity-20"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] aspect-square bg-blue-200 rounded-full opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[80%] aspect-square overflow-hidden">
                  <img src="/images/head_img.png" alt="Profile Picture" className="w-full h-full object-cover rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Statistics and Profile Section */}
          <div className="w-full lg:w-2/3 space-y-4 sm:space-y-6 px-3 sm:px-4">
            {/* Statistic Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {stats.map((stat, index) => (
                <StatisticCard key={index} value={stat.value} label={stat.label} />
              ))}
            </div>

            {/* Profile Section */}
            <ProfileSection />

            {/* CTA Button */}
            <div className="text-center mt-6">
              <button className="inline-flex items-center justify-center text-sm font-medium h-10 px-8 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-white">
                Start Your Learning Journey Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
