import { UserProfile, VentureItem, TimelineMilestone } from '../types/portfolio';

export const initialProfile: UserProfile = {
  name: 'ANES',
  title: 'Computer Science Student, Agency Founder & Entrepreneur',
  subtitles: ['COMPUTER SCIENCE', 'AGENCY OWNER', 'TECH ENTREPRENEUR'],
  bioLead:
    'Operating at the convergence of algorithmic engineering and modern enterprise execution. Building scalable digital systems and high-impact agency operations.',
  bioStory: [
    'My journey started with foundational computer science — dissecting algorithmic efficiency, distributed computing, and software architectures. While mastering the technical foundations in academia, I recognized that code is greatest when coupled with commercial leverage and high-ticket execution.',
    'I founded my digital agency to bridge the divide between deep technical craftsmanship and enterprise client growth. Today, we architect bespoke digital infrastructure, AI-powered automation workflows, and brand platforms for high-growth companies.',
    'Balancing demanding computer science studies with running a multi-venture business has instilled an obsession with operating discipline, first-principles problem solving, and relentless execution.',
  ],
  heroBackgroundMode: 'custom-url',
  customHeroUrl: '/anes-sarajevo.jpg',
  contactEmail: 'anes@vancestudio.io',
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
    agencyUrl: 'https://vancestudio.io',
  },
  metrics: [
    {
      label: 'Client Revenue Generated',
      value: '$3.4M+',
      description: 'Measurable commercial pipeline delivered across client engagements',
    },
    {
      label: 'Production Systems Shipped',
      value: '28+',
      description: 'Full-stack applications, custom engines, and agency platforms',
    },
    {
      label: 'Active Enterprise Clients',
      value: '14',
      description: 'Retained partners across North America and Europe',
    },
    {
      label: 'Academic CS Focus',
      value: 'Systems & AI',
      description: 'Distributed architectures, algorithmic optimization, and data structures',
    },
  ],
};

export const initialVentures: VentureItem[] = [
  {
    id: 'agency-flagship',
    name: 'Anes Digital Agency',
    tagline: 'High-Ticket Digital Engineering & Growth Infrastructure',
    category: 'agency',
    role: 'Founder & Managing Director',
    timeline: '2023 — Present',
    status: 'Active / Scaling',
    keyMetric: {
      label: 'Avg. Client Pipeline Lift',
      value: '+185%',
    },
    overview:
      'A boutique digital agency partnering with ambitious tech founders and enterprise leaders. We engineer high-converting web applications, bespoke design systems, and automated client acquisition funnels that command market authority.',
    deliverables: [
      'Custom React/TypeScript enterprise web platforms',
      'High-conversion UI/UX design systems with motion architecture',
      'Automated CRM & data pipeline integrations',
      'End-to-end technical optimization and performance audits',
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    featuredLink: 'https://vancestudio.io',
    accentColor: '#10b981',
  },
  {
    id: 'software-core',
    name: 'Synthetix Cloud Engine',
    tagline: 'Automated Client Workflow & Intelligence Platform for Agencies',
    category: 'software',
    role: 'Creator & Lead Architect',
    timeline: '2024 — Present',
    status: 'In Production',
    keyMetric: {
      label: 'Hours Saved per Client / Mo',
      value: '120+ hrs',
    },
    overview:
      'Born from internal operational bottlenecks at our agency, Synthetix is a modular software platform that orchestrates client onboarding, asset verification, and live reporting dashboards with zero manual friction.',
    deliverables: [
      'Real-time client portal with automated milestone tracking',
      'Automated asset intake and validation pipeline',
      'Webhooks and microservice integrations for billing and analytics',
      'Role-based access control and encrypted file distribution',
    ],
    techStack: ['TypeScript', 'Express', 'Redis', 'Docker', 'Tailwind CSS', 'REST / WebSockets'],
    featuredLink: 'https://synthetix.io',
    accentColor: '#60a5fa',
  },
  {
    id: 'advisory-ventures',
    name: 'Alpha Horizon Syndicate',
    tagline: 'Strategic Angel Investments & Technical Advisory for Early-Stage Startups',
    category: 'advisory',
    role: 'Managing Partner & Advisor',
    timeline: '2025 — Present',
    status: 'Active Portfolio',
    keyMetric: {
      label: 'Portfolio Companies Backed',
      value: '6 Startups',
    },
    overview:
      'Advising early-stage technical founders on software architecture, hiring senior talent, and structuring high-ticket go-to-market motions.',
    deliverables: [
      'Technical architecture stress testing and security reviews',
      'Product-led growth framework implementation',
      'Agency partnership network access and early client introductions',
    ],
    techStack: ['Architecture Strategy', 'Venture Due Diligence', 'GTM Engineering'],
    featuredLink: 'https://alphahorizon.vc',
    accentColor: '#34d399',
  },
];

export const initialMilestones: TimelineMilestone[] = [
  {
    year: '2022',
    phase: 'Foundational Rigor',
    title: 'Computer Science & Systems Architecture',
    category: 'academics',
    description:
      'Immersed deeply in data structures, algorithms, discrete mathematics, and computer systems. Developed a relentless standard for clean abstraction, performance budgets, and algorithmic thinking.',
    keyLearnings: [
      'Algorithmic complexity analysis (Big-O optimization)',
      'Memory management and low-level compute principles',
      'System design patterns for distributed scalability',
    ],
    metrics: 'Ranked Top 5% in University Algorithms Cohort',
  },
  {
    year: '2023',
    phase: 'Commercial Validation',
    title: 'First High-Ticket Clients & Agency Inception',
    category: 'agency',
    description:
      'Transitioned from building student projects to solving high-stakes commercial engineering problems for businesses. Identified an urgent market gap for software engineers who truly understand client acquisition and luxury brand positioning.',
    keyLearnings: [
      'Value-based pricing vs. billable hourly trap',
      'Client relationship governance and expectation alignment',
      'Rapid prototype-to-production deployment cycles',
    ],
    metrics: 'First $25,000+ Enterprise Contract Delivered',
  },
  {
    year: '2024',
    phase: 'Scale & Team Building',
    title: 'Formalizing the Agency & Scaling Retainers',
    category: 'agency',
    description:
      'Incorporated the digital agency, hired specialized UI designers and junior developers, and systematized delivery workflows into reproducible client engines.',
    keyLearnings: [
      'Standard Operating Procedures (SOPs) for development quality control',
      'Delegating operational execution while maintaining design fidelity',
      'Client retention mechanics and high-margin recurring retainers',
    ],
    metrics: '7-Figure Run Rate Pipeline Reached',
  },
  {
    year: '2025 — Present',
    phase: 'Expansion & Synergy',
    title: 'Proprietary Software & Senior Academic Capstone',
    category: 'software',
    description:
      'Completing senior computer science studies while deploying proprietary software products and expanding strategic investment advisory. Operating with the rare dual-advantage of engineering depth and commercial velocity.',
    keyLearnings: [
      'Building defensible software IP with agency cash flow',
      'Time-blocking extreme deep work sessions for academics and leadership',
      'Long-term compound leverage across code and equity',
    ],
    metrics: 'Managing 14 Retained Enterprise Clients & Senior CS Thesis',
  },
];
