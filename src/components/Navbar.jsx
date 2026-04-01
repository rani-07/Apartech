import Logo from "../assets/rda.png";

import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Open Roles", path: "/positions" },
  { name: "Apply", path: "/apply" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/80 backdrop-blur-md py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={Logo}
            alt="RDAtech Logo"
            className="h-10 w-10 object-contain transition-transform group-hover:scale-110"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-blue-600">
              RDAtech
            </span>
            <span className="text-xs text-gray-500">
              Innovation & Careers
            </span>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative font-medium transition ${
                location.pathname === item.path
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              {item.name}

              {/* Active underline */}
              {location.pathname === item.path && (
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 rounded"></span>
              )}
            </Link>
          ))}

          {/* CTA BUTTON */}
          <Link
            to="/apply"
            className="ml-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 mt-3" : "max-h-0"
        }`}
      >
        <div className="bg-white shadow-md mx-4 rounded-xl p-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-3 py-2 rounded-lg transition ${
                location.pathname === item.path
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* MOBILE CTA */}
          <Link
            to="/apply"
            className="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Start Application
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;