
import SectionHeader from '@/components/common/SectionHeader';
import ShortsGrid from '@/components/shorts/ShortsGrid';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { TrendingUp, ChevronRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchAllShorts } from '@/services/api';
import LoadingSpinner from '@/components/common/LoadingSpinner';

const LatestShorts = () => {
  const { data: shorts = [], isLoading } = useQuery({
    queryKey: ['latestShorts'],
    queryFn: fetchAllShorts,
  });

  return (
    <section className="py-20 bg-muted/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-16 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-16 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '2s' }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          badge={{
            icon: <TrendingUp className="w-4 h-4" />,
            text: 'Trending Content'
          }}
          title={
            <>
              Latest <span className="text-primary">Shorts</span>
            </>
          }
          subtitle="Master WordPress fundamentals with bite-sized video tutorials designed for quick learning and immediate implementation."
        />

        {isLoading ? (
          <LoadingSpinner message="Loading WordPress shorts..." />
        ) : (
          <>
            <ShortsGrid shorts={shorts} maxItems={5} />
            
            <div className="text-center mt-12">
              <Link to="/shorts">
                <Button variant="solid" size="lg">
                  View All Shorts
                  <ChevronRight className="w-4 h-4 ml-2" />
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
