// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Test from "../Test";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ResearchCards />
      <AboutUs />
      <Footer />
    </>
  );
}
