import { Eye, Clock, Users, VideoIcon } from 'lucide-react';

interface ShortsStatsBarProps {
  totalViews: string;
  totalDuration: string;
  subscriberGrowth: string;
}

const ShortsStatsBar = ({ totalViews, totalDuration, subscriberGrowth }: ShortsStatsBarProps) => {
  const stats = [
    {
      icon: VideoIcon,
      label: 'Total Shorts',
      value: '150+',
      color: 'text-blue-500'
    },
    {
      icon: Eye,
      label: 'Total Views',
      value: totalViews,
      color: 'text-green-500'
    },
    {
      icon: Clock,
      label: 'Watch Time',
      value: totalDuration,
      color: 'text-purple-500'
    },
    {
      icon: Users,
      label: 'Growth Rate',
      value: subscriberGrowth,
      color: 'text-orange-500'
    }
  ];

  return (
    <div className="bg-card/50 border border-border/50 rounded-xl p-6 mb-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="text-center">
              <div className={`w-12 h-12 mx-auto rounded-full bg-muted/50 flex items-center justify-center mb-3`}>
                <IconComponent className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShortsStatsBar;