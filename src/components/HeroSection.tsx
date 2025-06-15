
import { useQuery } from '@tanstack/react-query';
import { fetchLatestVideos, fetchAllPodcasts } from '@/services/api';
import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';
import HeroStats from './hero/HeroStats';
import FeaturedContent from './hero/FeaturedContent';
import ScrollIndicator from './hero/ScrollIndicator';

const HeroSection = () => {
  const { data: videos = [], isLoading: videosLoading } = useQuery({
    queryKey: ['latestVideos'],
    queryFn: fetchLatestVideos,
  });

  const { data: podcasts = [], isLoading: podcastsLoading } = useQuery({
    queryKey: ['latestPodcasts'],
    queryFn: fetchAllPodcasts,
  });

  console.log('Videos data:', videos);
  console.log('Podcasts data:', podcasts);
  console.log('Videos loading:', videosLoading);
  console.log('Podcasts loading:', podcastsLoading);

  const scrollToVideos = () => {
    const videosSection = document.getElementById('latest-videos');
    if (videosSection) {
      videosSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const latestVideo = videos[0];
  const latestPodcast = podcasts[0];

  return (
    <section className="relative h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 container mx-auto px-6 py-8 h-full flex flex-col">
        <div className="max-w-7xl mx-auto flex-1 flex flex-col justify-center">
          
          {/* 2-Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-8">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <HeroContent onScrollToVideos={scrollToVideos} />
              <HeroStats />
            </div>

            {/* Right Column - Featured Content */}
            <div>
              <FeaturedContent 
                latestVideo={latestVideo} 
                latestPodcast={latestPodcast}
                isLoading={videosLoading || podcastsLoading}
              />
            </div>
          </div>
        </div>

        <ScrollIndicator />
      </div>
    </section>
  );
};

export default HeroSection;
