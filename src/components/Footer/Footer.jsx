import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/ADWELL.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Border Divider */}
        <div className="border-t border-gray-300"></div>

        {/* Footer Content */}
        <div className="flex flex-wrap justify-between items-start gap-y-8 mt-8">
          
          {/* Company Information */}
          <div className="flex flex-col items-center md:items-start max-w-sm">
            <img src={Logo} alt="Adwell" className="w-24 h-auto" />
            <h1 className="text-2xl font-bold mt-3">Adwell Paper Product</h1>
            <address className="text-sm text-gray-600 mt-2 space-y-1 not-italic">
              <p>Pragati Maidan, New Delhi, India</p>
              <p>📞 +91 0987654321</p>
              <p>📧 adwell@gmail.com</p>
              <p>🕘 Mon-Sat 9:00am - 5:30pm</p>
            </address>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            
            {/* Information */}
            <nav>
              <h2 className="text-lg font-semibold">Information</h2>
              <ul className="mt-2 space-y-2 text-sm">
                {["About Us", "Contact Us", "Size Chart", "FAQ", "My Account", "Customer Feedback", "Track Your Order"].map((item, index) => (
                  <li key={index}>
                    <Link to={`/${item.toLowerCase().replace(/\s+/g, "")}`} className="hover:text-gray-700 transition">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Policy */}
            <nav>
              <h2 className="text-lg font-semibold">Policy</h2>
              <ul className="mt-2 space-y-2 text-sm">
                {["Privacy Policy", "Shipping Policy", "Return & Refund Policy", "Terms & Conditions"].map((item, index) => (
                  <li key={index}>
                    <Link to={`/${item.toLowerCase().replace(/[^a-z]/g, "")}`} className="hover:text-gray-700 transition">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social Media */}
            <nav>
              <h2 className="text-lg font-semibold">Follow Us</h2>
              <ul className="mt-2 space-y-2 text-sm">
                {[
                  { name: "Facebook", icon: "ri-facebook-fill" },
                  { name: "Twitter", icon: "ri-twitter-fill" },
                  { name: "Instagram", icon: "ri-instagram-fill" },
                  { name: "YouTube", icon: "ri-youtube-fill" },
                  { name: "Pinterest", icon: "ri-pinterest-fill" }
                ].map((social, index) => (
                  <li key={index}>
                    <Link to="#" className="flex items-center gap-2 hover:text-gray-700 transition">
                      <i className={`${social.icon} text-lg`}></i> {social.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

          </div>
        </div>

        {/* Bottom Border Divider */}
        <div className="border-t border-gray-300 mt-6 pt-4">
          <p className="text-center text-sm text-gray-600">
            © 2025 Adwell. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;