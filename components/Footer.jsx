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
              <div className="relative w-[180px] h-[58px] hover:scale-105 transition-transform duration-200">
                <Image
                  src="/assets/hitofficelogo.png"
                  alt="Hitoffice Logo"
                  fill
                  sizes="180px"
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
              <li className="flex items-start space-x-2.5">
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-slate-400 leading-normal">
                  13, Kedar Empire, S.No. 42 A/1A/2Y, Karve Road, Erandwane, Pune- 411004.
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="flex flex-col text-slate-400">
                  <a href="tel:020-65612187" className="hover:text-white transition-colors">020- 65612187</a>
                  <a href="tel:+919822047368" className="hover:text-white transition-colors">09822047368</a>
                  <a href="tel:+919209585264" className="hover:text-white transition-colors">9209585264</a>
                </div>
              </li>
              <li className="flex items-center space-x-2.5">
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@edss.co.in" className="text-slate-400 hover:text-white transition-colors">info@edss.co.in</a>
              </li>
              <li className="flex items-center space-x-2.5">
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <a href="https://www.hit-office.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">www.hit-office.com</a>
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
