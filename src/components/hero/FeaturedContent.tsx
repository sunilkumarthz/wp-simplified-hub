
import { Card, CardContent } from '@/components/ui/card';
import { Play, Mic, Video, ArrowRight } from 'lucide-react';
import { type Video as VideoType, type Podcast } from '@/services/api';
import { decodeHtmlEntities } from '@/lib/htmlUtils';

interface FeaturedContentProps {
  latestVideo?: VideoType;
  latestPodcast?: Podcast;
}

const FeaturedContent = ({ latestVideo, latestPodcast }: FeaturedContentProps) => {
  if (!latestVideo && !latestPodcast) {
    return null;
  }

  return (
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
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-wp-teal to-wp-teal-dark rounded-xl flex items-center justify-center shadow-lg">
                <Video className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-wp-teal text-lg font-bold uppercase tracking-wider">Latest Video</div>
                <div className="text-slate-400 text-sm">WordPress Tutorial</div>
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-white font-baloo font-bold text-xl mb-6 line-clamp-2 leading-tight group-hover:text-wp-teal/90 transition-colors">
              {decodeHtmlEntities(latestVideo.title)}
            </h3>
            
            {/* Decorative Elements */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-gradient-to-r from-wp-teal/50 to-transparent"></div>
              <div className="w-2 h-2 bg-wp-teal rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-wp-teal/60 rounded-full"></div>
              <div className="flex-1 h-px bg-gradient-to-l from-wp-teal/50 to-transparent"></div>
            </div>
            
            {/* Watch Button */}
            <a 
              href={latestVideo.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-wp-teal to-wp-teal-dark text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-wp-teal/25 hover:scale-105 transition-all duration-300 group/btn"
            >
              <Play className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
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
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-wp-teal to-wp-teal-dark rounded-xl flex items-center justify-center shadow-lg">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-wp-teal text-lg font-bold uppercase tracking-wider">Latest Podcast</div>
                <div className="text-slate-400 text-sm">Audio Content</div>
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-white font-baloo font-bold text-xl mb-6 line-clamp-2 leading-tight group-hover:text-wp-teal/90 transition-colors">
              {decodeHtmlEntities(latestPodcast.title)}
            </h3>
            
            {/* Decorative Elements */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-gradient-to-r from-wp-teal/50 to-transparent"></div>
              <div className="w-2 h-2 bg-wp-teal rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-wp-teal/60 rounded-full"></div>
              <div className="flex-1 h-px bg-gradient-to-l from-wp-teal/50 to-transparent"></div>
            </div>
            
            {/* Listen Button */}
            <a 
              href={latestPodcast.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-wp-teal to-wp-teal-dark text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-wp-teal/25 hover:scale-105 transition-all duration-300 group/btn"
            >
              <Mic className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
              Listen Now
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default FeaturedContent;
