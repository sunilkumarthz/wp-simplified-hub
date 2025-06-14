
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ShortsGallery = () => {
  const shorts = [
    {
      id: 1,
      title: "WordPress in 60 Seconds",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=600&fit=crop",
      duration: "0:58",
      views: "25K"
    },
    {
      id: 2,
      title: "Quick Plugin Install",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=600&fit=crop",
      duration: "0:45",
      views: "18K"
    },
    {
      id: 3,
      title: "Gutenberg Block Trick",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=600&fit=crop",
      duration: "0:52",
      views: "31K"
    },
    {
      id: 4,
      title: "CSS Quick Fix",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=600&fit=crop",
      duration: "0:38",
      views: "22K"
    },
    {
      id: 5,
      title: "Security Tip",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=600&fit=crop",
      duration: "0:55",
      views: "15K"
    },
    {
      id: 6,
      title: "Performance Hack",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop",
      duration: "0:48",
      views: "28K"
    },
    {
      id: 7,
      title: "Theme Customization",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=600&fit=crop",
      duration: "0:59",
      views: "19K"
    },
    {
      id: 8,
      title: "WooCommerce Tip",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=600&fit=crop",
      duration: "0:43",
      views: "24K"
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-baloo font-bold text-white mb-4">
            WordPress <span className="text-gradient">Shorts</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Quick tips and tricks to level up your WordPress skills in under a minute
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {shorts.map((short, index) => (
            <Card 
              key={short.id} 
              className="bg-slate-800 border-slate-700 hover:border-wp-teal/50 transition-all duration-300 hover:scale-105 group overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative aspect-[9/16]">
                  <img 
                    src={short.thumbnail} 
                    alt={short.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-wp-teal rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-slate-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {short.duration}
                  </div>
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded font-semibold">
                    SHORTS
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-baloo font-semibold text-white text-sm mb-1 line-clamp-2">
                    {short.title}
                  </h3>
                  <div className="text-slate-400 text-xs">
                    {short.views} views
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/shorts">
            <Button size="lg" className="wp-gradient text-slate-900 font-bold hover:scale-105 transition-transform duration-200">
              View All Shorts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShortsGallery;
