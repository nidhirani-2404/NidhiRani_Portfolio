import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  ChevronDown, 
  FolderGit2, 
  Sparkles, 
  Check, 
  Copy, 
  Briefcase, 
  GraduationCap, 
  Award, 
  User, 
  Download,
  Eye
} from 'lucide-react';

// Centralised Data Modules
import { socialsData } from './data/socials';
import { documentsData } from './data/documents';

// Modular Sections
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Documents from './components/Documents';
import Contact from './components/Contact';
import { Toaster } from 'sonner';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [resumeCopied, setResumeCopied] = useState(false);

  // Scroll Progress indicator logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress((window.scrollY / scrollHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyRawTextAction = () => {
    // Premium plain text summarizing Nidhi's background for recruiter clipboard
    const cvSummary = `
NIDHI RANI
Adm. No. 22JE0623
Phone: ${socialsData.phone}
Email: ${socialsData.email}
LinkedIn: ${socialsData.linkedin}
GitHub: ${socialsData.github}

EDUCATION:
- Indian Institute of Technology (Indian School of Mines), Dhanbad (May 2026)
  Bachelor of Technology in Electronics and Communication Engineering (GPA: 7.92/10.00)
  Relevant Coursework: C Programming, Data Structures and Algorithms, Digital Electronics, Signals and Systems
- Indian Public School, Hajipur (2021)
  Higher Secondary Examination (Class XII), CBSE Board - 89.6%

EXPERIENCE:
- Zipr Links Pvt. Limited | Software Engineering Intern (May 2025 – July 2025) | Remote
  • Engineered a flight-seat selection system with real-time visualization, pricing algorithms that adjusted fares up to 15%, and secure booking workflows, improving booking completion rate by 30%.
  • Designed a Form.io web app with real-time validation, input sanitization, and automated JSON-schema generation, cutting manual form-creation effort by 40% and reducing input errors by 20%.
  • Delivered all project milestones within 6 weeks and awarded an Internship Certificate by Zipr Links Pvt. Limited.

PROJECTS:
1. Job-Portal | React.js, Vite, Node.js, Express.js, MongoDB, JWT, Tailwind CSS + ShadCN (Radix UI) (Nov 2024 – Jan 2025)
  • Developed a fully functional job portal (MERN stack) supporting 500+ job listings and 200+ student applications.
  • Designed and deployed secure RESTful APIs with JWT authentication, cutting API response time by 20%.
  • Built a custom Admin Dashboard to manage postings and applications, reducing admin workload by 40%.
  • Integrated Redux for global state management, improving session persistence and reducing reload-related errors by 35%.

2. Streamify-Chatapp | React.js, Vite, Node.js, Express.js, MongoDB, JWT, Tailwind CSS, Lucide React (Apr – Jun 2025)
  • Engineered a full-stack chat and video calling application handling 100+ concurrent users with real-time messaging and calls, achieving low-latency performance and supporting scalable deployments.
  • Implemented JWT-based authentication and bcrypt hashing, reducing unauthorized access attempts by 90%.
  • Developed friend request and notification features, increasing user engagement by 30%.
  • Built a responsive frontend (React.js + Tailwind) integrated with backend APIs, improving average page load speed by 25%.

TECHNICAL SKILLS:
- Languages: C++, Python (NumPy, Pandas), JavaScript, SQL, HTML, CSS
- Frameworks & Databases: React.js, Redux, Node.js, Express.js, MongoDB, MySQL, Tailwind CSS, ShadCN
- Tools & Concepts: Git, GitHub, VS Code, Postman, RESTful APIs, JWT, OOP, DSA, Power BI, MS Excel
- AI & Cloud: Machine Learning basics, AWS basics

ACHIEVEMENTS:
- Consistent algorithmic problem solver on LeetCode and GeeksforGeeks, showcasing strong analytical and optimization skills.
- Maintained a 100+ day coding streak, building consistency and enhancing algorithmic knowledge across 20+ topics.

SOCIAL ENGAGEMENTS:
- Volunteer: Tutored underprivileged children through Kartavya – IIT Dhanbad Chapter to promote education.
- Sports: Participated in Volleyball and Badminton tournaments, fostering teamwork and discipline.
`;
    navigator.clipboard.writeText(cvSummary.trim());
    setResumeCopied(true);
    setTimeout(() => setResumeCopied(false), 2000);
  };

  const downloadResumeAction = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1R8zH5_Je0JHVxIDUK4FYWY8c7ixpL9GR/view?usp=sharing';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-blue-500/20 selection:text-white font-sans overflow-x-hidden relative scroll-smooth">
      {/* Subtle Scroll progress node at the very top */}
      <div 
        className="fixed top-0 left-0 h-[2.5px] bg-[#3B82F6] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Primary Sticky Header Bar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0A0A0A]/75 backdrop-blur-md border-b border-[#222222]/50 transition-all h-16">
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <a href="#hero" className="text-sm font-extrabold tracking-widest text-white flex items-center gap-1.5 font-mono">
              <Sparkles className="w-4 h-4 text-[#3B82F6]" />
              <span>NIDHI.RANI</span>
            </a>
          </div>

          {/* Navigation Links centered */}
          <div className="hidden md:flex justify-center items-center flex-1 gap-6 text-xs text-[#A1A1AA] font-semibold uppercase tracking-wider">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-[#3B82F6] transition-colors">Contact</a>
          </div>

          {/* Resume anchor callout on the right */}
          <div className="flex-1 flex justify-end">
            <button
              onClick={() => setShowResumeModal(true)}
              className="px-4 py-2 bg-[#111111] border border-[#222222] hover:border-[#333333] text-white text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-[#3B82F6]" />
              Resume
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section Banner */}
      <section id="hero" className="min-h-screen pt-32 pb-24 relative flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Block Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/5 border border-blue-500/15 text-[#3B82F6] rounded-full text-[10px] font-mono uppercase tracking-wider font-bold">
                IIT (ISM) Dhanbad • B.Tech ECE
              </div>
              
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tight text-white leading-none">
                Meet <span className="text-[#3B82F6]">Nidhi Rani</span>
              </h1>
              <h2 className="text-lg md:text-2xl font-mono text-[#A1A1AA] font-semibold">
                Software Engineer • Data Engineer • Web Developer
              </h2>
            </div>

            <p className="text-xs md:text-sm text-[#A1A1AA] leading-relaxed max-w-xl font-sans">
              Building scalable web applications, optimizing databases, and engineering robust data pipelines. Highly skilled in C++, SQL, React.js, and Python (NumPy, Pandas) with solid computer science foundations from IIT (ISM) Dhanbad.
            </p>

            {/* Actions Panel */}
            <div className="flex flex-wrap gap-4 pt-3 font-sans">
              <button 
                onClick={() => setShowResumeModal(true)}
                className="px-6 py-3 bg-[#3B82F6] hover:bg-blue-600 text-white text-xs font-bold rounded-xl cursor-pointer flex items-center gap-2 shadow-md transition-all"
              >
                <FileText className="w-4 h-4 text-white" />
                Download Resume
              </button>
              <a 
                href="#projects"
                className="px-6 py-3 bg-[#111111] hover:bg-[#1C1C1E] border border-[#222222] text-white text-xs font-bold rounded-xl flex items-center gap-2 transition-all cursor-pointer"
              >
                <FolderGit2 className="w-4 h-4 text-[#A1A1AA]" />
                View Projects
              </a>
              <a 
                href="#contact"
                className="px-6 py-3 bg-transparent hover:bg-[#111111] border border-[#222222] text-[#A1A1AA] hover:text-white text-xs font-bold rounded-xl flex items-center gap-2 transition-all cursor-pointer"
              >
                Contact Me
              </a>
            </div>

            {/* Social Network row */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#222222] max-w-sm">
              <span className="text-[10px] text-[#A1A1AA] uppercase tracking-widest font-mono font-bold">Networks:</span>
              <div className="flex items-center gap-3">
                <a href={socialsData.github} target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-white transition-colors" title="GitHub">
                  <Github className="w-4 h-4" />
                </a>
                <a href={socialsData.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-[#3B82F6] transition-colors" title="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href={`mailto:${socialsData.email}`} className="text-[#A1A1AA] hover:text-white transition-colors" title="Email">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Block Premium Illustration Representation */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="w-full max-w-sm bg-[#111111] border border-[#222222] rounded-3xl p-6 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#222222] text-xs font-mono text-[#A1A1AA]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/40"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/40"></span>
                </div>
                <span>NIDHI_RANI_PROFILE.json</span>
              </div>

              {/* JSON code representation */}
              <div className="font-mono text-xs text-blue-300 leading-relaxed space-y-2 select-text">
                <p className="text-gray-500 italic">// Developer Portfolio State</p>
                <p>
                  <span className="text-pink-400">const</span> <span className="text-white">engineer</span> = &#123;
                </p>
                <p className="pl-4">
                  fullName: <span className="text-emerald-400">"Nidhi Rani"</span>,
                </p>
                <p className="pl-4">
                  almaMater: <span className="text-emerald-400">"IIT (ISM) Dhanbad"</span>,
                </p>
                <p className="pl-4">
                  roles: [<span className="text-emerald-400">"Software Engineer"</span>, <span className="text-emerald-400">"Data Engineer"</span>, <span className="text-emerald-400">"Web Developer"</span>],
                </p>
                <p className="pl-4">
                  scoreCGPA: <span className="text-blue-400">7.92</span>,
                </p>
                <p className="pl-4">
                  coreLanguages: [<span className="text-emerald-400">"C++"</span>, <span className="text-emerald-400">"Python"</span>, <span className="text-emerald-400">"SQL"</span>, <span className="text-emerald-400">"JS"</span>],
                </p>
                <p className="pl-4">
                  dataSciLibraries: [<span className="text-emerald-400">"NumPy"</span>, <span className="text-emerald-400">"Pandas"</span>],
                </p>
                <p className="pl-4">
                  frameworks: [<span className="text-emerald-400">"React"</span>, <span className="text-emerald-400">"Express"</span>, <span className="text-emerald-400">"Node.js"</span>]
                </p>
                <p>&#125;;</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll helper */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[10px] uppercase font-mono text-[#A1A1AA]">
          <span>Scroll To Explore</span>
          <ChevronDown className="w-4 h-4 text-[#3B82F6] animate-bounce" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 border-b border-[#222222] bg-[#0A0A0A] relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Stats Block */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-[#111111] border border-[#222222] p-5 rounded-2xl">
                <span className="text-3xl font-black font-mono text-[#3B82F6]">7.92</span>
                <span className="text-xs text-white font-bold block mt-1">B.Tech CGPA</span>
                <span className="text-[10px] text-[#A1A1AA] mt-0.5 block font-sans">IIT (ISM) Dhanbad</span>
              </div>

              <div className="bg-[#111111] border border-[#222222] p-5 rounded-2xl">
                <span className="text-3xl font-black font-mono text-[#3B82F6]">100+</span>
                <span className="text-xs text-white font-bold block mt-1">Streak Days</span>
                <span className="text-[10px] text-[#A1A1AA] mt-0.5 block font-sans">Coding consistency</span>
              </div>

              <div className="bg-[#111111] border border-[#222222] p-5 col-span-2 rounded-2xl">
                <span className="text-xs font-bold text-[#3B82F6] font-mono uppercase tracking-wider block mb-1">
                  Technical Expertise
                </span>
                <p className="text-xs text-[#A1A1AA] font-sans leading-relaxed">
                  Solid groundwork in Data Structures & Heuristics, Object-Oriented paradigms (OOPs), DBMS networks, Operating Systems, and secure JWT verification protocols.
                </p>
              </div>
            </div>

            {/* Right Concise About Pitch */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#111111] border border-[#222222] text-[#A1A1AA] rounded-full text-[10px] uppercase font-mono tracking-wider font-bold mb-3">
                  <User className="w-3.5 h-3.5" />
                  Bio
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-1 font-sans">
                  About Nidhi Rani
                </h2>
              </div>

              <div className="space-y-4 text-xs md:text-sm font-sans text-[#A1A1AA] leading-relaxed">
                <p>
                  I am a B.Tech student in Electronics and Communication Engineering from <strong>IIT (ISM) Dhanbad</strong> with a CGPA of <strong>7.92</strong>, specializing as an aspiring <strong>Software Engineer</strong>, <strong>Data Engineer</strong>, and <strong>Web Developer</strong>.
                </p>
                <p>
                  I specialize in building full-stack applications using React, Node.js, Express.js, MongoDB, alongside scientific data computing with Python, NumPy, and Pandas.
                </p>
                <p>
                  I love algorithmic problem solving and enjoy designing scalable backend architectures and data analysis pipelines while continuously learning.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Mounting Modular Sections */}
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Achievements />
      <Documents />
      <Contact />
      <Toaster theme="dark" position="bottom-right" richColors closeButton />

      {/* Simple Professional Footer */}
      <footer className="bg-[#0A0A0A] py-12 border-t border-[#222222] text-xs text-[#A1A1AA] font-sans tracking-wide">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="font-bold text-white tracking-tight">Nidhi Rani</h4>
            <p className="text-[10px] text-[#A1A1AA] font-mono">IIT (ISM) Dhanbad Candidate Profile</p>
          </div>

          <div className="flex gap-4 text-xs">
            <a href={socialsData.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <span className="text-[#222222]">•</span>
            <a href={socialsData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#3B82F6] transition-colors">LinkedIn</a>
          </div>

          <p className="text-[10px] text-gray-600 font-mono">
            &copy; {new Date().getFullYear()} NIDHI RANI. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>

      {/* PopUp Resume Preview overlay */}
      <AnimatePresence>
        {showResumeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-[#111111] border border-[#222222] rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="p-4 bg-[#111111] border-b border-[#222222] flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#3B82F6]" />
                  <h3 className="text-sm font-bold text-white">Nidhi Rani Resume</h3>
                </div>
                <button 
                  onClick={() => setShowResumeModal(false)}
                  className="text-xs font-bold text-[#A1A1AA] hover:text-white transition-colors uppercase font-mono cursor-pointer"
                >
                  Close [Esc]
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 text-xs text-[#A1A1AA] leading-relaxed font-sans select-text">
                <div className="text-center border-b border-[#222222] pb-4">
                  <h4 className="text-lg font-black text-white">NIDHI RANI</h4>
                  <p className="text-[#3B82F6] font-mono text-[10px] mt-1">{socialsData.email} | {socialsData.phone} | Adm. No. 22JE0623</p>
                  <p className="text-[#A1A1AA] text-[10px] uppercase font-mono tracking-wider mt-1">LinkedIn: linkedin.com/in/nidhi-rani-95a451255/ | GitHub: github.com/nidhirani-2404</p>
                </div>

                <div className="space-y-3">
                  <h5 className="font-extrabold text-white uppercase font-mono tracking-wider text-[10px] border-b border-[#222222] pb-1">Education</h5>
                  <div>
                    <div className="flex justify-between font-bold text-white text-xs">
                      <span>Indian Institute of Technology (Indian School of Mines), Dhanbad</span>
                      <span>May 2026</span>
                    </div>
                    <p className="italic">Bachelor of Technology in Electronics and Communication Engineering (GPA: 7.92/10.00)</p>
                    <p className="text-gray-500">• Relevant Coursework: C Programming, Data Structures and Algorithms, Digital Electronics, Signals and Systems</p>
                  </div>
                  <div>
                    <div className="flex justify-between font-bold text-white text-xs mt-2">
                      <span>Indian Public School, Hajipur</span>
                      <span>2021</span>
                    </div>
                    <p className="italic">Higher Secondary Examination (Class XII), CBSE Board — 89.6% (Hajipur, Bihar)</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h5 className="font-extrabold text-white uppercase font-mono tracking-wider text-[10px] border-b border-[#222222] pb-1">Experience</h5>
                  <div>
                    <div className="flex justify-between font-bold text-white text-xs">
                      <span>Zipr Links Pvt. Limited — Software Engineering Intern</span>
                      <span>May 2025 – July 2025</span>
                    </div>
                    <p className="italic text-[#3B82F6] text-[10px]">Remote</p>
                    <ul className="list-disc pl-4 space-y-1 text-gray-400 mt-1.5 text-[11px]">
                      <li>Engineered a flight-seat selection system with real-time visualization, pricing algorithms that adjusted fares up to 15%, and secure booking workflows, improving booking completion rate by 30%.</li>
                      <li>Designed a Form.io web app with real-time validation, input sanitization, and automated JSON-schema generation, cutting manual form-creation effort by 40% and reducing input errors by 20%.</li>
                      <li>Delivered all project milestones within 6 weeks and awarded an Internship Certificate by Zipr Links Pvt. Limited.</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-3">
                  <h5 className="font-extrabold text-white uppercase font-mono tracking-wider text-[10px] border-b border-[#222222] pb-1">Projects</h5>
                  <div>
                    <div className="flex justify-between font-bold text-white text-xs">
                      <span>Job-Portal (MERN stack)</span>
                      <span>Nov 2024 – Jan 2025</span>
                    </div>
                    <p className="italic text-gray-500 font-mono text-[10px]">React.js, Vite, Node.js, Express.js, MongoDB, JWT, Tailwind CSS + ShadCN (Radix UI)</p>
                    <ul className="list-disc pl-4 space-y-1 text-gray-400 mt-1 text-[11px]">
                      <li>Developed a fully functional job portal supporting 500+ job listings and 200+ student applications.</li>
                      <li>Designed and deployed secure RESTful APIs with JWT authentication, cutting API response time by 20%.</li>
                      <li>Built a custom Admin Dashboard to manage postings and applications, reducing admin workload by 40%.</li>
                      <li>Integrated Redux for global state management, improving session persistence and reducing reload-related errors by 35%.</li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between font-bold text-white text-xs">
                      <span>Streamify-Chatapp</span>
                      <span>Apr – Jun 2025</span>
                    </div>
                    <p className="italic text-gray-500 font-mono text-[10px]">React.js, Vite, Node.js, Express.js, MongoDB, JWT, Tailwind CSS, Lucide React</p>
                    <ul className="list-disc pl-4 space-y-1 text-gray-400 mt-1 text-[11px]">
                      <li>Engineered a full-stack chat and video calling application handling 100+ concurrent users with real-time messaging and calls, achieving low-latency performance and supporting scalable deployments.</li>
                      <li>Implemented JWT-based authentication and bcrypt hashing, reducing unauthorized access attempts by 90%.</li>
                      <li>Developed friend request and notification features, increasing user engagement by 30%.</li>
                      <li>Built a responsive frontend (React.js + Tailwind) integrated with backend APIs, improving average page load speed by 25%.</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="font-extrabold text-white uppercase font-mono tracking-wider text-[10px] border-b border-[#222222] pb-1">Technical Skills</h5>
                  <p><strong>Languages:</strong> C++, Python, JavaScript, SQL, HTML, CSS</p>
                  <p><strong>Frameworks & Databases:</strong> React.js, Redux, Node.js, Express.js, MongoDB, MySQL, Tailwind CSS, ShadCN</p>
                  <p><strong>Tools & Concepts:</strong> Git, GitHub, VS Code, Postman, RESTful APIs, JWT, OOP, DSA, Power BI, MS Excel</p>
                  <p><strong>AI & Cloud:</strong> Machine Learning basics, AWS basics</p>
                </div>

                <div className="space-y-1">
                  <h5 className="font-extrabold text-white uppercase font-mono tracking-wider text-[10px] border-b border-[#222222] pb-1">Achievements</h5>
                  <p>• Consistent algorithmic problem solver on LeetCode and GeeksforGeeks, showcasing strong analytical and optimization skills.</p>
                  <p>• Maintained a 100+ day coding streak, building consistency and enhancing algorithmic knowledge across 20+ topics.</p>
                </div>

                <div className="space-y-1">
                  <h5 className="font-extrabold text-white uppercase font-mono tracking-wider text-[10px] border-b border-[#222222] pb-1">Social Engagements</h5>
                  <p>• <strong>Volunteer:</strong> Tutored underprivileged children through Kartavya – IIT Dhanbad Chapter to promote education.</p>
                  <p>• <strong>Sports:</strong> Participated in Volleyball and Badminton tournaments, fostering teamwork and discipline.</p>
                </div>
              </div>

              {/* Actions footer */}
              <div className="p-4 bg-[#111111] border-t border-[#222222] flex justify-between gap-3 font-sans">
                <button
                  onClick={copyRawTextAction}
                  className="flex-1 py-2.5 bg-[#1F1F1F] border border-[#2D2D30] hover:border-[#3A3A3C] text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {resumeCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span>Copied Raw Details!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#A1A1AA]" />
                      <span>Copy Raw Text</span>
                    </>
                  )}
                </button>
                <a
                  href="https://drive.google.com/file/d/1R8zH5_Je0JHVxIDUK4FYWY8c7ixpL9GR/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    setShowResumeModal(false);
                  }}
                  className="flex-1 py-1.5 px-2.5 bg-[#3B82F6] hover:bg-blue-600 text-white rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-white" />
                  View Resume
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
