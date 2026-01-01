import { people } from "../data/people";

export default function People() {
  return (
    <div className="container">
      <h1>People</h1>

      {people.map(p => (
        <div key={p.name} className="card">
          <h2>{p.name}</h2>
          <p className="meta">{p.role}</p>
          <p>{p.interests}</p>
        </div>
      ))}
    </div>
  );
}
