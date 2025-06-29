
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Play, Clock, BookOpen, Users, Star } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchAllPlaylists, type Playlist } from '@/services/api';

const PopularPlaylists = () => {
  const { data: playlists = [], isLoading, error } = useQuery({
    queryKey: ['popularPlaylists'],
    queryFn: fetchAllPlaylists,
  });

  console.log('PopularPlaylists - API Response:', { playlists, isLoading, error });

  // Filter out playlists with missing essential data
  const validPlaylists = playlists.filter(
    (playlist) => playlist.title && playlist.thumbnail && playlist.videourl
  );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty?.toLowerCase()) {
      case 'beginner':
        return 'bg-emerald-500';
      case 'intermediate':
        return 'bg-amber-500';
      case 'advanced':
        return 'bg-red-500';
      default:
        return 'bg-[#04D98B]';
    }
  };

  // If no valid playlists and not loading, don't render the section
  if (validPlaylists.length === 0 && !isLoading) {
    return null;
  }

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-80 h-80 bg-[#04D98B]/10 rounded-full blur-3xl floating-animation"></div>
        <div
          className="absolute bottom-20 left-10 w-64 h-64 bg-[#037F8C]/10 rounded-full blur-3xl floating-animation"
          style={{ animationDelay: '2s' }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#04D98B]/5 to-[#037F8C]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-baloo font-bold text-white mb-6">
            Popular <span className="text-gradient">Playlists</span>
          </h2>
          <div className="w-24 h-1 wp-gradient rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-roboto leading-relaxed">
            Curated learning paths designed to accelerate your WordPress mastery
          </p>
        </div>

        {isLoading && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#04D98B]/20 rounded-full mb-4">
              <div className="w-8 h-8 border-4 border-[#04D98B] border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="text-white font-roboto text-lg">
              Loading amazing playlists...
            </div>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <div className="text-red-400 font-roboto text-lg">
              Unable to load playlists. Please try again later.
            </div>
          </div>
        )}

        {validPlaylists.length > 0 && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {validPlaylists.slice(0, 4).map((playlist, index) => (
                <Card
                  key={playlist.id || index}
                  className="creative-card group bg-slate-800/40 border border-slate-700/50 hover:border-[#04D98B]/50 animate-slide-in-left"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row h-full">
                      <div className="relative md:w-2/5 group/image">
                        <img
                          src={playlist.thumbnail}
                          alt={playlist.title}
                          className="w-full h-auto object-fit transition-all duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <a
                            href={playlist.videourl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-btn pulse-glow"
                          >
                            <BookOpen className="w-8 h-8" />
                          </a>
                        </div>
                        {playlist.difficulty && (
                          <div
                            className={`absolute top-4 left-4 ${getDifficultyColor(
                              playlist.difficulty
                            )} text-white text-sm px-3 py-1 rounded-full font-semibold shadow-lg`}
                          >
                            {playlist.difficulty}
                          </div>
                        )}
                        {playlist.video_count && (
                          <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                            {playlist.video_count} videos
                          </div>
                        )}
                      </div>

                      <div className="p-8 md:w-3/5 flex flex-col justify-between">
                        <div>
                          <h3 className="font-baloo font-bold text-white text-2xl mb-4 group-hover:text-[#04D98B] transition-colors duration-300">
                            {playlist.title}
                          </h3>
                        </div>

                        <div className="space-y-4">
                          <a
                            href={playlist.videourl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="no-link-styles"
                          >
                            <Button className="w-full font-semibold text-base">
                              Start Learning Journey
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link to="/playlists" className="no-link-styles">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold text-lg px-8"
                >
                  Explore All Learning Paths
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default PopularPlaylists;
