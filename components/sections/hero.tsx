import { Button } from "@/components/ui/button";
import { SectionLabel } from "../shared/section-label";

export function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-center px-6 py-24">
      <div className="max-w-3xl">
        <SectionLabel>Full-Stack Engineer</SectionLabel>

        <h1 className="text-5xl font-bold tracking-tight text-balance md:text-7xl">
          Hi, I&apos;m Rangga.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          I build production-grade SaaS and AI applications with Next.js,
          TypeScript, PostgreSQL, and Docker.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild>
            <a href="#projects">View Projects</a>
          </Button>

          <Button variant="outline" asChild>
            <a href="/Rangga_Nafie_Muhammad_Resume.pdf" download>
              Download Resume
            </a>
          </Button>

          <Button variant="ghost" asChild>
            <a
              href="https://github.com/ranzxx"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
