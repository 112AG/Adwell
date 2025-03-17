import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/ADWELL.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 ">
        
        <div className="border-t border-gray-300"></div>

        {/* Footer Content */}
        <div className="flex flex-wrap justify-around items-start gap-y-8 mt-8">
          
          <div className="flex flex-col items-center md:items-start max-w-sm">
            <img src={Logo} alt="Adwell" className="w-24 h-auto" />
            <h1 className="text-2xl font-bold mt-3">Adwell Paper Product</h1>
            <address className="text-sm text-gray-600 mt-2 space-y-1 not-italic">
              <p>P-12, CIT Rd, Near Haldirams, (Behind Sindharam Sanwarmal) Kankurgachi, Kolkata - 700054</p>
              <p>📞 +91 7603062672</p>
              <p>📧 corpcom@adwelldiaries.com</p>
              <p>🕘 Mon-Sat 9:00am - 5:30pm</p>
            </address>
          </div>

          <div className=" flex flex-wrap px-4 gap-4 justify-center">
            
            <nav>
              <h2 className="text-lg font-semibold">Information</h2>
              <ul className="mt-2 space-y-2 text-sm">
                <li><Link className="hover:text-gray-700 transition" to='/aboutus'>About</Link></li>
                <li><Link className="hover:text-gray-700 transition" to='/contact'>Contact Us</Link></li>
                <li><Link className="hover:text-gray-700 transition" to='/sizechart'>Size Chart</Link></li>
                <li><Link className="hover:text-gray-700 transition" to='/faq'>FAQ</Link></li>
                <li><Link className="hover:text-gray-700 transition" to='/myaccount'>My Account</Link></li>
                <li><Link className="hover:text-gray-700 transition" to='/customfeedback'>Customer Feedback</Link></li>
                <li><Link className="hover:text-gray-700 transition" to='/trackorder'>Track your Order</Link></li>
              </ul>
            </nav>

            <nav>
              <h2 className="text-lg font-semibold">Policy</h2>
              <ul className="mt-2 space-y-2 text-sm">
                <li><Link className="hover:text-gray-700 transition" to='/privacypolicy'>Privacy & Policy</Link></li>
                <li><Link className="hover:text-gray-700 transition" to='/shippingpolicy'>Shipping Policy</Link></li>
                <li><Link className="hover:text-gray-700 transition" to='/returnrefund'>Return & Refund Policy</Link></li>
                <li><Link className="hover:text-gray-700 transition" to='/termcondition'>Term & Condition</Link></li>
              </ul>
            </nav>

            <nav>
              <h2 className="text-lg font-semibold">Follow Us</h2>
              <ul className="mt-2 text-sm flex flex-wrap gap-x-4 sm:flex-col">
                {[
                  { name: "Facebook", icon: "ri-facebook-fill" },
                  { name: "Twitter", icon: "ri-twitter-fill" },
                  { name: "Instagram", icon: "ri-instagram-fill" },
                  { name: "YouTube", icon: "ri-youtube-fill" },
                  { name: "Pinterest", icon: "ri-pinterest-fill" }
                ].map((social, index) => (
                  <li key={index}>
                    <Link to="#" className="flex items-center gap-1 hover:text-gray-700 transition">
                      <i className={`${social.icon} text-lg`}></i> {social.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

          </div>
        </div>

        <div className="border-t border-gray-300 mt-6 pt-4">
          <p className="text-center text-sm text-gray-600 pb-4">
            © 2025 Adwell. All Rights Reserved.
          </p>
        </div>
    </footer>
  );
};

export default Footer;