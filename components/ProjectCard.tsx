import { Project } from "@/types";


interface Props {
    project: Project;
}

export default function ProjectCard({project}:Props) {
    return (
        <div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
                {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                ))}
            </ul>
        </div>
    );
}