export interface Project {
  id: number;
  title: string;
  image: string;
  details?: string;
  description?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  technologies: string[];
}

export interface ProjectDetailsProps {
  projectId: number;
}