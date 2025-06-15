
import { Button } from '@/components/ui/button';
import { type Video } from '@/services/api';
import VideoCard from './VideoCard';

interface VideosGridProps {
  displayedVideos: Video[];
  visibleVideos: Video[];
  searchQuery: string;
  isLoading: boolean;
  error: any;
  hasMore: boolean;
  onLoadMore: () => void;
}

const VideosGrid = ({ 
  displayedVideos, 
  visibleVideos, 
  searchQuery, 
  isLoading, 
  error, 
  hasMore, 
  onLoadMore 
}: VideosGridProps) => {
  if (isLoading) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-wp-teal/20 rounded-full mb-4">
              <div className="w-8 h-8 border-4 border-wp-teal border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="text-white font-roboto text-lg">Loading videos...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <div className="text-red-400 font-roboto text-lg">Failed to load videos. Please try again later.</div>
          </div>
        </div>
      </section>
    );
  }

  if (displayedVideos.length === 0 && !isLoading && !error) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <div className="text-slate-400 font-roboto">
              {searchQuery ? 'No videos found for your search.' : 'No videos available.'}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-baloo font-bold text-white mb-12 text-center">
          {searchQuery ? `Search Results for "${searchQuery}"` : 'Latest Videos'}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {visibleVideos.map((video, index) => (
            <VideoCard key={video.id || index} video={video} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-12">
            <Button 
              onClick={onLoadMore}
              size="lg"
              variant="outline"
              className="font-semibold text-lg px-8"
            >
              Load More Videos
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideosGrid;
