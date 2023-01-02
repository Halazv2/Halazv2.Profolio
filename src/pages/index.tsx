import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import ProjectSection from "../components/projects/ProjectSection";

export default function Home() {
  return (
    <div className='mt-20 gap-6 flex flex-col '>
      <Hero />
      {/* <About /> */}
      <small className='flex flex-col justify-center items-center mt-4 mb-4'>
        <code className='text-center '>Below are details of some of projects I have worked on. Feel free to check them out.</code>
      </small>
      <ProjectSection />
    </div>
  );
}
