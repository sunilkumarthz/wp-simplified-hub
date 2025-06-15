
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface VideosHeroProps {
  searchQuery: string;
  isSearching: boolean;
  onSearchQueryChange: (query: string) => void;
  onSearch: (e: React.FormEvent) => void;
}

const VideosHero = ({ 
  searchQuery, 
  isSearching, 
  onSearchQueryChange, 
  onSearch 
}: VideosHeroProps) => {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-baloo font-bold text-white mb-6">
          WordPress <span className="text-gradient">Video Tutorials</span>
        </h1>
        
        <p className="text-xl text-slate-300 max-w-3xl mx-auto font-roboto leading-relaxed mb-8 mt-6">
          Comprehensive video tutorials covering everything from WordPress basics 
          to advanced development techniques. Learn at your own pace with step-by-step guides.
        </p>
        
        {/* Search Bar */}
        <form onSubmit={onSearch} className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search videos..."
              value={searchQuery}
              onChange={(e) => onSearchQueryChange(e.target.value)}
              className="w-full bg-slate-800 text-white placeholder:text-slate-400 pr-12"
              aria-label="Search WordPress video tutorials"
            />
            <button
              type="submit"
              disabled={isSearching}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-wp-teal disabled:opacity-50"
              aria-label="Search videos"
            >
              <Search size={20} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default VideosHero;
