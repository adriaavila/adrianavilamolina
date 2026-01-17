import {
  AboutSection,
  BlogSection,
  ContactSection,
  HeroSection,
  ProjectsSection,
} from "@/components/sections";

async function PortfolioContent() {
  return (
    <>
      <HeroSection />
      <AboutSection />

      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}

export default PortfolioContent;
