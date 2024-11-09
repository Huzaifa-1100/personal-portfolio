import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaFacebook, FaMailBulk, FaYoutube, FaRegUser } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="wrapper w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-1 bg-gradient-to-r from-purple-500 to to-cyan-500 my-5"></div>
        <div className="w-full h-full flex flex-row items-start justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] ">Comunity</div>
            {/* Youtube Link */}
            <Link href={"https://www.youtube.com/@huboftech944"}>
              <p className="flex flex-row text-center my-[15px] cursor-pointer items-center justify-center gap-1">
                <FaYoutube />
                <span className="text-[15px] ml-[6px] ">Youtube</span>
              </p>
            </Link>

            {/* GitHub Link */}
            <Link href={"https://github.com/Huzaifa-1100"}>
              <p className="flex flex-row text-center my-[15px] cursor-pointer items-center justify-center gap-1">
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px] ">GitHub</span>
              </p>
            </Link>

            {/* Discord Link */}
            <Link
              href={
                "https://discord.com/channels/1304681874144100413/1304681874144100415"
              }
            >
              <p className="flex flex-row text-center my-[15px] cursor-pointer items-center justify-center gap-1">
                <RxDiscordLogo />
                <span className="text-[15px] ml-[6px] ">Discord</span>
              </p>
            </Link>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] ">Social Media</div>

            {/* Linkedin Link */}
            <Link href={"https://www.linkedin.com/in/huzaifa-ayub-b29132288/"}>
              <p className="flex flex-row text-center my-[15px] cursor-pointer items-center justify-center gap-1">
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px] ">Linkedin</span>
              </p>
            </Link>
            {/* Facebook Link */}
            <Link href={"https://www.facebook.com/H.Z.Shooter"}>
              <p className="flex flex-row text-center my-[15px] cursor-pointer items-center justify-center gap-1">
                <FaFacebook />
                <span className="text-[15px] ml-[6px] ">Facebook</span>
              </p>
            </Link>

            {/* Instagram Link */}
            <Link href={"https://www.instagram.com/huzaifa._ayub/"}>
              <p className="flex flex-row text-center my-[15px] cursor-pointer items-center justify-center gap-1">
                <RxInstagramLogo />
                <span className="text-[15px] ml-[6px] ">Instagram</span>
              </p>
            </Link>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] ">Contact Me</div>

            {/* About Me */}
            <Link href={"#about-me"}>
              <p className="flex flex-row text-center my-[15px] cursor-pointer items-center justify-center gap-1 ">
                <FaRegUser />
                <span className="text-[15px] ml-[6px] ">About Me</span>
              </p>
            </Link>

            {/* Contact us */}
            <Link href={"#contact"}>
              <p className="flex flex-row text-center my-[15px] cursor-pointer items-center justify-center gap-1">
                <FaMailBulk />
                <span className="text-[15px] ml-[6px] ">
                  asadhussainshad@gmail.com
                </span>
              </p>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5">
          <Image
            src={"/huzaifa.png"}
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-spin rounded-full h-14 w-14 border border-[#7042f861]"
          />
          <div className=" text-[15px]">&copy; 2024 Huzaifa-1100.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
