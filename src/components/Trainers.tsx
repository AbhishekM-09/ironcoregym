import { motion } from 'motion/react';
import { TRAINERS } from '../data/mockData';
import { Trainer } from '../types';
import { Award, Instagram, Twitter, Linkedin, Calendar, CheckCircle } from 'lucide-react';

interface TrainersProps {
  onBookTrainer: (trainer: Trainer) => void;
}

export default function Trainers({ onBookTrainer }: TrainersProps) {
  return (
    <section id="trainers" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#E11D48]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E11D48]/10 border border-[#E11D48]/30 mb-4"
          >
            <Award className="w-3.5 h-3.5 text-[#E11D48]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48]">
              WORLD-CLASS COACHING TEAM
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight max-w-3xl"
          >
            MEET OUR <span className="text-[#E11D48]">MASTER TRAINERS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-2xl text-base mt-4 font-normal"
          >
            Our elite coaches hold international certifications and decades of combined experience in biomechanics, nutrition, and body composition transformation.
          </motion.p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAINERS.map((trainer, idx) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-[#E11D48]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Trainer Image & Overlay */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/30 to-transparent" />

                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-md border border-white/10 text-[11px] font-bold uppercase tracking-wider text-[#E11D48]">
                    {trainer.experience}
                  </div>

                  {/* Social links overlay */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {trainer.socials.instagram && (
                      <a
                        href={trainer.socials.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 rounded-full bg-black/80 hover:bg-[#E11D48] text-white flex items-center justify-center transition-colors border border-white/10"
                        aria-label="Instagram Profile"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    )}
                    {trainer.socials.twitter && (
                      <a
                        href={trainer.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 rounded-full bg-black/80 hover:bg-[#E11D48] text-white flex items-center justify-center transition-colors border border-white/10"
                        aria-label="Twitter Profile"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {trainer.socials.linkedin && (
                      <a
                        href={trainer.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 rounded-full bg-black/80 hover:bg-[#E11D48] text-white flex items-center justify-center transition-colors border border-white/10"
                        aria-label="LinkedIn Profile"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E11D48]">
                      {trainer.specialization}
                    </span>
                    <h3 className="font-display text-2xl font-black text-white mt-0.5">
                      {trainer.name}
                    </h3>
                    <p className="text-xs text-zinc-400 font-medium">
                      {trainer.role}
                    </p>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed mb-6 line-clamp-3">
                    {trainer.bio}
                  </p>

                  {/* Certifications badges */}
                  <div className="space-y-1.5 mb-6">
                    {trainer.certifications.map((cert, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-[11px] text-zinc-400">
                        <CheckCircle className="w-3.5 h-3.5 text-[#E11D48] shrink-0" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onBookTrainer(trainer)}
                  className="w-full py-3 rounded-xl bg-white/5 hover:bg-[#E11D48] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-white/10 hover:border-[#E11D48] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
