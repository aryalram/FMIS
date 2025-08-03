// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ResearchCards from "./components/ResearchCards";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Test from "../Test";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ResearchCards />
      <AboutUs />
      <Footer />
      <Test />
    </>
  );
}

export default App;
