import React, { useEffect, useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import ProjectBar from "../../../components/projectBar/ProjectBar";
import UseIntersectionObserver from "../../../hooks/UseIntersectionObserver";
import { projectSection } from "../../../assets/content";
projectSection;

const ProjectSection = () => {
  const [load, SetLoad] = useState(false);

  const sectionRef = UseIntersectionObserver(() => {
    SetLoad(true);
  });
  return (
    <div
      id="Projects"
      ref={sectionRef}
      classNameName=" py-4 xl:my-20 md:my-10 overflow-hidden"
    >
      <ContentWrapper>
        <SectionTitle
          title="Projects"
          subtitle="My Projects"
          description="Explore my diverse portfolio encompassing personal and freelance client projects showcasing my expertise in web development and design."
        />
        <div
          classNameName={`flex items-center justify-evenly gap-4 py-8 flex-wrap transition-all duration-1000 ${
            load ? "translate-x-0" : "translate-x-[-140%]"
          }`}
        >
          {projectSection.map((item) => (
            <ProjectBar key={item.title} item={item} />
          ))}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default ProjectSection;
