// src/components/Navbar.jsx
import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/navbar/Logo.svg"; // Import logo as URL
import backgroundImage from "../assets/images/navbar/bg_vetor.png"; // Import background image

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const linkRefs = useRef([]);
  const underlineRef = useRef(null);

  useEffect(() => {
    const activeLink = linkRefs.current.find(
      (ref) => ref?.dataset.path && isActive(ref.dataset.path)
    );
    if (activeLink && underlineRef.current) {
      const parentOffset = activeLink.closest(".link-container").offsetLeft;
      underlineRef.current.style.left = `${
        activeLink.offsetLeft - parentOffset
      }px`;
      underlineRef.current.style.width = `${activeLink.offsetWidth}px`;
      underlineRef.current.style.display = "block"; // Show underline for active link
    } else if (underlineRef.current) {
      underlineRef.current.style.display = "none"; // Hide if no active link
    }
  }, [location]);

  return (
    <nav
      className="bg-[#141E27] text-white px-4 py-4 relative overflow-hidden"
      style={{ height: "140px" }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.04, // 4% opacity
        }}
      />
      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-20 h-full">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Awamangi Research Group Logo"
            className="h-16 mr-4"
          />
        </div>
        <div className="link-container relative flex items-center gap-6 text-lg font-semibold">
          <Link
            to="/"
            ref={(el) => (linkRefs.current[0] = el)}
            data-path="/"
            className={`hover:underline ${isActive("/") ? "active-link" : ""}`}
          >
            Home
          </Link>
          <Divider />
          <Link
            to="/research"
            ref={(el) => (linkRefs.current[1] = el)}
            data-path="/research"
            className={`hover:underline ${
              isActive("/research") ? "active-link" : ""
            }`}
          >
            Research
          </Link>
          <Divider />
          <Link
            to="/about-us"
            ref={(el) => (linkRefs.current[2] = el)}
            data-path="/about-us"
            className={`hover:underline ${
              isActive("/about-us") ? "active-link" : ""
            }`}
          >
            About us
          </Link>
          <Divider />
          <Link
            to="/news-and-events"
            ref={(el) => (linkRefs.current[3] = el)}
            data-path="/news-and-events"
            className={`hover:underline ${
              isActive("/news-and-events") ? "active-link" : ""
            }`}
          >
            News and Events
          </Link>
          <div
            ref={underlineRef}
            className="absolute"
            style={{
              height: "4px",
              top: "160px", // Near bottom of 180px height
              background: "linear-gradient(to right, #3373BA, #00A7A7)", // Simplified gradient
              opacity: 1,
              transition: "left 0.3s ease, width 0.3s ease",
              display: "none", // Controlled by useEffect
              zIndex: 30, // Ensure it's above other elements
            }}
          />
        </div>
      </div>
    </nav>
  );
}

// Divider Component
const Divider = () => (
  <span
    className="text-white flex items-center"
    style={{
      fontFamily: "Poppins",
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "100%",
      letterSpacing: "0%",
      textAlign: "center",
      width: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    |
  </span>
);
