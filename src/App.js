import React from "react";
import Hero from './components/Hero';
import Section from "./components/Section";
import TempleOSShowcase from "./components/TempleOSShowcase";
import Timeline from "./components/Timeline";

function App() {
  return (
    <section className="overflow-x-hidden">
      <Hero />
      <Section />
      <TempleOSShowcase />
      <Timeline />
    </section>
  );
}

export default App;
