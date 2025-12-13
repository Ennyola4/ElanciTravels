import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "../src/pages/Contact";
import Destination from "../src/pages/Destination";
import Footer from "./components/Footer";
import Bespoke from "./pages/Bespoke";
import Services from "./pages/Services";
import TheBrand from "./pages/TheBrand";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/bespoke" element={<Bespoke/>}/>
        <Route path="/thebrand" element={< TheBrand/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
