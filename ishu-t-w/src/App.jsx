import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import SubjectsPricing from './components/subjectsPricing';
import Reviews from './components/reviews';
import Contact from './components/contact';
import Footer from './components/Footer';
import FAQ from './components/FAQ';

function App() {
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 800, // Default animation duration in ms
      once: true,    // Whether animation should happen only once
      easing: 'ease-out-cubic', // Default easing for animations
      delay: 0,      // Default delay for animations
      offset: 100,   // Offset (in px) from the original trigger point
      // Uncomment the line below if you want to refresh animations when scrolling down and back up
      // mirror: true,
    });

    // Refresh AOS on window resize for responsive layouts
    window.addEventListener('resize', () => {
      AOS.refresh();
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <SubjectsPricing />
      <Reviews />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;