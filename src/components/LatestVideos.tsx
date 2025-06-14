
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchLatestVideos } from '@/services/api';

const LatestVideos = () => {
  const { data: videos = [], isLoading } = useQuery({
    queryKey: ['latestVideos'],
    queryFn: fetchLatestVideos,
  });

  return (
    <section id="latest-videos" className="py-20">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-baloo font-bold text-white">
          Latest <span className="text-gradient">Videos</span>
        </h2>
        <Link to="/videos">
          <Button variant="outline">View All Videos</Button>
        </Link>
      </div>

      {isLoading ? (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-wp-teal/20 rounded-full mb-4">
            <div className="w-8 h-8 border-4 border-wp-teal border-t-transparent rounded-full animate-spin"></div>
          </div>
          <div className="text-white font-roboto text-lg">Loading videos...</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.slice(0, 3).map((video, index) => (
            <Card key={video.id || index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={video.videourl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-16 h-16 bg-wp-teal rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Play className="w-6 h-6 text-slate-900 ml-1" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-baloo font-semibold text-white text-lg mb-4 line-clamp-2">
                    {video.title}
                  </h3>
                  <a 
                    href={video.videourl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="no-link-styles"
                  >
                    <Button className="w-full font-semibold">
                      Watch Now
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
};

export default LatestVideos;
