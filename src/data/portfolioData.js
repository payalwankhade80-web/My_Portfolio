export const personalInfo = {
  name: "Payal Wankhade",
  role: "Python Developer & Full-Stack Engineer",
  titleHeadline: "Architecting robust backends,",
  titleGradient: "building scalable full-stack web apps.",
  email: "payalwankhade80@gmail.com",
  phone: "+91 8459250351",
  location: "Pune, Maharashtra, India",
  linkedin: "https://linkedin.com/in/payal-wankhade-85758a368",
  linkedinDisplay: "linkedin.com/in/payal-wankhade-85758a368",
  status: "Available for Python & Full-Stack Developer Roles · Pune, India",
  degree: "B.E. Computer Engineering · SGBAU",
  bio: "Computer Engineering graduate and Python Developer with hands-on professional experience in Python, Django, Django ORM, Node.js, React, SQL, and REST API development. Proven track record building backend and full-stack web applications, implementing CRUD operations, and integrating REST APIs.",
  fullBio: [
    "I am a Computer Engineering graduate and full-time Python Developer based in Pune, specializing in backend architecture, REST API design, and high-performance relational database systems.",
    "At Radiaant Captive India Limited, I build and maintain mission-critical backend modules using Python and Django ORM, as well as lead the full-stack engineering of enterprise Collection CRM applications utilizing Node.js, React, and PostgreSQL.",
    "Prior to this, I honed my backend development and database design skills at Sanyu Infotech Pvt. Ltd, writing optimized SQL queries, designing normalized database schemas, and building dynamic Django web solutions."
  ],
  quote: "Focused on delivering clean, scalable backend architecture, optimized SQL queries, and secure full-stack software solutions.",
  roles: [
    { title: "Python Developer", color: "pill-purple" },
    { title: "Django & REST API Specialist", color: "pill-blue" },
    { title: "Full-Stack (React & Node.js)", color: "pill-green" },
    { title: "SQL & Database Architect", color: "pill-orange" }
  ],
  languages: [
    { name: "English", level: "Professional" },
    { name: "Marathi", level: "Native" },
    { name: "Hindi", level: "Fluent" }
  ]
};

export const metrics = [
  { value: 1.5, suffix: "+", label: "Years Experience", sub: "Corporate & Internship Dev" },
  { value: 4, suffix: "", label: "Featured Projects", sub: "Production CRM & Web Apps" },
  { value: 100, suffix: "%", label: "REST API & CRUD", sub: "Django ORM & Node.js" },
  { value: 3, suffix: "", label: "Databases Mastered", sub: "PostgreSQL, MySQL, SQLite" }
];

export const marqueeItems = [
  "Radiaant Captive India Limited",
  "Sanyu Infotech Pvt. Ltd",
  "Python 3.x",
  "Django & Django ORM",
  "React.js",
  "Node.js",
  "PostgreSQL",
  "MySQL & SQLite",
  "REST API Architecture",
  "Postman API Testing",
  "Sant Gadge Baba Amravati University"
];

export const skillCategories = [
  { id: "all", name: "All Skills", icon: "✦" },
  { id: "backend", name: "Backend & Languages", icon: "🐍" },
  { id: "frontend", name: "Frontend & Web", icon: "⚛️" },
  { id: "databases", name: "Databases & APIs", icon: "🗄️" },
  { id: "tools", name: "Tools & Concepts", icon: "🛠️" }
];

export const skillGroups = [
  {
    category: "backend",
    title: "Backend & Languages",
    iconBadge: "icon-code",
    iconContent: "</>",
    skills: [
      { name: "Python", iconClass: "devicon-python-plain colored" },
      { name: "Django", iconClass: "devicon-django-plain colored" },
      { name: "Django ORM", iconClass: "devicon-django-plain" },
      { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
      { name: "JavaScript", iconClass: "devicon-javascript-plain colored" }
    ]
  },
  {
    category: "frontend",
    title: "Frontend & Web Technologies",
    iconBadge: "icon-tools",
    iconEmoji: "⚛️",
    skills: [
      { name: "React.js", iconClass: "devicon-react-original colored" },
      { name: "HTML5", iconClass: "devicon-html5-plain colored" },
      { name: "CSS3", iconClass: "devicon-css3-plain colored" },
      { name: "Responsive UI", iconClass: "devicon-bootstrap-plain colored" },
      { name: "Component Architecture", iconClass: "devicon-react-original" }
    ]
  },
  {
    category: "databases",
    title: "Databases & API Engineering",
    iconBadge: "icon-soft",
    iconEmoji: "🗄️",
    skills: [
      { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
      { name: "MySQL", iconClass: "devicon-mysql-plain colored" },
      { name: "SQLite", iconClass: "devicon-sqlite-plain colored" },
      { name: "REST API Integration", iconClass: "devicon-fastapi-plain colored" },
      { name: "Database Connectivity", iconClass: "devicon-postgresql-plain" }
    ]
  },
  {
    category: "tools",
    title: "Tools & Core Concepts",
    iconBadge: "icon-tools",
    iconEmoji: "🧠",
    skills: [
      { name: "Git & GitHub", iconClass: "devicon-git-plain colored" },
      { name: "Postman", iconClass: "devicon-postman-plain colored" },
      { name: "OOP Principles", iconEmoji: "🧩" },
      { name: "CRUD Operations", iconEmoji: "⚡" },
      { name: "Auth & RBAC Security", iconEmoji: "🔒" },
      { name: "SQL Query Tuning", iconEmoji: "🚀" }
    ]
  }
];

export const projects = [
  {
    id: "collection-crm",
    title: "Collection CRM (Enterprise B2B Application)",
    shortName: "Collection CRM",
    category: "FULL-STACK · NODE.JS & REACT",
    year: "2026 · LIVE ENTERPRISE",
    company: "Radiaant Captive India Limited",
    coverImg: "/images/crm_cover.jpg",
    tags: ["Node.js", "React.js", "PostgreSQL", "REST API", "RBAC Auth", "Postman", "Git"],
    summary: "Developed a mission-critical Collection CRM web application to streamline customer accounts, track outstanding dues, manage payment records, and automate collection follow-ups.",
    badge: "Enterprise Case Study",
    overview: "Spearheaded the development of a comprehensive Collection CRM platform engineered to replace fragmented spreadsheets with automated, role-governed collection pipelines. Built RESTful backend services in Node.js connected to PostgreSQL and paired with a high-performance React front end with dynamic dashboards.",
    keyFeatures: [
      "Engineered RESTful backend microservices in Node.js executing complete CRUD operations for customer ledger, dues, and follow-up activities.",
      "Built responsive, component-driven React dashboard with real-time financial status tracking, multi-parameter search, and filtering.",
      "Implemented strict JWT authentication and Role-Based Access Control (RBAC) separating Admin, Manager, and Field Agent privilege tiers.",
      "Architected PostgreSQL relational schemas with foreign key constraints, indexes, and optimized SQL queries for high-volume ledger records.",
      "Conducted comprehensive Postman integration testing, response benchmarking, and end-to-end bug fixing for seamless client-server sync."
    ],
    techStack: ["Node.js", "React.js", "PostgreSQL", "REST APIs", "JavaScript", "HTML5", "CSS3", "Postman", "Git"],
    screenshots: [
      {
        url: "/images/crm_cover.jpg",
        caption: "Collection CRM — Executive Dashboard with Outstanding Overdue Metrics, Trends & Recent Follow-ups"
      }
    ]
  },
  {
    id: "social-media-app",
    title: "Social Media Web Application (Instagram Clone)",
    shortName: "Social Media Platform",
    category: "PYTHON & DJANGO",
    year: "2025 – 2026 · FULL CRUD",
    company: "Personal Project",
    coverImg: "/images/social_cover.jpg",
    tags: ["Python", "Django", "Django ORM", "SQLite", "Authentication", "CRUD", "HTML5/CSS3"],
    summary: "Built a feature-rich social networking web application using Django, featuring complete user authentication, image media uploads, user profiles, and feed search functionality.",
    badge: "Django Full-Stack",
    overview: "Architected a scalable photo-sharing and community platform replicating core Instagram functionality. Leveraged Django's robust Model-View-Template (MVT) architecture, built-in session authentication, and Django ORM to deliver seamless user experience with strict content ownership rules.",
    keyFeatures: [
      "Implemented secure user registration, session login, logout, and password hashing using Django's built-in authentication system.",
      "Constructed full CRUD lifecycle for posts, including multi-format image upload handling, captions, and automated thumbnail optimization.",
      "Engineered dynamic user profile management allowing avatar updates, custom bio edits, and public profile viewports.",
      "Implemented real-time search functionality querying user profiles and post hashtags via optimized Django ORM filter lookups.",
      "Applied strict server-side authorization decorators ensuring only authenticated post authors can modify or delete their content."
    ],
    techStack: ["Python", "Django Framework", "Django ORM", "SQLite", "HTML5", "CSS3", "Media File Management"],
    screenshots: [
      {
        url: "/images/social_cover.jpg",
        caption: "PixelShare — Dark Mode Feed, User Profile Sidebar, Photo Grid & Social Engagement Metrics"
      }
    ]
  },
  {
    id: "enterprise-api-hub",
    title: "Enterprise REST API & Backend Architecture",
    shortName: "REST API Hub",
    category: "BACKEND & ARCHITECTURE",
    year: "2026 · RADIAANT CAPTIVE",
    company: "Radiaant Captive India Limited",
    coverImg: "/images/api_cover.jpg",
    tags: ["Python", "Django REST", "Node.js", "Postman", "JWT", "API Integration", "Database Connectivity"],
    summary: "Engineered scalable RESTful API endpoints and backend micro-modules supporting corporate CRM workflows, data integration pipelines, and cross-platform clients.",
    badge: "API Architecture",
    overview: "Designed, developed, and maintained robust backend API services for production workflows at Radiaant Captive. Ensured high reliability, standard HTTP status codes, structured JSON payloads, and automated Postman test suites for enterprise systems.",
    keyFeatures: [
      "Designed unified RESTful endpoints with consistent JSON envelope responses, error handling, and standard HTTP verb patterns.",
      "Integrated database connectivity across PostgreSQL and MySQL with connection pooling and transactional integrity.",
      "Developed automated Postman testing collections covering positive, negative, and edge-case payload validation.",
      "Optimized payload serialization and query latency to achieve sub-150ms response benchmarks under concurrent request loads.",
      "Integrated role-based middleware guarding sensitive financial and customer endpoints against unauthorized access."
    ],
    techStack: ["Python", "Django", "Node.js", "REST APIs", "Postman", "MySQL", "PostgreSQL", "JSON/JWT"],
    screenshots: [
      {
        url: "/images/api_cover.jpg",
        caption: "REST API Testing Hub — Postman Collections, Endpoint Documentation, JWT Auth & Architecture Graph"
      }
    ]
  },
  {
    id: "database-query-engine",
    title: "SQL Relational Modeling & Query Optimization Engine",
    shortName: "Database Optimization",
    category: "DATABASE & SQL",
    year: "2025 – 2026 · PERFORMANCE",
    company: "Radiaant Captive & Sanyu Infotech",
    coverImg: "/images/db_cover.jpg",
    tags: ["PostgreSQL", "MySQL", "SQLite", "Django ORM", "Schema Design", "Query Tuning", "CRUD"],
    summary: "Designed normalized relational schemas and optimized complex SQL queries and CRUD operations to support high-throughput data management for live corporate projects.",
    badge: "Database Systems",
    overview: "Applied advanced database engineering techniques across MySQL, SQLite, and PostgreSQL environments. Focused on eliminate N+1 query problems in Django ORM, indexing strategy, foreign key integrity, and automated data synchronization.",
    keyFeatures: [
      "Designed 3NF normalized relational database schemas with primary/foreign keys, unique constraints, and cascade policies.",
      "Wrote complex SQL joins, aggregations, subqueries, and window functions for analytics and operational reporting.",
      "Utilized EXPLAIN query execution plans to identify table scans, introducing targeted composite indexes that reduced query execution times.",
      "Utilized Django ORM select_related and prefetch_related methods to eliminate redundant database round-trips.",
      "Ensured database backup, migration management, and multi-environment synchronization across dev, staging, and production."
    ],
    techStack: ["PostgreSQL", "MySQL", "SQLite", "SQL Optimization", "Django ORM", "Relational Modeling"],
    screenshots: [
      {
        url: "/images/db_cover.jpg",
        caption: "DBMS Schema Visualizer — Relational Entity Tables, Execution Plan Visualizer & Index Optimization"
      }
    ]
  }
];

export const experience = [
  {
    role: "Python Developer",
    company: "Radiaant Captive India Limited",
    companyCode: "RC",
    companyBadge: "badge-blue",
    period: "September 2026 – Present",
    periodBadge: "pill-highlight",
    location: "Pune, Maharashtra",
    type: "Full-Time",
    active: true,
    summary: "Working as a full-time Python Developer, building and maintaining backend applications and modules using Python, Django, and Django ORM.",
    responsibilities: [
      "Working as a full-time Python Developer, building and maintaining backend applications and modules using Python, Django, and Django ORM.",
      "Developing a Collection CRM application using Node.js and React, covering REST API development, database connectivity, and user-facing dashboards.",
      "Designing database schemas and writing optimized SQL queries and CRUD operations to support efficient data management for live projects.",
      "Performing end-to-end testing, debugging, and performance optimization of APIs and application workflows, collaborating with senior developers to deliver reliable solutions."
    ],
    tags: ["Python", "Django", "Django ORM", "Node.js", "React.js", "PostgreSQL", "REST API", "SQL"]
  },
  {
    role: "Python Developer Intern",
    company: "Radiaant Captive India Limited",
    companyCode: "RC",
    companyBadge: "badge-purple",
    period: "May 2026 – August 2026",
    location: "Pune, Maharashtra",
    type: "Internship",
    active: false,
    summary: "Developed and maintained Python/Django-based backend applications, building scalable modules using Django ORM, models, views, templates, and forms.",
    responsibilities: [
      "Developed and maintained Python/Django-based backend applications, building scalable modules using Django ORM, models, views, templates, and forms.",
      "Implemented REST API integrations and managed data flow between application components.",
      "Performed database design, querying, and CRUD operations using MySQL/SQLite to support efficient data management for live projects.",
      "Carried out end-to-end testing, debugging, and performance optimization of API connectivity and application workflows, collaborating with senior developers to deliver reliable solutions."
    ],
    tags: ["Python", "Django", "Django ORM", "MySQL", "SQLite", "REST APIs", "Templates & Forms"]
  },
  {
    role: "Python Developer Intern",
    company: "Sanyu Infotech Pvt. Ltd",
    companyCode: "SI",
    companyBadge: "badge-gold",
    period: "October 2025 – April 2026",
    location: "Pune, Maharashtra",
    type: "Internship",
    active: false,
    summary: "Developed Django-based backend web applications using Python, Django ORM, and MySQL.",
    responsibilities: [
      "Developed Django-based backend web applications using Python, Django ORM, and MySQL.",
      "Implemented CRUD operations using Django ORM to efficiently manage records in the database using MySQL and SQLite.",
      "Worked with Django models, views, templates, and forms to build dynamic and efficient web solutions."
    ],
    tags: ["Python", "Django ORM", "MySQL", "SQLite", "CRUD", "MVT Architecture"]
  }
];

export const education = [
  {
    degree: "Bachelor's Degree in Computer Engineering",
    institution: "Sant Gadge Baba Amravati University",
    location: "Amravati, Maharashtra",
    period: "2021 – 2025",
    pillColor: "pill-orange",
    score: "Completed",
    percentage: "90%",
    featured: true,
    highlights: "Comprehensive engineering curriculum covering Data Structures, Algorithms, Database Management Systems (DBMS), Operating Systems, Software Engineering, and Object-Oriented Programming."
  },
  {
    degree: "Computer Operator Programming Assistant (COPA)",
    institution: "Industrial Training Institute (ITI)",
    location: "Akola, Maharashtra",
    period: "2017 – 2018",
    pillColor: "pill-purple",
    score: "Certified",
    percentage: "85%",
    featured: false,
    highlights: "Foundational training in computer operations, programming fundamentals, database concepts, office tools, and systems configuration."
  }
];
