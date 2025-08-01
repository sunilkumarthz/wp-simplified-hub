
import { Button } from '@/components/ui/button';
import { Play, Globe, ArrowRight, Award, Star } from 'lucide-react';

interface HeroContentProps {
  onScrollToVideos: () => void;
}

const HeroContent = ({ onScrollToVideos }: HeroContentProps) => {
  return (
    <div className="text-left animate-fade-in">
      {/* Expert Badge */}
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-wp-teal/20 to-cyan-400/20 backdrop-blur-sm border border-wp-teal/30 rounded-full px-4 py-2 text-wp-teal font-semibold mb-6 hover:scale-105 transition-transform">
        <Award className="w-4 h-4" />
        WordPress Expert & Content Creator
        <Star className="w-3 h-3 fill-current" />
      </div>

      {/* Main Heading */}
      <div className="space-y-4 mb-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-baloo font-bold text-white leading-tight">
          Master
          <span className="block text-transparent bg-gradient-to-r from-wp-teal via-cyan-400 to-emerald-400 bg-clip-text text-5xl md:text-6xl lg:text-7xl">
            WordPress
          </span>
        </h1>
        <p className="text-xl md:text-2xl font-roboto font-light text-slate-300">
          with{' '}
          <span className="text-wp-teal font-semibold">Sunil Kumar Sharma</span>
        </p>
      </div>

      {/* Sub-heading */}
      <p className="text-lg text-slate-300 leading-relaxed mb-8 font-roboto">
        Transform your WordPress journey from beginner to expert with
        comprehensive tutorials, practical guides, and insider insights that{' '}
        <span className="text-wp-teal font-semibold">actually work</span>.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          variant="solid"
          size="lg"
          onClick={onScrollToVideos}
        >
          <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
          Start Learning Now
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button
          variant="outline"
          size="lg"
        >
          <Globe className="w-5 h-5 mr-2" />
          Explore Content
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
