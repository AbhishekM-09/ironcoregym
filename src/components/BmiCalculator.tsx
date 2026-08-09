import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, ArrowRight, Activity, Flame, HeartPulse } from 'lucide-react';

interface BmiCalculatorProps {
  onOpenFreeTrial: () => void;
}

export default function BmiCalculator({ onOpenFreeTrial }: BmiCalculatorProps) {
  const [height, setHeight] = useState<number>(175);
  const [weight, setWeight] = useState<number>(75);
  const [age, setAge] = useState<number>(28);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [activity, setActivity] = useState<number>(1.55); // Moderate activity

  // Calculation formulas
  const heightM = height / 100;
  const bmi = parseFloat((weight / (heightM * heightM)).toFixed(1));

  // BMR Calculation (Mifflin-St Jeor Formula)
  const bmr = gender === 'male'
    ? (10 * weight) + (6.25 * height) - (5 * age) + 5
    : (10 * weight) + (6.25 * height) - (5 * age) - 161;

  const tdee = Math.round(bmr * activity);
  const targetProtein = Math.round(weight * 2.0); // 2g per kg

  const getBmiCategory = (val: number) => {
    if (val < 18.5) return { category: 'Underweight', color: 'text-blue-400', badge: 'bg-blue-500/20 text-blue-400' };
    if (val <= 24.9) return { category: 'Healthy Weight', color: 'text-emerald-400', badge: 'bg-emerald-500/20 text-emerald-400' };
    if (val <= 29.9) return { category: 'Overweight', color: 'text-amber-400', badge: 'bg-amber-500/20 text-amber-400' };
    return { category: 'Obese Range', color: 'text-rose-500', badge: 'bg-rose-500/20 text-rose-500' };
  };

  const bmiInfo = getBmiCategory(bmi);

  return (
    <section id="calculator" className="py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 mb-4"
          >
            <Calculator className="w-3.5 h-3.5 text-[#E11D48]" />
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">
              INTERACTIVE FITNESS TOOLS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight max-w-3xl"
          >
            BMI & METABOLIC <span className="text-[#E11D48]">CALCULATOR</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-2xl text-base mt-4 font-normal"
          >
            Calculate your Body Mass Index (BMI), daily calorie expenditure (TDEE), and daily protein target to kickstart your transformation.
          </motion.p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Gender toggle */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-3">
                  Gender
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setGender('male')}
                    className={`py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      gender === 'male'
                        ? 'bg-[#E11D48] text-white red-glow-sm'
                        : 'bg-white/5 text-zinc-400 hover:text-white border border-white/10'
                    }`}
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender('female')}
                    className={`py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      gender === 'female'
                        ? 'bg-[#E11D48] text-white red-glow-sm'
                        : 'bg-white/5 text-zinc-400 hover:text-white border border-white/10'
                    }`}
                  >
                    Female
                  </button>
                </div>
              </div>

              {/* Sliders: Height, Weight, Age */}
              <div className="space-y-5">
                {/* Height Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold uppercase text-zinc-400">Height</span>
                    <span className="font-display text-base font-black text-white">{height} cm</span>
                  </div>
                  <input
                    type="range"
                    min="120"
                    max="220"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="w-full accent-[#E11D48] bg-white/10 h-2 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Weight Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold uppercase text-zinc-400">Weight</span>
                    <span className="font-display text-base font-black text-white">{weight} kg</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="160"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="w-full accent-[#E11D48] bg-white/10 h-2 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Age Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold uppercase text-zinc-400">Age</span>
                    <span className="font-display text-base font-black text-white">{age} Years</span>
                  </div>
                  <input
                    type="range"
                    min="16"
                    max="80"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full accent-[#E11D48] bg-white/10 h-2 rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              {/* Activity Level selector */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-2">
                  Weekly Activity Level
                </label>
                <select
                  value={activity}
                  onChange={(e) => setActivity(Number(e.target.value))}
                  className="w-full bg-[#111111] text-white text-xs font-semibold p-3.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#E11D48]"
                >
                  <option value={1.2}>Sedentary (Little or no exercise)</option>
                  <option value={1.375}>Lightly Active (1-3 days/week exercise)</option>
                  <option value={1.55}>Moderately Active (3-5 days/week exercise)</option>
                  <option value={1.725}>Very Active (6-7 days/week hard exercise)</option>
                </select>
              </div>

            </div>
          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border-2 border-[#E11D48]/30 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#E11D48]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-zinc-400 block mb-6">
                YOUR BIOMETRIC SUMMARY
              </span>

              {/* BMI Score Box */}
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6 flex items-center justify-between">
                <div>
                  <span className="text-xs text-zinc-400 font-bold uppercase block">BMI Score</span>
                  <div className="font-display text-4xl sm:text-5xl font-black text-white mt-1">
                    {bmi}
                  </div>
                </div>
                <div className={`px-3 py-1.5 rounded-lg text-xs font-extrabold uppercase tracking-wider ${bmiInfo.badge}`}>
                  {bmiInfo.category}
                </div>
              </div>

              {/* Metabolic Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="flex items-center gap-2 text-zinc-400 mb-1">
                    <Flame className="w-4 h-4 text-[#E11D48]" />
                    <span className="text-[11px] font-bold uppercase">TDEE (Daily Cal)</span>
                  </div>
                  <span className="font-display text-2xl font-black text-white">
                    {tdee} <span className="text-xs font-normal text-zinc-400">kcal</span>
                  </span>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="flex items-center gap-2 text-zinc-400 mb-1">
                    <Activity className="w-4 h-4 text-[#E11D48]" />
                    <span className="text-[11px] font-bold uppercase">Target Protein</span>
                  </div>
                  <span className="font-display text-2xl font-black text-white">
                    {targetProtein} <span className="text-xs font-normal text-zinc-400">g/day</span>
                  </span>
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed mb-8">
                Want a custom workout & diet plan tailored precisely for your BMI and TDEE goals? Claim a free consultation with our master nutritionists.
              </p>
            </div>

            <button
              onClick={onOpenFreeTrial}
              className="w-full py-4 rounded-xl bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs font-bold uppercase tracking-wider red-glow transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-[#E11D48]/30"
            >
              <span>Get Free Custom Plan</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
