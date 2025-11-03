import React from "react";
import { Code, ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  featured,
}) => (
  <div
    className={`bg-gradient-to-br from-gray-800/60 to-gray-900/60 border ${
      featured ? "border-orange-500/50" : "border-gray-700"
    } rounded-xl p-6 hover:border-orange-500 transition-all duration-300 
    group relative overflow-hidden`}
  >
    {featured && (
      <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs px-3 py-1 rounded-bl-lg font-semibold">
        Featured
      </div>
    )}
    <div className="flex items-start justify-between mb-4">
      <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg flex items-center justify-center">
        <Code className="w-6 h-6 text-orange-500" />
      </div>
      <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-orange-500 transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {techStack.slice(0, 4).map((tech, idx) => (
        <span
          key={idx}
          className="text-xs bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full"
        >
          {tech}
        </span>
      ))}
      {techStack.length > 4 && (
        <span className="text-xs bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full">
          +{techStack.length - 4} more
        </span>
      )}
    </div>
    <div className="flex gap-3">
      <a
        href={githubUrl ?? "https://github.com/Manish-1010-ark"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-orange-500 hover:text-orange-400 text-sm font-medium transition-colors"
      >
        <Github className="w-4 h-4" />
        Code
      </a>
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-orange-500 hover:text-orange-400 text-sm font-medium transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Live Demo
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;
