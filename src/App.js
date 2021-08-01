import React from "react";
import Hero from './components/Hero';
import Section from "./components/Section";
import TempleOSShowcase from "./components/TempleOSShowcase";
import Timeline from "./components/Timeline";
import AboutTerry from "./components/AboutTerry";

function App() {
  return (
    <section className="overflow-x-hidden">
      <Hero />
      <Section />
      <AboutTerry />
      <TempleOSShowcase />
      <Timeline />
    </section>
  );
}

export default App;
