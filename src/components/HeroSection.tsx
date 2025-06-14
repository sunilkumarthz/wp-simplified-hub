
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
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

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-baloo font-bold text-white leading-tight">
            From <span className="text-gradient">Zero to Hero</span> in WordPress
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-300 font-roboto max-w-2xl mx-auto leading-relaxed">
            Simplifying WordPress, One Step at a Time
          </p>
          
          {/* Description */}
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Join thousands of learners mastering WordPress through comprehensive video tutorials, 
            hands-on playlists, and an engaging community experience.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/videos">
              <Button size="lg" className="wp-gradient text-slate-900 font-bold text-lg px-8 py-4 hover:scale-105 transition-transform duration-200">
                Watch Tutorials
              </Button>
            </Link>
            <Link to="/podcasts">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-wp-teal text-wp-teal hover:bg-wp-teal hover:text-slate-900 font-bold text-lg px-8 py-4 hover:scale-105 transition-all duration-200"
              >
                Join the Podcast
              </Button>
            </Link>
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
