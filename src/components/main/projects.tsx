import React from "react";
import ProjectCards from "../sub/projectCards";
import Link from "next/link";

const Projects = () => {
  const projectsData = [
    {
      src: "/projects/CV.png",
      title: "Resume Builder",
      description:
        "This is a Professional Resume Builder where user can generate their own resume",
      path: "https://dynamic-resume-generator-chi.vercel.app/",
    },
    {
      src: "/projects/ecommerce.jpg",
      title: "E-Commerce Shop",
      description: "This is a E-commerce shop",
      path: "https://e-commerce-project-liard.vercel.app/",
    },
    {
      src: "/projects/blog.jpg",
      title: "Dynamic Blog",
      description:
        "This is a Blog Website built with Next.js and Tailwind CSS.Explore our website to learn more about our services and offerings.",
      path: "https://dynamic-blog-virid.vercel.app/",
    },
    {
      src: "/projects/coral.jpg",
      title: "Coral Shop Design from Figma",
      description: "This is a simple e-commerce landing page design from figma",
      path: "https://coral-figma-design.vercel.app/",
    },
    {
      src: "/projects/portfolio.jpg",
      title: "My First Portfolio",
      description:
        "This is my first portfolio built with Next.js and Tailwind CSS",
      path: "https://my-first-portfolio-pi.vercel.app/",
    },
    {
      src: "/projects/calculator.png",
      title: "Simple Calculator",
      description:
        "This is a simple calculator built with Next.js and Tailwind CSS where users can perform plus minus multiple and divide",
      path: "https://calculator-nexjs.vercel.app/",
    },
    {
      src: "/projects/numberguess.jpg",
      title: "Number Guessing Game",
      description:
        "A simple number guessing game where players try to guess a randomly chosen number within a set range 1 to 5.",
      path: "https://number-guessing-game-sooty.vercel.app/",
    },
    {
      src: "/projects/clock.jpg",
      title: "Digital Clock",
      description:
        "A simple digital clock Display the current time in hours, minutes and seconds in 24hr and 12hr time format",
      path: "https://digital-clock-eta-kohl.vercel.app/",
    },
    {
      src: "/projects/joke.png",
      title: "Random Joke Generator",
      description:
        "This is a Randome Joke Generator where user can generate a random joke",
      path: "https://random-joke-generator-omega.vercel.app/",
    },
    {
      src: "/projects/tip.jpg",
      title: "Tip Calculator",
      description:
        " This is a simple tip calculator where user Enter the bill amount and tip percentage to calculate the the tip and total amount.",
      path: "https://tip-calculator-two-nu.vercel.app/",
    },
    {
      src: "/projects/timer.jpg",
      title: "Countdown Timerr",
      description:
        "A countdown timer that tracks and displays the remaining time in seconds, counting down to zero.",
      path: "https://countdown-timer-virid-two.vercel.app/",
    },
    {
      src: "/projects/facebook.jpg",
      title: "Facebook Login Page",
      description: "This is a simple facebook login page clone",
      path: "https://facebook-login-lyart.vercel.app/",
    },
  ];
  return (
    <div
      id="projects"
      className="wrapper flex flex-col items-center justify-center py-20 "
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to to-cyan-500 py-5">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 ">
        {projectsData.map((project, index) => (
          <Link href={project.path} target="_blank" key={index}>
            <ProjectCards
              src={project.src}
              title={project.title}
              description={project.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
