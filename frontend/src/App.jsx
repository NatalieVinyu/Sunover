import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
// Next pages: /cooker, /cart, /checkout, /story, /how-it-works, /contact
export default function App() {
  return (<><Navbar /><Routes><Route path="/" element={<Home />} /></Routes><Footer /></>);
}
