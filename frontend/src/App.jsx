import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import About from "./components/About";
import Projects from "./components/Projects";
import Events from "./components/Events";
import Team from "./components/Team";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Slider />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
