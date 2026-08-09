import { motion } from 'motion/react';
import { HERO_STATS } from '../data/mockData';
import { ArrowRight, ShieldCheck, Play, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenFreeTrial: () => void;
  onOpenVideoTour?: () => void;
}

export default function Hero({ onOpenFreeTrial, onOpenVideoTour }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#050505]">
      {/* Background Image with Dark Overlay Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=90"
          alt="IronCore Premium Gym"
          className="w-full h-full object-cover object-center scale-105 filter brightness-50 contrast-125"
          referrerPolicy="no-referrer"
        />
        {/* Layered cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(225,29,72,0.15),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy (Left Column) */}
          <div className="lg:col-span-8 flex flex-col items-start">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/10 glass-card mb-5 sm:mb-6"
            >
              <span className="text-[9.5px] sm:text-xs font-bold uppercase tracking-widest text-zinc-200">
                INDIA'S PREMIER HIGH-PERFORMANCE GYM
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase leading-[0.95] mb-5 sm:mb-6"
            >
              BUILD YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-[#E11D48]">
                STRONGEST
              </span>{' '}
              VERSION
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xs sm:text-base lg:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed mb-6 sm:mb-8"
            >
              Transform your body, build confidence, and achieve your fitness goals with expert coaching and world-class biomechanical equipment.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-12"
            >
              <button
                onClick={onOpenFreeTrial}
                className="group relative inline-flex items-center justify-center gap-2.5 bg-[#E11D48] hover:bg-[#BE123C] text-white px-5 py-3 sm:px-8 sm:py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 red-glow shadow-xl shadow-[#E11D48]/30 cursor-pointer"
              >
                <span>Start Your Transformation</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#membership"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 px-5 py-3 sm:px-7 sm:py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all duration-300"
              >
                View Membership Plans
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-6 pt-4 border-t border-white/10 w-full"
            >
              <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#E11D48]" />
                <span>Zero Commitment 3-Day Free Pass</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48]" />
                <span>Certified Elite Coaches</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Video Preview Card & Floating Accent */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-sm"
            >
              {/* Gym Tour Visual Card */}
              <div className="relative rounded-2xl overflow-hidden glass-card p-3 border border-white/15 shadow-2xl group">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
                    alt="IronCore Gym Experience"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                    referrerPolicy="no-referrer"
                    decoding="async"
                    fetchPriority="high"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  
                  {/* Play Button Overlay */}
                  <button
                    onClick={onOpenVideoTour}
                    className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                    aria-label="Watch Virtual Tour"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#E11D48]/90 group-hover:bg-[#E11D48] text-white flex items-center justify-center red-glow group-hover:scale-110 transition-all duration-300">
                      <Play className="w-7 h-7 fill-white translate-x-0.5" />
                    </div>
                  </button>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#E11D48] bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-md inline-block mb-1">
                      VIRTUAL TOUR
                    </span>
                    <h3 className="font-display text-lg font-extrabold text-white leading-tight">
                      Experience IronCore Luxury Facility
                    </h3>
                  </div>
                </div>

                {/* Floating Member Badge */}
                <div className="absolute -bottom-5 -left-5 glass-card px-4 py-3 rounded-xl border border-white/20 shadow-2xl flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <img className="w-8 h-8 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Member" referrerPolicy="no-referrer" />
                    <img className="w-8 h-8 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="Member" referrerPolicy="no-referrer" />
                    <img className="w-8 h-8 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" alt="Member" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">4.9 ★★★★★</div>
                    <div className="text-[10px] text-zinc-400 font-medium">Over 500+ Reviews</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Animated Statistics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-2xl glass-card border-white/10"
        >
          {HERO_STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center sm:items-start p-4 ${
                idx !== HERO_STATS.length - 1 ? 'lg:border-r lg:border-white/10' : ''
              }`}
            >
              <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight flex items-center">
                <span className="text-[#E11D48]">{stat.value}</span>
              </span>
              <span className="text-xs sm:text-sm text-zinc-400 font-semibold uppercase tracking-wider mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
