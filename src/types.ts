export interface EducationItem {
  id: string;
  qualification: string;
  degreeShort: string;
  institution: string;
  discipline: string;
  result: string;
  year: string;
  highlights: string[];
  iconType: 'university' | 'college' | 'school';
  status: 'Completed' | 'Graduated' | 'Undergraduate' | 'Ongoing';
}

export interface SkillCategory {
  category: 'Technical' | 'Academic & Professional' | 'Soft Skills';
  skills: {
    name: string;
    level?: string;
    icon?: string;
    tags?: string[];
    description?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  location: string;
  type: string;
  responsibilities: string[];
  technologies?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Academic & Engineering' | 'Technical & Programming';
  objective: string;
  methodology: string;
  tools: string[];
  keyOutcome: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface ResearchInterest {
  id: string;
  title: string;
  description: string;
  icon: string;
  applications: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  period: string;
  skills: string[];
  description: string;
}

export interface AwardItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
}

export interface ReferenceItem {
  id: string;
  name: string;
  designation: string;
  department: string;
  institution: string;
}
