"use client";

import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    
    // Automatically hide the persistent tooltip after 12 seconds
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 12000);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 transition-all duration-500 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* Floating Tooltip Pill (Left side of the button, visible on larger screens) */}
      {showTooltip && (
        <a
          href="https://wa.me/3243721032"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2.5 bg-white text-slate-800 shadow-xl shadow-slate-900/10 border border-slate-100/90 rounded-full py-2.5 px-4 animate-fade-in hover:border-emerald-400 transition-all duration-300 hover:scale-105 hover:-translate-x-1 group/pill"
        >
          {/* Pulsing online indicator */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-extrabold text-slate-700 group-hover/pill:text-emerald-600 transition-colors whitespace-nowrap">
            Chat with us
          </span>
          {/* Close button for tooltip */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-600 p-0.5 rounded-full hover:bg-slate-100 transition-colors ml-1"
            aria-label="Close message"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </a>
      )}

      {/* Main WhatsApp Button */}
      <a
        href="https://wa.me/3243721032"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-500/40 hover:shadow-emerald-500/60 hover:bg-[#20ba59] hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing glowing background effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-25 group-hover:opacity-40 animate-pulse pointer-events-none" />

        {/* WhatsApp Logo SVG */}
        <svg className="w-7 h-7 fill-current z-10 transition-transform duration-300 group-hover:rotate-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.012 2.004c-5.51 0-9.982 4.47-9.982 9.98 0 1.94.55 3.75 1.5 5.3L2 22l4.88-1.28c1.5.88 3.25 1.38 5.13 1.38 5.51 0 9.98-4.47 9.98-9.98S17.522 2.004 12.012 2.004zm5.72 13.91c-.24.68-1.38 1.3-1.93 1.36-.48.05-1.11.07-1.8-.15-.69-.22-1.38-.47-2-.89-2.38-1.63-3.92-4.09-4.04-4.25-.11-.16-.87-1.14-.87-2.18 0-1.03.54-1.55.74-1.77.2-.22.43-.28.57-.28h.4c.13 0 .3-.05.47.36.17.4.61 1.48.67 1.6.06.11.09.25.01.4-.08.15-.11.25-.23.39-.12.14-.24.3-.34.42-.11.13-.24.26-.1.49.14.23.61 1.05.29 1.62.9 1.63.79 1.05.9 1.05.23.11.37.09.5-.07.12-.14.53-.61.67-.82.14-.2.28-.17.47-.1.19.07 1.19.56 1.4.66.21.1.35.15.4.24.05.09.05.52-.16 1.11z" />
        </svg>

        {/* Pulsing ring indicator on hover */}
        <span className="absolute -inset-2 rounded-full border-2 border-[#25D366] opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 pointer-events-none" />
        
        {/* Tooltip for small screens / mobile hover */}
        <div className="absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-2 rounded-xl opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-lg md:hidden">
          Chat with us
          <div className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-slate-900" />
        </div>
      </a>
    </div>
  );
}
