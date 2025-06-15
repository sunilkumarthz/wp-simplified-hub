
import { Card, CardContent } from '@/components/ui/card';
import { Play, Mic, Video, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { type Video as VideoType, type Podcast } from '@/services/api';
import { decodeHtmlEntities } from '@/lib/htmlUtils';

interface FeaturedContentProps {
  latestVideo?: VideoType;
  latestPodcast?: Podcast;
  isLoading?: boolean;
}

const FeaturedContent = ({ latestVideo, latestPodcast, isLoading }: FeaturedContentProps) => {
  if (isLoading) {
    return (
      <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        {/* Loading Video Card */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-wp-teal via-cyan-400 to-emerald-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
          <Card className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-0 rounded-3xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="h-4 bg-slate-700/50 rounded animate-pulse mb-2 w-24"></div>
                  <div className="h-3 bg-slate-700/50 rounded animate-pulse w-16"></div>
                </div>
              </div>
              <div className="h-6 bg-slate-700/50 rounded animate-pulse mb-4"></div>
              <div className="h-4 bg-slate-700/50 rounded animate-pulse"></div>
            </CardContent>
          </Card>
        </div>

        {/* Loading Podcast Card */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
          <Card className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-0 rounded-3xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Mic className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="h-4 bg-slate-700/50 rounded animate-pulse mb-2 w-24"></div>
                  <div className="h-3 bg-slate-700/50 rounded animate-pulse w-16"></div>
                </div>
              </div>
              <div className="h-6 bg-slate-700/50 rounded animate-pulse mb-4"></div>
              <div className="h-4 bg-slate-700/50 rounded animate-pulse"></div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
      {/* Latest Video Card - Creative Design */}
      <div className="relative group">
        {/* Animated Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-wp-teal via-cyan-400 to-emerald-400 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        
        <Card className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-0 rounded-3xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02] shadow-2xl">
          <CardContent className="p-0 relative">
            {/* Floating Particles Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-6 right-6 w-2 h-2 bg-wp-teal/30 rounded-full animate-pulse"></div>
              <div className="absolute top-12 right-16 w-1 h-1 bg-cyan-400/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-20 right-8 w-1.5 h-1.5 bg-emerald-400/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="p-8">
              {/* Video Badge with Enhanced Design */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                    <Sparkles className="w-2 h-2 text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-transparent bg-gradient-to-r from-wp-teal to-cyan-400 bg-clip-text text-sm font-bold uppercase tracking-wider">
                    Latest Video
                  </div>
                  <div className="text-slate-400 text-xs flex items-center gap-1">
                    <Zap className="w-3 h-3 text-wp-teal" />
                    {latestVideo ? 'WordPress Tutorial' : 'No video available'}
                  </div>
                </div>
              </div>
              
              {/* Title with Gradient */}
              <h3 className="text-white font-baloo font-bold text-xl mb-6 line-clamp-2 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-wp-teal group-hover:via-cyan-400 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all duration-300">
                {latestVideo ? decodeHtmlEntities(latestVideo.title) : 'Latest video will appear here'}
              </h3>
              
              {/* Enhanced Watch Button */}
              {latestVideo ? (
                <a 
                  href={latestVideo.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-3 bg-gradient-to-r from-wp-teal via-cyan-400 to-wp-teal-dark text-slate-900 font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-wp-teal/50 hover:scale-105 transition-all duration-300 group/btn overflow-hidden"
                >
                  {/* Button Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  
                  <div className="w-6 h-6 bg-slate-900/20 rounded-full flex items-center justify-center">
                    <Play className="w-3 h-3 text-slate-900 group-hover/btn:scale-125 transition-transform ml-0.5" />
                  </div>
                  Watch Tutorial
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              ) : (
                <div className="inline-flex items-center gap-3 bg-slate-600/50 text-slate-400 font-bold px-8 py-4 rounded-2xl">
                  <Play className="w-4 h-4" />
                  Coming Soon
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Latest Podcast Card - Creative Design */}
      <div className="relative group">
        {/* Animated Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        
        <Card className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-0 rounded-3xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02] shadow-2xl">
          <CardContent className="p-0 relative">
            {/* Floating Particles Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-8 left-6 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"></div>
              <div className="absolute top-16 left-12 w-1 h-1 bg-blue-400/40 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-24 left-8 w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>

            <div className="p-8">
              {/* Podcast Badge with Enhanced Design */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Mic className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                    <Sparkles className="w-2 h-2 text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-sm font-bold uppercase tracking-wider">
                    Latest Podcast
                  </div>
                  <div className="text-slate-400 text-xs flex items-center gap-1">
                    <Zap className="w-3 h-3 text-purple-400" />
                    {latestPodcast ? 'Audio Content' : 'No podcast available'}
                  </div>
                </div>
              </div>
              
              {/* Title with Gradient */}
              <h3 className="text-white font-baloo font-bold text-xl mb-6 line-clamp-2 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                {latestPodcast ? decodeHtmlEntities(latestPodcast.title) : 'Latest podcast will appear here'}
              </h3>
              
              {/* Enhanced Listen Button */}
              {latestPodcast ? (
                <a 
                  href={latestPodcast.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 group/btn overflow-hidden"
                >
                  {/* Button Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <Mic className="w-3 h-3 text-white group-hover/btn:scale-125 transition-transform" />
                  </div>
                  Listen Now
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              ) : (
                <div className="inline-flex items-center gap-3 bg-slate-600/50 text-slate-400 font-bold px-8 py-4 rounded-2xl">
                  <Mic className="w-4 h-4" />
                  Coming Soon
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FeaturedContent;
