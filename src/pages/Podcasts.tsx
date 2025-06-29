
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Clock, Mic, User } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchAllPodcasts, type Podcast } from '@/services/api';
import { useState } from 'react';
import { decodeHtmlEntities } from '@/lib/htmlUtils';

const Podcasts = () => {
  const [displayCount, setDisplayCount] = useState(10);

  const { data: allPodcasts = [], isLoading, error } = useQuery({
    queryKey: ['podcasts'],
    queryFn: fetchAllPodcasts,
  });

  const visiblePodcasts = allPodcasts.slice(0, displayCount);
  const hasMore = allPodcasts.length > displayCount;

  const loadMore = () => {
    setDisplayCount(prev => prev + 10);
  };

  const podcastJsonLd = allPodcasts.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    "name": "The WordPress Creator Podcast - WPSimplified",
    "description": "In-depth conversations with WordPress experts, developers, and community leaders",
    "url": "https://wpsimplified.in/podcasts",
    "author": {
      "@type": "Person",
      "name": "Sunil Kumar Sharma",
      "url": "https://sunilkumarthz.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "WPSimplified",
      "url": "https://wpsimplified.in"
    }
  } : null;

  return (
    <>
      <SEOHead
        title="WordPress Podcasts - Expert Interviews & Insights | WPSimplified"
        description="In-depth conversations with WordPress experts, developers, and community leaders. Gain insights, learn best practices, and stay updated with the latest in WordPress."
        keywords="WordPress podcast, WordPress interviews, WordPress experts, WordPress community, WordPress insights"
        url="https://wpsimplified.in/podcasts"
        jsonLd={podcastJsonLd}
      />

      <div className="min-h-screen bg-slate-800 relative overflow-hidden">
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
                WordPress <span className="text-gradient">Podcasts</span>
              </h1>

              <p className="text-xl text-slate-300 max-w-3xl mx-auto font-roboto leading-relaxed mb-8 mt-6">
                In-depth conversations with WordPress experts, developers, and
                community leaders. Gain insights, learn best practices, and stay
                updated with the latest in WordPress.
              </p>
            </div>
          </section>

          {/* Podcasts Grid */}
          <section className="pb-20">
            <div className="container mx-auto px-4">
              {isLoading && (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-wp-teal/20 rounded-full mb-4">
                    <div className="w-8 h-8 border-4 border-wp-teal border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <div className="text-white font-roboto text-lg">
                    Loading podcasts...
                  </div>
                </div>
              )}

              {error && (
                <div className="text-center py-12">
                  <div className="text-red-400 font-roboto text-lg">
                    Failed to load podcasts. Please try again later.
                  </div>
                </div>
              )}

              {allPodcasts.length === 0 && !isLoading && !error && (
                <div className="text-center py-12">
                  <div className="text-slate-400 font-roboto">
                    No podcasts available.
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {visiblePodcasts.map((podcast, index) => (
                  <Card
                    key={podcast.id || index}
                    className="bg-slate-800/50 hover:bg-slate-800/70 transition-all duration-300 group overflow-hidden"
                  >
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                          src={podcast.thumbnail}
                          alt={decodeHtmlEntities(podcast.title)}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <a
                            href={podcast.videourl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-16 h-16 bg-wp-teal rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl pulse-glow"
                          >
                            <Mic className="w-6 h-6 text-slate-900" />
                          </a>
                        </div>
                        <div className="absolute top-2 left-2 bg-wp-teal text-slate-900 text-xs px-2 py-1 rounded font-semibold">
                          <Mic className="w-3 h-3 mr-1 inline" />
                          Podcast
                        </div>
                        {podcast.duration && (
                          <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-white text-xs">
                            {podcast.duration}
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-baloo font-bold text-white mb-3 line-clamp-2">
                          {decodeHtmlEntities(podcast.title)}
                        </h3>
                        <a
                          href={podcast.videourl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="no-link-styles"
                        >
                          <Button className="w-full font-semibold">
                            Listen Now
                          </Button>
                        </a>
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
                    Load More Episodes
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

export default Podcasts;
