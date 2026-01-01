import { projects } from "../data/projects";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="container">
      <h1>Projects</h1>

      {projects.map(p => (
        <div key={p.id} className="card">
          <h2>{p.title}</h2>
          <p className="meta">{p.area} · {p.tools.join(", ")}</p>
          <p>{p.summary}</p>
          <Link to={`/projects/${p.id}`}>View project →</Link>
        </div>
      ))}
    </div>
  );
}
