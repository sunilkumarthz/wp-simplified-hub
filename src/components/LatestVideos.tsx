
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Play, ArrowRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchLatestVideos } from '@/services/api';
import { decodeHtmlEntities } from '@/lib/htmlUtils';

const LatestVideos = () => {
  const { data: videos = [], isLoading } = useQuery({
    queryKey: ['latestVideos'],
    queryFn: fetchLatestVideos,
  });

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-10 lg:mb-12 gap-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-baloo font-bold text-white">
            Latest <span className="text-gradient">Videos</span>
          </h2>
          <Link to="/videos">
            <Button
              variant="outline"
            >
              View All Videos
            </Button>
          </Link>
        </div>

        {isLoading ? (
          <div className="text-center py-8 sm:py-12">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-wp-teal/20 rounded-full mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 border-4 border-wp-teal border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="text-white font-roboto text-base sm:text-lg">
              Loading videos...
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {videos.slice(0, 3).map((video, index) => (
              <Card
                key={video.id || index}
                className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={decodeHtmlEntities(video.title)}
                      className="w-full h-auto object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={video.videourl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 sm:w-16 sm:h-16 bg-wp-teal rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <Play className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900 ml-1" />
                      </a>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="font-baloo font-semibold text-white text-base sm:text-lg mb-3 sm:mb-4 line-clamp-2">
                      {decodeHtmlEntities(video.title)}
                    </h3>
                    <a
                      href={video.videourl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-link-styles"
                    >
                      <Button variant="solid" className="w-full">
                        <Play className="w-4 h-4 group-hover/btn:scale-125 transition-transform" />
                        Watch Now
                        <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
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

export default LatestVideos;
