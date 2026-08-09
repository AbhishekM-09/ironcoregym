import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export default function LightboxModal({ item, onClose }: LightboxModalProps) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-w-5xl w-full rounded-2xl overflow-hidden glass-card border border-white/20 shadow-2xl flex flex-col"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-black text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative aspect-[16/10] w-full overflow-hidden bg-black flex items-center justify-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="p-4 sm:p-6 bg-[#0B0B0B] border-t border-white/10 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E11D48]">
                {item.category}
              </span>
              <h3 className="font-display text-xl font-black text-white">
                {item.title}
              </h3>
            </div>
            <div className="text-xs font-mono text-zinc-500">
              IronCore Luxury Facility
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
