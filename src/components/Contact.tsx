import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';

interface ContactProps {
  onShowNotification: (msg: string) => void;
}

export default function Contact({ onShowNotification }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: 'Weight Training',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      onShowNotification('Please enter your name and phone number');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onShowNotification(`Thank you ${formData.name}! Your VIP enquiry has been received.`);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E11D48]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E11D48]/10 border border-[#E11D48]/30 mb-4"
          >
            <Send className="w-3.5 h-3.5 text-[#E11D48]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48]">
              START YOUR JOURNEY TODAY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight max-w-3xl"
          >
            GET IN <span className="text-[#E11D48]">TOUCH WITH US</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-2xl text-base mt-4 font-normal"
          >
            Fill out the form below to claim your complimentary 3-Day VIP Pass or book a consultation with our master coaches.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Column */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-10 rounded-3xl border border-white/10">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#E11D48]/20 border border-[#E11D48] rounded-full flex items-center justify-center mx-auto mb-6 text-[#E11D48] red-glow">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-black text-white mb-2">
                  ENQUIRY SUBMITTED!
                </h3>
                <p className="text-zinc-400 text-sm max-w-md mx-auto mb-6">
                  Our head membership advisor will call you within 15 minutes to confirm your 3-Day VIP Pass access code.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', program: 'Weight Training', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-white/10 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-all cursor-pointer"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#111111] text-white text-sm px-4 py-3.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#E11D48] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91XXXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#111111] text-white text-sm px-4 py-3.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#E11D48] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#111111] text-white text-sm px-4 py-3.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#E11D48] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-2">
                    Primary Fitness Goal
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full bg-[#111111] text-white text-sm px-4 py-3.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#E11D48] transition-colors"
                  >
                    <option value="Weight Training">Weight & Strength Training</option>
                    <option value="Fat Loss">Fat Loss & HIIT</option>
                    <option value="Muscle Building">Muscle Hypertrophy</option>
                    <option value="Personal Training">1-on-1 Personal Coaching</option>
                    <option value="Cross Training">Cross Training & Conditioning</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-2">
                    Message / Preferred Time to Call
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your fitness background or preferred training timings..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#111111] text-white text-sm px-4 py-3.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#E11D48] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold text-xs uppercase tracking-wider red-glow transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-[#E11D48]/30"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Claim Free 3-Day Pass & Submit</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Location & Quick Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact details cards */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E11D48]/20 border border-[#E11D48]/40 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#E11D48]" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-extrabold text-white uppercase">Location</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    IronCore Flagship Center, 100 Ft Road, Indiranagar, Bengaluru, Karnataka 560038
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#E11D48]/20 border border-[#E11D48]/40 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#E11D48]" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-extrabold text-white uppercase">Hotline & WhatsApp</h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    +91XXXXXXXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#E11D48]/20 border border-[#E11D48]/40 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#E11D48]" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-extrabold text-white uppercase">Hours</h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    Biometric Access: <span className="text-white font-bold">24 Hours / 7 Days</span>
                    <br />
                    Front Desk: 6:00 AM – 10:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps Mockup / Map View */}
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] relative">
              <iframe
                title="IronCore Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9868779836944!2d77.6387083!3d12.9715987!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168128383a15%3A0x868b81230e702c28!2sIndiranagar%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(125%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Direct WhatsApp Quick Chat Card */}
            <a
              href="https://wa.me/91XXXXXXXXX?text=Hi%20IronCore%20Fitness,%20I%20would%20like%20to%20enquire%20about%20membership%20plans."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-emerald-600/15 border border-emerald-500/30 hover:bg-emerald-600/25 transition-all text-emerald-400 group"
            >
              <div className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-emerald-400" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    Need Instant Answers?
                  </div>
                  <div className="text-xs text-emerald-400/80 font-medium">
                    Chat directly with our team on WhatsApp
                  </div>
                </div>
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                Chat Now →
              </span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
