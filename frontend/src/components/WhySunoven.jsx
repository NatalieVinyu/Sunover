import { benefits } from "../data/product.js";
export default function WhySunoven() {
  return (
    <section className="why"><div className="wrap">
      <h2>Why SUNOVEN?</h2>
      <div className="whygrid">{benefits.map(b => <div key={b.title}><h3>{b.title}</h3><p>{b.text}</p></div>)}</div>
    </div></section>
  );
}
