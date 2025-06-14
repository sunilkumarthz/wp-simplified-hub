
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
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <div className="container mx-auto px-4">
        <HeroSection />
        <LatestVideos />
        <AboutSection />
        <LatestPodcasts />
        <CommunityInvolvement />
        <FeaturedPlaylists />
        <BadgesSection />
        <LatestShorts />
        <PodcastSection />
        <SocialSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
