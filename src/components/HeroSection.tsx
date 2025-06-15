
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Mic, ArrowRight, Star, Users, Video, BookOpen, Zap, TrendingUp, Award, Globe } from 'lucide-react';
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
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(4,217,139,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(4,217,139,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-wp-teal/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-wp-teal/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Hero Content */}
          <div className="text-center mb-16 animate-fade-in">
            
            {/* Expert Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-wp-teal/20 to-cyan-400/20 backdrop-blur-sm border border-wp-teal/30 rounded-full px-6 py-3 text-wp-teal font-semibold mb-8 hover:scale-105 transition-transform">
              <Award className="w-5 h-5" />
              WordPress Expert & Content Creator
              <Star className="w-4 h-4 fill-current" />
            </div>

            {/* Main Heading */}
            <div className="space-y-6 mb-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-baloo font-bold text-white leading-tight">
                Master
                <span className="block text-transparent bg-gradient-to-r from-wp-teal via-cyan-400 to-emerald-400 bg-clip-text text-6xl md:text-8xl lg:text-9xl">
                  WordPress
                </span>
              </h1>
              <p className="text-2xl md:text-3xl font-roboto font-light text-slate-300 max-w-3xl mx-auto">
                with <span className="text-wp-teal font-semibold">Sunil Kumar Sharma</span>
              </p>
            </div>

            {/* Value Proposition */}
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto mb-12 font-roboto">
              Transform your WordPress journey from beginner to expert with comprehensive tutorials, 
              practical guides, and insider insights that <span className="text-wp-teal font-semibold">actually work</span>.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
              {[
                { icon: Video, label: "Videos", value: "100+" },
                { icon: Users, label: "Students", value: "50K+" },
                { icon: BookOpen, label: "Playlists", value: "25+" },
                { icon: TrendingUp, label: "Growth", value: "Weekly" }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-wp-teal/40 transition-all duration-300 hover:scale-105">
                    <stat.icon className="w-8 h-8 text-wp-teal mx-auto mb-3" />
                    <div className="text-2xl font-baloo font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-400 font-roboto">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                size="lg" 
                onClick={scrollToVideos}
                className="bg-gradient-to-r from-wp-teal to-cyan-400 hover:from-cyan-400 hover:to-wp-teal text-slate-900 font-bold text-xl px-12 py-8 rounded-2xl shadow-2xl hover:shadow-wp-teal/25 hover:scale-105 transition-all duration-300 group"
              >
                <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Start Learning Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-wp-teal/60 text-wp-teal hover:bg-wp-teal hover:text-slate-900 font-semibold text-xl px-12 py-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <Globe className="w-6 h-6 mr-3" />
                Explore Content
              </Button>
            </div>
          </div>

          {/* Featured Content Cards */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            
            {/* Latest Video Card */}
            {latestVideo && (
              <Card className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 hover:border-wp-teal/40 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-wp-teal/10">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={latestVideo.thumbnail} 
                      alt={decodeHtmlEntities(latestVideo.title)}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <a 
                        href={latestVideo.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-20 h-20 bg-wp-teal/90 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30 hover:scale-110 transition-all duration-300 shadow-2xl"
                      >
                        <Play className="w-8 h-8 text-slate-900 ml-1" />
                      </a>
                    </div>
                    
                    {/* Video Badge */}
                    <div className="absolute top-6 left-6 bg-red-500/90 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full font-bold flex items-center gap-2 shadow-lg">
                      <Video className="w-4 h-4" />
                      LATEST VIDEO
                    </div>
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-white font-baloo font-bold text-xl mb-3 line-clamp-2 leading-tight">
                        {decodeHtmlEntities(latestVideo.title)}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-wp-teal text-sm font-semibold">Watch Tutorial</span>
                        <ArrowRight className="w-4 h-4 text-wp-teal group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Latest Podcast Card */}
            {latestPodcast && (
              <Card className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 hover:border-wp-teal/40 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-wp-teal/10">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
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
                          className="w-8 h-8 bg-wp-teal rounded-full flex items-center justify-center"
                        >
                          <Mic className="w-4 h-4 text-slate-900" />
                        </a>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 text-sm px-3 py-1 rounded-full font-bold flex items-center gap-2 border border-green-500/20">
                          <Mic className="w-4 h-4" />
                          PODCAST
                        </div>
                      </div>
                      <h3 className="text-white font-baloo font-bold text-lg mb-4 line-clamp-2 leading-tight">
                        {decodeHtmlEntities(latestPodcast.title)}
                      </h3>
                      <a 
                        href={latestPodcast.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-wp-teal font-semibold hover:text-cyan-400 transition-colors group/link"
                      >
                        Listen Now 
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-12 border-2 border-wp-teal/60 rounded-full flex justify-center p-2 backdrop-blur-sm">
            <div className="w-1.5 h-4 bg-wp-teal rounded-full animate-pulse"></div>
          </div>
          <span className="text-wp-teal text-sm font-medium">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
