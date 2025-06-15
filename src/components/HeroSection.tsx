
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Mic } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchLatestVideos, fetchAllPodcasts } from '@/services/api';
import { decodeHtmlEntities } from '@/lib/htmlUtils';

const HeroSection = () => {
  const { data: videos = [] } = useQuery({
    queryKey: ['latestVideos'],
    queryFn: fetchLatestVideos,
  });

  const { data: podcasts = [] } = useQuery({
    queryKey: ['latestPodcasts'],
    queryFn: fetchAllPodcasts,
  });

  const scrollToVideos = () => {
    const videosSection = document.getElementById('latest-videos');
    if (videosSection) {
      videosSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const latestVideo = videos[0];
  const latestPodcast = podcasts[0];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 wp-gradient-dark"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-wp-teal rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-wp-blue rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-wp-teal/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="text-center relative z-10 max-w-7xl mx-auto px-4">
        <div className="space-y-8 animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-baloo font-bold text-white leading-tight">
            Simplifying WordPress, <span className="text-gradient">One Step at a Time</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 font-roboto max-w-3xl mx-auto leading-relaxed">
            Explore videos, playlists, and podcasts from WordPress creator Sunil Kumar Sharma.
          </p>
          
          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              size="lg" 
              onClick={scrollToVideos}
              className="wp-gradient text-slate-900 font-bold text-lg px-8 py-4 hover:scale-105 transition-transform duration-200"
            >
              Explore Now
            </Button>
          </div>

          {/* Latest Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 max-w-4xl mx-auto">
            {/* Latest Video */}
            {latestVideo && (
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={latestVideo.thumbnail} 
                      alt={decodeHtmlEntities(latestVideo.title)}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a 
                        href={latestVideo.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-16 h-16 bg-wp-teal rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <Play className="w-6 h-6 text-slate-900 ml-1" />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-wp-teal text-sm font-semibold mb-2">Latest Video</div>
                    <h3 className="font-baloo font-semibold text-white text-lg line-clamp-2">
                      {decodeHtmlEntities(latestVideo.title)}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Latest Podcast */}
            {latestPodcast && (
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={latestPodcast.thumbnail} 
                      alt={decodeHtmlEntities(latestPodcast.title)}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a 
                        href={latestPodcast.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-16 h-16 bg-wp-teal rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <Mic className="w-6 h-6 text-slate-900" />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-wp-teal text-sm font-semibold mb-2">Latest Podcast</div>
                    <h3 className="font-baloo font-semibold text-white text-lg line-clamp-2">
                      {decodeHtmlEntities(latestPodcast.title)}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
