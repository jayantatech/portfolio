import React, { useEffect, useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import MyImage from "../../../components/myImage/myImage";
import { heroImg } from "../../../assets/images";
import { BgShape, BgShape3 } from "../../../assets/icons";
import { smoothScroll } from "../../../utility/smoothScroll";
import UseIntersectionObserver from "../../../hooks/UseIntersectionObserver";

const Hero = () => {
  const [scroll, setScroll] = useState(false);
  const sectionRef = UseIntersectionObserver(() => {
    setScroll(true);
  });

  return (
    <div classNameName="overflow-hidden">
      <div
        id="Home"
        ref={sectionRef}
        classNameName="j w-full bg-[#e3f6f5] min-h-[760px] max-lg:h-[600px] max-lg:min-h-[570px] max-md:h-[1170px] "
      >
        <ContentWrapper>
          <div classNameName="j flex max-sm:flex-col max-sm:pt-10 max-xl:pt-4">
            <div
              classNameName={`w-[60%] flex flex-col justify-center items-start min-h-[100%] max-lg:w-[70%] max-sm:w-full relative transition-all duration-1000 ${
                scroll ? "translate-x-0" : "-translate-x-[200%]"
              } xl:pt-24`}
            >
              <span classNameName=" absolute top-0 xl:top-20 left-0 max-md:hidden">
                <img src={BgShape} alt="shapeHero" classNameName="-rotate-90" />
              </span>
              <h2 classNameName=" text-8xl font-[Roboto] font-semibold max-xl:text-5xl">
                Hi I am
              </h2>
              <h2 classNameName=" text-7xl font-[Roboto] font-semibold max-xl:text-5xl">
                Jayanta Biswas
              </h2>
              <div classNameName="j w-[85%] pt-3 max-lg:w-[95%]">
                {" "}
                <p classNameName=" font-[poppins] pt-2">
                  Passionate Frontend Developer crafting seamless digital
                  experiences. Specializing in transforming ideas into
                  user-friendly interfaces. Seeking to elevate tech projects.
                </p>{" "}
                <p classNameName="font-[poppins] pt-2">
                  Let's build something extraordinary together."
                </p>{" "}
              </div>
              <div classNameName="py-4 flex flex-row gap-3 flex-wrap">
                <span classNameName="py-1 px-2 bg-[#262D43] font-[Roboto] text-white font-semibold rounded-lg">
                  Web Designer
                </span>
                <span classNameName="py-1 px-2 bg-[#C9D5FF] font-[Roboto]  font-semibold rounded-lg">
                  Frontend Developer
                </span>
                <span classNameName="py-1 px-2 bg-black text-white font-[Roboto]  font-semibold rounded-lg">
                  React Developer
                </span>
                <span classNameName="py-1 px-2 bg-[#2C698D] text-white font-[Roboto]  font-semibold rounded-lg">
                  Frontend Engineer
                </span>
                <span classNameName="py-1 px-2 bg-[#262D43] text-white font-[Roboto]  font-semibold rounded-lg">
                  JavaScript Developer
                </span>
                <span classNameName="py-1 px-2 bg-[#C9D5FF] font-[Roboto]  font-semibold rounded-lg">
                  Responsive Design
                </span>
              </div>
              <div classNameName="j pt-[50px] flex flex-row max-lg:py-[12px] max-sm:pt-10 max-sm:w-full max-sm:justify-between">
                <button classNameName=" mr-[75px] bg-[#272643] py-3 px-6 text-[16px] font-bold font-[poppins] rounded-md max-lg:mr-[20px] max-xl:text-[16px] max-lg:w-[190px] transition-all text-white hover:bg-[#2c698d] max-sm:mr-2 max-sm:px-4">
                  Download Cv
                  <span classNameName="ml-2">
                    <i className="ri-download-2-line"></i>
                  </span>
                </button>
                <button
                  classNameName="flex items-center justify-center mr-[75px] border-4 py-3 px-6 text-[16px] font-bold font-[poppins] rounded-md max-lg:mr-[20px] border-[#2c698d] hover:bg-[#2c698d] hover:text-white transition-all max-sm:mr-2"
                  onClick={() => smoothScroll("Contact")}
                >
                  Hire Me{" "}
                  <span>
                    <i className="ri-arrow-left-down-line"></i>{" "}
                  </span>
                </button>
              </div>
            </div>
            <div
              classNameName={` min-w-[50%] min-h-[100%] relative max-lg:w-[30%] max-sm:w-full transition-all duration-1000 ${
                scroll ? "translate-y-0" : " translate-y-[950px]"
              }`}
            >
              <div classNameName="w-full h-full relative">
                <span classNameName=" absolute xl:top-48 rotate-90 xl:right-10 max-lg:top-32 max-lg:right-4">
                  <img
                    src={BgShape3}
                    alt="shapeHero"
                    classNameName="-rotate-90"
                  />
                </span>
                <div classNameName="w-full h-full absolute xl:bottom-[-40px]">
                  <MyImage
                    src={heroImg}
                    classNameName="w-[440px] max-lg:w-[450px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </div>
  );
};

export default Hero;
