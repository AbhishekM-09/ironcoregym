import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip Badge */}
      <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-emerald-500/40 text-emerald-400 text-xs font-bold shadow-xl animate-bounce">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>Chat with Coach</span>
      </div>

      <a
        href="https://wa.me/91XXXXXXXXX?text=Hi%20IronCore%20Fitness,%20I%20would%20like%20to%20enquire%20about%20membership%20plans."
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-600/50 hover:scale-110 transition-all duration-300 cursor-pointer border border-emerald-400/30"
        aria-label="WhatsApp Quick Enquire"
      >
        <MessageCircle className="w-7 h-7 fill-white stroke-emerald-600" />
      </a>
    </div>
  );
}
