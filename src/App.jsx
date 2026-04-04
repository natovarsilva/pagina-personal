import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import PlaceDetail from "./pages/PlaceDetail/PlaceDetail";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/place/:slug" element={<PlaceDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
      </Router>
  );
}

export default App;