// Personal Information
export const personalInfo = {
  name: "Lenta Kristina",
  fullName: "Lenta Kristina Sianturi",
  title: "Web Developer",
  tagline: "Building full-stack applications with Laravel, React, and PostgreSQL. Passionate about creating modern, efficient digital solutions! 🚀",
  location: "Yogyakarta, Indonesia",
  phone: "085183380512",
  email: "lentakristina512@gmail.com",
  github: "https://github.com/lentakristina",
  linkedin: "#", // Update with your LinkedIn URL
  resume: "/CV.pdf" // Place your resume in public folder
};

// Projects Data
export const projects = [
  {
    title: "Finance Dashboard Web App",
    period: "Aug 2025 - Sep 2025",
    tech: ["Laravel", "React", "PostgreSQL", "Recharts"],
    description: "Financial management app with transaction tracking, expense categorization, and savings goals with real-time updates.",
    highlights: [
      "RESTful APIs with Laravel backend",
      "Interactive Recharts dashboards",
      "Glassmorphism design system"
    ],
    color: "from-purple-500 to-pink-500",
    github: "hhttps://github.com/lentakristina/Finance", // Update with actual repo if available
    demo: "https://finance-ashen-psi.vercel.app/"
  },
  {
    title: "Web-based Leave Application System (Skripsi)",
    period: "Feb 2023 - Jul 2023",
    tech: ["Laravel", "MySQL", "JavaScript", "Figma"],
    description: "HR management system digitalizing leave requests and approvals with role-based access control. Final year thesis project.",
    highlights: [
      "SDLC methodology implementation",
      "Black-box testing procedures",
      "Figma prototyping workflow"
    ],
    color: "from-blue-500 to-cyan-500",
    github: "https://github.com/lentakristina", // Update if you want to upload skripsi code
    demo: "#" // No live demo since project is no longer accessible
  }
];

// Skills Data
export const skills = [
  { name: "React", level: 90, color: "bg-cyan-500" },
  { name: "Laravel", level: 85, color: "bg-red-500" },
  { name: "JavaScript", level: 88, color: "bg-yellow-500" },
  { name: "PostgreSQL", level: 80, color: "bg-blue-500" },
  { name: "Tailwind CSS", level: 92, color: "bg-teal-500" },
  { name: "REST API", level: 85, color: "bg-green-500" },
  { name: "Figma", level: 87, color: "bg-purple-500" },
  { name: "Git", level: 83, color: "bg-orange-500" }
];

// Work Experience Data
export const experience = [
  {
    role: "Marketing Data Analyst Staff",
    company: "PT WOM Finance",
    location: "Jakarta, Indonesia",
    period: "May 2024 - Oct 2024",
    achievements: [
      "Increased reporting accuracy by 15% and reduced errors by 40%",
      "Designed customer segmentation models for targeted campaigns",
      "Collaborated with cross-functional teams for data-driven insights"
    ]
  },
  {
    role: "UI/UX Developer Intern",
    company: "Dewan Perwakilan Rakyat Daerah",
    location: "Yogyakarta, Indonesia",
    period: "Sep 2022 - Nov 2022",
    achievements: [
      "Designed digital prototype reducing manual processing time by 25%",
      "Digitized SOP workflows for efficient leave management",
      "Conducted requirement analysis with stakeholders"
    ]
  }
];

// Education Data
export const education = {
  degree: "Bachelor of Information Systems",
  university: "Universitas Kristen Duta Wacana",
  location: "Yogyakarta, Indonesia",
  period: "Sep 2019 - Aug 2023",
  gpa: "3.47/4.00",
  courses: [
    "Software Engineering",
    "Database Systems",
    "Frontend Engineering",
    "Data Warehousing",
    "Algorithms & Data Structures",
    "Decision Support System",
    "IT Management & Governance"
  ],
  certificates: [
    {
      name: "Complete Web & Mobile Designer: UI/UX, Figma",
      provider: "Udemy",
      period: "Feb 2024 - Mar 2024"
    }
  ]
};

// Navigation Items
export const navItems = ["Home", "Projects", "Skills", "Experience"];

// Social Links
export const socialLinks = [
  { name: "GitHub", url: personalInfo.github },
  { name: "Email", url: `mailto:${personalInfo.email}` },
  { name: "LinkedIn", url: personalInfo.linkedin }
];