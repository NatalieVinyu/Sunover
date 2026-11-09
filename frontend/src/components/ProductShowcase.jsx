import { product } from "../data/product.js";
import { useCart } from "../context/CartContext.jsx";
import Button from "./Button.jsx";
import Placeholder from "./Placeholder.jsx";
export default function ProductShowcase() {
  const { dispatch } = useCart();
  return (
    <section className="product" id="cooker"><div className="wrap">
      <h2>The SUNOVEN solar cooker</h2>
      <div className="pgrid">
        {/* TODO: replace with <img> product photography */}
        <div className="pimg" role="img" aria-label="Product image placeholder">
          <svg viewBox="0 0 400 400"><circle cx="300" cy="90" r="46" fill="#D99A36" /><path d="M60 330 110 220h180l50 110z" fill="#F3EBDD" /><path d="M110 220h180l-18 30H128z" fill="#D99A36" /><rect x="128" y="250" width="144" height="80" rx="8" fill="#303B32" stroke="#F3EBDD" strokeWidth="4" /></svg>
          <span className="ph">Placeholder – add product photography</span>
        </div>
        <div>
          <p>{product.description}</p>
          <div className="price">{product.currency} {product.price > 0 ? product.price.toLocaleString("en-ZA") : <Placeholder>price</Placeholder>}</div>
          <dl>{product.specs.map(s => (
            <div key={s.label} style={{ display: "contents" }}>
              <dt>{s.label}</dt><dd>{s.value ?? <Placeholder>to be confirmed</Placeholder>}</dd>
            </div>))}
          </dl>
          <Button href="/cooker">View Product</Button>{" "}
          <Button ghost onClick={() => dispatch({ type: "add", item: product })}>Add to Cart</Button>
        </div>
      </div>
      <p style={{ marginTop: 28, fontSize: ".9rem" }}>Only confirmed specifications are shown. No performance claims are made until verified by testing.</p>
    </div></section>
  );
}
