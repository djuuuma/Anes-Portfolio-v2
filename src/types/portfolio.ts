export type VentureCategory = 'all' | 'agency' | 'software' | 'advisory';

export interface VentureItem {
  id: string;
  name: string;
  tagline: string;
  category: 'agency' | 'software' | 'advisory';
  role: string;
  timeline: string;
  status: string;
  keyMetric: {
    label: string;
    value: string;
  };
  overview: string;
  deliverables: string[];
  techStack: string[];
  featuredLink?: string;
  accentColor: string;
}

export interface TimelineMilestone {
  year: string;
  phase: string;
  title: string;
  category: 'academics' | 'agency' | 'software' | 'milestone';
  description: string;
  keyLearnings: string[];
  metrics?: string;
}

export interface UserProfile {
  name: string;
  title: string;
  subtitles: string[];
  bioLead: string;
  bioStory: string[];
  heroBackgroundMode: 'cinematic-canvas' | 'custom-url';
  customHeroUrl?: string;
  contactEmail: string;
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    agencyUrl: string;
  };
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  company: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  message: string;
}
