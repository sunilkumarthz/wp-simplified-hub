
import LatestVideosSection from '@/components/sections/LatestVideosSection';
import LatestShortsSection from '@/components/sections/LatestShortsSection';
import LatestPodcastsSection from '@/components/sections/LatestPodcastsSection';
import FeaturedPlaylistsSection from '@/components/sections/FeaturedPlaylistsSection';

const LatestContent = () => {
  return (
    <div className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-4">
        <LatestVideosSection />
        <LatestShortsSection />
        <LatestPodcastsSection />
        <FeaturedPlaylistsSection />
      </div>
    </div>
  );
};

export default LatestContent;
