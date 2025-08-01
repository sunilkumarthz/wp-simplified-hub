
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
            className="w-full h-auto object-fit transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={playlist.videourl}
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

          <a
            href={playlist.videourl}
            target="_blank"
            rel="noopener noreferrer"
            className="no-link-styles"
          >
            <Button variant="solid" className="w-full">
              Explore Playlist
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlaylistCard;
