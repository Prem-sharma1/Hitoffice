"use client";

export default function FeaturesGrid() {
  const features = [
    {
      title: "Estimation & Costing",
      description: "Create accurate BOQ, quotations and cost estimates.",
      icon: (idx) => (
        <svg className="w-7 h-7 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 3h6v2H7V5zm0 4h2v2H7V9zm4 0h2v2h-2V9zm-4 4h2v2H7v-2zm4 0h2v2h-2v-2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: "Client Billing",
      description: "Streamline progressive billing, track client invoices, manage payment milestones, and handle certificates of completion.",
      icon: (idx) => (
        <svg className="w-7 h-7 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
          <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: "Profit Margin Tracking",
      description: "Analyze site costs, track material variances, and monitor real-time profit margins across all active projects.",
      icon: (idx) => (
        <svg className="w-7 h-7 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: "Project Planning & Barcharts",
      description: "Build interactive Gantt charts, establish task dependencies, optimize resource tracking, and critical path.",
      icon: (idx) => (
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 011 1v15h16a1 1 0 110 2H3a1 1 0 01-1-1V4a1 1 0 011-1zm3 3h7a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1V7a1 1 0 011-1zm6 5h8a1 1 0 011 1v2a1 1 0 01-1 1h-8a1 1 0 01-1-1v-2a1 1 0 011-1zm-4 5h9a1 1 0 011 1v2a1 1 0 01-1 1H8a1 1 0 01-1-1v-2a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Project Management",
      description: "Manage projects, tasks, subcontractors, site updates and milestones in one place.",
      icon: (idx) => (
        <svg className="w-7 h-7 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: "Purchase Management",
      description: "Manage purchase requests, approvals, delivery notes and GRN, vendors and PO tracking.",
      icon: (idx) => (
        <svg className="w-7 h-7 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 100-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
      ),
    },
    {
      title: "Procurement",
      description: "Track purchase orders, vendor relations, and sourcing.",
      icon: (idx) => (
        <svg className="w-7 h-7 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: "Inventory Management",
      description: "Track materials, stock, usage and reorder requirements.",
      icon: (idx) => (
        <svg className="w-7 h-7 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7z" />
          <path fillRule="evenodd" d="M3 7a2 2 0 012-2h10a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: "Subcontractor Management",
      description: "Coordinate secondary agreements, track specialized trades, and monitor outsourced workflows.",
      icon: (idx) => (
        <svg className="w-7 h-7 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3.005 3.005 0 013.75-2.906z" />
        </svg>
      ),
    },
    {
      title: "Site Management",
      description: "Oversee daily field operations, monitor progress, and coordinate job site activities.",
      icon: (idx) => (
        <svg className="w-7 h-7 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: "Daily Progress Report (DPR)",
      description: "Log daily site updates, track work completed, and document field conditions.",
      icon: (idx) => (
        <svg className="w-7 h-7 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A1 1 0 0113 2.586L17.414 7a1 1 0 01.293.707V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 2v10h8V8h-3a1 1 0 01-1-1V4H6zm1 4a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm0 4a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: "Mobile Apps",
      description: "Field app for technicians and site staff.",
      icon: (idx) => (
        <svg className="w-7 h-7 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: "Reports & Analysis",
      description: "Generate comprehensive reports, monitor real-time dashboards, and extract business insights.",
      icon: (idx) => (
        <svg className="w-7 h-7 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H8a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
    },
    {
      title: "User Permission & Document Approval",
      description: "Features are controlled by user permission and document approval.",
      icon: (idx) => (
        <svg className="w-7 h-7 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-brand-blue-light">
            Core Modules
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight">
            Everything that Construction Professionals Need in One Platform
          </h3>
          <p className="text-base sm:text-lg text-brand-gray">
            All-in-one software to manage your projects, teams, and operations from the office or the sites.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-[24px] border border-[#F0F2F5] shadow-[0_12px_36px_rgba(0,0,0,0.015)] hover:shadow-md hover:border-amber-200/60 flex flex-col h-full transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Icon Container with beautiful warm orange/gold gradient */}
              <div className="w-[60px] h-[60px] rounded-[20px] bg-gradient-to-br from-[#F3B074] via-[#DE812B] to-[#C0680D] flex items-center justify-center mb-8 flex-shrink-0 text-white shadow-md shadow-orange-500/10 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
                {feature.icon(idx)}
              </div>

              {/* Title with matching min-height block to align descriptions */}
              <h4 className="text-xl xl:text-[22px] font-bold text-[#0D1F3D] mb-3 leading-[1.3] tracking-tight line-clamp-2 min-h-[3.25rem]">
                {feature.title}
              </h4>

              {/* Description box flexing smoothly to match card edge */}
              <p className="text-[15px] text-[#52647C] leading-[1.65] flex-grow line-clamp-4">
                {feature.description}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}