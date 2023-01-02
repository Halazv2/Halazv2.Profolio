import React from "react";
import Hero from "../components/Hero";
import ProjectSection from "../components/projects/ProjectSection";

export default function Home() {
  return (
    <div className='mt-20'>
      <Hero />
      <ProjectSection />
    </div>
  );
}
