import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  skills,
}) => (
  <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700 rounded-xl p-8 hover:bg-gray-800/60 hover:border-orange-500/50 transition-all duration-300 group">
    <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, idx) => (
        <span
          key={idx}
          className="text-xs text-orange-400 bg-orange-500/10 px-2 py-1 rounded"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default ServiceCard;
