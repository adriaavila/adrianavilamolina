export type SiteLocale = "en" | "es";

type NavItem = {
  href: string;
  label: string;
};

type Metric = {
  value: string;
  label: string;
};

type Service = {
  key: string;
  title: string;
  description: string;
  points: string[];
};

type FeaturedProject = {
  slug: string;
  category: string;
  summary: string;
  impact: string;
  deliverables: string[];
};

type ProcessStep = {
  title: string;
  description: string;
};

type FAQItem = {
  question: string;
  answer: string;
};

type ContactDetail = {
  label: string;
  value: string;
};

type PricingPlan = {
  key: string;
  name: string;
  audience: string;
  price: string;
  cadence: string;
  description: string;
  badge?: string;
  featured?: boolean;
  features: string[];
  ctaLabel: string;
  note: string;
  paymentUrl: string;
};

type LocaleContent = {
  localeLabel: string;
  switchToLabel: string;
  skipToContent: string;
  nav: NavItem[];
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    status: string;
    note: string;
    metrics: Metric[];
    stack: string[];
    profileCardTitle: string;
    profileCardBody: string;
    profileCardItems: string[];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: Service[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    description: string;
    plans: PricingPlan[];
  };
  work: {
    eyebrow: string;
    title: string;
    description: string;
    viewLabel: string;
    items: FeaturedProject[];
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: ProcessStep[];
    differentiatorsTitle: string;
    differentiators: string[];
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: FAQItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    responseLabel: string;
    responseValue: string;
    primaryCta: string;
    secondaryCta: string;
    details: ContactDetail[];
    socialTitle: string;
    formTitle: string;
    formDescription: string;
  };
  footer: {
    blurb: string;
    rights: string;
  };
};

export const portfolioSiteContent: Record<SiteLocale, LocaleContent> = {
  en: {
    localeLabel: "EN",
    switchToLabel: "ES",
    skipToContent: "Skip to main content",
    nav: [
      { href: "/historia", label: "Story" },
      { href: "#services", label: "Services" },
      { href: "#pricing", label: "Pricing" },
      { href: "#work", label: "Work" },
      { href: "#process", label: "Process" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Contact" },
    ],
    hero: {
      eyebrow: "Digital Builder",
      titleLead: "Digital systems for teams that need",
      titleAccent: "clarity and speed.",
      description:
        "Web apps, dashboards, and automations designed to help teams launch faster and operate with less friction.",
      primaryCta: "Start a Project",
      secondaryCta: "View Selected Work",
      status: "Open to selected freelance projects",
      note: "",
      metrics: [
        { value: "3+", label: "Years Building Revenue-Oriented Products" },
        { value: "B2B", label: "Dashboards, Internal Tools & Product Systems" },
      ],
      stack: ["Next.js", "React", "TypeScript", "n8n", "Power BI", "Analytics"],
      profileCardTitle: "What you get",
      profileCardBody:
        "A hands-on freelance partner who combines product execution, analytics thinking, and fast iteration without bloated process.",
      profileCardItems: [
        "Clear scope and async communication",
        "Fast MVP delivery with premium UI polish",
        "Automation and analytics built into the product",
      ],
    },
    services: {
      eyebrow: "Offer",
      title: "Three clear ways to launch, streamline, or scale.",
      description:
        "The offer is intentionally short: product, automation, and data. If a project spans more than one lane, I shape a hybrid scope without making the process messy.",
      items: [
        {
          key: "mvp",
          title: "Web & Apps",
          description:
            "Focused product builds designed to validate an idea, support a sales process, or put a core workflow live fast.",
          points: [
            "Core flow, architecture, and key screens",
            "Premium UI ready to validate with real users",
          ],
        },
        {
          key: "automation",
          title: "AI Automations & Internal Tools",
          description:
            "Operational systems that reduce manual work, tighten handoffs, and help teams move with less friction.",
          points: [
            "LLM-assisted workflows connected to the business",
            "n8n automations and cleaner internal operations",
          ],
        },
        {
          key: "analytics",
          title: "Dashboards & BI Systems",
          description:
            "Reporting layers built to make decisions faster, spot bottlenecks earlier, and bring clarity to performance.",
          points: [
            "KPIs, operational views, and reporting clarity",
            "Power BI, analytics pipelines, and usable dashboards",
          ],
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Three base packages to move without friction.",
      description:
        "Choose the level of depth, speed, and build intensity you need right now. These packages work as a base for product, automation, or BI work.",
      plans: [
        {
          key: "starter",
          name: "Clarity Sprint",
          audience: "For teams that need a focused first deliverable",
          price: "$350",
          cadence: "one-time",
          description:
            "A short sprint to define the right direction and ship a first useful asset with clearer scope, priorities, and technical next steps.",
          badge: "Fastest start",
          features: [
            "Focused discovery and delivery plan",
            "One strategic asset, blueprint, or prototype",
            "Technical recommendations and next-step roadmap",
            "Delivery in 3 to 5 days",
          ],
          ctaLabel: "Book Clarity Sprint",
          note: "Best fit when you need direction and a concrete first output before committing to a larger build.",
          paymentUrl: "https://buy.stripe.com/test_replace_landing_sprint",
        },
        {
          key: "growth",
          name: "Build Sprint",
          audience: "For teams ready to ship one core system",
          price: "$900",
          cadence: "project",
          description:
            "A production-focused sprint for one primary flow, dashboard, or automation with the polish and structure needed to use it for real.",
          badge: "Most chosen",
          featured: true,
          features: [
            "One main flow, dashboard, or automation in production",
            "Premium UI or operational layer",
            "Integration with existing tools and workflows",
            "Delivery in 2 to 3 weeks",
          ],
          ctaLabel: "Start Build Sprint",
          note: "The right package when you want something real in market quickly without overbuilding the first version.",
          paymentUrl: "https://buy.stripe.com/test_replace_mvp_build",
        },
        {
          key: "partner",
          name: "System Build",
          audience: "For teams that need a wider connected solution",
          price: "$1,800",
          cadence: "project",
          description:
            "A broader build for founders who need multiple moving parts working together across product, automation, and reporting.",
          badge: "Largest scope",
          features: [
            "Multiple views, modules, or connected workflows",
            "Frontend, data, and automation working together",
            "QA, deployment, and handoff included",
            "Delivery in 4 to 6 weeks",
          ],
          ctaLabel: "Start System Build",
          note: "Best fit when the project needs more than one isolated deliverable and must feel cohesive from day one.",
          paymentUrl: "https://buy.stripe.com/test_replace_fractional_partner",
        },
      ],
    },
    work: {
      eyebrow: "Selected Work",
      title: "Projects that prove range, speed, and business instinct.",
      description:
        "A curated lineup of launches, redesigns, and digital products built to reduce friction, increase trust, and move ideas into the market faster.",
      viewLabel: "View Live Project",
      items: [
        {
          slug: "reservas-verona",
          category: "Residential SaaS",
          summary:
            "Amenity reservation platform designed to reduce admin friction inside residential communities.",
          impact:
            "Built around cleaner booking flows, clarity, and day-to-day usability.",
          deliverables: [
            "Booking flow cleanup",
            "Resident-facing UX",
            "Operational clarity",
          ],
        },
        {
          slug: "pausa-app",
          category: "Wellness Product",
          summary:
            "Support-focused web app for mental health and sobriety with a calm, guided product experience.",
          impact:
            "Structured to make sensitive workflows feel clear, supportive, and lightweight.",
          deliverables: [
            "Guided user journey",
            "Calm interface system",
            "Support-first flow",
          ],
        },
        {
          slug: "servicios-creativos",
          category: "Service Brand Website",
          summary:
            "Creative agency website built to improve perception, explain the offer faster, and make the brand feel more current.",
          impact:
            "Turned the site into a stronger sales surface with cleaner positioning and better visual rhythm.",
          deliverables: [
            "Offer positioning",
            "Premium web presence",
            "Stronger visual hierarchy",
          ],
        },
        {
          slug: "artist-the-way",
          category: "Creative Commerce",
          summary:
            "Digital art commerce experience balancing storytelling, product discovery, and a more elevated visual tone.",
          impact:
            "Combined catalog clarity with an art-forward presentation that feels more intentional than a standard store.",
          deliverables: [
            "Catalog experience",
            "Story-led layout",
            "Conversion-ready flow",
          ],
        },
        {
          slug: "kawsay-coffee",
          category: "Premium E-Commerce",
          summary:
            "Brand-led commerce experience for a coffee business looking for a stronger premium feel online.",
          impact:
            "Balanced storytelling, product presentation, and trust signals in one flow.",
          deliverables: [
            "Brand storytelling",
            "Product trust signals",
            "Premium shopping flow",
          ],
        },
        {
          slug: "vista-campo",
          category: "Brand & Web Redesign",
          summary:
            "Website redesign focused on credibility, messaging clarity, and a more elevated digital presence.",
          impact:
            "Repositioned the experience to feel more confident, modern, and conversion-ready.",
          deliverables: [
            "Credibility refresh",
            "Clearer messaging",
            "Modern responsive redesign",
          ],
        },
      ],
    },
    process: {
      eyebrow: "Process",
      title: "Lean collaboration with premium output.",
      description:
        "The goal is simple: reduce ambiguity early, build in short cycles, and ship something that looks refined and works in the real world.",
      steps: [
        {
          title: "1. Scope With Business Context",
          description:
            "We define the problem, the audience, the outcome, and the smallest version worth shipping.",
        },
        {
          title: "2. Build in Fast Decision Loops",
          description:
            "Design, interface, automation, and product logic move together so there is no disconnect between vision and delivery.",
        },
        {
          title: "3. Launch, Learn & Improve",
          description:
            "We ship with a clean foundation and keep iterating where performance, clarity, or conversion matters most.",
        },
      ],
      differentiatorsTitle: "Why teams hire me",
      differentiators: [
        "I think in systems, not isolated screens.",
        "I can move between frontend, analytics, and workflow automation.",
        "I communicate clearly and work well asynchronously.",
        "I care about the business outcome as much as the build quality.",
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions you probably have before reaching out.",
      description:
        "Short answers so you can decide quickly whether the fit is right.",
      items: [
        {
          question: "What kinds of freelance projects are the best fit?",
          answer:
            "Web products, SaaS MVPs, premium websites, dashboards, and automation-heavy workflows where speed and business thinking matter.",
        },
        {
          question: "Do you work with clients outside Venezuela?",
          answer:
            "Yes. Remote collaboration is part of the workflow, especially for teams in LATAM and the US.",
        },
        {
          question:
            "Can you improve an existing product instead of starting from scratch?",
          answer:
            "Yes. Refactors, UX upgrades, performance improvements, and clearer positioning work are all part of the offer.",
        },
        {
          question: "Do you stay involved after launch?",
          answer:
            "Yes, when it makes sense. I can continue through optimization sprints, feature iterations, or product support retainers.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "If the project matters, let's make the first move count.",
      description:
        "Share the idea, the bottleneck, or the product stage. I will help you shape the next practical step.",
      responseLabel: "Typical Response",
      responseValue: "Within 24 to 48 hours",
      primaryCta: "Email Me Directly",
      secondaryCta: "See My GitHub",
      details: [
        { label: "Based In", value: "Venezuela" },
        { label: "Working Style", value: "Remote-Friendly" },
        { label: "Languages", value: "Spanish / English" },
      ],
      socialTitle: "Profiles",
      formTitle: "Send a Project Brief",
      formDescription:
        "Use the form for a concise brief, or reach out directly by email if you prefer a faster start.",
    },
    footer: {
      blurb:
        "Freelance digital product development with a focus on premium design, business clarity, and fast execution.",
      rights: "All rights reserved.",
    },
  },
  es: {
    localeLabel: "ES",
    switchToLabel: "EN",
    skipToContent: "Ir al contenido principal",
    nav: [
      { href: "/historia", label: "Historia" },
      { href: "#services", label: "Servicios" },
      { href: "#pricing", label: "Precios" },
      { href: "#work", label: "Proyectos" },
      { href: "#process", label: "Proceso" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Contacto" },
    ],
    hero: {
      eyebrow: "Constructor Digital",
      titleLead: "Sistemas digitales para equipos que necesitan",
      titleAccent: "claridad y velocidad.",
      description:
        "Web apps, dashboards y automatizaciones pensadas para lanzar más rápido y operar con menos fricción.",
      primaryCta: "Iniciar Proyecto",
      secondaryCta: "Ver Proyectos Seleccionados",
      status: "Disponible para proyectos freelance seleccionados",
      note: "",
      metrics: [
        {
          value: "3+",
          label: "Años Construyendo Productos Orientados a Ingresos",
        },
        { value: "B2B", label: "Dashboards, Herramientas Internas y Sistemas" },
      ],
      stack: ["Next.js", "React", "TypeScript", "n8n", "Power BI", "Analytics"],
      profileCardTitle: "Lo que obtienes",
      profileCardBody:
        "Un partner freelance involucrado en la ejecución, que combina producto, analítica e iteración rápida sin procesos inflados.",
      profileCardItems: [
        "Alcance claro y comunicación async",
        "Entrega rápida de MVPs con UI premium",
        "Automatización y analítica integradas en el producto",
      ],
    },
    services: {
      eyebrow: "Oferta",
      title: "Tres formas claras de lanzar, ordenar o escalar.",
      description:
        "La oferta está diseñada para ser corta y fácil de entender: producto, automatización y datos. Si el proyecto mezcla dos frentes, preparo un alcance híbrido sin volver el proceso pesado.",
      items: [
        {
          key: "mvp",
          title: "Web y Apps",
          description:
            "Builds enfocados para validar una idea, apoyar ventas o poner un flujo principal a funcionar rápido.",
          points: [
            "Flujo principal, arquitectura y pantallas clave",
            "UI premium lista para validar con usuarios reales",
          ],
        },
        {
          key: "automation",
          title: "Automatizaciones con IA y Herramientas Internas",
          description:
            "Sistemas operativos que recortan trabajo manual, ordenan handoffs y ayudan al equipo a avanzar con menos fricción.",
          points: [
            "Workflows con IA conectados al negocio",
            "n8n, automatización y operación interna más limpia",
          ],
        },
        {
          key: "analytics",
          title: "Dashboards y Sistemas de BI",
          description:
            "Capas de reporting pensadas para decidir más rápido, detectar cuellos de botella y entender el rendimiento con claridad.",
          points: [
            "KPIs, vistas operativas y reporting claro",
            "Power BI, pipelines analíticos y dashboards usables",
          ],
        },
      ],
    },
    pricing: {
      eyebrow: "Precios",
      title: "Tres paquetes base para avanzar sin fricción.",
      description:
        "Elige el nivel de profundidad, velocidad e intensidad de ejecución que necesitas ahora. Estos paquetes funcionan como base para producto, automatización o BI.",
      plans: [
        {
          key: "starter",
          name: "Sprint de Claridad",
          audience: "Para equipos que necesitan un primer entregable enfocado",
          price: "$350",
          cadence: "pago único",
          description:
            "Un sprint corto para definir mejor la dirección y entregar una primera pieza útil con más claridad de alcance, prioridades y próximos pasos técnicos.",
          badge: "Inicio más rápido",
          features: [
            "Descubrimiento enfocado y plan de entrega",
            "Un asset estratégico, blueprint o prototipo",
            "Recomendaciones técnicas y roadmap siguiente",
            "Entrega en 3 a 5 días",
          ],
          ctaLabel: "Reservar sprint",
          note: "Buen fit cuando todavía necesitas dirección y un primer output concreto antes de entrar a un build más grande.",
          paymentUrl: "https://buy.stripe.com/test_replace_landing_sprint",
        },
        {
          key: "growth",
          name: "Sprint de Implementación",
          audience: "Para equipos listos para lanzar un sistema principal",
          price: "$900",
          cadence: "por proyecto",
          description:
            "Un sprint orientado a producción para un flujo principal, dashboard o automatización con el nivel de estructura y pulido suficiente para usarlo de verdad.",
          badge: "Más elegido",
          featured: true,
          features: [
            "Un flujo principal, dashboard o automatización en producción",
            "UI premium o capa operativa clara",
            "Integración con herramientas y procesos existentes",
            "Entrega en 2 a 3 semanas",
          ],
          ctaLabel: "Iniciar build",
          note: "Es el paquete correcto cuando necesitas salir rápido con algo real sin sobrediseñar la primera versión.",
          paymentUrl: "https://buy.stripe.com/test_replace_mvp_build",
        },
        {
          key: "partner",
          name: "Sistema Integral",
          audience: "Para equipos que necesitan una solución más conectada",
          price: "$1,800",
          cadence: "por proyecto",
          description:
            "Un build más amplio para founders que necesitan varias piezas funcionando juntas entre producto, automatización y reporting.",
          badge: "Mayor alcance",
          features: [
            "Múltiples vistas, módulos o workflows conectados",
            "Frontend, datos y automatización en una misma solución",
            "QA, deploy y handoff incluidos",
            "Entrega en 4 a 6 semanas",
          ],
          ctaLabel: "Iniciar sistema",
          note: "Mejor fit cuando el proyecto necesita más de un entregable aislado y debe sentirse cohesivo desde el primer día.",
          paymentUrl: "https://buy.stripe.com/test_replace_fractional_partner",
        },
      ],
    },
    work: {
      eyebrow: "Proyectos Seleccionados",
      title: "Proyectos que muestran rango, velocidad y criterio de negocio.",
      description:
        "Una selección de lanzamientos, rediseños y productos digitales pensados para reducir fricción, elevar confianza y llevar ideas al mercado más rápido.",
      viewLabel: "Ver Proyecto Online",
      items: [
        {
          slug: "reservas-verona",
          category: "SaaS Residencial",
          summary:
            "Plataforma de reservas de amenities pensada para reducir fricción operativa en comunidades residenciales.",
          impact:
            "Construida alrededor de flujos más claros, reservas simples y uso cotidiano.",
          deliverables: [
            "Limpieza del flujo de reservas",
            "UX para residentes",
            "Más claridad operativa",
          ],
        },
        {
          slug: "pausa-app",
          category: "Producto Wellness",
          summary:
            "Web app de acompañamiento para salud mental y sobriedad con una experiencia guiada y serena.",
          impact:
            "Estructurada para que flujos sensibles se sientan claros, ligeros y humanos.",
          deliverables: [
            "Recorrido guiado",
            "Sistema visual sereno",
            "Flujo centrado en soporte",
          ],
        },
        {
          slug: "servicios-creativos",
          category: "Web para Marca de Servicios",
          summary:
            "Sitio para agencia creativa pensado para mejorar percepción, explicar la oferta más rápido y dar una imagen más actual.",
          impact:
            "Convirtió el sitio en una superficie de venta más fuerte, con mejor posicionamiento y ritmo visual.",
          deliverables: [
            "Posicionamiento de oferta",
            "Presencia web premium",
            "Jerarquía visual más fuerte",
          ],
        },
        {
          slug: "artist-the-way",
          category: "Commerce Creativo",
          summary:
            "Experiencia de comercio digital para arte que equilibra narrativa, descubrimiento de producto y una dirección visual más elevada.",
          impact:
            "Combinó claridad de catálogo con una presentación más intencional que una tienda estándar.",
          deliverables: [
            "Experiencia de catálogo",
            "Layout guiado por narrativa",
            "Flujo listo para convertir",
          ],
        },
        {
          slug: "kawsay-coffee",
          category: "E-Commerce Premium",
          summary:
            "Experiencia de comercio enfocada en marca para un negocio de café que necesitaba una presencia más premium.",
          impact:
            "Equilibra narrativa, producto y señales de confianza dentro de un mismo recorrido.",
          deliverables: [
            "Narrativa de marca",
            "Señales de confianza",
            "Shopping flow premium",
          ],
        },
        {
          slug: "vista-campo",
          category: "Rediseño de Marca y Web",
          summary:
            "Rediseño de sitio enfocado en credibilidad, claridad de mensaje y una presencia digital más elevada.",
          impact:
            "Reposiciona la experiencia para sentirse más moderna, segura y lista para convertir.",
          deliverables: [
            "Refresh de credibilidad",
            "Mensaje más claro",
            "Rediseño responsive moderno",
          ],
        },
      ],
    },
    process: {
      eyebrow: "Proceso",
      title: "Colaboración ligera con resultado premium.",
      description:
        "La meta es simple: reducir ambigüedad temprano, construir en ciclos cortos y lanzar algo refinado que funcione en el mundo real.",
      steps: [
        {
          title: "1. Alcance con Contexto de Negocio",
          description:
            "Definimos el problema, la audiencia, el resultado y la versión mínima que vale la pena lanzar.",
        },
        {
          title: "2. Construcción con Decisiones Rápidas",
          description:
            "Diseño, interfaz, automatización y lógica de producto avanzan juntos para que no exista desconexión entre visión y ejecución.",
        },
        {
          title: "3. Lanzar, Aprender y Mejorar",
          description:
            "Se publica con una base limpia y luego iteramos donde más importa el rendimiento, la claridad o la conversión.",
        },
      ],
      differentiatorsTitle: "Por qué me contratan",
      differentiators: [
        "Pienso en sistemas, no en pantallas aisladas.",
        "Puedo moverme entre frontend, analítica y automatización.",
        "Comunico con claridad y trabajo bien de forma async.",
        "Me importa tanto el resultado de negocio como la calidad del build.",
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Preguntas que probablemente tienes antes de escribir.",
      description:
        "Respuestas cortas para que evalúes rápido si hay buen encaje.",
      items: [
        {
          question: "¿Qué tipo de proyectos freelance encajan mejor?",
          answer:
            "Productos web, MVPs SaaS, sitios premium, dashboards y flujos con bastante automatización donde importan la velocidad y el criterio de negocio.",
        },
        {
          question: "¿Trabajas con clientes fuera de Venezuela?",
          answer:
            "Sí. La colaboración remota es parte natural del flujo, especialmente con equipos en LATAM y Estados Unidos.",
        },
        {
          question:
            "¿Puedes mejorar un producto existente en vez de empezar de cero?",
          answer:
            "Sí. Refactors, mejoras UX, rendimiento y reposicionamiento visual también forman parte de la propuesta.",
        },
        {
          question: "¿Sigues involucrado después del lanzamiento?",
          answer:
            "Sí, cuando tiene sentido. Puedo continuar con sprints de optimización, nuevas features o soporte fraccional de producto.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Si el proyecto importa, hagamos que el primer paso valga.",
      description:
        "Cuéntame la idea, el cuello de botella o en qué etapa está el producto. Te ayudo a aterrizar el siguiente paso práctico.",
      responseLabel: "Tiempo de Respuesta",
      responseValue: "Entre 24 y 48 horas",
      primaryCta: "Escribirme por Email",
      secondaryCta: "Ver Mi GitHub",
      details: [
        { label: "Base", value: "Venezuela" },
        { label: "Modalidad", value: "Remoto" },
        { label: "Idiomas", value: "Español / Inglés" },
      ],
      socialTitle: "Perfiles",
      formTitle: "Enviar Resumen del Proyecto",
      formDescription:
        "Usa el formulario para enviarme un brief corto, o escríbeme directo por email si prefieres avanzar más rápido.",
    },
    footer: {
      blurb:
        "Desarrollo freelance de productos digitales con foco en diseño premium, claridad de negocio y ejecución rápida.",
      rights: "Todos los derechos reservados.",
    },
  },
};
