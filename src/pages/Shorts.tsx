import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Clock, Eye, TrendingUp, Filter } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchAllShorts, type Short } from '@/services/api';
import { useState } from 'react';
import { decodeHtmlEntities } from '@/lib/htmlUtils';
import HeroBackground from '@/components/hero/HeroBackground';

const Shorts = () => {
  const [displayCount, setDisplayCount] = useState(12);

  const {
    data: allShorts = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['shorts'],
    queryFn: fetchAllShorts,
  });

  const visibleShorts = allShorts.slice(0, displayCount);
  const hasMore = allShorts.length > displayCount;

  const loadMore = () => {
    setDisplayCount((prev) => prev + 12);
  };

  const shortsJsonLd =
    allShorts.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'WordPress Shorts - Quick Tutorial Videos',
          description:
            'Bite-sized WordPress tutorials and tips perfect for quick learning',
          numberOfItems: allShorts.length,
          itemListElement: allShorts.map((short, index) => ({
            '@type': 'VideoObject',
            position: index + 1,
            name: short.title,
            thumbnailUrl: short.thumbnail,
            uploadDate: short.published_date,
            duration: short.duration,
            embedUrl: short.videourl,
            interactionStatistic: {
              '@type': 'InteractionCounter',
              interactionType: 'http://schema.org/WatchAction',
              userInteractionCount: parseInt(
                short.views?.replace(/[^0-9]/g, '') || '0'
              ),
            },
            author: {
              '@type': 'Person',
              name: 'Sunil Kumar Sharma',
            },
          })),
        }
      : null;

  return (
    <>
      <SEOHead
        title="WordPress Shorts - Quick Tutorial Videos | WPSimplified"
        description="Quick, bite-sized WordPress tutorials and tips. Perfect for learning on the go and getting instant solutions to common WordPress challenges."
        keywords="WordPress shorts, WordPress tips, quick WordPress tutorials, WordPress solutions, WordPress hacks"
        url="https://wpsimplified.in/shorts"
        jsonLd={shortsJsonLd}
      />

      <div className="min-h-screen bg-slate-900">
        <Header />

        <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <HeroBackground />
          <div className="container mx-auto px-4">
            {/* Creative Hero Section */}
            <div className="py-20 text-center relative overflow-hidden">
              {/* Background Effects */}
              <div className="absolute top-10 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute bottom-10 right-1/4 w-80 h-80 bg-wp-teal/5 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: '3s' }}
              ></div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-6 py-3 rounded-full text-sm font-semibold mb-6 animate-fade-in">
                  <TrendingUp className="w-5 h-5" />
                  Quick Learning Content
                </div>

                <h1 className="text-5xl md:text-6xl font-baloo font-bold text-white mb-6 animate-fade-in">
                  WordPress <span className="text-gradient">Shorts</span>
                </h1>

                <p className="text-xl text-slate-300 max-w-3xl mx-auto font-roboto leading-relaxed mb-8 animate-fade-in">
                  Master WordPress in minutes with our bite-sized tutorials.
                  Perfect for quick learning and instant solutions to your
                  WordPress challenges.
                </p>
              </div>
            </div>

            {/* Shorts Grid Section */}
            <div className="pb-20">
              {isLoading && (
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-wp-teal/20 rounded-full mb-6">
                    <div className="w-10 h-10 border-4 border-wp-teal border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <div className="text-white font-roboto text-xl mb-2">
                    Loading amazing shorts...
                  </div>
                  <div className="text-slate-400 font-roboto">
                    Preparing bite-sized WordPress wisdom
                  </div>
                </div>
              )}

              {error && (
                <div className="text-center py-16">
                  <div className="text-red-400 font-roboto text-lg">
                    Failed to load shorts. Please try again later.
                  </div>
                </div>
              )}

              {allShorts.length === 0 && !isLoading && !error && (
                <div className="text-center py-16">
                  <div className="text-slate-400 font-roboto text-lg">
                    No shorts available yet. Check back soon!
                  </div>
                </div>
              )}

              {/* Creative Masonry-style Grid */}
              {visibleShorts.length > 0 && (
                <>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-16">
                    {visibleShorts.map((short, index) => (
                      <Card
                        key={short.id || index}
                        className="bg-slate-800/40 hover:bg-slate-800/70 transition-all duration-500 group overflow-hidden border-slate-700/30 animate-fade-in transform hover:scale-105 hover:-rotate-1 hover:z-10 relative"
                        style={{
                          animationDelay: `${index * 30}ms`,
                          gridRowEnd: index % 3 === 0 ? 'span 2' : 'span 1',
                        }}
                      >
                        <CardContent className="p-0">
                          <div className="relative aspect-[9/16] bg-slate-800/50 overflow-hidden">
                            <img
                              src={short.thumbnail}
                              alt={decodeHtmlEntities(short.title)}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                            />

                            {/* Creative Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-all duration-300">
                              {/* Floating Play Button */}
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                                <a
                                  href={short.videourl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 shadow-2xl animate-pulse"
                                >
                                  <Play className="w-5 h-5 text-white ml-0.5" />
                                </a>
                              </div>

                              {/* Modern Badges */}
                              <div className="absolute top-2 right-2 flex flex-col gap-2">
                                {short.duration && (
                                  <div className="bg-black/80 px-2 py-1 rounded-lg text-white text-xs font-bold flex items-center gap-1 backdrop-blur-sm">
                                    <Clock className="w-3 h-3" />
                                    {short.duration}
                                  </div>
                                )}
                              </div>

                              <div className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-2 py-1 rounded-lg font-bold shadow-lg">
                                SHORTS
                              </div>

                              {short.views && short.views !== 'N/A' && (
                                <div className="absolute bottom-12 right-2 bg-wp-teal/90 px-2 py-1 rounded-lg text-white text-xs flex items-center gap-1 backdrop-blur-sm">
                                  <Eye className="w-3 h-3" />
                                  {short.views}
                                </div>
                              )}

                              {/* Creative Title */}
                              <div className="absolute bottom-0 left-0 right-0 p-3">
                                <h3 className="text-white font-roboto font-bold text-xs line-clamp-3 leading-tight drop-shadow-lg">
                                  {decodeHtmlEntities(short.title)}
                                </h3>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Creative Load More */}
                  {hasMore && (
                    <div className="text-center">
                      <Button
                        onClick={loadMore}
                        className="bg-gradient-to-r from-wp-teal to-wp-teal-dark hover:from-wp-teal-dark hover:to-wp-teal text-white font-bold text-lg px-16 py-5 rounded-2xl shadow-2xl hover:shadow-wp-teal/25 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                      >
                        <span className="relative z-10">
                          Load More Magic ({allShorts.length - displayCount}{' '}
                          more)
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Shorts;
