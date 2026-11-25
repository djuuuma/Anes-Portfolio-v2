export interface Profile {
  name: string;
  fullName: string;
  location: string;
  email: string;
  intro: string[];
  socials: { label: string; href: string }[];
}

export interface Project {
  name: string;
  kind: string;
  year: string;
  href: string;
  image: string;
}

export interface Venture {
  name: string;
  year: string;
  partners: string;
  role: string;
  line: string;
  href: string;
}

export interface Milestone {
  year: string;
  text: string;
}
