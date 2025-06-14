
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Play, Clock, BookOpen } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchAllPlaylists, type Playlist } from '@/services/api';

const PopularPlaylists = () => {
  const { data: playlists = [], isLoading, error } = useQuery({
    queryKey: ['popularPlaylists'],
    queryFn: fetchAllPlaylists,
  });

  console.log('PopularPlaylists - API Response:', { playlists, isLoading, error });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty?.toLowerCase()) {
      case 'beginner': return 'bg-green-500';
      case 'intermediate': return 'bg-yellow-500';
      case 'advanced': return 'bg-red-500';
      default: return 'bg-wp-teal';
    }
  };

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-wp-blue/5 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-wp-teal/5 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-baloo font-bold text-white mb-4">
            Popular <span className="text-gradient">Playlists</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-roboto">
            Structured learning paths to take your WordPress skills to the next level
          </p>
        </div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {playlists.slice(0, 4).map((playlist, index) => (
            <Card 
              key={playlist.id || index} 
              className="creative-card group overflow-hidden animate-slide-in-left"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="relative md:w-1/3">
                    <img 
                      src={playlist.thumbnail} 
                      alt={playlist.title}
                      className="w-full h-48 md:h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a 
                        href={playlist.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-wp-teal rounded-full flex items-center justify-center pulse-glow"
                      >
                        <BookOpen className="w-6 h-6 text-slate-900" />
                      </a>
                    </div>
                    <div className={`absolute top-2 left-2 ${getDifficultyColor(playlist.difficulty)} text-white text-xs px-2 py-1 rounded font-semibold`}>
                      {playlist.difficulty || 'General'}
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3 flex flex-col justify-between">
                    <div>
                      <h3 className="font-baloo font-bold text-white text-2xl mb-3">
                        {playlist.title}
                      </h3>
                      <p className="text-slate-300 mb-4 leading-relaxed font-roboto">
                        {playlist.description}
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-slate-400 text-sm">
                        <span className="flex items-center">
                          <Play className="w-4 h-4 mr-1" />
                          {playlist.video_count || 0} videos
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {playlist.duration || 'N/A'}
                        </span>
                      </div>
                      <a href={playlist.url} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full font-bold">
                          Start Learning
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
          <Link to="/playlists">
            <Button size="lg" variant="outline" className="font-bold text-lg">
              View All Playlists
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularPlaylists;
