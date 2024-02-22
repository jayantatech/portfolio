import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import { jsIcon } from "../../../assets/icons";
import KeySkillCard from "../../../components/keySkillCard/KeySkillCard";
import home from "../../../assets/content";
import { useSelector } from "react-redux";
import UseIntersectionObserver from "../../../hooks/UseIntersectionObserver";

const WhyMe = () => {
  const [load, SetLoad] = useState(false);

  const sectionRef = UseIntersectionObserver(() => {
    SetLoad(true);
  });

  return (
    <div ref={sectionRef} className="bg-[#ECF9F9] py-24 overflow-hidden">
      <ContentWrapper>
        <div className=" ">
          <SectionTitle
            title={"Why Hire Me?"}
            subtitle={"Why Hire Me"}
            description={
              "Choose me for dedication, fresh perspectives, and a hunger to learn. I bring enthusiasm and a commitment to grow alongside your team"
            }
          />
          <div
            className={`flex gap-5 flex-wrap py-4 items-center justify-between w-full h-auto max-md:flex-col max-lg:justify-center max-lg:gap-20 my-8 transition-all duration-1000  ${
              load ? "translate-x-0" : "translate-x-[140%]"
            }`}
          >
            {home.WhyMe.map((item) => (
              <KeySkillCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default WhyMe;
