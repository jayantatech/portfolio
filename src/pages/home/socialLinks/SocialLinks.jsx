import React, { useEffect, useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import { twitter, linkedin, github } from "../../../assets/icons";
import MyImage from "../../../components/myImage/MyImage";

const SocialLinks = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    setScroll(true);
  }, []);
  return (
    <div className="w-full h-[120px] max-md:h-[190px] -translate-y-14 overflow-hidden">
      <ContentWrapper>
        <div
          className={`j flex flex-row w-full h-[110px] bg-[#C9D5FF] rounded-3xl items-center overflow-hidden   max-md:h-[190px] transition-all duration-1000 ${
            scroll ? "translate-x-0" : "translate-x-[120%]"
          }`}
        >
          <div className="w-1/5 h-full bg-[#262d43] flex items-center justify-center max-md:w-2/5">
            <span className="text-2xl text-white font-[Roboto] font-semibold max-sm:text-xl">
              Learn More
            </span>
          </div>
          <div className="w-4/5 h-full flex justify-evenly items-center max-md:flex-row max-sm:flex-wrap max-sm:gap-2 max-sm:py-3">
            <a href="https://github.com/jayantatech" target="_blank">
              <div className="flex flex-row items-center gap-3 bg-white px-4 py-2 rounded-xl cursor-pointer shadow-lg max-lg:gap-1 max-lg:px-3 max-lg:py-2 hover:shadow-2xl  transition-all duration-200 max-sm:flex-col max-sm:py-2  max-sm:px-2">
                <MyImage src={github} className={"w-12"} />
                <span className="text-3xl font-[Roboto] font-semibold max-sm:text-2xl">
                  Github
                </span>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/jayanta--biswas/"
              target="_blank"
            >
              <div className="flex flex-row items-center gap-3  bg-white px-4 py-2 rounded-xl cursor-pointer shadow-lg max-lg:gap-1 max-lg:px-3 max-lg:py-2 hover:shadow-2xl  transition-all duration-200 max-sm:flex-col max-sm:py-2  max-sm:px-2">
                <MyImage src={linkedin} className={"w-12"} />
                <span className="text-3xl font-[Roboto] font-semibold max-sm:text-2xl">
                  Linkedin
                </span>
              </div>
            </a>
            <a href="https://twitter.com/_Jayantabiswas" target="_blank">
              <div className="flex flex-row items-center gap-3  bg-white px-4 py-2 rounded-xl cursor-pointer shadow-lg max-lg:gap-1 max-lg:px-3 max-lg:py-2 hover:shadow-2xl  transition-all duration-200 max-sm:flex-row max-sm:py-2  max-sm:px-8 max-sm:gap-3">
                <MyImage src={twitter} className={"w-12"} />
                <span className="text-3xl font-[Roboto] font-semibold max-sm:text-2xl">
                  Twitter
                </span>
              </div>
            </a>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default SocialLinks;
