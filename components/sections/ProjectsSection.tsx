import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/lib/data/portfolio";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const projects = portfolioData.projects.filter((project) => project.featured);

  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[30rem] h-[30rem] bg-primary/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-[20%] left-[10%] w-[20rem] h-[20rem] bg-purple-500/20 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Built for <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A selection of high-leverage products and commercial solutions designed to solve real problems and generate value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: any, index: number) => (
            <div
              key={project.slug?.current}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Project Image or Fallback */}
              <div className="h-48 w-full overflow-hidden relative">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className={`h-full w-full bg-gradient-to-br transition-transform duration-700 group-hover:scale-105 ${
                    index % 3 === 0 ? 'from-blue-600/20 to-purple-600/20' :
                    index % 3 === 1 ? 'from-emerald-500/20 to-blue-500/20' :
                    'from-orange-500/20 to-red-500/20'
                  } flex items-center justify-center relative`}>
                    <div className="absolute inset-0 bg-grid-white/5 bg-[length:20px_20px]" />
                    <span className="text-6xl opacity-20 font-bold select-none">{project.title.charAt(0)}</span>
                  </div>
                )}
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold tracking-wider uppercase text-primary/80 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                      {project.category || "Product"}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                    {project.tagline || project.description}
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-border/50">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies && project.technologies.slice(0, 3).map((tech: string, idx: number) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies && project.technologies.length > 3 && (
                      <span className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 group-hover:shadow-primary/40"
                      >
                        <ExternalLink size={18} />
                        View Live
                      </Link>
                    )}
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                        title="View Code"
                      >
                        <Github size={20} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
