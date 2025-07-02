
import { Card, CardContent } from '@/components/ui/card';

const BadgesSection = () => {
  const badges = [
    {
      title: "WordCamp Organizer",
      description: "Organized WordCamp Bengaluru 2023",
      icon: "🎯",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "WordCamp Speaker",
      description: "Speaker at multiple WordCamps",
      icon: "🎤",
      color: "from-wp-teal to-cyan-500"
    },
    {
      title: "Plugin Developer",
      description: "Contributed WordPress plugins",
      icon: "🔧",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Translation Contributor",
      description: "WordPress localization efforts",
      icon: "🌍",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Meetup Organizer",
      description: "WordPress meetup community leader",
      icon: "👥",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Photo Contributor",
      description: "WordCamp photography volunteer",
      icon: "📸",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-baloo font-bold text-white mb-4">
            Badges & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Recognition for contributions to the WordPress community and
            ecosystem
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mx-auto">
          {badges.map((badge, index) => (
            <Card
              key={index}
              className="bg-slate-800 border-slate-700 hover:border-wp-teal/50 transition-all duration-300 hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-4 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${badge.color} flex items-center justify-center text-3xl transform group-hover:scale-110 transition-transform duration-300`}
                >
                  {badge.icon}
                </div>

                <h3 className="font-baloo font-bold text-white text-md mb-2">
                  {badge.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {badge.description}
                </p>

                <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-wp-teal to-transparent"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 text-lg">
            Continuing to contribute and grow with the WordPress community 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default BadgesSection;
