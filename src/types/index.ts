export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubLink: 
  | string 
  | {
      frontend?: string;
      backend?: string;
    };
  demoLink?: string;
  technologies: string[];
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
}

export interface Technology {
  name: string;
  category?: string;
  icon: string;
}

export interface ContactInfo {
  platform: string;
  username: string;
  link: string;
  icon: string;
}