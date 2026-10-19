import { UserProfile, VentureItem, TimelineMilestone } from '../types/portfolio';

export const initialProfile: UserProfile = {
  name: 'ANES',
  fullName: 'Anes Đumišić',
  title: 'Computer Science Student, Agency Co-Founder & Web Architect',
  subtitles: ['COMPUTER SCIENCE', 'CO-FOUNDER · MREZA STUDIO', 'CO-FOUNDER · METRIKA'],
  location: 'Sarajevo, Bosnia and Herzegovina',
  bioLead:
    'Operating at the intersection of computer science foundations, bespoke web architecture, and direct response growth. Engineering scalable systems and co-founding high-impact agency ventures.',
  bioStory: [
    'My journey started in deep academic computer science — dissecting algorithmic efficiency, data structures, and distributed software systems. Grounded in theoretical rigor, I believe software engineering reaches its peak when paired with commercial velocity and meticulous product execution.',
    'To bridge technical depth with enterprise growth, I co-founded Mreza Studio, architecting bespoke high-performance web platforms and modern Next.js/React applications, and Metrika, building direct response marketing infrastructure and analytics engines for scaling businesses.',
    'Balancing demanding computer science studies with co-founding and operating two specialized digital agencies has forged an obsession with operating discipline, first-principles problem solving, and relentless craftsmanship.',
  ],
  heroBackgroundMode: 'custom-url',
  customHeroUrl: '/anes-sarajevo.webp',
  contactEmail: 'djumisic.anes@gmail.com',
  socials: {
    github: 'https://github.com/djuuuma',
    linkedin: 'https://www.linkedin.com/in/anes-djumisic/',
    mrezaStudioUrl: 'https://mrezastudio.com',
    metrikaUrl: 'https://metrika.agency',
  },
  metrics: [
    {
      label: 'Production Projects Shipped',
      value: '6+',
      description: 'High-performance web applications, digital menus, and business platforms',
    },
    {
      label: 'Agencies Co-Founded',
      value: '2',
      description: 'Mreza Studio (Web Engineering & Design) & Metrika (Direct Response & Growth)',
    },
    {
      label: 'Years in Web & Tech',
      value: '2+',
      description: 'Designing and deploying modern frontend architectures and digital systems',
    },
    {
      label: 'Academic Focus',
      value: 'CS & AI',
      description: 'Algorithms, systems architecture, and autonomous agentic AI workflows',
    },
  ],
};

export const initialVentures: VentureItem[] = [
  {
    id: 'mreza-studio',
    name: 'Mreza Studio',
    tagline: 'Bespoke Web Development, Next.js/React Platforms & High-End Design',
    category: 'agency',
    role: 'Co-Founder & Web Architect',
    timeline: '2025 — Present',
    status: 'Active / Scaling',
    shortDescription:
      'In 2025, Anes and Benjamin founded Mreza Studio, a web development agency specializing in bespoke Next.js and React web platforms, high-end design, and scalable digital solutions for ambitious businesses.',
    keyMetric: {
      label: 'Client Platforms Shipped',
      value: '5+ Live',
    },
    overview:
      'A boutique digital and web engineering studio founded by Anes and Benjamin. We craft bespoke Next.js and React web platforms, high-conversion design systems, and digital menus that elevate brand prestige and client conversions.',
    deliverables: [
      'Custom Next.js & React enterprise web platforms',
      'High-converting UI/UX design systems with motion architecture',
      'Interactive digital menus & responsive web applications',
      'End-to-end performance audits, SEO & image optimization',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Vercel'],
    featuredLink: 'https://mrezastudio.com',
    accentColor: '#4a775a',
    projects: [
      {
        title: 'Dr. SK Ordinacija',
        description:
          "Patient-facing website for Dr. Sanela Kapić's dental clinic in Sarajevo, featuring services, booking inquiry, and clean medical branding.",
        link: 'https://dr-sk-ordinacija.vercel.app/',
        tags: ['Next.js', 'Dental Clinic', 'SEO', 'Web App'],
      },
      {
        title: 'Caffe Bar Zrno',
        description:
          "Interactive digital online menu & showcase for UR Caffe Bar & Slastičarnica Zrno in Sarajevo with opening hours, location, and full item catalogue.",
        link: 'https://zrno-online-menu.vercel.app/',
        tags: ['React', 'Online Menu', 'UI/UX', 'Hospitality'],
      },
      {
        title: 'Foto Đumišić V2',
        description:
          'Wedding and family photography studio website with immersive image galleries, service breakdowns, and booking inquiry workflows.',
        link: 'https://foto-djumisic-v2.vercel.app/',
        tags: ['React', 'Photography Studio', 'Portfolio', 'Image Optimization'],
      },
      {
        title: 'MSN Design',
        description:
          'Corporate business website for MSN Design Sarajevo, specializing in direct industrial print on glass & ceramics for HoReCa and B2B clients.',
        link: 'https://msn-design.vercel.app/',
        tags: ['React', 'B2B Branding', 'Industrial Print', 'Web Platform'],
      },
      {
        title: 'Guerilla Intel',
        description:
          'Competitive lineup and tactic reference web application engineered for quick tactical lookups in a focused, distraction-free UI.',
        link: 'https://smokovi-za-kanter.vercel.app/',
        tags: ['React', 'Reference Tool', 'UI/UX', 'Vercel'],
      },
    ],
  },
  {
    id: 'metrika-agency',
    name: 'Metrika',
    tagline: 'Direct Response Marketing, Growth, Analytics & Digital Infrastructure',
    category: 'agency',
    role: 'Co-Founder & Technical Growth Lead',
    timeline: '2026 — Present',
    status: 'Active / Scaling',
    shortDescription:
      'In 2026, Anes established Metrika with James and Edhem, a marketing agency specializing in direct response marketing, conversion funnel optimization, and data-driven growth infrastructure.',
    keyMetric: {
      label: 'Core Focus',
      value: 'Direct Response & ROI',
    },
    overview:
      'A performance and direct-response marketing agency established by Anes with James and Edhem, engineered to accelerate customer acquisition. We build high-converting landing funnels, configure comprehensive analytics pipelines, and execute direct-response paid campaigns that turn traffic into measurable revenue.',
    deliverables: [
      'Direct response marketing funnels & conversion-focused landing pages',
      'Analytics tracking, event attribution & conversion rate optimization (CRO)',
      'Automated client acquisition infrastructure & CRM routing',
      'Performance reporting dashboards and ROI optimization',
    ],
    techStack: ['Direct Response', 'CRO', 'Analytics Pipelines', 'Funnel Architecture', 'GTM / Meta Ads'],
    featuredLink: 'https://metrika.agency',
    accentColor: '#60a5fa',
  },
];

export const initialMilestones: TimelineMilestone[] = [
  {
    year: '2022',
    phase: 'Academics & Operations',
    title: 'Computer Science Foundations & Systems Rigor',
    category: 'academics',
    description:
      'Began university Computer Science studies, mastering data structures, algorithms, and computational theory. Simultaneously managed inventory and operational data migration at FEF Export Import in Sarajevo, building strong execution discipline.',
    keyLearnings: [
      'Algorithmic complexity, discrete mathematics & systems fundamentals',
      'Structured database and inventory logistics management at FEF Export Import',
      'Balancing demanding academic engineering with real-world business operations',
    ],
    metrics: 'CS Academic Launch & Operational Data Management',
  },
  {
    year: '2023',
    phase: 'Engineering & Freelance',
    title: 'Modern Frontend Mastery & First Client Deployments',
    category: 'software',
    description:
      'Deepened expertise in the React, Next.js, and TypeScript ecosystems. Transitioned from coursework to building production software for real businesses, shipping digital menus and specialized web tools with high visual polish.',
    keyLearnings: [
      'Scalable component architecture and design tokens in Tailwind CSS',
      'Performance optimization, image delivery, and SEO best practices',
      'Direct client requirement gathering and fast turnaround',
    ],
    metrics: 'Shipped Production Platforms (Zrno, Guerilla Intel)',
  },
  {
    year: '2024',
    phase: 'Production Scale',
    title: 'High-Fidelity Client Platforms & Studio Preparation',
    category: 'software',
    description:
      'Engineered and shipped flagship client platforms including Dr. Sanela Kapić dental clinic, Foto Đumišić photography studio, and MSN Design. Refined reusable design systems and high-converting frontend architectures.',
    keyLearnings: [
      'Multi-stakeholder delivery pipelines and client governance',
      'Image optimization and SEO strategy for commercial clients',
      'Laying the foundations for dedicated studio and agency operations',
    ],
    metrics: 'Shipped Multiple Enterprise & Clinic Platforms',
  },
  {
    year: '2025 — Present',
    phase: 'Studio Launch & Agency Expansion',
    title: 'Co-Founding Mreza Studio & Establishing Metrika',
    category: 'agency',
    description:
      'In 2025, Anes and Benjamin founded Mreza Studio, delivering bespoke web platforms and design systems. In 2026, Anes established Metrika with James and Edhem to drive direct response marketing, funnel optimization, and growth analytics.',
    keyLearnings: [
      'Founding and scaling specialized agency partnerships',
      'Direct response marketing and conversion rate optimization (CRO)',
      'Multiplying engineering velocity through autonomous agentic AI workflows',
    ],
    metrics: 'Co-Founder of Mreza Studio & Metrika',
  },
];
