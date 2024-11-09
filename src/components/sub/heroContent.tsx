"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../../utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="wrapper flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-90"
        >
          <SparklesIcon className="text-gray-200 mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] font-bold px-2">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span className="leading-tight">
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
              {" "}
              the best{" "}
            </span>
            Project Experience
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-300 my-5 max-w-[600px] text-justify"
        >
          Welcome to my portfolio! I am Huzaifa Ayub, a passionate web developer
          and aspiring <span className="font-bold">CERTIFIED CLOUD APPLIED GENERATIVE AI ENGINEER.</span>  My
          portfolio showcases a range of projects built using cutting-edge
          technologies like Next.js. Through continuous learning and hands-on
          experience, I am committed to enhancing user experiences and solving
          real-world problems with innovative web solutions.
        </motion.p>
        {/* Download CV Button */}
        <motion.div variants={slideInFromLeft(1)}>
          <Link href={"/cv/Resume-CV.pdf"} target="_blank" passHref>
            <Button className="text-gray-200 text-lg bg-[#2A0E61] hover:translate-y-1  hover:duration-500 cursor-pointer rounded-lg py-2">
              Download CV
            </Button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full justify-center items-center hidden md:flex"
      >
        <Image
          src={"/mainIconsdark.svg"}
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
