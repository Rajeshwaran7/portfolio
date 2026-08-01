export const profile = {
  name: "Rajeshwaran K",
  title: "AI Full Stack Engineer",
  tagline: "Node.js, React & Angular systems — with a Generative AI edge.",
  email: "ramseetha4249@gmail.com",
  phone: "+91 93844 68663",
  linkedin: "https://www.linkedin.com/in/rajeshwaran-k-38129821b/",
  github: "https://github.com/Rajeshwaran7",
  medium: "https://medium.com/@rajeshwaran-blog",
  resume: "/rajeshwarank_software_engineer_.docx",
  photo: "/profile.png",
  about: [
    "3.5+ years building full-stack products — TypeScript, Node.js, React, Angular, and Generative AI.",
    "Shipped across consumer goods, environmental services, legal tech, and live-streaming domains.",
    "Comfortable owning a feature end to end: API design, database, UI, and the AWS/Azure infra underneath.",
    "I build complete, business-ready SaaS products and run the marketing campaigns to help them scale.",
  ],
};

export type Skill = { category: string; items: string[] };

export const skills: Skill[] = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "HTML/CSS"] },
  { category: "Frontend", items: ["React", "Angular", "Redux"] },
  { category: "Backend", items: ["Node.js", "Express", "NestJS"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "CosmosDB", "Redis"] },
  { category: "Cloud & DevOps", items: ["AWS (EC2, S3, Lambda, CI/CD)", "Azure (Blob, Service Bus, gRPC)", "Docker"] },
  { category: "Architecture", items: ["Microservices", "Monolithic", "Nx Monorepo"] },
  { category: "AI", items: ["OpenAI", "Agentic AI", "Claude & other LLMs"] },
  { category: "Integrations", items: ["Stripe", "Segment", "Braze", "Contentful", "Google Maps"] },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "Optisol Business Solutions",
    period: "Jun 2023 — Present",
    points: [
      "Own features across consumer goods, environmental, and generative AI projects.",
      "Design REST APIs and microservices; ship both backend services and frontend UI.",
      "Mentor teammates on scalable code and review updates for best practices.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Optisol Business Solutions",
    period: "Apr 2023 — Jun 2023",
    points: [
      "Built features for environmental and AI projects, ramping up on production codebases.",
    ],
  },
];

export type Project = {
  name: string;
  domain: string;
  stack: string[];
  description: string;
  points: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    name: "Manage Lawn Enterprise",
    domain: "Lawn Care",
    stack: ["Node.js (Microservices)", "Angular", "TypeScript", "MySQL", "TypeORM"],
    description:
      "Full-stack lawn care management platform on Web, Mobile, and PWA — scheduling, service tracking, and customer workflows.",
    points: [
      "Built microservices and REST APIs for customer, service, and scheduling workflows.",
      "Designed and optimized MySQL schemas, queries, and relationships.",
      "Shipped reusable UI components and backend modules for the Web/PWA apps.",
    ],
  },
  {
    name: "Ajuve AI",
    domain: "AI Legal Tech",
    stack: ["Node.js (Microservices)", "MongoDB", "Mongoose", "TypeScript"],
    description:
      "AI-powered legal assistance platform — upload documents and images for ML-based legal analysis, across mobile, web, and admin apps.",
    points: [
      "Built RESTful APIs for AI-powered document and image processing workflows.",
      "Integrated Node.js services with Python-based ML systems for legal document analysis.",
      "Implemented secure auth, notifications, and messaging via AWS Cognito, Lambda, and SES.",
    ],
  },
  {
    name: "Pampers Rewards",
    domain: "Consumer Goods",
    stack: ["Node.js", "NestJS", "CosmosDB", "gRPC", "Azure Service Bus", "Nx Monorepo"],
    description:
      "Rewards app — scan diaper codes to earn points, redeem rewards, and access parenting tips, plus a stakeholder content portal.",
    points: [
      "Built REST APIs on Azure Functions for rewards, content, and user management.",
      "Developed a stakeholder portal (Angular + Express) for content migration and management.",
      "Structured shared libraries and services within an Nx monorepo for faster delivery.",
    ],
  },
  {
    name: "Republic Services",
    domain: "Waste Management",
    stack: ["Node.js (Microservices)", "DynamoDB", "AWS Lambda", "S3", "Auth0"],
    description:
      "Web platform to log, review, and process industrial waste (hospital, chemical, e-waste) with document-backed approval workflows.",
    points: [
      "Built APIs for waste processing, document verification, and approval workflows.",
      "Used S3 for document storage and DynamoDB for waste-related data.",
      "Implemented role-based access with Auth0 across multiple user roles.",
    ],
  },
  {
    name: "Dochain",
    domain: "SaaS Product — Healthcare",
    stack: ["Next.js", "PostgreSQL"],
    description:
      "Hyperlocal doctor-booking marketplace — built end-to-end as a SaaS product for a business, from engineering to growth.",
    points: [
      "Built doctor search and filtering across 50+ specializations and locations.",
      "Implemented real-time slot booking with instant confirmation.",
      "Modeled verified practitioner credentials and patient reviews in PostgreSQL.",
      "Ran social media ad campaigns to drive user acquisition and bookings.",
    ],
    link: "https://dochain-web-patient.vercel.app/",
  },
  {
    name: "Live Code Execution Visualizer",
    domain: "Personal Project — Developer Tools",
    stack: ["React", "Node.js", "NestJS"],
    description:
      "Educational tool that visualizes code execution step by step, in JavaScript and Python.",
    points: [
      "Built a live code editor with run, step, and restart controls at adjustable playback speed.",
      "Visualized the call stack, variables, console output, and event loop in real time.",
    ],
    link: "https://code-execution-api.vercel.app/",
  },
];

export const awards = [
  "Spot Award — exceeding expectations on project contributions and delivery.",
  "Spot Award — backend stability improvements and rapid issue resolution.",
  "Runner-up — built an AI agent ticket-routing mechanism that automated support workflows.",
  "Recognized for outstanding leadership across cross-functional teams.",
];

export const education = {
  degree: "B.Com — Bachelor of Commerce",
  school: "Karpagam Academy of Higher Education, Coimbatore",
  period: "2019 — 2022",
};

export type Certification = { name: string; issuer: string; url: string };

export const certifications: Certification[] = [
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    url: "https://learn.microsoft.com/api/credentials/share/en-in/rajeshwaran/D1D9682983CAF33C?sharingId=284FC445D4B529B6",
  },
];
