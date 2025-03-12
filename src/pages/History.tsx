import React from "react";
import { TimelineDemo } from "@/components/TimelineDemo";
import { NavBarDemo } from "@/components/code.demo";
import { PageTransition } from "@/components/ui/page-transition";

const History = () => {
  return (
    <>
      <NavBarDemo />
      <PageTransition>
        <div className="min-h-screen w-full relative">
          <TimelineDemo />
        </div>
      </PageTransition>
    </>
  );
};

export default History;