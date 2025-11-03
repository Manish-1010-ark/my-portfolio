import React from "react";
import TechIcon from "../TechIcon";

const TechnologiesSection: React.FC = () => {
  const technologies = [
    { name: "React", color: "bg-blue-500/60" },
    { name: "Flask", color: "bg-gray-700/60" },
    { name: "PostgreSQL", color: "bg-sky-600/60" },
    { name: "Kotlin", color: "bg-orange-500/60" },
    { name: "Docker", color: "bg-sky-700/60" },
    { name: "Tailwind", color: "bg-cyan-500/60" },
    { name: "Node.js", color: "bg-lime-600/60" },
    { name: "Supabase", color: "bg-indigo-600/60" },
    { name: "Socket.IO", color: "bg-gray-800/60" },
    { name: "Express", color: "bg-yellow-600/60" },
    { name: "Liveblocks", color: "bg-purple-600/60" },
    { name: "PeerJS", color: "bg-teal-600/60" },
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technology{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies for building
            scalable, production-ready applications
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, idx) => (
            <TechIcon key={idx} name={tech.name} color={tech.color} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
