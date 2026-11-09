import Logo from "./Logo.jsx";
import Button from "./Button.jsx";
import { useCart } from "../context/CartContext.jsx";
const links = [["Home","/"],["Our Story","/#story"],["The Solar Cooker","/#cooker"],["How It Works","/#how"],["Contact","/#contact"]];
export default function Navbar() {
  const { count } = useCart();
  return (
    <header><div className="wrap"><nav aria-label="Main">
      <Logo />
      <div className="links">{links.map(([t, h]) => <a key={t} href={h}>{t}</a>)}</div>
      <button className="cart" aria-label={`Shopping cart, ${count} items`}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4h3l2.5 11h9.5l2-8H7" /><circle cx="10" cy="20" r="1.5" /><circle cx="17" cy="20" r="1.5" /></svg>
        <b>{count}</b>
      </button>
      <Button href="/#cooker">Shop SUNOVEN</Button>
    </nav></div></header>
  );
}
