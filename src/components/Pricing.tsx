import { useState } from 'react';
import { motion } from 'motion/react';
import { PRICING_PLANS } from '../data/mockData';
import { PricingPlan } from '../types';
import { Check, Zap, Sparkles, ShieldCheck } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="membership" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(225,29,72,0.12)_0%,transparent_70%)] pointer-events-none transform-gpu" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E11D48]/10 border border-[#E11D48]/30 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E11D48]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48]">
              TRANSPARENT VALUE & FLEXIBILITY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight max-w-3xl"
          >
            MEMBERSHIP <span className="text-[#E11D48]">PLANS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-2xl text-base mt-4 font-normal"
          >
            Invest in your fitness evolution. No hidden admission fees, no contract lock-ins. Cancel or freeze anytime.
          </motion.p>
        </div>

        {/* Monthly / Annual Billing Switch */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <span className={`text-xs font-bold uppercase tracking-wider ${!isAnnual ? 'text-white' : 'text-zinc-500'}`}>
            Monthly Billing
          </span>

          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-16 h-8 rounded-full bg-white/10 border border-white/20 p-1 cursor-pointer transition-colors"
            aria-label="Toggle Annual Billing"
          >
            <motion.div
              animate={{ x: isAnnual ? 32 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="w-6 h-6 rounded-full bg-[#E11D48] red-glow-sm"
            />
          </button>

          <div className="flex items-center gap-2">
            <span className={`text-xs font-bold uppercase tracking-wider ${isAnnual ? 'text-white' : 'text-zinc-500'}`}>
              Annual Billing
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#E11D48]/20 border border-[#E11D48]/50 text-[#E11D48] text-[10px] font-extrabold uppercase tracking-wider">
              Save 20%
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, idx) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.isPopular
                    ? 'glass-card border-2 border-[#E11D48] red-glow scale-105 z-20'
                    : 'glass-card border border-white/10 hover:border-white/25 z-10'
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E11D48] text-white px-4 py-1 rounded-full text-[11px] font-black uppercase tracking-widest shadow-lg flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 fill-white" />
                    <span>MOST POPULAR</span>
                  </div>
                )}

                <div>
                  <h3 className="font-display text-xl font-black text-white uppercase tracking-wider mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-zinc-400 min-h-[36px] mb-6">
                    {plan.description}
                  </p>

                  {/* Price Tag */}
                  <div className="mb-8 pb-6 border-b border-white/10 flex items-baseline gap-1">
                    <span className="font-display text-4xl sm:text-5xl font-black text-white">
                      ₹{price}
                    </span>
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      / month
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-zinc-500 block mb-2">
                      WHAT'S INCLUDED:
                    </span>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs text-zinc-300">
                        <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                          plan.isPopular ? 'bg-[#E11D48] text-white' : 'bg-white/10 text-[#E11D48]'
                        }`}>
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <button
                  onClick={() => onSelectPlan(plan)}
                  className={`w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    plan.isPopular
                      ? 'bg-[#E11D48] hover:bg-[#BE123C] text-white red-glow shadow-lg shadow-[#E11D48]/30'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                  }`}
                >
                  {plan.ctaText}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Free Pass Guarantee Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full">
            <ShieldCheck className="w-4 h-4 text-[#E11D48]" />
            <span>Not ready to commit? Experience IronCore with a 3-Day Free VIP Pass.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
