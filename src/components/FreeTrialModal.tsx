import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, CheckCircle2, ShieldCheck, Dumbbell } from 'lucide-react';
import { PricingPlan } from '../types';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: PricingPlan | null;
  onShowNotification: (msg: string) => void;
}

export default function FreeTrialModal({ isOpen, onClose, selectedPlan, onShowNotification }: FreeTrialModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredSlot, setPreferredSlot] = useState('Morning (6 AM - 10 AM)');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      onShowNotification('Please enter your name and phone number.');
      return;
    }

    setIsSubmitted(true);
    onShowNotification(`VIP Pass claimed for ${name}! Check your SMS.`);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg glass-card p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl text-white overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Glow Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#E11D48]/20 rounded-full blur-2xl pointer-events-none" />

          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[#E11D48]/20 border border-[#E11D48] rounded-full flex items-center justify-center mx-auto mb-4 text-[#E11D48] red-glow">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-black text-white mb-2">
                VIP PASS ACTIVATED!
              </h3>
              <p className="text-sm text-zinc-300 mb-6">
                Your 3-Day Free Trial QR pass has been reserved for <span className="text-[#E11D48] font-bold">{name}</span>. Show your phone at our front desk.
              </p>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-xs font-mono text-zinc-400 mb-6">
                PASS CODE: <span className="text-white font-bold">IRON-VIP-2026</span>
              </div>
              <button
                onClick={onClose}
                className="w-full py-3.5 rounded-xl bg-[#E11D48] text-white font-bold text-xs uppercase tracking-wider red-glow cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <div>
              {/* Header */}
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-lg bg-[#E11D48]/20 text-[#E11D48]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#E11D48]">
                  LIMITED AVAILABILITY
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
                {selectedPlan ? `JOIN ${selectedPlan.name} PLAN` : 'CLAIM 3-DAY FREE VIP PASS'}
              </h3>

              <p className="text-xs text-zinc-300 mb-6">
                Get full access to our biomechanical weight floor, cardio arena, and 1-on-1 coach assessment. Zero commitment.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#111111] text-white text-sm px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-[#E11D48]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                    Mobile Phone (For Pass SMS) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91XXXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#111111] text-white text-sm px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-[#E11D48]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                    Preferred Visit Time Slot
                  </label>
                  <select
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="w-full bg-[#111111] text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-[#E11D48]"
                  >
                    <option>Morning (6:00 AM – 10:00 AM)</option>
                    <option>Afternoon (11:00 AM – 4:00 PM)</option>
                    <option>Evening (5:00 PM – 9:30 PM)</option>
                  </select>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-zinc-400 py-1">
                  <ShieldCheck className="w-4 h-4 text-[#E11D48] shrink-0" />
                  <span>No credit card required. Free 3-day full access pass.</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs font-bold uppercase tracking-wider red-glow transition-all cursor-pointer shadow-lg shadow-[#E11D48]/30"
                >
                  Confirm & Reserve VIP Pass
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
