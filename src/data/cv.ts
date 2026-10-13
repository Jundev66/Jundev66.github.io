// Data bilingüe del portafolio de Juan Mata.
// Soporta cambio dinámico e instantáneo entre Español (es) e Inglés (en).

export interface LocalizedString {
  es: string;
  en: string;
}

export interface Skill {
  name: string;
  icon: string;
  color?: string;
}

export interface SkillGroup {
  title: LocalizedString;
  icon: string;
  wide?: boolean;
  skills: Skill[];
}

export interface Project {
  name: string;
  subtitle: LocalizedString;
  status: LocalizedString;
  statusTone: 'emerald' | 'amber' | 'sky';
  description: LocalizedString;
  bullets: LocalizedString[];
  metrics: LocalizedString[];
  stack: Skill[];
  logo: 'corebiz' | 'kombo' | 'cryotech' | 'tornealo';
  repo?: string;
  demo?: string;
}

export interface ADR {
  id: string;
  num: string;
  title: LocalizedString;
  system: string;
  badge: LocalizedString;
  summary: LocalizedString;
  context: LocalizedString;
  decision: LocalizedString;
  tradeoffs: LocalizedString;
  metrics: { label: LocalizedString; val: string }[];
  actionText: LocalizedString;
  actionUrl: string;
}

export const profile = {
  name: 'Juan Mata',
  initials: 'JM',
  role: {
    es: 'Full-Stack Software Engineer | Arquitectura Evolutiva & IA',
    en: 'Full-Stack Software Engineer | Evolutionary Architecture & AI',
  },
  headline: {
    es: 'Arquitectura Evolutiva · Python · FastAPI · NestJS · Laravel · MCP · RAG · Ex-Medine.tech',
    en: 'Evolutionary Architecture · Python · FastAPI · NestJS · Laravel · MCP · RAG · Ex-Medine.tech',
  },
  tagline: {
    es: 'Ingeniero de Software Full-Stack con 4 años de experiencia creando plataformas SaaS B2B y sistemas ERP bajo el paradigma de arquitectura evolutiva y agnóstico a la tecnología: diseño y lanzo MVPs ágiles, escalo alta concurrencia y modernizo plataformas legacy sin interrumpir la operación, combinando velocidad en producto con IA (MCP, RAG) y rigor corporativo (+500 pruebas en CI/CD).',
    en: 'Full-Stack Software Engineer with 4 years of experience building B2B SaaS and ERP platforms under an evolutionary, technology-agnostic architecture paradigm: I design and ship agile MVPs, scale high-concurrency systems, and modernize legacy platforms with zero downtime, pairing AI delivery speed (MCP, RAG) with corporate engineering rigor (500+ tests in CI/CD).',
  },
  location: 'Carúpano, Venezuela (Remoto / Híbrido)',
  availability: {
    es: 'Disponibilidad inmediata · Remoto o híbrido',
    en: 'Immediate availability · Remote or hybrid',
  },
  companyHighlight: {
    es: 'Ex-Medine.tech (2022–2026 · 4 años)',
    en: 'Ex-Medine.tech (2022–2026 · 4 years)',
  },
  yearsOfExperience: 4,
  email: 'matajuan134@gmail.com',
  whatsapp: '+58 416 094 4040',
  whatsappUrl: 'https://wa.me/584160944040',
  github: 'https://github.com/Jundev66',
  githubUser: 'Jundev66',
  linkedin: 'https://www.linkedin.com/in/juan-mata-1b959a235',
  linkedinUser: 'juan-mata-1b959a235',
  cv: '/juan-mata-cv.pdf',
  seoDescription: {
    es: 'Juan Mata — Full-Stack Software Engineer especializado en Arquitectura Evolutiva e Inteligencia Artificial (MCP, RAG, agentes). 4 años de experiencia en SaaS B2B y ERP con Node.js, NestJS, Python, FastAPI, Laravel, React, Next.js y +500 tests en CI/CD.',
    en: 'Juan Mata — Full-Stack Software Engineer specialized in Evolutionary Architecture & Applied AI (MCP, RAG, agents). 4 years in B2B SaaS and ERP with Node.js, NestJS, Python, FastAPI, Laravel, React, Next.js and 500+ tests in CI/CD.',
  },
};

export const nav = [
  { id: 'proyectos', label: { es: 'Proyectos', en: 'Projects' } },
  { id: 'arquitectura', label: { es: 'Arquitectura (ADRs)', en: 'Architecture (ADRs)' } },
  { id: 'experiencia', label: { es: 'Trayectoria', en: 'Experience' } },
  { id: 'ia', label: { es: 'IA Aplicada', en: 'Applied AI' } },
  { id: 'habilidades', label: { es: 'Stack', en: 'Skills' } },
  { id: 'sobre-mi', label: { es: 'Sobre mí', en: 'About' } },
  { id: 'contacto', label: { es: 'Contacto', en: 'Contact' } },
];

export const about = {
  paragraphs: {
    es: [
      'Ingeniero de Software Full-Stack con 4 años de experiencia creando plataformas SaaS B2B y sistemas ERP. Especializado en el paradigma de arquitectura evolutiva y agnóstico a la tecnología.',
      'Diseño y lanzo MVPs ágiles con interfaces dinámicas, escalo sistemas de alta concurrencia y modernizo plataformas legacy migrando hacia arquitectura hexagonal y DDD sin interrumpir la operación.',
      'Combino la velocidad en la entrega de producto (integración avanzada de IA, flujos RAG, Model Context Protocol y bots de WhatsApp) con el rigor técnico corporativo (patrones de diseño estructurados, pipelines CI/CD y más de 500 pruebas automatizadas).',
      'En mi trayectoria en Medine.tech colaboré en equipos Scrum de 15 a 20 ingenieros coordinados por Jira, Linear y Zoho, asegurando despliegues diarios a producción con cero regresiones y auditorías de seguridad OWASP ZAP.',
    ],
    en: [
      'Full-Stack Software Engineer with 4 years of experience building B2B SaaS platforms and ERP systems. Specialized in evolutionary, technology-agnostic architecture.',
      'I design and launch agile MVPs with modern dynamic UIs, scale high-concurrency systems, and modernize legacy platforms toward hexagonal architecture and DDD without service interruptions.',
      'I pair product delivery velocity (applied AI, RAG pipelines, Model Context Protocol, and WhatsApp bots) with corporate engineering rigor (structured design patterns, CI/CD pipelines, and 500+ automated tests).',
      'During my 4-year tenure at Medine.tech, I collaborated in Scrum teams of 15 to 20 engineers managed via Jira, Linear, and Zoho, delivering daily production releases with zero regressions and OWASP ZAP triage.',
    ],
  },
  stats: [
    { value: '4', label: { es: 'Años de trayectoria B2B', en: 'Years in B2B SaaS' } },
    { value: '500+', label: { es: 'Pruebas en CI/CD', en: 'Automated CI/CD tests' } },
    { value: '15–20', label: { es: 'Ingenieros por equipo Scrum', en: 'Engineers per Scrum team' } },
    { value: '4', label: { es: 'Plataformas SaaS / MVP', en: 'SaaS Platforms / MVPs' } },
  ],
  highlights: [
    {
      icon: 'lucide:cpu',
      title: { es: 'Arquitectura evolutiva', en: 'Evolutionary Architecture' },
      text: {
        es: 'Diseño agnóstico a la tecnología: MVPs rápidos que evolucionan hacia sistemas robustos sin deuda técnica.',
        en: 'Tech-agnostic design: agile MVPs engineered to evolve into robust architectures with zero downtime.',
      },
    },
    {
      icon: 'lucide:brain-circuit',
      title: { es: 'IA aplicada & MCP', en: 'Applied AI & MCP' },
      text: {
        es: 'Model Context Protocol, flujos RAG, bots de WhatsApp y orquestación con Claude Code y Cursor.',
        en: 'Model Context Protocol (MCP), RAG pipelines, WhatsApp bots, and agent orchestration with Claude Code.',
      },
    },
    {
      icon: 'lucide:shield-check',
      title: { es: 'Calidad & +500 tests', en: 'Quality & 500+ Tests' },
      text: {
        es: 'Playwright (POM), PHPUnit, Behat (BDD) y auditorías periódicas de seguridad con OWASP ZAP.',
        en: 'Playwright (POM), PHPUnit, Behat (BDD), and continuous OWASP ZAP vulnerability triage.',
      },
    },
    {
      icon: 'lucide:server',
      title: { es: 'Backend & Cloud Ops', en: 'Backend & Cloud Ops' },
      text: {
        es: 'Node.js, NestJS, Python, FastAPI, Laravel, Docker, Linux (Ubuntu), Nginx y PostgreSQL RLS.',
        en: 'Node.js, NestJS, Python, FastAPI, Laravel, Docker, Linux (Ubuntu), Nginx, and PostgreSQL RLS.',
      },
    },
  ],
};

export const projects: Project[] = [
  {
    name: 'CoreBiz',
    subtitle: {
      es: 'ERP multi-tenant para comercios',
      en: 'Multi-tenant ERP for commercial retail',
    },
    status: {
      es: 'En producción viva',
      en: 'Live in Production',
    },
    statusTone: 'emerald',
    description: {
      es: 'Sistema de gestión comercial multi-tenant —inventario, ventas y notas de entrega— con arquitectura hexagonal y aislamiento estricto de datos con PostgreSQL Row Level Security (RLS).',
      en: 'Multi-tenant business management system —inventory, sales, and delivery notes— built with hexagonal architecture and strict data isolation via PostgreSQL Row Level Security (RLS).',
    },
    bullets: [
      {
        es: 'Arquitectura hexagonal con DDD táctico y CQRS ligero: el núcleo de dominio no tiene dependencias externas.',
        en: 'Hexagonal architecture with tactical DDD and lightweight CQRS: zero external dependencies in the domain core.',
      },
      {
        es: 'Asistente de IA "Synapse": asistente inteligente híbrido (local / multi-proveedor) para análisis contable y gestión empresarial.',
        en: '"Synapse" AI Assistant: advanced hybrid local/multi-provider assistant for ERP business analysis and operations.',
      },
      {
        es: 'Aislamiento multi-tenant en 4 capas verificado tabla por tabla con una matriz de 497 tests.',
        en: '4-layer multi-tenant isolation, verified table-by-table against a matrix of 497 automated tests.',
      },
    ],
    metrics: [
      { es: '497 tests', en: '497 tests' },
      { es: 'IA Synapse', en: 'Synapse AI' },
      { es: 'PostgreSQL RLS', en: 'PostgreSQL RLS' },
    ],
    stack: [
      { name: 'NestJS', icon: 'simple-icons:nestjs', color: '#E0234E' },
      { name: 'Next.js', icon: 'simple-icons:nextdotjs' },
      { name: 'TypeScript', icon: 'simple-icons:typescript', color: '#3178C6' },
      { name: 'Supabase RLS', icon: 'simple-icons:supabase', color: '#3ECF8E' },
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql', color: '#4169E1' },
      { name: 'Prisma', icon: 'simple-icons:prisma' },
      { name: 'Vitest', icon: 'simple-icons:vitest', color: '#6E9F18' },
      { name: 'Playwright', icon: 'simple-icons:playwright', color: '#2EAD33' },
    ],
    logo: 'corebiz',
    repo: 'https://github.com/Jundev66/CoreBiz',
    demo: 'https://corebiz-web.vercel.app',
  },
  {
    name: 'CryoTech',
    subtitle: {
      es: 'Gestión avícola con IA multimodal',
      en: 'Poultry management with multimodal AI',
    },
    status: {
      es: 'API en producción',
      en: 'API in Production',
    },
    statusTone: 'emerald',
    description: {
      es: 'Lotes, costos y tesorería en dos monedas para una granja real en Venezuela, con un asistente que registra operaciones desde Telegram leyendo fotos de comprobantes bancarios.',
      en: 'Batch tracking, costs, and dual-currency treasury for an operational farm in Venezuela, with an assistant registering transactions via Telegram by analyzing receipt photos.',
    },
    bullets: [
      {
        es: 'Pipeline híbrido OCR (Tesseract.js) + fallback a Claude Vision: reduce más de 80% en costes de API.',
        en: 'Hybrid pipeline with local OCR (Tesseract.js) + Claude Vision fallback: saves over 80% in token API costs.',
      },
      {
        es: 'Métricas por lote: conversión alimenticia (FCR), curva de crecimiento, mortalidad y costo por ave.',
        en: 'Per-batch metrics: Feed Conversion Ratio (FCR), growth curves, mortality rate, and unit bird cost.',
      },
      {
        es: 'Multiempresa con control de acceso RBAC, rotación de refresh tokens y rate limiting por IP.',
        en: 'Multi-organization RBAC permissions, refresh token rotation, and per-IP rate limiting.',
      },
    ],
    metrics: [
      { es: 'Pipeline OCR + LLM', en: 'OCR + LLM Pipeline' },
      { es: 'Bot de Telegram', en: 'Telegram Bot' },
      { es: '76 unit + 82 E2E', en: '76 unit + 82 E2E' },
    ],
    stack: [
      { name: 'React', icon: 'simple-icons:react', color: '#149ECA' },
      { name: 'NestJS', icon: 'simple-icons:nestjs', color: '#E0234E' },
      { name: 'Prisma', icon: 'simple-icons:prisma' },
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql', color: '#4169E1' },
      { name: 'TypeScript', icon: 'simple-icons:typescript', color: '#3178C6' },
      { name: 'Claude API', icon: 'simple-icons:anthropic' },
      { name: 'Telegram Bot', icon: 'simple-icons:telegram', color: '#26A5E4' },
      { name: 'Playwright', icon: 'simple-icons:playwright', color: '#2EAD33' },
    ],
    logo: 'cryotech',
    repo: 'https://github.com/Jundev66/cryotech',
  },
  {
    name: 'Kombo',
    subtitle: {
      es: 'Pedidos multi-negocio en tiempo real',
      en: 'Real-time multi-brand food ordering',
    },
    status: {
      es: 'En desarrollo activo',
      en: 'In Active Development',
    },
    statusTone: 'amber',
    description: {
      es: 'Pedidos de comida para múltiples marcas en un solo despliegue: cada comercio accede por su propio subdominio dinámico con aislamiento asegurado por PostgreSQL RLS.',
      en: 'Food ordering platform for multiple food brands in a single deployment: each business accesses via dynamic subdomain with zero data leakage backed by PostgreSQL RLS.',
    },
    bullets: [
      {
        es: 'Tres canales de entrada —portal web, bots de mensajería (WhatsApp/Telegram) y caja— sincronizados en tiempo real hacia cocina (KDS).',
        en: 'Three intake channels —customer portal, messaging bots (WhatsApp/Telegram), and POS register— feeding a real-time kitchen display (KDS).',
      },
      {
        es: 'Sincronización omnicanal con Redis Pub/Sub y notificaciones automáticas por el mismo canal de la orden.',
        en: 'Omnichannel synchronization with Redis Pub/Sub and automated ready notifications delivered via the origin channel.',
      },
      {
        es: 'Repositorio preparado para agentes de IA: un solo AGENTS.md como contexto unificado para Claude Code y Cursor.',
        en: 'Agentic-ready codebase: single AGENTS.md source of truth for Claude Code, Cursor, and Copilot.',
      },
    ],
    metrics: [
      { es: 'Multi-tenant RLS', en: 'Multi-tenant RLS' },
      { es: 'Caja + Cocina KDS', en: 'POS + Kitchen KDS' },
      { es: 'Redis Pub/Sub', en: 'Redis Pub/Sub' },
    ],
    stack: [
      { name: 'Laravel', icon: 'simple-icons:laravel', color: '#FF2D20' },
      { name: 'PHP 8.x', icon: 'simple-icons:php', color: '#8892BF' },
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql', color: '#4169E1' },
      { name: 'Redis', icon: 'simple-icons:redis', color: '#FF4438' },
      { name: 'React', icon: 'simple-icons:react', color: '#149ECA' },
      { name: 'TypeScript', icon: 'simple-icons:typescript', color: '#3178C6' },
      { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss', color: '#06B6D4' },
      { name: 'Docker', icon: 'simple-icons:docker', color: '#2496ED' },
    ],
    logo: 'kombo',
    repo: 'https://github.com/Jundev66/kombo',
  },
  {
    name: 'Tornealo App',
    subtitle: {
      es: 'Gestión deportiva y arquitectura Freemium',
      en: 'Sports tournament platform & Freemium architecture',
    },
    status: {
      es: 'MVP Funcional',
      en: 'Functional MVP',
    },
    statusTone: 'sky',
    description: {
      es: 'Estructuración de arquitectura funcional, desarrollo de métricas de seguimiento de torneos y diseño de tarjetas digitales de jugadores bajo un modelo de negocio escalable freemium.',
      en: 'Functional architecture design, tournament tracking metrics, and digital player cards engineered under a scalable freemium business model.',
    },
    bullets: [
      {
        es: 'Modelo freemium escalable para ligas y torneos deportivos con generación dinámica de tarjetas de jugadores.',
        en: 'Scalable freemium model for sports leagues and tournaments featuring dynamic player card generation.',
      },
      {
        es: 'Métricas de rendimiento por partido, tabla de clasificación automática y analíticas competitivas.',
        en: 'Match performance metrics, automated standings leaderboards, and competitive tournament analytics.',
      },
      {
        es: 'Arquitectura frontend moderna y ultra-rápida con React, TypeScript y Tailwind CSS.',
        en: 'Ultra-fast, responsive frontend architecture built with React, TypeScript, and Tailwind CSS.',
      },
    ],
    metrics: [
      { es: 'Modelo Freemium', en: 'Freemium Model' },
      { es: 'Tarjetas Digitales', en: 'Digital Cards' },
      { es: 'Métricas en Vivo', en: 'Live Metrics' },
    ],
    stack: [
      { name: 'React', icon: 'simple-icons:react', color: '#149ECA' },
      { name: 'TypeScript', icon: 'simple-icons:typescript', color: '#3178C6' },
      { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss', color: '#06B6D4' },
      { name: 'Node.js', icon: 'simple-icons:nodedotjs', color: '#5FA04E' },
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql', color: '#4169E1' },
    ],
    logo: 'tornealo',
    repo: 'https://github.com/Jundev66',
  },
];

export const adrs: ADR[] = [
  {
    id: 'adr-01',
    num: 'ADR-001',
    title: {
      es: 'Control de Costes en IA: Pipeline Híbrido OCR + LLM',
      en: 'AI Cost Control: Hybrid OCR + LLM Pipeline',
    },
    system: 'CryoTech AI (Telegram Bot + Claude API)',
    badge: {
      es: 'INGENIERÍA FINANCIERA & IA',
      en: 'FINANCIAL ENGINEERING & AI',
    },
    summary: {
      es: 'Reducción de más de un 80% en la factura de la API de Anthropic y latencia <400ms al no enviar imágenes ciegas al LLM.',
      en: 'Over 80% reduction in Anthropic API costs and <400ms latency by avoiding blind image forwarding to the LLM.',
    },
    context: {
      es: 'Procesar miles de comprobantes bancarios enviando cada foto directamente a Claude Vision genera facturas elevadas de tokens y latencias de 3 a 5 segundos por comprobante.',
      en: 'Processing thousands of transaction receipts by forwarding every image directly to Claude Vision generates high token invoices and 3–5s latency per receipt.',
    },
    decision: {
      es: 'Implementamos un pipeline híbrido en dos fases:\n1. Nivel 1 ($0 Coste): Tesseract.js normaliza el contraste y extrae texto en 300ms a costo cero. Si el comprobante contiene los campos contables, se liquida de inmediato.\n2. Nivel 2 (Inferencia Asistida): Solo si el comprobante está doblado, borroso o incompleto, se activa Claude Vision con extracción estructurada en JSON estricto.\n3. Protección de presupuesto: Circuit breaker con límite de tasa para evitar bucles o picos de consumo.',
      en: 'Implemented a two-phase hybrid pipeline:\n1. Level 1 ($0 Cost): Tesseract.js normalizes contrast and extracts text in 300ms locally at zero token cost. Clean receipts resolve immediately.\n2. Level 2 (Assisted Inference): Only if the receipt is folded, blurred, or missing critical fields, Claude Vision is invoked with strict JSON schemas.\n3. Budget Safeguard: Rate-limiting circuit breaker preventing unexpected consumption spikes.',
    },
    tradeoffs: {
      es: 'Requiere mantener dos motores de parsing, compensado con creces por un ahorro del 80%+ en costes de tokens y respuesta casi instantánea.',
      en: 'Requires maintaining two parsing engines, heavily outweighed by 80%+ token cost savings and near-instant user response.',
    },
    metrics: [
      { label: { es: 'Ahorro Factura API', en: 'API Cost Savings' }, val: '>80%' },
      { label: { es: 'Latencia P50 Comprobantes', en: 'P50 Receipt Latency' }, val: '<400ms' },
      { label: { es: 'Precisión en Asientos', en: 'Entry Precision' }, val: '99.8%' },
    ],
    actionText: {
      es: 'Ver Repositorio CryoTech ↗',
      en: 'View CryoTech Repo ↗',
    },
    actionUrl: 'https://github.com/Jundev66/cryotech',
  },
  {
    id: 'adr-02',
    num: 'ADR-002',
    title: {
      es: 'Aislamiento Multi-Tenant a 4 Capas con PostgreSQL RLS',
      en: '4-Layer Multi-Tenant Isolation with PostgreSQL RLS',
    },
    system: 'CoreBiz Multi-Tenant ERP',
    badge: {
      es: 'SEGURIDAD & PRIVACIDAD',
      en: 'SECURITY & PRIVACY',
    },
    summary: {
      es: 'Garantía matemática de cero filtraciones entre empresas competidoras, delegando la seguridad al motor de la base de datos.',
      en: 'Mathematical guarantee against cross-tenant data leakage, enforcing security directly at the PostgreSQL engine level.',
    },
    context: {
      es: 'En SaaS B2B, confiar en cláusulas WHERE manuales en el backend (ej: WHERE tenant_id = x) es una vulnerabilidad latente: un solo descuido de un desarrollador expone registros confidenciales.',
      en: 'In B2B SaaS, relying solely on manual backend WHERE clauses (e.g. WHERE tenant_id = x) is error-prone: a single missed clause exposes competitor data.',
    },
    decision: {
      es: 'Blindamos el aislamiento a 4 capas:\n1. Red: Enrutamiento y validación de subdominio dinámico en middleware.\n2. Sesión: Inyección estricta del tenant_id en el JWT verificado por Supabase Auth.\n3. Base de Datos: Políticas de Row Level Security (RLS) en PostgreSQL tabla por tabla. Cualquier consulta sin tenant es rechazada por el motor.\n4. Testing: Matriz de 497 tests con suites de ataque cruzado (cross-tenant leakage tests) en CI.',
      en: 'Hardened isolation across 4 distinct layers:\n1. Network: Dynamic subdomain validation and routing at middleware edge.\n2. Session: Strict tenant_id injection in JWT verified by Supabase Auth.\n3. Database: Row Level Security (RLS) policies in PostgreSQL per table. Queries without tenant context are rejected by the engine.\n4. Testing: 497-test suite with cross-tenant leakage attack simulations in CI.',
    },
    tradeoffs: {
      es: 'Migraciones SQL más rigurosas y tests obligatorios de seguridad en cada PR, eliminando por completo el riesgo de filtración de datos.',
      en: 'Requires disciplined SQL migrations and mandatory security tests in CI, eliminating data leakage risks entirely.',
    },
    metrics: [
      { label: { es: 'Tablas con RLS', en: 'Tables with RLS' }, val: '28 Tablas' },
      { label: { es: 'Fugas Registradas', en: 'Recorded Leakages' }, val: '0 Fugas' },
      { label: { es: 'Aislamiento en CI', en: 'CI Isolation Pass' }, val: '100% Pass' },
    ],
    actionText: {
      es: 'Abrir CoreBiz en Producción ↗',
      en: 'Open CoreBiz Live Demo ↗',
    },
    actionUrl: 'https://corebiz-web.vercel.app',
  },
  {
    id: 'adr-03',
    num: 'ADR-003',
    title: {
      es: 'Arquitectura Hexagonal & DDD Táctico con Core Desacoplado',
      en: 'Hexagonal Architecture & Tactical DDD with Pure Core',
    },
    system: 'Medine.tech & CoreBiz',
    badge: {
      es: 'ARQUITECTURA LIMPIA',
      en: 'CLEAN ARCHITECTURE',
    },
    summary: {
      es: 'Reglas de negocio (nómina, compras, facturación) 100% libres de dependencias de frameworks y ORMs.',
      en: 'Business rules (payroll, purchasing, billing) completely decoupled from framework and ORM dependencies.',
    },
    context: {
      es: 'Los monolitos empresariales se degradan cuando las reglas de negocio quedan acopladas a controladores de Laravel/NestJS o llamadas a Eloquent/Prisma. Modernizar código se vuelve prohibitivo.',
      en: 'Enterprise monoliths degrade when business rules become tightly coupled to controller files or direct ORM calls. Framework upgrades become high-risk.',
    },
    decision: {
      es: 'Estructuramos el sistema con Arquitectura Hexagonal y Domain-Driven Design:\n1. Núcleo de Dominio puro en TypeScript/PHP, sin bibliotecas de infraestructura.\n2. Puertos e interfaces explícitos para repositorios, colas de mensajería (RabbitMQ) y pasarelas.\n3. Adaptadores desacoplados que conectan la infraestructura con el dominio.\n4. CI que rechaza cualquier PR que intente importar librerías de infraestructura en `/domain`.',
      en: 'Structured the systems with Hexagonal Architecture and Tactical DDD:\n1. Pure Domain Core in TypeScript/PHP, free from infrastructure dependencies.\n2. Explicit ports and interfaces for repositories, message queues (RabbitMQ), and gateways.\n3. Decoupled adapters connecting infrastructure to domain interfaces.\n4. CI lint rules that reject any PR importing infrastructure libraries into `/domain`.',
    },
    tradeoffs: {
      es: 'Mayor cantidad de clases y DTOs iniciales, permitiendo refactorizaciones seguras y modernización de código sin riesgo sobre la lógica contable.',
      en: 'Higher initial boilerplate with DTOs and interfaces, enabling rapid refactoring and framework upgrades with zero accounting logic regression.',
    },
    metrics: [
      { label: { es: 'Deps en Dominio', en: 'Domain Dependencies' }, val: '0 Libs' },
      { label: { es: 'Tests Unitarios', en: 'Unit Test Speed' }, val: '<0.5s' },
      { label: { es: 'Módulos Desacoplados', en: 'Decoupled Modules' }, val: '5 Dominios' },
    ],
    actionText: {
      es: 'Ver Repositorio CoreBiz ↗',
      en: 'View CoreBiz Repo ↗',
    },
    actionUrl: 'https://github.com/Jundev66/CoreBiz',
  },
  {
    id: 'adr-04',
    num: 'ADR-004',
    title: {
      es: 'Pirámide de Pruebas Automatizadas con +500 Tests y OWASP',
      en: 'Automated Testing Pyramid with 500+ Tests & OWASP',
    },
    system: 'Medine.tech & CoreBiz',
    badge: {
      es: 'CALIDAD & CI/CD',
      en: 'QUALITY & CI/CD',
    },
    summary: {
      es: 'Releases continuos en entornos Linux sin regresiones en flujos de facturación ni pasarelas de pago.',
      en: 'Continuous releases on Linux servers with zero regressions in billing and payment workflows.',
    },
    context: {
      es: 'En un ERP con nóminas, facturación electrónica y compras, un bug en producción paraliza operaciones corporativas. Las pruebas manuales son lentas y propensas al error.',
      en: 'In an ERP handling payroll, electronic invoicing, and payments, a production bug halts client operations. Manual testing is slow, expensive, and error-prone.',
    },
    decision: {
      es: 'Diseñamos una estrategia integral de aseguramiento de calidad en GitHub Actions:\n1. Unitarias Rápidas: Vitest y PHPUnit para validar reglas aritméticas y entidades contables.\n2. Comportamiento (BDD): Behat para validar escenarios de negocio con especificaciones legibles.\n3. E2E Críticos: Playwright con Page Object Model (POM) cubriendo flujos completos de facturación y pasarelas.\n4. Seguridad: Escaneos con OWASP ZAP (inyección SQL, headers Nginx, dependencias).',
      en: 'Engineered a comprehensive QA strategy in GitHub Actions:\n1. Fast Unit Tests: Vitest and PHPUnit validating arithmetic and domain accounting entities.\n2. Behavior-Driven Tests: Behat (ATDD/BDD) validating business user journeys.\n3. End-to-End: Playwright with Page Object Model covering critical checkout and billing journeys.\n4. Continuous Security: Automated OWASP ZAP scans (SQL injection, Nginx headers, CVEs).',
    },
    tradeoffs: {
      es: 'Mantenimiento continuo de suites de pruebas en CI, compensado por lanzamientos estables a producción con cero caídas.',
      en: 'Ongoing test maintenance in CI, fully rewarded by predictable, confident deployments and zero critical regressions.',
    },
    metrics: [
      { label: { es: 'Tests en CI', en: 'CI Test Suite' }, val: '+500 Tests' },
      { label: { es: 'Flujos Críticos', en: 'Critical Coverage' }, val: '100% Pass' },
      { label: { es: 'Hallazgos OWASP', en: 'Critical OWASP CVEs' }, val: '0 Fallos' },
    ],
    actionText: {
      es: 'Ver Repositorio CoreBiz ↗',
      en: 'View CoreBiz Repo ↗',
    },
    actionUrl: 'https://github.com/Jundev66/CoreBiz',
  },
];

export const experience = [
  {
    role: {
      es: 'Full-Stack Software Engineer',
      en: 'Full-Stack Software Engineer',
    },
    company: 'Medine.tech',
    companyUrl: 'https://www.linkedin.com/company/medinetech',
    mode: {
      es: 'Remoto · Tiempo completo',
      en: 'Remote · Full-time',
    },
    period: '10/2022 – 09/2026',
    duration: {
      es: '4 años (Finalizado)',
      en: '4 years (Completed)',
    },
    description: {
      es: 'Consultora de software empresarial (ERP/SaaS B2B) para empresas en Latinoamérica. Equipos Scrum de 15 a 20 ingenieros.',
      en: 'Enterprise software consultancy (B2B ERP/SaaS) for corporate clients across Latin America. Scrum teams of 15 to 20 engineers.',
    },
    groups: [
      {
        title: {
          es: 'Arquitectura Evolutiva & Producto',
          en: 'Evolutionary Architecture & Product',
        },
        icon: 'lucide:cpu',
        items: [
          {
            title: {
              es: 'Módulos transaccionales críticos',
              en: 'Critical Transactional Modules',
            },
            text: {
              es: 'Lideré el desarrollo end-to-end de módulos de negocio (nómina, compras, ventas, alquileres y facturación), desde el requerimiento hasta backend en Laravel/Node e interfaces dinámicas en React/Vue.',
              en: 'Led end-to-end delivery of mission-critical business modules (payroll, procurement, sales, leasing, and invoicing) from user discovery to Laravel/Node backend and React/Vue UIs.',
            },
          },
          {
            title: {
              es: 'Modernización desacoplada sin caídas',
              en: 'Zero-Downtime Decoupled Refactoring',
            },
            text: {
              es: 'Implementé transiciones fluidas desde controladores monolíticos heredados hacia arquitecturas desacopladas (Hexagonal y DDD) para soportar escalabilidad sin frenar la entrega de producto.',
              en: 'Executed smooth architectural transitions from legacy monolithic controllers toward hexagonal and DDD decoupled services, scaling the system with zero delivery interruption.',
            },
          },
          {
            title: {
              es: 'Sistemas asíncronos y APIs RESTful',
              en: 'Async Queuing & RESTful APIs',
            },
            text: {
              es: 'Construí y documenté APIs RESTful (OpenAPI/Swagger) e integré mensajería con RabbitMQ para sincronización externa tolerante a fallos y reintentos.',
              en: 'Designed and documented OpenAPI/Swagger RESTful APIs and integrated RabbitMQ queuing for resilient third-party data synchronization and retries.',
            },
          },
        ],
      },
      {
        title: {
          es: 'Inteligencia Artificial en Producto & Flujos',
          en: 'Applied AI in Product & Engineering',
        },
        icon: 'lucide:brain-circuit',
        items: [
          {
            title: {
              es: 'Bots en WhatsApp y flujos RAG',
              en: 'WhatsApp Bots & RAG Pipelines',
            },
            text: {
              es: 'Diseñé e implementé soluciones de IA para usuario final: bots de atención automatizada vía WhatsApp y flujos RAG para agilizar registros y operaciones comerciales.',
              en: 'Engineered user-facing AI solutions: automated WhatsApp customer service bots and RAG pipelines accelerating enterprise records and sales transactions.',
            },
          },
          {
            title: {
              es: 'Agentes autónomos de contexto modular',
              en: 'Modular Context Autonomous Agents',
            },
            text: {
              es: 'Aceleré el ciclo de desarrollo diseñando flujos de ingeniería con agentes de IA (Claude Code, Cursor) bajo contexto modular unificado para generación de código y testing.',
              en: 'Accelerated development cycles by orchestrating autonomous AI agent workflows (Claude Code, Cursor) under unified modular contexts for rapid scaffolding and testing.',
            },
          },
        ],
      },
      {
        title: {
          es: 'Calidad Rigurosa, CI/CD & Seguridad',
          en: 'Rigorous Quality, CI/CD & Security',
        },
        icon: 'lucide:shield-check',
        items: [
          {
            title: {
              es: 'Suite de +500 pruebas automatizadas',
              en: 'Automated 500+ Test Safety Net',
            },
            text: {
              es: 'Construí una red de seguridad con más de 500 pruebas (Playwright POM, PHPUnit y Behat BDD) en CI con GitHub Actions, permitiendo despliegues diarios a producción con cero regresiones.',
              en: 'Built an automated safety net of 500+ tests (Playwright POM, PHPUnit, and Behat BDD) in GitHub Actions CI, enabling daily production releases with zero regressions.',
            },
          },
          {
            title: {
              es: 'Auditorías OWASP ZAP y hardening Linux',
              en: 'OWASP ZAP Triage & Linux Hardening',
            },
            text: {
              es: 'Escaneos periódicos con OWASP ZAP en producción, remediación de inyecciones SQL, headers seguros en Nginx y gestión de servidores Linux (Ubuntu/DigitalOcean) con Docker.',
              en: 'Automated periodic OWASP ZAP vulnerability triage, SQL injection elimination, Nginx header hardening, and Docker containerized Linux server operations.',
            },
          },
        ],
      },
    ],
    stack: [
      { name: 'PHP', icon: 'simple-icons:php', color: '#8892BF' },
      { name: 'Laravel', icon: 'simple-icons:laravel', color: '#FF2D20' },
      { name: 'React', icon: 'simple-icons:react', color: '#149ECA' },
      { name: 'Vue.js', icon: 'simple-icons:vuedotjs', color: '#42B883' },
      { name: 'TypeScript', icon: 'simple-icons:typescript', color: '#3178C6' },
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql', color: '#4169E1' },
      { name: 'MySQL', icon: 'simple-icons:mysql', color: '#4479A1' },
      { name: 'Docker', icon: 'simple-icons:docker', color: '#2496ED' },
      { name: 'Playwright', icon: 'simple-icons:playwright', color: '#2EAD33' },
      { name: 'OWASP ZAP', icon: 'simple-icons:owasp' },
      { name: 'Linux', icon: 'simple-icons:linux' },
      { name: 'Claude Code', icon: 'simple-icons:claude', color: '#D97757' },
    ],
  },
];

export const ai = {
  intro: {
    es: 'Uso la inteligencia artificial en dos frentes claros: dentro de los productos, para automatizar tareas reales de negocio con control de costes; y en el ciclo de desarrollo, con agentes gobernados por reglas de arquitectura.',
    en: 'I apply artificial intelligence on two distinct fronts: inside products, automating business workflows while strictly managing token costs; and in development cycles, using agents governed by architectural rules.',
  },
  pillars: [
    {
      icon: 'lucide:cpu',
      title: {
        es: 'IA en Producto: Eficiencia & Coste Controlado',
        en: 'Product AI: Cost-Controlled Efficiency',
      },
      subtitle: {
        es: 'Funcionalidades que ahorran tiempo a quien usa el sistema sin inflar la factura de API.',
        en: 'Capabilities that save hours of operational work without ballooning token invoices.',
      },
      items: [
        {
          icon: 'lucide:sparkles',
          title: {
            es: 'Asistente Synapse & Flujos RAG',
            en: 'Synapse Assistant & RAG Pipelines',
          },
          text: {
            es: 'Asistente de IA híbrido (local / multi-proveedor) con RAG para consultas seguras sobre datos de ERP y analíticas en tiempo real.',
            en: 'Hybrid (local/multi-provider) AI assistant with RAG for secure ERP data querying and real-time business analytics.',
          },
          source: 'CoreBiz',
        },
        {
          icon: 'lucide:scan-text',
          title: {
            es: 'Pipeline híbrido OCR + LLM',
            en: 'Hybrid OCR + LLM Pipeline',
          },
          text: {
            es: 'Extracción inicial con Tesseract.js a $0 coste; solo cuando faltan campos contables se invoca Claude Vision, ahorrando >80% en costes de API.',
            en: 'Local extraction with Tesseract.js at $0 cost; Claude Vision is only invoked when accounting fields are missing, saving >80% in API costs.',
          },
          source: 'CryoTech',
        },
        {
          icon: 'lucide:message-square',
          title: {
            es: 'Bots en WhatsApp & Telegram',
            en: 'WhatsApp & Telegram Bots',
          },
          text: {
            es: 'Bots conversacionales conectados a webhooks para atención de clientes y registro automático de comprobantes de pago.',
            en: 'Conversational messaging bots wired to webhooks for customer support and automated payment receipt ingestion.',
          },
          source: 'Medine & CryoTech',
        },
      ],
    },
    {
      icon: 'lucide:bot',
      title: {
        es: 'IA en Ingeniería: Aceleración con Reglas Estrictas',
        en: 'Engineering AI: Acceleration with Strict Boundaries',
      },
      subtitle: {
        es: 'Agentes autónomos que conocen la arquitectura, linters y suites de prueba.',
        en: 'Autonomous agents constrained by project architecture, linters, and test suites.',
      },
      items: [
        {
          icon: 'lucide:cpu',
          title: {
            es: 'Model Context Protocol (MCP)',
            en: 'Model Context Protocol (MCP)',
          },
          text: {
            es: 'Conexión de modelos de lenguaje con bases de datos, APIs y herramientas del sistema mediante servidores MCP estandarizados.',
            en: 'Bridging language models with databases, internal APIs, and system tooling via standardized MCP servers.',
          },
          source: 'MCP Architecture',
        },
        {
          icon: 'lucide:folder-tree',
          title: {
            es: 'Fuente única de contexto: AGENTS.md',
            en: 'Single Source of Context: AGENTS.md',
          },
          text: {
            es: 'Un archivo AGENTS.md centralizado con reglas de arquitectura hexagonal y RLS que leen Claude Code, Cursor y Copilot.',
            en: 'Centralized AGENTS.md file declaring hexagonal rules, testing standards, and RLS guidelines read by Claude Code, Cursor, and Copilot.',
          },
          source: 'Kombo & CoreBiz',
        },
        {
          icon: 'lucide:shield-alert',
          title: {
            es: 'Triage de seguridad y testing asistido',
            en: 'Security Triage & Assisted Testing',
          },
          text: {
            es: 'Generación supervisada de suites Playwright y análisis acelerado de reportes OWASP ZAP para mitigar vulnerabilidades.',
            en: 'Supervised generation of Playwright suites and accelerated triage of OWASP ZAP vulnerability reports.',
          },
          source: 'Medine.tech',
        },
      ],
    },
  ],
  tools: [
    { name: 'Claude Code', icon: 'simple-icons:claude', color: '#D97757' },
    { name: 'Cursor', icon: 'simple-icons:cursor' },
    { name: 'Model Context Protocol (MCP)', icon: 'lucide:cpu', color: '#3B82F6' },
    { name: 'Flujos RAG', icon: 'lucide:database', color: '#10B981' },
    { name: 'n8n & Webhooks', icon: 'simple-icons:n8n', color: '#EA4B71' },
    { name: 'Anthropic Claude API', icon: 'simple-icons:anthropic' },
    { name: 'Bots de WhatsApp', icon: 'simple-icons:whatsapp', color: '#25D366' },
    { name: 'Tesseract.js OCR', icon: 'lucide:scan-text', color: '#8B5CF6' },
  ] satisfies Skill[],
};

export const skillGroups: SkillGroup[] = [
  {
    title: {
      es: 'Arquitectura & Backend (Enterprise & MVP)',
      en: 'Architecture & Backend (Enterprise & MVP)',
    },
    icon: 'lucide:server',
    wide: true,
    skills: [
      { name: 'Node.js', icon: 'simple-icons:nodedotjs', color: '#5FA04E' },
      { name: 'NestJS', icon: 'simple-icons:nestjs', color: '#E0234E' },
      { name: 'Python', icon: 'simple-icons:python', color: '#3776AB' },
      { name: 'FastAPI', icon: 'simple-icons:fastapi', color: '#009688' },
      { name: 'PHP 8.x', icon: 'simple-icons:php', color: '#8892BF' },
      { name: 'Laravel', icon: 'simple-icons:laravel', color: '#FF2D20' },
      { name: 'Arquitectura Hexagonal', icon: 'lucide:hexagon', color: '#3B82F6' },
      { name: 'Domain-Driven Design (DDD)', icon: 'lucide:boxes', color: '#3B82F6' },
      { name: 'CQRS', icon: 'lucide:workflow', color: '#3B82F6' },
      { name: 'APIs RESTful', icon: 'lucide:network', color: '#3B82F6' },
      { name: 'RabbitMQ', icon: 'simple-icons:rabbitmq', color: '#FF6600' },
    ],
  },
  {
    title: {
      es: 'Inteligencia Artificial & Automatización',
      en: 'Artificial Intelligence & Automation',
    },
    icon: 'lucide:brain-circuit',
    wide: true,
    skills: [
      { name: 'Model Context Protocol (MCP)', icon: 'lucide:cpu', color: '#3B82F6' },
      { name: 'Flujos RAG', icon: 'lucide:database', color: '#10B981' },
      { name: 'n8n & Webhooks', icon: 'simple-icons:n8n', color: '#EA4B71' },
      { name: 'Anthropic Claude API', icon: 'simple-icons:anthropic' },
      { name: 'Bots de WhatsApp', icon: 'simple-icons:whatsapp', color: '#25D366' },
      { name: 'Claude Code', icon: 'simple-icons:claude', color: '#D97757' },
      { name: 'Cursor', icon: 'simple-icons:cursor' },
      { name: 'Agent Skills & AGENTS.md', icon: 'lucide:folder-tree', color: '#8B5CF6' },
    ],
  },
  {
    title: {
      es: 'Desarrollo Ágil & Interfaces Modernas',
      en: 'Agile Frontend & Modern Interfaces',
    },
    icon: 'lucide:code-xml',
    skills: [
      { name: 'TypeScript', icon: 'simple-icons:typescript', color: '#3178C6' },
      { name: 'JavaScript (ES6+)', icon: 'simple-icons:javascript', color: '#E8C900' },
      { name: 'React', icon: 'simple-icons:react', color: '#149ECA' },
      { name: 'Next.js', icon: 'simple-icons:nextdotjs' },
      { name: 'Vue.js', icon: 'simple-icons:vuedotjs', color: '#42B883' },
      { name: 'Inertia.js', icon: 'simple-icons:inertia', color: '#9553E9' },
      { name: 'Astro', icon: 'simple-icons:astro', color: '#BC52EE' },
      { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss', color: '#06B6D4' },
    ],
  },
  {
    title: {
      es: 'Bases de Datos & Infraestructura',
      en: 'Databases & Infrastructure',
    },
    icon: 'lucide:database',
    skills: [
      { name: 'PostgreSQL (RLS Multi-Tenancy)', icon: 'simple-icons:postgresql', color: '#4169E1' },
      { name: 'Supabase', icon: 'simple-icons:supabase', color: '#3ECF8E' },
      { name: 'MySQL', icon: 'simple-icons:mysql', color: '#4479A1' },
      { name: 'Redis', icon: 'simple-icons:redis', color: '#FF4438' },
      { name: 'Docker', icon: 'simple-icons:docker', color: '#2496ED' },
      { name: 'Linux (Ubuntu)', icon: 'simple-icons:linux' },
      { name: 'Nginx', icon: 'simple-icons:nginx', color: '#009639' },
      { name: 'Cloudflare', icon: 'simple-icons:cloudflare', color: '#F38020' },
    ],
  },
  {
    title: {
      es: 'Calidad & Despliegue Continuo (CI/CD)',
      en: 'Quality & Continuous Delivery (CI/CD)',
    },
    icon: 'lucide:shield-check',
    skills: [
      { name: 'Playwright (E2E POM)', icon: 'simple-icons:playwright', color: '#2EAD33' },
      { name: 'GitHub Actions', icon: 'simple-icons:githubactions', color: '#2088FF' },
      { name: 'PHPUnit', icon: 'lucide:flask-conical', color: '#3C9CD7' },
      { name: 'Behat (ATDD/BDD)', icon: 'lucide:test-tube', color: '#10B981' },
      { name: 'OWASP ZAP (Seguridad)', icon: 'simple-icons:owasp' },
      { name: 'Vitest', icon: 'simple-icons:vitest', color: '#6E9F18' },
    ],
  },
];

export const education = {
  degree: {
    title: {
      es: 'Licenciatura en Informática',
      en: 'B.S. in Computer Science',
    },
    school: 'Universidad de Oriente (UDO)',
    place: 'Carúpano, Venezuela',
    status: {
      es: '6.º semestre cursado',
      en: '6th semester completed',
    },
  },
  certifications: [
    {
      title: 'Codely',
      text: {
        es: 'Principios SOLID, Clean Code, Programación Orientada a Objetos (OOP) y Testing Automatizado.',
        en: 'SOLID Principles, Clean Code, Object-Oriented Programming (OOP) and Automated Testing.',
      },
    },
  ],
  languages: [
    {
      name: { es: 'Español', en: 'Spanish' },
      level: { es: 'Nativo', en: 'Native' },
    },
    {
      name: { es: 'Inglés', en: 'English' },
      level: {
        es: 'Técnico profesional (Comprensión fluida de docs y código)',
        en: 'Technical (Fluent reading of documentation & codebases)',
      },
    },
  ],
};
