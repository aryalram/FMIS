import React from "react";
import logo from "../AwamatangiFiles/Logo/PNG/LogoWhite.png";
import pattern from "../AwamatangiFiles/websiteAsset/bigpatternv1.jpg";
import linkedinIcon from "../AwamatangiFiles/Logo/JPG/Linkedin.png";
import twitterIcon from "../AwamatangiFiles/Logo/JPG/Twitter.png";
import facebookIcon from "../AwamatangiFiles/Logo/JPG/Facebook.png";

export default function Footer() {
  return (
    <footer className="relative bg-[#141E27] text-white w-full overflow-hidden">
      {/* Background pattern */}
      <img
        src={pattern}
        alt="pattern"
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />

      <div className="relative max-w-[1280px] mx-auto px-8 pt-24 pb-20 min-h-[624px]">
        {/* Logo */}
        <div
          className="absolute"
          style={{
            width: "382.64px",
            height: "81.47px",
            top: "97.22px",
            left: "120px", // aligned with original snippet left offset
          }}
        >
          <img src={logo} alt="Logo" className="w-full h-full object-contain" />
        </div>

        {/* Quote */}
        <div
          className="absolute"
          style={{
            top: "190px",
            left: "120px", // keep aligned with logo
            width: "382.64px",
          }}
        >
          <p className="text-sm leading-tight">
            Whakaarahia anō te rā kaihau! <br />
            <span className="text-xs">Raise up again the billowing sail!</span>
          </p>
        </div>

        {/* Gradient Line */}
        <div
          className="absolute"
          style={{
            top: "240px",
            left: "120px",
            width: "536px",
            height: "4px",
            background:
              "radial-gradient(98.1% 1186.15% at 1.9% 50.34%, #3373BA 4.33%, #68C5B2 27.88%, #14B6D3 61.06%, #00A7A7 84.62%)",
          }}
        />

        {/* Social Icons */}
        <div
          className="absolute flex gap-12"
          style={{
            top: "414px",
            left: "120px",
          }}
        >
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterIcon} alt="Twitter" className="w-8 h-8" />
          </a>
        </div>

        {/* Navigation - Where To? */}
        <div
          className="absolute text-right"
          style={{
            top: "224px",
            right: "0px",
            width: "248px",
            height: "306px",
          }}
        >
          <h2
            className="text-xl font-semibold border-b-4 pb-2 mb-6"
            style={{
              width: "241px",
              borderColor: "#68C5B2",
            }}
          >
            Where to?
          </h2>
          <ul className="space-y-[18px] text-lg">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Research</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">News and Events</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Gradient Bar: full width, fixed height */}
      <div
        className="w-full text-center text-sm flex items-center justify-center"
        style={{
          height: "40px",
          background:
            "radial-gradient(98.1% 1186.15% at 1.9% 50.34%, #3373BA 4.33%, #68C5B2 27.88%, #14B6D3 61.06%, #00A7A7 84.62%)",
        }}
      >
        &copy; {new Date().getFullYear()} Awamatangi Research Group. All rights
        reserved.
      </div>
    </footer>
  );
}
