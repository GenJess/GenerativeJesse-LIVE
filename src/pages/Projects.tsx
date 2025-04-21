import { NavBarDemo } from "@/components/code.demo";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";

const Projects = () => {
  return (
    <>
      <NavBarDemo />
      <div className="min-h-screen w-full bg-white dark:bg-black">
        <FeaturesSectionWithHoverEffects />
      </div>
    </>
  );
};

export default Projects;
