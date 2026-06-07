export default function PlatformStrengths() {
  const strengths = [
    {
      index: "01",
      title: "End-to-End ERP",
      desc: "Complete ERP solution from lead to project delivery.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      index: "02",
      title: "Real-Time Reporting",
      desc: "Live dashboards and actionable reports.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H8a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
    },
    {
      index: "03",
      title: "Cloud Based",
      desc: "Access from anywhere with secure cloud system.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
        </svg>
      ),
    },
    {
      index: "04",
      title: "Multi-User Access",
      desc: "Multiple teams can work together with role-based access.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      ),
    },
    {
      index: "05",
      title: "Secure Data",
      desc: "Protected data storage and access control.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      index: "06",
      title: "Easy to Use",
      desc: "Simple UI for office, management and site teams.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      index: "07",
      title: "Customizable Modules",
      desc: "Modules can be adjusted based on business process.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      index: "08",
      title: "Fast Support",
      desc: "Quick support for implementation and ongoing usage.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0-3.31-2.69-6-6-6S4 6.69 4 10s2.69 6 6 6 6-2.69 6-6zm-5-4a1 1 0 10-2 0v4a1 1 0 00.293.707l2.8 2.8a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <section id="platform" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-brand-blue-light">
            Why Choose Us
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight">
            Why Construction Businesses Choose Hitoffice
          </h3>
          <p className="text-base sm:text-lg text-brand-gray">
            Explore the core advantages that make Hitoffice the preferred ERP platform for construction professionals.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((strength, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm flex flex-col justify-between transition-all duration-300 group hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 cursor-default"
            >
              <div>
                {/* Header row in card */}
                <div className="flex justify-between items-start mb-5">
                  {/* Blue filled square icon */}
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/10 group-hover:scale-105 group-hover:rotate-6 transition-transform duration-300">
                    {strength.icon}
                  </div>
                  {/* Serial Number */}
                  <span className="text-slate-300 font-extrabold text-sm sm:text-base group-hover:text-blue-600 group-hover:-translate-y-0.5 transition-all duration-300">
                    {strength.index}
                  </span>
                </div>
                
                <h4 className="text-base font-bold text-brand-blue mb-2.5">
                  {strength.title}
                </h4>
              </div>
              
              <p className="text-xs sm:text-sm text-brand-gray leading-relaxed mt-2">
                {strength.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
