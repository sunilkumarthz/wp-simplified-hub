
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Play, Clock, Eye, TrendingUp } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchAllShorts } from '@/services/api';
import { decodeHtmlEntities } from '@/lib/htmlUtils';

const LatestShorts = () => {
  const { data: shorts = [], isLoading } = useQuery({
    queryKey: ['latestShorts'],
    queryFn: fetchAllShorts,
  });

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-wp-teal/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <TrendingUp className="w-4 h-4" />
            Trending Content
          </div>
          <h2 className="text-4xl md:text-5xl font-baloo font-bold text-white mb-4">
            Latest <span className="text-gradient">Shorts</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-roboto">
            Quick WordPress tips and tricks in bite-sized videos
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-wp-teal/20 rounded-full mb-4">
              <div className="w-8 h-8 border-4 border-wp-teal border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="text-white font-roboto text-lg">
              Loading shorts...
            </div>
          </div>
        ) : (
          <>
            {/* Creative Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {shorts.slice(0, 4).map((short, index) => (
                <Card
                  key={short.id || index}
                  className="bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70 transition-all duration-500 group overflow-hidden animate-fade-in transform hover:scale-105 hover:rotate-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-[9/16] overflow-hidden">
                      <img
                        src={short.thumbnail}
                        alt={decodeHtmlEntities(short.title)}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Creative Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300">
                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <a
                            href={short.videourl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-2xl pulse-glow"
                          >
                            <Play className="w-7 h-7 text-white ml-1" />
                          </a>
                        </div>

                        {/* Duration Badge */}
                        {short.duration && (
                          <div className="absolute top-3 right-3 bg-black/90 px-3 py-1 rounded-full text-white text-xs font-bold flex items-center gap-1 backdrop-blur-sm">
                            <Clock className="w-3 h-3" />
                            {short.duration}
                          </div>
                        )}

                        {/* SHORTS Badge */}
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                          SHORTS
                        </div>

                        {/* Views Badge */}
                        {short.views && short.views !== 'N/A' && (
                          <div className="absolute bottom-16 right-3 bg-wp-teal/90 px-2 py-1 rounded-full text-white text-xs flex items-center gap-1 backdrop-blur-sm">
                            <Eye className="w-3 h-3" />
                            {short.views}
                          </div>
                        )}

                        {/* Title Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-white font-roboto font-bold text-sm line-clamp-3 leading-tight drop-shadow-lg">
                            {decodeHtmlEntities(short.title)}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Creative CTA */}
            <div className="text-center">
              <Link to="/shorts">
                <Button className="bg-gradient-to-r from-wp-teal to-wp-teal-dark hover:from-wp-teal-dark hover:to-wp-teal text-white font-bold text-lg px-12 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                  <span className="relative z-10">View All Shorts</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default LatestShorts;
