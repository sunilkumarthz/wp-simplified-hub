
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Clock, Eye } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchAllShorts, type Short } from '@/services/api';
import { useState } from 'react';

const Shorts = () => {
  const [displayCount, setDisplayCount] = useState(12);

  const { data: allShorts = [], isLoading, error } = useQuery({
    queryKey: ['shorts'],
    queryFn: fetchAllShorts,
  });

  const visibleShorts = allShorts.slice(0, displayCount);
  const hasMore = allShorts.length > displayCount;

  const loadMore = () => {
    setDisplayCount(prev => prev + 12);
  };

  const shortsJsonLd = allShorts.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "WordPress Shorts - Quick Tutorial Videos",
    "description": "Bite-sized WordPress tutorials and tips perfect for quick learning",
    "numberOfItems": allShorts.length,
    "itemListElement": allShorts.map((short, index) => ({
      "@type": "VideoObject",
      "position": index + 1,
      "name": short.title,
      "thumbnailUrl": short.thumbnail,
      "uploadDate": short.published_date,
      "duration": short.duration,
      "embedUrl": short.url,
      "interactionStatistic": {
        "@type": "InteractionCounter",
        "interactionType": "http://schema.org/WatchAction",
        "userInteractionCount": parseInt(short.views?.replace(/[^0-9]/g, '') || '0')
      },
      "author": {
        "@type": "Person",
        "name": "Sunil Kumar Sharma"
      }
    }))
  } : null;

  return (
    <>
      <SEOHead
        title="WordPress Shorts - Quick Tutorial Videos | WPSimplified"
        description="Quick, bite-sized WordPress tutorials and tips. Perfect for learning on the go and getting instant solutions to common WordPress challenges."
        keywords="WordPress shorts, WordPress tips, quick WordPress tutorials, WordPress solutions, WordPress hacks"
        url="https://wpsimplified.in/shorts"
        jsonLd={shortsJsonLd}
      />
      
      <div className="min-h-screen bg-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 wp-gradient-dark opacity-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-wp-teal/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-wp-blue/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '3s' }}></div>
        
        <div className="relative z-10">
          <Header />
          
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <section className="py-20 text-center">
              <h1 className="text-5xl md:text-6xl font-baloo font-bold text-white mb-6 animate-fade-in">
                WordPress <span className="text-gradient">Shorts</span>
              </h1>
              
              <div className="mb-8">
                <Breadcrumb />
              </div>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto font-roboto leading-relaxed mb-8">
                Quick, bite-sized WordPress tutorials and tips. Perfect for learning on the go 
                and getting instant solutions to common WordPress challenges.
              </p>

              {/* Stats */}
              <div className="flex justify-center items-center gap-8 text-center mb-12">
                <div className="space-y-2">
                  <div className="text-2xl font-baloo font-bold text-wp-teal">{allShorts.length}+</div>
                  <div className="text-slate-400 text-sm">Total Shorts</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-baloo font-bold text-wp-teal">Quick</div>
                  <div className="text-slate-400 text-sm">Learning</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-baloo font-bold text-wp-teal">Expert</div>
                  <div className="text-slate-400 text-sm">Tips</div>
                </div>
              </div>
            </section>

            {/* Shorts Grid */}
            <section className="pb-20">
              {isLoading && (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-wp-teal/20 rounded-full mb-4">
                    <div className="w-8 h-8 border-4 border-wp-teal border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <div className="text-white font-roboto text-lg">Loading shorts...</div>
                </div>
              )}

              {error && (
                <div className="text-center py-12">
                  <div className="text-red-400 font-roboto text-lg">Failed to load shorts. Please try again later.</div>
                </div>
              )}

              {allShorts.length === 0 && !isLoading && !error && (
                <div className="text-center py-12">
                  <div className="text-slate-400 font-roboto">No shorts available.</div>
                </div>
              )}
              
              {/* Modern Shorts Grid - Mobile-first TikTok/YouTube Shorts style */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
                {visibleShorts.map((short, index) => (
                  <Card 
                    key={short.id || index} 
                    className="bg-slate-800/60 hover:bg-slate-800/80 transition-all duration-300 group overflow-hidden border-slate-700/50 animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CardContent className="p-0">
                      <div className="relative aspect-[9/16] bg-slate-900/50">
                        <img 
                          src={short.thumbnail} 
                          alt={short.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-300">
                          {/* Play Button */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a 
                              href={short.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-12 h-12 bg-wp-teal rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl pulse-glow"
                            >
                              <Play className="w-5 h-5 text-slate-900 ml-0.5" />
                            </a>
                          </div>
                          
                          {/* Duration Badge */}
                          {short.duration && (
                            <div className="absolute top-2 right-2 bg-black/90 px-2 py-1 rounded text-white text-xs font-medium flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {short.duration}
                            </div>
                          )}
                          
                          {/* SHORTS Badge */}
                          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded font-bold shadow-lg">
                            SHORTS
                          </div>
                          
                          {/* Views Badge */}
                          {short.views && short.views !== 'N/A' && (
                            <div className="absolute bottom-12 right-2 bg-black/80 px-2 py-1 rounded text-white text-xs flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              {short.views}
                            </div>
                          )}
                          
                          {/* Title Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-3">
                            <h3 className="text-white font-roboto font-medium text-sm line-clamp-2 leading-tight drop-shadow-lg">
                              {short.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More Button */}
              {hasMore && (
                <div className="text-center">
                  <Button 
                    onClick={loadMore}
                    size="lg"
                    className="font-semibold text-lg px-8 py-3 wp-gradient text-slate-900 hover:scale-105 transition-transform"
                  >
                    Load More Shorts
                  </Button>
                </div>
              )}
            </section>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Shorts;
