import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import MyImage from "../../../components/myImage/MyImage";
import UseIntersectionObserver from "../../../hooks/UseIntersectionObserver";
import {
  logoimage1,
  logoimage2,
  logoimage3,
  logoimage4,
  logoimage5,
  logoimage6,
  logoimage7,
  logoimage8,
} from "../../../assets/icons";

const AboutSection = () => {
  const [load, SetLoad] = useState(false);

  const sectionRef = UseIntersectionObserver(
    () => {
      SetLoad(true);
    },
    { threshold: 0.0 }
  );

  return (
    <>
      <div
        id="About"
        ref={sectionRef}
        className="w-full min-h-[540px] h-[620px] max-lg:min-h-[610px] max-md:h-[1120px] md:my-8"
      >
        <ContentWrapper>
          <div
            className={`flex max-md:my-10 max-md:flex-col-reverse gap-2 items-center justify-center`}
          >
            <div
              className={`w-[40%] min-h-[600px] flex max-lg:w-[50%] max-sm:w-full  items-center justify-center  transition-all duration-1000 xl:p-8  ${
                load ? "translate-x-0" : "-translate-x-[960px]"
              }  `}
            >
              <div className="flex gap-4 flex-wrap items-center justify-center">
                <div className=" w-[140px] h-[110px] bg-black shadow-lg hover:scale-95 transition-all duration-200 rounded-lg flex items-center justify-center">
                  <MyImage src={logoimage1} className={"w-[110px]"} />
                </div>
                <div className=" w-[140px] h-[110px] bg-black shadow-lg hover:scale-95 transition-all duration-200 rounded-lg flex items-center justify-center">
                  <MyImage src={logoimage2} className={"w-[110px]"} />
                </div>
                <div className=" w-[140px] h-[110px] bg-black shadow-lg hover:scale-95 transition-all duration-200 rounded-lg flex items-center justify-center">
                  <MyImage src={logoimage3} className={"w-[110px]"} />
                </div>
                <div className=" w-[140px] h-[110px] bg-black shadow-lg hover:scale-95 transition-all duration-200 rounded-lg flex items-center justify-center">
                  <MyImage src={logoimage4} className={"w-[110px]"} />
                </div>
                <div className=" w-[140px] h-[110px] bg-black shadow-lg hover:scale-95 transition-all duration-200 rounded-lg flex items-center justify-center">
                  <MyImage src={logoimage5} className={"w-[110px]"} />
                </div>
                <div className=" w-[140px] h-[110px] bg-black shadow-lg hover:scale-95 transition-all duration-200 rounded-lg flex items-center justify-center">
                  <MyImage src={logoimage6} className={"w-[110px]"} />
                </div>
                <div className=" w-[140px] h-[110px] bg-black shadow-lg hover:scale-95 transition-all duration-200 rounded-lg flex items-center justify-center">
                  <MyImage src={logoimage7} className={"w-[110px]"} />
                </div>
                <div className=" w-[140px] h-[110px] bg-black shadow-lg hover:scale-95 transition-all duration-200 rounded-lg flex items-center justify-center">
                  <MyImage src={logoimage8} className={"w-[110px]"} />
                </div>
              </div>
            </div>
            <div
              className={`w-[60%] flex flex-col justify-center items-start min-h-[100%] max-lg:w-[70%] max-sm:w-full max-lg:items-center transition-all duration-1000 ${
                load ? "translate-y-0" : "translate-y-[960px]"
              }`}
            >
              <h2 className="text-7xl font-[Roboto] font-semibold max-xl:text-5xl pb-3 max-sm:text-4xl">
                Have You Heard
              </h2>
              <h2 className=" text-7xl font-[Roboto] font-semibold max-xl:text-5xl max-sm:text-4xl">
                About My Story?{" "}
              </h2>
              <div className="j w-[85%] pt-3 max-lg:w-[95%]">
                {" "}
                <p className=" font-[poppins] pt-2">
                  Code wasn't just in my textbooks growing up, it hummed in my
                  head. That fascination with technology sparked early, and by
                  2017, it had grown into a full-fledged passion.
                </p>{" "}
                <p className="font-[poppins] pt-2">
                  I started weaving websites with WordPress, diving deep into
                  SEO to make them shine. But the code, the logic, the magic
                  behind the scenes – that truly called to me.
                </p>{" "}
                <p className=" font-[poppins] pt-2">
                  Now, I'm here, hungry to build a future in web development,
                  one stunning interface at a time.
                </p>{" "}
                <p className="font-[poppins] pt-2">
                  But the journey doesn't stop at front-end. The full stack
                  beckons, and I'm ready to climb.{" "}
                  <b> Stay tuned – the best chapters are yet to be written.</b>
                </p>{" "}
              </div>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </>
  );
};

export default AboutSection;
