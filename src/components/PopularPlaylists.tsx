
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PopularPlaylists = () => {
  const playlists = [
    {
      id: 1,
      title: "Gutenberg Guide",
      description: "Master the WordPress block editor from basics to advanced techniques",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      videoCount: 15,
      duration: "4h 30m",
      difficulty: "Beginner"
    },
    {
      id: 2,
      title: "WooCommerce Setup",
      description: "Build a complete e-commerce store with WooCommerce",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      videoCount: 22,
      duration: "6h 45m",
      difficulty: "Intermediate"
    },
    {
      id: 3,
      title: "WordPress from Scratch",
      description: "Complete beginner's journey to WordPress mastery",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      videoCount: 35,
      duration: "12h 20m",
      difficulty: "Beginner"
    },
    {
      id: 4,
      title: "Custom Theme Development",
      description: "Learn to build WordPress themes from the ground up",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      videoCount: 18,
      duration: "8h 15m",
      difficulty: "Advanced"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-red-500';
      default: return 'bg-slate-500';
    }
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-baloo font-bold text-white mb-4">
            Popular <span className="text-gradient">Playlists</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Structured learning paths to take your WordPress skills to the next level
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {playlists.map((playlist, index) => (
            <Card 
              key={playlist.id} 
              className="bg-slate-800 border-slate-700 hover:border-wp-teal/50 transition-all duration-300 hover:scale-105 group overflow-hidden animate-slide-in-left"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="relative md:w-1/3">
                    <img 
                      src={playlist.thumbnail} 
                      alt={playlist.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-wp-teal rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                        </svg>
                      </div>
                    </div>
                    <div className={`absolute top-2 left-2 ${getDifficultyColor(playlist.difficulty)} text-white text-xs px-2 py-1 rounded font-semibold`}>
                      {playlist.difficulty}
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3 flex flex-col justify-between">
                    <div>
                      <h3 className="font-baloo font-bold text-white text-2xl mb-3">
                        {playlist.title}
                      </h3>
                      <p className="text-slate-300 mb-4 leading-relaxed">
                        {playlist.description}
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-slate-400 text-sm">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                          </svg>
                          {playlist.videoCount} videos
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          {playlist.duration}
                        </span>
                      </div>
                      <Button className="w-full bg-wp-teal hover:bg-wp-teal/90 text-slate-900 font-semibold">
                        Start Learning
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/playlists">
            <Button size="lg" variant="outline" className="border-wp-teal text-wp-teal hover:bg-wp-teal hover:text-slate-900 font-bold hover:scale-105 transition-all duration-200">
              View All Playlists
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularPlaylists;
