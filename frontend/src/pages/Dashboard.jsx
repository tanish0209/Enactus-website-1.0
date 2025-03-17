import React from "react";
import Slider from "../components/Slider";
import About from "../components/About";
import Projects from "../components/Projects";
import Events from "../components/Events";
import Team from "../components/Team";


const Dashoard = () => {
  return (
    //Navbar
    <div>
      <div id="home">
        <Slider />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="events">
        <Events />
      </div>
      <div id="team">
        <Team />
      </div>
    </div>
  );
};

export default Dashoard;
