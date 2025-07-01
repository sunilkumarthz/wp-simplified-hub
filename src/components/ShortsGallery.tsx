
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Play, Clock, Eye, ChevronRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchAllShorts, type Short } from '@/services/api';
import { decodeHtmlEntities } from '@/lib/htmlUtils';

const ShortsGallery = () => {
  const {
    data: shorts = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['shortsGallery'],
    queryFn: fetchAllShorts,
  });

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-10 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-red-500/5 rounded-full blur-3xl floating-animation"></div>
      <div
        className="absolute bottom-10 right-1/4 w-40 h-40 sm:w-56 sm:h-56 bg-wp-teal/5 rounded-full blur-3xl floating-animation"
        style={{ animationDelay: '4s' }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-baloo font-bold text-white mb-3 sm:mb-4">
            Latest <span className="text-gradient">Shorts</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-roboto px-4">
            Quick tips and tricks to level up your WordPress skills in under a
            minute
          </p>
        </div>

        {isLoading && (
          <div className="text-center py-8 sm:py-12">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-wp-teal/20 rounded-full mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 border-4 border-wp-teal border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="text-white font-roboto text-base sm:text-lg">
              Loading shorts...
            </div>
          </div>
        )}

        {error && (
          <div className="text-center py-8 sm:py-12">
            <div className="text-red-400 font-roboto text-sm sm:text-base">
              Failed to load shorts. Please try again later.
            </div>
          </div>
        )}

        {shorts.length === 0 && !isLoading && !error && (
          <div className="text-center py-8 sm:py-12">
            <div className="text-slate-400 font-roboto text-sm sm:text-base">
              No shorts available.
            </div>
          </div>
        )}

        {/* Responsive Shorts Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 lg:mb-12">
          {shorts.slice(0, 4).map((short, index) => (
            <Card
              key={short.id || index}
              className="bg-slate-800/50 hover:bg-slate-800/70 transition-all duration-300 group overflow-hidden animate-fade-in border-slate-700/50"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative aspect-[9/16] overflow-hidden rounded-lg">
                  <img
                    src={short.thumbnail}
                    alt={decodeHtmlEntities(short.title)}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={short.videourl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-wp-teal rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
                      >
                        <Play className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-900 ml-0.5" />
                      </a>
                    </div>

                    {/* Duration Badge */}
                    {short.duration && (
                      <div className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 bg-black/80 text-white text-xs px-1.5 sm:px-2 py-1 rounded font-bold flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        <span className="text-xs sm:text-xs">{short.duration}</span>
                      </div>
                    )}

                    {/* SHORTS Badge */}
                    <div className="absolute top-1.5 sm:top-2 left-1.5 sm:left-2 bg-red-500 text-white text-xs px-1.5 sm:px-2 py-1 rounded font-bold">
                      SHORTS
                    </div>

                    {/* Views Badge */}
                    {short.views && short.views !== 'N/A' && (
                      <div className="absolute bottom-10 sm:bottom-12 right-1.5 sm:right-2 bg-wp-teal/90 px-1.5 sm:px-2 py-1 rounded text-white text-xs flex items-center gap-1">
                        <Eye className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        <span className="text-xs">{short.views}</span>
                      </div>
                    )}

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                      <h3 className="font-baloo font-semibold text-white text-xs sm:text-sm line-clamp-2 leading-tight">
                        {decodeHtmlEntities(short.title)}
                      </h3>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/shorts">
            <Button className="bg-gradient-to-r from-wp-teal to-wp-teal-dark hover:from-wp-teal-dark hover:to-wp-teal text-white font-bold px-6 sm:px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden text-sm sm:text-base">
              View All Shorts
              <ChevronRight className="w-4 h-4 ml-2 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShortsGallery;
