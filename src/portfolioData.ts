import { 
  SkillItem, 
  ProjectItem, 
  ExperienceItem, 
  EducationItem, 
  CodingProfileItem,
  CertificationItem,
  DocumentItem,
  SemesterRecord,
  SubjectScore
} from './types';

export interface PortfolioData {
  personalInfo: {
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    location: string;
    role: string;
    subRole: string;
    bio: string;
    roles: string[];
  };
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };
  skills: {
    categories: {
      title: string;
      accent: string;
      skills: { name: string; level: number }[];
    }[];
    radarData: { subject: string; A: number }[];
  };
  projects: {
    id: string;
    title: string;
    tagline: string;
    description: string;
    techStack: string[];
    metrics: { label: string; value: string }[];
    keyFeatures: string[];
    githubUrl: string;
  }[];
  experience: ExperienceItem[];
  education: EducationItem[];
  achievements: {
    id: string;
    title: string;
    category: string;
    description: string;
    highlight?: boolean;
  }[];
  codingProfiles: CodingProfileItem[];
  certifications: CertificationItem[];
  documents: DocumentItem[];
  academicPerformance: {
    secondarySchoolClassX: {
      year: string;
      board: string;
      school: string;
      percentage: number;
      scores: { code: string; subject: string; score: number; grade: string }[];
    };
    seniorSecondaryClassXII: {
      year: string;
      board: string;
      percentage: number;
    };
    undergraduateBTech: {
      degree: string;
      branch: string;
      institution: string;
      overallCGPA: number;
      semesters: SemesterRecord[];
      semesterGrades: Record<string, SubjectScore[]>;
    };
  };
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Nidhi Rani",
    firstName: "Nidhi",
    lastName: "Rani",
    email: "nidhirani2404@gmail.com",
    phone: "+91 9304956687",
    location: "India",
    role: "Software Developer",
    subRole: "Software Developer @ IIT (ISM) Dhanbad",
    bio: "Building scalable web applications, intelligent systems, and user-centric digital experiences with robust architectural backing.",
    roles: [
      "Software Developer",
      "Full Stack Developer",
      "AI & ML Enthusiast",
      "Systems Engineer"
    ]
  },
  socialLinks: {
    github: "https://github.com/nidhirani2404",
    linkedin: "https://linkedin.com/in/nidhi-rani-95a451255",
    email: "mailto:nidhirani2404@gmail.com"
  },
  skills: {
    categories: [
      {
        title: "Languages & Core",
        accent: "from-[#00E5FF] to-[#3B82F6]",
        skills: [
          { name: "C++", level: 90 },
          { name: "Python", level: 85 },
          { name: "JavaScript", level: 88 },
          { name: "SQL", level: 82 },
          { name: "HTML & CSS", level: 92 }
        ]
      },
      {
        title: "Frontend Engineering",
        accent: "from-[#3B82F6] to-[#8B5CF6]",
        skills: [
          { name: "React.js", level: 90 },
          { name: "Redux & State", level: 85 },
          { name: "Tailwind CSS", level: 95 },
          { name: "ShadCN UI", level: 88 }
        ]
      },
      {
        title: "Backend Development",
        accent: "from-[#8B5CF6] to-[#EC4899]",
        skills: [
          { name: "Node.js", level: 86 },
          { name: "Express.js", level: 88 },
          { name: "REST APIs", level: 90 },
          { name: "JWT Authentication", level: 85 }
        ]
      },
      {
        title: "Database Management",
        accent: "from-[#10B981] to-[#00E5FF]",
        skills: [
          { name: "MongoDB", level: 87 },
          { name: "MySQL", level: 82 }
        ]
      },
      {
        title: "AI & Data Science",
        accent: "from-[#EC4899] to-[#F59E0B]",
        skills: [
          { name: "Machine Learning", level: 80 },
          { name: "Data Analysis", level: 85 },
          { name: "Power BI", level: 78 },
          { name: "AWS Basics", level: 70 }
        ]
      },
      {
        title: "Tools & Environment",
        accent: "from-[#6B7280] to-[#111827]",
        skills: [
          { name: "Git & GitHub", level: 90 },
          { name: "Postman", level: 88 },
          { name: "VS Code", level: 92 }
        ]
      }
    ],
    radarData: [
      { subject: 'Core DSA', A: 90 },
      { subject: 'Frontend', A: 92 },
      { subject: 'Backend', A: 87 },
      { subject: 'Databases', A: 84 },
      { subject: 'AI & ML', A: 81 },
      { subject: 'Dev Tools', A: 90 }
    ]
  },
  projects: [
    {
      id: "job-portal",
      title: "Enterprise Job Portal",
      tagline: "High-Scale Applicant Tracking & Job Placement Hub",
      description: "A comprehensive full-stack ecosystem connecting companies looking for talent and college students applying for software engineer roles. It integrates robust account partitions, active dashboard charts, resume management, and validation layers.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Redux", "Tailwind CSS"],
      metrics: [
        { label: "Job Listings Active", value: "500+" },
        { label: "Submitted Applications", value: "200+" },
        { label: "Security Handshake", value: "JWT Signed" }
      ],
      keyFeatures: [
        "Multi-Role Authentication (Student, Company, Admin)",
        "Subdivision Admin Analytics dashboard",
        "Instant Resume Upload & Cloud hosting payload logs",
        "Dynamic filtering by CTC, Branch, and Location"
      ],
      githubUrl: "https://github.com/nidhirani2404"
    },
    {
      id: "streamify-chat",
      title: "Streamify Social Chat App",
      tagline: "Real-time Messaging & Streaming Platform powered by Streamify",
      description: "A lightning-fast corporate and social room communicator featuring integrated Streamify APIs for low-latency communications, modular peer-to-peer web video loops, dual notifications, status indicators, and friend request queues.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Streamify API", "Tailwind CSS"],
      metrics: [
        { label: "Concurrent Users", value: "100+" },
        { label: "Network Latency", value: "<50ms" },
        { label: "Sync Tech", value: "Streamify API" }
      ],
      keyFeatures: [
        "Real-time messaging integrated with Streamify API",
        "Integrated Mock WebRTC video and audio pipelines",
        "Live user presence tickers and notifications",
        "Secure password hashing & authentication"
      ],
      githubUrl: "https://github.com/nidhirani2404"
    }
  ],
  experience: [
    {
      id: "zipr-intern",
      role: "Software Engineering Intern",
      company: "Zipr Links Pvt. Limited",
      period: "May 2025 – July 2025",
      achievements: [
        "Built dynamic flight seat visualization systems showing interactive pricing tiers.",
        "Increased booking volume conversions by automating layout assignments via dynamic algorithms.",
        "Configured Form.io workflow processors that dropped custom form deployment times by 40%."
      ]
    }
  ],
  education: [
    {
      id: "iit-dhanbad",
      institution: "Indian Institute of Technology (ISM) Dhanbad",
      degree: "Bachelor of Technology (B.Tech)",
      branch: "Electronics & Communication Engineering",
      score: "CGPA: 7.92 / 10 (increasing trend up to 8.47 SGPA)",
      period: "2022 – 2026",
      details: "Premier technical university focusing on foundational and advanced computing theory with microprocessors & ML."
    },
    {
      id: "class-xii",
      institution: "Senior Secondary (Class XII) CBSE",
      degree: "All India Senior School Certificate Examination",
      score: "Percentage: 89.6%",
      period: "2021",
      details: "Science major focusing on Physics, Chemistry, and Mathematics."
    },
    {
      id: "class-x",
      institution: "Indian Public School, Hajipur (CBSE Class X)",
      degree: "Secondary School Examination",
      score: "Percentage: 93% (with 99% in Mathematics)",
      period: "2019",
      details: "Scored high marks across English, Science, Mathematics with an overall average of 93.0%."
    }
  ],
  achievements: [
    {
      id: "dsa-solve",
      title: "500+ DSA Solutions",
      category: "Coding Milestones",
      description: "Successfully implemented over 500 solutions in C++ and Python on LeetCode and GeeksforGeeks.",
      highlight: true
    },
    {
      id: "deployments",
      title: "Active Web Deployments",
      category: "Engineering Impact",
      description: "Implemented full-stack client dashboards with direct WebSocket support and hosted on scalable platforms.",
      highlight: true
    },
    {
      id: "iit-admission",
      title: "IIT JEE Advanced Merit",
      category: "Comp. Academics",
      description: "Cleared the highly competitive Joint Entrance Examination Advanced, leading to B.Tech ECE admission at IIT (ISM) Dhanbad."
    }
  ],
  codingProfiles: [
    {
      name: "LeetCode",
      username: "nidhirani2404",
      stats: [
        { label: "Problems Solved", value: "350+" },
        { label: "Rating Metric", value: "1540+" },
        { label: "Active Weeks", value: "12+" }
      ],
      accentColor: "#f1a02a",
      url: "https://leetcode.com/u/nidhirani2404/"
    },
    {
      name: "GeeksforGeeks",
      username: "nidhirani2404",
      stats: [
        { label: "Coding Score", value: "650+" },
        { label: "Articles Published", value: 0 },
        { label: "Problems Solved", value: "150+" }
      ],
      accentColor: "#2f8d46",
      url: "https://www.geeksforgeeks.org/user/nidhirani2404/"
    },
    {
      name: "GitHub",
      username: "nidhirani-2404",
      stats: [
        { label: "Repositories Public", value: "15+" },
        { label: "Yearly Contributions", value: "480+" },
        { label: "Main Language", value: "C++ / JS" }
      ],
      accentColor: "#00E5FF",
      url: "https://github.com/nidhirani2404"
    },
    {
      name: "LinkedIn",
      username: "nidhi-rani-95a451255",
      stats: [
        { label: "Connections Active", value: "500+" },
        { label: "Profile Views", value: "240+" },
        { label: "Industry Reach", value: "EdTech & SWE" }
      ],
      accentColor: "#8B5CF6",
      url: "https://linkedin.com/in/nidhi-rani-95a451255"
    }
  ],
  certifications: [
    {
      id: "sql-advanced",
      title: "SQL (Advanced) Certification",
      issuer: "HackerRank",
      date: "May 2026",
      credential: "cd249100571a",
      link: "https://www.hackerrank.com/certificates/cd249100571a",
      category: "other"
    },
    {
      id: "aws-practitioner",
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "February 2025",
      credential: "AWS-CCP-2025",
      link: "https://www.udemy.com/certificate/UC-bc665a5a-046d-4a62-aea4-cdfb9887ff8b/",
      category: "cloud"
    }
  ],
  documents: [
    {
      id: "resume-v2026",
      name: "Software Developer Resume",
      description: "Nidhi Rani's latest professional CV showcasing internships, B.Tech grades, projects and technical expertise.",
      type: "pdf",
      size: "240 KB",
      fileUrl: "#",
      previewType: "resume"
    },
    {
      id: "marksheet-iit",
      name: "Undergraduate Grade Sheet (IIT ISM Dhanbad)",
      description: "Official Bachelor of Technology provisional grade statement containing grades for Semesters 1 to 7.",
      type: "pdf",
      size: "420 KB",
      fileUrl: "#",
      previewType: "gradesheet"
    },
    {
      id: "class-x-cbse",
      name: "CBSE Class X Academic Certificate",
      description: "Provisional statement of marks cum certificate highlighting 99% in Mathematics and overall 93.0%.",
      type: "jpg",
      size: "310 KB",
      fileUrl: "#",
      previewType: "class_x"
    }
  ],
  academicPerformance: {
    secondarySchoolClassX: {
      year: "2019",
      board: "Central Board of Secondary Education (CBSE)",
      school: "09520-INDIAN PUBLIC SCHOOL HAJIPUR VAISHALI BIHAR",
      percentage: 93,
      scores: [
        { code: "101", subject: "ENGLISH COMM.", score: 94, grade: "A1" },
        { code: "085", subject: "HINDI COURSE-B", score: 93, grade: "A2" },
        { code: "041", subject: "MATHEMATICS", score: 99, grade: "A1" },
        { code: "086", subject: "SCIENCE", score: 97, grade: "A1" },
        { code: "087", subject: "SOCIAL SCIENCE", score: 82, grade: "B1" }
      ]
    },
    seniorSecondaryClassXII: {
      year: "2021",
      board: "Central Board of Secondary Education (CBSE)",
      percentage: 89.6
    },
    undergraduateBTech: {
      degree: "Bachelor of Technology",
      branch: "Electronics and Communication Engineering",
      institution: "Indian Institute of Technology (Indian School of Mines), Dhanbad",
      overallCGPA: 7.92,
      semesters: [
        { semester: "Sem 1", semName: "2022-2023 Monsoon", sgpa: 7.82, cgpa: 7.82, totalCredits: 55.0 },
        { semester: "Sem 2", semName: "2022-2023 Winter", sgpa: 8.10, cgpa: 7.95, totalCredits: 51.5 },
        { semester: "Sem 3", semName: "2023-2024 Monsoon", sgpa: 7.39, cgpa: 7.77, totalCredits: 51.0 },
        { semester: "Sem 4", semName: "2023-2024 Winter", sgpa: 8.13, cgpa: 7.86, totalCredits: 51.0 },
        { semester: "Sem 5", semName: "2024-2025 Monsoon", sgpa: 8.47, cgpa: 7.98, totalCredits: 51.0 },
        { semester: "Sem 6", semName: "2024-2025 Winter", sgpa: 8.46, cgpa: 8.06, totalCredits: 51.0 },
        { semester: "Sem 7", semName: "2025-2026 Monsoon", sgpa: 7.18, cgpa: 7.93, totalCredits: 51.0 }
      ],
      semesterGrades: {
        "2022-2023 Monsoon": [
          { code: "MSI101", name: "ENGINEERING ECONOMICS AND FINANCE", grade: "B+", credit: 6 },
          { code: "CEI101", name: "ENGINEERING GRAPHICS", grade: "B+", credit: 6 },
          { code: "MEI101", name: "ENGINEERING MECHANICS", grade: "B", credit: 11 },
          { code: "MCI101", name: "MATHEMATICS - I", grade: "B+", credit: 11 },
          { code: "PHI101", name: "PHYSICS", grade: "B+", credit: 9 },
          { code: "EEI101", name: "BASICS OF ELECTRICAL ENGINEERING", grade: "B", credit: 4.5 },
          { code: "ECI101", name: "BASICS OF ELECTRONICS ENGINEERING", grade: "B+", credit: 4.5 },
          { code: "EEI102", name: "ELECTRICAL ENGINEERING LAB", grade: "A", credit: 1.5 },
          { code: "ECI102", name: "ELECTRONICS ENGINEERING LAB", grade: "A", credit: 1.5 },
          { code: "CCS101", name: "CO-CURRICULAR ACTIVITY - I", grade: "S", credit: 0 },
          { code: "PHI102", name: "PHYSICS LAB", grade: "A", credit: 2 }
        ],
        "2022-2023 Winter": [
          { code: "CYI101", name: "CHEMISTRY", grade: "A", credit: 9 },
          { code: "HSI101", name: "COMMUNICATION SKILLS", grade: "B", credit: 5 },
          { code: "MEI102", name: "MANUFACTURING PROCESSES", grade: "A+", credit: 9 },
          { code: "MCI102", name: "MATHEMATICS - II", grade: "C+", credit: 11 },
          { code: "CSI101", name: "COMPUTER PROGRAMMING", grade: "B", credit: 4 },
          { code: "CSI102", name: "COMPUTER PROGRAMMING LAB", grade: "B+", credit: 1 },
          { code: "GLI101", name: "EARTH SCIENCES", grade: "A+", credit: 3 },
          { code: "ESI101", name: "ENVIRONMENTAL SCIENCES", grade: "C+", credit: 3 },
          { code: "MCI103", name: "NUMERICAL METHODS", grade: "A", credit: 5 },
          { code: "CCS102", name: "CO-CURRICULAR ACTIVITY - II", grade: "S", credit: 0 },
          { code: "CYI102", name: "CHEMISTRY LAB", grade: "A+", credit: 2 }
        ],
        "2023-2024 Monsoon": [
          { code: "CSE201", name: "DATA STRUCTURES AND ALGORITHMS", grade: "B+", credit: 9 },
          { code: "ECC203", name: "DIGITAL CIRCUITS AND SYSTEM DESIGN", grade: "B+", credit: 9 },
          { code: "ECC201", name: "ELECTRONIC DEVICES", grade: "B", credit: 9 },
          { code: "MCC505", name: "PROBABILITY & STATISTICS", grade: "B+", credit: 9 },
          { code: "ECC202", name: "SIGNALS & NETWORKS", grade: "C+", credit: 11 },
          { code: "ECC204", name: "DIGITAL SYSTEM DESIGN LAB", grade: "B+", credit: 2 },
          { code: "ECC205", name: "SIGNALS & NETWORKS LAB", grade: "B+", credit: 2 }
        ],
        "2023-2024 Winter": [
          { code: "ECC206", name: "ANALOG CIRCUITS", grade: "A", credit: 11 },
          { code: "ECC208", name: "CONTROL SYSTEMS", grade: "B+", credit: 9 },
          { code: "ECC207", name: "ELECTROMAGNETIC THEORY", grade: "B+", credit: 9 },
          { code: "ECE201", name: "MEASUREMENTS AND INSTRUMENTATIONS", grade: "B", credit: 9 },
          { code: "ECC209", name: "MICROPROCESSORS & MICROCONTROLLERS", grade: "B+", credit: 9 },
          { code: "ECC210", name: "ELECTRONIC DEVICES AND CIRCUITS LAB", grade: "A", credit: 3 },
          { code: "ECC211", name: "MICROPROCESSOR & MICROCONTROLLER LAB", grade: "A", credit: 2 }
        ],
        "2024-2025 Monsoon": [
          { code: "ECC302", name: "DIGITAL SIGNAL PROCESSING", grade: "B+", credit: 9 },
          { code: "CHE201", name: "ENGINEERING THERMODYNAMICS", grade: "B", credit: 9 },
          { code: "ECC301", name: "PRINCIPLES OF COMMUNICATION SYSTEMS", grade: "B+", credit: 9 },
          { code: "MND400", name: "ROCK EXCAVATION ENGINEERING", grade: "A", credit: 9 },
          { code: "ECC303", name: "VLSI DESIGN", grade: "A+", credit: 9 },
          { code: "ECC305", name: "COMMUNICATION SYSTEM LAB", grade: "A+", credit: 3 },
          { code: "ECC304", name: "DIGITAL SIGNAL PROCESSING LAB", grade: "B+", credit: 3 }
        ],
        "2024-2025 Winter": [
          { code: "ECC306", name: "DIGITAL COMMUNICATION", grade: "B+", credit: 9 },
          { code: "PHO403", name: "ENERGY STORAGE TECHNOLOGIES", grade: "B+", credit: 9 },
          { code: "PHO401", name: "INTRODUCTION TO QUANTUM DEVICES", grade: "B+", credit: 9 },
          { code: "ECC307", name: "MICROWAVE ENGINEERING", grade: "B+", credit: 9 },
          { code: "MNO302", name: "SEABED MINING AND ASTEROID MINING", grade: "A+", credit: 9 },
          { code: "ECC308", name: "DIGITAL COMMUNICATION LAB", grade: "A", credit: 3 },
          { code: "ECC309", name: "MICROWAVE ENGINEERING LAB", grade: "A", credit: 2 }
        ],
        "2025-2026 Monsoon": [
          { code: "ESO405", name: "CLEANER ENERGY", grade: "B+", credit: 9 },
          { code: "ESO401", name: "CLIMATE CHANGE IMPACTS ON WATER RESOURCES", grade: "B", credit: 9 },
          { code: "ECD405", name: "DIGITAL SYSTEMS DESIGN USING HDL", grade: "B", credit: 9 },
          { code: "MSO402", name: "INTRODUCTION TO FINANCIAL MANAGEMENT", grade: "B", credit: 9 },
          { code: "ECD415", name: "OPTICAL COMMUNICATION", grade: "B", credit: 9 },
          { code: "ECS401", name: "INTERNSHIP", grade: "S", credit: 0 },
          { code: "ECC401", name: "PROJECT - I", grade: "B", credit: 6 }
        ]
      }
    }
  }
};
