
import { Card, CardContent } from '@/components/ui/card';
import { Play, Clock } from 'lucide-react';
import { type Video } from '@/services/api';
import { decodeHtmlEntities } from '@/lib/htmlUtils';

interface VideoCardProps {
  video: Video;
  index: number;
}

const VideoCard = ({ video, index }: VideoCardProps) => {
  return (
    <Card key={video.id || index} className="bg-slate-800/50 hover:bg-slate-800/70 transition-all duration-300 group">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img 
            src={video.thumbnail} 
            alt={`${decodeHtmlEntities(video.title)} - WordPress tutorial thumbnail`}
            className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a 
              href={video.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-16 h-16 bg-wp-teal rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              aria-label={`Watch ${decodeHtmlEntities(video.title)}`}
            >
              <Play className="w-8 h-8 text-slate-900" />
            </a>
          </div>
          {video.duration && (
            <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-white text-xs flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {video.duration}
            </div>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-baloo font-bold text-white mb-3 line-clamp-2">
            {decodeHtmlEntities(video.title)}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
