export interface Project {
  projectID: string;
  projectName: string;
  projectDescription: string;
  startedDate: string;
  technologies: string[];
  projectImageUrls: string[];
  links: { linkName: string; link: string }[];
  architectureImageUrls: { diagramName: string; link: string }[];
  architectureDescription: string;
  tags: string[];
  score: number;
}

export interface Skill {
  skillID: string;
  skill: string;
  description: string;
  imageUrl: string;
}

export interface Technology {
  technologyID: string;
  technology: string;
  level: number;
  imageUrl: string;
  type: string;
}

export interface User {
  fullName: string;
  shortName: string;
  about: string;
  age: number;
  address: string;
  languages: string[];
  email: string;
  linkedIn: string;
  github: string;
  phone: string;
  jobTitle: string;
  education: {
    institution: string;
    location: string;
    degree: string;
    startYear: string;
    endYear: string;
    results: string;
  }[];
}

export interface ICert {
  certificateID: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialsId: string;
  ImageUrl: string;
  tags: string[];
  certificateLink: string;
  score: number;
}
