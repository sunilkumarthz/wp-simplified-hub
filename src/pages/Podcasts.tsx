import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Clock, Mic, User } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchAllPodcasts, type Podcast } from '@/services/api';

const Podcasts = () => {
  const { data: podcasts = [], isLoading, error } = useQuery({
    queryKey: ['podcasts'],
    queryFn: fetchAllPodcasts,
  });

  const podcastJsonLd = podcasts.length > 0 ? {
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
                WordPress <span className="text-gradient">Podcasts</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto font-roboto leading-relaxed mb-8">
                In-depth conversations with WordPress experts, developers, and community leaders. 
                Gain insights, learn best practices, and stay updated with the latest in WordPress.
              </p>
            </div>
          </section>

          {/* Podcasts Grid */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-baloo font-bold text-white mb-12 text-center">
                Latest Episodes
              </h2>
              
              {isLoading && (
                <div className="text-center py-12">
                  <div className="text-white font-roboto">Loading podcasts...</div>
                </div>
              )}

              {error && (
                <div className="text-center py-12">
                  <div className="text-red-400 font-roboto">Failed to load podcasts. Please try again later.</div>
                </div>
              )}

              {podcasts.length === 0 && !isLoading && !error && (
                <div className="text-center py-12">
                  <div className="text-slate-400 font-roboto">No podcasts available.</div>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {podcasts.map((podcast, index) => (
                  <Card key={podcast.id || index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img 
                          src={podcast.thumbnail} 
                          alt={podcast.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="w-16 h-16 bg-wp-teal rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                            <Play className="w-8 h-8 text-slate-900" />
                          </button>
                        </div>
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-wp-teal text-slate-900 font-roboto font-medium">
                            <Mic className="w-3 h-3 mr-1" />
                            Podcast
                          </Badge>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-white text-xs flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {podcast.duration}
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-baloo font-bold text-white mb-3 line-clamp-2">
                          {podcast.title}
                        </h3>
                        <p className="text-slate-300 font-roboto text-sm mb-4 line-clamp-2">
                          {podcast.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-slate-400 text-sm mb-4">
                          <span className="flex items-center font-roboto">
                            <User className="w-4 h-4 mr-1" />
                            {podcast.guest}
                          </span>
                          <span className="font-roboto">{podcast.published_date}</span>
                        </div>
                        
                        <audio 
                          controls 
                          className="w-full"
                          src={podcast.audio_url}
                        >
                          Your browser does not support the audio element.
                        </audio>
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

export default Podcasts;
