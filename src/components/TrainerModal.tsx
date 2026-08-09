import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, CheckCircle2, Award, Clock } from 'lucide-react';
import { Trainer } from '../types';

interface TrainerModalProps {
  trainer: Trainer | null;
  onClose: () => void;
  onShowNotification: (msg: string) => void;
}

export default function TrainerModal({ trainer, onClose, onShowNotification }: TrainerModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!trainer) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      onShowNotification('Please fill in your contact details.');
      return;
    }
    setIsSubmitted(true);
    onShowNotification(`1-on-1 session request sent to Coach ${trainer.name}!`);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-xl glass-card p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl text-white overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[#E11D48]/20 border border-[#E11D48] rounded-full flex items-center justify-center mx-auto mb-4 text-[#E11D48] red-glow">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-black text-white mb-2">
                BOOKING REQUEST SENT!
              </h3>
              <p className="text-sm text-zinc-300 mb-6">
                Coach <span className="text-[#E11D48] font-bold">{trainer.name}</span> will review your goals and call you directly to confirm your session timing.
              </p>
              <button
                onClick={onClose}
                className="w-full py-3.5 rounded-xl bg-[#E11D48] text-white font-bold text-xs uppercase tracking-wider red-glow cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <div>
              {/* Trainer Brief Header */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-[#E11D48]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#E11D48] bg-[#E11D48]/10 px-2 py-0.5 rounded-sm">
                    {trainer.specialization}
                  </span>
                  <h3 className="font-display text-2xl font-black text-white mt-1">
                    Book Session with {trainer.name}
                  </h3>
                  <p className="text-xs text-zinc-400 font-medium">
                    {trainer.role} • {trainer.experience}
                  </p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Siddharth Kapoor"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#111111] text-white text-sm px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-[#E11D48]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                    Phone Number *
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
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#111111] text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-[#E11D48]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs font-bold uppercase tracking-wider red-glow transition-all cursor-pointer shadow-lg shadow-[#E11D48]/30 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Consultation Session</span>
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
