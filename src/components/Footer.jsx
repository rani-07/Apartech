import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";

import Logo from "../assets/rda.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo + Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src={Logo} alt="RDAtech Logo" className="h-10 w-auto" />
              <div>
                <span className="text-xl font-bold">RDAtech</span>
                <span className="block text-sm text-gray-400">
                  Innovating Future
                </span>
              </div>
            </Link>

            <p className="text-gray-400 text-sm">
              Building powerful software solutions with modern technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/positions" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/apply" className="hover:text-white">
                  Apply
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <p className="flex gap-2">
                <MapPin size={16} /> Baramati, Maharashtra
              </p>
              <p className="flex gap-2">
                <Mail size={16} /> info@rdatech.com
              </p>
              <p className="flex gap-2">
                <Phone size={16} /> +91 63643 26342
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 p-2 rounded hover:scale-110 transition"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="bg-pink-500 p-2 rounded hover:scale-110 transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
                className="bg-red-600 p-2 rounded hover:scale-110 transition"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* MAP SECTION ✅ */}
          <div>
            <h3 className="font-semibold mb-4">Our Location</h3>

            <div className="rounded-xl overflow-hidden border border-gray-700 shadow-lg">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Baramati,Maharashtra&output=embed"
                className="w-full h-48"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          © {currentYear} RDAtech. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;