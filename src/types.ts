export interface Program {
  id: string;
  title: string;
  category: 'strength' | 'fat-loss' | 'muscle' | 'personal' | 'conditioning';
  description: string;
  intensity: 'Moderate' | 'High' | 'Extreme';
  duration: string;
  image: string;
  features: string[];
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialization: string;
  bio: string;
  image: string;
  certifications: string[];
  socials: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface Transformation {
  id: string;
  name: string;
  title: string;
  beforeImg: string;
  afterImg: string;
  weightLost: string;
  duration: string;
  program: string;
  quote: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  review: string;
  verified: boolean;
  achievement: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'equipment' | 'sessions' | 'recovery' | 'interior';
  image: string;
  aspect: 'square' | 'tall' | 'wide';
}
