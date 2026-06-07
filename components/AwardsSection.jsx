import React from 'react';

export default function AwardsSection() {
  const awards = [
    {
      title: "Innovation Leaders Award",
      recipient: "Mrinalini Kulkarni",
      date: "February 2026",
      event: "18th World Innovation Congress",
      description: "Honored with the Innovation Leaders Award for driving transformative excellence in engineering design software and services.",
      image: "/assets/01.webp"
    },
    {
      title: "Technology Innovators Feature",
      recipient: "Mrinalini Kulkarni",
      date: "February 2026",
      event: "Most Prominent Contributors to Innovation",
      description: "Featured on the recognition wall among top industry leaders at the World Innovation Congress for impactful contributions to the technology sector.",
      image: "/assets/05.webp",
    },
    {
      title: "SKOCH Order-of-Merit (Copper)",
      recipient: "Engineering Design Software & Services",
      date: "March 23, 2019",
      event: "SKOCH Group Awards, New Delhi",
      description: "Awarded for qualifying amongst the Top-200 MSMEs in India, recognizing excellence in business operations and patriotism in service.",
      image: "/assets/03_1.webp",
    },
    {
      title: "Most Client-Focused Software Design",
      recipient: "Engineering Design Software & Services",
      date: "APAC Insider",
      event: "Business Awards",
      description: "Recognized as the Most Client-Focused Software Design Service Provider in Maharashtra by APAC Insider Business Awards.",
      image: "/assets/04.webp",
    },
    {
      title: "Featured Women Entrepreneur",
      recipient: "Mrinalini Kulkarni",
      date: "March 2014",
      event: "Amrutwel Business Magazine",
      description: "Featured on the cover of the 'Udyojak Mahila Shakti' issue for her success in developing and popularizing the 'Hit-Office' construction ERP software.",
      image: "/assets/photo_5_2026-06-04_13-05-15.jpg",
    },
    {
      title: "Maharashtra Udyogini Puraskar",
      recipient: "Mrinalini Kulkarni",
      date: "2009",
      event: "Maharashtra Udyogini Puraskar Ceremony",
      description: "Honored with the prestigious Maharashtra Udyogini Puraskar in recognition of outstanding entrepreneurial achievements and leadership.",
      image: "/assets/02.webp",
    }
  ];

  return (
    <section id="awards" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600">
            Recognitions
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Awards & Milestones
          </h3>
          <p className="text-base sm:text-lg text-slate-600">
            Celebrating a legacy of industry milestones, leadership excellence, and technological innovation.
          </p>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              {/* FIXED IMAGE CONTAINER: Handles all image aspect ratios beautifully */}
              <div className="relative w-full h-64 bg-white flex items-center justify-center p-3 border-b border-slate-100 overflow-hidden">
                <img
                  src={award.image}
                  alt={award.title}
                  className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-black/[0.02] pointer-events-none"></div>
              </div>

              {/* Bottom Half: Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Date Tag */}
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider rounded-full w-fit mb-4">
                  {award.date}
                </span>

                <h4 className="text-xl font-bold text-slate-900 mb-1 leading-tight min-h-[3.5rem] flex items-center">
                  {award.title}
                </h4>

                <p className="text-sm font-medium text-blue-600 mb-4 line-clamp-1">
                  {award.event}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow line-clamp-4">
                  {award.description}
                </p>

                {/* Footer section for Honoree */}
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold mb-1">
                      Honoree
                    </p>
                    <p className="text-sm font-bold text-slate-800">
                      {award.recipient}
                    </p>
                  </div>
                  {/* Decorative Icon */}
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 ml-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l2.4 7.4h7.6l-6.1 4.6 2.3 7.5-6.2-4.7-6.2 4.7 2.3-7.5-6.1-4.6h7.6L12 2z" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}