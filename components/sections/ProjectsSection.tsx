import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/lib/data/portfolio";

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

      <div className="container mx-auto max-w-7xl">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project: any, index: number) => (
            <div
              key={project.slug?.current}
              className="group flex flex-col h-full"
            >
              {/* Project Image or Fallback */}
              <Link 
                href={project.liveUrl || '#'} 
                target={project.liveUrl ? "_blank" : undefined}
                rel={project.liveUrl ? "noopener noreferrer" : undefined}
                className="w-full overflow-hidden rounded-xl relative block shadow-2xl shadow-primary/5 hover:shadow-primary/10 transition-shadow duration-700"
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1000}
                    height={1500}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className={`w-full aspect-video bg-gradient-to-br transition-transform duration-500 group-hover:scale-[1.02] ${
                    index % 3 === 0 ? 'from-blue-600/20 to-purple-600/20' :
                    index % 3 === 1 ? 'from-emerald-500/20 to-blue-500/20' :
                    'from-orange-500/20 to-red-500/20'
                  } flex items-center justify-center relative`}>
                    <div className="absolute inset-0 bg-grid-white/5 bg-[length:20px_20px]" />
                    <span className="text-6xl opacity-20 font-bold select-none">{project.title.charAt(0)}</span>
                  </div>
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
