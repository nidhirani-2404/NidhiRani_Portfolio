export interface Education {
  institution: string;
  degree: string;
  branch: string;
  period: string;
  scoreLabel: string;
  score: string;
  detail: string;
}

export const educationData: Education[] = [
  {
    institution: 'Indian Institute of Technology (Indian School of Mines), Dhanbad',
    degree: 'Bachelor of Technology',
    branch: 'Electronics and Communication Engineering',
    period: 'May 2026',
    scoreLabel: 'GPA',
    score: '7.92/10.00',
    detail: 'Relevant Coursework: C Programming, Data Structures and Algorithms, Digital Electronics, Signals and Systems'
  },
  {
    institution: 'Indian Public School, Hajipur',
    degree: 'Higher Secondary Examination (Class XII), CBSE Board',
    branch: 'Science',
    period: '2021',
    scoreLabel: 'Percentage',
    score: '89.6%',
    detail: 'Hajipur, Bihar. Graduated with high distinction in advanced mathematical subjects and general sciences.'
  },
  {
    institution: 'Secondary School (Class X CBSE)',
    degree: 'High School Matriculation',
    branch: 'General Science & Mathematics',
    period: '2019',
    scoreLabel: 'Percentage',
    score: '93.0%',
    detail: 'Maintained excellent academic standing, with high performance across foundational fields.'
  }
];
