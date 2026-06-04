export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Languages' | 'Tools' | 'AI & Cloud';
}

export const skillsData: Skill[] = [
  // Frontend
  { name: 'React.js', category: 'Frontend' },
  { name: 'Redux', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'ShadCN', category: 'Frontend' },
  { name: 'HTML', category: 'Frontend' },
  { name: 'CSS', category: 'Frontend' },

  // Backend
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'RESTful APIs', category: 'Backend' },
  { name: 'JWT', category: 'Backend' },

  // Database
  { name: 'MongoDB', category: 'Database' },
  { name: 'MySQL', category: 'Database' },

  // Languages
  { name: 'C++', category: 'Languages' },
  { name: 'Python', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'SQL', category: 'Languages' },

  // Tools
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'Postman', category: 'Tools' },
  { name: 'VS Code', category: 'Tools' },
  { name: 'OOP', category: 'Tools' },
  { name: 'DSA', category: 'Tools' },
  { name: 'MS Excel', category: 'Tools' },

  // AI & Cloud
  { name: 'Machine Learning basics', category: 'AI & Cloud' },
  { name: 'NumPy', category: 'AI & Cloud' },
  { name: 'Pandas', category: 'AI & Cloud' },
  { name: 'AWS basics', category: 'AI & Cloud' },
  { name: 'Power BI', category: 'AI & Cloud' }
];
