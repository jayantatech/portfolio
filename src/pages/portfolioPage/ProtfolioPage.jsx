import React from "react";
import ProjectHero from "./projectHero/ProjectHero";
import ProjectInfo from "./projectInfo/ProjectInfo";
import ContactSection from "../home/contactSection/ContactSection";
import { useParams } from "react-router-dom";
import { projectSection } from "../../assets/content";

const ProtfolioPage = () => {
  const { title } = useParams();
  const currentProect = projectSection.filter((data) => data.site === title);
  // console.log(currentProect[0]);

  const newData = currentProect[0];

  return (
    <>
      <ProjectHero data={newData} />
      <ProjectInfo data={newData} />
      <ContactSection data={newData} />
    </>
  );
};

export default ProtfolioPage;
