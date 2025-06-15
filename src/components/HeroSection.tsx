
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
    <section className="relative h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(4,217,139,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(4,217,139,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-wp-teal/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-wp-teal/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8 h-full flex flex-col">
        <div className="max-w-7xl mx-auto flex-1 flex flex-col justify-center">
          
          {/* Main Hero Content */}
          <div className="text-center mb-8 animate-fade-in">
            
            {/* Expert Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-wp-teal/20 to-cyan-400/20 backdrop-blur-sm border border-wp-teal/30 rounded-full px-4 py-2 text-wp-teal font-semibold mb-6 hover:scale-105 transition-transform">
              <Award className="w-4 h-4" />
              WordPress Expert & Content Creator
              <Star className="w-3 h-3 fill-current" />
            </div>

            {/* Main Heading */}
            <div className="space-y-4 mb-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-baloo font-bold text-white leading-tight">
                Master
                <span className="block text-transparent bg-gradient-to-r from-wp-teal via-cyan-400 to-emerald-400 bg-clip-text text-5xl md:text-7xl lg:text-8xl">
                  WordPress
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-roboto font-light text-slate-300 max-w-3xl mx-auto">
                with <span className="text-wp-teal font-semibold">Sunil Kumar Sharma</span>
              </p>
            </div>

            {/* Value Proposition */}
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto mb-8 font-roboto">
              Transform your WordPress journey from beginner to expert with comprehensive tutorials, 
              practical guides, and insider insights that <span className="text-wp-teal font-semibold">actually work</span>.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
              {[
                { icon: Video, label: "Videos", value: "100+" },
                { icon: Users, label: "Students", value: "50K+" },
                { icon: BookOpen, label: "Playlists", value: "25+" },
                { icon: TrendingUp, label: "Growth", value: "Weekly" }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:border-wp-teal/40 transition-all duration-300 hover:scale-105">
                    <stat.icon className="w-6 h-6 text-wp-teal mx-auto mb-2" />
                    <div className="text-xl font-baloo font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-slate-400 font-roboto">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                onClick={scrollToVideos}
                className="bg-gradient-to-r from-wp-teal to-wp-teal-dark hover:from-wp-teal-dark hover:to-wp-teal text-white font-bold text-lg px-8 py-6 rounded-xl shadow-2xl hover:shadow-wp-teal/25 hover:scale-105 transition-all duration-300 group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Start Learning Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-wp-teal text-wp-teal hover:bg-wp-teal hover:text-white font-semibold text-lg px-8 py-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <Globe className="w-5 h-5 mr-2" />
                Explore Content
              </Button>
            </div>
          </div>

          {/* Featured Content Cards */}
          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            
            {/* Latest Video Card */}
            {latestVideo && (
              <Card className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 hover:border-wp-teal/40 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-wp-teal/10">
                <CardContent className="p-6 relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-4 right-4 w-20 h-20 bg-wp-teal/20 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl"></div>
                  </div>
                  
                  {/* Video Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-wp-teal to-wp-teal-dark rounded-xl flex items-center justify-center shadow-lg">
                      <Video className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-wp-teal text-sm font-bold uppercase tracking-wider">Latest Video</div>
                      <div className="text-slate-400 text-xs">WordPress Tutorial</div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-white font-baloo font-bold text-lg mb-4 line-clamp-2 leading-tight group-hover:text-wp-teal/90 transition-colors">
                    {decodeHtmlEntities(latestVideo.title)}
                  </h3>
                  
                  {/* Decorative Elements */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-1 h-px bg-gradient-to-r from-wp-teal/50 to-transparent"></div>
                    <div className="w-1.5 h-1.5 bg-wp-teal rounded-full"></div>
                    <div className="w-1 h-1 bg-wp-teal/60 rounded-full"></div>
                    <div className="flex-1 h-px bg-gradient-to-l from-wp-teal/50 to-transparent"></div>
                  </div>
                  
                  {/* Watch Button */}
                  <a 
                    href={latestVideo.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-wp-teal to-wp-teal-dark text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-wp-teal/25 hover:scale-105 transition-all duration-300 group/btn"
                  >
                    <Play className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    Watch Tutorial
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            )}

            {/* Latest Podcast Card */}
            {latestPodcast && (
              <Card className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 hover:border-wp-teal/40 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-wp-teal/10">
                <CardContent className="p-6 relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-4 left-4 w-20 h-20 bg-wp-teal/20 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-4 right-4 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl"></div>
                  </div>
                  
                  {/* Podcast Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-wp-teal to-wp-teal-dark rounded-xl flex items-center justify-center shadow-lg">
                      <Mic className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-wp-teal text-sm font-bold uppercase tracking-wider">Latest Podcast</div>
                      <div className="text-slate-400 text-xs">Audio Content</div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-white font-baloo font-bold text-lg mb-4 line-clamp-2 leading-tight group-hover:text-wp-teal/90 transition-colors">
                    {decodeHtmlEntities(latestPodcast.title)}
                  </h3>
                  
                  {/* Decorative Elements */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-1 h-px bg-gradient-to-r from-wp-teal/50 to-transparent"></div>
                    <div className="w-1.5 h-1.5 bg-wp-teal rounded-full"></div>
                    <div className="w-1 h-1 bg-wp-teal/60 rounded-full"></div>
                    <div className="flex-1 h-px bg-gradient-to-l from-wp-teal/50 to-transparent"></div>
                  </div>
                  
                  {/* Listen Button */}
                  <a 
                    href={latestPodcast.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-wp-teal to-wp-teal-dark text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-wp-teal/25 hover:scale-105 transition-all duration-300 group/btn"
                  >
                    <Mic className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    Listen Now
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="flex justify-center animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <div className="w-6 h-10 border-2 border-wp-teal/60 rounded-full flex justify-center p-1 backdrop-blur-sm">
              <div className="w-1 h-3 bg-wp-teal rounded-full animate-pulse"></div>
            </div>
            <span className="text-wp-teal text-xs font-medium">Scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
