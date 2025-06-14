
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToVideos = () => {
    const videosSection = document.getElementById('latest-videos');
    if (videosSection) {
      videosSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 wp-gradient-dark"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-wp-teal rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-wp-blue rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-wp-teal/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-baloo font-bold text-white leading-tight">
            Simplifying WordPress, <span className="text-gradient">One Step at a Time</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 font-roboto max-w-3xl mx-auto leading-relaxed">
            Explore videos, playlists, and podcasts from WordPress creator Sunil Kumar Sharma.
          </p>
          
          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              size="lg" 
              onClick={scrollToVideos}
              className="wp-gradient text-slate-900 font-bold text-lg px-8 py-4 hover:scale-105 transition-transform duration-200"
            >
              Explore Now
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-12 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-baloo font-bold text-wp-teal">10+</div>
              <div className="text-slate-400">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-baloo font-bold text-wp-teal">100+</div>
              <div className="text-slate-400">Video Tutorials</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-baloo font-bold text-wp-teal">5k+</div>
              <div className="text-slate-400">Community Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
