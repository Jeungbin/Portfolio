import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Logo from "./pages/Logo";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Logo />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
