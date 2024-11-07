import React from "react";
import ProjectCards from "../sub/projectCards";
import Link from "next/link";
import path from "path";

const Projects = () => {
  const projectsData = [
    {
      src: "/projects/CV.png",
      title: "Resume Builder",
      description: "This is a Professional Resume Builder where user can generate their own resume",
      path:"https://dynamic-resume-generator-chi.vercel.app/"

    },
    {
      src: "/projects/ecommerce.jpg",
      title: "E-Commerce Shop",
      description: "This is a E-commerce shop",
      path:"https://e-commerce-project-liard.vercel.app/"
    }
  ]
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to to-cyan-500 py-5">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
     {
      projectsData.map((project, index) => (
        <Link href={project.path} target="_blank" key={index}>
          <ProjectCards
            src={project.src}
            title={project.title}
            description={project.description}
          />
        </Link>
      ))
     }
      </div>
    </div>
  );
};

export default Projects;
