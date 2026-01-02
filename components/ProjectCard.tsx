import { Project } from "@/types";


interface Props {
    project: Project;
}

export default function ProjectCard({project}:Props) {
    return (
        <div className="border rounded-md p-4 hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.tech.map((t)=> (
                    <span key={t} className="text-xs px-2 py-1 bg-gray-100 rounded">
                        {t}
                    </span>
                ))}
            </div>
            
        </div>
    );
}