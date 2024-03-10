import AboutSection from "./aboutSection/AboutSection";
import ContactSection from "./contactSection/ContactSection";
import Hero from "./hero/Hero";
import ProjectSection from "./projectSection/ProjectSection";
import Skills from "./skills/Skills";
import SocialLinks from "./socialLinks/SocialLinks";
import WhyMe from "./whyMe/WhyMe";
import WorkExperience from "./workExperience/WorkExperience";

const Home = () => {
  return (
    <>
      <Hero />
      <SocialLinks />
      <AboutSection />
      <Skills />
      <WorkExperience />
      <ProjectSection />
      <WhyMe />
      <ContactSection />
    </>
  );
};

export default Home;
