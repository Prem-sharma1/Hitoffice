"use client";

export default function CTA({ onBookDemo }) {
  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Container with rounded dark gradient */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-950 via-[#1E56A0] to-slate-950 gradient-bg-moving text-white py-20 px-6 sm:px-12 lg:px-20 shadow-2xl">
          
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-500/10 blur-[80px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/4" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Digitize Your Construction Business Today
            </h3>
            
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Get started with a free trial or request a custom demo.
            </p>

            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <button
                onClick={onBookDemo}
                className="w-full sm:w-auto bg-white hover:bg-slate-100 text-brand-blue font-bold px-8 py-4 rounded-xl shadow-lg active:scale-95 transition-all text-center cursor-pointer"
              >
                Book a Free Live Demo
              </button>
              <button
                onClick={onBookDemo}
                className="w-full sm:w-auto border border-white hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl active:scale-95 transition-all text-center cursor-pointer"
              >
                Watch Live Demo
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
