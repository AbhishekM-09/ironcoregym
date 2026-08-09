import { Program, Trainer, Transformation, PricingPlan, Testimonial, GalleryItem } from '../types';

export const HERO_STATS = [
  { value: '500+', label: 'Active Members' },
  { value: '25+', label: 'Expert Trainers' },
  { value: '10+', label: 'Years Experience' },
  { value: '98%', label: 'Transformation Rate' },
];

export const WHY_US_FEATURES = [
  {
    icon: 'Dumbbell',
    title: 'Modern Equipment',
    description: 'State-of-the-art biomechanical resistance machinery, competition plates, and imported heavy dumbbell sets up to 70kg.',
  },
  {
    icon: 'Award',
    title: 'Certified Trainers',
    description: 'REPS Level 3 & CSCS certified coaches dedicated to personalizing your form, safety, and rapid physiological progress.',
  },
  {
    icon: 'UserCheck',
    title: 'Personal Training',
    description: 'Tailored 1-on-1 coaching protocols designed specifically around your body type, metabolic baseline, and lifestyle.',
  },
  {
    icon: 'Apple',
    title: 'Nutrition Guidance',
    description: 'Custom macro calculations, structured meal plan blueprints, and weekly body composition scan reviews.',
  },
  {
    icon: 'Clock',
    title: '24/7 Access',
    description: 'Biometric keyless entry 365 days a year so you can train on your schedule, early morning or late midnight.',
  },
  {
    icon: 'Flame',
    title: 'Recovery Zone',
    description: 'Infrared detox saunas, ice plunge tubs, and Theragun percussion lounge for maximum muscle recovery.',
  },
];

export const PROGRAMS: Program[] = [
  {
    id: 'weight-training',
    title: 'Weight Training',
    category: 'strength',
    description: 'Master compound lifts, progressive overload mechanics, and structural muscle strength under elite guidance.',
    intensity: 'High',
    duration: '60 Mins / Session',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    features: ['Powerlifting Racks', 'Olympic Weightlifting Platforms', 'Form Calibration', 'Strength Milestones Tracked'],
  },
  {
    id: 'fat-loss',
    title: 'Fat Loss Program',
    category: 'fat-loss',
    description: 'High-intensity metabolic conditioning engineered to burn visceral body fat while protecting lean tissue.',
    intensity: 'Extreme',
    duration: '45 Mins / Session',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=800&q=80',
    features: ['HIIT Circuits', 'Heart Rate Zone Tracking', 'Thermogenic Conditioning', 'Weekly Scan Analysis'],
  },
  {
    id: 'muscle-building',
    title: 'Muscle Building',
    category: 'muscle',
    description: 'Hypertrophy-focused split routines tailored for maximal muscle volume, symmetry, and aesthetic density.',
    intensity: 'High',
    duration: '75 Mins / Session',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
    features: ['Targeted Isolation Sets', 'Time-Under-Tension Protocols', 'Hypertrophy Periodization', 'Protein Synthesis Meal Plan'],
  },
  {
    id: 'personal-training',
    title: 'Personal Training',
    category: 'personal',
    description: 'Private 1-on-1 dedicated coaching with custom biometric programming, posture correction, and constant accountability.',
    intensity: 'High',
    duration: '60 Mins / Session',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    features: ['1-on-1 Coach Ratio', 'Custom Biometric App Logging', 'Posture & Mobility Fixes', 'Guaranteed Target Metrics'],
  },
  {
    id: 'cross-training',
    title: 'Cross Training',
    category: 'conditioning',
    description: 'Dynamic functional strength training blending gymnastics, plyometrics, rowers, and kettlebell conditioning.',
    intensity: 'Extreme',
    duration: '50 Mins / Session',
    image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=800&q=80',
    features: ['Functional Box Arena', 'Agility & Endurance Drills', 'Group Energy Workouts', 'Full Body Athleticism'],
  },
  {
    id: 'strength-conditioning',
    title: 'Strength Conditioning',
    category: 'strength',
    description: 'Heavy sled pushes, battle ropes, landmines, and explosive power work built for serious fitness athletes.',
    intensity: 'Extreme',
    duration: '60 Mins / Session',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80',
    features: ['Sled Tracks & Turf', 'Explosive Power Drills', 'VO2 Max Boost', 'Injury Resistance Training'],
  },
];

export const TRAINERS: Trainer[] = [
  {
    id: 'alex-johnson',
    name: 'Alex Johnson',
    role: 'Head Fitness Coach',
    experience: '12+ Years Exp',
    specialization: 'Hypertrophy & Powerlifting',
    bio: 'Former national bodybuilding champion specializing in high-intensity hypertrophy, strength mechanics, and physique transformation.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80',
    certifications: ['CSCS Master Coach', 'REPS Level 4 Strength Specialist', 'ISSA Nutrition Master'],
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'sarah-williams',
    name: 'Sarah Williams',
    role: 'Nutrition & Body Comp Expert',
    experience: '8+ Years Exp',
    specialization: 'Metabolic Health & Fat Loss',
    bio: 'Precision nutritionist focused on sustainable body composition changes, hormonal optimization, and rapid fat loss protocols.',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80',
    certifications: ['Precision Nutrition Level 2', 'Sports Clinical Dietitian', 'HIIT Master Instructor'],
    socials: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'mike-anderson',
    name: 'Mike Anderson',
    role: 'Strength & Conditioning Specialist',
    experience: '10+ Years Exp',
    specialization: 'Athletic Power & Mobility',
    bio: 'Ex-professional athlete coaching high-performance strength, speed development, and injury prevention for athletes & executives.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    certifications: ['NSCA-CSCS Certified', 'Functional Movement Screen (FMS)', 'USA Weightlifting L2'],
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
    },
  },
];

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: 'trans-1',
    name: 'Rohan Mehta',
    title: 'Lost 18kg in 90 Days',
    beforeImg: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80',
    afterImg: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80',
    weightLost: '18 kg Lost',
    duration: '90 Days',
    program: 'Fat Loss & HIIT Protocol',
    quote: 'IronCore completely altered my mindset. The trainers held me accountable every single day, and the facility atmosphere is unmatched!',
  },
  {
    id: 'trans-2',
    name: 'Ananya Sharma',
    title: 'Gained 6kg Lean Muscle',
    beforeImg: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
    afterImg: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=600&q=80',
    weightLost: '+6 kg Muscle',
    duration: '12 Weeks',
    program: 'Hypertrophy & Custom Diet',
    quote: 'I was always underweight and lacked stamina. Within 3 months at IronCore, my energy quadrupled and I gained sculpted strength.',
  },
  {
    id: 'trans-3',
    name: 'Vikram Patel',
    title: 'Body Fat: 28% → 12%',
    beforeImg: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=600&q=80',
    afterImg: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80',
    weightLost: '16% Fat Shred',
    duration: '4 Months',
    program: 'Personal Training VIP',
    quote: 'The 1-on-1 personal coaching and structured nutrition plan transformed not just my abs, but my entire confidence in business meetings.',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'STARTER',
    monthlyPrice: 999,
    annualPrice: 799,
    description: 'Perfect for beginners looking to access premium equipment during standard hours.',
    isPopular: false,
    features: [
      'Full Gym Floor Access',
      'Standard Biomechanical Equipment',
      '2 Group Fitness Sessions / Month',
      'Locker & Shower Facilities',
      'IronCore Mobile App Access',
    ],
    ctaText: 'Choose Starter',
  },
  {
    id: 'popular',
    name: 'POPULAR',
    monthlyPrice: 1999,
    annualPrice: 1599,
    description: 'Our most sought-after plan with 24/7 unlimited access, trainer guidance, & customized diet.',
    isPopular: true,
    features: [
      '24/7 Unlimited Gym Access',
      'Personal Trainer Initial Assessment',
      'Customized Monthly Nutrition Plan',
      'Unlimited Group Fitness Classes',
      'Free Monthly Guest Pass (1/month)',
      'Sauna & Steam Lounge Access',
      'InBody Composition Scans (Monthly)',
    ],
    ctaText: 'Get Popular Access',
  },
  {
    id: 'premium',
    name: 'PREMIUM VIP',
    monthlyPrice: 3999,
    annualPrice: 3199,
    description: 'The ultimate elite experience with dedicated 1-on-1 personal training and priority perks.',
    isPopular: false,
    features: [
      'Dedicated 1-on-1 Personal Trainer (8 sessions/mo)',
      'Weekly Custom Macro & Meal Revisions',
      'Full VIP Sauna, Ice Plunge & Massage Lounge',
      'Bi-weekly InBody 3D Scans',
      'Priority Locker & Free Towel Service',
      'Supplement Stack Consultations',
      '24/7 Direct WhatsApp Coach Access',
    ],
    ctaText: 'Claim VIP Membership',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Karan Kapoor',
    role: 'Tech Executive & Member',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    review: 'IronCore is light years ahead of ordinary commercial gyms. The equipment precision, the dark luxury aesthetic, and the personal trainer attention make every workout an invigorating experience.',
    verified: true,
    achievement: 'Lost 14kg in 60 Days',
  },
  {
    id: 'test-2',
    name: 'Sneha Roy',
    role: 'Corporate Lawyer',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    review: 'As someone with a crazy 60-hour work week, 24/7 keycard access and Sarah’s targeted nutrition program kept me on track without burning out. Best investment in myself ever!',
    verified: true,
    achievement: 'Gained Core Strength & Posture Fix',
  },
  {
    id: 'test-3',
    name: 'Aman Deep',
    role: 'Competitive Athlete',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    review: 'The turf, the powerlifting platforms, and the recovery saunas are top tier. If you are serious about your physical evolution, IronCore is the only gym that delivers ₹25,000+ agency quality standards.',
    verified: true,
    achievement: 'Squat PR Increased by 45kg',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Heavy Free Weight Zone',
    category: 'equipment',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
    aspect: 'wide',
  },
  {
    id: 'gal-2',
    title: 'Functional Turf & Sled Track',
    category: 'sessions',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    aspect: 'tall',
  },
  {
    id: 'gal-3',
    title: 'Luxury Infrared Sauna',
    category: 'recovery',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    aspect: 'square',
  },
  {
    id: 'gal-4',
    title: 'IronCore Main Gym Floor',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1000&q=80',
    aspect: 'wide',
  },
  {
    id: 'gal-5',
    title: 'Personalized Coaching Session',
    category: 'sessions',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    aspect: 'tall',
  },
  {
    id: 'gal-6',
    title: 'Biomechanical Cables & Pulley',
    category: 'equipment',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
    aspect: 'square',
  },
];

export const FAQ_LIST = [
  {
    question: 'What are the gym operating hours?',
    answer: 'IronCore Fitness operates 24/7, 365 days a year for Popular and Premium VIP members using secure biometric access. Front desk & staff coaching hours are 6:00 AM to 10:00 PM daily.',
  },
  {
    question: 'Is personal training included in the membership?',
    answer: 'Popular plans include an initial personal training evaluation and custom diet routine. Premium VIP plans include dedicated 1-on-1 personal coaching sessions every week.',
  },
  {
    question: 'Can I claim a free trial before joining?',
    answer: 'Yes! We offer a complimentary 3-Day VIP Pass that gives full access to our gym floor, group classes, and a 15-minute consultation with a master coach.',
  },
  {
    question: 'What is the refund or membership pause policy?',
    answer: 'We allow up to 60 days of membership freeze per year for medical reasons or travel at zero penalty cost.',
  },
];
