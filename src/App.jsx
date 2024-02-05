import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, About, Contact, Projects } from "./pages";
import { Analytics } from "@vercel/analytics/react";

import ReactGA from "react-ga4";

function App() {
  ReactGA.initialize("G-Q6D7HLC77F");

  return (
    <main className="bg-slate-300/20 h-full ">
      <Router>
        <Navbar />
        <Analytics />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
