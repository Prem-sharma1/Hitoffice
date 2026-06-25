"use client";

import Image from "next/image";

export default function Hero({ onBookDemo, onWatchDemo }) {
  return (
    <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 xl:pt-40 xl:pb-36 overflow-hidden bg-gradient-to-b from-[#F7F9FC] via-white to-white">
      {/* Background soft decorative blur shapes */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-100/20 blur-3xl rounded-full -z-10 translate-x-1/4 -translate-y-1/3" />
      <div className="absolute top-1/3 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-orange-50/15 blur-3xl rounded-full -z-10 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ENHANCED BREAKPOINT: Changed from 'xl' to 'md' to keep side-by-side alignment down to 720px */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 2xl:gap-16 items-center">

          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start animate-slide-up">

            {/* Fluid typography to handle extreme structural width compressions safely */}
            <h1 className="text-4xl sm:text-[54px] lg:text-[38px] xl:text-[50px] 2xl:text-[62px] font-extrabold tracking-tight text-slate-900 leading-[1.15] lg:leading-[1.12] xl:leading-[1.1]">
              Complete Construction{" "}<br className="hidden sm:inline" />
              ERP & Project{" "}<br className="hidden sm:inline" />
              Management Software
            </h1>

            <p className="text-base sm:text-lg lg:text-base xl:text-lg text-slate-500 max-w-xl leading-relaxed">
              Manage Projects, Billing, Inventory, CRM, Workforce & Site Operations from one powerful platform.
            </p>

            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">

              {/* Primary Blue-to-Orange Gradient CTA */}
              <button
                onClick={onBookDemo}
                className="bg-gradient-to-r from-[#1E56A0] to-[#D37506] hover:from-[#15427D] hover:to-[#B26203] text-white font-bold px-5 sm:px-8 py-3 rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/10 hover:shadow-orange-500/25 transition-all duration-300 active:scale-[0.98] cursor-pointer whitespace-nowrap text-xs sm:text-base"
              >
                <span>Book a Free Live Demo</span>
                <svg className="w-4 h-4 ml-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              {/* Secondary Outline CTA */}
              <button
                onClick={onWatchDemo}
                className="border border-[#1E56A0] hover:bg-blue-50 text-[#1E56A0] font-bold px-4 sm:px-6 py-3 rounded-xl flex items-center justify-center space-x-2 text-xs sm:text-[15px] tracking-wide active:scale-[0.98] transition-all cursor-pointer bg-transparent whitespace-nowrap"
              >
                <span>Watch Live Demo</span>
                <span className="w-5 h-5 rounded-full border border-[#1E56A0] flex items-center justify-center text-[8px] pl-0.5 flex-shrink-0">
                  ▶
                </span>
              </button>

            </div>

          </div>

          {/* Right Visual Column */}
          {/* ENHANCED SIZING: Constrained max-widths from md (720px) up to xl (1250px) to prevent overlapping */}
          <div className="lg:col-span-7 relative z-0 animate-fade-in [perspective:1000px] w-full max-w-[440px] sm:max-w-[520px] md:max-w-[560px] lg:max-w-[440px] xl:max-w-[580px] 2xl:max-w-none mx-auto lg:ml-auto">
            <div className="relative mx-auto w-full">

              {/* Soft glow shadow behind the dashboard */}
              <div className="absolute -inset-4 bg-blue-500/5 rounded-3xl blur-2xl pointer-events-none" />

              {/* 3D Dashboard Mockup Container */}
              <div className="relative bg-white border border-slate-200/80 rounded-2xl shadow-xl overflow-hidden p-1 transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateX(3deg)_rotateY(-3deg)_scale(1.015)] group">
                {/* Browser Header Bar */}
                <div className="bg-slate-50 border-b border-slate-200/80 px-4 py-2.5 flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <div className="h-3.5 w-24 sm:w-32 bg-slate-200/60 rounded ml-3" />
                </div>
                {/* Screen Content */}
                <div className="bg-slate-50 aspect-[16/10] relative rounded-b-xl overflow-hidden">
                  <Image
                    src="/assets/hitoffice.png"
                    alt="Hitoffice ERP Dashboard"
                    fill
                    sizes="(max-w-868px) 100vw, (max-w-900px) 40vw, 55vw"
                    priority
                    className="object-cover"
                    style={{ objectPosition: "center 42%", transform: "scale(1.15)" }}
                  />
                  {/* Sweep shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                </div>
              </div>

              {/* 1. PROJECT PROGRESS (Top-Left) */}
              <div className="absolute sm:-left-16 md:-left-20 lg:left-[-20px] xl:-left-28 2xl:-left-40 top-4 sm:top-6 bg-blue-50/90 backdrop-blur-md border border-blue-200/60 py-2 xl:py-3 px-3 xl:px-4 rounded-2xl shadow-[0_8px_30px_rgba(30,86,160,0.08)] flex items-center space-x-2 xl:space-x-3 hover:scale-105 transition-transform duration-300 pointer-events-none hidden sm:flex animate-float">
                <div className="w-8 h-8 xl:w-9 xl:h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white text-sm xl:text-lg flex-shrink-0">
                  📊
                </div>
                <div className="text-left leading-none">
                  <div className="text-[9px] xl:text-[10px] font-bold uppercase tracking-wider text-blue-700/80">PROJECT PROGRESS</div>
                  <div className="text-[11px] xl:text-sm font-extrabold text-blue-900 mt-1 xl:mt-1.5">92% Completion</div>
                </div>
              </div>

              {/* 2. INVENTORY (Bottom-Left) */}
              <div className="absolute sm:-left-16 md:-left-20 lg:left-[-20px] xl:-left-28 2xl:-left-40 bottom-4 sm:bottom-6 bg-amber-50/90 backdrop-blur-md border border-amber-200/60 py-2 xl:py-3 px-3 xl:px-4 rounded-2xl shadow-[0_8px_30px_rgba(211,117,6,0.08)] flex items-center space-x-2 xl:space-x-3 hover:scale-105 transition-transform duration-300 pointer-events-none hidden sm:flex lg:hidden xl:flex animate-float-reverse [animation-delay:1.5s]">
                <div className="w-8 h-8 xl:w-9 xl:h-9 rounded-xl bg-amber-600 flex items-center justify-center text-white text-sm xl:text-lg flex-shrink-0">
                  📦
                </div>
                <div className="text-left leading-none">
                  <div className="text-[9px] xl:text-[10px] font-bold uppercase tracking-wider text-amber-800/90">INVENTORY</div>
                  <div className="text-[11px] xl:text-sm font-extrabold text-amber-950 mt-1 xl:mt-1.5">Stock Optimize</div>
                </div>
              </div>

              {/* 3. CASH FLOW (Middle-Right) */}
              <div className="absolute sm:-right-16 md:-right-20 lg:right-[-20px] xl:right-[-32px] 2xl:right-[-52px] lg:left-auto top-[42%] -translate-y-1/2 bg-emerald-50/90 backdrop-blur-md border border-emerald-200/60 py-2 xl:py-3 px-3 xl:px-4 rounded-2xl shadow-[0_8px_30px_rgba(16,185,129,0.08)] flex items-center space-x-2 xl:space-x-3 hover:scale-105 transition-transform duration-300 pointer-events-none hidden sm:flex animate-float [animation-delay:3s]">
                <div className="w-8 h-8 xl:w-9 xl:h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white text-sm xl:text-lg flex-shrink-0">
                  💵
                </div>
                <div className="text-left leading-none">
                  <div className="text-[9px] xl:text-[10px] font-bold uppercase tracking-wider text-emerald-800/90">CASH FLOW</div>
                  <div className="text-[10px] xl:text-xs font-extrabold mt-1 xl:mt-1.5 flex items-center space-x-1.5 whitespace-nowrap">
                    <span className="text-emerald-700">Cash In</span>
                    <span className="text-emerald-300 font-normal">|</span>
                    <span className="text-rose-600 font-extrabold">Cash Out</span>
                  </div>
                </div>
              </div>

              {/* 4. SITE ATTENDANCE (Top-Right) */}
              <div className="absolute sm:-right-10 md:-right-12 lg:right-[-12px] xl:-right-16 2xl:-right-24 top-2 bg-indigo-50/90 backdrop-blur-md border border-indigo-200/60 py-2 xl:py-3 px-3 xl:px-4 rounded-2xl shadow-[0_8px_30px_rgba(79,70,229,0.08)] flex items-center space-x-2 xl:space-x-3 hover:scale-105 transition-transform duration-300 pointer-events-none hidden sm:flex lg:hidden xl:flex animate-float-reverse [animation-delay:4.5s]">
                <div className="w-8 h-8 xl:w-9 xl:h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white text-sm xl:text-lg flex-shrink-0">
                  👷
                </div>
                <div className="text-left leading-none">
                  <div className="text-[9px] xl:text-[10px] font-bold uppercase tracking-wider text-indigo-800/90">SITE ATTENDANCE</div>
                  <div className="text-[11px] xl:text-sm font-extrabold text-indigo-950 mt-1 xl:mt-1.5">120 Active</div>
                </div>
              </div>

              {/* 5. CRM LEADS (Bottom-Right) */}
              <div className="absolute sm:-right-12 md:-right-16 lg:right-[-12px] xl:-right-16 2xl:-right-24 bottom-4 sm:bottom-6 bg-cyan-50/90 backdrop-blur-md border border-cyan-200/60 py-2 xl:py-3 px-3 xl:px-4 rounded-2xl shadow-[0_8px_30px_rgba(6,182,212,0.08)] flex items-center space-x-2 xl:space-x-3 hover:scale-105 transition-transform duration-300 pointer-events-none hidden sm:flex lg:hidden xl:flex animate-float [animation-delay:2.2s]">
                <div className="w-8 h-8 xl:w-9 xl:h-9 rounded-xl bg-cyan-600 flex items-center justify-center text-white text-sm xl:text-lg flex-shrink-0">
                  👥
                </div>
                <div className="text-left leading-none">
                  <div className="text-[9px] xl:text-[10px] font-bold uppercase tracking-wider text-cyan-800/90">CRM LEADS</div>
                  <div className="text-[11px] xl:text-sm font-extrabold text-cyan-950 mt-1 xl:mt-1.5">+45 New Leads</div>
                </div>
              </div>

              {/* 6. CLIENT BILLING (Middle-Left) */}
              <div className="absolute sm:-left-16 md:-left-20 lg:left-[-20px] xl:-left-28 2xl:-left-40 top-[45%] -translate-y-1/2 bg-purple-50/90 backdrop-blur-md border border-purple-200/60 py-2 xl:py-3 px-3 xl:px-4 rounded-2xl shadow-[0_8px_30px_rgba(147,51,234,0.08)] flex items-center space-x-2 xl:space-x-3 hover:scale-105 transition-transform duration-300 pointer-events-none hidden sm:flex lg:hidden xl:flex animate-float-reverse [animation-delay:1s]">
                <div className="w-8 h-8 xl:w-9 xl:h-9 rounded-xl bg-purple-600 flex items-center justify-center text-white text-sm xl:text-lg flex-shrink-0">
                  🧾
                </div>
                <div className="text-left leading-none">
                  <div className="text-[9px] xl:text-[10px] font-bold uppercase tracking-wider text-purple-800/90">CLIENT BILLING</div>
                  <div className="text-[11px] xl:text-sm font-extrabold text-purple-950 mt-1 xl:mt-1.5">Progress Invoices</div>
                </div>
              </div>

              {/* 7. PROFIT MARGIN (Lower-Right) */}
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-[10%] bg-rose-50/90 backdrop-blur-md border border-rose-200/60 py-2 xl:py-3 px-3 xl:px-4 rounded-2xl shadow-[0_8px_30px_rgba(244,63,94,0.08)] flex items-center space-x-2 xl:space-x-3 hover:scale-105 transition-transform duration-300 pointer-events-none hidden sm:flex animate-float [animation-delay:1.8s]">
                <div className="w-8 h-8 xl:w-9 xl:h-9 rounded-xl bg-rose-600 flex items-center justify-center text-white text-sm xl:text-lg flex-shrink-0">
                  📈
                </div>
                <div className="text-left leading-none">
                  <div className="text-[9px] xl:text-[10px] font-bold uppercase tracking-wider text-rose-800/90">PROFIT MARGIN</div>
                  <div className="text-[11px] xl:text-sm font-extrabold text-rose-950 mt-1 xl:mt-1.5">Healthy Margins</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}