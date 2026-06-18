"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Modules", href: "#features" },
  { name: "Mobile App", href: "#mobile-app" },
  { name: "Industries", href: "#industries" },
  { name: "Why Choose Us", href: "#platform" },
  { name: "Awards", href: "#awards" }, // Cleaned up name for better visual layout spacing
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ onBookDemo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      if (window.scrollY < 150) {
        setActiveLink("Home");
        return;
      }
      let currentActive = "Home";
      let maxVisibleHeight = 0;
      for (const link of navLinks) {
        if (link.href === "#") continue;
        const el = document.querySelector(link.href);
        if (el) {
          const rect = el.getBoundingClientRect();

          const visibleTop = Math.max(0, rect.top);
          const visibleBottom = Math.min(window.innerHeight, rect.bottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);

          if (visibleHeight > maxVisibleHeight) {
            maxVisibleHeight = visibleHeight;
            currentActive = link.name;
          }
        }
      }
      setActiveLink(currentActive);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scrolling when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav py-2.5 shadow-sm bg-white/95 backdrop-blur-md" : "bg-transparent py-4.5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo Container */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="relative w-[155px] sm:w-[180px] h-[50px] sm:h-[58px] hover:scale-105 transition-transform duration-200">
                <Image
                  src="/assets/hitofficelogo.png"
                  alt="Hitoffice Logo"
                  fill
                  sizes="(max-width: 640px) 155px, 180px"
                  priority
                  className="object-contain object-left"
                />
              </div>
            </a>
          </div>

          {/* Desktop & Small Laptop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`relative py-2 text-xs xl:text-sm font-semibold transition-all whitespace-nowrap ${activeLink === link.name
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-blue-600 underline-slide"
                  }`}
              >
                {link.name}
                {activeLink === link.name && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full animate-fade-in" />
                )}
              </a>
            ))}
          </div>

          {/* Desktop CTA Action Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={onBookDemo}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 xl:px-7 py-2.5 xl:py-3 rounded-xl text-xs xl:text-[15px] transition-all shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              Book a Free Live Demo
            </button>
          </div>

          {/* Mobile & Tablet Toggle Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-blue-600 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile & Tablet Dropdown Panel */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${isOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible h-0"
          }`}
        style={{ maxHeight: isOpen ? "calc(100vh - 4.5rem)" : "0px", overflowY: "auto" }}
      >
        <div className="px-5 pt-3 pb-8 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveLink(link.name);
                setIsOpen(false);
              }}
              className={`block w-full py-3 px-2 text-base font-medium rounded-lg transition-colors ${activeLink === link.name
                ? "text-blue-600 bg-blue-50/50 font-semibold"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Action Button */}
          <div className="pt-5 mt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setIsOpen(false);
                onBookDemo();
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-center py-3 rounded-xl text-sm transition-all shadow-md shadow-blue-500/10 active:scale-[0.99] cursor-pointer"
            >
              Book a Free Live Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}