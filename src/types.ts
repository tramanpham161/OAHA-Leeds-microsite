export interface WardData {
  id: string;
  name: string;
  focus: string;
  initiative: string;
  metric: string;
  metricLabel: string;
  tags: string[];
  description: string;
}

export interface PillarData {
  id: string;
  title: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface Inquiry {
  name: string;
  email: string;
  role: 'young_person' | 'employer' | 'funder' | 'other';
  message: string;
}
