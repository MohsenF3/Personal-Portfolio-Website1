import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Themes from "./components/themes";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Portfolio from "./pages/portfolio/portfolio";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <>
      <Navbar />
      <Themes />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
