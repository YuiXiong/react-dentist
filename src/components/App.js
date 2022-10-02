import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Procedures from "./Procedures"
import Contact from "./Contact"

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Go to Home Page</Link>
        <Link to="/procedures">See Our Procedures</Link>
        <Link to="/contact">Contact Us!</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/procedures" element={<Procedures />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
