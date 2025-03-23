import React from 'react'

const Home = () => {
  return (
    <div>
      <section id="Home" className="bg-[#eef3ff] min-h-screen pt-32 flex flex-col items-center justify-center p-4 sm:p-8 text-center transition-all duration-1000 opacity-100 translate-y-0">
        <div className="max-w-4xl mx-auto px-4">
          <h1  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4" data-aos="fade-down" data-aos-duration="1000">
            Learn. Grow. Succeed.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6" data-aos="fade-up" data-aos-delay="200">
            Personalised Tutoring, Online and In-Person, for Every Learning Stage
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Get Started Today
          </a>
        </div>
      </section>

    </div>
  )
}

export default Home