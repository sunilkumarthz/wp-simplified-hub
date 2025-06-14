import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Play, Clock, Eye, Search } from 'lucide-react';
import { fetchLatestVideos, searchVideos, type Video } from '@/services/api';
import { useQuery } from '@tanstack/react-query';

const Videos = () => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [searchResults, setSearchResults] = useState<Video[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [displayCount, setDisplayCount] = useState(10);

  // Fetch latest videos
  const { data: allVideos = [], isLoading, error } = useQuery({
    queryKey: ['latestVideos'],
    queryFn: fetchLatestVideos,
  });

  // Handle initial search from URL params
  useEffect(() => {
    if (initialSearch) {
      handleSearchQuery(initialSearch);
    }
  }, [initialSearch]);

  const handleSearchQuery = async (query: string) => {
    if (!query.trim()) return;

    setIsSearching(true);
    try {
      const results = await searchVideos(query);
      setSearchResults(results);
    } catch (error) {
      console.error('Search failed:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSearchQuery(searchQuery);
  };

  const displayedVideos = searchQuery ? searchResults : allVideos;
  const visibleVideos = displayedVideos.slice(0, displayCount);
  const hasMore = displayedVideos.length > displayCount;

  const loadMore = () => {
    setDisplayCount(prev => prev + 10);
  };

  const pageTitle = searchQuery 
    ? `Search Results for "${searchQuery}" - WordPress Video Tutorials` 
    : 'WordPress Video Tutorials - Complete Learning Library';
  const pageDescription = searchQuery
    ? `Find WordPress tutorials about "${searchQuery}". Comprehensive video guides for WordPress development, themes, plugins, and more.`
    : 'Comprehensive WordPress video tutorials covering everything from basics to advanced development. Learn WordPress with step-by-step video guides.';

  // JSON-LD for VideoObject schema
  const videoJsonLd = displayedVideos.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": pageTitle,
    "description": pageDescription,
    "numberOfItems": displayedVideos.length,
    "itemListElement": displayedVideos.map((video, index) => ({
      "@type": "VideoObject",
      "position": index + 1,
      "name": video.title,
      "description": video.description,
      "thumbnailUrl": video.thumbnail,
      "uploadDate": video.published_date,
      "duration": video.duration,
      "embedUrl": video.url,
      "interactionStatistic": {
        "@type": "InteractionCounter",
        "interactionType": "http://schema.org/WatchAction",
        "userInteractionCount": parseInt(video.views?.replace(/[^0-9]/g, '') || '0')
      },
      "author": {
        "@type": "Person",
        "name": "Sunil Kumar Sharma",
        "url": "https://sunilkumarthz.com"
      }
    }))
  } : null;

  const videoCategories = [
    {
      title: "WordPress Basics",
      count: 25,
      description: "Complete guide for WordPress beginners",
      keywords: "WordPress basics, WordPress tutorial, WordPress for beginners"
    },
    {
      title: "Gutenberg Guide",
      count: 18,
      description: "Master the WordPress block editor",
      keywords: "Gutenberg editor, WordPress blocks, block editor tutorial"
    },
    {
      title: "WooCommerce Setup",
      count: 32,
      description: "Build your online store from scratch",
      keywords: "WooCommerce tutorial, WordPress ecommerce, online store setup"
    },
    {
      title: "Plugin Development",
      count: 15,
      description: "Create custom WordPress plugins",
      keywords: "WordPress plugin development, custom plugins, WordPress coding"
    },
    {
      title: "Theme Development",
      count: 22,
      description: "Build responsive WordPress themes",
      keywords: "WordPress theme development, custom themes, responsive design"
    },
    {
      title: "Performance Optimization",
      count: 12,
      description: "Speed up your WordPress site",
      keywords: "WordPress performance, site speed optimization, WordPress speed"
    }
  ];

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords="WordPress tutorials, WordPress development, Gutenberg guide, WooCommerce setup, WordPress plugins, WordPress themes, WordPress security, WordPress performance"
        url="https://wpsimplified.in/videos"
        jsonLd={videoJsonLd}
      />
      
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
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto font-roboto leading-relaxed mb-8 mt-6">
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

          {/* Videos Grid */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-baloo font-bold text-white mb-12 text-center">
                {searchQuery ? `Search Results for "${searchQuery}"` : 'Latest Videos'}
              </h2>
              
              {isLoading && (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-wp-teal/20 rounded-full mb-4">
                    <div className="w-8 h-8 border-4 border-wp-teal border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <div className="text-white font-roboto text-lg">Loading videos...</div>
                </div>
              )}

              {error && (
                <div className="text-center py-12">
                  <div className="text-red-400 font-roboto text-lg">Failed to load videos. Please try again later.</div>
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
                {visibleVideos.map((video, index) => (
                  <Card key={video.id || index} className="bg-slate-800/50 hover:bg-slate-800/70 transition-all duration-300 group">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img 
                          src={video.thumbnail} 
                          alt={`${video.title} - WordPress tutorial thumbnail`}
                          className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <a 
                            href={video.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-16 h-16 bg-wp-teal rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                            aria-label={`Watch ${video.title}`}
                          >
                            <Play className="w-8 h-8 text-slate-900" />
                          </a>
                        </div>
                        {video.duration && (
                          <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-white text-xs flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {video.duration}
                          </div>
                        )}
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-baloo font-bold text-white mb-3 line-clamp-2">
                          {video.title}
                        </h3>
                        
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More Button */}
              {hasMore && (
                <div className="text-center mt-12">
                  <Button 
                    onClick={loadMore}
                    size="lg"
                    variant="outline"
                    className="font-semibold text-lg px-8"
                  >
                    Load More Videos
                  </Button>
                </div>
              )}
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Videos;
