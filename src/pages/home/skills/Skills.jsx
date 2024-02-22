import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import {
  html,
  css,
  bootstrap,
  jsIcon,
  reactIcon,
  telwindCss,
  git,
  github,
  wordpress,
  Redux,
  Typescript,
} from "../../../assets/icons";
import MyImage from "../../../components/myImage/myImage";
import UseIntersectionObserver from "../../../hooks/UseIntersectionObserver";

const Skills = () => {
  const [load, SetLoad] = useState(false);

  const sectionRef = UseIntersectionObserver(() => {
    SetLoad(true);
  });
  return (
    <div className=" overflow-hidden" ref={sectionRef}>
      <ContentWrapper>
        <div
          className={`relative w-full h-[220px] max-xl:h-[240px] bg-[#C9D5FF] text-center px-3 py-1 rounded-xl font-[Roboto] max-sm:h-[380px] max-sm:mt-10 z-50  transition-all duration-1000 ${
            load ? "translate-x-0" : "translate-x-[150%]"
          }`}
        >
          <h3 className="text-3xl font-bold py-3 font-[Roboto] max-lg:text-2xl">
            Web Technologies I Know
          </h3>
          <div className="flex items-center justify-center gap-3 flex-wrap px-10 max-lg:px-0">
            <div className="flex items-center justify-center gap-1 bg-white px-4 py-2 rounded-lg shadow-lg transition-all duration-200 hover:shadow-2xl">
              <MyImage
                src={html}
                alt={"html"}
                className={"w-[35px] max-lg:w-[30px]"}
              />
              <span className="text-2xl font-bold max-lg:text-xl">HTML</span>
            </div>
            <div className="flex items-center justify-center gap-1 bg-white px-4 py-2 rounded-lg shadow-lg transition-all duration-200 hover:shadow-2xl">
              <MyImage
                src={css}
                alt={"css"}
                className={"w-[35px] max-lg:w-[30px]"}
              />
              <span className="text-2xl font-bold max-lg:text-xl">CSS</span>
            </div>
            <div className="flex items-center justify-center gap-1 bg-white px-4 py-2 rounded-lg shadow-lg transition-all duration-200 hover:shadow-2xl">
              <MyImage
                src={jsIcon}
                alt={"jsIcon"}
                className={"w-[35px] max-lg:w-[30px]"}
              />
              <span className="text-2xl font-bold max-lg:text-xl">
                Javascript{" "}
              </span>
            </div>
            <div className="flex items-center justify-center gap-1 bg-white px-4 py-2 rounded-lg shadow-lg transition-all duration-200 hover:shadow-2xl">
              <MyImage
                src={Typescript}
                alt={"Typescript"}
                className={"w-[35px] max-lg:w-[30px]"}
              />
              <span className="text-2xl font-bold max-lg:text-xl">
                Typescript
              </span>
            </div>
            <div className="flex items-center justify-center gap-1 bg-white px-4 py-2 rounded-lg shadow-lg transition-all duration-200 hover:shadow-2xl">
              <MyImage
                src={reactIcon}
                alt={"reactIcon"}
                className={"w-[35px] max-lg:w-[30px]"}
              />
              <span className="text-2xl font-bold max-lg:text-xl">React</span>
            </div>
            <div className="flex items-center justify-center gap-1 bg-white px-4 py-2 rounded-lg shadow-lg transition-all duration-200 hover:shadow-2xl">
              <MyImage
                src={Redux}
                alt={"reactIcon"}
                className={"w-[35px] max-lg:w-[30px]"}
              />
              <span className="text-2xl font-bold max-lg:text-xl">Redux</span>
            </div>
            <div className="flex items-center justify-center gap-1 bg-white px-4 py-2 rounded-lg shadow-lg transition-all duration-200 hover:shadow-2xl">
              <MyImage
                src={telwindCss}
                alt={"telwindCss"}
                className={"w-[35px] max-lg:w-[30px]"}
              />

              <span className="text-2xl font-bold max-lg:text-xl">Telwind</span>
            </div>
            <div className="flex items-center justify-center gap-1 bg-white px-4 py-2 rounded-lg shadow-lg transition-all duration-200 hover:shadow-2xl">
              <MyImage
                src={bootstrap}
                alt={"bootstrap"}
                className={"w-[35px] max-lg:w-[30px]"}
              />
              <span className="text-2xl font-bold max-lg:text-xl">
                Bootstrap
              </span>
            </div>
            <div className="flex items-center justify-center gap-1 bg-white px-4 py-2 rounded-lg shadow-lg transition-all duration-200 hover:shadow-2xl">
              <MyImage
                src={git}
                alt={"git"}
                className={"w-[35px] max-lg:w-[30px]"}
              />
              <span className="text-2xl font-bold max-lg:text-xl">Git</span>
            </div>
            <div className="flex items-center justify-center gap-1 bg-white px-4 py-2 rounded-lg shadow-lg transition-all duration-200 hover:shadow-2xl">
              <MyImage
                src={github}
                alt={"github"}
                className={"w-[35px] max-lg:w-[30px]"}
              />
              <span className="text-2xl font-bold max-lg:text-xl">Github</span>
            </div>

            <div className="flex items-center justify-center gap-1 bg-white px-4 py-2 rounded-lg shadow-lg transition-all duration-200 hover:shadow-2xl">
              <MyImage
                src={wordpress}
                alt={"wordpress"}
                className={"w-[35px] max-lg:w-[30px]"}
              />
              <span className="text-2xl font-bold max-lg:text-xl">
                Wordpress
              </span>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Skills;
