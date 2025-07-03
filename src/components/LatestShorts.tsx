
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Play, Clock, Eye, TrendingUp, ChevronRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchAllShorts } from '@/services/api';
import { decodeHtmlEntities } from '@/lib/htmlUtils';

const LatestShorts = () => {
  const { data: shorts = [], isLoading } = useQuery({
    queryKey: ['latestShorts'],
    queryFn: fetchAllShorts,
  });

  return (
    <>
      {/* Background Effects */}
      <div className="absolute top-16 left-1/4 w-72 h-72 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-16 right-1/4 w-64 h-64 bg-wp-teal/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '2s' }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <TrendingUp className="w-4 h-4" />
            Trending Content
          </div>
          <h2 className="text-3xl md:text-4xl font-baloo font-bold text-white mb-4">
            Latest <span className="text-gradient">Shorts</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-roboto">
            Quick WordPress tips and tricks in bite-sized videos
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-wp-teal/20 rounded-full mb-4">
              <div className="w-6 h-6 border-4 border-wp-teal border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="text-white font-roboto text-lg">
              Loading shorts...
            </div>
          </div>
        ) : (
          <>
            {/* Improved Grid Layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {shorts.slice(0, 4).map((short, index) => (
                <Card
                  key={short.id || index}
                  className="bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70 transition-all duration-500 group overflow-hidden animate-fade-in transform hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-[9/16] overflow-hidden rounded-lg">
                      <img
                        src={short.thumbnail}
                        alt={decodeHtmlEntities(short.title)}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <a
                            href={short.videourl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-wp-teal rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-xl"
                          >
                            <Play className="w-5 h-5 text-slate-900 ml-0.5" />
                          </a>
                        </div>

                        {/* Duration Badge */}
                        {short.duration && (
                          <div className="absolute top-2 right-2 bg-black/80 px-2 py-1 rounded-lg text-white text-xs font-bold flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {short.duration}
                          </div>
                        )}

                        {/* SHORTS Badge */}
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-lg font-bold">
                          SHORTS
                        </div>

                        {/* Views Badge */}
                        {short.views && short.views !== 'N/A' && (
                          <div className="absolute bottom-12 right-2 bg-wp-teal/90 px-2 py-1 rounded-lg text-white text-xs flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {short.views}
                          </div>
                        )}

                        {/* Title */}
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <h3 className="text-white font-roboto font-semibold text-sm line-clamp-2 leading-tight">
                            {decodeHtmlEntities(short.title)}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link to="/shorts">
                <Button className="bg-gradient-to-r from-wp-teal to-wp-teal-dark hover:from-wp-teal-dark hover:to-wp-teal text-white font-bold px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  View All Shorts
                  <ChevronRight
                    className={`w-4 h-4 ml-2 transition-transform`}
                  />
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default LatestShorts;
