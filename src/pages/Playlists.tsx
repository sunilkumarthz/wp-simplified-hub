
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Clock, BookOpen } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchAllPlaylists, type Playlist } from '@/services/api';
import { useState } from 'react';

const Playlists = () => {
  const [displayCount, setDisplayCount] = useState(9);

  const { data: allPlaylists = [], isLoading, error } = useQuery({
    queryKey: ['playlists'],
    queryFn: fetchAllPlaylists,
  });

  const visiblePlaylists = allPlaylists.slice(0, displayCount);
  const hasMore = allPlaylists.length > displayCount;

  const loadMore = () => {
    setDisplayCount(prev => prev + 9);
  };

  const playlistsJsonLd = allPlaylists.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "WordPress Tutorials - Learn WordPress Step by Step",
    "description": "Comprehensive WordPress tutorials for beginners to advanced users. Learn WordPress step by step with our easy-to-follow playlists.",
    "numberOfItems": allPlaylists.length,
    "itemListElement": allPlaylists.map((playlist, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://wpsimplified.in/playlists`
    }))
  } : null;

  return (
    <>
      <SEOHead
        title="WordPress Tutorials - Learn WordPress Step by Step | WPSimplified"
        description="Comprehensive WordPress tutorials for beginners to advanced users. Learn WordPress step by step with our easy-to-follow playlists."
        keywords="WordPress tutorials, learn WordPress, WordPress playlists, WordPress step by step, WordPress for beginners"
        url="https://wpsimplified.in/playlists"
        jsonLd={playlistsJsonLd}
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
                WordPress <span className="text-gradient">Playlists</span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto font-roboto leading-relaxed mb-8">
                Dive deep into specific WordPress topics with our curated playlists. 
                From beginner basics to advanced techniques, find the perfect learning path for you.
              </p>

              {/* Stats */}
              <div className="flex justify-center items-center gap-8 text-center mb-12">
                <div className="space-y-2">
                  <div className="text-2xl font-baloo font-bold text-wp-teal">{allPlaylists.length}+</div>
                  <div className="text-slate-400 text-sm">Total Playlists</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-baloo font-bold text-wp-teal">Step-by-Step</div>
                  <div className="text-slate-400 text-sm">Learning</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-baloo font-bold text-wp-teal">Expert</div>
                  <div className="text-slate-400 text-sm">Techniques</div>
                </div>
              </div>
            </section>

            {/* Playlists Grid */}
            <section className="pb-20">
              {isLoading && (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-wp-teal/20 rounded-full mb-4">
                    <div className="w-8 h-8 border-4 border-wp-teal border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <div className="text-white font-roboto text-lg">Loading playlists...</div>
                </div>
              )}

              {error && (
                <div className="text-center py-12">
                  <div className="text-red-400 font-roboto text-lg">Failed to load playlists. Please try again later.</div>
                </div>
              )}

              {allPlaylists.length === 0 && !isLoading && !error && (
                <div className="text-center py-12">
                  <div className="text-slate-400 font-roboto">No playlists available.</div>
                </div>
              )}
              
              {/* Modern Playlists Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {visiblePlaylists.map((playlist, index) => (
                <Card 
                  key={playlist.id || index} 
                  className="bg-slate-800/60 hover:bg-slate-800/80 transition-all duration-300 group border-slate-700/50 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={playlist.thumbnail} 
                        alt={playlist.title}
                        className="w-full h-56 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a 
                          href={playlist.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-16 h-16 bg-wp-teal rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl pulse-glow"
                        >
                          <BookOpen className="w-6 h-6 text-slate-900" />
                        </a>
                      </div>
                      
                      {/* Playlist Stats Badge */}
                      <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 rounded-full text-white text-sm font-medium">
                        {playlist.video_count} videos
                      </div>
                      
                      {/* Difficulty Badge */}
                      <div className="absolute top-4 right-4 bg-wp-teal text-slate-900 px-3 py-1 rounded-full text-sm font-bold">
                        {playlist.difficulty}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-baloo font-bold text-white mb-3 line-clamp-2">
                        {playlist.title}
                      </h3>
                      <p className="text-slate-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                        {playlist.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-slate-400 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {playlist.duration}
                        </div>
                        <div className="flex items-center text-slate-400 text-sm">
                          <Play className="w-4 h-4 mr-1" />
                          {playlist.video_count} videos
                        </div>
                      </div>
                      
                      <a 
                        href={playlist.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="no-link-styles"
                      >
                        <Button className="w-full font-semibold text-slate-900 wp-gradient hover:scale-105 transition-transform">
                          Explore Playlist
                        </Button>
                      </a>
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
                    Load More Playlists
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

export default Playlists;
