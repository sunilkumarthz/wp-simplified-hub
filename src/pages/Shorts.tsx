import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Clock, Eye } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchAllShorts, type Short } from '@/services/api';
import { useState } from 'react';
import { decodeHtmlEntities } from '@/lib/htmlUtils';

const Shorts = () => {
  const [displayCount, setDisplayCount] = useState(8);

  const { data: allShorts = [], isLoading, error } = useQuery({
    queryKey: ['shorts'],
    queryFn: fetchAllShorts,
  });

  const visibleShorts = allShorts.slice(0, displayCount);
  const hasMore = allShorts.length > displayCount;

  const loadMore = () => {
    setDisplayCount(prev => prev + 8);
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
      "embedUrl": short.videourl,
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

      <div className="min-h-screen bg-slate-800">
        <Header />

        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="py-16 text-center bg-slate-800">
            <h1 className="text-4xl md:text-5xl font-baloo font-bold text-white mb-6">
              WordPress <span className="text-gradient">Shorts</span>
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl mx-auto font-roboto leading-relaxed mb-8">
              Quick, bite-sized WordPress tutorials and tips. Perfect for
              learning on the go and getting instant solutions to common
              WordPress challenges.
            </p>

            {/* Stats */}
            {/* <div className="flex justify-center items-center gap-8 text-center mb-12">
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
            </div> */}
          </section>

          {/* Shorts Grid Section */}
          <section className="pb-20 bg-slate-800">
            {isLoading && (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-wp-teal/20 rounded-full mb-4">
                  <div className="w-8 h-8 border-4 border-wp-teal border-t-transparent rounded-full animate-spin"></div>
                </div>
                <div className="text-white font-roboto text-lg">
                  Loading shorts...
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
                  No shorts available.
                </div>
              </div>
            )}

            {/* 4 Shorts per Row Grid */}
            {visibleShorts.length > 0 && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {visibleShorts.map((short, index) => (
                    <Card
                      key={short.id || index}
                      className="bg-slate-800/60 hover:bg-slate-800/80 transition-all duration-300 group overflow-hidden border-slate-700/50 animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <CardContent className="p-0">
                        <div className="relative aspect-[9/16] bg-slate-800/50 overflow-hidden">
                          <img
                            src={short.thumbnail}
                            alt={decodeHtmlEntities(short.title)}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                            loading="lazy"
                          />

                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 opacity-100 group-hover:opacity-90 transition-opacity duration-300">
                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <a
                                href={short.videourl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 bg-wp-teal rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl pulse-glow"
                              >
                                <Play className="w-6 h-6 text-slate-900 ml-0.5" />
                              </a>
                            </div>

                            {/* Duration Badge */}
                            {short.duration && (
                              <div className="absolute top-3 right-3 bg-black/90 px-2 py-1 rounded text-white text-xs font-medium flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {short.duration}
                              </div>
                            )}

                            {/* SHORTS Badge */}
                            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded font-bold shadow-lg">
                              SHORTS
                            </div>

                            {/* Views Badge */}
                            {short.views && short.views !== 'N/A' && (
                              <div className="absolute bottom-16 right-3 bg-black/80 px-2 py-1 rounded text-white text-xs flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                {short.views}
                              </div>
                            )}

                            {/* Title Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <h3 className="text-white font-roboto font-medium text-sm line-clamp-3 leading-tight drop-shadow-lg">
                                {decodeHtmlEntities(short.title)}
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
                      className="font-semibold text-lg px-12 py-4 bg-wp-teal hover:bg-wp-teal/90 text-slate-900 hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      Load More Shorts ({allShorts.length - displayCount}{' '}
                      remaining)
                    </Button>
                  </div>
                )}
              </>
            )}
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Shorts;
