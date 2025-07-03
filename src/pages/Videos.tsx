import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { fetchLatestVideos, searchVideos, type Video } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import VideosHero from '@/components/videos/VideosHero';
import VideosGrid from '@/components/videos/VideosGrid';
import HeroBackground from '@/components/hero/HeroBackground';

const Videos = () => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [searchResults, setSearchResults] = useState<Video[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [displayCount, setDisplayCount] = useState(10);

  // Fetch latest videos
  const {
    data: allVideos = [],
    isLoading,
    error,
  } = useQuery({
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
    setDisplayCount((prev) => prev + 10);
  };

  const pageTitle = searchQuery
    ? `Search Results for "${searchQuery}" - WordPress Video Tutorials`
    : 'WordPress Video Tutorials - Complete Learning Library';
  const pageDescription = searchQuery
    ? `Find WordPress tutorials about "${searchQuery}". Comprehensive video guides for WordPress development, themes, plugins, and more.`
    : 'Comprehensive WordPress video tutorials covering everything from basics to advanced development. Learn WordPress with step-by-step video guides.';

  // JSON-LD for VideoObject schema
  const videoJsonLd =
    displayedVideos.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: pageTitle,
          description: pageDescription,
          numberOfItems: displayedVideos.length,
          itemListElement: displayedVideos.map((video, index) => ({
            '@type': 'VideoObject',
            position: index + 1,
            name: video.title,
            description: video.description,
            thumbnailUrl: video.thumbnail,
            uploadDate: video.published_date,
            duration: video.duration,
            embedUrl: video.videourl,
            interactionStatistic: {
              '@type': 'InteractionCounter',
              interactionType: 'http://schema.org/WatchAction',
              userInteractionCount: parseInt(
                video.views?.replace(/[^0-9]/g, '') || '0'
              ),
            },
            author: {
              '@type': 'Person',
              name: 'Sunil Kumar Sharma',
              url: 'https://sunilkumarthz.com',
            },
          })),
        }
      : null;

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords="WordPress tutorials, WordPress development, Gutenberg guide, WooCommerce setup, WordPress plugins, WordPress themes, WordPress security, WordPress performance"
        url="https://wpsimplified.in/videos"
        jsonLd={videoJsonLd}
      />

      <div className="bg-slate-800">
        <Header />

        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <HeroBackground />
          <VideosHero
            searchQuery={searchQuery}
            isSearching={isSearching}
            onSearchQueryChange={setSearchQuery}
            onSearch={handleSearch}
          />

          <VideosGrid
            displayedVideos={displayedVideos}
            visibleVideos={visibleVideos}
            searchQuery={searchQuery}
            isLoading={isLoading}
            error={error}
            hasMore={hasMore}
            onLoadMore={loadMore}
          />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Videos;
