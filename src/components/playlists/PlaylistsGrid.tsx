
import { Button } from '@/components/ui/button';
import { type Playlist } from '@/services/api';
import PlaylistCard from './PlaylistCard';

interface PlaylistsGridProps {
  playlists: Playlist[];
  visiblePlaylists: Playlist[];
  hasMore: boolean;
  isLoading: boolean;
  error: any;
  onLoadMore: () => void;
}

const PlaylistsGrid = ({ 
  playlists, 
  visiblePlaylists, 
  hasMore, 
  isLoading, 
  error, 
  onLoadMore 
}: PlaylistsGridProps) => {
  if (isLoading) {
    return (
      <section className="pb-20 bg-slate-800">
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-wp-teal/20 rounded-full mb-4">
            <div className="w-8 h-8 border-4 border-wp-teal border-t-transparent rounded-full animate-spin"></div>
          </div>
          <div className="text-white font-roboto text-lg">Loading playlists...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="pb-20 bg-slate-800">
        <div className="text-center py-12">
          <div className="text-red-400 font-roboto text-lg">Failed to load playlists. Please try again later.</div>
        </div>
      </section>
    );
  }

  if (playlists.length === 0) {
    return (
      <section className="pb-20 bg-slate-800">
        <div className="text-center py-12">
          <div className="text-slate-400 font-roboto">No playlists available.</div>
        </div>
      </section>
    );
  }

  return (
    <section className="pb-20 bg-slate-800">
      {/* Modern Playlists Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
        {visiblePlaylists.map((playlist, index) => (
          <PlaylistCard 
            key={playlist.id || index}
            playlist={playlist}
            index={index}
          />
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center">
          <Button 
            onClick={onLoadMore}
            size="lg"
            className="font-semibold text-lg px-8 py-3 wp-gradient text-slate-900 hover:scale-105 transition-transform"
          >
            Load More Playlists
          </Button>
        </div>
      )}
    </section>
  );
};

export default PlaylistsGrid;
