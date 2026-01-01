import { insights } from "../data/insights";

export default function Insights() {
  return (
    <div className="container">
      <h1>Insights & Notes</h1>

      {insights.map(i => (
        <section key={i.title}>
          <h2>{i.title}</h2>
          <p className="meta">{i.date}</p>
          <p>{i.text}</p>
        </section>
      ))}
    </div>
  );
}
