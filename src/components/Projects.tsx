import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "./ProjectCard";

const filters = ["All", "Practical Events", "All projects", "Video lecture", "Art Development"];

const projects = [
  {
    title: "Neural Network Visualizer",
    description: "An interactive tool to visualize neural network architectures and training processes in real-time.",
    tags: ["Deep Learning", "Visualization", "Python"],
  },
  {
    title: "Neural Network Visualizer",
    description: "An interactive tool to visualize neural network architectures and training processes in real-time.",
    tags: ["Deep Learning", "Visualization", "Python"],
  },
  {
    title: "Neural Network Visualizer",
    description: "An interactive tool to visualize neural network architectures and training processes in real-time.",
    tags: ["Deep Learning", "Visualization", "Python"],
  },
  {
    title: "Neural Network Visualizer",
    description: "An interactive tool to visualize neural network architectures and training processes in real-time.",
    tags: ["Deep Learning", "Visualization", "Python"],
  },
  {
    title: "Neural Network Visualizer",
    description: "An interactive tool to visualize neural network architectures and training processes in real-time.",
    tags: ["Deep Learning", "Visualization", "Python"],
  },
  {
    title: "Neural Network Visualizer",
    description: "An interactive tool to visualize neural network architectures and training processes in real-time.",
    tags: ["Deep Learning", "Visualization", "Python"],
  },
];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="rounded-full"
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
