export interface ArchitectureStage {
  id: string;
  name: string;
  description: string;
  detail: string;
}

export interface Metric {
  label: string;
  value: string;
  sub?: string;
}

export interface EngineeringProject {
  id: string;
  number: string;
  title: string;
  slug: string;
  year?: string;
  category:
    | 'Backend Systems'
    | 'Full-Stack Application'
    | 'Systems Engineering'
    | 'Research Project'
    | 'Machine Learning Project'
    | 'Computer Vision / 3D'
    | 'Multi-Agent Systems'
    | 'Time-Series Research';
  purpose: string;
  overview: string;
  problem: string;
  approach: string;
  implementation: string[];
  methods: string[];
  models: string[];
  datasets: string[];
  technologies: string[];
  architecture: ArchitectureStage[];
  metrics?: Metric[];
  results?: string[];
  limitations?: string[];
  futureWork?: string[];
  featured: boolean;
  researchRelevant?: boolean;
  github?: string;
  demo?: string;
  publication?: string;
  video?: string;
  reports?: ProjectLink[];
  visuals?: ProjectVisual[];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ArchiveProject {
  title: string;
  domain: string;
  technologies: string[];
  summary: string;
  details?: string[];
  implementation: string[];
  year?: string;
  github?: string;
  video?: string;
  report?: ProjectLink;
}

export type VisualAspect = 'wide' | 'landscape' | 'square' | 'portrait';

export interface ProjectVisual {
  type: 'image' | 'diagram' | 'chart';
  src?: string;
  alt: string;
  caption?: string;
  aspect?: VisualAspect;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  /** One-line summary used in condensed contexts (homepage, About). Falls back to focus[0]. */
  summary?: string;
  focus: string[];
  primary?: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  details?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  tier: 'Primary' | 'Additional study';
  group?: string;
  issued?: string;
  credentialId?: string;
}

export interface Achievement {
  title: string;
  detail: string;
}

export interface LeadershipRole {
  title: string;
  organization: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Note {
  title: string;
  summary?: string;
}

export type NoteBlock =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] };

export interface NoteArticle {
  slug: string;
  title: string;
  date: string; // ISO
  readingMins: number;
  tags: string[];
  summary: string;
  body: NoteBlock[];
}
