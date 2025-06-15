
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Clock, BookOpen } from 'lucide-react';
import { type Playlist } from '@/services/api';
import { decodeHtmlEntities } from '@/lib/htmlUtils';

interface PlaylistCardProps {
  playlist: Playlist;
  index: number;
}

const PlaylistCard = ({ playlist, index }: PlaylistCardProps) => {
  return (
    <Card 
      className="bg-slate-800/60 hover:bg-slate-800/80 transition-all duration-300 group border-slate-700/50 animate-fade-in overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img 
            src={playlist.thumbnail} 
            alt={decodeHtmlEntities(playlist.title)}
            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a 
              href={playlist.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-16 h-16 bg-wp-teal rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl pulse-glow"
            >
              <BookOpen className="w-6 h-6 text-slate-900" />
            </a>
          </div>
          
          {/* Playlist Stats Badge */}
          <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 rounded-full text-white text-sm font-medium">
            {playlist.video_count} videos
          </div>
          
          {/* Difficulty Badge */}
          <div className="absolute top-4 right-4 bg-wp-teal text-slate-900 px-3 py-1 rounded-full text-sm font-bold">
            {playlist.difficulty}
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-baloo font-bold text-white mb-3 line-clamp-2">
            {decodeHtmlEntities(playlist.title)}
          </h3>
          <p className="text-slate-300 text-sm mb-4 line-clamp-3 leading-relaxed">
            {playlist.description}
          </p>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-slate-400 text-sm">
              <Clock className="w-4 h-4 mr-1" />
              {playlist.duration}
            </div>
            <div className="flex items-center text-slate-400 text-sm">
              <Play className="w-4 h-4 mr-1" />
              {playlist.video_count} videos
            </div>
          </div>
          
          <a 
            href={playlist.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="no-link-styles"
          >
            <Button className="w-full font-semibold text-slate-900 wp-gradient hover:scale-105 transition-transform">
              Explore Playlist
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlaylistCard;
