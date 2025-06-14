
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Play, Clock } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchAllShorts } from '@/services/api';

const LatestShorts = () => {
  const { data: shorts = [], isLoading } = useQuery({
    queryKey: ['latestShorts'],
    queryFn: fetchAllShorts,
  });

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-baloo font-bold text-white">
            Latest <span className="text-gradient">Shorts</span>
          </h2>
          <Link to="/shorts">
            <Button variant="outline">View All Shorts</Button>
          </Link>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-wp-teal/20 rounded-full mb-4">
              <div className="w-8 h-8 border-4 border-wp-teal border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="text-white font-roboto text-lg">Loading shorts...</div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {shorts.slice(0, 4).map((short, index) => (
              <Card 
                key={short.id || index} 
                className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-[9/16]">
                    <img 
                      src={short.thumbnail} 
                      alt={short.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a 
                        href={short.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-wp-teal rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg pulse-glow"
                      >
                        <Play className="w-5 h-5 text-slate-900 ml-0.5" />
                      </a>
                    </div>
                    
                    {/* Duration Badge */}
                    {short.duration && (
                      <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-white text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {short.duration}
                      </div>
                    )}
                    
                    {/* SHORTS Badge */}
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded font-semibold">
                      SHORTS
                    </div>
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3">
                      <h3 className="text-white font-roboto font-medium text-sm line-clamp-2 leading-tight">
                        {short.title}
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestShorts;
