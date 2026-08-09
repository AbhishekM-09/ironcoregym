import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Volume2, ShieldCheck } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenFreeTrial: () => void;
}

export default function VideoModal({ isOpen, onClose, onOpenFreeTrial }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-w-4xl w-full rounded-3xl overflow-hidden glass-card border border-white/20 shadow-2xl flex flex-col"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-black text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Video Placeholder Container */}
          <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80"
              alt="IronCore Gym Tour"
              className="w-full h-full object-cover filter brightness-75"
              referrerPolicy="no-referrer"
            />
            
            {/* Play overlay simulation */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col items-center justify-center p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-[#E11D48] text-white flex items-center justify-center red-glow mb-4 animate-pulse">
                <Play className="w-9 h-9 fill-white translate-x-1" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48] mb-1">
                CINEMATIC FACILITY SHOWCASE
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-white max-w-lg mb-2">
                IRONCORE FLAGSHIP EXPERIENCE
              </h3>
              <p className="text-xs text-zinc-300 max-w-md">
                Tour 15,000 sq.ft of imported biomechanical machinery, Olympic platforms, and private recovery saunas.
              </p>
            </div>
          </div>

          <div className="p-6 bg-[#0A0A0A] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-[#E11D48]" />
              <span>Experience in person with a complimentary 3-Day VIP Pass.</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenFreeTrial();
              }}
              className="px-6 py-3 rounded-xl bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs font-bold uppercase tracking-wider red-glow transition-all cursor-pointer"
            >
              Claim Free 3-Day Pass Now
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
