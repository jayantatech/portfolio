import React from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { footerLogo } from "../../assets/images";
import { Link } from "react-router-dom";
import MyImage from "../myImage/myImage";
import { smoothScroll } from "../../utility/smoothScroll";

const Footer = () => {
  return (
    <div classNameName=" bg-black py-6 mt-12 ">
      <ContentWrapper>
        <div classNameName=" flex w-full h-[300px] max-md:h-[460px] py-8 px-4 flex-col max-md:py-2 max-md:px-1">
          <div classNameName="flex w-full h-full max-md:flex-col max-md:items-center max-md:justify-center">
            <div classNameName="flex w-2/3 flex-col gap-3 px-4 py-4 max-md:w-full max-md:px-2 max-md:py-2">
              <div classNameName="h-[60px] w-[200px] max-md: flex items-center justify-center rounded-xl">
                <Link to={"/"}>
                  <MyImage src={footerLogo} classNameName=" w-full h-full" />
                </Link>
                {/* <img src={footerLogo} alt="" classNameName="h-full" /> */}
              </div>
              <p classNameName="font-[poppins] text-white">
                Crafting clean code, crafting compelling experiences. Let's
                build something remarkable, together.
              </p>
            </div>
            <div classNameName="flex w-1/3 h-[130px] max-lg:h-[160px] mx-20 flex-col gap-3 px-3 py-5 bg-white rounded-2xl shadow-slate-50 max-lg:w-4/5 items-center justify-center mt-3 max-md:w-full">
              <div classNameName="flex flex-row w-full justify-center gap-2 text-black max-lg:flex-col">
                <div classNameName="flex flex-row gap-2">
                  <a href="https://github.com/jayantatech" target="_blank">
                    <span classNameName="items-center justify-center flex flex-row gap-1 px-2 max-lg:w-full font-bold rounded-md bg-[#C9D5FF] cursor-pointer ">
                      {" "}
                      <i className="ri-github-fill text-2xl "></i>
                      GitHub
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jayanta--biswas/"
                    target="_blank"
                  >
                    <span classNameName="items-center justify-center flex flex-row gap-1 px-2  max-lg:w-full font-bold rounded-md border cursor-pointer">
                      {" "}
                      <i className="ri-linkedin-box-fill cursor-pointer text-2xl"></i>
                      linkedin
                    </span>
                  </a>
                </div>
                <a href="https://twitter.com/_Jayantabiswas" target="_blank">
                  <span classNameName="items-center justify-center flex flex-row gap-1 px-2 font-bold rounded-md bg-[#E3F6F5] cursor-pointer">
                    {" "}
                    <i className="ri-twitter-x-fill cursor-pointer text-2xl"></i>
                    Twiitter
                  </span>
                </a>
              </div>
              <div classNameName="j flex flex-row h-[40px] gap-4 w-full items-center justify-evenly ">
                <button classNameName=" flex items-center justify-center px-3 py-2 bg-[#262D43] hover:bg-[#2C698D] text-white rounded-md">
                  Download Cv
                  <span classNameName="ml-2">
                    <i className="ri-download-2-line"></i>
                  </span>
                </button>
                <button
                  classNameName="flex items-center justify-center px-3 py-1.5 border-2 hover:bg-[#2C698D] hover:text-white border-[#2C698D] rounded-md"
                  onClick={() => smoothScroll("Contact")}
                >
                  Hire Me{" "}
                  <span>
                    <i className="ri-arrow-right-up-line"></i>{" "}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div classNameName=" text-lg max-md:text-sm font-[poppins] h-auto border-t border-white w-full flex items-center justify-center text-center">
            <p classNameName="py-2 text-white text-[16px]">
              Copyright © 2023 By Jayanta Biswas. All Rights Reserved.
            </p>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Footer;
