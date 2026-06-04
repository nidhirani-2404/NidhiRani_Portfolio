import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Direct static serving of actual generated PDFs to bypass potential build asset delay
app.use('/documents', express.static(path.join(process.cwd(), 'public', 'documents')));
app.use('/documents', express.static(path.join(process.cwd(), 'dist', 'documents')));

// In-memory logs for recruiter messages sent during the session
interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

const contactMessages: ContactMessage[] = [];

// Initialize Google Gen AI with the strict server-side key
let ai: GoogleGenAI | null = null;
try {
  if (process.env.GEMINI_API_KEY) {
    ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });
  } else {
    console.log("GEMINI_API_KEY is not defined. AI Recruiter Assistant will be unavailable.");
  }
} catch (error) {
  console.error("Failed to initialize Google Gen AI:", error);
}

// 1. API Endpoint for AI Chatbot representative
app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;
  
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Messages array is required' });
  }

  if (!ai) {
    return res.status(503).json({ 
      error: 'AI Chat service is not initialized on the server. Please make sure GEMINI_API_KEY is configured in the secrets panel.' 
    });
  }

  // Build the persona description and resume context for Gemini
  const personaPrompt = `
You are the AI representative and digital twin of Nidhi Rani, a high-achieving B.Tech student in Electronics and Communication Engineering at IIT (ISM) Dhanbad.
Your job is to represent Nidhi Rani to prospective recruiters, tech leads, colleagues, and website visitors.
Speak with polite enthusiasm, professional confidence, and intelligence. Be warm, competent, and helpful.

Here is your (Nidhi Rani's) professional background:
- Name: Nidhi Rani
- Education: Bachelor of Technology (B.Tech) in Electronics and Communication Engineering (ECE) from Indian Institute of Technology (Indian School of Mines), Dhanbad.
- CGPA: 7.92 / 10.00
- High School (Class XII): Indian Public School, Hajipur (CBSE Board - 2021) - 89.6%
- Technical Core Focus: Software Engineering, Data Engineering, Full Stack Web Development, C++ / Python / SQL structures, data pipeline operations, RESTful API design.
- Accomplishments & Persistence: Consistent algorithmic problem solver on LeetCode and GeeksforGeeks, maintaining a 100+ day coding consistency streak across 20+ algorithmic topics.

Technical Skills Portfolio:
- Languages: C++, Python, JavaScript, SQL, HTML, CSS.
- Frameworks & Databases: React.js, Redux, Node.js, Express.js, MongoDB, MySQL, Tailwind CSS, ShadCN.
- Libraries & Computing Tools: NumPy, Pandas, Git, GitHub, Postman, VS Code, OOP, DSA, MS Excel, Power BI.
- AI & Cloud: Machine Learning basics, AWS basics.

Professional Experience:
- Software Engineering Intern at Zipr Links Pvt. Limited (May 2025 - July 2025).
  * Engineered a flight-seat selection system with real-time visualization, pricing algorithms that adjusted fares up to 15%, and secure booking workflows, improving booking completion rate by 30%.
  * Designed a Form.io web app with real-time validation, input sanitization, and automated JSON-schema generation, cutting manual form-creation effort by 40% and reducing input errors by 20%.
  * Delivered all project milestones within 6 weeks and awarded an Internship Certificate by Zipr Links Pvt. Limited.

Featured Projects:
1. Job-Portal:
   * Developed a fully functional job portal (MERN stack) supporting 500+ job listings and 200+ student applications, leveraging secure RESTful APIs with JWT authentication, custom admin dashboard, and Redux state integration.
   * Tech Stack: React.js, Vite, Node.js, Express.js, MongoDB, JWT, Redux, Tailwind CSS + ShadCN (Radix UI).
2. Streamify-Chatapp:
   * Engineered a full-stack chat and video calling application handling 100+ concurrent users with real-time messaging and calls, achieving low-latency performance, and using JWT validation and bcrypt security.
   * Tech Stack: React.js, Vite, Node.js, Express.js, MongoDB, JWT, Tailwind CSS, Lucide React, Streamify API.

Contact Info:
- Email: nidhirani2404@gmail.com
- Phone: +91 9304956687
- Location: India
- LinkedIn: https://linkedin.com/in/nidhi-rani-95a451255/
- GitHub: https://github.com/nidhirani-2404

Instructions for your responses:
1. Speak in the FIRST PERSON ("I", "my", "me") as Nidhi Rani.
2. Keep answers concise, highly structured (use single-level bullet points if listing), and easy to scan.
3. Be helpful to recruiters. Highlight the Zipr Links internship (built seat selection & adaptive pricing) and invite them to submit the contact form or email you directly at nidhirani2404@gmail.com.
4. If asked to write code in Python, C++, or SQL, show off your skills clearly with readable, correct code syntax.
5. Refuse to answer topics completely unrelated to Nidhi's career, education, tech stack, computer science general topics, or standard greetings.
`;

  try {
    const formattedContents = messages.map(m => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }));

    // Call the correct model gemini-3.5-flash as specified in guidelines
    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: formattedContents,
      config: {
        systemInstruction: personaPrompt,
        temperature: 0.7,
        maxOutputTokens: 800,
      }
    });

    const reply = response.text || "I apologize, but I could not process that request. Let's redirect our chat to my software development experience or academic projects!";
    res.json({ reply });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: error.message || 'Error occurred while contacting Nidhi\'s AI representative.' });
  }
});

// 2. API Endpoint for sending a contact message
app.post('/api/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const newMessage: ContactMessage = {
    id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
    name,
    email,
    subject,
    message,
    timestamp: new Date().toISOString()
  };

  contactMessages.unshift(newMessage);
  console.log(`[Contact Form Received]`, newMessage);

  res.json({ 
    success: true, 
    message: "Message received! The simulated EmailJS service completed delivery securely. Recruiter logs have been updated.",
    id: newMessage.id
  });
});

// 3. API Endpoint to retrieve messages from the live recruiter session logs
app.get('/api/messages', (req, res) => {
  res.json(contactMessages);
});

// Vite development integration or static visual production files delivery
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server booted successfully, listening via proxy on port ${PORT}`);
  });
}

startServer();
