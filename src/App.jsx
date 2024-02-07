import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, About, Contact, Projects } from "./pages";
import { Analytics } from "@vercel/analytics/react";

import ReactGA from "react-ga4";
import Threejsproject from "./components/Threejsproject";
import Webappproject from "./components/Webappproject";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  ReactGA.initialize("G-Q6D7HLC77F");

  return (
    <HelmetProvider>
      <main>
        <Router>
          <Navbar />
          <Analytics />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/3dwebsite" element={<Threejsproject />} />
            <Route path="/appleservicecenter" element={<Webappproject />} />
          </Routes>
        </Router>
      </main>
    </HelmetProvider>
  );
}

export default App;
