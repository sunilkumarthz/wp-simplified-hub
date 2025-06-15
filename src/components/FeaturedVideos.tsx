
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Play, Clock, Eye } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchLatestVideos, type Video } from '@/services/api';
import { decodeHtmlEntities } from '@/lib/htmlUtils';

const FeaturedVideos = () => {
  const { data: videos = [], isLoading, error } = useQuery({
    queryKey: ['featuredVideos'],
    queryFn: fetchLatestVideos,
  });

  console.log('FeaturedVideos - API Response:', { videos, isLoading, error });

  return (
    <section className="py-20 bg-slate-800/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-wp-teal/5 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-wp-blue/5 rounded-full blur-3xl floating-animation" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-baloo font-bold text-white mb-4">
            Featured <span className="text-gradient">Videos</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-roboto">
            Discover our most popular WordPress tutorials and step-by-step guides
          </p>
        </div>

        {isLoading && (
          <div className="text-center py-12">
            <div className="text-white font-roboto">Loading featured videos...</div>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <div className="text-red-400 font-roboto">Failed to load videos. Please try again later.</div>
          </div>
        )}

        {videos.length === 0 && !isLoading && !error && (
          <div className="text-center py-12">
            <div className="text-slate-400 font-roboto">No videos available.</div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {videos.slice(0, 6).map((video, index) => (
            <Card 
              key={video.id || index} 
              className="creative-card group overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={decodeHtmlEntities(video.title)}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a 
                      href={video.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-16 h-16 bg-wp-teal rounded-full flex items-center justify-center hover:scale-110 transition-transform pulse-glow"
                    >
                      <Play className="w-6 h-6 text-slate-900 ml-1" />
                    </a>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {video.duration || 'N/A'}
                  </div>
                  <div className="absolute top-2 left-2 bg-wp-teal text-slate-900 text-xs px-2 py-1 rounded font-semibold">
                    Tutorial
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-baloo font-semibold text-white text-lg mb-3 line-clamp-2">
                    {decodeHtmlEntities(video.title)}
                  </h3>
                  <p className="text-slate-300 font-roboto text-sm mb-4 line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between text-slate-400 text-sm">
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {video.views || 'N/A'} views
                    </span>
                    <span>{video.published_date || 'Recently'}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/videos">
            <Button size="lg" className="font-bold text-lg">
              View All Videos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideos;
