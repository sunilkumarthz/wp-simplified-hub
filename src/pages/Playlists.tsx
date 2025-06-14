import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Clock, BookOpen } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchAllPlaylists, type Playlist } from '@/services/api';

const Playlists = () => {
  const { data: playlists = [], isLoading, error } = useQuery({
    queryKey: ['playlists'],
    queryFn: fetchAllPlaylists,
  });

  const playlistCategories = [
    {
      title: "WordPress Fundamentals",
      description: "Essential knowledge for WordPress beginners",
      count: 8
    },
    {
      title: "Advanced Development",
      description: "Deep dive into WordPress development",
      count: 12
    },
    {
      title: "WooCommerce Mastery",
      description: "Complete e-commerce solutions",
      count: 15
    },
    {
      title: "Performance & Security",
      description: "Optimize and secure your WordPress site",
      count: 6
    }
  ];

  const playlistJsonLd = playlists.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "WordPress Learning Playlists - Comprehensive Tutorial Series",
    "description": "Curated WordPress playlist collection covering fundamentals to advanced development",
    "numberOfItems": playlists.length,
    "itemListElement": playlists.map((playlist, index) => ({
      "@type": "Course",
      "position": index + 1,
      "name": playlist.title,
      "description": playlist.description,
      "provider": {
        "@type": "Organization",
        "name": "WPSimplified",
        "url": "https://wpsimplified.in"
      },
      "instructor": {
        "@type": "Person",
        "name": "Sunil Kumar Sharma"
      },
      "educationalLevel": playlist.difficulty,
      "url": playlist.url
    }))
  } : null;

  return (
    <>
      <SEOHead
        title="WordPress Playlists - Comprehensive Learning Paths | WPSimplified"
        description="Discover curated WordPress tutorial playlists covering everything from beginner basics to advanced development. Structured learning paths by WordPress expert Sunil Kumar Sharma."
        keywords="WordPress playlists, WordPress tutorial series, WordPress learning path, WordPress course, WordPress development tutorials"
        url="https://wpsimplified.in/playlists"
        jsonLd={playlistJsonLd}
      />
      
      <div className="min-h-screen bg-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 wp-gradient-dark opacity-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-wp-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-wp-blue/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <Header />
          <Breadcrumb />
          
          {/* Hero Section */}
          <section className="py-20 text-center">
            <div className="container mx-auto px-4">
              <h1 className="text-5xl md:text-6xl font-baloo font-bold text-white mb-6">
                WordPress <span className="text-gradient">Playlists</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto font-roboto leading-relaxed mb-8">
                Comprehensive learning paths designed to take you from beginner to expert. 
                Each playlist is carefully curated to build your WordPress skills progressively.
              </p>
            </div>
          </section>

          {/* Categories Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-baloo font-bold text-white mb-12 text-center">
                Learning Categories
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {playlistCategories.map((category, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-wp-teal rounded-lg flex items-center justify-center mx-auto mb-4">
                        <BookOpen className="w-6 h-6 text-slate-900" />
                      </div>
                      <h3 className="text-lg font-baloo font-bold text-white mb-2">
                        {category.title}
                      </h3>
                      <p className="text-slate-300 font-roboto text-sm mb-3 leading-relaxed">
                        {category.description}
                      </p>
                      <Badge variant="secondary" className="bg-wp-teal/20 text-wp-teal">
                        {category.count} Playlists
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Playlists Grid */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-baloo font-bold text-white mb-12 text-center">
                All Playlists
              </h2>
              
              {isLoading && (
                <div className="text-center py-12">
                  <div className="text-white font-roboto">Loading playlists...</div>
                </div>
              )}

              {error && (
                <div className="text-center py-12">
                  <div className="text-red-400 font-roboto">Failed to load playlists. Please try again later.</div>
                </div>
              )}

              {playlists.length === 0 && !isLoading && !error && (
                <div className="text-center py-12">
                  <div className="text-slate-400 font-roboto">No playlists available.</div>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {playlists.map((playlist, index) => (
                  <Card key={playlist.id || index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img 
                          src={playlist.thumbnail} 
                          alt={playlist.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <a 
                            href={playlist.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-16 h-16 bg-wp-teal rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                          >
                            <Play className="w-8 h-8 text-slate-900" />
                          </a>
                        </div>
                        <div className="absolute top-2 right-2 bg-black/80 px-2 py-1 rounded text-white text-xs">
                          {playlist.video_count} videos
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Badge 
                            variant="secondary" 
                            className={`${
                              playlist.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                              playlist.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-red-500/20 text-red-400'
                            }`}
                          >
                            {playlist.difficulty}
                          </Badge>
                          <span className="flex items-center text-slate-400 text-sm font-roboto">
                            <Clock className="w-4 h-4 mr-1" />
                            {playlist.duration}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-baloo font-bold text-white mb-3 line-clamp-2">
                          {playlist.title}
                        </h3>
                        <p className="text-slate-300 font-roboto text-sm mb-4 line-clamp-2">
                          {playlist.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-wp-teal font-roboto font-semibold text-sm">
                            {playlist.video_count} Videos
                          </span>
                          <a 
                            href={playlist.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-wp-teal hover:text-white transition-colors font-roboto text-sm font-medium"
                          >
                            Watch Now →
                          </a>
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
    </>
  );
};

export default Playlists;
