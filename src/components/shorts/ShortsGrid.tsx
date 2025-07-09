import ShortsCard from './ShortsCard';

interface ShortsGridProps {
  shorts: Array<{
    id: number;
    title: string;
    thumbnail: string;
    videourl: string;
    duration?: string;
    views?: string;
  }>;
  maxItems?: number;
}

const ShortsGrid = ({ shorts, maxItems }: ShortsGridProps) => {
  const displayShorts = maxItems ? shorts.slice(0, maxItems) : shorts;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
      {displayShorts.map((short, index) => (
        <ShortsCard key={short.id || index} short={short} index={index} />
      ))}
    </div>
  );
};

export default ShortsGrid;
