import { ShineBorder } from "@/components/ui/shine-border";
import { NavBarDemo } from "@/components/code.demo";

const Resume = () => {
  return (
    <>
      <NavBarDemo />
      <div className="min-h-screen w-full flex items-center justify-center" style={{ backgroundColor: "black" }}>
        <ShineBorder
          className="text-center text-2xl font-bold"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          Resume Page
        </ShineBorder>
      </div>
    </>
  );
};

export default Resume;
