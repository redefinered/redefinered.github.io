export const SITE = {
  name: "Edward De Guzman",
  title: "Senior Full Stack Engineer",
  email: "redefinered@gmail.com",
  phone: "+63 917 777 3688",
  linkedin: "https://www.linkedin.com/in/edward-de-guzman-27925b7a/",
  github: "https://github.com/redefinered",
  portfolio: "https://redefinered.github.io",
};

export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  { label: "GitHub", href: SITE.github, icon: "github" as const },
  { label: "LinkedIn", href: SITE.linkedin, icon: "linkedin" as const },
  { label: "Email", href: `mailto:${SITE.email}`, icon: "mail" as const },
];

export const HERO = {
  eyebrow: "AI-Accelerated · Seasoned Engineering",
  headline: "Edward De Guzman",
  subhead:
    "Senior Full Stack Engineer with 15 years of hands-on software engineering experience building scalable web and mobile applications. Passionate about AI-accelerated software development—leveraging modern AI tooling to ship faster while applying the architectural rigor, security practices, and production discipline of a seasoned engineer. Experienced across SaaS, Streaming Media, HealthTech, Insurance, Social Media, and E-commerce.",
  primaryCta: { label: "View Projects", href: "#projects" },
  secondaryCta: { label: "Download Resume", href: "/Resume.pdf" },
};

export const ABOUT = {
  eyebrow: "About",
  title: "Engineering judgment meets AI velocity",
  body: "I'm a senior full-stack engineer with 15 years of hands-on experience building scalable web and mobile applications. I use AI to ship faster—Cursor, LLM tooling, and an end-to-end AI-automated software development workflow with Cursor Automations—while keeping the architectural rigor, security practices, and production discipline of a seasoned engineer. Strong background in Node.js, React, React Native, cloud-native systems, Kubernetes, CI/CD, and Infrastructure as Code. I've worked across SaaS, Streaming Media, HealthTech, Insurance, Social Media, and E-commerce.",
};

export const SKILL_GROUPS = [
  {
    title: "Languages",
    icon: "code" as const,
    items: ["TypeScript", "JavaScript", "C#", "F#"],
  },
  {
    title: "Frontend",
    icon: "layout" as const,
    items: ["React", "React Native", "AngularJS", "Redux", "Tailwind CSS", "Material UI", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    icon: "server" as const,
    items: ["Node.js", "GraphQL", "Hono", "Socket.io", "REST APIs", "Firebase"],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud" as const,
    items: [
      "Docker",
      "Kubernetes",
      "Azure",
      "AWS",
      "Terraform",
      "Helm",
      "FluxCD",
      "GitHub Actions",
      "CircleCI",
      "Cloudflare Workers",
      "Vercel",
    ],
  },
  {
    title: "Databases",
    icon: "database" as const,
    items: ["Firestore", "PostgreSQL", "MySQL", "Drizzle ORM", "Prisma"],
  },
  {
    title: "AI & Workflow",
    icon: "sparkles" as const,
    items: [
      "End-to-end AI-automated software development workflow (Cursor Automations)",
      "AI-assisted development (Cursor, LLM tooling)",
      "Prompt-driven iteration with engineering review",
      "AI-accelerated prototyping",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
  linkLabel?: string;
  featuredApps?: {
    name: string;
    link: string;
  }[];
};

export const PROJECTS: Project[] = [
  {
    id: "parku",
    title: "ParkU",
    description:
      "Smart parking discovery for the Philippines. Drivers list a spot as they leave; arriving drivers reserve it before they get there—handoff, chat, and in-app GCash payments.",
    tech: [
      "React Native",
      "Expo",
      "Express",
      "Firebase",
      "Firestore",
      "Xendit",
      "Google Maps",
      "Kubernetes",
    ],
    image: "/images/projects/parku.png",
    link: "https://apps.apple.com/ph/app/parku/id6763227337",
    linkLabel: "View ParkU on the App Store",
  },
  {
    id: "iperform",
    title: "iPerform",
    description:
      "Musician streaming SaaS platform for uploading concerts, video streams, and latest music.",
    tech: ["React Native", "Node.js", "Streaming"],
    image: "/images/projects/iperform.png",
    link: "https://iperformapp.com",
    linkLabel: "Visit iPerform website",
    featuredApps: [
      {
        name: "Orange & Lemons",
        link: "https://apps.apple.com/ph/app/orange-lemons/id6737976034",
      },
      {
        name: "Chocolate Factory",
        link: "https://apps.apple.com/sa/app/chocolate-factory-band/id6740174598",
      },
    ],
  },
  {
    id: "aia-vitality",
    title: "AIA Vitality",
    description:
      "Health app partnership with Virgin Active. Built the fitness assessment feature in React Native.",
    tech: ["React Native", "HealthTech"],
    image: "/images/projects/aia-vitality.png",
    link: "https://apps.apple.com/ph/app/aia-vitality-philippines/id1536532179",
    linkLabel: "View AIA Vitality on the App Store",
  },
  {
    id: "lifeteen-purpose",
    title: "LifeTeen Purpose",
    description:
      "Church community mobile app with events, messaging, and document sharing for admins, parents, and teens.",
    tech: ["React Native", "Redux", "GraphQL"],
    image: "/images/projects/lifeteen.png",
    link: "https://itunes.apple.com/ph/app/life-teen-purpose/id1455507051?mt=8",
    linkLabel: "View LifeTeen Purpose on the App Store",
  },
];

export const EXPERIENCE = [
  {
    title: "Senior Full Stack Developer",
    company: "CCTalent",
    location: "Clark Freeport Zone, Pampanga",
    period: "Feb 2025 – July 2026",
    bullets: [
      "Designed and implemented an end-to-end AI-automated software development workflow using Cursor Automations, accelerating feature delivery while maintaining engineering quality and production standards.",
      "Managed Kubernetes-based production environments on Azure, resolving production incidents and implementing configuration changes across containerized applications with minimal downtime.",
      "Owned GitOps and Infrastructure as Code workflows using FluxCD, Terraform, and Helm to deliver consistent, repeatable, and reliable deployments.",
      "Optimized integration tests and CI/CD pipelines, reducing build bottlenecks and improving developer productivity and deployment efficiency.",
    ],
    tech: ["Docker", "Kubernetes", "Azure", "AngularJS", "Node.js", "FluxCD", "Terraform", "Helm"],
  },
  {
    title: "Senior Full Stack Developer",
    company: "Lions and Legacy",
    location: "BGC, NCR",
    period: "Sep 2024 – Feb 2025",
    bullets: [
      "Built and delivered web and mobile applications using React, React Native, and Node.js, contributing across the full software development lifecycle from implementation to production deployment.",
      "Developed scalable backend APIs on Cloudflare Workers using Hono and Drizzle ORM, enabling low-latency serverless services.",
      "Implemented real-time chat, notifications, and commenting features using Socket.io to enhance user engagement and collaboration.",
      "Integrated secure subscription and payment processing into the iPerform platform, enabling recurring billing and a seamless purchase experience.",
      "Deployed and maintained applications on Vercel with modern CI/CD workflows, ensuring reliable and efficient releases.",
    ],
    tech: ["React", "React Native", "Node.js", "Cloudflare Workers", "Socket.io", "Vercel"],
  },
  {
    title: "Senior Developer",
    company: "Coherent Global",
    location: "Makati City, NCR",
    period: "Jan 2021 – Oct 2024",
    bullets: [
      "Resolved production incidents across React.js, Node.js, C#, and F# services.",
      "Developed frontend and backend features and enhancements for a microservices-based SaaS platform.",
      "Improved the security and stability of container images deployed to Azure Kubernetes Service (AKS).",
      "Diagnosed and mitigated Kubernetes infrastructure and deployment issues.",
      "Collaborated with engineering teams to coordinate incident response and deliver production-ready solutions.",
      "Supported CI/CD pipelines and deployment processes to ensure reliable software releases.",
    ],
    tech: ["Node.js", "React", "Docker", "Kubernetes", "Helm", "C#", "F#", "GitHub Actions"],
  },
  {
    title: "React Native Developer",
    company: "Get Devs",
    location: "Makati City, NCR",
    period: "Aug 2017 – Jun 2020",
    bullets: [
      "Architected and built a React Native IPTV application from the ground up.",
      "Collaborated on backend design using GraphQL, Redux-saga, and Firebase.",
    ],
    tech: ["React Native", "GraphQL", "Redux", "Firebase"],
  },
];

export const EARLIER_EXPERIENCE =
  "Senior Front-end Developer at Site Skills Training · Front-end Developer at Linkage Web Development (2013–2020)";

export const FOOTER = {
  tagline:
    "Senior full-stack engineer building production systems with AI-accelerated workflows.",
  copyright: `© ${new Date().getFullYear()} Edward De Guzman. All rights reserved.`,
};
