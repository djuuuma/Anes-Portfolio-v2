import { Profile, Project, Venture, Milestone } from '../types/portfolio';

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
  { name: 'Dr. SK Ordinacija', image: '/work/dr-sk.webp', kind: 'Dental clinic', year: '2024', href: 'https://dr-sk-ordinacija.vercel.app/' },
  { name: 'Foto Đumišić', image: '/work/foto-djumisic.webp', kind: 'Photo studio', year: '2024', href: 'https://foto-djumisic-v2.vercel.app/' },
  { name: 'MSN Design', image: '/work/msn-design.webp', kind: 'Print on glass & ceramics', year: '2024', href: 'https://msn-design.vercel.app/' },
  { name: 'Zrno', image: '/work/zrno.webp', kind: 'Café menu', year: '2023', href: 'https://zrno-online-menu.vercel.app/' },
  { name: 'Guerilla Intel', image: '/work/guerilla-intel.webp', kind: 'Game reference tool', year: '2023', href: 'https://smokovi-za-kanter.vercel.app/' },
];

export const ventures: Venture[] = [
  {
    name: 'Mreza Studio',
    year: '2025',
    partners: 'with Benjamin',
    role: 'Co-founder',
    line: 'Websites for businesses that care how they look and load.',
    href: 'https://mrezastudio.com',
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
  { year: '2023', text: 'First paid websites: a menu for Zrno and Guerilla Intel.' },
  { year: '2024', text: 'Sites for a dental clinic, a photo studio and a print shop.' },
  { year: '2025', text: 'Started Mreza Studio with Benjamin.' },
  { year: '2026', text: 'Started Metrika with James and Edhem.' },
];
