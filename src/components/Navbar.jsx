// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import logo from "../assets/images/navbar/Logo.svg"; // Import logo as URL
import backgroundImage from "../assets/images/navbar/bg_vetor.png"; // Import background image

export default function Navbar() {
  const location = useLocation();
  const linkRefs = useRef([]); // Array to store link refs
  const underlineRef = useRef(null);

  useEffect(() => {
    const currentPath = location.pathname;
    const activeIndex = linkRefs.current.findIndex(
      (ref) => ref?.dataset.path === currentPath
    );
    if (activeIndex !== -1 && underlineRef.current) {
      // Set fixed left positions based on data-path
      let leftPosition;
      switch (currentPath) {
        case "/":
          leftPosition = -643;
          break;
        case "/research":
          leftPosition = -505;
          break;
        case "/about-us":
          leftPosition = -344;
          break;
        case "/news-and-events":
          leftPosition = -149;
          break;
        default:
          leftPosition = 0; // Default case
      }
      underlineRef.current.style.left = `${leftPosition}px`;
    } else if (underlineRef.current) {
      underlineRef.current.style.display = "none";
    }
  }, [location]);

  return (
    <nav
      className="bg-[#141E27] text-white px-2 py-4 relative overflow-hidden"
      style={{ height: "140px" }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "100% auto", // Slightly smaller background image
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.04, // 4% opacity
        }}
      />
      <div className="max-w-8xl px-22 flex items-center justify-between relative z-20 h-full">
        <div className="flex items-center">
          <img src={logo} alt="Awamangi Research Group Logo" className="h-15" />
        </div>
        <div className="link-container relative flex items-center gap-7 text-sh4">
          <Link
            to="/"
            ref={(el) => (linkRefs.current[0] = el)}
            data-path="/"
            className="hover:underline font-poppins font-semibold"
          >
            Home
          </Link>
          <Divider />
          <Link
            to="/research"
            ref={(el) => (linkRefs.current[1] = el)}
            data-path="/research"
            className="hover:underline font-poppins font-semibold"
          >
            Research
          </Link>
          <Divider />
          <Link
            to="/about-us"
            ref={(el) => (linkRefs.current[2] = el)}
            data-path="/about-us"
            className="hover:underline font-poppins font-semibold"
          >
            About us
          </Link>
          <Divider />
          <Link
            to="/news-and-events"
            ref={(el) => (linkRefs.current[3] = el)}
            data-path="/news-and-events"
            className="hover:underline font-poppins font-semibold"
          >
            News and Events
          </Link>

          <div
            ref={underlineRef}
            className="relative"
            style={{
              height: "3px",
              width: "57px",
              background:
                "linear-gradient(to right, #3373BA, #68C5B2, #14B6D3, #00A7A7)",
              opacity: 1,
              transition: "left 0.3s ease, width 0.3s ease",
              display: "block",
              top: "15px",
              zIndex: 50,
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
      fontSize: "18px",
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
