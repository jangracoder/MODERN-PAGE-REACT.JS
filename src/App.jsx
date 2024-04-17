import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Prices from "./components/Prices";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";


function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <Navbar handleLogoClick={handleLogoClick} scrolled={scrollPosition > 0} />
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Prices />
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
