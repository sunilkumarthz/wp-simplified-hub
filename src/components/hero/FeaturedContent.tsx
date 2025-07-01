
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
      <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        {/* Loading Video Card */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-wp-teal via-cyan-400 to-emerald-400 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
          <Card className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-0 rounded-xl overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center shadow-xl">
                  <Video className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="h-2 bg-slate-700/50 rounded animate-pulse mb-1 w-16"></div>
                  <div className="h-2 bg-slate-700/50 rounded animate-pulse w-12"></div>
                </div>
              </div>
              <div className="h-4 bg-slate-700/50 rounded animate-pulse mb-2"></div>
              <div className="h-2 bg-slate-700/50 rounded animate-pulse"></div>
            </CardContent>
          </Card>
        </div>

        {/* Loading Podcast Card */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
          <Card className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-0 rounded-xl overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center shadow-xl">
                  <Mic className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="h-2 bg-slate-700/50 rounded animate-pulse mb-1 w-16"></div>
                  <div className="h-2 bg-slate-700/50 rounded animate-pulse w-12"></div>
                </div>
              </div>
              <div className="h-4 bg-slate-700/50 rounded animate-pulse mb-2"></div>
              <div className="h-2 bg-slate-700/50 rounded animate-pulse"></div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
      {/* Latest Video Card - Compact Design */}
      <div className="relative group">
        {/* Animated Glow Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-wp-teal via-cyan-400 to-emerald-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        
        <Card className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-0 rounded-xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02] shadow-xl">
          <CardContent className="p-0 relative">
            {/* Floating Particles Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-3 right-3 w-1 h-1 bg-wp-teal/30 rounded-full animate-pulse"></div>
              <div className="absolute top-6 right-8 w-0.5 h-0.5 bg-cyan-400/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-8 right-4 w-0.5 h-0.5 bg-emerald-400/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="p-4">
              {/* Video Badge with Compact Design */}
              <div className="flex items-center gap-2 mb-3">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Video className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                    <Sparkles className="w-1 h-1 text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-transparent bg-gradient-to-r from-wp-teal to-cyan-400 bg-clip-text text-xs font-bold uppercase tracking-wider">
                    Latest Video
                  </div>
                  <div className="text-slate-400 text-xs flex items-center gap-1">
                    <Zap className="w-2 h-2 text-wp-teal" />
                    {latestVideo ? 'WordPress Tutorial' : 'No video available'}
                  </div>
                </div>
              </div>
              
              {/* Title with Gradient */}
              <h3 className="text-white font-baloo font-bold text-base mb-3 line-clamp-2 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-wp-teal group-hover:via-cyan-400 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all duration-300">
                {latestVideo ? decodeHtmlEntities(latestVideo.title) : 'Latest video will appear here'}
              </h3>
              
              {/* Updated Watch Button */}
              {latestVideo ? (
                <a 
                  href={latestVideo.videourl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-wp-teal hover:bg-wp-teal-dark text-slate-900 font-bold px-4 py-2 rounded-lg text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group/btn"
                >
                  <Play className="w-4 h-4 group-hover/btn:scale-125 transition-transform" />
                  Watch Now
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 bg-slate-600/50 text-slate-400 font-semibold px-4 py-2 rounded-lg text-sm">
                  <Play className="w-4 h-4" />
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
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        
        <Card className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-0 rounded-xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02] shadow-xl">
          <CardContent className="p-0 relative">
            {/* Floating Particles Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-4 left-3 w-1 h-1 bg-purple-400/30 rounded-full animate-pulse"></div>
              <div className="absolute top-6 left-6 w-0.5 h-0.5 bg-blue-400/40 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-8 left-4 w-0.5 h-0.5 bg-cyan-400/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>

            <div className="p-4">
              {/* Podcast Badge with Compact Design */}
              <div className="flex items-center gap-2 mb-3">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Mic className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                    <Sparkles className="w-1 h-1 text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-xs font-bold uppercase tracking-wider">
                    Latest Podcast
                  </div>
                  <div className="text-slate-400 text-xs flex items-center gap-1">
                    <Zap className="w-2 h-2 text-purple-400" />
                    {latestPodcast ? 'Audio Content' : 'No podcast available'}
                  </div>
                </div>
              </div>
              
              {/* Title with Gradient */}
              <h3 className="text-white font-baloo font-bold text-base mb-3 line-clamp-2 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                {latestPodcast ? decodeHtmlEntities(latestPodcast.title) : 'Latest podcast will appear here'}
              </h3>
              
              {/* Updated Listen Button */}
              {latestPodcast ? (
                <a 
                  href={latestPodcast.videourl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-wp-teal hover:bg-wp-teal-dark text-slate-900 font-bold px-4 py-2 rounded-lg text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group/btn"
                >
                  <Mic className="w-4 h-4 group-hover/btn:scale-125 transition-transform" />
                  Listen Now
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 bg-slate-600/50 text-slate-400 font-semibold px-4 py-2 rounded-lg text-sm">
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
