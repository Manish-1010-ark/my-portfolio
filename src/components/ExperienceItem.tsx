import React from "react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  period,
  description,
}) => (
  <div className="border-l-2 border-orange-500/30 pl-6 pb-8 last:pb-0 relative">
    <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-500 rounded-full border-4 border-gray-900"></div>
    <div className="text-orange-500 text-sm font-semibold mb-1">{period}</div>
    <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
    <div className="text-gray-400 mb-3">{company}</div>
    <ul className="space-y-2">
      {description.map((item, idx) => (
        <li key={idx} className="text-gray-400 text-sm flex items-start">
          <span className="text-orange-500 mr-2">▸</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ExperienceItem;
