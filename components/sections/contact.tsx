import { Button } from "@/components/ui/button";
import { SectionLabel } from "../shared/section-label";

export function Contact() {
  return (
    <section id="contact" className="border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Let&apos;s build something useful.
          </h2>

          <p className="mt-5 text-muted-foreground">
            I&apos;m open to internship, junior full-stack, and remote software
            engineering opportunities.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild>
            <a href="mailto:rangganafiem@gmail.com">Email Me</a>
          </Button>

          <Button variant="outline" asChild>
            <a
              href="https://github.com/ranzxx"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </Button>

          <Button variant="outline" asChild>
            <a
              href="https://linkedin.com/in/ranzxx"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </Button>

          <Button variant="ghost" asChild>
            <a href="/Rangga_Nafie_Muhammad_Resume.pdf" download>
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
