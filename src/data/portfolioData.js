export const personalInfo = {
  name: "MOHITH B",
  title: "Computer Science Engineering Student | Full-Stack Developer | AI/ML Enthusiast",
  shortRole: "Full-Stack Developer | AI/ML Enthusiast",
  headline: "Computer Science Engineering Student | Full-Stack Developer | AI/ML Enthusiast",
  introduction: "I am a Computer Science Engineering student passionate about building practical digital solutions through full-stack development, artificial intelligence, and emerging technologies. I enjoy experimenting with AI-assisted development, participating in hackathons, and turning ideas into functional applications.",
  aboutText: "I'm a Computer Science and Engineering student at Atria Institute of Technology, Bengaluru. I enjoy building technology-driven solutions that solve practical problems. My interests include full-stack development, AI/ML, and AI-assisted application development. Through internships, hackathons, and collaborative projects, I've gained experience in turning ideas into working applications. I also enjoy exploring new technologies and contributing to technical communities.",
  location: "Bengaluru, Karnataka, India",
  phone: "+91 9483242797",
  email: "mohithb70@gmail.com",
  github: "https://github.com/mohithb7atria-ai",
  linkedin: "https://linkedin.com/in/mohith-b-481a82378",
  resumePath: "/mohith-b-resume.pdf",
  profileImage: "/mohith-profile.jpg",
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export const aboutCards = [
  {
    title: "Computer Science Engineering Student",
    description: "Atria Institute of Technology, Bengaluru (2025–Present). Maintaining an academic CGPA of 8.83 with focus on systems and practical engineering.",
    icon: "GraduationCap",
    highlight: "CGPA 8.83"
  },
  {
    title: "Full-Stack Development",
    description: "Building responsive, user-centric web applications with React.js, Node.js, modern backend architectures, and secure payment integrations.",
    icon: "Code",
    highlight: "React & Node.js"
  },
  {
    title: "AI/ML Enthusiast",
    description: "Applying Machine Learning, OpenCV, MediaPipe computer vision, Generative AI models, and rapid AI-assisted development workflows.",
    icon: "Cpu",
    highlight: "Computer Vision & GenAI"
  },
  {
    title: "Hackathon Participant",
    description: "Proven competitor in high-stakes hackathons, including Smart India Hackathon 2026 (Dual Track Selection) and Unimerge Hackathon Winner.",
    icon: "Trophy",
    highlight: "SIH Finalist & Winner"
  }
];

export const skillCategories = [
  {
    category: "Programming and Web",
    description: "Core languages and modern frontend/backend frameworks for scalable web systems.",
    skills: ["Python", "HTML5", "CSS3", "JavaScript", "React.js", "Node.js"]
  },
  {
    category: "AI and Development",
    description: "Cutting-edge artificial intelligence, computer vision, and AI-accelerated workflows.",
    skills: ["AI-assisted Development", "Vibe Coding", "Generative AI", "Machine Learning Fundamentals", "OpenCV", "MediaPipe"]
  },
  {
    category: "Database and Tools",
    description: "Data persistence engines, cloud infrastructure, and modern developer tooling.",
    skills: ["MongoDB", "Supabase", "Git", "GitHub", "VS Code", "Google Cloud"]
  }
];

export const experienceData = [
  {
    role: "Web Development Intern",
    company: "WebStack Academy",
    location: "Bengaluru",
    period: "June – July 2026",
    project: "Food Genie – AI-Powered Food Ordering System",
    description: [
      "Developed responsive and interactive user interfaces using React.js, JavaScript, HTML, and CSS.",
      "Worked on backend functionality using Node.js and Express.",
      "Implemented food browsing, cart management, and ordering functionality.",
      "Integrated Stripe payment functionality for seamless, secure transactions.",
      "Used Git and GitHub for version control, collaborative workflows, and project maintenance."
    ],
    techStack: ["React.js", "Node.js", "Express", "Stripe API", "JavaScript", "CSS3", "Git"]
  }
];

export const projectsData = [
  {
    id: "ace-prep",
    title: "ACE PREP",
    category: "Full-Stack Development",
    number: "PROJECT 01",
    description: "A JEE and NEET preparation platform designed to support students with their exam preparation, featuring authenticated dashboards and structured mock test modules.",
    image: "/projects/ace-prep.jpg",
    tags: ["React.js", "Full-Stack", "EdTech", "Tailwind CSS", "Auth"],
    liveUrl: "https://mohith17.lovable.app",
    buttonText: "View Live Project",
    isLive: true
  },
  {
    id: "voice-to-vocation",
    title: "Voice-to-Vocation Navigator",
    category: "AI | Smart India Hackathon",
    number: "PROJECT 02",
    description: "An AI-driven voice assistant for livelihood mapping and NSQF-aligned skilling recommendations, bridging employment opportunities for rural communities.",
    image: "/projects/voice-to-vocation.jpg",
    tags: ["AI Assistant", "Voice Recognition", "NSQF Alignment", "SIH 2026", "Web Tech"],
    liveUrl: "https://voice-to-vocation-navigator.lovable.app",
    buttonText: "View Live Project",
    isLive: true
  },
  {
    id: "civicshield-ai",
    title: "CivicShield AI",
    category: "AI | Civic Technology",
    number: "PROJECT 03",
    description: "A road hazard detection and reporting project focused on identifying road damage and dangerous obstructions to improve urban traffic safety.",
    image: "/projects/civicshield-ai.jpg",
    tags: ["Python", "Computer Vision", "Civic Tech", "Hazard Mapping", "AI"],
    githubUrl: "https://github.com/mohithb7atria-ai/seva",
    buttonText: "View Source Code",
    isLive: false,
    hasSource: true
  },
  {
    id: "smart-route-buddy",
    title: "Smart Route Buddy",
    category: "Web Development",
    number: "PROJECT 04",
    description: "A smart route-planning project designed to help users explore routes and make better travel decisions through intelligent transit guidance.",
    image: "/projects/smart-route-buddy.jpg",
    tags: ["React.js", "Smart Transit", "Route Intelligence", "UI/UX", "APIs"],
    liveUrl: "https://smart-route-buddy-64.lovable.app",
    buttonText: "View Live Project",
    isLive: true
  },
  {
    id: "sih-2026",
    title: "SIH 2026 Project Website",
    category: "Hackathon | Web Development",
    number: "PROJECT 05",
    description: "A comprehensive digital showcase and functional portal associated with my Smart India Hackathon 2026 national innovation track project work.",
    image: "/projects/sih-2026.jpg",
    tags: ["Next.js/React", "SIH 2026", "Hackathon Project", "Web Portal", "Vercel"],
    liveUrl: "https://sih2026-black.vercel.app/",
    buttonText: "View Project",
    isLive: true
  },
  {
    id: "collapse-detection",
    title: "Human Collapse Detection System",
    category: "AI | Computer Vision",
    number: "PROJECT 06",
    description: "A real-time human collapse detection system using Python, OpenCV, and MediaPipe. The project uses webcam-based monitoring to identify potential collapse events.",
    image: "/projects/collapse-detection.png",
    tags: ["Python", "OpenCV", "MediaPipe", "Computer Vision", "Pose Estimation"],
    isLive: false,
    detailsComingSoon: true
  },
  {
    id: "smart-volunteer",
    title: "Smart Volunteer System",
    category: "Web Development | Community Technology",
    number: "PROJECT 07",
    description: "A web-based project focused on supporting volunteer coordination, civic engagement drives, and real-time community participation tracking.",
    image: "/projects/smart-volunteer.jpg",
    tags: ["Web Development", "Event Scheduling", "Civic Platform", "Community"],
    isLive: false,
    detailsComingSoon: true
  },
  {
    id: "food-genie",
    title: "Food Genie",
    category: "Internship Project | Full-Stack Development",
    number: "PROJECT 08",
    description: "An AI-powered food ordering application developed during my Web Development Internship at WebStack Academy, featuring food browsing, cart management, ordering, and Stripe payment integration.",
    image: "/projects/food-genie.jpg",
    tags: ["React.js", "Node.js", "Express", "Stripe", "Full-Stack"],
    isLive: false,
    detailsComingSoon: true
  }
];

export const achievementsData = [
  {
    badge: "Winner",
    title: "Winner – Most Impactful Project",
    organization: "Unimerge Hackathon",
    description: "Awarded top honor for conceptualizing and developing high-impact digital solutions that solve real community challenges.",
    type: "trophy"
  },
  {
    badge: "Top 10 Selection",
    title: "Top 10 – Atria Internal SIH 2026 (Hardware Track)",
    organization: "Smart India Hackathon 2026",
    project: "AI-Powered Underground Mine Safety, Monitoring and Rescue System (SIH26039)",
    description: "Developed hazard monitoring, toxic gas telemetry, and worker safety rescue architecture for perilous underground mining environments.",
    type: "hardware"
  },
  {
    badge: "Top 10 Selection",
    title: "Top 10 – Atria Internal SIH 2026 (Software Track)",
    organization: "Smart India Hackathon 2026",
    project: "AI-Driven Voice Assistant for Livelihood Mapping and NSQF-Aligned Skilling Recommendations (SIH26097)",
    description: "Architected a multilingual voice-first system matching local rural talent with government-certified NSQF skill pathways.",
    type: "software"
  },
  {
    badge: "Leadership & Club",
    title: "Atria AI Club – Designer and Technical Member",
    organization: "Atria Institute of Technology",
    description: "Contributing to technical workshops, UI/UX architecture, AI project mentoring, and hackathon ideation sessions.",
    type: "community"
  },
  {
    badge: "Hackathons",
    title: "Collaborative Technical Projects",
    organization: "Developer Community",
    description: "Active participant in competitive hackathons, open-source codebases, and innovative prototyping sprints.",
    type: "event"
  }
];

export const educationData = [
  {
    institution: "Atria Institute of Technology",
    degree: "B.E. – Computer Science and Engineering",
    location: "Bengaluru, India",
    period: "2025 – Present",
    score: "CGPA: 8.83",
    description: "Undergraduate coursework in Computer Science, Data Structures, Algorithms, Software Engineering, and AI fundamentals."
  },
  {
    institution: "Presidency PU College",
    degree: "Higher Secondary Education (PUC)",
    location: "Bengaluru, India",
    period: "Completed 2023",
    score: "Distinction",
    description: "Rigorous pre-university foundation in Physics, Chemistry, Mathematics, and Computer Science."
  }
];

export const certificationsData = [
  {
    title: "App Building with AppSheet",
    issuer: "Google Cloud Skills Boost",
    year: "2025",
    category: "Cloud & Low-Code"
  },
  {
    title: "Develop with Apps Script and AppSheet",
    issuer: "Google Developers Group",
    year: "2025",
    category: "Workflow Automation"
  },
  {
    title: "Building a Website on Google Cloud",
    issuer: "Google Cloud Skills Boost",
    year: "2025",
    category: "Cloud Infrastructure"
  },
  {
    title: "Get Started with API Gateway",
    issuer: "Google Cloud Skills Boost",
    year: "2025",
    category: "APIs & Microservices"
  },
  {
    title: "Tata – GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    year: "2026",
    category: "Generative AI & Analytics"
  },
  {
    title: "Infosys Springboard – Python Certification",
    issuer: "Infosys Springboard",
    year: "2026",
    category: "Programming"
  },
  {
    title: "IBM SkillsBuild – AI Fundamentals",
    issuer: "IBM SkillsBuild",
    year: "2026",
    category: "Artificial Intelligence"
  }
];
