"use client";

import Image from "next/image";

export default function MobileAppShowcase() {
  const cards = [
    {
      title: "Work Order Management Dashboard",
      desc: "Mobile dashboard displaying approved work orders with project details, request information, and status tracking for efficient construction workflow management.",
      screen: (
        <div className="relative w-full h-full bg-white">
          <Image
            src="/assets/WhatsApp Image 2026-06-13 at 2.45.52 PM (8).jpeg"
            alt="Work Order Management Dashboard"
            fill
            sizes="170px"
            className="object-fill"
          />
        </div>
      ),
    },
    {
      title: "LBD Measurement Entry Screen",
      desc: "Mobile interface for entering Length, Breadth, and Depth (LBD) measurements for specific work items like Parapet Brick Work, complete with quantity calculations and file attachments.",
      screen: (
        <div className="relative w-full h-full bg-white">
          <Image
            src="/assets/WhatsApp Image 2026-06-13 at 2.45.52 PM (10).jpeg"
            alt="LBD Measurement Entry Screen"
            fill
            sizes="170px"
            className="object-contain bg-[#f7f8fa]"
          />
        </div>
      ),
    },
    {
      title: "LBD Dimension Input Modal",
      desc: "An in-app modal overlay with a numerical keypad allowing site engineers to quickly log custom quantity values for individual expressions like excavation.",
      screen: (
        <div className="relative w-full h-full bg-white">
          <Image
            src="/assets/WhatsApp Image 2026-06-13 at 2.45.52 PM (11).jpeg"
            alt="LBD Dimension Input Modal"
            fill
            sizes="170px"
            className="object-contain bg-[#1c1b1f]"
          />
        </div>
      ),
    },
    {
      title: "Work Orders Overview Dashboard",
      desc: "Mobile dashboard displaying approved work orders with project IDs, request information, financial breakdown indicators, and status tracking for efficient construction workflow management.",
      screen: (
        <div className="relative w-full h-full bg-[#005c8a]">
          <Image
            src="/assets/WhatsApp Image 2026-06-13 at 2.45.52 PM (1).jpeg"
            alt="Work Orders Dashboard"
            fill
            sizes="170px"
            className="object-contain"
          />
        </div>
      ),
    },
    {
      title: "Work Order Details & Approval Screen",
      desc: "Detailed view of an individual work order displaying billing breakdowns, contractor specifics, and an itemized construction checklist with active action buttons for rejection or revocation.",
      screen: (
        <div className="relative w-full h-full bg-[#005c8a]">
          <Image
            src="/assets/WhatsApp Image 2026-06-13 at 2.45.52 PM (2).jpeg"
            alt="Work Order Details Screen"
            fill
            sizes="170px"
            className="object-contain"
          />
        </div>
      ),
    },
    {
      title: "Quality Assurance & Inspection Checklist",
      desc: "Mobile quality control interface enabling field engineers to select projects, activities, and specific task lists (like PCC Work) while logging individual inspection checkpoints and defect statuses.",
      screen: (
        <div className="relative w-full h-full bg-white">
          <Image
            src="/assets/WhatsApp Image 2026-06-13 at 2.45.52 PM (3).jpeg"
            alt="Quality Inspection Checklist Screen"
            fill
            sizes="170px"
            className="object-contain bg-[#f5f5f5]"
          />
        </div>
      ),
    },
    {
      title: "Unit-Level Quality Inspection Portal",
      desc: "Granular mobile checklist allowing field operators to audit construction quality down to the specific building, floor, flat number, and room (e.g., Kitchen waterproofing and tiling checks).",
      screen: (
        <div className="relative w-full h-full bg-white">
          <Image
            src="/assets/WhatsApp Image 2026-06-13 at 2.45.52 PM (4).jpeg"
            alt="Unit-Level Inspection Checklist Screen"
            fill
            sizes="170px"
            className="object-contain bg-[#f5f5f5]"
          />
        </div>
      ),
    },
    {
      title: "Material Consumption & Distribution Hub",
      desc: "An administrative menu interface enabling onsite management to allocate resource quantities either directly to specific subcontractors or individual work items, alongside distributed quantity tracking.",
      screen: (
        <div className="relative w-full h-full bg-white">
          <Image
            src="/assets/WhatsApp Image 2026-06-13 at 2.45.52 PM (5).jpeg"
            alt="Material Consumption Distribution Menu"
            fill
            sizes="170px"
            className="object-contain bg-[#fdfdfd]"
          />
        </div>
      ),
    },
    {
      title: "Heavy Machinery Fuel Tracking Entry",
      desc: "Mobile data entry log for site logistics, tracking machine fuel logs (e.g., Crane hire charges, Diesel rates), daily fill amounts, running fuel balances, and specific project task links like excavation.",
      screen: (
        <div className="relative w-full h-full bg-white">
          <Image
            src="/assets/WhatsApp Image 2026-06-13 at 2.45.52 PM (6).jpeg"
            alt="Fuel Consumption Tracking Screen"
            fill
            sizes="170px"
            className="object-contain bg-[#f9f9fa]"
          />
        </div>
      ),
    },
    {
      title: "Onsite Resource Delivery & Challan Logger",
      desc: "Mobile material-inward interface for recording supplier deliveries, tracking challan quantities, logging truck times, detailing raw materials (like Flyash), and capturing proof-of-delivery photos.",
      screen: (
        <div className="relative w-full h-full bg-white">
          <Image
            src="/assets/WhatsApp Image 2026-06-13 at 2.45.52 PM (7).jpeg"
            alt="Resource Delivery Logistics Screen"
            fill
            sizes="170px"
            className="object-contain bg-[#fafafa]"
          />
        </div>
      ),
    },
    {
      title: "Onsite Resource Delivery & Challan Logger",
      desc: "Mobile material-inward interface for recording supplier deliveries, tracking challan quantities, logging truck times, detailing raw materials (like Flyash), and capturing proof-of-delivery photos.",
      screen: (
        <div className="relative w-full h-full bg-white">
          <Image
            src="/assets/WhatsApp Image 2026-06-13 at 2.45.52 PM (7).jpeg"
            alt="Resource Delivery Logistics Screen"
            fill
            sizes="170px"
            className="object-contain bg-[#fafafa]"
          />
        </div>
      ),
    },
    {
      title: "Purchase Indents Procurement Dashboard",
      desc: "Mobile material requisition list displaying approved purchase indents with distinct tracking IDs, project designations, requesting party logs, and validation workflows.",
      screen: (
        <div className="relative w-full h-full bg-[#005c8a]">
          <Image
            src="/assets/WhatsApp Image 2026-06-13 at 2.45.52 PM.jpeg"
            alt="Purchase Indents Dashboard"
            fill
            sizes="170px"
            className="object-contain"
          />
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
