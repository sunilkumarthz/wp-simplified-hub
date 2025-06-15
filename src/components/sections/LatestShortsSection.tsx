
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchAllShorts } from '@/services/api';
import { decodeHtmlEntities } from '@/lib/htmlUtils';

const LatestShortsSection = () => {
  const { data: shorts = [] } = useQuery({
    queryKey: ['latestShorts'],
    queryFn: fetchAllShorts,
  });

  return (
    <section className="mb-20">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-baloo font-bold text-white">
          Latest <span className="text-gradient">Shorts</span>
        </h2>
        <Link to="/shorts">
          <Button variant="outline">View All Shorts</Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {shorts.slice(0, 4).map((short, index) => (
          <Card key={short.id || index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-[9/16] overflow-hidden">
                <img 
                  src={short.thumbnail} 
                  alt={decodeHtmlEntities(short.title)}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={short.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-wp-teal rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Play className="w-5 h-5 text-slate-900" />
                  </a>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-baloo font-semibold text-white text-sm line-clamp-2">
                  {decodeHtmlEntities(short.title)}
                </h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LatestShortsSection;
