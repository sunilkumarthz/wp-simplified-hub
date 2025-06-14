
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchAllPlaylists } from '@/services/api';

const FeaturedPlaylists = () => {
  const { data: playlists = [], isLoading } = useQuery({
    queryKey: ['featuredPlaylists'],
    queryFn: fetchAllPlaylists,
  });

  return (
    <section className="py-20">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-baloo font-bold text-white">
          Featured <span className="text-gradient">Playlists</span>
        </h2>
        <Link to="/playlists">
          <Button variant="outline">View All Playlists</Button>
        </Link>
      </div>

      {isLoading ? (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-wp-teal/20 rounded-full mb-4">
            <div className="w-8 h-8 border-4 border-wp-teal border-t-transparent rounded-full animate-spin"></div>
          </div>
          <div className="text-white font-roboto text-lg">Loading playlists...</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {playlists.slice(0, 3).map((playlist, index) => (
            <Card key={playlist.id || index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={playlist.thumbnail} 
                    alt={playlist.title}
                    className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={`https://www.youtube.com/playlist?list=${playlist.playlistId}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-16 h-16 bg-wp-teal rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <BookOpen className="w-6 h-6 text-slate-900" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-baloo font-semibold text-white text-lg mb-3 line-clamp-2">
                    {playlist.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                    {playlist.description}
                  </p>
                  <a 
                    href={`https://www.youtube.com/playlist?list=${playlist.playlistId}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="no-link-styles"
                  >
                    <Button className="w-full font-semibold">
                      Explore More
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedPlaylists;
