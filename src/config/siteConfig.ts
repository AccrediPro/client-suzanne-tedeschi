// src/config/siteConfig.ts
// Centralized configuration for all coach-specific data.
// Personalized for Suzanne — Certified Functional Medicine Coach.

export const siteConfig = {
  // ─── Coach Identity ───────────────────────────────────────────────────────
  coach: {
    name: "Suzanne",
    firstName: "Suzanne",
    title: "Certified Functional Medicine Coach",
    email: "swellnesscoaching123@gmail.com",
    phone: "",
    location: "USA",
  },

  // ─── Site Metadata ────────────────────────────────────────────────────────
  site: {
    name: "Swellness Coaching — Certified Functional Medicine Coach",
    description:
      "Suzanne is a Certified Functional Medicine Coach specializing in mold toxicity, Endometriosis, chronic illness, and emotional healing. Book a free discovery call today.",
    ogImage: "/images/og-default.jpg",
  },

  // ─── Brand Colors ─────────────────────────────────────────────────────────
  brand: {
    primary: "#0D9488",
    accent: "#6EE7B7",
    mint: "#A7F3D0",
    cream: "#F0FDFA",
  },

  // ─── Images ───────────────────────────────────────────────────────────────
  images: {
    portrait: "/images/coach-portrait-suzanne.jpg",
    hero: "/images/generated/hero-variant-1.jpg",
    ogDefault: "/images/og-default.jpg",
    logo: "/images/swellness-logo.png",
  },

  // ─── Social Media ─────────────────────────────────────────────────────────
  social: [
    {
      name: "Facebook",
      url: "https://facebook.com/profile.php?id=100063796458687",
      iconPath: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
      iconSvg: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/swellness_coaching/",
      iconPath: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
      iconSvg: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`,
    },
  ],

  // ─── Stats & Credentials ──────────────────────────────────────────────────
  stats: {
    yearsExperience: "",
    certifications: 8,
    processSteps: 0,
  },

  statsBar: [] as Array<{ number: string; label: string; icon: string }>,

  credentialBadges: [
    { abbr: "FMC", full: "Functional Medicine Coach" },
    { abbr: "TM", full: "Toxic Mold Specialist" },
    { abbr: "NLP", full: "Life/NLP Coach" },
    { abbr: "HN", full: "Holistic Nutrition" },
    { abbr: "L2AN", full: "Level 2 Applied Nutrition" },
    { abbr: "BW", full: "Breathwork" },
    { abbr: "MED", full: "Meditation" },
    { abbr: "ENDO", full: "Endometriosis Specialist" },
  ],

  // ─── Certifications (used in AboutPreview & about.astro) ─────────────────
  certifications: [
    {
      title: "Functional Medicine Coach",
      label: "Functional Medicine",
      description: "Certified Functional Medicine Coach specializing in root-cause healing and personalized wellness protocols",
      variant: "default" as const,
    },
    {
      title: "Toxic Mold Specialist",
      label: "Toxic Mold",
      description: "Specialized training in mold toxicity assessment, detoxification protocols, and mold illness recovery",
      variant: "outline" as const,
    },
    {
      title: "Life/NLP Coach",
      label: "Life/NLP Coach",
      description: "Certified Life and NLP Coach supporting clients through mindset shifts and behavioral change",
      variant: "outline" as const,
    },
    {
      title: "Holistic Nutrition",
      label: "Holistic Nutrition",
      description: "Holistic Nutrition certification focused on whole-body nourishment and food-as-medicine principles",
      variant: "outline" as const,
    },
    {
      title: "Level 2 Applied Nutrition",
      label: "Level 2 Applied Nutrition",
      description: "Advanced applied nutrition training for targeted dietary interventions and clinical nutrition support",
      variant: "outline" as const,
    },
    {
      title: "Breathwork Practitioner",
      label: "Breathwork",
      description: "Certified Breathwork practitioner guiding clients through therapeutic breathing techniques for stress relief and healing",
      variant: "outline" as const,
    },
    {
      title: "Meditation Guide",
      label: "Meditation",
      description: "Meditation certification supporting clients with mindfulness practices for mental clarity and emotional balance",
      variant: "outline" as const,
    },
    {
      title: "Endometriosis Specialist",
      label: "Endometriosis",
      description: "Specialized training in Endometriosis support, hormonal balance, and holistic management of chronic pelvic conditions",
      variant: "outline" as const,
    },
  ],

  // ─── Bio / Story ──────────────────────────────────────────────────────────
  bio: {
    pullquote:
      "Empowering you to take control of your health, one step at a time.",
    storyPreview: "",
    storyParagraphs: [] as string[],
    differentiator: "",
    holisticAspects: [] as string[],
    holisticQuote: "",
  },

  // ─── Services ─────────────────────────────────────────────────────────────
  servicesPreview: [
    {
      title: "Free Discovery Call",
      description:
        "A complimentary 15-minute call to discuss your health concerns, goals, and whether working together is the right fit. No pressure, no commitment.",
      icon: `<svg class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" /></svg>`,
      price: "FREE",
      priceNote: "15 minutes — no commitment",
      popular: false,
      href: "/contact",
    },
    {
      title: "Initial Consultation — 60 Minutes",
      description:
        "A comprehensive 60-minute consultation including a personalized healing guide, nutrition plan, and lifestyle modifications tailored to your unique health situation.",
      icon: `<svg class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>`,
      price: "$250",
      priceNote: "60-minute session",
      popular: true,
      href: "/contact",
    },
    {
      title: "Initial Consultation — 30–40 Minutes",
      description:
        "A focused 30–40 minute consultation including a personalized healing guide, nutrition plan, and lifestyle modifications.",
      icon: `<svg class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>`,
      price: "$150",
      priceNote: "30–40 minute session",
      popular: false,
      href: "/contact",
    },
  ],

  servicesDetail: [
    {
      id: "discovery-call",
      title: "Free Discovery Call",
      subtitle: "Your First Step to Better Health",
      price: "FREE",
      duration: "15 minutes",
      description:
        "Not sure if coaching is right for you? Start with a free 15-minute discovery call. We'll talk about your health concerns and whether working together is the right fit.",
      features: [
        "Discuss your top health concerns",
        "Learn about Suzanne's approach",
        "No pressure, no obligation",
      ],
      idealFor:
        "Anyone who wants to explore whether personalized functional medicine coaching is the right next step.",
      icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg>`,
    },
    {
      id: "consultation-60",
      title: "Initial Consultation — 60 Minutes",
      subtitle: "Comprehensive Health Assessment",
      price: "$250",
      duration: "60 minutes",
      description:
        "A comprehensive initial consultation where Suzanne reviews your health history, concerns, and goals. You'll receive a personalized healing guide, nutrition plan, and lifestyle modifications tailored to your unique situation.",
      features: [
        "Full health history review",
        "Personalized healing guide",
        "Custom nutrition plan",
        "Lifestyle modification recommendations",
      ],
      idealFor:
        "Anyone dealing with mold toxicity, Endometriosis, chronic illness, or emotional healing who wants a thorough assessment and personalized plan.",
      icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>`,
    },
    {
      id: "consultation-30",
      title: "Initial Consultation — 30–40 Minutes",
      subtitle: "Focused Health Assessment",
      price: "$150",
      duration: "30–40 minutes",
      description:
        "A focused consultation covering your primary health concerns. Includes a personalized healing guide, nutrition plan, and lifestyle modifications.",
      features: [
        "Focused health concern review",
        "Personalized healing guide",
        "Custom nutrition plan",
        "Lifestyle modification recommendations",
      ],
      idealFor:
        "Anyone who wants personalized guidance on a specific health concern with a clear action plan.",
      icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>`,
    },
  ],

  // ─── Testimonials ─────────────────────────────────────────────────────────
  testimonials: [] as Array<{ name: string; role: string; outcome: string; content: string }>,

  // ─── Who I Work With ──────────────────────────────────────────────────────
  whoIWorkWithTraits: [
    "You're dealing with mold toxicity or mold illness and need expert guidance",
    "You're a woman struggling with Endometriosis and looking for holistic support",
    "You're living with a chronic illness and want a personalized path to healing",
    "You're seeking emotional healing and want compassionate, professional support",
  ],

  // ─── Process Steps ────────────────────────────────────────────────────────
  processSteps: [] as Array<{ number: string; title: string; description: string; icon: string }>,

  // Approach items used on about.astro
  approachItems: [] as Array<{ icon: string; title: string; description: string }>,

  // ─── FAQ ──────────────────────────────────────────────────────────────────
  faq: [] as Array<{ question: string; answer: string }>,

  // ─── SchemaOrg defaults ───────────────────────────────────────────────────
  schema: {
    name: "Swellness Coaching — Certified Functional Medicine Coach",
    description:
      "Certified Functional Medicine Coach specializing in mold toxicity, Endometriosis, chronic illness, and emotional healing. Book a free discovery call today.",
    jobTitle: "Certified Functional Medicine Coach",
    priceRange: "$$",
    fallbackUrl: "",
    knowsAbout: [
      "Functional Medicine",
      "Mold Toxicity",
      "Mold Illness",
      "Endometriosis",
      "Chronic Illness",
      "Emotional Healing",
      "Holistic Nutrition",
      "Breathwork",
      "Meditation",
      "NLP Coaching",
    ],
  },
} as const;
