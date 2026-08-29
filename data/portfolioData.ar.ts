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

export { withBasePath } from './portfolioData';

export const SITE_CONFIG = {
  name: 'زهرة أحمد',
  title: 'زهرة أحمد | مهندسة برمجيات',
  description:
    'زهرة أحمد مهندسة برمجيات متخصصة في هندسة الخلفية والأنظمة الموزعة والبنية السحابية والذكاء الاصطناعي والأمن السيبراني.',
  location: 'جدة، المملكة العربية السعودية',
  timezone: 'Asia/Riyadh',
  email: 'whyzohra@gmail.com',
  github: 'https://github.com/whyzohra',
  linkedin: 'https://www.linkedin.com/in/zohra-ahmad/',
  url: 'http://localhost:3000',
  portrait: '/images/zohra-ahmad.jpeg' as string | undefined,
} as const;

export const PERSONAL_INFO = {
  name: 'زهرة أحمد',
  taglineEngineer: 'مهندسة برمجيات',
  taglineEngineerShort:
    'مهندسة برمجيات • هندسة الخلفية • الأنظمة الموزعة • السحابة • الذكاء الاصطناعي • الأمن السيبراني',
  positioning:
    'مهندسة برمجيات متخصصة في هندسة الخلفية والأنظمة الموزعة والبنية السحابية والذكاء الاصطناعي والأمن السيبراني — أبني أنظمة إنتاجية موثوقة قابلة للتوسع تحل مشاكل حقيقية.',
  location: SITE_CONFIG.location,
  email: SITE_CONFIG.email,
  github: SITE_CONFIG.github,
  linkedin: SITE_CONFIG.linkedin,
};

export const EDUCATION: Education[] = [
  {
    degree: 'بكالوريوس التكنولوجيا في علوم الحاسوب والهندسة',
    institution: 'Indian Institute of Information Technology, Sonepat (IIIT Sonepat)',
    period: 'تخرجت يوليو 2026',
    grade: 'المعدل التراكمي: 7.9 / 10',
    details:
      'مقررات ذات صلة: البرمجة كائنية التوجه، هياكل البيانات والخوارزميات، أنظمة إدارة قواعد البيانات، شبكات الحاسوب، هندسة البرمجيات',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: '90ways',
    role: 'مهندسة تطوير برمجيات',
    organization: '90ways',
    period: 'فبراير 2026 – يوليو 2026',
    location: 'المملكة العربية السعودية',
    primary: true,
    summary:
      'تطوير REST APIs للخلفية لنظام CRM، مع تحسين SQL وسير عمل هندسي بمساعدة الذكاء الاصطناعي.',
    focus: [
      'طورت أكثر من 10 REST APIs للخلفية بـ Java و Python و Spring Boot لنظام CRM يخدم أكثر من 1,000 طلب.',
      'حسّنت استعلامات SQL على MySQL/PostgreSQL، مما خفّض زمن الاستجابة بنسبة 30% عبر الفهرسة وضبط الاستعلامات.',
      'استخدمت أدوات برمجة بالذكاء الاصطناعي بما فيها Claude و Codex و Gemini عبر التطوير والاختبار، مما قلّص وقت التطوير بنسبة 25%.',
    ],
  },
  {
    id: 'amazon',
    role: 'مهندسة تطوير برمجيات متدربة',
    organization: 'Amazon',
    period: 'يوليو 2025 – ديسمبر 2025',
    location: 'Gurugram، الهند',
    primary: false,
    summary: 'هندسة خلفية بدون خادم وقائمة على الأحداث على AWS.',
    focus: [
      'بنيت خلفية بدون خادم وقائمة على الأحداث باستخدام AWS Lambda و EventBridge و S3 تعالج أكثر من 10,000 حدث يومياً، مما خفّض زمن الاستجابة بنسبة 30%.',
      'أتمتت خطوط ETL باستخدام AWS Glue و DynamoDB، مما قلّص جهد التسوية اليدوي للبيانات بنسبة 40%.',
      'حللت بيانات CloudWatch لتحديد اختناقات خط الأنابيب، مما خفّض متوسط وقت الاكتشاف من 90 إلى 15 دقيقة.',
      'كتبت اختبارات وحدة/تكامل بلغة تغطية 90% عبر أكثر من 12 إصداراً دون تراجعات حرجة.',
    ],
  },
  {
    id: 'ihfc',
    role: 'متدربة ابتكار تقني',
    organization: 'IHFC – Technology Innovation Hub, IIT Delhi',
    period: '1 يونيو 2024 – 31 أغسطس 2024',
    location: 'الهند',
    summary:
      'برنامج تدريب عبر الدفاع بالطائرات بدون طيار والزراعة الذكية والروبوتات وإنترنت الأشياء والابتكار التقني.',
    focus: ['الدفاع بالطائرات بدون طيار', 'الزراعة الذكية', 'الروبوتات', 'إنترنت الأشياء', 'الابتكار التقني'],
  },
];

export const LEADERSHIP: LeadershipRole[] = [
  { title: 'نائبة الرئيس', organization: 'Entrepreneurship Club, IIIT Sonepat' },
  { title: 'رئيسة', organization: 'CEM Photography Club, IIIT Sonepat' },
  { title: 'عضوة', organization: 'Google Developer Student Club (GDSC)' },
  { title: 'عضوة', organization: 'Indigo Squad, Mood Indigo, IIT Bombay' },
];

export const ADDITIONAL_EXPERIENCE: Experience[] = [];
export const VOLUNTEERING: Experience[] = [];

const projectArchitecture = [
  {
    id: 'scope',
    name: 'النطاق',
    description: 'تحديد المشكلة',
    detail: 'حددت متطلبات النظام والنطاق التقني للتطبيق.',
  },
  {
    id: 'build',
    name: 'البناء',
    description: 'التنفيذ',
    detail: 'بنيت خدمات خلفية و APIs وواجهات عميل عبر المكدس.',
  },
  {
    id: 'operate',
    name: 'التشغيل',
    description: 'التسليم',
    detail: 'نشرت واختبرت وقست الأداء في سير عمل موجه للإنتاج.',
  },
];

export const FEATURED_ENGINEERING_PROJECTS: EngineeringProject[] = [
  {
    id: 'cold-chain-freshness',
    number: '01',
    title: 'محرك مؤقت النضارة الديناميكي لسلسلة التبريد',
    slug: 'cold-chain-dynamic-freshness-timer-engine',
    year: '2025',
    category: 'Backend Systems',
    purpose: 'تتبع النضارة القائم على الأحداث لخدمات لوجستية بسلسلة التبريد.',
    overview:
      'نظام خلفية لتوقيت النضارة الديناميكي ضمن عمليات سلسلة التبريد في Amazon، مبني كجزء من بنية AWS قائمة على الأحداث.',
    problem: 'نوافذ نضارة سلسلة التبريد تحتاج توقيتاً موثوقاً قائماً على الأحداث عبر تدفقات حاويات موزعة.',
    approach:
      'نُفّذ كجزء من مكدس خلفية على AWS باستخدام Lambda و DynamoDB و EventBridge وأدوات ملاحظة داعمة.',
    implementation: [
      'معالجة خلفية قائمة على الأحداث لسير عمل مؤقت النضارة.',
      'AWS Lambda و DynamoDB لمنطق الخدمة ذات الحالة.',
      'تكامل EventBridge لتوجيه الأحداث الموزعة.',
      'مراقبة CloudWatch ورؤية تشغيلية.',
      'تنفيذ نمط عام: طُوّر هذا المشروع ضمن عمل هندسي خاص. يتوفر تنفيذ شخصي منفصل يعرض أنماط بنية قائمة على الأحداث ذات صلة علناً.',
    ],
    methods: ['بنية قائمة على الأحداث', 'خلفية بدون خادم'],
    models: [],
    datasets: [],
    technologies: ['Java', 'Python', 'AWS Lambda', 'DynamoDB', 'EventBridge', 'CloudWatch'],
    architecture: projectArchitecture,
    featured: true,
    reports: [{ label: 'تنفيذ النمط العام', url: 'https://github.com/whyzohra/eventbridge-automation-pipeline' }],
  },
  {
    id: 'container-state-resolution',
    number: '02',
    title: 'محرك حل حالة الحاوية ومعالجة الانحرافات',
    slug: 'container-state-resolution-deviation-processing',
    year: '2025',
    category: 'Backend Systems',
    purpose: 'حل حالة الحاوية ومعالجة الانحرافات التشغيلية.',
    overview: 'محرك خلفية لحل حالة الحاوية ومعالجة الانحرافات ضمن تدفقات عمل تشغيلية موزعة.',
    problem: 'يجب حل حالة الحاوية باتساق ومعالجة الانحرافات بموثوقية في الأنظمة الإنتاجية.',
    approach: 'بُني على خدمات AWS بدون خادم وبيانات مع بنية تحتية للمراقبة والاختبار للهندسة الموجهة للإنتاج.',
    implementation: [
      'سير عمل حل حالة الحاوية.',
      'خطوط معالجة الانحرافات.',
      'تكامل AWS Lambda و DynamoDB و EventBridge و AWS Glue.',
      'بنية تحتية للاختبار والمراقبة.',
      'تنفيذ نمط عام: طُوّر هذا المشروع ضمن عمل هندسي خاص. يتوفر تنفيذ شخصي منفصل يعرض أنماط المعالجة الموزعة وغير المتزامنة ذات صلة علناً.',
    ],
    methods: ['إدارة حالة موزعة', 'معالجة قائمة على الأحداث'],
    models: [],
    datasets: [],
    technologies: ['Java', 'Python', 'AWS Lambda', 'DynamoDB', 'EventBridge', 'AWS Glue', 'CloudWatch'],
    architecture: projectArchitecture,
    featured: true,
    reports: [{ label: 'تنفيذ النمط العام', url: 'https://github.com/whyzohra/distributed-task-orchestrator' }],
  },
  {
    id: 'columnar-storage',
    number: '03',
    title: 'نموذج أولي لمحرك تخزين عمودي في الذاكرة',
    slug: 'in-memory-columnar-storage-engine',
    category: 'Systems Engineering',
    purpose: 'استكشاف تصميم محرك تخزين عمودي في الذاكرة.',
    overview: 'نموذج أولي لمحرك تخزين يستكشف تنظيم بيانات عمودي في الذاكرة لأحمال تحليلية.',
    problem: 'تخطيطات التخزين العمودي يمكن أن تحسّن أداء القراءة التحليلية عند تصميمها للتنفيذ في الذاكرة.',
    approach: 'تنفيذ نموذج أولي يركز على أساسيات محرك التخزين والتصميم على مستوى النظام.',
    implementation: ['نموذج أولي لتخزين عمودي في الذاكرة.'],
    methods: ['نمذجة أنظمة'],
    models: [],
    datasets: [],
    technologies: ['C++'],
    architecture: projectArchitecture,
    featured: true,
  },
  {
    id: 'drone-orchard',
    number: '04',
    title: 'نظام ذكي بالطائرات بدون طيار لإدارة بساتين التفاح',
    slug: 'drone-apple-orchard-management',
    category: 'Computer Vision / 3D',
    purpose: 'نظام ذكي بالطائرات بدون طيار لإدارة البساتين.',
    overview: 'نظام ذكي بالطائرات بدون طيار لإدارة بساتين التفاح، يجمع بين الاستشعار والبرمجيات لرؤية تشغيلية.',
    problem: 'إدارة البساتين تستفيد من الاستشعار الجوي والتحليل الذكي لظروف الحقل.',
    approach: 'تصميم نظام يجمع عمليات الطائرات بدون طيار مع سير عمل تحليل مدفوع بالبرمجيات.',
    implementation: ['نظام إدارة بساتين بالطائرات بدون طيار.'],
    methods: ['أنظمة ذكية', 'استشعار جوي'],
    models: [],
    datasets: [],
    technologies: ['Python', 'C++'],
    architecture: projectArchitecture,
    featured: true,
  },
  {
    id: 'autonomous-vehicle-detection',
    number: '05',
    title: 'كشف المركبات المستقلة / الأجسام',
    slug: 'autonomous-vehicle-object-detection',
    category: 'Computer Vision / 3D',
    purpose: 'عمل كشف أجسام في سياق مركبة مستقلة.',
    overview: 'عمل كشف أجسام وإدراك متعلق بأنظمة المركبات المستقلة.',
    problem: 'كشف الأجسام الموثوق متطلب أساسي لمكدسات إدراك المركبات المستقلة.',
    approach: 'سير عمل رؤية حاسوبية وكشف مطبّق على سيناريوهات القيادة المستقلة.',
    implementation: ['كشف أجسام لسيناريوهات مركبة مستقلة.'],
    methods: ['رؤية حاسوبية', 'كشف أجسام'],
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
    purpose: 'منصة اجتماعات مدعومة بالذكاء الاصطناعي مع ملخصات تلقائية وأسئلة وأجوبة.',
    overview:
      'بنيت منصة اجتماعات باستخدام FastAPI و React و Next.js مع ملخصات اجتماعات مدعومة بـ OpenAI و REST APIs موثقة وطبقة استرجاع معلومات.',
    problem: 'متابعة الاجتماعات واسترجاع المعرفة تستغرق وقتاً دون ملخصات منظمة وسياق قابل للبحث.',
    approach: 'جمعت خلفية FastAPI وواجهة React/Next.js وتكامل OpenAI API ونشر GitHub Actions / Vercel.',
    implementation: [
      'بنيت منصة اجتماعات باستخدام FastAPI و React و Next.js مع ملخصات اجتماعات مدعومة بـ OpenAI.',
      'وفّرت نحو 15 دقيقة لكل اجتماع لـ 9 مستخدمين.',
      'صممت REST APIs موثقة وطبقة استرجاع معلومات.',
      'حسّنت صلة الأسئلة والأجوبة بنسبة 25% عبر هندسة المطالبات.',
    ],
    methods: ['تصميم REST API', 'استرجاع المعلومات', 'هندسة المطالبات'],
    models: ['OpenAI API'],
    datasets: [],
    technologies: ['FastAPI', 'React', 'Next.js', 'TypeScript', 'OpenAI API', 'REST', 'GitHub Actions', 'Vercel'],
    architecture: projectArchitecture,
    featured: true,
    github: 'https://github.com/whyzohra/meetmind-ai',
  },
  {
    id: 'atlas-traffic',
    number: '07',
    title: 'ATLAS – منصة ذكاء حركة المرور',
    slug: 'atlas-traffic-intelligence-platform',
    year: '2025',
    category: 'Machine Learning Project',
    purpose: 'منصة ذكاء حركة مرور مع لوحات معلومات مدعومة بالتنبؤ.',
    overview:
      'صممت REST/GraphQL API باستخدام PostgreSQL، وبنيت لوحات React/Next.js ودمجت نموذج تنبؤ حركة مرور مفتوح المصدر كطبقة بيانات خلفية.',
    problem: 'عمليات حركة المرور تحتاج لوحات سريعة ورؤية تنبؤية مدعومة بطبقة بيانات و API موثوقة.',
    approach: 'جمعت PostgreSQL و GraphQL ولوحات React/Next.js ونموذج PyTorch للتنبؤ بالحركة مع تسليم واجهة يركز على الأداء.',
    implementation: [
      'صممت REST/GraphQL API باستخدام PostgreSQL.',
      'بنيت لوحات React/Next.js عبر أكثر من 100 مسار.',
      'خفّضت وقت تحميل اللوحة بنسبة 45%.',
      'دمجت نموذج تنبؤ حركة مرور مفتوح المصدر كطبقة بيانات خلفية.',
      'حققت درجة F1 بقيمة 0.697.',
    ],
    methods: ['تصميم API', 'هندسة لوحات المعلومات', 'تكامل النماذج'],
    models: ['نموذج تنبؤ حركة مرور مفتوح المصدر'],
    datasets: [],
    technologies: ['Python', 'PyTorch', 'GraphQL', 'PostgreSQL', 'React', 'Next.js'],
    architecture: projectArchitecture,
    metrics: [{ label: 'درجة F1', value: '0.697' }],
    featured: true,
  },
  {
    id: 'smart-expense-tracker-api',
    number: '08',
    title: 'SMART EXPENSE TRACKER API',
    slug: 'smart-expense-tracker-api',
    year: '2026',
    category: 'Backend Systems',
    purpose: 'REST API لإدارة النفقات الشخصية.',
    overview: 'Spring Boot 3 REST API لإدارة النفقات الشخصية مبني بـ Java 21.',
    problem: 'تتبع النفقات الشخصية يحتاج API بسيط وموثوق لإدارة مالية يومية.',
    approach: 'بنيت خلفية Java 21 Spring Boot 3 تركز على إدارة نفقات شخصية عبر REST.',
    implementation: ['REST API لإدارة النفقات الشخصية.', 'خلفية Spring Boot 3 و Java 21.'],
    methods: ['تصميم REST API', 'هندسة الخلفية'],
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
    title: 'لوحة ملاحظة ML',
    slug: 'ml-observability-dashboard',
    year: '2025',
    category: 'Machine Learning Project',
    purpose: 'مراقبة سير عمل بنية ML التحتية وصحة الخدمة.',
    overview: 'لوحة ملاحظة ومراقبة ML سحابية أصلية مبنية بـ Python و Kubernetes ومفاهيم بنية موزعة.',
    problem: 'بنية ML التحتية تحتاج رؤية تشغيلية عبر خدمات موزعة وسير عمل مراقبة.',
    approach: 'بنيت خدمة Python/FastAPI مع دعم نشر Kubernetes لتحسين المراقبة والملاحظة.',
    implementation: [
      'مراقبة خدمة ML.',
      'ملاحظة البنية التحتية.',
      'سير عمل المقاييس والتسجيل.',
      'دعم نشر Kubernetes.',
    ],
    methods: ['سير عمل المراقبة', 'ملاحظة البنية التحتية'],
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
    title: 'محرك مؤقت النضارة الديناميكي لسلسلة التبريد',
    domain: 'Backend / AWS',
    summary: 'تتبع نضارة قائم على الأحداث لخدمات لوجستية بسلسلة التبريد على AWS.',
    implementation: [
      'معالجة خلفية قائمة على الأحداث لسير عمل مؤقت النضارة.',
      'تكامل AWS Lambda و DynamoDB و EventBridge و CloudWatch.',
      'تنفيذ نمط عام: طُوّر هذا المشروع ضمن عمل هندسي خاص. يتوفر تنفيذ شخصي منفصل يعرض أنماط بنية قائمة على الأحداث ذات صلة علناً.',
    ],
    technologies: ['Java', 'Python', 'AWS Lambda', 'DynamoDB', 'EventBridge', 'CloudWatch'],
    report: { label: 'تنفيذ النمط العام', url: 'https://github.com/whyzohra/eventbridge-automation-pipeline' },
  },
  {
    slug: 'container-state-resolution-and-deviation-processing-engine',
    title: 'محرك حل حالة الحاوية ومعالجة الانحرافات',
    domain: 'Backend / distributed systems',
    summary: 'حل حالة الحاوية ومعالجة الانحرافات لسير العمل التشغيلي.',
    implementation: [
      'خطوط حل حالة الحاوية ومعالجة الانحرافات.',
      'AWS Lambda و DynamoDB و EventBridge و AWS Glue و CloudWatch.',
      'تنفيذ نمط عام: طُوّر هذا المشروع ضمن عمل هندسي خاص. يتوفر تنفيذ شخصي منفصل يعرض أنماط المعالجة الموزعة وغير المتزامنة ذات صلة علناً.',
    ],
    technologies: ['Java', 'Python', 'AWS Lambda', 'DynamoDB', 'EventBridge', 'AWS Glue'],
    report: { label: 'تنفيذ النمط العام', url: 'https://github.com/whyzohra/distributed-task-orchestrator' },
  },
  {
    slug: 'in-memory-columnar-storage-engine-prototype',
    title: 'نموذج أولي لمحرك تخزين عمودي في الذاكرة',
    domain: 'Systems engineering',
    summary: 'نموذج أولي لمحرك تخزين يستكشف تنظيم بيانات عمودي في الذاكرة لأحمال تحليلية.',
    implementation: ['نموذج أولي لتخزين عمودي في الذاكرة.'],
    technologies: ['C++'],
  },
  {
    slug: 'drone-based-intelligent-system-for-apple-orchard-management',
    title: 'نظام ذكي بالطائرات بدون طيار لإدارة بساتين التفاح',
    domain: 'Intelligent systems / vision',
    summary: 'نظام ذكي بالطائرات بدون طيار لإدارة بساتين التفاح، يجمع الاستشعار والبرمجيات لرؤية تشغيلية.',
    implementation: ['نظام إدارة بساتين بالطائرات بدون طيار.'],
    technologies: ['Python', 'C++'],
  },
  {
    slug: 'autonomous-vehicle-object-detection',
    title: 'كشف المركبات المستقلة / الأجسام',
    domain: 'Computer vision / robotics',
    summary: 'عمل كشف أجسام وإدراك متعلق بأنظمة المركبات المستقلة.',
    implementation: ['كشف أجسام لسيناريوهات مركبة مستقلة.'],
    technologies: ['Python', 'C++'],
  },
  {
    slug: 'meetmind-ai',
    title: 'MeetMind AI',
    domain: 'Full-stack / AI application',
    summary: 'منصة اجتماعات باستخدام FastAPI و React و Next.js مع ملخصات مدعومة بـ OpenAI واسترجاع معلومات.',
    implementation: [
      'بنيت REST APIs موثقة وطبقة استرجاع معلومات.',
      'حسّنت صلة الأسئلة والأجوبة بنسبة 25% عبر هندسة المطالبات.',
    ],
    technologies: ['FastAPI', 'React', 'Next.js', 'TypeScript', 'OpenAI API'],
    github: 'https://github.com/whyzohra/meetmind-ai',
  },
  {
    slug: 'atlas-traffic-intelligence-platform',
    title: 'Atlas – منصة ذكاء حركة المرور',
    domain: 'Data / ML platform',
    summary: 'منصة ذكاء حركة مرور مع APIs مدعومة بـ PostgreSQL ولوحات React/Next.js ونموذج تنبؤ مدمج.',
    implementation: ['بنيت REST/GraphQL APIs وأكثر من 100 مسار لوحة.', 'خفّضت وقت تحميل اللوحة بنسبة 45%.'],
    technologies: ['Python', 'PyTorch', 'GraphQL', 'PostgreSQL', 'React', 'Next.js'],
  },
  {
    slug: 'smart-expense-tracker-api',
    title: 'Smart Expense Tracker API',
    domain: 'Backend / REST API',
    summary: 'Spring Boot 3 REST API لإدارة النفقات الشخصية بـ Java 21.',
    implementation: ['REST API لإدارة النفقات الشخصية.', 'خلفية Java 21 و Spring Boot 3.'],
    technologies: ['Spring Boot 3', 'Java 21', 'REST API'],
    github: 'https://github.com/whyzohra/smart-expense-tracker-api',
  },
  {
    slug: 'ml-observability-dashboard',
    title: 'لوحة ملاحظة ML',
    domain: 'Data / ML monitoring',
    summary: 'لوحة ملاحظة سحابية أصلية لمراقبة بنية ML التحتية وصحة الخدمة.',
    implementation: ['مراقبة خدمة ML.', 'ملاحظة البنية التحتية.', 'دعم نشر Kubernetes.'],
    technologies: ['Python', 'FastAPI', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana'],
    github: 'https://github.com/whyzohra/ml-observability-dashboard',
  },
];

export const ARCHIVE_PROJECT_DETAILS: Record<string, string[]> = {
  'محرك مؤقت النضارة الديناميكي لسلسلة التبريد': [
    'خلفية قائمة على الأحداث لتوقيت نضارة ديناميكي في لوجستيات سلسلة التبريد.',
    'مبني على AWS Lambda و DynamoDB و EventBridge و CloudWatch.',
    'تنفيذ نمط عام: طُوّر هذا المشروع ضمن عمل هندسي خاص. يتوفر تنفيذ شخصي منفصل يعرض أنماط بنية قائمة على الأحداث ذات صلة علناً على https://github.com/whyzohra/eventbridge-automation-pipeline.',
  ],
  'محرك حل حالة الحاوية ومعالجة الانحرافات': [
    'محرك خلفية لحل حالة الحاوية ومعالجة الانحرافات.',
    'مكدس AWS بدون خادم مع Glue ومراقبة وبنية تحتية للاختبار.',
    'تنفيذ نمط عام: طُوّر هذا المشروع ضمن عمل هندسي خاص. يتوفر تنفيذ شخصي منفصل يعرض أنماط المعالجة الموزعة وغير المتزامنة ذات صلة علناً على https://github.com/whyzohra/distributed-task-orchestrator.',
  ],
  'نموذج أولي لمحرك تخزين عمودي في الذاكرة': ['نموذج أولي يستكشف تنظيم تخزين عمودي في الذاكرة.'],
  'نظام ذكي بالطائرات بدون طيار لإدارة بساتين التفاح': ['نظام ذكي بالطائرات بدون طيار لإدارة بساتين التفاح.'],
  'كشف المركبات المستقلة / الأجسام': ['عمل كشف أجسام في سياق مركبة مستقلة.'],
  'MeetMind AI': [
    'بنيت منصة اجتماعات باستخدام FastAPI و React و Next.js مع ملخصات اجتماعات مدعومة بـ OpenAI.',
    'وفّرت نحو 15 دقيقة لكل اجتماع لـ 9 مستخدمين.',
    'صممت REST APIs موثقة وطبقة استرجاع معلومات مع أسئلة وأجوبة بهندسة مطالبات.',
  ],
  'Atlas – منصة ذكاء حركة المرور': [
    'صممت REST/GraphQL API باستخدام PostgreSQL مع لوحات React/Next.js عبر أكثر من 100 مسار.',
    'دمجت نموذج تنبؤ حركة مرور مفتوح المصدر كطبقة بيانات خلفية.',
    'حققت درجة F1 بقيمة 0.697 وخفّضت وقت تحميل اللوحة بنسبة 45%.',
  ],
  'Smart Expense Tracker API': ['Spring Boot 3 REST API لإدارة النفقات الشخصية مبني بـ Java 21.'],
  'لوحة ملاحظة ML': ['لوحة ملاحظة ML سحابية أصلية لمراقبة صحة الخدمة وسير العمل الموزع.'],
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
    title: 'البرمجة التنافسية',
    detail: 'حل أكثر من 555 مسألة خوارزمية عبر LeetCode (291) و CodeChef (264).',
  },
  {
    title: 'Guinness World Record',
    detail: 'شاركت في KANZ AI Hackathon، المعترف به رسمياً كأكبر هاكاثون AI في العالم.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  { category: 'البرمجة', items: ['Java', 'JavaScript/TypeScript', 'Python', 'C++', 'C#', 'SQL'] },
  {
    category: 'هندسة البرمجيات',
    items: ['OOP', 'MVC', 'Design Patterns', 'SOLID', 'Data Structures & Algorithms', 'System Design', 'REST APIs'],
  },
  {
    category: 'قواعد البيانات والشبكات',
    items: ['PostgreSQL', 'MySQL', 'RDBMS', 'TCP/IP', 'HTTP/HTTPS', 'Computer Networks'],
  },
  {
    category: 'الخلفية والسحابة',
    items: ['Spring Boot', 'AWS Lambda', 'EventBridge', 'S3', 'Glue', 'CloudWatch', 'DynamoDB'],
  },
  { category: 'الواجهة والأدوات', items: ['React', 'Next.js', 'Git', 'GitHub', 'CI/CD'] },
  {
    category: 'الذكاء الاصطناعي',
    items: ['OpenAI API', 'PyTorch', 'AI-assisted development', 'Claude', 'Codex', 'Gemini'],
  },
];

export const CERTIFICATIONS: Certification[] = [
  { title: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', tier: 'Primary', group: 'Cloud', issued: 'يوليو 2026' },
  { title: 'Oracle Database SQL Certified Associate (1Z0-071)', issuer: 'Udemy', tier: 'Primary', group: 'Databases', issued: 'سبتمبر 2024' },
  {
    title: 'Microsoft Power BI Data Analyst Specialization',
    issuer: 'Microsoft',
    tier: 'Additional study',
    group: 'Data',
    issued: 'يوليو 2024',
    credentialId: 'E9FAH6XDP97F',
  },
  {
    title: 'JPMorgan Chase & Co. – Cybersecurity Job Simulation',
    issuer: 'Forage',
    tier: 'Primary',
    group: 'Cybersecurity',
    issued: 'سبتمبر 2024',
    credentialId: 'FS2yi4nA2os7QBfqC',
  },
  { title: 'Google Project Management', issuer: 'Coursera', tier: 'Additional study', group: 'Professional', credentialId: '3TU9Q8A6V3KD' },
  {
    title: 'The Data Science Course: Complete Data Science Bootcamp 2024',
    issuer: 'Udemy',
    tier: 'Additional study',
    group: 'Data',
    issued: 'فبراير 2024',
  },
  {
    title: 'Google Cybersecurity Certifications',
    issuer: 'Coursera',
    tier: 'Primary',
    group: 'Cybersecurity',
    issued: 'أكتوبر 2023',
    credentialId: '2LGDXS8NHPEA',
  },
  {
    title: 'Google Certified Fundamentals of Digital Marketing',
    issuer: 'Google Digital Garage',
    tier: 'Additional study',
    group: 'Professional',
    issued: 'يوليو 2022',
    credentialId: 'KDY 4LN AJ9',
  },
];

export const FULL_TECHNICAL_INDEX: SkillCategory[] = SKILL_CATEGORIES;
export const NOTE_ARTICLES: NoteArticle[] = [];
