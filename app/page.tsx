"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import Welcome from "./(portfolio)/Welcome";
import Projects from "./(portfolio)/Projects";
import Timeline from "./(portfolio)/Timeline";
import Volunteering from "./(portfolio)/Volunteering";
import Education from "./(portfolio)/Education";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 450 });
  });

  return (
    <div>
      <Welcome />
      <Timeline />
      <Education />
      <Volunteering />
      <Projects />
    </div>
  );
};

export default Portfolio;
