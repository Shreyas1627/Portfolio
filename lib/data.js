/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║                  PORTFOLIO DATA — lib/data.js                ║
 * ║  This is the SINGLE SOURCE OF TRUTH for all portfolio text.  ║
 * ║  Edit this file to update any section content.               ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

// ─── Hero ────────────────────────────────────────────────────────
export const hero = {
  name: "Shreyas Mirashi",
  roles: [
    "Computer Engineering Undergraduate",
    "AI & ML Enthusiast",
    "Software Developer",
    "Full-Stack Builder",
  ],
  resumeUrl: "/ResumeShreyas.pdf", // Drop resume.pdf in /public to activate
  linkedin: "https://linkedin.com/in/shreyasmirashi",
  github: "https://github.com/Shreyas1627",
  email: "[EMAIL_ADDRESS]",
};

// ─── About ───────────────────────────────────────────────────────
export const about = {
  bio: `I am a driven second-year Computer Engineering student at Xavier Institute of Engineering (CGPA: 9.05). I specialize in Artificial Intelligence, Machine Learning, and Data Structures & Algorithms. I thrive in collaborative environments, bridging the gap between complex AI architectures and scalable software solutions. When I'm not solving DSA problems, I'm organizing hackathons, building AI ecosystems, or exploring the frontiers of space technology.`,
  stats: [
    { label: "CGPA", value: "9.09" },
    { label: "Year", value: "2nd" },
    { label: "Projects", value: "7+" },
    { label: "Certifications", value: "9+" },
  ],
};

// ─── Skills ──────────────────────────────────────────────────────
export const skills = [
  {
    category: "Programming Languages",
    color: "blue",
    items: [
      { name: "Python", progress: 9 },
      { name: "C", progress: 7 },
      { name: "C++", progress: 6 },
      { name: "Java", progress: 6 },
      { name: "JavaScript", progress: 8 },
      { name: "HTML", progress: 9 },
      { name: "CSS", progress: 8 },
    ],
  },
  {
    category: "AI & Data Science",
    color: "purple",
    items: [
      { name: "Deep Learning (ST-GCN, Bi-LSTM, CNN)", progress: 8 },
      { name: "Machine Learning (XGBoost)", progress: 9 },
      { name: "NLP", progress: 7 },
      { name: "Computer Vision", progress: 8 },
      { name: "Generative AI", progress: 7 },
      { name: "RAG Pipelines", progress: 6 },
      { name: "ONNX Runtime", progress: 6 },
    ],
  },
  {
    category: "Frameworks & Tools",
    color: "green",
    items: [
      { name: "TensorFlow", progress: 9 },
      { name: "Tailwind CSS", progress: 8 },
      { name: "FastAPI", progress: 8 },
      { name: "OpenCV", progress: 7 },
      { name: "Docker", progress: 6 },
      { name: "React", progress: 8 },
      { name: "PyTorch", progress: 8 },
    ],
  },
  {
    category: "Core Competencies",
    color: "pink",
    items: [
      { name: "Full-Stack Web Development", progress: 7 },
      { name: "UI/UX Design", progress: 8 },
      { name: "Project Management", progress: 9 },
      { name: "Agile / Scrum", progress: 8 },
      { name: "Problem Solving", progress: 9 },
    ],
  },
];

// ─── Projects ────────────────────────────────────────────────────
export const projects = [
  {
    id: 3,
    title: "MoodMate AI",
    subtitle: "Emotional Intelligence for Devs",
    description:
      "A real-time emotional intelligence ecosystem for developers. Utilizes a hybrid CNN-XGBoost pipeline with a \"Positive Mood Lock\" algorithm to dynamically adapt audio environments to a coder's flow state.",
    tags: ["CNN", "XGBoost", "FastAPI", "React", "Computer Vision"],
    color: "green",
    github: "https://github.com/Shreyas1627",
    live: "#",
    featured: true,
  },
  {
    id: 6,
    title: "EditverseAI",
    subtitle: "Context-Aware AI Video Editor",
    description:
      "A context-aware video editing platform that leverages AI to automatically apply filters, music, and speed adjustments based on a user's desired 'vibe'. Built with React.js, FastAPI, and FFmpeg for seamless video manipulation.",
    tags: ["TypeScript", "React.js", "FastAPI", "FFmpeg", "Generative AI"],
    color: "purple",
    github: "https://github.com/Shreyas1627/editverse_AI",
    live: "#",
    featured: true,
  },
  {
    id: 4,
    title: "KavachVerify",
    subtitle: "Misinformation Firewall",
    description:
      "An Omni-Modal Misinformation Firewall and fact-checking ecosystem for WhatsApp utilizing a robust RAG pipeline and offline cryptography.",
    tags: ["RAG", "NLP", "Cryptography", "WhatsApp API", "LangChain"],
    color: "pink",
    github: "https://github.com/Shreyas1627",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "IndicSign",
    subtitle: "Real-Time ISL Translation",
    description:
      "A real-time continuous Indian Sign Language (ISL) translation system engineered using Spatial Temporal Graph Convolutional Networks (ST-GCN) and Bi-LSTM models.",
    tags: ["ST-GCN", "Bi-LSTM", "Python", "OpenCV", "Deep Learning"],
    color: "purple",
    github: "https://github.com/Shreyas1627",
    live: "#",
    featured: false,
  },
  {
    id: 1,
    title: "PayPark",
    subtitle: "Real-Time Parking Management System",
    description:
      "A secure, three-tier solution for parking facility optimization. Built with a team to eliminate lack of real-time visibility in parking operations — featuring a live dashboard monitoring 50 spots, automated check-in/out, vehicle data retrieval, entry timestamping, audit & reporting, and a visual parking grid layout. Resolves traffic congestion and revenue loss.",
    tags: ["React", "SQL", "REST API", "Dashboard", "Full-Stack"],
    color: "blue",
    github: "https://github.com/Shreyas1627",
    live: "#",
    featured: false,
  },



  {
    id: 5,
    title: "PicFix",
    subtitle: "AI Photo Editor",
    description:
      "A lightweight, feature-rich Python GUI photo editing tool built with Tkinter and Pillow. Features AI-powered background removal (rembg), doodle tools, brightness/contrast/filter adjustments, undo/redo functionality, and email integration for photo sharing.",
    tags: ["Python", "Tkinter", "Pillow", "rembg", "AI Background Removal"],
    color: "blue",
    github: "https://github.com/Shreyas1627/PicFix-ImageEditor",
    live: "#",
    featured: false,
  },

  {
    id: 7,
    title: "GraphCalculator",
    subtitle: "Python Math Graphing Tool",
    description:
      "A Python-based application for graphing mathematical functions with a clean GUI. Includes configurations for mobile deployment via Buildozer, making complex math visualization accessible across platforms.",
    tags: ["Python", "Kivy", "Buildozer", "Mathematics", "Mobile"],
    color: "green",
    github: "https://github.com/Shreyas1627/GraphCalculator",
    live: "#",
    featured: false,
  },
];

// ─── Experience ──────────────────────────────────────────────────
export const experience = [
  {
    id: 1,
    role: "AI/ML Intern",
    company: "Infosys Springboard",
    period: "Nov 2025 – Present",
    type: "Internship",
    bullets: [
      "Worked on a hybrid CNN-XGBoost pipeline for real-time emotional intelligence in developers.",
      "Mastered intensive enterprise-level coursework covering AI, Generative AI, Robotic Process Automation (RPA), and NLP.",
      "Cleared major assessments validating problem-solving in modern enterprise tech.",
    ],
    color: "blue",
  },
];

// ─── Certifications ──────────────────────────────────────────────
export const certifications = [
  {
    id: 1,
    title: "Applied DevOps: Linux, Docker & AWS",
    issuer: "Xavier Institute Of Engineering",
    year: "2026",
    color: "blue",
  },
  {
    id: 2,
    title: "Introduction to OpenAI GPT Models",
    issuer: "Infosys Springboard",
    year: "2025",
    color: "purple",
  },
  {
    id: 3,
    title: "Introduction to NLP & Data Science",
    issuer: "Infosys Springboard",
    year: "2025",
    color: "green",
  },
  {
    id: 4,
    title: "Introduction to Deep Learning",
    issuer: "Infosys Springboard",
    year: "2025",
    color: "green",
  },
];

// ─── Leadership ──────────────────────────────────────────────────
export const leadership = [
  {
    id: 1,
    role: "Assistant Technical Secretary",
    org: "Student Council — Xavier Institute",
    color: "blue",
    bullets: [
      "Coordinated Technical Fests and organized events for students.",
      "Organized Technova (24hrs) hackathon at Xavier Institute of Engineering.",
      "Key coordinator for the college's Technical Clubs.",
    ],
  },
  {
    id: 2,
    role: "Class Representative",
    org: "SE Computer Engineering",
    color: "purple",
    bullets: [
      "Served as the primary liaison between the class and faculty.",
      "Promoted class activities and events.",
      "Managed academic coordination and announcements.",
    ],
  },
  {
    id: 3,
    role: "Hackathon Organizer & Participant",
    org: "Organized hackathons at Xavier Institute",
    color: "green",
    bullets: [
      "Actively organized competitive 24-hour hackathon sprints.",
      "Participated in numerous hackathons at renowned institutions.",
      "Mentored junior participants in ideation and rapid prototyping.",
    ],
  },
];

// ─── Contact ─────────────────────────────────────────────────────
export const contact = {
  email: "write2shreyasmirashi@gmail.com",
  linkedin: "https://linkedin.com/in/shreyasmirashi",
  github: "https://github.com/Shreyas1627",
  terminalCommands: {
    whoami: "Shreyas Mirashi — CE Student @ Xavier Institute | AI & ML Developer",
    contact: "Email: write2shreyasmirashi@gmail.com | LinkedIn: linkedin.com/in/shreyasmirashi",
    social: "GitHub: github.com/Shreyas1627 | LinkedIn: linkedin.com/in/shreyasmirashi",
    skills: "Python · React · AI/ML · Docker · DSA · Full-Stack Dev",
    projects: "Run 'ls projects' to list all 7 featured projects.",
    "ls projects": "PayPark | IndicSign | MoodMate AI | KavachVerify | PicFix | EditverseAI | GraphCalculator",
    help: "Available commands: whoami | contact | social | skills | projects | ls projects | clear",
    clear: "__CLEAR__",

  },
};
