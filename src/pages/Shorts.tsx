import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import { fetchAllShorts } from '@/services/api';
import { useState } from 'react';
import ShortsHero from '@/components/shorts/ShortsHero';
import ShortsGrid from '@/components/shorts/ShortsGrid';
import ShortsFilters from '@/components/shorts/ShortsFilters';
import ShortsStatsBar from '@/components/shorts/ShortsStatsBar';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import HeroBackground from '@/components/hero/HeroBackground';

const Shorts = () => {
  const [displayCount, setDisplayCount] = useState(12);
  const [activeFilter, setActiveFilter] = useState('all');

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

  const shortsJsonLd = allShorts.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'WordPress Shorts - Quick Tutorial Videos',
    description: 'Bite-sized WordPress tutorials and tips perfect for quick learning',
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
        userInteractionCount: parseInt(short.views?.replace(/[^0-9]/g, '') || '0'),
      },
      author: {
        '@type': 'Person',
        name: 'Sunil Kumar Sharma',
      },
    })),
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

      <div className="bg-background min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative bg-muted/30">
          <HeroBackground />
          <div className="container mx-auto px-4">
            <ShortsHero />
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <ShortsStatsBar 
              totalViews="2.5M+"
              totalDuration="25+ Hours"
              subscriberGrowth="+15%"
            />
          </div>
        </section>
        
        {/* Shorts Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Filters */}
            <ShortsFilters 
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              shortsCount={allShorts.length}
            />
            
            {/* Content */}
            {isLoading && (
              <LoadingSpinner message="Loading WordPress shorts..." size="lg" />
            )}

            {error && (
              <div className="text-center py-16">
                <p className="text-destructive text-lg">
                  Failed to load shorts. Please try again later.
                </p>
              </div>
            )}

            {allShorts.length === 0 && !isLoading && !error && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  No shorts available yet. Check back soon for amazing WordPress content!
                </p>
              </div>
            )}

            {visibleShorts.length > 0 && (
              <>
                <ShortsGrid shorts={visibleShorts} />
                
                {hasMore && (
                  <div className="text-center mt-16">
                    <Button 
                      onClick={loadMore} 
                      size="lg"
                      className="px-12 py-4 text-lg"
                    >
                      Load More WordPress Shorts ({allShorts.length - displayCount} remaining)
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default Shorts;
