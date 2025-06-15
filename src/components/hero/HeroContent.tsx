
import { Button } from '@/components/ui/button';
import { Play, Globe, ArrowRight, Award, Star } from 'lucide-react';

interface HeroContentProps {
  onScrollToVideos: () => void;
}

const HeroContent = ({ onScrollToVideos }: HeroContentProps) => {
  return (
    <div className="text-center mb-8 animate-fade-in">
      {/* Expert Badge */}
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-wp-teal/20 to-cyan-400/20 backdrop-blur-sm border border-wp-teal/30 rounded-full px-4 py-2 text-wp-teal font-semibold mb-6 hover:scale-105 transition-transform">
        <Award className="w-4 h-4" />
        WordPress Expert & Content Creator
        <Star className="w-3 h-3 fill-current" />
      </div>

      {/* Main Heading */}
      <div className="space-y-4 mb-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-baloo font-bold text-white leading-tight">
          Master
          <span className="block text-transparent bg-gradient-to-r from-wp-teal via-cyan-400 to-emerald-400 bg-clip-text text-5xl md:text-7xl lg:text-8xl">
            WordPress
          </span>
        </h1>
        <p className="text-xl md:text-2xl font-roboto font-light text-slate-300 max-w-3xl mx-auto">
          with <span className="text-wp-teal font-semibold">Sunil Kumar Sharma</span>
        </p>
      </div>

      {/* Sub-heading */}
      <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto mb-8 font-roboto">
        Transform your WordPress journey from beginner to expert with comprehensive tutorials, 
        practical guides, and insider insights that <span className="text-wp-teal font-semibold">actually work</span>.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button 
          size="lg" 
          onClick={onScrollToVideos}
          className="bg-gradient-to-r from-wp-teal to-wp-teal-dark hover:from-wp-teal-dark hover:to-wp-teal text-white font-bold text-lg px-8 py-6 rounded-xl shadow-2xl hover:shadow-wp-teal/25 hover:scale-105 transition-all duration-300 group"
        >
          <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
          Start Learning Now
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          className="border-2 border-wp-teal text-wp-teal hover:bg-wp-teal hover:text-white font-semibold text-lg px-8 py-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
        >
          <Globe className="w-5 h-5 mr-2" />
          Explore Content
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
