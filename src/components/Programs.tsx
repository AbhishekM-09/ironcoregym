import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROGRAMS } from '../data/mockData';
import { Program } from '../types';
import { Flame, Clock, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

interface ProgramsProps {
  onSelectProgram: (program: Program) => void;
}

export default function Programs({ onSelectProgram }: ProgramsProps) {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Programs' },
    { id: 'strength', label: 'Strength' },
    { id: 'fat-loss', label: 'Fat Loss' },
    { id: 'muscle', label: 'Muscle Building' },
    { id: 'personal', label: 'Personal Training' },
    { id: 'conditioning', label: 'Conditioning' },
  ];

  const filteredPrograms = activeTab === 'all'
    ? PROGRAMS
    : PROGRAMS.filter((p) => p.category === activeTab);

  return (
    <section id="programs" className="py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-b border-white/5">
      {/* Background Accent */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#E11D48]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 mb-4"
          >
            <Zap className="w-3.5 h-3.5 text-[#E11D48]" />
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">
              TARGETED TRAINING PROTOCOLS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight max-w-3xl"
          >
            WORLD-CLASS <span className="text-[#E11D48]">FITNESS PROGRAMS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-2xl text-base mt-4 font-normal"
          >
            Whether your objective is rapid fat shredding, progressive overload strength, or 1-on-1 athletic coaching, our science-backed programs yield real results.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-[#E11D48] text-white red-glow-sm'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((program) => (
              <motion.div
                key={program.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-[#E11D48]/40 transition-all duration-300 flex flex-col h-full"
              >
                {/* Program Card Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-md bg-[#E11D48] text-white font-display text-[11px] font-extrabold uppercase tracking-wider shadow-lg">
                      {program.intensity} INTENSITY
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-4 flex items-center gap-1.5 text-xs font-semibold text-zinc-300 bg-black/60 px-3 py-1 rounded-md backdrop-blur-md border border-white/10">
                    <Clock className="w-3.5 h-3.5 text-[#E11D48]" />
                    <span>{program.duration}</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-black text-white mb-2 group-hover:text-[#E11D48] transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                      {program.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2.5 mb-8">
                      {program.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs text-zinc-300 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onSelectProgram(program)}
                    className="w-full py-3.5 rounded-xl bg-white/5 hover:bg-[#E11D48] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-white/10 hover:border-[#E11D48] flex items-center justify-center gap-2 group/btn cursor-pointer"
                  >
                    <span>Explore Program Details</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
