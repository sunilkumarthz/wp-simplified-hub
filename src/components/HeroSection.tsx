
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Mic, ArrowDown, Star, Users, Video } from 'lucide-react';
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
    <section className="relative min-h-screen bg-slate-900 overflow-hidden">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-wp-teal/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-wp-teal/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-wp-teal/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(4,217,139,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(4,217,139,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Column - Hero Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-wp-teal/20 rounded-full px-4 py-2 text-sm text-wp-teal">
              <Star className="w-4 h-4" />
              WordPress Expert & Creator
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-baloo font-bold text-white leading-tight">
                Master
                <span className="block text-gradient">WordPress</span>
                <span className="text-3xl lg:text-4xl font-roboto font-light text-slate-300 block mt-2">
                  with Sunil Kumar Sharma
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
              Dive into comprehensive tutorials, expert insights, and practical guides that will transform your WordPress journey from beginner to pro.
            </p>

            {/* Stats */}
            <div className="flex gap-8 py-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-sm text-slate-400">Videos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-sm text-slate-400">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">25+</div>
                <div className="text-sm text-slate-400">Playlists</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={scrollToVideos}
                className="bg-gradient-to-r from-wp-teal to-cyan-400 hover:from-cyan-400 hover:to-wp-teal text-slate-900 font-bold text-lg px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Start Learning
                <ArrowDown className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-wp-teal text-wp-teal hover:bg-wp-teal hover:text-slate-900 font-semibold text-lg px-8 py-6 rounded-2xl"
              >
                <Video className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Column - Featured Content */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            
            {/* Section Header */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-baloo font-bold text-white mb-2">
                Latest <span className="text-gradient">Content</span>
              </h2>
              <p className="text-slate-400">Fresh tutorials and insights</p>
            </div>

            <div className="grid gap-6">
              {/* Featured Video */}
              {latestVideo && (
                <Card className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-wp-teal/30 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-wp-teal/10">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={latestVideo.thumbnail} 
                        alt={decodeHtmlEntities(latestVideo.title)}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <a 
                          href={latestVideo.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 hover:scale-110 transition-transform"
                        >
                          <Play className="w-6 h-6 text-white ml-1" />
                        </a>
                      </div>
                      <div className="absolute top-4 left-4 bg-red-500/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                        <Play className="w-3 h-3" />
                        LATEST
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-baloo font-bold text-lg line-clamp-2">
                          {decodeHtmlEntities(latestVideo.title)}
                        </h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Featured Podcast */}
              {latestPodcast && (
                <Card className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-wp-teal/30 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-wp-teal/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                        <img 
                          src={latestPodcast.thumbnail} 
                          alt={decodeHtmlEntities(latestPodcast.title)}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                          <a 
                            href={latestPodcast.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                          >
                            <Mic className="w-4 h-4 text-white" />
                          </a>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full font-semibold flex items-center gap-1">
                            <Mic className="w-3 h-3" />
                            PODCAST
                          </div>
                        </div>
                        <h3 className="text-white font-baloo font-semibold text-base line-clamp-2 mb-2">
                          {decodeHtmlEntities(latestPodcast.title)}
                        </h3>
                        <a 
                          href={latestPodcast.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-wp-teal text-sm font-medium hover:text-cyan-400 transition-colors"
                        >
                          Listen Now →
                        </a>
                      </div>
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
        <div className="w-6 h-10 border-2 border-wp-teal/50 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-wp-teal rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
