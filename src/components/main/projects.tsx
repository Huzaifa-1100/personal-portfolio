import React from "react";
import ProjectCards from "../sub/projectCards";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to to-cyan-500 py-5">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        <Link
          href="https://dynamic-resume-generator-chi.vercel.app/"
          target="_blank"
        >
          <ProjectCards
            src="/projects/resume.jpg"
            title="Resume Builder"
            description="This is a Professional Resume Builder where user can generate their own resume"
          />
        </Link>
        <ProjectCards
          src="/NextWebsite.png"
          title="Modern Projects"
          description=""
        />
        <ProjectCards
          src="/NextWebsite.png"
          title="Modern Projects"
          description=""
        />
        <ProjectCards
          src="/NextWebsite.png"
          title="Modern Projects"
          description=""
        />
        <ProjectCards
          src="/NextWebsite.png"
          title="Modern Projects"
          description=""
        />
        <ProjectCards
          src="/NextWebsite.png"
          title="Modern Projects"
          description=""
        />
      </div>
    </div>
  );
};

export default Projects;
