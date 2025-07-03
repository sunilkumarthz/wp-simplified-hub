
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { useQuery } from '@tanstack/react-query';
import { fetchAllPlaylists } from '@/services/api';
import { useState } from 'react';
import PlaylistsHero from '@/components/playlists/PlaylistsHero';
import PlaylistsGrid from '@/components/playlists/PlaylistsGrid';
import HeroBackground from '@/components/hero/HeroBackground';

const Playlists = () => {
  const [displayCount, setDisplayCount] = useState(9);

  const {
    data: allPlaylists = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['playlists'],
    queryFn: fetchAllPlaylists,
  });

  const visiblePlaylists = allPlaylists.slice(0, displayCount);
  const hasMore = allPlaylists.length > displayCount;

  const loadMore = () => {
    setDisplayCount((prev) => prev + 9);
  };

  const playlistsJsonLd =
    allPlaylists.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'WordPress Tutorials - Learn WordPress Step by Step',
          description:
            'Comprehensive WordPress tutorials for beginners to advanced users. Learn WordPress step by step with our easy-to-follow playlists.',
          numberOfItems: allPlaylists.length,
          itemListElement: allPlaylists.map((playlist, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: `https://wpsimplified.in/playlists`,
          })),
        }
      : null;

  return (
    <>
      <SEOHead
        title="WordPress Tutorials - Learn WordPress Step by Step | WPSimplified"
        description="Comprehensive WordPress tutorials for beginners to advanced users. Learn WordPress step by step with our easy-to-follow playlists."
        keywords="WordPress tutorials, learn WordPress, WordPress playlists, WordPress step by step, WordPress for beginners"
        url="https://wpsimplified.in/playlists"
        jsonLd={playlistsJsonLd}
      />
      <div className="bg-slate-900">
        <Header />
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <HeroBackground />
          <PlaylistsHero totalPlaylists={allPlaylists.length} />
          <PlaylistsGrid
            playlists={allPlaylists}
            visiblePlaylists={visiblePlaylists}
            hasMore={hasMore}
            isLoading={isLoading}
            error={error}
            onLoadMore={loadMore}
          />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Playlists;
