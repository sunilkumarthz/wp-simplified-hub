
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import LatestContent from '@/components/LatestContent';
import AboutSection from '@/components/AboutSection';
import CommunityInvolvement from '@/components/CommunityInvolvement';
import BadgesSection from '@/components/BadgesSection';
import PodcastSection from '@/components/PodcastSection';
import SocialSection from '@/components/SocialSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <HeroSection />
      <LatestContent />
      <AboutSection />
      <CommunityInvolvement />
      <BadgesSection />
      <PodcastSection />
      <SocialSection />
      <Footer />
    </div>
  );
};

export default Index;
