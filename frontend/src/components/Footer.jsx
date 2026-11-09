import Placeholder from "./Placeholder.jsx";
export default function Footer() {
  return (
    <footer id="contact"><div className="wrap">
      <div><strong className="logo" style={{ fontSize: "1.2rem" }}>SUNOVEN</strong><p>Cook with the sun.</p></div>
      <div><a href="/#cooker">The Solar Cooker</a><a href="/#how">How It Works</a><a href="/#story">Our Story</a></div>
      <div><Placeholder>email</Placeholder><a href="#contact">WhatsApp (placeholder)</a><a href="#contact">Social links (placeholder)</a></div>
      <small>© 2026 SUNOVEN. Highlighted placeholder content must be replaced before launch.</small>
    </div></footer>
  );
}
