import React from "react";

interface TechIconProps {
  name: string;
  color: string;
}

const TechIcon: React.FC<TechIconProps> = ({ name, color }) => (
  <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-5 flex flex-col items-center justify-center hover:border-orange-500 hover:bg-gray-800/70 transition-all duration-300 group">
    <div
      className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-3 
      group-hover:scale-110 transition-transform`}
    >
      <span className="text-2xl font-bold text-white">{name.charAt(0)}</span>
    </div>
    <span className="text-gray-300 text-sm font-medium text-center">
      {name}
    </span>
  </div>
);

export default TechIcon;
