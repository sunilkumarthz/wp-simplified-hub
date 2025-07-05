import { TrendingUp } from 'lucide-react';

const ShortsHero = () => {
  return (
    <div className="text-center py-16">
      <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
        <TrendingUp className="w-4 h-4" />
        Quick WordPress Learning
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        WordPress <span className="text-primary">Shorts</span>
      </h1>
      
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Master WordPress fundamentals with bite-sized video tutorials designed for quick learning and immediate implementation.
      </p>
    </div>
  );
};

export default ShortsHero;