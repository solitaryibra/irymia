import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return <p>Project not found.</p>;

  return (
    <div className="container">
      <h1>{project.title}</h1>
      <p className="meta">{project.area}</p>

      <section>
        <h2>Overview</h2>
        <p>{project.summary}</p>
      </section>

      <section>
        <h2>Methods & Analysis</h2>
        <p>{project.content}</p>
      </section>

      <section>
        <h2>Tools</h2>
        <ul>
          {project.tools.map(t => <li key={t}>{t}</li>)}
        </ul>
      </section>
    </div>
  );
}
