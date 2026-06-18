"use client";

import { useState, useEffect } from "react";

function Counter({ target, duration = 1500 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration]);

  return <span>{count}</span>;
}

export default function Stats() {
  const stats = [
    {
      label: "Projects Managed",
      renderValue: () => <><Counter target={4000} />+</>,
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.43a1 1 0 001.17-1.408l-7-14z" />
        </svg>
      ),
    },
    {
      label: "Construction Clients",
      renderValue: () => <><Counter target={1700} />+</>,
      icon: (
        <svg className="w-8 h-8 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      ),
    },
    {
      label: "Years Experience",
      renderValue: () => <><Counter target={25} />+</>,
      icon: (
        <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
    },
  ];

  const partnerLogos = [
    { name: "CONSTRUX CORP", style: "font-mono tracking-widest text-[13px] uppercase font-bold" },
    { name: "BUILDMASTER", style: "font-sans font-black tracking-tight text-[16px] uppercase" },
    { name: "INFRATECH", style: "font-serif italic font-extrabold text-[15px] tracking-wide" },
    { name: "URBAN WORKS", style: "font-sans tracking-[0.22em] font-extrabold text-[11px] uppercase" },
  ];

  const marqueeLogos = [
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos,
  ];

  return (
    <section className="bg-[#060B15] py-16 sm:py-20 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[150px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-900/40 border border-white/5 hover:border-blue-500/30 hover:bg-slate-900/60 rounded-[22px] p-6 text-center flex flex-col justify-center items-center transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-5 text-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10">
                {stat.icon}
              </div>
              <span className="text-4xl sm:text-[46px] font-extrabold text-white tracking-tight leading-none">
                {stat.renderValue()}
              </span>
              <span className="mt-3.5 text-xs sm:text-[13px] font-extrabold tracking-widest text-[#2563EB] uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-white/10 my-12" />

        <div className="relative w-full overflow-hidden py-5 bg-slate-950/20 rounded-2xl border border-white/5 select-none">
          <div className="animate-marquee-ltr flex items-center space-x-16">
            {marqueeLogos.map((logo, index) => (
              <div key={index} className="flex items-center space-x-16 flex-shrink-0">
                <div className={`${logo.style} text-slate-500 hover:text-slate-300 transition-colors duration-300 cursor-default`}>
                  {logo.name === "BUILDMASTER" ? (
                    <>BUILD<span className="font-light text-slate-400">MASTER</span></>
                  ) : logo.name}
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}