
import { Card, CardContent } from '@/components/ui/card';
import { Play, Mic, Video, ArrowRight } from 'lucide-react';
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
        <Card className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-wp-teal to-wp-teal-dark rounded-lg flex items-center justify-center shadow-lg">
                <Video className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-wp-teal text-sm font-bold uppercase tracking-wider">Latest Video</div>
                <div className="text-slate-400 text-xs">Loading...</div>
              </div>
            </div>
            <div className="h-5 bg-slate-700/50 rounded animate-pulse mb-3"></div>
            <div className="h-3 bg-slate-700/50 rounded animate-pulse"></div>
          </CardContent>
        </Card>

        {/* Loading Podcast Card */}
        <Card className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-wp-teal to-wp-teal-dark rounded-lg flex items-center justify-center shadow-lg">
                <Mic className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-wp-teal text-sm font-bold uppercase tracking-wider">Latest Podcast</div>
                <div className="text-slate-400 text-xs">Loading...</div>
              </div>
            </div>
            <div className="h-5 bg-slate-700/50 rounded animate-pulse mb-3"></div>
            <div className="h-3 bg-slate-700/50 rounded animate-pulse"></div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
      {/* Latest Video Card */}
      <Card className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 hover:border-wp-teal/40 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-wp-teal/10">
        <CardContent className="p-6 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-4 right-4 w-16 h-16 bg-wp-teal/20 rounded-full blur-2xl"></div>
          </div>
          
          {/* Video Badge */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-wp-teal to-wp-teal-dark rounded-lg flex items-center justify-center shadow-lg">
              <Video className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-wp-teal text-sm font-bold uppercase tracking-wider">Latest Video</div>
              <div className="text-slate-400 text-xs">
                {latestVideo ? 'WordPress Tutorial' : 'No video available'}
              </div>
            </div>
          </div>
          
          {/* Title */}
          <h3 className="text-white font-baloo font-bold text-lg mb-4 line-clamp-2 leading-tight group-hover:text-wp-teal/90 transition-colors">
            {latestVideo ? decodeHtmlEntities(latestVideo.title) : 'Latest video will appear here'}
          </h3>
          
          {/* Watch Button */}
          {latestVideo ? (
            <a 
              href={latestVideo.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-wp-teal to-wp-teal-dark text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-wp-teal/25 hover:scale-105 transition-all duration-300 group/btn text-sm"
            >
              <Play className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
              Watch Tutorial
              <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          ) : (
            <div className="inline-flex items-center gap-2 bg-slate-600/50 text-slate-400 font-bold px-6 py-3 rounded-lg text-sm">
              <Play className="w-4 h-4" />
              Coming Soon
            </div>
          )}
        </CardContent>
      </Card>

      {/* Latest Podcast Card */}
      <Card className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 hover:border-wp-teal/40 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-wp-teal/10">
        <CardContent className="p-6 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-4 left-4 w-16 h-16 bg-wp-teal/20 rounded-full blur-2xl"></div>
          </div>
          
          {/* Podcast Badge */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-wp-teal to-wp-teal-dark rounded-lg flex items-center justify-center shadow-lg">
              <Mic className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-wp-teal text-sm font-bold uppercase tracking-wider">Latest Podcast</div>
              <div className="text-slate-400 text-xs">
                {latestPodcast ? 'Audio Content' : 'No podcast available'}
              </div>
            </div>
          </div>
          
          {/* Title */}
          <h3 className="text-white font-baloo font-bold text-lg mb-4 line-clamp-2 leading-tight group-hover:text-wp-teal/90 transition-colors">
            {latestPodcast ? decodeHtmlEntities(latestPodcast.title) : 'Latest podcast will appear here'}
          </h3>
          
          {/* Listen Button */}
          {latestPodcast ? (
            <a 
              href={latestPodcast.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-wp-teal to-wp-teal-dark text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-wp-teal/25 hover:scale-105 transition-all duration-300 group/btn text-sm"
            >
              <Mic className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
              Listen Now
              <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          ) : (
            <div className="inline-flex items-center gap-2 bg-slate-600/50 text-slate-400 font-bold px-6 py-3 rounded-lg text-sm">
              <Mic className="w-4 h-4" />
              Coming Soon
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default FeaturedContent;
