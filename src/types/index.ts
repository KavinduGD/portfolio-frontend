export interface Project {
  projectID: string;
  projectName: string;
  projectDescription: string;
  startedDate: string;
  technologies: Technology[];
  projectImageUrls: string[];
  links: { linkName: string; link: string }[];
  architectureImageUrls: { diagramName: string; link: string }[];
  architectureDescription: string;
  tags: string[];
  score: number;
}

export interface Skill {
  skill: string;
  description: string;
  imageUrl: string;
}

export interface Technology {
  technology: string;
  level: number;
  icon: string;
  type: string;
}

export interface User {
  fullName: string;
  shortName: string;
  about: string;
  age: number;
  address: string;
  Languages: string[];
  email: string;
  linkedIn: string;
  github: string;
  phone: string;
  jobTitle: string;
  education: {
    institution: string;
    location: string;
    degree: string;
    startDate: string;
    endDate: string;
    results: string;
  }[];
}
