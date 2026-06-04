export interface DocumentItem {
  id: string;
  name: string;
  category: 'Resume' | 'Grade Sheets' | 'Certificates';
  description: string;
  fileSize: string;
  fileType: 'PDF' | 'External';
  downloadUrl: string;
  previewContent?: string;
}

export const documentsData: DocumentItem[] = [
  {
    id: 'resume',
    name: "Professional Resume",
    category: 'Resume',
    description: 'B.Tech in Electronics and Communication Engineering from IIT (ISM) Dhanbad (CGPA: 7.92). Software Engineering Intern at Zipr Links. Experienced in React, Node, and SQL.',
    fileSize: 'Google Drive',
    fileType: 'External',
    downloadUrl: 'https://drive.google.com/file/d/1R8zH5_Je0JHVxIDUK4FYWY8c7ixpL9GR/view?usp=sharing',
    previewContent: 'Nidhi Rani • B.Tech Electronics and Communication Engineering • IIT (ISM) Dhanbad (7.92 CGPA) • Software Developer Intern @ Zipr Links • Projects: Job-Portal, Streamify-Chatapp.'
  },
  {
    id: 'iitism-gradesheet',
    name: "IIT (ISM) Dhanbad Academic Grade Sheet",
    category: 'Grade Sheets',
    description: 'Provisional B.Tech semester transcripts detailing excellent grades in C++, DSA, Systems, and an overall current CGPA of 7.93.',
    fileSize: 'Google Drive',
    fileType: 'External',
    downloadUrl: 'https://drive.google.com/file/d/1FpRwNbgEJqKJVlw3Cn9aSYbHwVTIOm_o/view?usp=sharing',
    previewContent: 'Official provisional B.Tech ECE grade transcript. Completed semesters including Monsoon/Winter terms with 7.93 cumulative CGPA.'
  },
  {
    id: 'cbse-xii-certificate',
    name: "CBSE Class XII Grade Sheet",
    category: 'Grade Sheets',
    description: 'Higher Secondary School Certificate (Class XII) with a score of 89.6% overall.',
    fileSize: 'Google Drive',
    fileType: 'External',
    downloadUrl: 'https://drive.google.com/file/d/1mWeU064BYpzOyFxCTrzl0ecpNqJ3o822/view?usp=sharing',
    previewContent: 'CBSE Senior School Certificate Examination (Class XII). Total Score: 89.6% aggregate.'
  },
  {
    id: 'cbse-x-marksheet',
    name: "CBSE Class X Marks Sheet",
    category: 'Grade Sheets',
    description: 'Secondary School Examination transcript containing 93.0% overall score with 99 in Mathematics and 97 in Science.',
    fileSize: 'Google Drive',
    fileType: 'External',
    downloadUrl: 'https://drive.google.com/file/d/1efBsHD53H9xnOYBFMIfQDFkj0m2P1FME/view?usp=sharing',
    previewContent: 'CBSE Secondary Board Exam Mark Sheet (Class X). Total Score: 465/500 (93.0%) • Highlight: 99/100 in Mathematics, 97/100 in Science.'
  },
  {
    id: 'hackerrank-sql-cert',
    name: "HackerRank SQL (Advanced) Certification",
    category: 'Certificates',
    description: 'Official credential verifying expertise in advanced SQL querying, relational patterns, and data manipulation under HackerRank (ID: CD249100571A).',
    fileSize: '1.4 KB',
    fileType: 'PDF',
    downloadUrl: '/documents/HackerRank_SQL_Advanced.pdf',
    previewContent: 'HackerRank Certificate of Accomplishment: SQL (Advanced). Awarded to Nidhi Rani on May 20, 2026. Verification ID: CD249100571A.'
  }
];
