import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export default function Toast({ message, onClose }: ToastProps) {
  if (!message) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.9 }}
        className="fixed bottom-6 left-6 z-50 glass-card px-5 py-3.5 rounded-2xl border border-[#E11D48]/40 shadow-2xl flex items-center gap-3 text-white max-w-md red-glow-sm"
      >
        <div className="w-8 h-8 rounded-full bg-[#E11D48]/20 text-[#E11D48] flex items-center justify-center shrink-0">
          <CheckCircle className="w-4 h-4" />
        </div>
        <div className="text-xs font-semibold leading-tight text-zinc-200">
          {message}
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-md text-zinc-400 hover:text-white transition-colors cursor-pointer ml-auto"
        >
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
