
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import LatestVideos from '@/components/LatestVideos';
import AboutSection from '@/components/AboutSection';
import LatestPodcasts from '@/components/LatestPodcasts';
import CommunityInvolvement from '@/components/CommunityInvolvement';
import FeaturedPlaylists from '@/components/FeaturedPlaylists';
import BadgesSection from '@/components/BadgesSection';
import LatestShorts from '@/components/LatestShorts';
import PodcastSection from '@/components/PodcastSection';
import SocialSection from '@/components/SocialSection';
import SponsorsSection from '@/components/SponsorsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <HeroSection />
      <LatestVideos />
      <AboutSection />
      <LatestPodcasts />

      <FeaturedPlaylists />

      <PodcastSection />
      <SponsorsSection />
      <CommunityInvolvement />
      <BadgesSection />
      <SocialSection />
      <LatestShorts />
      <Footer />
    </div>
  );
};

export default Index;
