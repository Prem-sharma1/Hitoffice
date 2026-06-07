"use client";

import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 flex items-center transition-all duration-500 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* Slow pulsing outer ring */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-pulse-slow scale-125 pointer-events-none" style={{ animationDuration: "2s" }} />

      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:bg-[#20ba59] hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp Logo SVG */}
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.012 2.004c-5.51 0-9.982 4.47-9.982 9.98 0 1.94.55 3.75 1.5 5.3L2 22l4.88-1.28c1.5.88 3.25 1.38 5.13 1.38 5.51 0 9.98-4.47 9.98-9.98S17.522 2.004 12.012 2.004zm5.72 13.91c-.24.68-1.38 1.3-1.93 1.36-.48.05-1.11.07-1.8-.15-.69-.22-1.38-.47-2-.89-2.38-1.63-3.92-4.09-4.04-4.25-.11-.16-.87-1.14-.87-2.18 0-1.03.54-1.55.74-1.77.2-.22.43-.28.57-.28h.4c.13 0 .3-.05.47.36.17.4.61 1.48.67 1.6.06.11.09.25.01.4-.08.15-.11.25-.23.39-.12.14-.24.3-.34.42-.11.13-.24.26-.1.49.14.23.61 1.05.29 1.62.9 1.63.79 1.05.9 1.05.23.11.37.09.5-.07.12-.14.53-.61.67-.82.14-.2.28-.17.47-.1.19.07 1.19.56 1.4.66.21.1.35.15.4.24.05.09.05.52-.16 1.11z" />
        </svg>

        {/* Slide-out tooltip to the right */}
        <div className="absolute left-16 bg-slate-900 text-white text-xs font-semibold px-3 py-2 rounded-xl opacity-0 -translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-lg">
          Chat on WhatsApp
          {/* Arrow */}
          <div className="absolute top-1/2 left-0 -translate-x-full -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-r-4 border-r-slate-900" />
        </div>
      </a>
    </div>
  );
}
