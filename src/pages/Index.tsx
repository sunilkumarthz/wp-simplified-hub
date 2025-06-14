
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedVideos from '@/components/FeaturedVideos';
import PopularPlaylists from '@/components/PopularPlaylists';
import AboutSection from '@/components/AboutSection';
import CommunityInvolvement from '@/components/CommunityInvolvement';
import BadgesSection from '@/components/BadgesSection';
import ShortsGallery from '@/components/ShortsGallery';
import PodcastSection from '@/components/PodcastSection';
import SocialSection from '@/components/SocialSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <HeroSection />
      <FeaturedVideos />
      <PopularPlaylists />
      <AboutSection />
      <CommunityInvolvement />
      <BadgesSection />
      <ShortsGallery />
      <PodcastSection />
      <SocialSection />
      <Footer />
    </div>
  );
};

export default Index;
