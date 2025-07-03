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

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <HeroSection />
      </section>
      <section id="latest-videos" className="py-12 sm:py-16 lg:py-20">
        <LatestVideos />
      </section>

      <section
        id="about"
        className="bg-slate-800/50 relative py-12 sm:py-16 lg:py-20 "
      >
        <AboutSection />
      </section>

      <section id="latest-podcasts" className="py-12 sm:py-16 lg:py-20">
        <LatestPodcasts />
      </section>

      <section
        id="playlists"
        className="bg-slate-800/50 relative py-12 sm:py-16 lg:py-20"
      >
        <FeaturedPlaylists />
      </section>

      <section id="podcasts" className="py-12 sm:py-16 lg:py-20">
        <PodcastSection />
      </section>

      <section
        id="sponsers"
        className="bg-slate-800/50 relative py-12 sm:py-16 lg:py-20"
      >
        <SponsorsSection />
      </section>

      <section id="community-involvment" className="py-12 sm:py-16 lg:py-20">
        <CommunityInvolvement />
      </section>

      <section
        id="badges"
        className="bg-slate-800/50 relative py-12 sm:py-16 lg:py-20"
      >
        <BadgesSection />
      </section>
      <section id="social" className="py-12 sm:py-16 lg:py-20">
        <SocialSection />
      </section>

      <section
        id="latest-shorts"
        className="bg-slate-800/50 relative py-12 sm:py-16 lg:py-20"
      >
        <LatestShorts />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
