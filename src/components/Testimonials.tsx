import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Quote, CheckCircle2, MessageSquare } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 mb-4"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#E11D48]" />
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">
              UNFILTERED MEMBER FEEDBACK
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight max-w-3xl"
          >
            WHAT OUR <span className="text-[#E11D48]">MEMBERS SAY</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-2xl text-base mt-4 font-normal"
          >
            Read how IronCore has helped executives, athletes, and working professionals accomplish world-class fitness milestones.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card p-8 rounded-2xl border border-white/10 hover:border-[#E11D48]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E11D48] text-[#E11D48]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#E11D48]/40" />
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed italic mb-8">
                  "{item.review}"
                </p>
              </div>

              {/* Author Info Footer */}
              <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#E11D48]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-display text-base font-extrabold text-white">
                      {item.name}
                    </h4>
                    {item.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E11D48]" />
                    )}
                  </div>
                  <p className="text-xs text-zinc-400 font-medium">{item.role}</p>
                  <span className="inline-block mt-1 text-[10px] font-bold text-[#E11D48] bg-[#E11D48]/10 px-2 py-0.5 rounded-sm">
                    {item.achievement}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
