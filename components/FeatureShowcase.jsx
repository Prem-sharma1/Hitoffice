"use client";

import Image from "next/image";

export default function FeatureShowcase({ onBookDemo }) {
  const bulletPoints = [
    { title: "Site Diary", desc: "Log weather, team size, equipment usage, and progress details in under 2 minutes." },
    { title: "Snagging Lists", desc: "Pin structural defects directly onto digital blueprints and assign to workers." },
    { title: "Subcontractor Mgmt", desc: "Track custom access codes, onboarding papers, schedules, and work quality logs." },
    { title: "Safety Checks", desc: "Automate daily OSHA compliance checklists and safety briefings checklists." },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-blue-light">
                Site Operations
              </h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight leading-tight">
                Streamline Construction Operations & Workflows
              </h3>
              <p className="text-brand-gray text-base sm:text-lg">
                Equip your team with the tools they need to stay aligned and productive on site.
              </p>
            </div>

            {/* List */}
            <div className="space-y-2">
              {bulletPoints.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3.5 group/item hover:bg-slate-50 p-3 rounded-xl transition-all duration-300 cursor-default"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white font-extrabold text-[10px] mt-1 shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-brand-blue leading-tight group-hover/item:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-brand-gray mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onBookDemo}
                className="bg-brand-blue-light hover:bg-blue-700 text-white text-center font-bold px-6 py-3.5 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Book a Free Live Demo
              </button>
             
            </div>
          </div>

          {/* Right Visual Column (Browser Mockup) */}
          <div className="lg:col-span-7 relative">
            {/* Background glowing shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-50/50 rounded-3xl -z-10 rotate-1 blur-sm" />
            
            {/* Browser Frame */}
            <div className="relative bg-white border border-brand-border rounded-2xl shadow-xl overflow-hidden">
              {/* Browser Header Bar */}
              <div className="bg-slate-50 border-b border-brand-border px-4 py-2.5 flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <div className="h-3 w-32 bg-slate-200/50 rounded ml-3" />
              </div>
              {/* Screen Content */}
              <div className="bg-slate-50 aspect-[16/10] relative overflow-hidden rounded-b-2xl">
                <Image
                  src="/assets/dashboard_feature.png"
                  alt="Hitoffice Operations Workflow Preview"
                  fill
                  sizes="(max-w-768px) 100vw, 50vw"
                  className="object-cover"
                  style={{ objectPosition: "center 38.8%", transform: "scale(2.02)" }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
