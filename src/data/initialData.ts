import { Profile, Project, SideProject, Venture, Milestone } from '../types/portfolio';

export const profile: Profile = {
  name: 'ANES',
  fullName: 'Anes Đumišić',
  location: 'Sarajevo, Bosnia and Herzegovina',
  email: 'djumisic.anes@gmail.com',
  intro: [
    'I study computer science in Sarajevo and build things for the web.',
    'With Benjamin I run Mreza Studio, where we design and build websites. With James and Edhem I run Metrika, where we do marketing you can measure.',
  ],
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anes-djumisic/' },
    { label: 'GitHub', href: 'https://github.com/djuuuma' },
  ],
};

export const projects: Project[] = [
  {
    name: 'Auto Vodič',
    image: '/work/autovodic.webp',
    kind: 'Lead-gen funnel & ads',
    year: '2026',
    href: 'https://www.autovodic.ba/',
    results: [
      { value: '1.39 BAM', label: 'per lead, cold campaign' },
      { value: '2.98 BAM', label: 'per qualified lead, warm campaign' },
    ],
  },
  { name: 'Dr. Sanela Kapić', image: '/work/dr-sk.webp', kind: 'Dental clinic', year: '2024', href: 'https://dr-sk-ordinacija.vercel.app/' },
  { name: 'Foto Đumišić', image: '/work/foto-djumisic.webp', kind: 'Photo studio', year: '2024', href: 'https://foto-djumisic-v2.vercel.app/' },
  { name: 'MSN Design', image: '/work/msn-design.webp', kind: 'Print on glass & ceramics', year: '2024', href: 'https://msn-design.vercel.app/' },
  { name: 'Zrno', image: '/work/zrno.webp', kind: 'Online café menu', year: '2023', href: 'https://zrno-online-menu.vercel.app/' },
];

export const sideProjects: SideProject[] = [
  {
    name: 'Study Timer',
    line: 'Tracks study sessions by subject. Works offline, installs to the home screen, in English and Bosnian.',
    year: '2026',
    href: 'https://djuuuma.github.io/study-timer/',
    repo: 'https://github.com/djuuuma/study-timer',
  },
  {
    name: 'Guerilla Intel',
    line: 'A quick reference tool for players of a game.',
    year: '2023',
    href: 'https://smokovi-za-kanter.vercel.app/',
  },
];

export const ventures: Venture[] = [
  {
    name: 'Mreza Studio',
    year: '2025',
    partners: 'with Benjamin',
    role: 'Co-founder',
    line: 'Websites for businesses that care how they look and load.',
    href: 'https://mreza-studio-master.vercel.app/?lang=bs',
  },
  {
    name: 'Metrika',
    year: '2026',
    partners: 'with James & Edhem',
    role: 'Co-founder',
    line: 'Ads, landing pages and tracking, judged by what they bring in.',
    href: 'https://metrika.agency',
  },
];

export const milestones: Milestone[] = [
  { year: '2022', text: 'Started computer science. Handled inventory and data at FEF Export Import.' },
  { year: '2023', text: 'First paid website: an online menu for Zrno. Built Guerilla Intel on the side.' },
  { year: '2024', text: 'Sites for a dental clinic, a photo studio and a print shop.' },
  { year: '2025', text: 'Started Mreza Studio with Benjamin.' },
  { year: '2026', text: 'Started Metrika with James and Edhem.' },
];
