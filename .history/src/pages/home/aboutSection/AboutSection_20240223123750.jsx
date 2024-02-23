import React, { useState } from "react";
import { heroImg } from "../../../assets/images";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import MyImage from "../../../components/myImage/myImage";
import UseIntersectionObserver from "../../../hooks/UseIntersectionObserver";

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
        classNameName="j w-full min-h-[540px] max-lg:min-h-[610px] max-md:min-h-[570px] md:my-16"
      >
        <ContentWrapper>
          <div
            classNameName={`j flex max-sm:pt-10 max-sm:flex-col-reverse gap-8 `}
          >
            <div
              classNameName={`w-[50%] min-h-[100%] relative max-lg:w-[50%] max-sm:w-full  items-center justify-center  transition-all duration-1000 ${
                load ? "translate-x-0" : "-translate-x-[960px]"
              }`}
            >
              <div classNameName="bg-[#c9d5ff] w-[70%] my-0 mx-auto h-full flex items-center justify-center pt-5 rounded-t-full border-8 border-[#1c2031] shadow-2xl max-lg:w-[90%] max-lg:h-[70%] overflow-hidden">
                <MyImage
                  src={heroImg}
                  alt={"heroImg"}
                  classNameName={"w-[340px] max-sm:w-[580px]"}
                />
              </div>
            </div>
            <div
              classNameName={`w-[60%] flex flex-col justify-center items-start min-h-[100%] max-lg:w-[70%] max-sm:w-full max-lg:items-center transition-all duration-1000 ${
                load ? "translate-y-0" : "translate-y-[960px]"
              }`}
            >
              <h2 classNameName="text-7xl font-[Roboto] font-semibold max-xl:text-5xl pb-3 max-sm:text-4xl">
                Have You Heard
              </h2>
              <h2 classNameName=" text-7xl font-[Roboto] font-semibold max-xl:text-5xl max-sm:text-4xl">
                About My Story?{" "}
              </h2>
              <div classNameName="j w-[85%] pt-3 max-lg:w-[95%]">
                {" "}
                <p classNameName=" font-[poppins] pt-2">
                  Code wasn't just in my textbooks growing up, it hummed in my
                  head. That fascination with technology sparked early, and by
                  2017, it had grown into a full-fledged passion.
                </p>{" "}
                <p classNameName="font-[poppins] pt-2">
                  I started weaving websites with WordPress, diving deep into
                  SEO to make them shine. But the code, the logic, the magic
                  behind the scenes – that truly called to me.
                </p>{" "}
                <p classNameName=" font-[poppins] pt-2">
                  Now, I'm here, hungry to build a future in web development,
                  one stunning interface at a time.
                </p>{" "}
                <p classNameName="font-[poppins] pt-2">
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
