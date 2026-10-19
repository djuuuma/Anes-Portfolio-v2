export type VentureCategory = 'all' | 'agency' | 'software' | 'advisory';

export interface VentureProject {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export interface VentureItem {
  id: string;
  name: string;
  tagline: string;
  category: 'agency' | 'software' | 'advisory';
  role: string;
  timeline: string;
  status: string;
  shortDescription: string;
  keyMetric?: {
    label: string;
    value: string;
  };
  overview: string;
  deliverables: string[];
  techStack: string[];
  featuredLink?: string;
  accentColor: string;
  projects?: VentureProject[];
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
  fullName: string;
  title: string;
  subtitles: string[];
  location: string;
  bioLead: string;
  bioStory: string[];
  heroBackgroundMode: 'cinematic-canvas' | 'custom-url';
  customHeroUrl?: string;
  contactEmail: string;
  socials: {
    github: string;
    linkedin: string;
    mrezaStudioUrl: string;
    metrikaUrl: string;
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
  subject: string;
  message: string;
}
