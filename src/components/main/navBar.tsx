import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Socials } from "../../../constants";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaSpaceAwesome } from "react-icons/fa6";

const NavBar = () => {
  return (
    <div className="wrapper felx items-center justify-center w-full h-16 sticky top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop:blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link
          href={"#about-me"}
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src={"/huzaifa.png"}
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-spin rounded-full h-14 w-14 border border-[#7042f861]"
          />
          <span className="font-bold ml-[10px] md:block text-gray-300">
            Huzaifa Ayub
          </span>
        </Link>

        <div className="w-[500px] h-full flex-row items-center justify-between md:mr-20 hidden lg:flex">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link href={"#about-me"} className="cursor-pointer">
              About Me
            </Link>
            <Link href={"#skills"} className="cursor-pointer">
              Skills
            </Link>
            <Link href={"#projects"} className="cursor-pointer">
              Projects
            </Link>
            <Link href={"#contact"} className="cursor-pointer">
              Contact Me
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-5 cursor-pointer">
          {Socials.map((social) => (
            <Link
              href={social.url}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block"
            >
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            </Link>
          ))}
          <div className="lg:hidden">
            {/* Sheet component from shadcn for navbar on small screen */}
            <Sheet>
              <SheetTrigger className="text-6xl">
                {" "}
                <FaSpaceAwesome className="text-gray-200 text-2xl" />{" "}
              </SheetTrigger>
              <SheetContent className="text-gray-200 bg-[#00021B] w-full">
                <SheetHeader>
                  <SheetTitle className="text-gray-200">
                    NAVBAR
                  </SheetTitle>
                  <SheetDescription className="text-lg font-bold flex flex-col text-left text-gray-200">
                    <ul className="mt-5 leading-10">
                      <li>
                        <Link href={"#about-me"} className="cursor-pointer">
                         About Me
                        </Link>
                      </li>
                      <li>
                        <Link href={"#skills"} className="cursor-pointer">
                          Skills
                        </Link>
                      </li>
                      <li>
                        <Link href={"#projects"} className="cursor-pointer">
                          Projects
                        </Link>
                      </li>
                      <li>
                        <Link href={"#contact"} className="cursor-pointer">
                          Contact Me
                        </Link>
                      </li>
                    </ul>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
