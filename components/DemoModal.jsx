"use client";

import { useState, useEffect } from "react";

export default function DemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    businessType: "Builder",
    city: "",
    companyName: "",
    websiteLink: "",
    preferredDate: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  const TIME_SLOTS = ["10:00 AM", "11:30 AM", "2:00 PM", "3:30 PM", "5:00 PM"];

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isPast = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isSelected = (date) => {
    if (!selectedDate) return false;
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  const handleDayClick = (day) => {
    setSelectedDate(day);
    setSelectedTime("");
    const formattedDate = day.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
    setFormData((prev) => ({
      ...prev,
      preferredDate: formattedDate,
    }));
  };

  const handleTimeClick = (timeSlot) => {
    setSelectedTime(timeSlot);
    if (selectedDate) {
      const formattedDate = selectedDate.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric"
      });
      const fullDateTime = `${formattedDate} at ${timeSlot}`;
      setFormData((prev) => ({
        ...prev,
        preferredDate: fullDateTime,
      }));
      setTimeout(() => {
        setShowCalendar(false);
      }, 300);
    }
  };

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDayIndex = getFirstDayOfMonth(currentMonth);
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const days = [];
  for (let i = 0; i < firstDayIndex; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(year, month, i));
  }

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setLoading(false);
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: "",
            email: "",
            mobile: "",
            businessType: "Builder",
            city: "",
            companyName: "",
            websiteLink: "",
            preferredDate: "",
          });
          setSelectedDate(null);
          setSelectedTime("");
          onClose();
        }, 2500);
      } else {
        alert(data.error || "Failed to submit demo request. Please try again.");
        setLoading(false);
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("A network error occurred. Please check your connection and try again.");
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">

      {/* Non-clipping Wrapper (overflow visible) to allow overlapping elements */}
      <div className="relative max-w-[550px] w-full animate-slide-up">

        {/* Overlapping Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-950 hover:bg-red-600 text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer z-50 border-2 border-white"
          aria-label="Close modal"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Card (Handles scroll and overflow internally) */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-slate-100 overflow-y-auto max-h-[85vh] sm:max-h-[90vh] relative">

          {/* Blurred decorative glowing shapes inside the modal for high aesthetics */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/10 rounded-full blur-[48px] pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-0 w-36 h-36 bg-orange-500/10 rounded-full blur-[48px] pointer-events-none -z-10" />

          {!submitted ? (
            <div className="space-y-6 relative z-10">

              {/* Header Text */}
              <div className="text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent tracking-tight">
                  Book a Free Live Demo
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                  Fill out the details below and our product specialists will set up a personalized walkthrough of the Hitoffice platform.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">

                  {/* NAME */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold tracking-wide text-slate-700 uppercase mb-1.5">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full border border-slate-200 bg-slate-50/40 rounded-xl pl-10 pr-3.5 py-2.5 text-sm font-medium text-slate-800 placeholder-slate-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100/60 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* EMAIL ID */}
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-bold tracking-wide text-slate-700 uppercase mb-1.5">
                      Email ID <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full border border-slate-200 bg-slate-50/40 rounded-xl pl-10 pr-3.5 py-2.5 text-sm font-medium text-slate-800 placeholder-slate-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100/60 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Mobile Number */}
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-bold tracking-wide text-slate-700 uppercase mb-1.5">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <input
                        type="tel"
                        name="mobile"
                        required
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full border border-slate-200 bg-slate-50/40 rounded-xl pl-10 pr-3.5 py-2.5 text-sm font-medium text-slate-800 placeholder-slate-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100/60 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Business Type */}
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-bold tracking-wide text-slate-700 uppercase mb-1.5">
                      Business Type
                    </label>
                    <div className="relative group">
                      <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full border border-slate-200 bg-slate-50/40 rounded-xl pl-10 pr-10 py-2.5 text-sm font-medium text-slate-800 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100/60 transition-all outline-none appearance-none cursor-pointer"
                      >
                        <option value="Builder">Builder</option>
                        <option value="General Contractor">General Contractor</option>
                        <option value="Subcontractor">Subcontractor</option>
                        <option value="Specialty Trade">Specialty Trade</option>
                      </select>
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* City */}
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-bold tracking-wide text-slate-700 uppercase mb-1.5">
                      City
                    </label>
                    <div className="relative group">
                      <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="New York"
                        className="w-full border border-slate-200 bg-slate-50/40 rounded-xl pl-10 pr-3.5 py-2.5 text-sm font-medium text-slate-800 placeholder-slate-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100/60 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-bold tracking-wide text-slate-700 uppercase mb-1.5">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Acme Builders LLC"
                        className="w-full border border-slate-200 bg-slate-50/40 rounded-xl pl-10 pr-3.5 py-2.5 text-sm font-medium text-slate-800 placeholder-slate-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100/60 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Website Link */}
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-bold tracking-wide text-slate-700 uppercase mb-1.5">
                      Website Link
                    </label>
                    <div className="relative group">
                      <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      <input
                        type="url"
                        name="websiteLink"
                        value={formData.websiteLink}
                        onChange={handleChange}
                        placeholder="https://example.com"
                        className="w-full border border-slate-200 bg-slate-50/40 rounded-xl pl-10 pr-3.5 py-2.5 text-sm font-medium text-slate-800 placeholder-slate-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100/60 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold tracking-wide text-slate-700 uppercase mb-1.5">
                      Preferred Date for Demo? <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      {/* Transparent backdrop overlay to click-away-to-close */}
                      {showCalendar && (
                        <div 
                          className="fixed inset-0 z-40 bg-transparent" 
                          onClick={() => setShowCalendar(false)}
                        />
                      )}

                      <div className="relative group z-45">
                        <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-200 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <input
                          type="text"
                          name="preferredDate"
                          required
                          readOnly
                          onClick={() => setShowCalendar(!showCalendar)}
                          value={formData.preferredDate}
                          placeholder="Select preferred date & time"
                          className="w-full border border-slate-200 bg-slate-50/40 rounded-xl pl-10 pr-10 py-2.5 text-sm font-medium text-slate-800 placeholder-slate-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100/60 transition-all outline-none cursor-pointer"
                        />
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>

                      {/* Floating Custom Calendar Dropdown */}
                      {showCalendar && (
                        <div className="absolute top-full left-0 mt-2 w-full sm:w-[360px] bg-white rounded-2xl border border-slate-100 shadow-2xl p-4 z-50 animate-slide-up max-h-[420px] overflow-y-auto">
                          {/* Calendar Header */}
                          <div className="flex items-center justify-between mb-3">
                            <button
                              type="button"
                              onClick={prevMonth}
                              className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors"
                            >
                              <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                              </svg>
                            </button>
                            <span className="font-bold text-slate-800 text-sm">
                              {currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}
                            </span>
                            <button
                              type="button"
                              onClick={nextMonth}
                              className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors"
                            >
                              <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </div>

                          {/* Weekdays */}
                          <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                            <span>Su</span>
                            <span>Mo</span>
                            <span>Tu</span>
                            <span>We</span>
                            <span>Th</span>
                            <span>Fr</span>
                            <span>Sa</span>
                          </div>

                          {/* Days Grid */}
                          <div className="grid grid-cols-7 gap-1">
                            {days.map((day, idx) => {
                              if (!day) return <div key={`empty-${idx}`} />;
                              
                              const isTodayVal = isToday(day);
                              const isPastVal = isPast(day);
                              const isSelectedVal = isSelected(day);

                              return (
                                <button
                                  key={`day-${day.getTime()}`}
                                  type="button"
                                  disabled={isPastVal}
                                  onClick={() => handleDayClick(day)}
                                  className={`
                                    h-8 w-8 mx-auto rounded-lg text-xs font-bold transition-all flex items-center justify-center cursor-pointer
                                    ${isPastVal ? "text-slate-200 cursor-not-allowed" : ""}
                                    ${!isPastVal && !isSelectedVal ? "text-slate-700 hover:bg-blue-50 hover:text-[#1E56A0]" : ""}
                                    ${isSelectedVal ? "bg-[#1E56A0] text-white shadow-md shadow-blue-500/20" : ""}
                                    ${isTodayVal && !isSelectedVal ? "border-2 border-orange-500 text-orange-600" : ""}
                                  `}
                                >
                                  {day.getDate()}
                                </button>
                              );
                            })}
                          </div>

                          {/* Time Slots Section */}
                          {selectedDate && (
                            <div className="mt-4 pt-3 border-t border-slate-100">
                              <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                                Available Time Slots (IST)
                              </span>
                              <div className="grid grid-cols-3 gap-1.5">
                                {TIME_SLOTS.map((slot) => {
                                  const isTimeSelected = selectedTime === slot;
                                  return (
                                    <button
                                      key={slot}
                                      type="button"
                                      onClick={() => handleTimeClick(slot)}
                                      className={`
                                        py-1.5 px-2 rounded-lg text-xs font-semibold text-center transition-all cursor-pointer border
                                        ${isTimeSelected 
                                          ? "bg-orange-500 border-orange-500 text-white shadow-md shadow-orange-500/20" 
                                          : "border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"}
                                      `}
                                    >
                                      {slot}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                </div>

                {/* Red Gradient Submit Button Block with Sweep Shine */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-red-600 via-red-500 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold py-3.5 px-6 rounded-xl text-sm sm:text-base tracking-wider transition-all duration-300 uppercase shadow-lg shadow-red-500/25 flex items-center justify-center min-h-[50px] active:scale-[0.99] hover:-translate-y-0.5 cursor-pointer relative overflow-hidden group"
                  >
                    {/* Sweep shine effect on button hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

                    {loading ? (
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    ) : (
                      <span className="flex items-center space-x-2 relative z-10">
                        <span>BOOK A FREE LIVE DEMO</span>
                        <svg className="w-4 h-4 stroke-[3] transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    )}
                  </button>
                </div>

              </form>
            </div>
          ) : (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-fade-in relative z-10">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 text-3xl shadow-sm animate-pulse-slow">
                ✓
              </div>
              <h4 className="text-xl font-bold text-slate-800">Demo Scheduled!</h4>
              <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
                We have received your demo request details. Our construction software specialist will contact you shortly to confirm the scheduled calendar link.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
