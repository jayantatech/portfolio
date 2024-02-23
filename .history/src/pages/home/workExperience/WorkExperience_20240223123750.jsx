import React, { useEffect, useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { useSelector } from "react-redux";
import UseIntersectionObserver from "../../../hooks/UseIntersectionObserver";

const WorkExperience = () => {
  const [load, SetLoad] = useState(false);

  const sectionRef = UseIntersectionObserver(
    () => {
      SetLoad(true);
    },
    { threshold: 0.1 }
  );

  return (
    <div
      id="Experience"
      ref={sectionRef}
      classNameName=" pt-40 pb-14 -mb-24 bg-[#E3F6F5] -translate-y-24 max-md:-translate-y-36 max-md:pt-48 max-md:pb-20 z-0 overflow-hidden"
    >
      <ContentWrapper>
        <SectionTitle
          title="My Work Story"
          subtitle="Experience in Web"
          description=" Embark on my journey through diverse roles and projects. Dive into my professional evolution and accomplishments."
        />
        <div classNameName="w-full my-8">
          <div classNameName="w-full">
            <div
              classNameName={`grid grid-cols-10 py-4 max-md:grid-cols-2 max-md:gap-4 w-full  transition-all duration-1000 ${
                load ? "translate-y-0" : "translate-y-[560px]"
              }`}
            >
              <div classNameName="grid h-[75px] col-span-3 grid-flow-row gap-0 max-md:justify-center max-md:col-span-6 max-md:items-center">
                <h3 classNameName="font-[Roboto] text-2xl font-semibold">
                  Upwork{" "}
                </h3>
                <p classNameName="font-[Roboto] text-md font-bold">
                  Jan 2020 - Mar 2022
                </p>
              </div>
              <div classNameName=" grid col-span-7 grid-flow-col gap-3">
                <div classNameName="w-6 h-6 bg-[#1b1f2f] rounded-full flex items-center justify-center">
                  <div classNameName="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div classNameName="flex flex-col gap-2">
                  <h3 classNameName="text-2xl font-[Roboto] font-bold">
                    Freelance WordPress Developer & SEO Expert{" "}
                  </h3>
                  <p classNameName="font-[poppins]">
                    Excelled on Upwork as a freelance WordPress maestro and SEO
                    authority. Crafted intuitive websites and optimized content
                    for diverse clientele, honing skills in web development and
                    digital marketing.
                  </p>
                </div>
              </div>
            </div>
            <div
              classNameName={`grid grid-cols-10 py-4 max-md:grid-cols-2 max-md:gap-4 w-full transition-all duration-1000 ${
                load ? "translate-y-0" : "translate-y-[560px]"
              }`}
            >
              <div classNameName="grid h-[75px] col-span-3 grid-flow-row gap-0 max-md:justify-center max-md:col-span-6 max-md:items-center">
                <h3 classNameName="font-[Roboto] text-2xl font-semibold">
                  Botwavetech.com
                </h3>
                <p classNameName="font-[Roboto] text-md font-bold">
                  November 2022 - May 2023{" "}
                </p>
              </div>
              <div classNameName=" grid col-span-7 grid-flow-col gap-3">
                <div classNameName="w-6 h-6 bg-[#1b1f2f] rounded-full flex items-center justify-center">
                  <div classNameName="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div classNameName="flex flex-col gap-2">
                  <h3 classNameName="text-2xl font-[Roboto] font-bold">
                    Web Designer & SEO Expert
                  </h3>
                  <p classNameName="font-[poppins]">
                    Contributed to Botwavetech.com as a pivotal web designer and
                    SEO professional. Elevated site aesthetics and functionality
                    while implementing robust SEO strategies, amplifying the
                    online presence and user experience.
                  </p>
                </div>
              </div>
            </div>{" "}
            <div
              classNameName={`grid grid-cols-10 py-4 max-md:grid-cols-2 max-md:gap-4 w-full transition-all duration-1000 ${
                load ? "translate-y-0" : "translate-y-[560px]"
              }`}
            >
              <div classNameName="grid h-[75px] col-span-3 grid-flow-row gap-0 max-md:justify-center max-md:col-span-6 max-md:items-center">
                <h3 classNameName="font-[Roboto] text-2xl font-semibold">
                  Web Development
                </h3>
                <p classNameName="font-[Roboto] text-md font-bold">Ongoing </p>
              </div>
              <div classNameName=" grid col-span-7 grid-flow-col gap-3">
                <div classNameName="w-6 h-6 bg-[#1b1f2f] rounded-full flex items-center justify-center">
                  <div classNameName="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div classNameName="flex flex-col gap-2">
                  <h3 classNameName="text-2xl font-[Roboto] font-bold">
                    Full-Stack Web Development{" "}
                  </h3>
                  <p classNameName="font-[poppins]">
                    Currently navigating the realm of full stack web
                    development, driven by a passion to broaden skills and
                    knowledge. Embracing challenges to pave the way towards a
                    comprehensive understanding of web development technologies
                    and frameworks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default WorkExperience;
