import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Prices from "./components/Prices";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar />
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
