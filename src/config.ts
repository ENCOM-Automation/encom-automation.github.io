// ============================================
// SITE CONFIGURATION
// ============================================

export const siteConfig = {
  // ============================================
  // SITE METADATA & SEO
  // ============================================
  site: {
    name: 'ENCOM Automation',
    title: 'ENCOM Automation | Expertos en Automatización con IA y n8n',
    description:
      'Ahorra +500h al mes con agentes de IA autónomos y flujos de trabajo inteligentes. En ENCOM Automation eliminamos el error humano y escalamos tu operativa 24/7. Solicita tu auditoría.',
    keywords:
      'n8n expert, consultoría automatización, automatización de procesos IA, agentes autónomos para empresas, Make automation, ahorro de costes operativos, optimización flujos de trabajo, integración sistemas empresariales, automatización tareas repetitivas, soluciones IA personalizadas, eficiencia operativa con IA',
    email: 'lautaro.rojas02@gmail.com',

    // Open Graph / Twitter
    ogTitle: 'ENCOM Automation - Automatización Inteligente 24/7',
    ogDescription:
      'Elimina las tareas manuales y escala tu empresa con ecosistemas de IA. Mira cómo ahorramos +500h al mes a nuestros clientes.',
    twitterCard: 'summary_large_image',
    twitterTitle: 'ENCOM Automation | Expertos en IA y n8n',
    twitterDescription: 'Agentes de IA y automatización de flujos críticos para empresas modernas.',
  },

  // ============================================
  // NAVIGATION
  // ============================================
  navigation: {
    links: [
      { name: 'Tecnologías', href: '#techstack' },
      { name: 'Servicios', href: '#services' },
      { name: 'Método', href: '#method' },
      { name: 'FAQ', href: '#faq' },
    ],
    cta: {
      text: 'Contacto',
      href: '#contact',
    },
    languages: [
      { code: 'en', label: 'EN' },
      { code: 'es', label: 'ES' },
    ],
  },

  // ============================================
  // HERO SECTION
  // ============================================
  hero: {
    headline: 'Sistemas que escalan tu empresa en piloto automático',
    description:
      'Diseñamos e implementamos ecosistemas de IA que eliminan las tareas repetitivas. Recupera el tiempo de tu equipo y maximiza tu rentabilidad.',
    cta: {
      primary: {
        text: 'Agendar Auditoría IA',
        href: '#contact',
      },
      secondary: {
        text: 'Ver Servicios',
        href: '#services',
      },
    },
    stats: [
      { value: '+500h', label: 'Horas manuales ahorradas al mes' },
      { value: '0%', label: 'Margen de error en entrada de datos' },
      { value: '24/7', label: 'Operatividad de tus flujos de trabajo' },
    ],
  },

  // ============================================
  // SERVICES SECTION
  // ============================================
  services: {
    title: 'Nuestros servicios',
    subtitle:
      'Creando agentes de IA autónomos para negocios modernos',
    items: [
      { icon: 'lightning', title: 'Autonomous Execution' },
      { icon: 'code', title: 'Smart Integration' },
      { icon: 'chart', title: 'Real-Time Analytics' },
      { icon: 'chat', title: 'Natural Language' },
      { icon: 'shield', title: 'Enterprise Security' },
      { icon: 'clock', title: '24/7 Operation' },
      { icon: 'brush', title: 'Custom Workflows' },
      { icon: 'layers', title: 'Multi-Agent Teams' },
      { icon: 'zap', title: 'Instant Scaling' },
    ],
  },

  // ============================================
  // METHOD SECTION
  // ============================================
  method: {
    title: 'Método ENCOM',
    subtitle: 'Como trabajamos contigo para impulsar tu negocio',
  },

  // ============================================
  // HOW IT WORKS - SIN USO
  // ============================================
  howItWorks: {
    title: 'How It Works',
    subtitle: 'Get started in minutes with our simple 5-step process',
  },

  // ============================================
  // TECH STACK
  // ============================================
  techstack: {
    title: 'Tech Stack',
    subtitle: 'Las poderosas tecnologías que hacen posibles nuestros agentes de IA',
  },

  // ============================================
  // TESTIMONIALS - SIN USO
  // ============================================
  testimonials: {
    title: 'Loved by Teams Worldwide',
    subtitle: 'See what our customers have to say about AI Agent Platform',
    companyLogos: [
      'TECHFLOW',
      'INNOVATE',
      'DATASTREAM',
      'CLOUDSYNC',
      'NEXUSAI',
    ],
  },

  // ============================================
  // PRICING - SIN USO
  // ============================================
  pricing: {
    title: 'Simple, Transparent Pricing',
    subtitle:
      'Choose the plan that fits your needs. Upgrade or downgrade anytime.',
    plans: [
      {
        name: 'Free',
        price: '$0',
        period: '/month',
        description: 'Perfect for individuals and testing',
        features: [
          'Up to 3 agents',
          '1,000 tasks/month',
          'Basic integrations',
          'Email support',
        ],
        cta: {
          text: 'Get Started',
          href: '#contact',
        },
        featured: false,
      },
      {
        name: 'Pro',
        price: '$49',
        period: '/month',
        description: 'For growing teams and businesses',
        badge: 'MOST POPULAR',
        features: [
          'Unlimited agents',
          '50,000 tasks/month',
          'All integrations',
          'Priority support',
          'Advanced analytics',
          'Team collaboration',
        ],
        cta: {
          text: 'Start Free Trial',
          href: '#contact',
        },
        featured: true,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'For large-scale operations',
        features: [
          'Unlimited everything',
          'Custom integrations',
          'Dedicated support',
          'SLA guarantee',
          'On-premise option',
          'Custom training',
        ],
        cta: {
          text: 'Contact Sales',
          href: '#contact',
        },
        featured: false,
      },
    ],
  },

  // ============================================
  // FAQ
  // ============================================
  faq: {
    title: 'Preguntas Frecuentes',
    subtitle: 'Todo lo que necesitas saber sobre nuestros agentes de IA',
  },

  // ============================================
  // CONTACT
  // ============================================
  contact: {
    title: 'Start Building Today',
    subtitle:
      'Join thousands of teams using AI agents to automate their workflows. Get started in minutes with our free tier.',
    benefits: [
      'No credit card required',
      'Setup in under 5 minutes',
      'Cancel anytime',
      '24/7 customer support',
    ],
    email: 'lautaro.rojas02@gmail.com',
    form: {
      cta: 'Get Started Free',
      fields: {
        name: {
          label: 'Full Name',
          placeholder: 'John Doe',
          required: true,
        },
        email: {
          label: 'Work Email',
          placeholder: 'john@company.com',
          required: true,
        },
        company: {
          label: 'Company',
          placeholder: 'Your Company Inc.',
          required: false,
        },
        message: {
          label: 'What would you like to automate?',
          placeholder: 'Tell us about your workflow and automation needs...',
          required: false,
        },
      },
    },
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    tagline:
      'Creando agentes de IA autónomos para negocios modernos. Transforma tu flujo de trabajo con IA.',
    columns: [
      {
        title: 'Producto',
        links: [
          { name: 'Tecnologías', href: '#techstack' },
          { name: 'Servicios', href: '#services' },
          
        ],
      },
      {
        title: 'Compañía',
        links: [
          { name: 'Sobre Nosotros', href: '#' },
          { name: 'Método', href: '#method' },
          { name: 'Contacto', href: '#contact' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { name: 'Política de Privacidad', href: '#' },
          { name: 'Términos de Servicio', href: '#' },
          { name: 'Política de Cookies', href: '#' },
          { name: 'Seguridad', href: '#' },
          { name: 'Cumplimiento', href: '#' },
        ],
      },
    ],
    social: [
      { name: 'LinkedIn', href: 'https://www.linkedin.com/company/encom-automation', icon: 'linkedin' },
    ],
    copyright: `${new Date().getFullYear()} ENCOM Automation. Todos los derechos reservados.`,
    dedication: 'Hecho en Argentina.',
  },
};
