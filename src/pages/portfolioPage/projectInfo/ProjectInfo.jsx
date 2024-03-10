import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import UseIntersectionObserver from "../../../hooks/UseIntersectionObserver";
import MyImage from "../../../components/myImage/MyImage";

const ProjectInfo = ({ data }) => {
  const [load, SetLoad] = useState(false);

  const sectionRef = UseIntersectionObserver(() => {
    SetLoad(true);
  });
  return (
    <div id="Info" className=" overflow-hidden my-10" ref={sectionRef}>
      <ContentWrapper>
        <div className="grid md:grid-flow-col max-md:grid-flow-row  md:grid-cols-2">
          <div className=" max-md:row-span-1 col-span-1 py-3 pr-3">
            {data.description.map((sec) => (
              <div
                className={`pb-4 transition-all ease-out duration-300 ${
                  load ? "translate-x-0" : "-translate-x-[160%]"
                }`}
              >
                <h2 className=" text-xl font-bold uppercase py-2 font-[Roboto]">
                  {sec.secTitle}{" "}
                </h2>
                {sec.secDescription.map((praItem) => (
                  <p className=" font-[poppins] py-1">{praItem.content}</p>
                ))}
              </div>
            ))}
          </div>
          <div className="md:col-span-1">
            <div
              className={`w-full h-auto bg-[#cef3f5] shadow-md py-4 px-4 rounded-lg transition-all duration-700 ${
                load ? "translate-x-0" : "translate-x-[150%]"
              }`}
            >
              {data.siteInfo.map((item) => (
                <div className=" w-full h-auto shadow-sm py-2 bg-white transition-all duration-200 hover:shadow-xl border-black mb-3 px-3 border rounded-lg ">
                  <h3 className=" text-xl font-bold py-2">{item.title}</h3>
                  <span className=" font-semibold text-lg">
                    {item.description}
                  </span>
                </div>
              ))}
              {data?.siteServices && (
                <div className=" w-full h-auto shadow-sm py-2 bg-white transition-all duration-200 hover:shadow-xl border-black mb-3 px-3 border rounded-lg ">
                  <h3 className=" text-xl font-bold py-2">{"Services"}</h3>
                  <span className=" font-semibold text-lg flex flex-row gap-2 flex-wrap">
                    {data.siteServices.map((item) => (
                      <span className="px-2 bg-[#262D43] text-white rounded-md">
                        {item}
                      </span>
                    ))}
                  </span>
                </div>
              )}
            </div>
            {data.technologies && (
              <div
                className={`mt-10 w-full h-auto bg-[#C9D5FF] flex items-center justify-center flex-col py-4 rounded-lg transition-all duration-700 ${
                  load ? "translate-x-0" : "translate-x-[180%]"
                }`}
              >
                <h2 className=" text-xl uppercase font-bold font-[Roboto]">
                  Technologies Used
                </h2>
                <div className=" py-3 flex flex-wrap flex-row gap-2 px-5">
                  {data.technologies.map((item) => (
                    <div className="flex items-center justify-center gap-1 bg-white px-2 py-1 rounded-lg shadow-lg transition-all duration-200 hover:shadow-2xl">
                      <MyImage
                        src={item.img}
                        alt={"css"}
                        className={"w-[25px] max-lg:w-[25px]"}
                      />
                      <span className="text-xl font-bold max-lg:text-xl">
                        {item.tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default ProjectInfo;
