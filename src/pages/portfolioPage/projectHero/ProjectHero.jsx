import React, { useState } from "react";
import { projectImg } from "../../../assets/images/index";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import UseIntersectionObserver from "../../../hooks/UseIntersectionObserver";
import MyImage from "../../../components/myImage/myImage";

const ProjectHero = ({ data }) => {
  const [load, SetLoad] = useState(false);
  const [boxHover, setBoxHover] = useState(false);
  const handleHover = () => {
    setBoxHover(!boxHover);
  };

  const sectionRef = UseIntersectionObserver(() => {
    SetLoad(true);
  });

  return (
    <div id="Project" ref={sectionRef} className="overflow-hidden">
      <ContentWrapper>
        <div>
          <div
            className={`w-full h-auto xl:py-3 flex flex-col gap-4 rounded-xl bg-gray-300 xl:px-3 max-xl:p-2 transition-all duration-1000 ${
              load ? "-translate-y-[0]" : "-translate-y-[150%]"
            }`}
          >
            <div
              className={`w-full max-lg:h-[460px] xl:h-[590px] bg-black rounded-xl overflow-hidden cursor-pointer  max-md:h-[280px] transition-all duration-[1.5s] ease-in-out ${
                load ? "translate-x-0" : "-translate-x-[160%]"
              }`}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              <div
                className={` transition-all duration-[3s] ${
                  !boxHover
                    ? "translate-y-0 max-md:translate-y-0"
                    : "xl:-translate-y-[calc(100%-590px)] max-lg:-translate-y-[calc(100%-460px)] max-md:-translate-y-[cals(100%-280px)]"
                }`}
              >
                {" "}
                <MyImage src={data.img} className={`w-full h-auto`} />
              </div>
            </div>
            <div className=" grid xl:grid-flow-col gap-2 max-md:grid-flow-row ">
              {data?.gitLing && (
                <a href={data.gitLing} target="_blank">
                  <div
                    className={`w-full col-span-1 flex items-center justify-center bg-black hover:bg-slate-700 h-[60px] text-white text-2xl gap-2 font-bold rounded-md cursor-pointer transition-all duration-300 ${
                      load ? "translate-x-0" : "-translate-x-[160%]"
                    }`}
                  >
                    <i class="ri-github-fill"></i>
                    <span>Github</span>
                  </div>
                </a>
              )}
              <a href={data.siteLink} target="_blank">
                <div
                  className={`w-full col-span-1 flex items-center justify-center bg-slate-50 h-[60px] text-black text-2xl gap-2 font-bold rounded-md cursor-pointer hover:bg-blue-400 hover:text-white transition-all  duration-300 ${
                    load ? "translate-x-0" : "translate-x-[160%]"
                  }`}
                >
                  <i class="ri-arrow-right-up-line"></i>{" "}
                  <span>Visit Website</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default ProjectHero;
