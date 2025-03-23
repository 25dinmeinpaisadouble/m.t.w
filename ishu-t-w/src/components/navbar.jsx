import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import logo from '../assets/Logo.png';

const Navbar = () => {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State for navbar background change on scroll
  const [navbarBg, setNavbarBg] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking on a nav link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle scroll event to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation links
  const navLinks = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#about" },
    { name: "Subjects", href: "#subjects" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed w-full z-50">
      {/* Announcement Bar */}
      <div className="w-full bg-blue-600 text-white overflow-hidden cursor-pointer" onClick={() => window.location.href = '#contact'}>
        <Marquee
          speed={75}
          pauseOnHover={true}
          gradient={false}
        >
          <div className="flex items-center py-1">
            <span className="font-semibold text-base">🚀 Now Available: Free Trial Lessons for New Students! 🎓</span>
            <span className="mx-15"></span>
            <span className="font-semibold text-base">Sign up today and start learning – Click here to get started!</span>
            <span className="mx-15"></span>
            <span className="font-semibold text-base">🚀 Now Available: Free Trial Lessons for New Students! 🎓</span>
            <span className="mx-15"></span>
            <span className="font-semibold text-base">Sign up today and start learning – Click here to get started!</span>
            <span className="mx-15"></span>
          </div>
        </Marquee>
      </div>

      {/* Main Navbar */}
      <div className={`w-full transition-all duration-300 ${navbarBg ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-2 md:justify-start md:space-x-10">
            {/* Logo / Brand */}
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#Home" className="font-bold text-xl text-blue-600 hover:text-blue-700">
                <img 
                  src={logo} 
                  alt="StudyCave Logo" 
                />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-blue-600 hover:text-blue-700 hover:bg-blue-50 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>

            {/* Desktop menu */}
            <nav className="hidden md:flex space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-gray-600 hover:text-blue-600 hover:underline underline-offset-8 decoration-2 transition-colors duration-200"
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button (Desktop) */}
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="#contact"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 hover:shadow-lg transition-all duration-200"
                onClick={closeMenu}
              >
                Book Now
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}
            {/* Mobile CTA Button */}
            <div className="px-3 py-2">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                onClick={closeMenu}
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;