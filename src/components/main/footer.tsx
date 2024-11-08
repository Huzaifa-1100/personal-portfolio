import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaFacebook, FaMailBulk, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="wrapper w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] ">Comunity</div>
           <Link href={"youtube.com"}>
            <p className="flex flex-row text-center my-[15px] cursor-pointer items-center justify-center gap-1">
              <FaYoutube />
              <span className="text-[15px] ml-[6px] ">Youtube</span>
            </p>
           </Link>
            <p className="flex flex-row text-center my-[15px] cursor-pointer items-center justify-center gap-1">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px] ">GitHub</span>
            </p>
            <p className="flex flex-row text-center my-[15px] cursor-pointer items-center justify-center gap-1">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px] ">Discord</span>
            </p>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] ">Social Media</div>
            <p className="flex flex-row text-center my-[15px] cursor-pointer items-center justify-center gap-1">
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px] ">Linkedin</span>
            </p>
            <p className="flex flex-row text-center my-[15px] cursor-pointer items-center justify-center gap-1">
              <FaFacebook />
              <span className="text-[15px] ml-[6px] ">Facebook</span>
            </p>
            <p className="flex flex-row text-center my-[15px] cursor-pointer items-center justify-center gap-1">
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px] ">Instagram</span>
            </p>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] ">Contact Me</div>
            <p className="flex flex-row text-center my-[15px] cursor-pointer items-center justify-center gap-1 ">
              <FaYoutube />
              <span className="text-[15px] ml-[6px] ">About Me</span>
            </p>
            <p className="flex flex-row text-center my-[15px] cursor-pointer items-center justify-center gap-1">
              <FaMailBulk />

              <span className="text-[15px] ml-[6px] ">
                asadhussainshad@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px]">
          &copy; 2024 GIAIC. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
