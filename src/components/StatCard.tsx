import React from "react";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, color }) => (
  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300">
    <div
      className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4`}
    >
      {icon}
    </div>
    <div className="text-3xl font-bold text-white mb-2">{value}</div>
    <div className="text-gray-400 text-sm">{label}</div>
  </div>
);

export default StatCard;