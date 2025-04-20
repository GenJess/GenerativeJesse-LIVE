import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  className?: string;
}

export const ProjectCard = ({ title, description, tags, imageUrl, className }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(
        "group relative overflow-hidden rounded-lg bg-black/50 border border-white/10 p-6 backdrop-blur-sm",
        className
      )}
    >
      {imageUrl && (
        <div className="absolute inset-0 z-0 opacity-50 group-hover:opacity-70 transition-opacity">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-white/10 text-white rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
