import { Card, CardContent } from '@/components/ui/card';
import { Play, Clock, Eye } from 'lucide-react';
import { decodeHtmlEntities } from '@/lib/htmlUtils';

interface ShortsCardProps {
  short: {
    id: number;
    title: string;
    thumbnail: string;
    videourl: string;
    duration?: string;
    views?: string;
  };
  index: number;
}

const ShortsCard = ({ short, index }: ShortsCardProps) => {
  return (
    <Card className="group bg-card/50 border-border/50 hover:bg-card/80 transition-all duration-300 overflow-hidden hover:scale-105 hover:shadow-lg">
      <CardContent className="p-0">
        <div className="relative aspect-[9/16] overflow-hidden">
          <img
            src={short.thumbnail}
            alt={decodeHtmlEntities(short.title)}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={short.videourl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label={`Play ${decodeHtmlEntities(short.title)}`}
              >
                <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
              </a>
            </div>

            {/* Duration Badge */}
            {short.duration && (
              <div className="absolute top-2 right-2 bg-black/80 px-2 py-1 rounded text-white text-xs font-medium flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {short.duration}
              </div>
            )}

            {/* Views Badge */}
            {short.views && short.views !== 'N/A' && (
              <div className="absolute bottom-10 right-2 bg-primary/90 px-2 py-1 rounded text-primary-foreground text-xs flex items-center gap-1">
                <Eye className="w-3 h-3" />
                {short.views}
              </div>
            )}

            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <h3 className="text-white font-medium text-sm line-clamp-2 leading-tight">
                {decodeHtmlEntities(short.title)}
              </h3>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShortsCard;