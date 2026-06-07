"use client";

import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subbed, setSubbed] = useState(false);

  const handleSub = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubbed(true);
    setEmail("");
  };

  return (
    <footer className="bg-brand-navy text-slate-400 py-16 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-12 border-b border-white/5">

          {/* Column 1: Logo and Details */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative w-[130px] h-[45px] hover:scale-105 transition-transform duration-200">
                <Image
                  src="/assets/hitoffice.png"
                  alt="Hitoffice Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Complete Construction ERP & Project Management Software. Developed by contractors, for contractors, to streamline quoting, inventory, and operations.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#awards" className="hover:text-white transition-colors">AwardsSection</a></li>               <li><a href="#contact" className="hover:text-white transition-colors">Demo</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Services List */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">Project Management</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Estimation & Costing</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Billing & Accounting</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">CRM & Lead Management</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Inventory Management</a></li>
              <li><a href="#mobile-app" className="hover:text-white transition-colors">Mobile App</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-center space-x-2.5">
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-slate-400 hover:text-white transition-colors">+32 (0) 4 372 10 32</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@hitoffice.com" className="text-slate-400 hover:text-white transition-colors">info@hitoffice.com</a>
              </li>
              <li className="flex items-start space-x-2.5">
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-slate-400 leading-normal">Rue de l'Avenir 4b, 4460 Grâce-Hollogne, Belgium</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 fill-current" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 5.029L2 22l5.13-1.347a9.92 9.92 0 004.887 1.277h.005c5.505 0 9.988-4.478 9.99-9.985A9.983 9.983 0 0012.012 2zm5.72 14.12c-.25.703-1.42 1.3-1.95 1.38-.48.07-1.1.09-3.29-.82-2.8-1.16-4.6-4.03-4.74-4.22-.14-.19-1.15-1.53-1.15-2.92a3.02 3.02 0 01.93-2.22c.28-.27.61-.34.81-.34.2 0 .39.01.56.02.18.01.42-.08.66.49.25.59.85 2.08.92 2.23.08.15.13.33.03.53-.1.2-.15.33-.3.51-.15.18-.32.4-.45.54-.15.15-.31.32-.13.63.18.31.81 1.33 1.74 2.16 1.2 1.07 2.21 1.4 2.52 1.56.31.15.49.13.68-.09.19-.22.82-.95 1.04-1.28.22-.33.44-.28.75-.17.3.11 1.93.91 2.26 1.08.33.16.55.24.63.38.08.14.08.82-.17 1.52z" />
                </svg>
                <a href="https://wa.me/3243721032" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors font-semibold">Chat on WhatsApp</a>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Subscribe to our newsletter</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Get the latest updates, industry articles, and project management tips.
            </p>

            {!subbed ? (
              <form onSubmit={handleSub} className="flex flex-col gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="w-full px-4 py-2.5 rounded-lg text-sm bg-slate-800 border border-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 text-white placeholder-slate-500"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg text-xs transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <div className="bg-blue-600/20 border border-blue-600/30 p-3 rounded-lg text-blue-200 text-xs text-center font-medium animate-fade-in">
                ✓ Subscribed successfully!
              </div>
            )}
          </div>

        </div>

        {/* Bottom row: Copyright */}
        <div className="pt-8 text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Hitoffice. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
