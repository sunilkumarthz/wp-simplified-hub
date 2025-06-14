
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Playlists = () => {
  const playlists = [
    {
      id: 1,
      title: "WordPress for Beginners",
      description: "Complete guide to getting started with WordPress from absolute zero",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      videoCount: 25,
      duration: "8h 30m",
      difficulty: "Beginner",
      topics: ["Installation", "Dashboard", "Posts & Pages", "Media", "Users"]
    },
    {
      id: 2,
      title: "Gutenberg Mastery",
      description: "Master the WordPress block editor with advanced techniques and custom blocks",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      videoCount: 18,
      duration: "6h 15m",
      difficulty: "Intermediate",
      topics: ["Block Editor", "Custom Blocks", "Patterns", "FSE", "Block Development"]
    },
    {
      id: 3,
      title: "WooCommerce Complete",
      description: "Build professional e-commerce stores with WooCommerce",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      videoCount: 30,
      duration: "12h 45m",
      difficulty: "Intermediate",
      topics: ["Store Setup", "Products", "Payment", "Shipping", "Marketing"]
    },
    {
      id: 4,
      title: "Theme Development",
      description: "Create custom WordPress themes from scratch",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      videoCount: 22,
      duration: "10h 20m",
      difficulty: "Advanced",
      topics: ["PHP", "Template Hierarchy", "Custom Fields", "Hooks", "Child Themes"]
    },
    {
      id: 5,
      title: "Plugin Development",
      description: "Learn to build WordPress plugins and extend functionality",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      videoCount: 20,
      duration: "9h 10m",
      difficulty: "Advanced",
      topics: ["Plugin Structure", "Hooks", "Database", "Admin Pages", "Security"]
    },
    {
      id: 6,
      title: "WordPress Security",
      description: "Secure your WordPress sites against threats and vulnerabilities",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      videoCount: 15,
      duration: "5h 30m",
      difficulty: "Intermediate",
      topics: ["Security Plugins", "Backups", "SSL", "User Management", "Monitoring"]
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
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-baloo font-bold text-white mb-6">
            WordPress <span className="text-gradient">Playlists</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Structured learning paths designed to take you from beginner to WordPress expert. 
            Each playlist is carefully curated to build your skills progressively.
          </p>
        </div>
      </section>

      {/* Playlists Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {playlists.map((playlist, index) => (
              <Card 
                key={playlist.id} 
                className="bg-slate-800 border-slate-700 hover:border-wp-teal/50 transition-all duration-300 hover:scale-[1.02] group overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative md:w-2/5">
                      <img 
                        src={playlist.thumbnail} 
                        alt={playlist.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-wp-teal rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                      <div className={`absolute top-4 left-4 ${getDifficultyColor(playlist.difficulty)} text-white text-sm px-3 py-1 rounded-full font-semibold`}>
                        {playlist.difficulty}
                      </div>
                    </div>
                    
                    <div className="p-6 md:w-3/5 flex flex-col justify-between">
                      <div>
                        <h3 className="font-baloo font-bold text-white text-2xl mb-3">
                          {playlist.title}
                        </h3>
                        <p className="text-slate-300 mb-4 leading-relaxed">
                          {playlist.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-slate-400 text-sm mb-4">
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

                        <div className="mb-4">
                          <h4 className="font-semibold text-white text-sm mb-2">Topics Covered:</h4>
                          <div className="flex flex-wrap gap-2">
                            {playlist.topics.map((topic, topicIndex) => (
                              <span 
                                key={topicIndex}
                                className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-wp-teal hover:bg-wp-teal/90 text-slate-900 font-semibold">
                        Start Learning
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Playlists;
