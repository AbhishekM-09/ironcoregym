import { Dumbbell, Instagram, Facebook, Youtube, Twitter, ArrowUp, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenFreeTrial: () => void;
}

export default function Footer({ onOpenFreeTrial }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030303] text-zinc-400 text-xs border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#E11D48] to-[#9F1239] flex items-center justify-center red-glow-sm">
                <Dumbbell className="w-5 h-5 text-white stroke-[2.5]" />
              </div>
              <span className="font-display text-2xl font-black tracking-wider text-white">
                IRON<span className="text-[#E11D48]">CORE</span>
              </span>
            </a>

            <p className="text-zinc-400 leading-relaxed max-w-sm">
              India's premier high-performance luxury gym identity. Engineered for serious transformations with elite coaches, biomechanical machinery, and 24/7 keycard access.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#E11D48] text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#E11D48] text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#E11D48] text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#E11D48] text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-display text-sm font-extrabold uppercase text-white mb-4 tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 font-medium">
              <li><a href="#home" className="hover:text-[#E11D48] transition-colors">Home Overview</a></li>
              <li><a href="#why-us" className="hover:text-[#E11D48] transition-colors">Why IronCore</a></li>
              <li><a href="#programs" className="hover:text-[#E11D48] transition-colors">Fitness Programs</a></li>
              <li><a href="#trainers" className="hover:text-[#E11D48] transition-colors">Master Coaches</a></li>
              <li><a href="#transformation" className="hover:text-[#E11D48] transition-colors">Transformations</a></li>
            </ul>
          </div>

          {/* Programs Column */}
          <div>
            <h4 className="font-display text-sm font-extrabold uppercase text-white mb-4 tracking-wider">
              Popular Programs
            </h4>
            <ul className="space-y-2.5 font-medium">
              <li><a href="#programs" className="hover:text-[#E11D48] transition-colors">Weight Training</a></li>
              <li><a href="#programs" className="hover:text-[#E11D48] transition-colors">Fat Loss Protocol</a></li>
              <li><a href="#programs" className="hover:text-[#E11D48] transition-colors">Muscle Hypertrophy</a></li>
              <li><a href="#programs" className="hover:text-[#E11D48] transition-colors">1-on-1 VIP Coaching</a></li>
              <li><a href="#calculator" className="hover:text-[#E11D48] transition-colors">BMI & TDEE Calculator</a></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="font-display text-sm font-extrabold uppercase text-white mb-4 tracking-wider">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-zinc-400">
              <li>Indiranagar 100 Ft Rd, Bengaluru</li>
              <li>+91XXXXXXXXX</li>
              <li>contact@ironcorefitness.com</li>
              <li className="pt-2 text-[#E11D48] font-bold">Member Access: 24/7/365</li>
            </ul>
          </div>

        </div>

        {/* Agency Freelance Showcase Banner */}
        <div className="mb-8 p-4 rounded-2xl bg-gradient-to-r from-zinc-900 via-[#111] to-zinc-900 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#E11D48]/20 text-[#E11D48]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white text-xs block">
                ₹25,000+ Agency Grade Website Demo
              </span>
              <span className="text-[11px] text-zinc-400">
                Turnkey design template built to get maximum enquiries for gym owners.
              </span>
            </div>
          </div>

          <button
            onClick={onOpenFreeTrial}
            className="px-4 py-2 rounded-xl bg-[#E11D48] text-white text-xs font-bold uppercase tracking-wider red-glow shrink-0 cursor-pointer"
          >
            Claim Demo Pass
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>© 2026 IRONCORE FITNESS. All Rights Reserved. Designed for high conversion.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#E11D48]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
