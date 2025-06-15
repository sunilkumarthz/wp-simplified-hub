
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchAllShorts, type Short } from '@/services/api';

const ShortsGallery = () => {
  const { data: shorts = [], isLoading, error } = useQuery({
    queryKey: ['shortsGallery'],
    queryFn: fetchAllShorts,
  });

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-10 left-1/4 w-56 h-56 bg-red-500/5 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-wp-teal/5 rounded-full blur-3xl floating-animation" style={{ animationDelay: '4s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-baloo font-bold text-white mb-4">
            Latest <span className="text-gradient">Shorts</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-roboto">
            Quick tips and tricks to level up your WordPress skills in under a minute
          </p>
        </div>

        {isLoading && (
          <div className="text-center py-12">
            <div className="text-white font-roboto">Loading shorts...</div>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <div className="text-red-400 font-roboto">Failed to load shorts. Please try again later.</div>
          </div>
        )}

        {shorts.length === 0 && !isLoading && !error && (
          <div className="text-center py-12">
            <div className="text-slate-400 font-roboto">No shorts available.</div>
          </div>
        )}

        {/* Mobile-first TikTok/YouTube Shorts style layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {shorts.slice(0, 4).map((short, index) => (
            <Card 
              key={short.id || index} 
              className="bg-slate-800/50 hover:bg-slate-800/70 transition-all duration-300 group overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative aspect-[9/16]">
                  <img 
                    src={short.thumbnail} 
                    alt={short.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={short.videourl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-wp-teal rounded-full flex items-center justify-center pulse-glow hover:scale-110 transition-transform"
                    >
                      <Play className="w-5 h-5 text-slate-900 ml-0.5" />
                    </a>
                  </div>
                  {short.duration && (
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {short.duration}
                    </div>
                  )}
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded font-semibold">
                    SHORTS
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-baloo font-semibold text-white text-sm mb-1 line-clamp-2">
                    {short.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/shorts">
            <Button size="lg" className="font-bold text-lg">
              View All Shorts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShortsGallery;
