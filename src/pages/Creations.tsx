import { ShineBorder } from "@/components/ui/shine-border";
import { NavBarDemo } from "@/components/code.demo";

const Creations = () => {
  return (
    <>
      <NavBarDemo />
      <div className="min-h-screen w-full flex items-center justify-center bg-white">
        <ShineBorder
          className="text-center text-2xl font-bold text-neutral-800"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          Creations Page
        </ShineBorder>
      </div>
    </>
  );
};

export default Creations;
