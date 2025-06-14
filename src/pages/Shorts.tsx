
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Clock, Eye } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchAllShorts, type Short } from '@/services/api';

const Shorts = () => {
  const { data: shorts = [], isLoading, error } = useQuery({
    queryKey: ['shorts'],
    queryFn: fetchAllShorts,
  });

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
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
              WordPress <span className="text-gradient">Shorts</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-roboto leading-relaxed mb-8">
              Quick, bite-sized WordPress tutorials and tips. Perfect for learning on the go 
              and getting instant solutions to common WordPress challenges.
            </p>
          </div>
        </section>

        {/* Shorts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {isLoading && (
              <div className="text-center py-12">
                <div className="text-white font-roboto">Loading shorts...</div>
              </div>
            )}

            {error && (
              <div className="text-center py-12">
                <div className="text-red-400 font-roboto">Failed to load shorts. Please try again later.</div>
              </div>
            )}

            {shorts.length === 0 && !isLoading && !error && (
              <div className="text-center py-12">
                <div className="text-slate-400 font-roboto">No shorts available.</div>
              </div>
            )}
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {shorts.map((short, index) => (
                <Card key={short.id || index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group aspect-[9/16]">
                  <CardContent className="p-0 h-full">
                    <div className="relative h-full">
                      <img 
                        src={short.thumbnail} 
                        alt={short.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a 
                          href={short.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-wp-teal rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                        >
                          <Play className="w-6 h-6 text-slate-900" />
                        </a>
                      </div>
                      
                      {/* Duration Badge */}
                      <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-white text-xs flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {short.duration}
                      </div>
                      
                      {/* Views Badge */}
                      <div className="absolute top-2 right-2 bg-black/80 px-2 py-1 rounded text-white text-xs flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {short.views}
                      </div>
                      
                      {/* Title Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                        <h3 className="text-white font-roboto font-medium text-sm line-clamp-2">
                          {short.title}
                        </h3>
                        <p className="text-slate-300 font-roboto text-xs mt-1">
                          {short.published_date}
                        </p>
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
  );
};

export default Shorts;
