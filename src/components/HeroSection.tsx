
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
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            
            {/* Latest Video Card */}
            {latestVideo && (
              <Card className="group relative bg-gradient-to-br from-red-500/10 via-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-red-500/20 hover:border-red-500/40 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/10">
                <CardContent className="p-8 relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-4 right-4 w-32 h-32 bg-red-500/20 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-4 left-4 w-24 h-24 bg-orange-500/20 rounded-full blur-xl"></div>
                  </div>
                  
                  {/* Video Badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Video className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-red-400 text-sm font-bold uppercase tracking-wider">Latest Video</div>
                      <div className="text-slate-400 text-xs">WordPress Tutorial</div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-white font-baloo font-bold text-2xl mb-6 line-clamp-3 leading-tight group-hover:text-red-100 transition-colors">
                    {decodeHtmlEntities(latestVideo.title)}
                  </h3>
                  
                  {/* Decorative Elements */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex-1 h-px bg-gradient-to-r from-red-500/50 to-transparent"></div>
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                    <div className="flex-1 h-px bg-gradient-to-l from-red-500/50 to-transparent"></div>
                  </div>
                  
                  {/* Watch Button */}
                  <a 
                    href={latestVideo.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-red-500/25 hover:scale-105 transition-all duration-300 group/btn"
                  >
                    <Play className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                    Watch Tutorial
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            )}

            {/* Latest Podcast Card */}
            {latestPodcast && (
              <Card className="group relative bg-gradient-to-br from-green-500/10 via-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-green-500/20 hover:border-green-500/40 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/10">
                <CardContent className="p-8 relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-4 left-4 w-32 h-32 bg-green-500/20 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-4 right-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-xl"></div>
                  </div>
                  
                  {/* Podcast Badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Mic className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-green-400 text-sm font-bold uppercase tracking-wider">Latest Podcast</div>
                      <div className="text-slate-400 text-xs">Audio Content</div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-white font-baloo font-bold text-2xl mb-6 line-clamp-3 leading-tight group-hover:text-green-100 transition-colors">
                    {decodeHtmlEntities(latestPodcast.title)}
                  </h3>
                  
                  {/* Decorative Elements */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex-1 h-px bg-gradient-to-r from-green-500/50 to-transparent"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                    <div className="flex-1 h-px bg-gradient-to-l from-green-500/50 to-transparent"></div>
                  </div>
                  
                  {/* Listen Button */}
                  <a 
                    href={latestPodcast.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-green-500/25 hover:scale-105 transition-all duration-300 group/btn"
                  >
                    <Mic className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                    Listen Now
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
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
