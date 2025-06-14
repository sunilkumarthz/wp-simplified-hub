
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Play, Clock, Eye, Search } from 'lucide-react';
import { fetchLatestVideos, searchVideos, type Video } from '@/services/api';
import { useQuery } from '@tanstack/react-query';

const Videos = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Video[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Fetch latest videos
  const { data: videos = [], isLoading, error } = useQuery({
    queryKey: ['latestVideos'],
    queryFn: fetchLatestVideos,
  });

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    try {
      const results = await searchVideos(searchQuery);
      setSearchResults(results);
    } catch (error) {
      console.error('Search failed:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const displayedVideos = searchQuery ? searchResults : videos;

  const videoCategories = [
    {
      title: "WordPress Basics",
      count: 25,
      description: "Complete guide for WordPress beginners"
    },
    {
      title: "Gutenberg Guide",
      count: 18,
      description: "Master the WordPress block editor"
    },
    {
      title: "WooCommerce Setup",
      count: 32,
      description: "Build your online store from scratch"
    },
    {
      title: "Plugin Development",
      count: 15,
      description: "Create custom WordPress plugins"
    },
    {
      title: "Theme Development",
      count: 22,
      description: "Build responsive WordPress themes"
    },
    {
      title: "Performance Optimization",
      count: 12,
      description: "Speed up your WordPress site"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 wp-gradient-dark opacity-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-wp-teal/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-wp-blue/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-baloo font-bold text-white mb-6">
              WordPress <span className="text-gradient">Video Tutorials</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-roboto leading-relaxed mb-8">
              Comprehensive video tutorials covering everything from WordPress basics 
              to advanced development techniques. Learn at your own pace with step-by-step guides.
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search videos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 pr-12"
                />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-wp-teal disabled:opacity-50"
                >
                  <Search size={20} />
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Video Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-baloo font-bold text-white mb-12 text-center">
              Video Categories
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoCategories.map((category, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-wp-teal rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-8 h-8 text-slate-900" />
                    </div>
                    <h3 className="text-2xl font-baloo font-bold text-white mb-2">
                      {category.title}
                    </h3>
                    <p className="text-wp-teal font-roboto font-semibold mb-3">
                      {category.count} Videos
                    </p>
                    <p className="text-slate-300 font-roboto text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Videos Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-baloo font-bold text-white mb-12 text-center">
              {searchQuery ? `Search Results for "${searchQuery}"` : 'Latest Videos'}
            </h2>
            
            {isLoading && (
              <div className="text-center py-12">
                <div className="text-white font-roboto">Loading videos...</div>
              </div>
            )}

            {error && (
              <div className="text-center py-12">
                <div className="text-red-400 font-roboto">Failed to load videos. Please try again later.</div>
              </div>
            )}

            {displayedVideos.length === 0 && !isLoading && !error && (
              <div className="text-center py-12">
                <div className="text-slate-400 font-roboto">
                  {searchQuery ? 'No videos found for your search.' : 'No videos available.'}
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedVideos.map((video, index) => (
                <Card key={video.id || index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a 
                          href={video.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-16 h-16 bg-wp-teal rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                        >
                          <Play className="w-8 h-8 text-slate-900" />
                        </a>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-white text-xs flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {video.duration}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-baloo font-bold text-white mb-3 line-clamp-2">
                        {video.title}
                      </h3>
                      <p className="text-slate-300 font-roboto text-sm mb-3 line-clamp-2">
                        {video.description}
                      </p>
                      <div className="flex items-center justify-between text-slate-400 text-sm">
                        <span className="flex items-center font-roboto">
                          <Eye className="w-4 h-4 mr-1" />
                          {video.views} views
                        </span>
                        <span className="font-roboto">{video.published_date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Videos;
