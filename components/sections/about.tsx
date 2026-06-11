import { SectionLabel } from "../shared/section-label";

export function About() {
  return (
    <section id="about" className="border-t">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[1fr_1.5fr]">
        <div>
          <SectionLabel>About</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Building real products, not just tutorials.
          </h2>
        </div>

        <div className="space-y-5 text-muted-foreground">
          <p>
            I&apos;m a full-stack developer focused on building SaaS products,
            AI applications, and developer tools using Next.js, TypeScript,
            PostgreSQL, and Docker.
          </p>

          <p>
            My recent work includes an AI chatbot platform with RAG, an
            embeddable feedback widget SaaS, and a full-stack blog platform with
            authentication and database-backed content.
          </p>

          <p>
            I care about practical engineering: clean UI, reliable backend
            logic, database design, deployment, and building products that are
            actually usable.
          </p>
        </div>
      </div>
    </section>
  );
}
