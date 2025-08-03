export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-4 py-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <h1 className="text-2xl font-bold mb-2 sm:mb-0">
          AWAMATANGI RESEARCH GROUP
        </h1>
        <div className="flex gap-6 text-lg font-semibold">
          <a href="#" className="hover:underline">
            Home
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Research
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            About us
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            News and Events
          </a>
        </div>
      </div>
    </nav>
  );
}
