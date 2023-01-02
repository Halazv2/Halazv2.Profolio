import React, {useEffect} from "react";
import Card from "./Card";
import useGetProjects from "../../hooks/useGetProjects";

export default function ProjectSection() {
  const {projects}: any = useGetProjects();
  useEffect(() => {
    console.log(projects);
  }, [projects]);

  return (
    <section className='text-white border-2 border-white border-dashed pt-6 w-full h-fit p-4 '>
      <div className='flex flex-col mb-4 justify-center items-center '>
        <h1 className='text-5xl font-bold text-red-700'>Projects</h1>
      </div>
      <div
        className='
      flex  justify-center items-center
      '
      >
        {projects && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full h-full '>
            {projects.map((project: any) => {
              if (project.language !== null && project.language !== "HTML" && project.watchers_count > 0 && project.language !== "C") {
                return <Card key={project.id} project={project} />;
              }
            })}
          </div>
        )}
      </div>
    </section>
  );
}
