import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";
import { SectionLabel } from "../shared/section-label";

export function Skills() {
  return (
    <section id="skills" className="border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <SectionLabel>Skills</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Technologies I use to build full-stack products.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-2xl border bg-background p-6"
            >
              <h3 className="font-semibold">{skill.title}</h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {skill.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
