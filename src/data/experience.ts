export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

export const experienceData: Experience[] = [
  {
    role: 'Software Engineering Intern',
    company: 'Zipr Links Pvt. Limited',
    period: 'May 2025 – July 2025',
    location: 'Remote',
    highlights: [
      'Engineered a flight-seat selection system with real-time visualization, pricing algorithms that adjusted fares up to 15%, and secure booking workflows, improving booking completion rate by 30%.',
      'Designed a Form.io web app with real-time validation, input sanitization, and automated JSON-schema generation, cutting manual form-creation effort by 40% and reducing input errors by 20%.',
      'Delivered all project milestones within 6 weeks and awarded an Internship Certificate by Zipr Links Pvt. Limited.'
    ]
  }
];
