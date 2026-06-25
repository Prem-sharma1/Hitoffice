"use client";

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      {/* Click outside to close */}
      <div className="absolute inset-0 z-40" onClick={onClose} />

      <div className="relative max-w-4xl w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-800 animate-slide-up z-50">
        {/* Overlapping Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-950/80 hover:bg-red-600 text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer z-50 border border-slate-800"
          aria-label="Close video player"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Video Player Iframe */}
        <div className="w-full h-full bg-black">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" // Placeholder video link - replace with actual demo video embed URL
            title="Hitoffice ERP Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
