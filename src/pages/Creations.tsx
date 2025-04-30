import React from "react";
import { NavBarDemo } from "@/components/code.demo";
import { PageTransition } from "@/components/ui/page-transition";
import { ProjectCard } from "@/components/ui/project-card"; // Import ProjectCard

const Creations = () => {
  // Creative projects data will go here
  const creativeProjects = [
    {
      id: 1,
      title: "3D Development and ThreeJS Exploration",
      description: "Experiments with 3D modeling, Three.js, and interactive web visuals.",
      tags: ["3D", "Three.js", "WebGL"], // Add relevant tags
      imageUrl: "placeholder_3d_image_url", // Add placeholder image URL
    },
    {
      id: 2,
      title: "AI-Generated Short Movies",
      description: "Short films created using AI tools like Midjourney and fal.ai.",
      tags: ["AI", "Filmmaking", "Midjourney", "fal.ai"], // Add relevant tags
      imageUrl: "placeholder_movie_image_url", // Add placeholder image URL
    },
    {
      id: 3,
      title: "AI-Generated Music",
      description: "Songs and audio pieces produced using AI music generation platforms like Sumo.",
      tags: ["AI", "Music Generation", "Sumo"], // Add relevant tags
      imageUrl: "placeholder_music_image_url", // Add placeholder image URL
    },
  ];

  return (
    <>
      <NavBarDemo />
      <PageTransition>
        <div className="min-h-screen w-full bg-zinc-900 text-white pt-20 pb-10 flex justify-center items-center">
          <div className="w-full max-w-screen-xl h-full p-4">
            <h1 className="text-4xl font-bold text-center mb-8">Creations</h1>
            {/* Content for creations will go here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Add a grid layout */}
              {creativeProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  imageUrl={project.imageUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </PageTransition>
    </>
  );
};

export default Creations;
