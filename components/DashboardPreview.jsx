"use client";

import { useState } from "react";

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    {
      id: "overview",
      label: "Business Overview",
      subtitle: "Large ERP Dashboard UI",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" />
        </svg>
      ),
    },
    {
      id: "analytics",
      label: "Charts & Analytics",
      subtitle: "Revenue & Expense Graphs",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      id: "timeline",
      label: "Project Timeline",
      subtitle: "Visual Milestone Tracker",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "progress",
      label: "Site Progress Tracking",
      subtitle: "Live Status Bars & KPIs",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="dashboard" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-100/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-brand-blue-light">
            Dashboard Preview
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight">
            Interactive Live Control Panel
          </h3>
          <p className="text-base sm:text-lg text-brand-gray">
            Toggle between modules below to preview how Hitoffice aggregates site metrics, finances, and project completion rates in real time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Tab list */}
          <div className="lg:col-span-4 space-y-3">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center space-x-4 cursor-pointer ${
                    isActive
                      ? "bg-white border-blue-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
                      : "bg-transparent border-transparent hover:bg-slate-100/70"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/10"
                        : "bg-slate-200/60 text-slate-500"
                    }`}
                  >
                    {tab.icon}
                  </div>
                  <div>
                    <div className={`font-bold text-base ${isActive ? "text-slate-900" : "text-slate-700"}`}>
                      {tab.label}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {tab.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dashboard browser frame mockup */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-[#E9ECF0] rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden">
              
              {/* Browser top-bar */}
              <div className="bg-slate-50 border-b border-[#E9ECF0] px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="h-4 w-40 bg-slate-200/70 rounded-full ml-4" />
                </div>
                <div className="flex items-center space-x-3 text-xs text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-medium">Live Server Connected</span>
                </div>
              </div>

              {/* Mock Dashboard Shell */}
              <div className="bg-[#FAFBFD] p-6 sm:p-8 min-h-[460px] flex flex-col justify-between transition-all duration-300">
                
                {/* Active view: Overview */}
                {activeTab === "overview" && (
                  <div className="space-y-6 animate-fade-in flex-grow">
                    <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                      <div>
                        <h4 className="text-lg font-bold text-slate-800">Business Overview</h4>
                        <p className="text-xs text-slate-400">Real-time status of construction operations</p>
                      </div>
                      <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1.5 rounded-full font-bold">June 2026</span>
                    </div>

                    {/* KPI cards grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.01)] text-left">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Revenue</div>
                        <div className="text-xl font-extrabold text-slate-800 mt-1">$2.48M</div>
                        <span className="text-[10px] text-green-500 font-bold mt-1 inline-block">↑ 12.4% from last month</span>
                      </div>
                      <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.01)] text-left">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active Projects</div>
                        <div className="text-xl font-extrabold text-slate-800 mt-1">14 Sites</div>
                        <span className="text-[10px] text-slate-400 font-medium mt-1 inline-block">2 pending final clearance</span>
                      </div>
                      <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.01)] text-left">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Workforce Attendance</div>
                        <div className="text-xl font-extrabold text-slate-800 mt-1">98.2%</div>
                        <span className="text-[10px] text-green-500 font-bold mt-1 inline-block">280 technicians checked-in</span>
                      </div>
                    </div>

                    {/* Recent activity list */}
                    <div className="bg-white border border-slate-100 rounded-xl p-5 text-left shadow-[0_2px_8px_rgba(0,0,0,0.01)] space-y-4">
                      <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Recent Project Updates</h5>
                      <div className="space-y-3.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-600 font-medium">✓ Oakridge Residential Phase 1 Concrete Poured</span>
                          <span className="text-slate-400">10m ago</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-600 font-medium">✓ Metro Tower Scaffold Inspection Completed</span>
                          <span className="text-slate-400">1h ago</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-600 font-medium">✓ Valley Bridge Material delivery received (80 tons steel)</span>
                          <span className="text-slate-400">3h ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Active view: Analytics */}
                {activeTab === "analytics" && (
                  <div className="space-y-6 animate-fade-in flex-grow">
                    <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                      <div>
                        <h4 className="text-lg font-bold text-slate-800">Charts & Analytics</h4>
                        <p className="text-xs text-slate-400">Monthly breakdown of revenues and expenses</p>
                      </div>
                      <div className="flex space-x-2">
                        <span className="flex items-center text-xs text-blue-600 font-bold"><span className="w-2 h-2 rounded-full bg-blue-600 mr-1.5" /> Revenue</span>
                        <span className="flex items-center text-xs text-orange-500 font-bold"><span className="w-2 h-2 rounded-full bg-orange-500 mr-1.5" /> Expenses</span>
                      </div>
                    </div>

                    {/* Custom SVG line chart */}
                    <div className="relative bg-white border border-slate-100 rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                      <svg className="w-full h-44" viewBox="0 0 500 150">
                        <defs>
                          <linearGradient id="blue-grad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
                          </linearGradient>
                          <linearGradient id="orange-grad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#F97316" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#F97316" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        
                        {/* Grid lines */}
                        <line x1="0" y1="30" x2="500" y2="30" stroke="#F1F5F9" strokeWidth="1" />
                        <line x1="0" y1="75" x2="500" y2="75" stroke="#F1F5F9" strokeWidth="1" />
                        <line x1="0" y1="120" x2="500" y2="120" stroke="#F1F5F9" strokeWidth="1" />

                        {/* Revenue line */}
                        <path d="M 0 110 Q 100 80, 200 90 T 400 35 T 500 20 L 500 150 L 0 150 Z" fill="url(#blue-grad)" />
                        <path d="M 0 110 Q 100 80, 200 90 T 400 35 T 500 20" fill="none" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />

                        {/* Expenses line */}
                        <path d="M 0 130 Q 100 110, 200 120 T 400 70 T 500 65 L 500 150 L 0 150 Z" fill="url(#orange-grad)" />
                        <path d="M 0 130 Q 100 110, 200 120 T 400 70 T 500 65" fill="none" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
                        
                        {/* Highlights */}
                        <circle cx="400" cy="35" r="4.5" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" />
                        <circle cx="400" cy="70" r="4.5" fill="#F97316" stroke="#FFFFFF" strokeWidth="2" />
                      </svg>
                      
                      {/* Floating KPI card */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-slate-100 rounded-lg p-2 px-3 shadow-md text-left text-[11px] animate-float">
                        <span className="font-bold text-slate-800">Net Profit Margin:</span> <span className="text-green-500 font-extrabold">+24.5%</span>
                      </div>
                    </div>

                    {/* Chart bottom labels */}
                    <div className="flex justify-between text-[11px] text-slate-400 px-2">
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                      <span>Jun (Current)</span>
                    </div>
                  </div>
                )}

                {/* Active view: Timeline */}
                {activeTab === "timeline" && (
                  <div className="space-y-6 animate-fade-in flex-grow">
                    <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                      <div>
                        <h4 className="text-lg font-bold text-slate-800">Project Timeline</h4>
                        <p className="text-xs text-slate-400">Interactive milestone tracker & scheduling</p>
                      </div>
                      <span className="text-xs text-[#F97316] font-bold">On Schedule</span>
                    </div>

                    {/* Timeline progress blocks */}
                    <div className="space-y-4">
                      {/* Block 1 */}
                      <div className="bg-white border border-slate-100 rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.01)] text-left flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="text-xs font-bold text-slate-700">Phase 1: Excavation & Shoring</div>
                          <p className="text-[11px] text-slate-400">Excavation, earthworks, and soil stabilization</p>
                        </div>
                        <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full font-bold flex-shrink-0">100% Completed</span>
                      </div>
                      {/* Block 2 */}
                      <div className="bg-white border border-slate-100 rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.01)] text-left flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="text-xs font-bold text-slate-700">Phase 2: Foundation & Framing</div>
                          <p className="text-[11px] text-slate-400">Slab pour, structural steel erection, and wood framing</p>
                        </div>
                        <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full font-bold flex-shrink-0">100% Completed</span>
                      </div>
                      {/* Block 3 */}
                      <div className="bg-white border border-slate-100 rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.01)] text-left flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="text-xs font-bold text-slate-700">Phase 3: MEP & Drywall</div>
                          <p className="text-[11px] text-slate-400">Mechanical, electrical, plumbing installation & drywall panels</p>
                        </div>
                        <div className="flex items-center space-x-3 flex-shrink-0">
                          <span className="text-[11px] text-slate-400 font-bold">65%</span>
                          <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-orange-500 rounded-full" style={{ width: "65%" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Active view: Site progress */}
                {activeTab === "progress" && (
                  <div className="space-y-6 animate-fade-in flex-grow">
                    <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                      <div>
                        <h4 className="text-lg font-bold text-slate-800">Site Progress Tracking</h4>
                        <p className="text-xs text-slate-400">Active site completion rates and metrics</p>
                      </div>
                      <span className="text-xs text-slate-400">6 active construction sites</span>
                    </div>

                    {/* Progress tracking bars */}
                    <div className="space-y-4 text-left">
                      {/* Bar 1 */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs font-bold text-slate-700">
                          <span>Metro Tower Expansion</span>
                          <span className="text-blue-600">78%</span>
                        </div>
                        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                          <div className="h-full bg-blue-600 rounded-full transition-all duration-1000" style={{ width: "78%" }} />
                        </div>
                      </div>
                      {/* Bar 2 */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs font-bold text-slate-700">
                          <span>Oakridge Residential Estate</span>
                          <span className="text-orange-500">45% <span className="text-[10px] text-orange-400 font-normal ml-1.5">(Delayed - Rain)</span></span>
                        </div>
                        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                          <div className="h-full bg-orange-500 rounded-full transition-all duration-1000" style={{ width: "45%" }} />
                        </div>
                      </div>
                      {/* Bar 3 */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs font-bold text-slate-700">
                          <span>Valley Bridge Infrastructure</span>
                          <span className="text-green-600">92%</span>
                        </div>
                        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                          <div className="h-full bg-green-500 rounded-full transition-all duration-1000" style={{ width: "92%" }} />
                        </div>
                      </div>
                    </div>

                    {/* KPIs grid */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-white border border-slate-100 p-3.5 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Safety Incidents</div>
                        <div className="text-lg font-extrabold text-green-500 mt-1">0 Incidents</div>
                      </div>
                      <div className="bg-white border border-slate-100 p-3.5 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Quality Score</div>
                        <div className="text-lg font-extrabold text-blue-600 mt-1">98.4% Passed</div>
                      </div>
                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
