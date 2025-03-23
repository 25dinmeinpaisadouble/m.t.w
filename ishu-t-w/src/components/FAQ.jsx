import React, { useState } from 'react';
// Make sure AOS is already initialized in your App.js

const FAQ = () => {
  // FAQ data
  const faqItems = [
    {
      question: "How are tutoring sessions structured?",
      answer: "Our tutoring sessions are typically 1.5-2 hours long, depending on the subject and level. Each session includes concept review, problem-solving practice, and personalized guidance. We focus on building a strong understanding of core concepts while addressing individual learning needs and preparing for upcoming assessments."
    },
    {
      question: "Do you offer online tutoring?",
      answer: "Yes, we offer both in-person and online tutoring options. Our online sessions use interactive whiteboards and screen sharing to create an engaging virtual learning environment. Many students find online tutoring equally effective and appreciate the convenience and flexibility it provides."
    },
    {
      question: "How much does tutoring cost?",
      answer: "Our pricing varies based on the subject and level. Primary school sessions start at $25/hr, middle school at $30/hr, and senior school (HSC) at $35-40/hr. We offer both individual and group sessions, with group sessions providing a more cost-effective option. Please contact us for specific pricing for your needs."
    },
    {
      question: "How often should my child attend tutoring?",
      answer: "Most students attend weekly sessions to maintain consistent progress. This frequency allows us to align with school curricula and provide regular support. For intensive exam preparation or catching up on difficult topics, we may recommend twice-weekly sessions for a period of time."
    },
    {
      question: "Do you provide learning materials?",
      answer: "Yes, we provide comprehensive learning materials tailored to each student's needs. These include custom notes, practice worksheets, past exam papers, and additional resources. All materials are included in the tutoring fee and are designed to complement school curriculum."
    },
    {
      question: "How do I know if my child is making progress?",
      answer: "We track student progress through regular assessments, homework reviews, and detailed feedback on strengths and areas for improvement. Parents receive updates after each session, and we conduct more comprehensive progress reviews monthly. We also encourage feedback from students about their confidence levels and school performance."
    }
  ];

  // State to track which FAQ item is open
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle FAQ item
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-gradient-to-b from-blue-50/50 to-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div 
          className="text-center mb-12"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our tutoring services
          </p>
        </div>

        {/* FAQ items */}
        <div className="grid gap-6 max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
                <span className="flex-shrink-0 ml-4">
                  <svg 
                    className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${activeIndex === index ? 'transform rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div 
          className="mt-12 text-center"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center text-base font-medium h-12 px-8 bg-blue-600 hover:bg-blue-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-white"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;