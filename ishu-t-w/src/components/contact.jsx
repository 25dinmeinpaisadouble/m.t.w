import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
// Make sure AOS is already initialized in your App.js

const Contact = () => {
  // Formspree integration - Replace with your form ID
  const [state, handleSubmit] = useForm("xjkywonq");

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50/50 to-white scroll-mt-20"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center mb-8"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-3">
            Start Your Learning Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take the first step towards academic excellence. Book your personalised tutoring session today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Section - Features */}
          <div className="space-y-8">
            {/* Feature 1 */}
            <div 
              className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm border border-gray-200"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600 flex items-center justify-center w-12 h-12">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600">
                  Engaging Lessons
                </h3>
                <p className="text-gray-600">
                  Dynamic and interactive sessions that make learning enjoyable and effective for students of all ages.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div 
              className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm border border-gray-200"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600 flex items-center justify-center w-12 h-12">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600">
                  Affordable Pricing
                </h3>
                <p className="text-gray-600">
                  Quality tutoring at competitive rates, with flexible options for individual and group sessions.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div 
              className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm border border-gray-200"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600 flex items-center justify-center w-12 h-12">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600">
                  Comprehensive Resources
                </h3>
                <p className="text-gray-600">
                  Access to tailored notes, practice questions, and study guides specifically designed for each subject.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            {state.succeeded ? (
              <div className="rounded-xl border border-green-200 shadow-md bg-white p-8 text-center h-full flex flex-col items-center justify-center">
                <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-4">Your message has been received. We'll get back to you shortly.</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="rounded-xl border border-gray-200 shadow-md bg-white">
                <div className="flex flex-col p-6 pb-3">
                  <h3 className="font-semibold text-2xl text-center text-blue-600 mb-2">
                    Get in Touch
                  </h3>
                  <p className="text-center text-gray-600 text-sm">
                    Fill out the form below and we'll respond as soon as possible
                  </p>
                </div>

                <div className="p-6 pt-3">
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    {/* Name Fields */}
                    <div 
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700" htmlFor="firstName">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                          id="firstName"
                          name="firstName"
                          required
                          placeholder="First Name"
                        />
                        <ValidationError prefix="First Name" field="firstName" errors={state.errors} className="text-red-500 text-xs mt-1" />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700" htmlFor="lastName">
                          Last Name
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                          id="lastName"
                          name="lastName"
                          placeholder="Last Name"
                        />
                        <ValidationError prefix="Last Name" field="lastName" errors={state.errors} className="text-red-500 text-xs mt-1" />
                      </div>
                    </div>

                    {/* Contact Details */}
                    <div 
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700" htmlFor="email">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                          id="email"
                          name="email"
                          required
                          placeholder="your@email.com"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700" htmlFor="phone">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                          id="phone"
                          name="phone"
                          required
                          placeholder="Your phone number"
                        />
                        <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-xs mt-1" />
                      </div>
                    </div>
                    
                    {/* Subject Selection */}
                    <div 
                      className="space-y-2"
                      data-aos="fade-up"
                      data-aos-delay="500"
                    >
                      <label className="text-sm font-medium text-gray-700" htmlFor="subject">
                        Subject of Interest
                      </label>
                      <select
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        id="subject"
                        name="subject"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="primary">Primary School Tutoring</option>
                        <option value="mathematics">Mathematics</option>
                        <option value="physics">Physics</option>
                        <option value="chemistry">Chemistry</option>
                        <option value="english">English</option>
                      </select>
                      <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-500 text-xs mt-1" />
                    </div>

                    {/* Message Field */}
                    <div 
                      className="space-y-2"
                      data-aos="fade-up"
                      data-aos-delay="600"
                    >
                      <label className="text-sm font-medium text-gray-700" htmlFor="message">
                        What would you like to discuss? <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 min-h-[120px]"
                        id="message"
                        name="message"
                        required
                        placeholder="Tell us how we can help..."
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                    </div>

                    {/* Submit Button */}
                    <div data-aos="zoom-in" data-aos-delay="700">
                      <button
                        className="inline-flex items-center justify-center gap-2 h-11 w-full px-6 rounded-full text-white font-medium shadow-md bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                        type="submit"
                        disabled={state.submitting}
                      >
                        {state.submitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          <>
                            Send Message
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;