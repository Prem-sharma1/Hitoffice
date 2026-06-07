"use client";

export default function MobileAppShowcase() {
  const cards = [
    {
      title: "Attendance",
      desc: "Log daily technician attendance, track check-in times, and sync GPS location coordinates live.",
      screen: (
        <div className="p-4 flex flex-col h-full bg-slate-50 justify-between text-left">
          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-800">Attendance Check-In</div>
            {/* User card */}
            <div className="bg-white border border-slate-100 p-2.5 rounded-lg flex items-center space-x-2.5 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px] font-bold">
                AJ
              </div>
              <div className="flex-1">
                <div className="h-2 w-16 bg-slate-400 rounded" />
                <div className="h-1.5 w-10 bg-slate-300 rounded mt-1" />
              </div>
            </div>
            {/* Location selector */}
            <div className="bg-white border border-slate-100 p-2 rounded-lg space-y-1 shadow-sm">
              <div className="text-[7px] text-slate-400 font-bold uppercase tracking-wider">Site Location</div>
              <div className="h-2 w-20 bg-slate-400 rounded" />
            </div>
          </div>
          {/* Action button */}
          <button className="w-full bg-green-500 text-white font-bold py-2 rounded-lg text-[10px] shadow-sm pointer-events-none">
            ✓ Clock In
          </button>
        </div>
      ),
    },
    {
      title: "Lead Creation",
      desc: "Register new prospects, log custom site requirements, and generate leads instantly from the field.",
      screen: (
        <div className="p-4 flex flex-col h-full bg-slate-50 justify-between text-left">
          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-800">New Prospect Lead</div>
            {/* Input fields mock */}
            <div className="space-y-2">
              <div className="space-y-1">
                <div className="h-1.5 w-16 bg-slate-400 rounded" />
                <div className="h-6 w-full bg-white border border-slate-150 rounded px-2 flex items-center">
                  <span className="text-[8px] text-slate-600">Oakridge Homes</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="h-1.5 w-12 bg-slate-400 rounded" />
                <div className="h-6 w-full bg-white border border-slate-150 rounded px-2 flex items-center">
                  <span className="text-[8px] text-slate-400">Enter phone no...</span>
                </div>
              </div>
            </div>
          </div>
          {/* Action button */}
          <button className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg text-[10px] shadow-sm pointer-events-none">
            Create Lead
          </button>
        </div>
      ),
    },
    {
      title: "Site Visit",
      desc: "Track client visits, capture status notes, and upload site photos in one tap.",
      screen: (
        <div className="p-4 flex flex-col h-full bg-slate-50 justify-between text-left">
          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-800">Site Visit Update</div>
            {/* Note block */}
            <div className="bg-white border border-slate-100 p-2.5 rounded-lg space-y-1.5 shadow-sm">
              <div className="h-1.5 w-16 bg-slate-400 rounded" />
              <p className="text-[8px] text-slate-500 leading-tight">Foundation work checked and verified.</p>
            </div>
            {/* Photo preview thumbnail */}
            <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center border border-slate-350">
              <span className="text-sm">📸</span>
            </div>
          </div>
          {/* Action button */}
          <button className="w-full bg-orange-500 text-white font-bold py-2 rounded-lg text-[10px] shadow-sm pointer-events-none">
            Save Site Visit
          </button>
        </div>
      ),
    },
    {
      title: "Complaint Resolution",
      desc: "Log client concerns, assign repair tickets, and update resolution statuses in real time.",
      screen: (
        <div className="p-4 flex flex-col h-full bg-slate-50 justify-between text-left">
          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-800">Resolve Tickets</div>
            {/* Tickets list */}
            <div className="space-y-2">
              <div className="bg-white border border-slate-100 p-2 rounded-lg flex justify-between items-center shadow-sm">
                <span className="text-[8px] font-bold text-slate-700">#104 Plumbing Leak</span>
                <span className="text-[7px] bg-red-50 text-red-600 px-1.5 py-0.5 rounded font-bold">Pending</span>
              </div>
              <div className="bg-white border border-slate-100 p-2 rounded-lg flex justify-between items-center shadow-sm">
                <span className="text-[8px] font-bold text-slate-700">#103 Electrical Panel</span>
                <span className="text-[7px] bg-green-50 text-green-600 px-1.5 py-0.5 rounded font-bold">Resolved</span>
              </div>
            </div>
          </div>
          {/* Action button */}
          <button className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg text-[10px] shadow-sm pointer-events-none">
            Update Status
          </button>
        </div>
      ),
    },
    {
      title: "Daily Reports",
      desc: "Track daily hours worked, weather conditions, equipment operations, and site logs in under 2 minutes.",
      screen: (
        <div className="p-4 flex flex-col h-full bg-slate-50 justify-between text-left">
          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-800">Daily Operations Report</div>
            <div className="space-y-2">
              <div className="space-y-1">
                <div className="h-1.5 w-12 bg-slate-400 rounded" />
                <div className="h-6 w-full bg-white border border-slate-200 rounded px-2 flex items-center">
                  <span className="text-[8px] text-slate-500">Sunny, 24°C</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="h-1.5 w-16 bg-slate-400 rounded" />
                <div className="h-6 w-full bg-white border border-slate-200 rounded px-2 flex items-center">
                  <span className="text-[8px] text-slate-500">12 Workers Active</span>
                </div>
              </div>
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg text-[10px] shadow-sm pointer-events-none">
            Submit Report
          </button>
        </div>
      ),
    },
    {
      title: "GPS Tracking",
      desc: "Guide construction crews with site coordinate routing, live location pinning, and geofencing.",
      screen: (
        <div className="relative h-full bg-slate-100 overflow-hidden flex flex-col justify-end text-left">
          {/* Mock Map Background Grid */}
          <div className="absolute inset-0 bg-grid bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
          
          {/* Path lines */}
          <svg className="absolute inset-0 w-full h-full text-blue-500/40" fill="none">
            <path d="M 20 40 Q 80 80 140 30" stroke="currentColor" strokeWidth="3" strokeDasharray="4 2" />
          </svg>
          
          {/* Map markers */}
          <div className="absolute top-[40px] left-[20px] w-4 h-4 rounded-full bg-orange-500 border-2 border-white shadow-md flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
          </div>
          <div className="absolute top-[30px] left-[140px] w-4 h-4 rounded-full bg-blue-600 border-2 border-white shadow-md flex items-center justify-center animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
          </div>

          {/* Location details card */}
          <div className="p-3 bg-white border-t border-slate-200 relative z-10 space-y-1.5 shadow-lg">
            <div className="flex justify-between items-center">
              <div className="h-2 w-16 bg-slate-400 rounded" />
              <span className="text-[8px] bg-blue-100 text-blue-800 font-bold px-1 py-0.5 rounded">Active</span>
            </div>
            <div className="h-1.5 w-24 bg-slate-300 rounded" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="mobile-app" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-brand-blue-light">
            Hitoffice Mobile App
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight">
            Technician Mobile App Showcase
          </h3>
          <p className="text-base sm:text-lg text-brand-gray">
            Equip your site technicians with real-time sync tools to log visits, record attendance, and create sales leads on the field.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[24px] border border-slate-200/60 p-6 flex flex-col items-center justify-between shadow-sm hover:shadow-lg hover:border-blue-200 hover:-translate-y-2 transition-all duration-300 group cursor-default"
            >
              {/* Centered phone mockup frame */}
              <div className="phone-frame max-w-[170px] w-full mb-6 group-hover:scale-[1.03] group-hover:rotate-1 transition-transform duration-300">
                <div className="phone-notch" />
                <div className="phone-screen">
                  {/* Status Bar */}
                  <div className="h-6 bg-slate-900 text-white flex justify-between items-center px-4 pt-1 text-[8px] font-semibold flex-shrink-0 z-10 select-none">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <span>📶</span>
                      <span>🔋</span>
                    </div>
                  </div>
                  {/* Embedded Custom Screen UI */}
                  <div className="flex-grow overflow-hidden select-none">
                    {card.screen}
                  </div>
                </div>
              </div>

              {/* Title & Description & Checkbox indicator under phone */}
              <div className="w-full text-center space-y-2 mt-2">
                <div className="flex items-center justify-center space-x-2.5">
                  <div className="w-4 h-4 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-[10px] text-brand-blue-light font-bold">
                    ✓
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-brand-blue">
                    {card.title}
                  </h4>
                </div>
                
                <p className="text-xs sm:text-sm text-brand-gray leading-relaxed max-w-xs mx-auto">
                  {card.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
