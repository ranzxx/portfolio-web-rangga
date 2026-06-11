export const projects = [
  {
    title: "Nexus",
    description:
      "AI chatbot platform with RAG, pgvector semantic search, Cohere embeddings, Groq LLMs, Stripe subscriptions, Docker, and CI/CD.",
    liveUrl: "https://chatwithnexus.vercel.app",
    githubUrl: "https://github.com/ranzxx/nexus",
    tech: ["Next.js", "TypeScript", "pgvector", "Cohere", "Groq", "Stripe"],
  },
  {
    title: "Formigo",
    description:
      "SaaS feedback platform with an embeddable widget, Stripe subscriptions, real-time notifications via Pusher, and multi-project management.",
    liveUrl: "https://formigo-app.vercel.app",
    githubUrl: "https://github.com/ranzxx/formigo",
    tech: ["Next.js", "TypeScript", "Stripe", "Pusher", "Drizzle"],
  },
  {
    title: "Writerly",
    description:
      "Full-stack blog platform with authentication, comments, CRUD functionality, and PostgreSQL-backed content management.",
    liveUrl: "https://writerly-app.vercel.app",
    githubUrl: "https://github.com/ranzxx/writerly",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Better Auth", "Drizzle"],
  },
];


export const skills = [
  {
    title: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "PostgreSQL", "Drizzle ORM", "pgvector", "Better Auth"],
  },
  {
    title: "AI & SaaS",
    skills: ["RAG", "Cohere Embeddings", "Groq", "Stripe", "UploadThing"],
  },
  {
    title: "Tools",
    skills: ["Docker", "GitHub Actions", "Vercel", "Playwright", "Vitest"],
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];