
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
      <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        {/* Loading Video Card */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-wp-teal via-cyan-400 to-emerald-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
          <Card className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-0 rounded-2xl overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-xl">
                  <Video className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="h-3 bg-slate-700/50 rounded animate-pulse mb-2 w-20"></div>
                  <div className="h-2 bg-slate-700/50 rounded animate-pulse w-14"></div>
                </div>
              </div>
              <div className="h-5 bg-slate-700/50 rounded animate-pulse mb-3"></div>
              <div className="h-3 bg-slate-700/50 rounded animate-pulse"></div>
            </CardContent>
          </Card>
        </div>

        {/* Loading Podcast Card */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
          <Card className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-0 rounded-2xl overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-xl">
                  <Mic className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="h-3 bg-slate-700/50 rounded animate-pulse mb-2 w-20"></div>
                  <div className="h-2 bg-slate-700/50 rounded animate-pulse w-14"></div>
                </div>
              </div>
              <div className="h-5 bg-slate-700/50 rounded animate-pulse mb-3"></div>
              <div className="h-3 bg-slate-700/50 rounded animate-pulse"></div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
      {/* Latest Video Card - Compact Design */}
      <div className="relative group">
        {/* Animated Glow Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-wp-teal via-cyan-400 to-emerald-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        
        <Card className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-0 rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02] shadow-xl">
          <CardContent className="p-0 relative">
            {/* Floating Particles Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-wp-teal/30 rounded-full animate-pulse"></div>
              <div className="absolute top-8 right-12 w-1 h-1 bg-cyan-400/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-12 right-6 w-1 h-1 bg-emerald-400/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="p-6">
              {/* Video Badge with Compact Design */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Video className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                    <Sparkles className="w-1.5 h-1.5 text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-transparent bg-gradient-to-r from-wp-teal to-cyan-400 bg-clip-text text-xs font-bold uppercase tracking-wider">
                    Latest Video
                  </div>
                  <div className="text-slate-400 text-xs flex items-center gap-1">
                    <Zap className="w-2.5 h-2.5 text-wp-teal" />
                    {latestVideo ? 'WordPress Tutorial' : 'No video available'}
                  </div>
                </div>
              </div>
              
              {/* Title with Gradient */}
              <h3 className="text-white font-baloo font-bold text-lg mb-4 line-clamp-2 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-wp-teal group-hover:via-cyan-400 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all duration-300">
                {latestVideo ? decodeHtmlEntities(latestVideo.title) : 'Latest video will appear here'}
              </h3>
              
              {/* Redesigned Watch Button */}
              {latestVideo ? (
                <a 
                  href={latestVideo.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-2 bg-gradient-to-r from-wp-teal to-cyan-500 text-slate-900 font-semibold px-5 py-2.5 rounded-xl text-sm shadow-lg hover:shadow-wp-teal/30 hover:scale-105 transition-all duration-300 group/btn overflow-hidden"
                >
                  {/* Button Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  
                  <div className="w-5 h-5 bg-slate-900/20 rounded-lg flex items-center justify-center">
                    <Play className="w-3 h-3 text-slate-900 group-hover/btn:scale-125 transition-transform ml-0.5" />
                  </div>
                  Watch Now
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 bg-slate-600/50 text-slate-400 font-semibold px-5 py-2.5 rounded-xl text-sm">
                  <Play className="w-3 h-3" />
                  Coming Soon
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Latest Podcast Card - Compact Design */}
      <div className="relative group">
        {/* Animated Glow Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        
        <Card className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-0 rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02] shadow-xl">
          <CardContent className="p-0 relative">
            {/* Floating Particles Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-5 left-4 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-pulse"></div>
              <div className="absolute top-10 left-8 w-1 h-1 bg-blue-400/40 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-14 left-6 w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>

            <div className="p-6">
              {/* Podcast Badge with Compact Design */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Mic className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                    <Sparkles className="w-1.5 h-1.5 text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-xs font-bold uppercase tracking-wider">
                    Latest Podcast
                  </div>
                  <div className="text-slate-400 text-xs flex items-center gap-1">
                    <Zap className="w-2.5 h-2.5 text-purple-400" />
                    {latestPodcast ? 'Audio Content' : 'No podcast available'}
                  </div>
                </div>
              </div>
              
              {/* Title with Gradient */}
              <h3 className="text-white font-baloo font-bold text-lg mb-4 line-clamp-2 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                {latestPodcast ? decodeHtmlEntities(latestPodcast.title) : 'Latest podcast will appear here'}
              </h3>
              
              {/* Redesigned Listen Button */}
              {latestPodcast ? (
                <a 
                  href={latestPodcast.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold px-5 py-2.5 rounded-xl text-sm shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 group/btn overflow-hidden"
                >
                  {/* Button Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  
                  <div className="w-5 h-5 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mic className="w-3 h-3 text-white group-hover/btn:scale-125 transition-transform" />
                  </div>
                  Listen Now
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 bg-slate-600/50 text-slate-400 font-semibold px-5 py-2.5 rounded-xl text-sm">
                  <Mic className="w-3 h-3" />
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
