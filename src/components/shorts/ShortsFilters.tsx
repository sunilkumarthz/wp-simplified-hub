import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Filter, Clock, TrendingUp, Calendar } from 'lucide-react';

interface ShortsFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  shortsCount: number;
}

const ShortsFilters = ({ activeFilter, onFilterChange, shortsCount }: ShortsFiltersProps) => {
  const filters = [
    { id: 'all', label: 'All Shorts', icon: Filter },
    { id: 'recent', label: 'Most Recent', icon: Calendar },
    { id: 'popular', label: 'Most Popular', icon: TrendingUp },
    { id: 'quick', label: 'Under 1 Min', icon: Clock }
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
      <div className="flex items-center gap-2">
        <Badge variant="outline" className="text-muted-foreground">
          {shortsCount} WordPress Shorts Available
        </Badge>
      </div>
      
      <div className="flex flex-wrap items-center gap-3">
        {filters.map((filter) => {
          const IconComponent = filter.icon;
          return (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? 'solid' : 'outline'}
              size="sm"
              onClick={() => onFilterChange(filter.id)}
              className="flex items-center gap-2"
            >
              <IconComponent className="w-4 h-4" />
              {filter.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default ShortsFilters;