import React from 'react'

const Home = () => {
  return (
    <div>
      <section id="Home" className="min-h-screen pt-32 flex flex-col items-center justify-center p-4 sm:p-8 text-center transition-all duration-1000 opacity-100 translate-y-0">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4 sm:mb-6 tracking-tight leading-tight">
            Learn. Grow. Succeed.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 font-light max-w-2xl mx-auto">
            Personalised Tutoring, Online and In-Person, for Every Learning Stage
          </p>
          <button className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition-all duration-200 group">
            Get Started Today
          </button>
        </div>
      </section>

    </div>
  )
}

export default Home