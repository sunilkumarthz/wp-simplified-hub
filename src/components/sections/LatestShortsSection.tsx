
import SectionHeader from '@/components/common/SectionHeader';
import ShortsGrid from '@/components/shorts/ShortsGrid';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchAllShorts } from '@/services/api';

const LatestShortsSection = () => {
  const { data: shorts = [] } = useQuery({
    queryKey: ['latestShorts'],
    queryFn: fetchAllShorts,
  });

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge={{
            icon: <TrendingUp className="w-4 h-4" />,
            text: 'Quick Learning'
          }}
          title="Latest WordPress Shorts"
          subtitle="Master WordPress fundamentals with bite-sized video tutorials designed for quick learning and immediate implementation."
        />
        
        <ShortsGrid shorts={shorts} maxItems={6} />
        
        <div className="text-center mt-12">
          <Link to="/shorts">
            <Button variant="outline" size="lg">
              View All Shorts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestShortsSection;
