import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { Program } from '../types';

interface ProgramModalProps {
  program: Program | null;
  onClose: () => void;
  onOpenFreeTrial: () => void;
}

export default function ProgramModal({ program, onClose, onOpenFreeTrial }: ProgramModalProps) {
  if (!program) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl glass-card rounded-3xl border border-white/20 shadow-2xl text-white overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden shrink-0">
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-full object-cover filter brightness-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <span className="px-3 py-1 rounded-md bg-[#E11D48] text-white font-display text-[11px] font-extrabold uppercase tracking-wider mb-2 inline-block">
                {program.intensity} INTENSITY
              </span>
              <h3 className="font-display text-3xl font-black text-white">
                {program.title}
              </h3>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <p className="text-zinc-300 text-sm leading-relaxed">
              {program.description}
            </p>

            <div className="flex items-center gap-6 p-4 rounded-xl bg-white/5 border border-white/10 text-xs">
              <div>
                <span className="text-zinc-500 uppercase font-bold block">Session Duration</span>
                <span className="text-white font-extrabold">{program.duration}</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <span className="text-zinc-500 uppercase font-bold block">Target Audience</span>
                <span className="text-white font-extrabold">All Fitness Levels</span>
              </div>
            </div>

            <div>
              <h4 className="font-display text-xs font-black uppercase text-zinc-400 mb-3 tracking-wider">
                CORE CURRICULUM HIGHLIGHTS:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {program.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-200 bg-white/5 p-3 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenFreeTrial();
              }}
              className="w-full py-4 rounded-xl bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs font-bold uppercase tracking-wider red-glow transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-[#E11D48]/30"
            >
              <span>Enroll In {program.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
