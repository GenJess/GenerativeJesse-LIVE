
import { SplineSceneBasic, NavBarDemo } from "@/components/code.demo";

const Index = () => {
  return (
    <>
      <NavBarDemo />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-6xl px-4">
          <SplineSceneBasic />
        </div>
      </div>
    </>
  );
};

export default Index;
