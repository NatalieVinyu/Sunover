import { foods } from "../data/product.js";
import Placeholder from "./Placeholder.jsx";
export default function WhatCanYouCook() {
  return (
    <section style={{ paddingTop: 0 }}><div className="wrap">
      <h2>What can you cook?</h2>
      <div className="foods">{foods.map(f => <span key={f}>{f}</span>)}</div>
      <p style={{ fontSize: ".9rem" }}>Dishes subject to actual product testing. <Placeholder>add food photography</Placeholder></p>
    </div></section>
  );
}
