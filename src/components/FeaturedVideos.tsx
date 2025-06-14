
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FeaturedVideos = () => {
  const videos = [
    {
      id: 1,
      title: "WordPress Gutenberg Complete Guide 2024",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      duration: "45:32",
      views: "12K",
      category: "Tutorial"
    },
    {
      id: 2,
      title: "WooCommerce Setup from Scratch",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      duration: "32:15",
      views: "8.5K",
      category: "E-commerce"
    },
    {
      id: 3,
      title: "WordPress Security Best Practices",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      duration: "28:44",
      views: "15K",
      category: "Security"
    },
    {
      id: 4,
      title: "Custom Theme Development",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      duration: "52:18",
      views: "9.2K",
      category: "Development"
    },
    {
      id: 5,
      title: "WordPress Performance Optimization",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      duration: "38:27",
      views: "11K",
      category: "Performance"
    },
    {
      id: 6,
      title: "Plugin Development Masterclass",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      duration: "65:33",
      views: "7.8K",
      category: "Development"
    }
  ];

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-baloo font-bold text-white mb-4">
            Featured <span className="text-gradient">Videos</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Discover our most popular WordPress tutorials and step-by-step guides
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {videos.map((video, index) => (
            <Card 
              key={video.id} 
              className="bg-slate-800 border-slate-700 hover:border-wp-teal/50 transition-all duration-300 hover:scale-105 group overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-wp-teal rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-slate-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2 bg-wp-teal text-slate-900 text-xs px-2 py-1 rounded font-semibold">
                    {video.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-baloo font-semibold text-white text-lg mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between text-slate-400 text-sm">
                    <span>{video.views} views</span>
                    <span>2 days ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/videos">
            <Button size="lg" className="wp-gradient text-slate-900 font-bold hover:scale-105 transition-transform duration-200">
              View All Videos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideos;
