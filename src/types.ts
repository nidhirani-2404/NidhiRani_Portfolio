/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SkillItem {
  name: string;
  level: number; // 0-100 percentage
  category: 'programming' | 'frontend' | 'backend' | 'database' | 'tools' | 'ai_ml';
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  techStack: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  demoUrl?: string; // or simulated demo triggering
  githubUrl: string;
  category: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  achievements: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  branch?: string;
  score: string;
  period: string;
  details?: string;
}

export interface CodingProfileItem {
  name: 'LeetCode' | 'GeeksforGeeks' | 'GitHub' | 'LinkedIn';
  username: string;
  stats: { label: string; value: string | number }[];
  accentColor: string;
  url: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credential?: string;
  link?: string;
  category: 'cloud' | 'development' | 'algorithms' | 'other';
  imagePlaceholder?: string;
}

export interface DocumentItem {
  id: string;
  name: string;
  description: string;
  type: 'pdf' | 'jpg' | 'doc';
  size: string;
  fileUrl: string;
  previewType: 'resume' | 'gradesheet' | 'class_x' | 'generic';
}

export interface SemesterRecord {
  semester: string;
  semName: string;
  sgpa: number;
  cgpa: number;
  totalCredits: number;
}

export interface SubjectScore {
  code: string;
  name: string;
  grade: string;
  credit: number;
}

export interface RecruiterMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
