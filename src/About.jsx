import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 border-b-4 border-teal-500 pb-2">
          About Us
        </h1>

        <p className="text-lg mb-4">
          At Awamatangi, our mission is to provide sustainable, innovative, and culturally grounded solutions to empower communities across New Zealand.
        </p>

        <p className="text-lg mb-4">
          We work collaboratively with Māori and Pasifika communities, combining technology, tradition, and local knowledge to foster positive impact and lasting change.
        </p>

        <p className="text-lg">
          Our team is passionate, experienced, and driven by a shared vision of creating equitable opportunities for all, especially in rural and underserved areas.
        </p>
      </div>
    </div>
  );
}
