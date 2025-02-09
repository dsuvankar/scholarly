import React, { useState, useEffect } from "react";
import Header from "./components/header.jsx";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
import HowWeWork from "./components/HowWeWork";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen`}>
      <div className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <Services />
        <HowWeWork />
        <FAQ />
        <Testimonials />
        <About />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
}

export default App;
