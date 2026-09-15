// Todo el contenido del portafolio vive aquí. Edita este archivo para actualizar el sitio.

export interface Skill {
  name: string;
  /** Nombre de icono Iconify: `simple-icons:*` (logos) o `lucide:*` (genéricos) */
  icon: string;
  /** Color de marca; si se omite, usa el color de texto del tema */
  color?: string;
}

export interface SkillGroup {
  title: string;
  icon: string;
  wide?: boolean;
  skills: Skill[];
}

export const profile = {
  name: 'Juan Mata',
  initials: 'JM',
  role: 'Desarrollador Full-Stack & QA',
  headline: 'PHP/Laravel · React · TypeScript · DDD · IA aplicada',
  tagline:
    'Construyo software empresarial de punta a punta —del levantamiento con el cliente al backend, la interfaz y sus pruebas— con foco en calidad, seguridad, arquitectura limpia e IA aplicada.',
  location: 'Caracas, Venezuela',
  availability: 'Disponibilidad inmediata · Remoto o híbrido',
  yearsOfExperience: 4,
  email: 'matajuan134@gmail.com',
  whatsapp: '+58 416 094 4040',
  whatsappUrl: 'https://wa.me/584160944040',
  github: 'https://github.com/Jundev66',
  githubUser: 'Jundev66',
  linkedin: 'https://www.linkedin.com/in/juan-mata-1b959a235',
  linkedinUser: 'juan-mata-1b959a235',
  cv: '/juan-mata-cv.pdf',
  seoDescription:
    'Juan Mata — Desarrollador Full-Stack y QA con 4 años de experiencia en ERP/SaaS B2B. PHP/Laravel, React, TypeScript, DDD, Playwright, seguridad OWASP e IA aplicada: agentes, LLM y OCR.',
};

export const nav = [
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'ia', label: 'IA' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'formacion', label: 'Formación' },
  { id: 'contacto', label: 'Contacto' },
];

export const about = {
  paragraphs: [
    'Soy desarrollador Full-Stack con 4 años de experiencia en Medine.tech, una consultora que desarrolla software empresarial (ERP/SaaS B2B) para empresas de toda Latinoamérica, donde trabajé en equipos de 15 a 20 personas bajo metodología Scrum.',
    'Desarrollo módulos de negocio completos —nómina, compras, ventas, alquileres y facturación— desde el levantamiento de necesidades del cliente y el diseño de la solución hasta el backend, la interfaz y sus pruebas.',
    'Al rol de desarrollador le sumo el de QA y seguridad: suites automatizadas en integración continua, auditorías OWASP y modernización de código heredado hacia arquitectura hexagonal con DDD.',
    'Y aplico IA en dos frentes: en el producto, con modelos de lenguaje en funcionalidades para clientes y lectura de documentos con OCR y LLM; y en el desarrollo, con agentes especializados para escribir pruebas, revisar código y analizar hallazgos de seguridad.',
  ],
  highlights: [
    {
      icon: 'lucide:layers',
      title: 'Producto de punta a punta',
      text: 'Del requerimiento del cliente al modelo de datos, la API y la interfaz.',
    },
    {
      icon: 'lucide:shield-check',
      title: 'Calidad y seguridad',
      text: 'Pruebas E2E y ATDD/BDD en CI, y ciclo completo de vulnerabilidades con OWASP ZAP.',
    },
    {
      icon: 'lucide:boxes',
      title: 'Arquitectura limpia',
      text: 'DDD, arquitectura hexagonal y SOLID para código mantenible y fácil de probar.',
    },
    {
      icon: 'lucide:brain-circuit',
      title: 'IA aplicada',
      text: 'LLM y OCR en productos, y agentes especializados para pruebas, revisión de código y seguridad.',
    },
  ],
  stats: [
    { value: '4', label: 'años de experiencia' },
    { value: '500+', label: 'pruebas automatizadas en CI' },
    { value: '15–20', label: 'personas por equipo Scrum' },
    { value: '5', label: 'dominios de negocio' },
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Lenguajes y Frameworks',
    icon: 'lucide:code-xml',
    wide: true,
    skills: [
      { name: 'PHP 8.x', icon: 'simple-icons:php', color: '#8892BF' },
      { name: 'Laravel', icon: 'simple-icons:laravel', color: '#FF2D20' },
      { name: 'JavaScript', icon: 'simple-icons:javascript', color: '#E8C900' },
      { name: 'TypeScript', icon: 'simple-icons:typescript', color: '#3178C6' },
      { name: 'React', icon: 'simple-icons:react', color: '#149ECA' },
      { name: 'Vue.js', icon: 'simple-icons:vuedotjs', color: '#42B883' },
      { name: 'Next.js', icon: 'simple-icons:nextdotjs' },
      { name: 'Node.js', icon: 'simple-icons:nodedotjs', color: '#5FA04E' },
      { name: 'Nest.js', icon: 'simple-icons:nestjs', color: '#E0234E' },
      { name: 'React Native', icon: 'simple-icons:react', color: '#149ECA' },
      { name: 'Inertia.js', icon: 'simple-icons:inertia', color: '#9553E9' },
    ],
  },
  {
    title: 'IA aplicada',
    icon: 'lucide:brain-circuit',
    wide: true,
    skills: [
      { name: 'Claude Code', icon: 'simple-icons:claude', color: '#D97757' },
      { name: 'Cursor', icon: 'simple-icons:cursor' },
      { name: 'GitHub Copilot', icon: 'simple-icons:githubcopilot' },
      { name: 'API de Anthropic', icon: 'simple-icons:anthropic' },
      { name: 'Integración de LLMs', icon: 'lucide:brain-circuit', color: '#8B5CF6' },
      { name: 'OCR con respaldo de LLM', icon: 'lucide:scan-text', color: '#8B5CF6' },
      { name: 'Agentes y subagentes', icon: 'lucide:bot', color: '#8B5CF6' },
      { name: 'Skills y AGENTS.md', icon: 'lucide:folder-tree', color: '#8B5CF6' },
    ],
  },
  {
    title: 'Bases de Datos',
    icon: 'lucide:database',
    skills: [
      { name: 'MySQL', icon: 'simple-icons:mysql', color: '#4479A1' },
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql', color: '#4169E1' },
      { name: 'Eloquent ORM', icon: 'simple-icons:laravel', color: '#FF2D20' },
      { name: 'Redis', icon: 'simple-icons:redis', color: '#FF4438' },
    ],
  },
  {
    title: 'Pruebas y Seguridad',
    icon: 'lucide:shield-check',
    skills: [
      { name: 'Playwright', icon: 'simple-icons:playwright', color: '#2EAD33' },
      { name: 'Behat', icon: 'lucide:test-tube', color: '#10B981' },
      { name: 'PHPUnit', icon: 'lucide:flask-conical', color: '#3C9CD7' },
      { name: 'PHPStan', icon: 'lucide:bug', color: '#8B5CF6' },
      { name: 'OWASP ZAP', icon: 'simple-icons:owasp' },
    ],
  },
  {
    title: 'DevOps y Herramientas',
    icon: 'lucide:server',
    wide: true,
    skills: [
      { name: 'Docker', icon: 'simple-icons:docker', color: '#2496ED' },
      { name: 'Git', icon: 'simple-icons:git', color: '#F05032' },
      { name: 'GitHub', icon: 'simple-icons:github' },
      { name: 'GitHub Actions', icon: 'simple-icons:githubactions', color: '#2088FF' },
      { name: 'RabbitMQ', icon: 'simple-icons:rabbitmq', color: '#FF6600' },
      { name: 'Sentry', icon: 'simple-icons:sentry', color: '#8D6EE0' },
      { name: 'Swagger / OpenAPI', icon: 'simple-icons:swagger', color: '#49A32B' },
      { name: 'Laravel Sanctum', icon: 'lucide:shield', color: '#FF2D20' },
      { name: 'Nginx', icon: 'simple-icons:nginx', color: '#009639' },
    ],
  },
  {
    title: 'Arquitectura y Prácticas',
    icon: 'lucide:workflow',
    wide: true,
    skills: [
      { name: 'Domain-Driven Design', icon: 'lucide:boxes', color: '#6366F1' },
      { name: 'Arquitectura Hexagonal', icon: 'lucide:hexagon', color: '#6366F1' },
      { name: 'ATDD / BDD', icon: 'lucide:workflow', color: '#6366F1' },
      { name: 'SOLID', icon: 'lucide:layers', color: '#6366F1' },
      { name: 'Clean Code', icon: 'lucide:sparkles', color: '#6366F1' },
      { name: 'OOP', icon: 'lucide:puzzle', color: '#6366F1' },
      { name: 'APIs RESTful', icon: 'lucide:network', color: '#6366F1' },
      { name: 'Scrum', icon: 'lucide:users', color: '#6366F1' },
    ],
  },
];

export const experience = [
  {
    role: 'Desarrollador Full-Stack y QA',
    company: 'Medine.tech',
    companyUrl: 'https://www.linkedin.com/company/medinetech',
    mode: 'Remoto',
    period: '10/2022 – 09/2026',
    duration: '4 años',
    description:
      'Consultora de software empresarial (ERP/SaaS) con clientes en toda Latinoamérica.',
    groups: [
      {
        title: 'Desarrollo',
        icon: 'lucide:code-xml',
        items: [
          {
            title: 'Módulos de negocio desde cero',
            text: 'Levantamiento de necesidades con el cliente, diseño de la solución, modelado de datos, backend en Laravel/Eloquent e interfaz en React, Vue.js e Inertia.js. Nómina, compras, ventas, alquileres y facturación, traduciendo reglas contables y operativas a modelos de datos y flujos.',
          },
          {
            title: 'Diseño y construcción de APIs',
            text: 'Contratos, versionado, autenticación con Laravel Sanctum y documentación en Swagger/OpenAPI. APIs de integración con terceros, consumo de APIs externas con manejo de errores, reintentos y sincronización, y comunicación asíncrona vía RabbitMQ.',
          },
          {
            title: 'Modernización y deuda técnica',
            text: 'Migré controladores heredados masivos a una arquitectura de APIs, extrayendo la lógica a servicios con arquitectura hexagonal y DDD, con endpoints documentados y cobertura de pruebas, sin frenar la entrega de nuevas funcionalidades.',
          },
        ],
      },
      {
        title: 'QA, seguridad e infraestructura',
        icon: 'lucide:shield-check',
        items: [
          {
            title: 'Automatización de pruebas',
            text: 'Diseñé y mantuve una suite de más de 500 pruebas (Playwright E2E con Page Object Model, Behat ATDD/BDD y PHPUnit) en CI con GitHub Actions, como control de entrega previo a cada release.',
          },
          {
            title: 'Ciclo completo de vulnerabilidades',
            text: 'Escaneos con OWASP ZAP en producción, priorización, remediación, verificación y documentación. Resolví inyección SQL, configuración insegura de Nginx y dependencias vulnerables.',
          },
          {
            title: 'Servidores y producción',
            text: 'Administración de servidores y atención de escenarios críticos en producción con diagnóstico en caliente. Entornos containerizados con Docker, despliegues y monitoreo de errores con Sentry.',
          },
        ],
      },
      {
        title: 'IA aplicada',
        icon: 'lucide:brain-circuit',
        items: [
          {
            title: 'Ecosistema de agentes',
            text: 'Diseñé un entorno de IA para el ciclo de desarrollo y pruebas, con agentes especializados que se coordinan entre sí y skills que se activan según el contexto de la tarea y la herramienta en uso (Claude Code, Cursor, GitHub Copilot).',
          },
          {
            title: 'Pruebas y revisión con IA',
            text: 'Generación y mantenimiento de pruebas de Playwright, Behat y PHPUnit, revisión de código y análisis de hallazgos de OWASP ZAP con apoyo de agentes de IA.',
          },
          {
            title: 'LLM en el producto',
            text: 'Integración de modelos de lenguaje en funcionalidades de los módulos del ERP que utilizaban los clientes.',
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
      { name: 'MySQL', icon: 'simple-icons:mysql', color: '#4479A1' },
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql', color: '#4169E1' },
      { name: 'Docker', icon: 'simple-icons:docker', color: '#2496ED' },
      { name: 'Playwright', icon: 'simple-icons:playwright', color: '#2EAD33' },
      { name: 'Swagger', icon: 'simple-icons:swagger', color: '#49A32B' },
      { name: 'Claude Code', icon: 'simple-icons:claude', color: '#D97757' },
      { name: 'Git', icon: 'simple-icons:git', color: '#F05032' },
    ] satisfies Skill[],
  },
];

export interface AiItem {
  icon: string;
  title: string;
  text: string;
  /** Dónde se aplicó: empresa o proyecto */
  source: string;
}

export const ai = {
  intro:
    'Uso la IA en dos frentes: dentro de los productos, para automatizar tareas reales de los usuarios, y en el ciclo de desarrollo, con agentes que trabajan con el contexto y las reglas de cada proyecto.',
  pillars: [
    {
      icon: 'lucide:brain-circuit',
      title: 'IA en el producto',
      subtitle: 'Funcionalidades que ahorran trabajo a quien usa el sistema.',
      items: [
        {
          icon: 'lucide:scan-text',
          title: 'OCR con respaldo de LLM',
          text: 'Los comprobantes bancarios se leen con Tesseract.js y, cuando faltan campos, se extraen con la API de Anthropic: el modelo más costoso solo se usa cuando hace falta.',
          source: 'CryoTech',
        },
        {
          icon: 'lucide:message-square-text',
          title: 'Asistente conversacional',
          text: 'Registra ventas, cobros y gastos desde Telegram: propone el asiento a partir de la foto del comprobante y pregunta por los datos que faltan en lugar de adivinarlos.',
          source: 'CryoTech',
        },
        {
          icon: 'lucide:cpu',
          title: 'Modelos de lenguaje en el ERP',
          text: 'Integración de LLMs en funcionalidades de los módulos que utilizaban los clientes.',
          source: 'Medine.tech',
        },
      ] satisfies AiItem[],
    },
    {
      icon: 'lucide:bot',
      title: 'IA en el desarrollo',
      subtitle: 'Agentes con el contexto y las reglas de cada proyecto.',
      items: [
        {
          icon: 'lucide:workflow',
          title: 'Ecosistema de agentes',
          text: 'Agentes especializados que se coordinan entre sí y skills que se activan según la tarea, con Claude Code, Cursor y GitHub Copilot.',
          source: 'Medine.tech',
        },
        {
          icon: 'lucide:test-tube',
          title: 'Pruebas, revisión y seguridad',
          text: 'Generación y mantenimiento de pruebas de Playwright, Behat y PHPUnit, revisión de código y análisis de hallazgos de OWASP ZAP con apoyo de IA.',
          source: 'Medine.tech',
        },
        {
          icon: 'lucide:folder-tree',
          title: 'Fuente única de contexto',
          text: 'Una carpeta .ai/ con 8 agentes (seguridad, QA, base de datos, dominio…) y skills según agentskills.io, sincronizada para cada herramienta; en Kombo, un solo AGENTS.md que leen Claude, Gemini, Cursor y Copilot.',
          source: 'CryoTech · Kombo',
        },
        {
          icon: 'lucide:key-round',
          title: 'Subagentes con límites',
          text: 'Subagentes con herramientas y modelo definidos: uno audita el aislamiento entre negocios en cada consulta, otro diseña módulos por capas y otro mantiene las pruebas de usuario.',
          source: 'Proyectos privados',
        },
      ] satisfies AiItem[],
    },
  ],
  tools: [
    { name: 'Claude Code', icon: 'simple-icons:claude', color: '#D97757' },
    { name: 'Cursor', icon: 'simple-icons:cursor' },
    { name: 'GitHub Copilot', icon: 'simple-icons:githubcopilot' },
    { name: 'API de Anthropic', icon: 'simple-icons:anthropic' },
    { name: 'Tesseract.js', icon: 'lucide:scan-text', color: '#8B5CF6' },
    { name: 'Agent Skills', icon: 'lucide:folder-tree', color: '#8B5CF6' },
  ] satisfies Skill[],
};

export interface Project {
  name: string;
  subtitle: string;
  status: string;
  statusTone: 'amber' | 'emerald' | 'sky';
  description: string;
  bullets: string[];
  /** Cifras destacadas que se muestran como etiquetas */
  metrics: string[];
  stack: Skill[];
  /** Colores de la portada: degradado del logo, fondo claro (`soft`) y fondo oscuro (`deep`) */
  brand: { from: string; to: string; soft: string; deep: string };
  /** Logo propio del proyecto (ver `ProjectLogo.astro`) */
  logo: 'corebiz' | 'kombo' | 'cryotech';
  repo?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    name: 'CoreBiz',
    subtitle: 'ERP multi-tenant para comercios',
    status: 'En línea',
    statusTone: 'emerald',
    description:
      'Sistema de gestión comercial multi-tenant —inventario, ventas y notas de entrega— con arquitectura hexagonal y aislamiento de datos con Row Level Security de PostgreSQL.',
    bullets: [
      'Hexagonal con DDD táctico y CQRS ligero: el dominio no tiene dependencias y el build falla si se acopla.',
      'Aislamiento multi-tenant en cuatro capas, verificado tabla por tabla con una matriz de tests.',
      'Demo efímera por visitante, con un circuit breaker que protege el presupuesto de infraestructura.',
    ],
    metrics: ['497 tests', '11 ADRs', 'Threat model STRIDE'],
    stack: [
      { name: 'NestJS', icon: 'simple-icons:nestjs', color: '#E0234E' },
      { name: 'Next.js', icon: 'simple-icons:nextdotjs' },
      { name: 'TypeScript', icon: 'simple-icons:typescript', color: '#3178C6' },
      { name: 'Supabase', icon: 'simple-icons:supabase', color: '#3ECF8E' },
      { name: 'Prisma', icon: 'simple-icons:prisma' },
      { name: 'Zod', icon: 'simple-icons:zod', color: '#3E67B1' },
      { name: 'Vitest', icon: 'simple-icons:vitest', color: '#6E9F18' },
      { name: 'Playwright', icon: 'simple-icons:playwright', color: '#2EAD33' },
    ],
    brand: { from: '#6366f1', to: '#4f46e5', soft: '#eef0ff', deep: '#1b1a4a' },
    logo: 'corebiz',
    repo: 'https://github.com/Jundev66/CoreBiz',
    demo: 'https://corebiz-web.vercel.app',
  },
  {
    name: 'Kombo',
    subtitle: 'Sistema de pedidos multi-negocio',
    status: 'En desarrollo',
    statusTone: 'amber',
    description:
      'Pedidos de comida para múltiples negocios en un solo despliegue: cada negocio entra por su propio subdominio y solo ve sus datos, garantizado por PostgreSQL Row Level Security.',
    bullets: [
      'Tres canales de entrada —portal del cliente, bot de WhatsApp/Telegram y caja— que llegan a la misma pantalla de cocina.',
      'El cliente recibe el aviso de pedido listo por el mismo canal en el que pidió.',
      'Repositorio preparado para agentes de IA: un solo AGENTS.md como contexto para Claude, Gemini, Cursor y Copilot.',
    ],
    metrics: ['Multi-tenant RLS', 'Caja + cocina', 'Listo para agentes IA'],
    stack: [
      { name: 'Laravel', icon: 'simple-icons:laravel', color: '#FF2D20' },
      { name: 'PHP', icon: 'simple-icons:php', color: '#8892BF' },
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql', color: '#4169E1' },
      { name: 'Redis', icon: 'simple-icons:redis', color: '#FF4438' },
      { name: 'React', icon: 'simple-icons:react', color: '#149ECA' },
      { name: 'TypeScript', icon: 'simple-icons:typescript', color: '#3178C6' },
      { name: 'Tailwind', icon: 'simple-icons:tailwindcss', color: '#06B6D4' },
      { name: 'Playwright', icon: 'simple-icons:playwright', color: '#2EAD33' },
    ],
    brand: { from: '#2f855a', to: '#1f6f4a', soft: '#eef7f2', deep: '#0f2c1e' },
    logo: 'kombo',
    repo: 'https://github.com/Jundev66/kombo',
  },
  {
    name: 'CryoTech',
    subtitle: 'Gestión avícola para pequeños productores',
    status: 'API en producción',
    statusTone: 'sky',
    description:
      'Lotes, costos y tesorería en dos monedas para una granja real en Venezuela, con un asistente que registra operaciones desde Telegram leyendo fotos de comprobantes bancarios.',
    bullets: [
      'Lectura de comprobantes con OCR (Tesseract.js) y, si faltan campos, extracción con la API de Anthropic.',
      'Métricas por lote: conversión alimenticia (FCR), mortalidad, curva de crecimiento y costo por ave.',
      'Multiempresa con roles y permisos por módulo, rotación de refresh tokens y rate limiting.',
    ],
    metrics: ['OCR + LLM', '8 agentes de IA', '76 unit + 82 E2E'],
    stack: [
      { name: 'React', icon: 'simple-icons:react', color: '#149ECA' },
      { name: 'NestJS', icon: 'simple-icons:nestjs', color: '#E0234E' },
      { name: 'Prisma', icon: 'simple-icons:prisma' },
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql', color: '#4169E1' },
      { name: 'TypeScript', icon: 'simple-icons:typescript', color: '#3178C6' },
      { name: 'API de Anthropic', icon: 'simple-icons:anthropic' },
      { name: 'Telegram', icon: 'simple-icons:telegram', color: '#26A5E4' },
      { name: 'Playwright', icon: 'simple-icons:playwright', color: '#2EAD33' },
    ],
    brand: { from: '#00a081', to: '#007b5f', soft: '#dbf6ed', deep: '#003d31' },
    logo: 'cryotech',
    repo: 'https://github.com/Jundev66/cryotech',
  },
];

export const education = {
  degree: {
    title: 'Licenciatura en Informática',
    school: 'Universidad de Oriente (UDO)',
    place: 'Carúpano, Venezuela',
    status: '6.º semestre cursado · En curso',
  },
  certifications: [
    {
      title: 'Codely',
      text: 'SOLID, Clean Code, buenas prácticas de Programación Orientada a Objetos y Testing.',
    },
  ],
  languages: [
    { name: 'Español', level: 'Nativo', value: 100 },
    { name: 'Inglés', level: 'Básico · en mejora activa', value: 35 },
  ],
};
