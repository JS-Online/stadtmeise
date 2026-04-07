export interface ResumeEntry {
  period: string;
  headline: string;
  subline: string;
  location: string;
  description: string;
  accentColor?: 'primary' | 'secondary';
  badge1?: string;
  badge2?: string;
}

export interface ProjectEntry {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
}
