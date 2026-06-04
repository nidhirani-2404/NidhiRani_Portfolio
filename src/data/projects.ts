export interface Project {
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  demoUrl: string;
  // Allows customizing mock UI styling
  accentColor: string;
  type: 'portal' | 'chat';
}

export const projectsData: Project[] = [
  {
    title: 'Job-Portal',
    tagline: 'MERN Stack Job Placement & Verified Board',
    description: 'Developed a fully functional job portal (MERN stack) supporting 500+ job listings and 200+ student applications. Features high security integrations with dynamic user role dashboards.',
    techStack: ['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Redux', 'Tailwind CSS', 'ShadCN', 'Radix UI'],
    features: [
      'Developed a fully functional MERN job portal for 500+ job listings and 200+ student applications.',
      'Designed and deployed secure RESTful APIs with JWT authentication, cutting API response time by 20%.',
      'Built a custom Admin Dashboard to manage postings and applications, reducing admin workload by 40%.',
      'Integrated Redux for global state management, improving session persistence and reducing reload errors by 35%.'
    ],
    githubUrl: 'https://github.com/nidhirani-2404/Job-Portal',
    demoUrl: 'https://github.com/nidhirani-2404/Job-Portal',
    accentColor: '#3B82F6', // Stripe Blue
    type: 'portal'
  },
  {
    title: 'Streamify-Chatapp',
    tagline: 'Real-time Communicator Channels & Rooms',
    description: 'Engineered a full-stack chat and video calling application handling 100+ concurrent users with real-time messaging and calls, achieving low-latency performance.',
    techStack: ['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS', 'Lucide React', 'Streamify API'],
    features: [
      'Engineered a full-stack chat and video calling application handling 100+ concurrent users with real-time messaging and calls.',
      'Implemented JWT-based authentication and bcrypt hashing, reducing unauthorized access attempts by 90%.',
      'Developed friend request and notification features, increasing user engagement by 30%.',
      'Built a responsive frontend integrated with backend APIs, improving average page load speed by 25%.'
    ],
    githubUrl: 'https://github.com/nidhirani-2404/Streamify-Chatapp',
    demoUrl: 'https://github.com/nidhirani-2404/Streamify-Chatapp',
    accentColor: '#10B981', // Emerald Green
    type: 'chat'
  }
];
