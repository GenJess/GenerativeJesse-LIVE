
import { ShineBorder } from "@/components/ui/shine-border";
import { NavBarDemo } from "@/components/code.demo";

const About = () => {
  return (
    <>
      <NavBarDemo />
      <div className="min-h-screen w-full bg-black/[0.96] flex items-center justify-center">
        <ShineBorder
          className="text-center text-2xl font-bold"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          About Page
        </ShineBorder>
      </div>
    </>
  );
};

export default About;
