import React from "react";
import { Rocket, Award, Zap, GraduationCap } from "lucide-react";
import StatCard from "../StatCard";

const StatsSection: React.FC = () => {
  return (
    <section className="relative py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard
            icon={<Rocket className="w-6 h-6 text-orange-500" />}
            value="7+"
            label="Featured Projects"
            color="bg-gradient-to-br from-orange-500/20 to-orange-600/20"
          />
          <StatCard
            icon={<Award className="w-6 h-6 text-blue-500" />}
            value="1"
            label="Live Client Project"
            color="bg-gradient-to-br from-blue-500/20 to-blue-600/20"
          />
          <StatCard
            icon={<Zap className="w-6 h-6 text-purple-500" />}
            value="20+"
            label="Technologies"
            color="bg-gradient-to-br from-purple-500/20 to-purple-600/20"
          />
          <StatCard
            icon={<GraduationCap className="w-6 h-6 text-green-500" />}
            value="2026"
            label="Graduating Year"
            color="bg-gradient-to-br from-green-500/20 to-green-600/20"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
