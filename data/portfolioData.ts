import type {
  Achievement,
  ArchiveProject,
  Certification,
  Education,
  EngineeringProject,
  Experience,
  LeadershipRole,
  NoteArticle,
  SkillCategory,
} from '@/types/portfolio';

const resolveSiteUrl = (): string => {
  const candidate = process.env.NEXT_PUBLIC_SITE_URL || process.env.URL;
  if (candidate) return candidate.replace(/\/+$/, '');
  return 'http://localhost:3000';
};

export const withBasePath = (url: string): string => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return url.startsWith('/') ? `${basePath}${url}` : url;
};

export const SITE_CONFIG = {
  name: 'Zohra Ahmad',
  title: 'Zohra Ahmad | Software Engineer',
  description:
    'Zohra Ahmad is a Software Engineer focused on backend engineering, distributed systems, cloud infrastructure, AI and cybersecurity.',
  location: 'Jeddah, Saudi Arabia',
  timezone: 'Asia/Riyadh',
  email: 'whyzohra@gmail.com',
  github: 'https://github.com/whyzohra',
  linkedin: 'https://www.linkedin.com/in/zohra-ahmad/',
  url: resolveSiteUrl(),
  portrait: '/images/zohra-ahmad.jpeg' as string | undefined,
} as const;

export const PERSONAL_INFO = {
  name: 'ZOHRA AHMAD',
  taglineEngineer: 'SOFTWARE ENGINEER',
  taglineEngineerShort:
    'Software Engineer • Backend Engineering • Distributed Systems • Cloud • AI • Cybersecurity',
  positioning:
    'Software Engineer focused on backend engineering, distributed systems, cloud infrastructure, AI and cybersecurity — building reliable production systems that scale and solve real problems.',
  location: SITE_CONFIG.location,
  email: SITE_CONFIG.email,
  github: SITE_CONFIG.github,
  linkedin: SITE_CONFIG.linkedin,
};

export const EDUCATION: Education[] = [
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'Indian Institute of Information Technology, Sonepat (IIIT Sonepat)',
    period: 'Graduated July 2026',
    grade: 'CGPA: 7.9 / 10',
    details:
      'Relevant coursework: Object-Oriented Programming, Data Structures & Algorithms, Database Management Systems, Computer Networks, Software Engineering',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: '90ways',
    role: 'Software Development Engineer',
    organization: '90ways',
    period: 'February 2026 – July 2026',
    location: 'Saudi Arabia',
    primary: true,
    summary:
      'Backend REST API development for a CRM system, with SQL optimisation and AI-assisted engineering workflows.',
    focus: [
      'Developed 10+ backend REST APIs in Java, Python and Spring Boot for a CRM system serving 1,000+ requests.',
      'Optimized SQL queries against MySQL/PostgreSQL, reducing response latency by 30% through indexing and query tuning.',
      'Used AI coding tools including Claude, Codex and Gemini across development and testing, cutting development time by 25%.',
    ],
  },
  {
    id: 'amazon',
    role: 'Software Development Engineer Intern',
    organization: 'Amazon',
    period: 'July 2025 – December 2025',
    location: 'Gurugram, India',
    primary: false,
    summary: 'Serverless, event-driven backend engineering on AWS.',
    focus: [
      'Built a serverless, event-driven backend using AWS Lambda, EventBridge and S3 processing 10,000+ daily events, reducing latency by 30%.',
      'Automated ETL pipelines using AWS Glue and DynamoDB, reducing manual data-reconciliation effort by 40%.',
      'Analyzed CloudWatch telemetry to identify pipeline bottlenecks, reducing mean time to detection from 90 to 15 minutes.',
      'Wrote unit/integration tests reaching 90% coverage across 12+ releases with zero critical regressions.',
    ],
  },
  {
    id: 'ihfc',
    role: 'Technology Innovation Intern',
    organization: 'IHFC – Technology Innovation Hub, IIT Delhi',
    period: 'June 1, 2024 – August 31, 2024',
    location: 'India',
    summary:
      'Internship program across drone defence, smart agriculture, robotics, IoT and technology innovation.',
    focus: ['Drone Defence', 'Smart Agriculture', 'Robotics', 'IoT', 'Technology Innovation'],
  },
];

export const LEADERSHIP: LeadershipRole[] = [
  { title: 'Vice President', organization: 'Entrepreneurship Club, IIIT Sonepat' },
  { title: 'President', organization: 'CEM Photography Club, IIIT Sonepat' },
  { title: 'Member', organization: 'Google Developer Student Club (GDSC)' },
  { title: 'Member', organization: 'Indigo Squad, Mood Indigo, IIT Bombay' },
];

export const ADDITIONAL_EXPERIENCE: Experience[] = [];

export const VOLUNTEERING: Experience[] = [];

const projectArchitecture = [
  {
    id: 'scope',
    name: 'SCOPE',
    description: 'Problem definition',
    detail: 'Defined the system requirements and technical scope for the application.',
  },
  {
    id: 'build',
    name: 'BUILD',
    description: 'Implementation',
    detail: 'Built backend services, APIs and client interfaces across the stack.',
  },
  {
    id: 'operate',
    name: 'OPERATE',
    description: 'Delivery',
    detail: 'Deployed, tested and measured performance in production-oriented workflows.',
  },
];

export const FEATURED_ENGINEERING_PROJECTS: EngineeringProject[] = [
  {
    id: 'cold-chain-freshness',
    number: '01',
    title: 'COLD-CHAIN DYNAMIC FRESHNESS TIMER ENGINE',
    slug: 'cold-chain-dynamic-freshness-timer-engine',
    year: '2025',
    category: 'Backend Systems',
    purpose: 'Event-driven freshness tracking for cold-chain logistics.',
    overview:
      'Backend system for dynamic freshness timing within Amazon cold-chain operations, built as part of an event-driven AWS architecture.',
    problem: 'Cold-chain freshness windows need reliable, event-driven timing across distributed container workflows.',
    approach:
      'Implemented as part of an AWS-based backend stack using Lambda, DynamoDB, EventBridge and supporting observability tooling.',
    implementation: [
      'Event-driven backend processing for freshness timer workflows.',
      'AWS Lambda and DynamoDB for stateful service logic.',
      'EventBridge integration for distributed event routing.',
      'CloudWatch monitoring and operational visibility.',
      'Public Pattern Implementation: This project was developed as part of proprietary engineering work. A separate personal implementation demonstrating related event-driven architecture patterns is available publicly.',
    ],
    methods: ['Event-driven architecture', 'Serverless backend'],
    models: [],
    datasets: [],
    technologies: ['Java', 'Python', 'AWS Lambda', 'DynamoDB', 'EventBridge', 'CloudWatch'],
    architecture: projectArchitecture,
    featured: true,
    reports: [{ label: 'Public Pattern Implementation', url: 'https://github.com/whyzohra/eventbridge-automation-pipeline' }],
  },
  {
    id: 'container-state-resolution',
    number: '02',
    title: 'CONTAINER STATE RESOLUTION AND DEVIATION PROCESSING ENGINE',
    slug: 'container-state-resolution-deviation-processing',
    year: '2025',
    category: 'Backend Systems',
    purpose: 'Resolving container state and processing operational deviations.',
    overview:
      'Backend engine for container state resolution and deviation processing within distributed operational workflows.',
    problem:
      'Container state must be resolved consistently and deviations need reliable downstream processing in production systems.',
    approach:
      'Built on AWS serverless and data services with monitoring and testing infrastructure for production-oriented engineering.',
    implementation: [
      'Container state resolution workflows.',
      'Deviation processing pipelines.',
      'AWS Lambda, DynamoDB, EventBridge and AWS Glue integration.',
      'Testing and monitoring infrastructure.',
      'Public Pattern Implementation: This project was developed as part of proprietary engineering work. A separate personal implementation demonstrating related distributed and asynchronous processing patterns is available publicly.',
    ],
    methods: ['Distributed state management', 'Event-driven processing'],
    models: [],
    datasets: [],
    technologies: ['Java', 'Python', 'AWS Lambda', 'DynamoDB', 'EventBridge', 'AWS Glue', 'CloudWatch'],
    architecture: projectArchitecture,
    featured: true,
    reports: [{ label: 'Public Pattern Implementation', url: 'https://github.com/whyzohra/distributed-task-orchestrator' }],
  },
  {
    id: 'columnar-storage',
    number: '03',
    title: 'IN-MEMORY COLUMNAR STORAGE ENGINE PROTOTYPE',
    slug: 'in-memory-columnar-storage-engine',
    category: 'Systems Engineering',
    purpose: 'Exploring columnar in-memory storage engine design.',
    overview: 'Prototype storage engine exploring columnar, in-memory data organisation for analytical workloads.',
    problem: 'Columnar storage layouts can improve analytical read performance when designed for in-memory execution.',
    approach: 'Prototype implementation focused on storage engine fundamentals and system-level design.',
    implementation: ['In-memory columnar storage prototype.'],
    methods: ['Systems prototyping'],
    models: [],
    datasets: [],
    technologies: ['C++'],
    architecture: projectArchitecture,
    featured: true,
  },
  {
    id: 'drone-orchard',
    number: '04',
    title: 'DRONE-BASED INTELLIGENT SYSTEM FOR APPLE ORCHARD MANAGEMENT',
    slug: 'drone-apple-orchard-management',
    category: 'Computer Vision / 3D',
    purpose: 'Intelligent drone-based system for orchard management.',
    overview:
      'Drone-based intelligent system for apple orchard management, combining sensing and software for operational insight.',
    problem: 'Orchard management benefits from aerial sensing and intelligent analysis of field conditions.',
    approach: 'System design combining drone operations with software-driven analysis workflows.',
    implementation: ['Drone-based orchard management system.'],
    methods: ['Intelligent systems', 'Aerial sensing'],
    models: [],
    datasets: [],
    technologies: ['Python', 'C++'],
    architecture: projectArchitecture,
    featured: true,
  },
  {
    id: 'autonomous-vehicle-detection',
    number: '05',
    title: 'AUTONOMOUS VEHICLE / OBJECT DETECTION',
    slug: 'autonomous-vehicle-object-detection',
    category: 'Computer Vision / 3D',
    purpose: 'Object detection work in an autonomous vehicle context.',
    overview: 'Object detection and perception work related to autonomous vehicle systems.',
    problem: 'Reliable object detection is a core requirement for autonomous vehicle perception stacks.',
    approach: 'Computer vision and detection workflows applied to autonomous driving scenarios.',
    implementation: ['Object detection for autonomous vehicle scenarios.'],
    methods: ['Computer vision', 'Object detection'],
    models: [],
    datasets: [],
    technologies: ['Python', 'C++'],
    architecture: projectArchitecture,
    featured: true,
  },
  {
    id: 'meetmind-ai',
    number: '06',
    title: 'MEETMIND AI',
    slug: 'meetmind-ai',
    year: '2025',
    category: 'Full-Stack Application',
    purpose: 'AI-powered meeting platform with automated summaries and Q&A.',
    overview:
      'Built a meeting platform using FastAPI, React and Next.js with OpenAI-powered meeting summaries, authenticated REST APIs and an information-retrieval layer.',
    problem:
      'Meeting follow-up and knowledge retrieval are time-consuming without structured summaries and searchable context.',
    approach:
      'Combined a FastAPI backend, React/Next.js frontend, OpenAI API integration and GitHub Actions / Vercel deployment.',
    implementation: [
      'Built a meeting platform using FastAPI, React and Next.js with OpenAI-powered meeting summaries.',
      'Saved approximately 15 minutes per meeting for 9 users.',
      'Designed authenticated REST APIs and an information-retrieval layer.',
      'Improved Q&A relevance by 25% through prompt engineering.',
    ],
    methods: ['REST API design', 'Information retrieval', 'Prompt engineering'],
    models: ['OpenAI API'],
    datasets: [],
    technologies: [
      'FastAPI',
      'React',
      'Next.js',
      'TypeScript',
      'OpenAI API',
      'REST',
      'GitHub Actions',
      'Vercel',
    ],
    architecture: projectArchitecture,
    featured: true,
    github: 'https://github.com/whyzohra/meetmind-ai',
  },
  {
    id: 'atlas-traffic',
    number: '07',
    title: 'ATLAS – TRAFFIC INTELLIGENCE PLATFORM',
    slug: 'atlas-traffic-intelligence-platform',
    year: '2025',
    category: 'Machine Learning Project',
    purpose: 'Traffic intelligence platform with prediction-backed dashboards.',
    overview:
      'Designed a REST/GraphQL API using PostgreSQL, built React/Next.js dashboards and integrated an open-source traffic-prediction model as the backend data layer.',
    problem:
      'Traffic operations need fast dashboards and predictive insight backed by a reliable data and API layer.',
    approach:
      'Combined PostgreSQL, GraphQL, React/Next.js dashboards and a PyTorch traffic-prediction model with performance-focused frontend delivery.',
    implementation: [
      'Designed a REST/GraphQL API using PostgreSQL.',
      'Built React/Next.js dashboards across 100+ routes.',
      'Reduced dashboard load time by 45%.',
      'Integrated an open-source traffic-prediction model as the backend data layer.',
      'Achieved an F1 score of 0.697.',
    ],
    methods: ['API design', 'Dashboard engineering', 'Model integration'],
    models: ['Open-source traffic-prediction model'],
    datasets: [],
    technologies: ['Python', 'PyTorch', 'GraphQL', 'PostgreSQL', 'React', 'Next.js'],
    architecture: projectArchitecture,
    metrics: [{ label: 'F1 score', value: '0.697' }],
    featured: true,
  },
  {
    id: 'smart-expense-tracker-api',
    number: '08',
    title: 'SMART EXPENSE TRACKER API',
    slug: 'smart-expense-tracker-api',
    year: '2026',
    category: 'Backend Systems',
    purpose: 'REST API for personal expense management.',
    overview:
      'Spring Boot 3 REST API for personal expense management built with Java 21.',
    problem: 'Personal expense tracking needs a simple and reliable API for everyday financial management.',
    approach:
      'Built a Java 21 Spring Boot 3 backend focused on REST-based personal expense management.',
    implementation: ['REST API for personal expense management.', 'Spring Boot 3 and Java 21 backend.'],
    methods: ['REST API design', 'Backend engineering'],
    models: [],
    datasets: [],
    technologies: ['Spring Boot 3', 'Java 21', 'REST API'],
    architecture: projectArchitecture,
    featured: true,
    github: 'https://github.com/whyzohra/smart-expense-tracker-api',
  },
  {
    id: 'ml-observability-dashboard',
    number: '09',
    title: 'ML OBSERVABILITY DASHBOARD',
    slug: 'ml-observability-dashboard',
    year: '2025',
    category: 'Machine Learning Project',
    purpose: 'Monitoring ML infrastructure workflows and service health.',
    overview:
      'Cloud-native ML observability and monitoring dashboard built using Python, Kubernetes, and distributed infrastructure concepts.',
    problem:
      'ML infrastructure needs operational visibility across distributed services and monitoring workflows.',
    approach:
      'Built a Python/FastAPI service with Kubernetes deployment support to improve monitoring and observability.',
    implementation: [
      'ML service monitoring.',
      'Infrastructure observability.',
      'Metrics and logging workflows.',
      'Kubernetes deployment support.',
    ],
    methods: ['Monitoring workflows', 'Infrastructure observability'],
    models: [],
    datasets: [],
    technologies: ['Python', 'FastAPI', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana', 'Linux'],
    architecture: projectArchitecture,
    featured: true,
    github: 'https://github.com/whyzohra/ml-observability-dashboard',
  },
];

export const SECONDARY_PROJECT_ARCHIVE: ArchiveProject[] = [
  {
    slug: 'cold-chain-dynamic-freshness-timer-engine',
    title: 'Cold-Chain Dynamic Freshness Timer Engine',
    domain: 'Backend / AWS',
    summary: 'Event-driven freshness tracking for cold-chain logistics on AWS.',
    implementation: [
      'Event-driven backend processing for freshness timer workflows.',
      'AWS Lambda, DynamoDB, EventBridge and CloudWatch integration.',
      'Public Pattern Implementation: This project was developed as part of proprietary engineering work. A separate personal implementation demonstrating related event-driven architecture patterns is available publicly.',
    ],
    technologies: ['Java', 'Python', 'AWS Lambda', 'DynamoDB', 'EventBridge', 'CloudWatch'],
    report: { label: 'Public Pattern Implementation', url: 'https://github.com/whyzohra/eventbridge-automation-pipeline' },
  },
  {
    slug: 'container-state-resolution-and-deviation-processing-engine',
    title: 'Container State Resolution and Deviation Processing Engine',
    domain: 'Backend / distributed systems',
    summary: 'Container state resolution and deviation processing for operational workflows.',
    implementation: [
      'Container state resolution and deviation processing pipelines.',
      'AWS Lambda, DynamoDB, EventBridge, AWS Glue and CloudWatch.',
      'Public Pattern Implementation: This project was developed as part of proprietary engineering work. A separate personal implementation demonstrating related distributed and asynchronous processing patterns is available publicly.',
    ],
    technologies: ['Java', 'Python', 'AWS Lambda', 'DynamoDB', 'EventBridge', 'AWS Glue'],
    report: { label: 'Public Pattern Implementation', url: 'https://github.com/whyzohra/distributed-task-orchestrator' },
  },
  {
    slug: 'in-memory-columnar-storage-engine-prototype',
    title: 'In-Memory Columnar Storage Engine Prototype',
    domain: 'Systems engineering',
    summary:
      'Prototype storage engine exploring columnar, in-memory data organisation for analytical workloads.',
    implementation: ['In-memory columnar storage prototype.'],
    technologies: ['C++'],
  },
  {
    slug: 'drone-based-intelligent-system-for-apple-orchard-management',
    title: 'Drone-Based Intelligent System for Apple Orchard Management',
    domain: 'Intelligent systems / vision',
    summary:
      'Drone-based intelligent system for apple orchard management, combining sensing and software for operational insight.',
    implementation: ['Drone-based orchard management system.'],
    technologies: ['Python', 'C++'],
  },
  {
    slug: 'autonomous-vehicle-object-detection',
    title: 'Autonomous Vehicle / Object Detection',
    domain: 'Computer vision / robotics',
    summary: 'Object detection and perception work related to autonomous vehicle systems.',
    implementation: ['Object detection for autonomous vehicle scenarios.'],
    technologies: ['Python', 'C++'],
  },
  {
    slug: 'meetmind-ai',
    title: 'MeetMind AI',
    domain: 'Full-stack / AI application',
    summary:
      'Meeting platform using FastAPI, React and Next.js with OpenAI-powered summaries and information retrieval.',
    implementation: [
      'Built authenticated REST APIs and an information-retrieval layer.',
      'Improved Q&A relevance by 25% through prompt engineering.',
    ],
    technologies: ['FastAPI', 'React', 'Next.js', 'TypeScript', 'OpenAI API'],
    github: 'https://github.com/whyzohra/meetmind-ai',
  },
  {
    slug: 'atlas-traffic-intelligence-platform',
    title: 'Atlas – Traffic Intelligence Platform',
    domain: 'Data / ML platform',
    summary:
      'Traffic intelligence platform with PostgreSQL-backed APIs, React/Next.js dashboards and integrated prediction model.',
    implementation: [
      'Built REST/GraphQL APIs and 100+ dashboard routes.',
      'Reduced dashboard load time by 45%.',
    ],
    technologies: ['Python', 'PyTorch', 'GraphQL', 'PostgreSQL', 'React', 'Next.js'],
  },
  {
    slug: 'smart-expense-tracker-api',
    title: 'Smart Expense Tracker API',
    domain: 'Backend / REST API',
    summary: 'Spring Boot 3 REST API for personal expense management with Java 21.',
    implementation: ['REST API for personal expense management.', 'Java 21 and Spring Boot 3 backend.'],
    technologies: ['Spring Boot 3', 'Java 21', 'REST API'],
    github: 'https://github.com/whyzohra/smart-expense-tracker-api',
  },
  {
    slug: 'ml-observability-dashboard',
    title: 'ML Observability Dashboard',
    domain: 'Data / ML monitoring',
    summary: 'Cloud-native observability dashboard for monitoring ML infrastructure and service health.',
    implementation: ['ML service monitoring.', 'Infrastructure observability.', 'Kubernetes deployment support.'],
    technologies: ['Python', 'FastAPI', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana'],
    github: 'https://github.com/whyzohra/ml-observability-dashboard',
  },
];

export const ARCHIVE_PROJECT_DETAILS: Record<string, string[]> = {
  'Cold-Chain Dynamic Freshness Timer Engine': [
    'Event-driven backend for dynamic freshness timing in cold-chain logistics.',
    'Built on AWS Lambda, DynamoDB, EventBridge and CloudWatch.',
    'Public Pattern Implementation: This project was developed as part of proprietary engineering work. A separate personal implementation demonstrating related event-driven architecture patterns is available publicly at https://github.com/whyzohra/eventbridge-automation-pipeline.',
  ],
  'Container State Resolution and Deviation Processing Engine': [
    'Backend engine for container state resolution and deviation processing.',
    'AWS serverless stack with Glue, monitoring and testing infrastructure.',
    'Public Pattern Implementation: This project was developed as part of proprietary engineering work. A separate personal implementation demonstrating related distributed and asynchronous processing patterns is available publicly at https://github.com/whyzohra/distributed-task-orchestrator.',
  ],
  'In-Memory Columnar Storage Engine Prototype': [
    'Prototype exploring columnar, in-memory storage organisation.',
  ],
  'Drone-Based Intelligent System for Apple Orchard Management': [
    'Intelligent drone-based system for apple orchard management.',
  ],
  'Autonomous Vehicle / Object Detection': [
    'Object detection work in an autonomous vehicle context.',
  ],
  'MeetMind AI': [
    'Built a meeting platform using FastAPI, React and Next.js with OpenAI-powered meeting summaries.',
    'Saved approximately 15 minutes per meeting for 9 users.',
    'Designed authenticated REST APIs and an information-retrieval layer with prompt-engineered Q&A.',
  ],
  'Atlas – Traffic Intelligence Platform': [
    'Designed a REST/GraphQL API using PostgreSQL with React/Next.js dashboards across 100+ routes.',
    'Integrated an open-source traffic-prediction model as the backend data layer.',
    'Achieved an F1 score of 0.697 and reduced dashboard load time by 45%.',
  ],
  'Smart Expense Tracker API': [
    'Spring Boot 3 REST API for personal expense management built with Java 21.',
  ],
  'ML Observability Dashboard': [
    'Cloud-native ML observability dashboard for monitoring service health and distributed workflows.',
  ],
};

export const ARCHIVE_PROJECT_DETAILS_BY_SLUG: Record<string, string[]> = Object.fromEntries(
  SECONDARY_PROJECT_ARCHIVE.map((project) => [
    project.slug,
    ARCHIVE_PROJECT_DETAILS[project.title] ?? project.implementation,
  ]),
);

export const ABOUT_CHRONOLOGY_ORDER = ['90ways', 'amazon', 'ihfc'] as const;

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Competitive programming',
    detail: 'Solved 555+ algorithmic problems across LeetCode (291) and CodeChef (264).',
  },
  {
    title: 'Guinness World Record',
    detail:
      'Participated in the KANZ AI Hackathon, officially recognized as the world\'s largest AI hackathon.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming',
    items: ['Java', 'JavaScript/TypeScript', 'Python', 'C++', 'C#', 'SQL'],
  },
  {
    category: 'Software Engineering',
    items: [
      'OOP',
      'MVC',
      'Design Patterns',
      'SOLID',
      'Data Structures & Algorithms',
      'System Design',
      'REST APIs',
    ],
  },
  {
    category: 'Databases & Networking',
    items: ['PostgreSQL', 'MySQL', 'RDBMS', 'TCP/IP', 'HTTP/HTTPS', 'Computer Networks'],
  },
  {
    category: 'Backend & Cloud',
    items: ['Spring Boot', 'AWS Lambda', 'EventBridge', 'S3', 'Glue', 'CloudWatch', 'DynamoDB'],
  },
  {
    category: 'Frontend & Tools',
    items: ['React', 'Next.js', 'Git', 'GitHub', 'CI/CD'],
  },
  {
    category: 'AI',
    items: ['OpenAI API', 'PyTorch', 'AI-assisted development', 'Claude', 'Codex', 'Gemini'],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    tier: 'Primary',
    group: 'Cloud',
    issued: 'July 2026',
  },
  {
    title: 'Oracle Database SQL Certified Associate (1Z0-071)',
    issuer: 'Udemy',
    tier: 'Primary',
    group: 'Databases',
    issued: 'September 2024',
  },
  {
    title: 'Microsoft Power BI Data Analyst Specialization',
    issuer: 'Microsoft',
    tier: 'Additional study',
    group: 'Data',
    issued: 'July 2024',
    credentialId: 'E9FAH6XDP97F',
  },
  {
    title: 'JPMorgan Chase & Co. – Cybersecurity Job Simulation',
    issuer: 'Forage',
    tier: 'Primary',
    group: 'Cybersecurity',
    issued: 'September 2024',
    credentialId: 'FS2yi4nA2os7QBfqC',
  },
  {
    title: 'Google Project Management',
    issuer: 'Coursera',
    tier: 'Additional study',
    group: 'Professional',
    credentialId: '3TU9Q8A6V3KD',
  },
  {
    title: 'The Data Science Course: Complete Data Science Bootcamp 2024',
    issuer: 'Udemy',
    tier: 'Additional study',
    group: 'Data',
    issued: 'February 2024',
  },
  {
    title: 'Google Cybersecurity Certifications',
    issuer: 'Coursera',
    tier: 'Primary',
    group: 'Cybersecurity',
    issued: 'October 2023',
    credentialId: '2LGDXS8NHPEA',
  },
  {
    title: 'Google Certified Fundamentals of Digital Marketing',
    issuer: 'Google Digital Garage',
    tier: 'Additional study',
    group: 'Professional',
    issued: 'July 2022',
    credentialId: 'KDY 4LN AJ9',
  },
];

export const FULL_TECHNICAL_INDEX: SkillCategory[] = SKILL_CATEGORIES;

export const NOTE_ARTICLES: NoteArticle[] = [];
