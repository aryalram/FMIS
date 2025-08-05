import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-4 py-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <h1 className="text-2xl font-bold mb-2 sm:mb-0">
          AWAMATANGI RESEARCH GROUP
        </h1>
        <div className="flex gap-6 text-lg font-semibold">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <span>|</span>
          <Link to="/research" className="hover:underline">
            Research
          </Link>
          <span>|</span>
          <Link to="/about-us" className="hover:underline">
            About us
          </Link>
          <span>|</span>
          <Link to="/news-and-events" className="hover:underline">
            News and Events
          </Link>{" "}
        </div>
      </div>
    </nav>
  );
}
