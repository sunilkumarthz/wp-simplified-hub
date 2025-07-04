
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Mic } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchAllPodcasts } from '@/services/api';
import { decodeHtmlEntities } from '@/lib/htmlUtils';

const LatestPodcasts = () => {
  const { data: podcasts = [], isLoading } = useQuery({
    queryKey: ['latestPodcasts'],
    queryFn: fetchAllPodcasts,
  });

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-baloo font-bold text-white">
            Latest <span className="text-gradient">Podcasts</span>
          </h2>
          <Link to="/podcasts">
            <Button variant="outline">View All Podcasts</Button>
          </Link>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-wp-teal/20 rounded-full mb-4">
              <div className="w-8 h-8 border-4 border-wp-teal border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="text-white font-roboto text-lg">
              Loading podcasts...
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {podcasts.slice(0, 3).map((podcast, index) => (
              <Card
                key={podcast.id || index}
                className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={podcast.thumbnail}
                      alt={decodeHtmlEntities(podcast.title)}
                      className="w-full h-auto object-fit rounded-t-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={podcast.videourl}
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
                      {decodeHtmlEntities(podcast.title)}
                    </h3>
                    <a
                      href={podcast.videourl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-link-styles"
                    >
                      <Button variant="solid" className="w-full">
                        Listen Now
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default LatestPodcasts;
