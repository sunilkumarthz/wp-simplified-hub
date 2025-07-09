import SponsorLogo from './SponsorLogo';

const SponsorsGrid = () => {
  const sponsors = [
    {
      name: 'Brand Name',
      logo: 'https://images.unsplash.com/photo-1707061229211-25325f7134ce',
      website: 'https://sunilkumarthz.com',
      featured: true,
    },
    {
      name: 'Brand Name',
      logo: 'https://images.unsplash.com/photo-1714929818396-6584073c1c9c',
      website: 'https://sunilkumarthz.com',
      featured: false,
    },
    {
      name: 'Brand Name',
      logo: 'https://images.unsplash.com/photo-1629095540208-028942b0d68d',
      website: 'https://sunilkumarthz.com',
      featured: true,
    },
    {
      name: 'Brand Name',
      logo: 'https://images.unsplash.com/photo-1707061229453-853fc706b6fc',
      website: 'https://sunilkumarthz.com',
      featured: false,
    },
    {
      name: 'Brand Name',
      logo: 'https://images.unsplash.com/photo-1707061229211-25325f7134ce',
      website: 'https://sunilkumarthz.com',
      featured: true,
    },
    {
      name: 'Brand Name',
      logo: 'https://images.unsplash.com/photo-1714929818396-6584073c1c9c',
      website: 'https://sunilkumarthz.com',
      featured: false,
    },
    {
      name: 'Brand Name',
      logo: 'https://images.unsplash.com/photo-1707061229211-25325f7134ce',
      website: 'https://sunilkumarthz.com',
      featured: true,
    },
    {
      name: 'Brand Name',
      logo: 'https://images.unsplash.com/photo-1714929818396-6584073c1c9c',
      website: 'https://sunilkumarthz.com',
      featured: false,
    },
    {
      name: 'Brand Name',
      logo: 'https://images.unsplash.com/photo-1629095540208-028942b0d68d',
      website: 'https://sunilkumarthz.com',
      featured: true,
    },
    {
      name: 'Brand Name',
      logo: 'https://images.unsplash.com/photo-1707061229453-853fc706b6fc',
      website: 'https://sunilkumarthz.com',
      featured: false,
    },
    {
      name: 'Brand Name',
      logo: 'https://images.unsplash.com/photo-1707061229211-25325f7134ce',
      website: 'https://sunilkumarthz.com',
      featured: true,
    },
    {
      name: 'Brand Name',
      logo: 'https://images.unsplash.com/photo-1714929818396-6584073c1c9c',
      website: 'https://sunilkumarthz.com',
      featured: false,
    },
  ];

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join these amazing companies who trust WPSimplified to reach their
          target audience effectively.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {sponsors.map((sponsor, index) => (
          <SponsorLogo
            key={index}
            name={sponsor.name}
            logo={sponsor.logo}
            website={sponsor.website}
            featured={sponsor.featured}
          />
        ))}
      </div>
    </div>
  );
};

export default SponsorsGrid;
