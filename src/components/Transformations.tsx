import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSFORMATIONS } from '../data/mockData';
import { Trophy, Clock, Sparkles, ArrowRight, Quote } from 'lucide-react';

export default function Transformations() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedTrans = TRANSFORMATIONS[selectedIndex];

  return (
    <section id="transformation" className="py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-b border-white/5">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[radial-gradient(circle,rgba(225,29,72,0.12)_0%,transparent_70%)] pointer-events-none transform-gpu" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E11D48]/10 border border-[#E11D48]/30 mb-4"
          >
            <Trophy className="w-3.5 h-3.5 text-[#E11D48]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48]">
              REAL PEOPLE, PROVEN RESULTS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight max-w-3xl"
          >
            MEMBER <span className="text-[#E11D48]">TRANSFORMATIONS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-2xl text-base mt-4 font-normal"
          >
            Witness the real, undeniable physical evolutions achieved by our members under the IronCore coaching framework.
          </motion.p>
        </div>

        {/* Featured Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-card p-6 sm:p-10 rounded-3xl border border-white/10 mb-12">
          
          {/* Left: Transformation Visual Comparison */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 relative">
            
            {/* Before Photo */}
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-white/10 group">
              <img
                src={selectedTrans.beforeImg}
                alt={`${selectedTrans.name} Before`}
                className="w-full h-full object-cover filter brightness-90 grayscale contrast-110"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />

              <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-widest text-zinc-300 border border-white/10">
                BEFORE
              </div>
            </div>

            {/* After Photo */}
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border-2 border-[#E11D48] red-glow-sm group">
              <img
                src={selectedTrans.afterImg}
                alt={`${selectedTrans.name} After`}
                className="w-full h-full object-cover filter brightness-105 contrast-110"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />

              <div className="absolute top-3 right-3 bg-[#E11D48] px-3 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-widest text-white shadow-lg">
                AFTER
              </div>
            </div>

            {/* Badge Indicator in Middle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/90 border border-white/20 px-4 py-2 rounded-full text-xs font-black uppercase text-[#E11D48] tracking-widest shadow-2xl backdrop-blur-md hidden sm:block">
              VS
            </div>
          </div>

          {/* Right: Story Details */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full py-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-md bg-[#E11D48]/20 border border-[#E11D48]/40 text-[#E11D48] font-display text-xs font-black uppercase tracking-wider">
                  {selectedTrans.weightLost}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-medium">
                  <Clock className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{selectedTrans.duration}</span>
                </div>
              </div>

              <h3 className="font-display text-3xl font-black text-white mb-2">
                {selectedTrans.title}
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-[#E11D48] mb-6">
                Program: {selectedTrans.program}
              </p>

              <div className="relative bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
                <Quote className="w-8 h-8 text-[#E11D48]/30 absolute top-4 right-4" />
                <p className="text-sm text-zinc-300 italic leading-relaxed relative z-10">
                  "{selectedTrans.quote}"
                </p>
                <div className="mt-4 pt-3 border-t border-white/10 text-xs font-extrabold text-white">
                  — {selectedTrans.name}
                </div>
              </div>
            </div>

            {/* Navigation selector */}
            <div className="flex items-center gap-2 pt-4 border-t border-white/10">
              <span className="text-xs text-zinc-500 font-bold uppercase tracking-wider mr-2">
                Select Story:
              </span>
              {TRANSFORMATIONS.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedIndex(i)}
                  className={`w-10 h-10 rounded-xl font-display text-xs font-bold transition-all cursor-pointer ${
                    selectedIndex === i
                      ? 'bg-[#E11D48] text-white red-glow-sm'
                      : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  0{i + 1}
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
