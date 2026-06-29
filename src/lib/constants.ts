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
    "Senior Full Stack Engineer with 14+ years of real software engineering experience. I use AI to accelerate development—building agent-driven workflows with Cursor Automations, guided by the judgment that only comes from a decade of building, deploying, and maintaining production systems.",
  primaryCta: { label: "View Projects", href: "#projects" },
  secondaryCta: { label: "Download Resume", href: "/Resume.pdf" },
};

export const ABOUT = {
  eyebrow: "About",
  title: "Engineering judgment meets AI velocity",
  body: "I'm a senior full-stack engineer who has spent more than a decade in the trenches—shipping web and mobile apps, debugging production incidents, and owning deployments end to end. Today, I'm deeply into AI-accelerated software development: using tools like Cursor and modern AI assistants to move faster on implementation, while grounding every decision in real engineering experience—solid architecture, secure defaults, maintainable code, and reliable CI/CD. I have designed and built an AI-automated delivery workflow with Cursor Automations—an agent-driven GitHub lifecycle (plan, code, unit-test, review, document, test) orchestrated through webhooks, relay services, and MCP integrations. That combination lets me deliver production-quality software at a pace that keeps up with today's expectations.",
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
    items: ["React", "React Native", "AngularJS", "Redux", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    icon: "server" as const,
    items: ["Node.js", "GraphQL", "Hono", "Socket.io", "REST APIs"],
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
    items: ["Firebase", "Drizzle ORM", "Prisma"],
  },
  {
    title: "AI & Workflow",
    icon: "sparkles" as const,
    items: [
      "Cursor Automations (agent-driven plan / code / test / review / document workflows)",
      "AI automation kit authoring (@cc-talent/cursor-automation-kit)",
      "GitHub webhooks, relay orchestration, and MCP (GitHub, SonarQube)",
      "Prompt-driven iteration with engineering review",
      "AI-accelerated prototyping → production hardening",
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
    id: "cursor-automation-kit",
    title: "Cursor Automation Kit",
    description:
      "Designed and built @cc-talent/cursor-automation-kit — an npm scaffold that connects GitHub webhooks to six Cursor Automations (plan, code, unit-test, review, document, test) for an agent-driven software delivery lifecycle with CI, Sonar, Snyk, and MCP integrations.",
    tech: ["Cursor Automations", "Node.js", "GitHub Actions", "MCP", "SonarQube", "Graphify"],
    image: "/images/projects/cursor-automation-kit.svg",
    link: "https://github.com/CC-Talent/cursor-automation-kit",
    linkLabel: "View Cursor Automation Kit on GitHub",
  },
  {
    id: "iperform",
    title: "iPerform",
    description:
      "A SaaS streaming platform for musicians to upload concerts, video streams, and latest music.",
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
    id: "iplayya",
    title: "iPlayya",
    description:
      "Cross-platform IPTV mobile application built for Deluge Technology Trading Corp.",
    tech: ["React Native", "GraphQL", "Firebase"],
    image: "/images/projects/iplayya.png",
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
    location: "Clark Freeport Zone",
    period: "Feb 2025 – Present",
    bullets: [
      "Designed and built @cc-talent/cursor-automation-kit — an AI-automated workflow using Cursor Automations for plan, code, unit-test, review, document, and test agents orchestrated via GitHub webhooks and Cinco relay.",
      "Maintain Kubernetes-based production deployments on Azure, resolving incidents and configuration changes across containerized workloads.",
      "Manage infrastructure as code with FluxCD, Terraform, and Helm for reliable, repeatable releases.",
      "Optimize slow integration tests and CI/CD pipelines to improve build performance and reduce deployment times.",
    ],
    tech: ["Docker", "Kubernetes", "Azure", "Cursor Automations", "Node.js", "FluxCD", "Terraform", "Helm"],
  },
  {
    title: "Senior Full Stack Developer",
    company: "Lions and Legacy",
    location: "BGC",
    period: "Sep 2024 – Feb 2025",
    bullets: [
      "Built web and mobile applications with React, React Native, and Node.js.",
      "Implemented real-time chat, notifications, and commenting with Socket.io.",
      "Developed scalable backend APIs on Cloudflare Workers using Hono and Drizzle ORM.",
      "Deployed applications to Vercel with modern CI/CD workflows.",
    ],
    tech: ["React", "React Native", "Node.js", "Cloudflare Workers", "Socket.io", "Vercel"],
  },
  {
    title: "Senior Developer",
    company: "Coherent Global",
    location: "Ayala",
    period: "Sep 2022 – Oct 2024",
    bullets: [
      "Maintained production web applications and proactively managed production incidents.",
      "Hardened container image builds and dependencies with Trivy for Kubernetes client deployments.",
      "Owned CI/CD pipelines with GitHub Actions and CircleCI across Linux-based infrastructure.",
    ],
    tech: ["Node.js", "React", "Docker", "Kubernetes", "Helm", "C#", "F#", "GitHub Actions"],
  },
  {
    title: "Senior Software Developer",
    company: "Deluge Technology Corporation",
    location: "Angeles City, Pampanga",
    period: "Oct 2020 – Jan 2022",
    bullets: [
      "Architected and built a React Native IPTV application from the ground up.",
      "Collaborated on backend design using GraphQL, Redux-saga, and Firebase.",
    ],
    tech: ["React Native", "GraphQL", "Redux", "Firebase"],
  },
];

export const EARLIER_EXPERIENCE =
  "React Native Developer at GetDevs · Senior Web Developer at Boomering Inc. · Senior Front-end Developer at Site Skills Training · Front-end Developer at Linkage Web Development (2013–2020)";

export const FOOTER = {
  tagline:
    "Senior full-stack engineer building production systems with AI-accelerated workflows and Cursor Automations.",
  copyright: `© ${new Date().getFullYear()} Edward De Guzman. All rights reserved.`,
};
