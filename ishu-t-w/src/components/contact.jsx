import React from 'react'

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex items-center py-16"
    >
    <div className="w-full max-w-7xl mx-auto transform transition-all duration-1000 ease-out translate-y-0 opacity-100">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Section */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-blue-600 mb-4">
              Start Your Learning Journey
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Take the first step towards academic excellence. Book your personalized tutoring session today.
            </p>
          </div>
          
          {/* Features */}
          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                📖
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600">
                  Engaging Lessons
                </h3>
                <p className="text-gray-600">
                  Dynamic and interactive sessions that make learning enjoyable
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                💰
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600">
                  Affordable Pricing
                </h3>
                <p className="text-gray-600">
                  Quality tutoring at competitive rates
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                📚
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600">
                  Comprehensive Resources
                </h3>
                <p className="text-gray-600">
                  Access to tailored notes, practice questions, and study guides
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div>
          <div className="rounded-lg border border-border shadow-lg bg-white/80 backdrop-blur-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="font-semibold tracking-tight text-2xl text-center text-blue-600">
                Get in Touch
              </h3>
            </div>

            <div className="p-6 pt-0">
              <form className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="firstName">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      className="flex h-9 w-full rounded-md border bg-white px-3 py-1 text-sm text-black shadow-sm focus-visible:ring-1 focus-visible:ring-blue-600"
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="First Name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      className="flex h-9 w-full rounded-md border bg-white px-3 py-1 text-sm text-black shadow-sm focus-visible:ring-1 focus-visible:ring-blue-600"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                {/* Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="flex h-9 w-full rounded-md border bg-white px-3 py-1 text-sm text-black shadow-sm focus-visible:ring-1 focus-visible:ring-blue-600"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="phone">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      className="flex h-9 w-full rounded-md border bg-white px-3 py-1 text-sm text-black shadow-sm focus-visible:ring-1 focus-visible:ring-blue-600"
                      id="phone"
                      name="phone"
                      required
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="message">
                    What would you like to discuss? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    className="flex w-full rounded-md border bg-white px-3 py-2 text-sm text-black shadow-sm focus-visible:ring-1 focus-visible:ring-blue-600 min-h-[120px]"
                    id="message"
                    name="message"
                    required
                    placeholder="..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white shadow h-10 rounded-md px-8 w-full bg-blue-600 hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</section>

  )
}

export default Contact