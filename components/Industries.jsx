export default function Industries() {
  const industries = [
    {
      title: "Contractors",
      desc: "Coordinate multi-tier subcontractor crews, log daily site journals, manage change orders, and enforce compliance standards.",
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 7a3 3 0 013-3h6a3 3 0 013 3v2a1 1 0 01-1 1H5a1 1 0 01-1-1V7zm1 5a2 2 0 00-2 2v3a1 1 0 001 1h14a1 1 0 001-1v-3a2 2 0 00-2-2H5z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: "Builders",
      desc: "Coordinate construction workflows, track material delivery schedules, manage structural permits, and control project cost variances.",
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
    },
    {
      title: "Architectures",
      desc: "Manage blueprint version control, track project estimation workflows, log drawing revisions, and streamline client design approvals.",
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a1.5 1.5 0 00-1.415 1.002L7.342 12H3a1 1 0 100 2h3.586l1.2 3H5a1 1 0 100 2h3.586l.8 2a1 1 0 001.856-.64l-3.2-8H11v1a1 1 0 102 0v-1h2.958l-3.2 8a1 1 0 001.856.64l.8-2H19a1 1 0 100-2h-2.786l1.2-3H21a1 1 0 100-2h-4.342l-3.243-8.998A1.5 1.5 0 0012 2zm0 2.5l2.34 6.5H9.66L12 4.5zM10.458 12h3.084l1.2 3H9.258l1.2-3z" />
        </svg>
      ),
    },
    {
      title: "Project Management Consultants",
      desc: "Manage scheduling, allocate resources, control budgets, track cost variances, and coordinate project stakeholders.",
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 5a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm0 4a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <section id="industries" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-brand-blue-light">
            Industries
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight">
            Industries We Serve
          </h3>
          <p className="text-base sm:text-lg text-brand-gray">
            Hitoffice is built for all sectors of the construction industry.
          </p>
        </div>

        {/* Grid Container with forced vertical stretching */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-200/50 hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col h-full group hover:-translate-y-1"
            >
              {/* Circular blue icon container with Y-axis 360 spin */}
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-6 text-white flex-shrink-0 shadow-md shadow-blue-600/20 [transition:transform_0.6s_cubic-bezier(0.16,1,0.3,1)] group-hover:[transform:rotateY(360deg)]">
                {ind.icon}
              </div>

              {/* Fixed title baseline layout blocks to align descriptions perfectly */}
              <h4 className="text-lg font-bold text-brand-blue mb-3 line-clamp-2 min-h-[3.5rem] tracking-tight">
                {ind.title}
              </h4>

              {/* Elastic description component flexing evenly down cards */}
              <p className="text-sm text-brand-gray leading-relaxed flex-grow line-clamp-4">
                {ind.desc}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}