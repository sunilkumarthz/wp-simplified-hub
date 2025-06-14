
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Mic } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchAllPodcasts } from '@/services/api';

const LatestPodcastsSection = () => {
  const { data: podcasts = [] } = useQuery({
    queryKey: ['latestPodcasts'],
    queryFn: fetchAllPodcasts,
  });

  return (
    <section className="mb-20">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-baloo font-bold text-white">
          Latest <span className="text-gradient">Podcasts</span>
        </h2>
        <Link to="/podcasts">
          <Button variant="outline">View All Podcasts</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {podcasts.slice(0, 3).map((podcast, index) => (
          <Card key={podcast.id || index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src={podcast.thumbnail} 
                  alt={podcast.title}
                  className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={podcast.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-wp-teal rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Mic className="w-6 h-6 text-slate-900" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-baloo font-semibold text-white text-lg mb-3 line-clamp-2">
                  {podcast.title}
                </h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LatestPodcastsSection;
