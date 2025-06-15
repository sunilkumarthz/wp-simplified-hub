
import { Video, Users, BookOpen, TrendingUp } from 'lucide-react';

const HeroStats = () => {
  const stats = [
    { icon: Video, label: "Videos", value: "100+" },
    { icon: Users, label: "Students", value: "50K+" },
    { icon: BookOpen, label: "Playlists", value: "25+" },
    { icon: TrendingUp, label: "Growth", value: "Weekly" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
      {stats.map((stat, index) => (
        <div key={index} className="group">
          <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:border-wp-teal/40 transition-all duration-300 hover:scale-105">
            <stat.icon className="w-6 h-6 text-wp-teal mx-auto mb-2" />
            <div className="text-xl font-baloo font-bold text-white mb-1">{stat.value}</div>
            <div className="text-xs text-slate-400 font-roboto">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;
