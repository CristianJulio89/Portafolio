import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold mb-8">Proyectos</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((p)=> (
                    <ProjectCard key={p.title} project={p} />
                ))}
            </div>
        </section>
    );
}