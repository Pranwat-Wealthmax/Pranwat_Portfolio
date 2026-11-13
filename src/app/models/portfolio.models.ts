export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  subtitle: string;
  period: string;
  category: 'management' | 'tech';
  isCurrent?: boolean;
  description: string;
  tags: string[];
}

export interface ProjectItem {
  key: string;
  category: 'security' | 'uiux';
  categoryLabel: string;
  badgeLabel: string;
  title: string;
  shortDesc: string;
  fullSummary: string;
  highlights: string[];
  tags: string[];
  githubUrl: string;
}

export interface SkillGroup {
  title: string;
  subtitle: string;
  skills: string[];
}
