import { steps } from "../data/product.js";
export default function HowItWorks() {
  return (
    <section id="how"><div className="wrap">
      <h2>Solar cooking in three steps</h2>
      <div className="steps">{steps.map((s, i) => (
        <div className="step" key={s.title}><div className="n">{i + 1}</div><h3>{s.title}</h3><p>{s.text}</p></div>
      ))}</div>
    </div></section>
  );
}
