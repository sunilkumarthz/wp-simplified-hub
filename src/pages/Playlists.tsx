
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Clock, BookOpen, Home, ChevronRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchAllPlaylists, type Playlist } from '@/services/api';
import { Link } from 'react-router-dom';

const Playlists = () => {
  const { data: playlists = [], isLoading, error } = useQuery({
    queryKey: ['playlists'],
    queryFn: fetchAllPlaylists,
  });

  console.log('Playlists page - API Response:', { playlists, isLoading, error });

  // Mock data fallback if API fails
  const mockPlaylists: Playlist[] = [
    {
      id: 1,
      title: 'WordPress Fundamentals for Beginners',
      description: 'Learn the basics of WordPress from installation to customization',
      thumbnail: '/lovable-uploads/7296f4cd-1ccd-4537-9d84-dd45c7c019c4.png',
      url: 'https://youtube.com/@WPSimplified',
      video_count: 12,
      duration: '3 hours',
      difficulty: 'Beginner'
    },
    {
      id: 2,
      title: 'Advanced WordPress Development',
      description: 'Deep dive into custom themes, plugins, and advanced WordPress features',
      thumbnail: '/lovable-uploads/7296f4cd-1ccd-4537-9d84-dd45c7c019c4.png',
      url: 'https://youtube.com/@WPSimplified',
      video_count: 18,
      duration: '5 hours',
      difficulty: 'Advanced'
    },
    {
      id: 3,
      title: 'WooCommerce Complete Guide',
      description: 'Build and manage successful e-commerce stores with WooCommerce',
      thumbnail: '/lovable-uploads/7296f4cd-1ccd-4537-9d84-dd45c7c019c4.png',
      url: 'https://youtube.com/@WPSimplified',
      video_count: 15,
      duration: '4 hours',
      difficulty: 'Intermediate'
    },
    {
      id: 4,
      title: 'WordPress Security & Performance',
      description: 'Secure and optimize your WordPress website for peak performance',
      thumbnail: '/lovable-uploads/7296f4cd-1ccd-4537-9d84-dd45c7c019c4.png',
      url: 'https://youtube.com/@WPSimplified',
      video_count: 10,
      duration: '2.5 hours',
      difficulty: 'Intermediate'
    }
  ];

  // Use mock data if no playlists from API
  const displayPlaylists = playlists.length > 0 ? playlists : mockPlaylists;

  const playlistCategories = [
    {
      title: "WordPress Fundamentals",
      description: "Essential knowledge for WordPress beginners",
      count: displayPlaylists.filter(p => p.difficulty?.toLowerCase() === 'beginner').length || 8,
      icon: "🏗️"
    },
    {
      title: "Advanced Development",
      description: "Deep dive into WordPress development",
      count: displayPlaylists.filter(p => p.difficulty?.toLowerCase() === 'advanced').length || 12,
      icon: "⚡"
    },
    {
      title: "WooCommerce Mastery",
      description: "Complete e-commerce solutions",
      count: displayPlaylists.filter(p => p.title.toLowerCase().includes('woocommerce')).length || 15,
      icon: "🛒"
    },
    {
      title: "Performance & Security",
      description: "Optimize and secure your WordPress site",
      count: displayPlaylists.filter(p => p.title.toLowerCase().includes('performance') || p.title.toLowerCase().includes('security')).length || 6,
      icon: "🔒"
    }
  ];

  const playlistJsonLd = displayPlaylists.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "WordPress Learning Playlists - Comprehensive Tutorial Series",
    "description": "Curated WordPress playlist collection covering fundamentals to advanced development",
    "numberOfItems": displayPlaylists.length,
    "itemListElement": displayPlaylists.map((playlist, index) => ({
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
        {/* Enhanced Background Effects with scroll effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#04D98B]/10 rounded-full blur-3xl floating-animation"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#037F8C]/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#04D98B]/5 to-transparent rounded-full"></div>
        </div>
        
        <div className="relative z-10">
          <Header />
          
          {/* Hero Section */}
          <section className="py-20 text-center relative animate-fade-in">
            <div className="container mx-auto px-4">
              <h1 className="text-6xl md:text-7xl font-baloo font-bold text-white mb-8">
                WordPress <span className="text-gradient">Playlists</span>
              </h1>
              
              {/* Breadcrumb moved below heading */}
              <nav className="flex justify-center mb-8" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 text-sm">
                  <li className="flex items-center">
                    <Home className="w-4 h-4 text-slate-400 mr-2" />
                    <Link to="/" className="text-slate-400 hover:text-[#04D98B] transition-colors">Home</Link>
                  </li>
                  <li>
                    <ChevronRight className="w-4 h-4 text-slate-500 mx-2" />
                  </li>
                  <li className="text-[#04D98B] font-semibold">Playlists</li>
                </ol>
              </nav>

              <div className="w-32 h-1 wp-gradient rounded-full mx-auto mb-8"></div>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto font-roboto leading-relaxed">
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
                  <div key={index} className="creative-card bg-slate-800/50 border border-slate-700/50 p-8 text-center group animate-slide-in-left" style={{ animationDelay: `${index * 150}ms` }}>
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <div className="w-12 h-12 bg-gradient-to-br from-[#04D98B] to-[#037F8C] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-baloo font-bold text-white mb-3 group-hover:text-[#04D98B] transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-slate-300 font-roboto text-sm mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="inline-flex items-center bg-[#04D98B]/20 text-[#04D98B] px-4 py-2 rounded-full text-sm font-semibold">
                      {category.count} Playlists
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Playlists Grid */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-baloo font-bold text-white mb-12 text-center">
                All Learning Paths
              </h2>
              
              {isLoading && (
                <div className="text-center py-20">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#04D98B]/20 rounded-full mb-4">
                    <div className="w-8 h-8 border-4 border-[#04D98B] border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <div className="text-white font-roboto text-lg">Loading playlists...</div>
                </div>
              )}

              {error && (
                <div className="text-center py-12 mb-8">
                  <div className="text-amber-400 font-roboto text-lg mb-4">Using sample playlists while API is loading...</div>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayPlaylists.map((playlist, index) => (
                  <div key={playlist.id || index} className="creative-card bg-slate-800/50 border border-slate-700/50 group animate-slide-in-left hover:scale-105 transition-all duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="relative">
                      <img 
                        src={playlist.thumbnail} 
                        alt={playlist.title}
                        className="w-full h-56 object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a 
                          href={playlist.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="icon-btn pulse-glow"
                        >
                          <Play className="w-8 h-8" />
                        </a>
                      </div>
                      {playlist.difficulty && (
                        <div className={`absolute top-4 left-4 ${
                          playlist.difficulty.toLowerCase() === 'beginner' ? 'bg-emerald-500' :
                          playlist.difficulty.toLowerCase() === 'intermediate' ? 'bg-amber-500' :
                          'bg-red-500'
                        } text-white text-sm px-3 py-1 rounded-full font-semibold shadow-lg`}>
                          {playlist.difficulty}
                        </div>
                      )}
                      {playlist.video_count && (
                        <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                          {playlist.video_count} videos
                        </div>
                      )}
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-baloo font-bold text-white mb-4 line-clamp-2 group-hover:text-[#04D98B] transition-colors duration-300">
                        {playlist.title}
                      </h3>
                      <p className="text-slate-300 font-roboto text-sm mb-6 line-clamp-3 leading-relaxed">
                        {playlist.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-6">
                        {playlist.video_count && (
                          <span className="flex items-center text-[#04D98B] text-sm font-semibold">
                            <Play className="w-4 h-4 mr-2" />
                            {playlist.video_count} Videos
                          </span>
                        )}
                        {playlist.duration && (
                          <span className="flex items-center text-slate-400 text-sm">
                            <Clock className="w-4 h-4 mr-2" />
                            {playlist.duration}
                          </span>
                        )}
                      </div>
                      
                      <a href={playlist.url} target="_blank" rel="noopener noreferrer" className="no-link-styles">
                        <Button className="w-full font-semibold hover:scale-105 transition-transform duration-200">
                          Watch Playlist
                        </Button>
                      </a>
                    </div>
                  </div>
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
