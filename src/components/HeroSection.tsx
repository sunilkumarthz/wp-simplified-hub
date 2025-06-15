
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Mic, ArrowDown, Sparkles } from 'lucide-react';
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
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 wp-gradient-dark"></div>
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-wp-teal to-blue-400 rounded-full blur-3xl animate-pulse floating-animation"></div>
        <div className="absolute bottom-32 right-16 w-56 h-56 bg-gradient-to-r from-purple-400 to-wp-teal rounded-full blur-3xl animate-pulse floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-wp-teal to-cyan-400 rounded-full blur-2xl animate-pulse floating-animation" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-400 to-wp-teal rounded-full blur-3xl animate-pulse floating-animation" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center relative z-10 px-4 py-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* Sparkles Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-wp-teal to-cyan-400 rounded-full mb-8 animate-pulse pulse-glow">
            <Sparkles className="w-10 h-10 text-slate-900" />
          </div>

          {/* Main Headline with Enhanced Typography */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-baloo font-bold text-white leading-tight mb-8 animate-fade-in">
            <span className="block">Simplifying</span>
            <span className="text-gradient block mb-2">WordPress</span>
            <span className="text-2xl sm:text-4xl lg:text-5xl font-roboto font-light text-slate-300">One Step at a Time</span>
          </h1>
          
          {/* Enhanced Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 font-roboto max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join WordPress creator <span className="text-gradient font-semibold">Sunil Kumar Sharma</span> on a journey through tutorials, insights, and expert guidance.
          </p>
          
          {/* CTA Button with Enhanced Design */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              onClick={scrollToVideos}
              className="btn-creative text-slate-900 font-bold text-xl px-12 py-6 shadow-2xl"
            >
              Start Learning
              <ArrowDown className="w-5 h-5 ml-2 animate-bounce" />
            </Button>
          </div>

          {/* Featured Content Section */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-2xl sm:text-3xl font-baloo font-bold text-white mb-8">
              Featured <span className="text-gradient">Content</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Featured Video */}
              {latestVideo && (
                <Card className="creative-card bg-slate-800/30 border-slate-700/50 group">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-xl">
                      <img 
                        src={latestVideo.thumbnail} 
                        alt={decodeHtmlEntities(latestVideo.title)}
                        className="w-full h-64 sm:h-72 object-cover transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <a 
                          href={latestVideo.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="icon-btn pulse-glow"
                        >
                          <Play className="w-8 h-8 text-slate-900 ml-1" />
                        </a>
                      </div>
                      <div className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center">
                        <Play className="w-3 h-3 mr-1" />
                        LATEST VIDEO
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="font-baloo font-bold text-white text-xl sm:text-2xl mb-4 line-clamp-2 leading-tight">
                        {decodeHtmlEntities(latestVideo.title)}
                      </h3>
                      <a 
                        href={latestVideo.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="no-link-styles"
                      >
                        <Button className="w-full font-semibold text-lg py-3">
                          Watch Now
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Featured Podcast */}
              {latestPodcast && (
                <Card className="creative-card bg-slate-800/30 border-slate-700/50 group">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-xl">
                      <img 
                        src={latestPodcast.thumbnail} 
                        alt={decodeHtmlEntities(latestPodcast.title)}
                        className="w-full h-64 sm:h-72 object-cover transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <a 
                          href={latestPodcast.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="icon-btn pulse-glow"
                        >
                          <Mic className="w-8 h-8 text-slate-900" />
                        </a>
                      </div>
                      <div className="absolute top-4 left-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center">
                        <Mic className="w-3 h-3 mr-1" />
                        LATEST PODCAST
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="font-baloo font-bold text-white text-xl sm:text-2xl mb-4 line-clamp-2 leading-tight">
                        {decodeHtmlEntities(latestPodcast.title)}
                      </h3>
                      <a 
                        href={latestPodcast.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="no-link-styles"
                      >
                        <Button className="w-full font-semibold text-lg py-3">
                          Listen Now
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-wp-teal rounded-full flex justify-center">
          <div className="w-1 h-3 bg-wp-teal rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
