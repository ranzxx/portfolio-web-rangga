import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionLabel } from "../shared/section-label";

export function Projects() {
  return (
    <section id="projects" className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <SectionLabel>Projects</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Featured products I&apos;ve built.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col justify-between gap-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  </Button>

                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
