
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Mic, ArrowDown, Star, Users, Video, BookOpen, Zap } from 'lucide-react';
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
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-32 left-20 w-64 h-64 bg-gradient-to-r from-wp-teal/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 right-32 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-wp-teal/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-wp-teal/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(4,217,139,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(4,217,139,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[85vh]">
          
          {/* Main Content - Left Side */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-800/60 backdrop-blur-sm border border-wp-teal/30 rounded-full px-4 py-2 text-sm text-wp-teal font-medium">
              <Star className="w-4 h-4 fill-current" />
              WordPress Expert & Content Creator
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-baloo font-bold text-white leading-tight">
                Master
                <span className="block text-gradient text-5xl md:text-7xl lg:text-8xl">WordPress</span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-roboto font-light text-slate-300">
                with Sunil Kumar Sharma
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Transform your WordPress journey from beginner to expert with comprehensive tutorials, 
              practical guides, and insider insights that actually work.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
              <div className="flex items-center gap-2 text-slate-300">
                <Video className="w-5 h-5 text-wp-teal" />
                <span className="text-sm font-medium">100+ Videos</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Users className="w-5 h-5 text-wp-teal" />
                <span className="text-sm font-medium">50K+ Students</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <BookOpen className="w-5 h-5 text-wp-teal" />
                <span className="text-sm font-medium">25+ Playlists</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Zap className="w-5 h-5 text-wp-teal" />
                <span className="text-sm font-medium">Weekly Updates</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={scrollToVideos}
                className="bg-gradient-to-r from-wp-teal to-cyan-400 hover:from-cyan-400 hover:to-wp-teal text-slate-900 font-bold text-lg px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Learning
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-wp-teal text-wp-teal hover:bg-wp-teal hover:text-slate-900 font-semibold text-lg px-8 py-6 rounded-2xl transition-all duration-300"
              >
                <ArrowDown className="w-5 h-5 mr-2" />
                Explore Content
              </Button>
            </div>
          </div>

          {/* Featured Content - Right Side */}
          <div className="lg:col-span-5 space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            
            {/* Section Header */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-baloo font-bold text-white mb-2">
                <span className="text-gradient">Latest</span> Content
              </h3>
              <p className="text-slate-400">Fresh tutorials and insights</p>
            </div>

            <div className="space-y-6">
              {/* Featured Video Card */}
              {latestVideo && (
                <Card className="group bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-wp-teal/40 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-wp-teal/10">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={latestVideo.thumbnail} 
                        alt={decodeHtmlEntities(latestVideo.title)}
                        className="w-full h-44 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      
                      {/* Play Button Overlay */}
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
                      
                      {/* Badge */}
                      <div className="absolute top-4 left-4 bg-red-500/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                        <Video className="w-3 h-3" />
                        LATEST VIDEO
                      </div>
                      
                      {/* Title Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h4 className="text-white font-baloo font-bold text-lg line-clamp-2 leading-tight">
                          {decodeHtmlEntities(latestVideo.title)}
                        </h4>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Featured Podcast Card */}
              {latestPodcast && (
                <Card className="group bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-wp-teal/40 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-wp-teal/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
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
                            className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                          >
                            <Mic className="w-3 h-3 text-white" />
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
                        <h4 className="text-white font-baloo font-semibold text-base line-clamp-2 mb-2 leading-tight">
                          {decodeHtmlEntities(latestPodcast.title)}
                        </h4>
                        <a 
                          href={latestPodcast.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-wp-teal text-sm font-medium hover:text-cyan-400 transition-colors flex items-center gap-1"
                        >
                          Listen Now 
                          <ArrowDown className="w-3 h-3 rotate-[-90deg]" />
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
