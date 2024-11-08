import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCards = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden  rounded-xl shadow-xl shadow-gray-700 bg-transparent border-4 border-[#2A0E61] hover:translate-y-2  hover:duration-500 ">
      <Image
        src={src}
        className="w-full h-72  object-fill mb-2 rounded-xl "
        width={1000}
        height={1000}
        alt={title}
      />
      <div className="bg-[#4b2794] h-[2px] w-full"></div>
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCards;
 