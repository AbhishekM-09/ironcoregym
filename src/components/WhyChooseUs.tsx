import { motion } from 'motion/react';
import { WHY_US_FEATURES } from '../data/mockData';
import { Dumbbell, Award, UserCheck, Apple, Clock, Flame, ArrowUpRight } from 'lucide-react';

export default function WhyChooseUs() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6 text-[#E11D48]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#E11D48]" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-[#E11D48]" />;
      case 'Apple':
        return <Apple className="w-6 h-6 text-[#E11D48]" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-[#E11D48]" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#E11D48]" />;
      default:
        return <Dumbbell className="w-6 h-6 text-[#E11D48]" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(225,29,72,0.12)_0%,transparent_70%)] pointer-events-none transform-gpu" />

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E11D48]/10 border border-[#E11D48]/30 mb-4"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48]">
              THE IRONCORE ADVANTAGE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight max-w-3xl"
          >
            ENGINEERED FOR <span className="text-[#E11D48]">PEAK PERFORMANCE</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-2xl text-base mt-4 font-normal"
          >
            We combine high-tech biomechanical training equipment, expert exercise science, and luxury recovery zones to ensure every workout yields maximum physiological progress.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US_FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative p-8 rounded-2xl glass-card border border-white/10 hover:border-[#E11D48]/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Background Highlight on Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#E11D48]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#111111] border border-white/10 flex items-center justify-center group-hover:bg-[#E11D48] group-hover:border-[#E11D48] transition-all duration-300 red-glow-sm">
                    <div className="group-hover:text-white transition-colors">
                      {getIcon(feature.icon)}
                    </div>
                  </div>
                  <span className="text-xs font-mono text-zinc-600 group-hover:text-[#E11D48] transition-colors font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-xl font-extrabold text-white mb-3 group-hover:text-[#E11D48] transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-zinc-400 group-hover:text-white transition-colors">
                <span>Learn Protocol</span>
                <ArrowUpRight className="w-4 h-4 text-[#E11D48] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
