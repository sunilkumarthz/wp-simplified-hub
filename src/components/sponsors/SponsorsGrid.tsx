import SponsorLogo from './SponsorLogo';

const SponsorsGrid = () => {
  const sponsors = [
    {
      name: 'WP Engine',
      logo: 'https://via.placeholder.com/200x80/1e293b/ffffff?text=WP+Engine',
      website: 'https://wpengine.com',
      featured: true
    },
    {
      name: 'Elementor',
      logo: 'https://via.placeholder.com/200x80/1e293b/ffffff?text=Elementor',
      website: 'https://elementor.com',
      featured: true
    },
    {
      name: 'Yoast',
      logo: 'https://via.placeholder.com/200x80/1e293b/ffffff?text=Yoast',
      website: 'https://yoast.com'
    },
    {
      name: 'Gravity Forms',
      logo: 'https://via.placeholder.com/200x80/1e293b/ffffff?text=Gravity+Forms',
      website: 'https://gravityforms.com'
    },
    {
      name: 'WooCommerce',
      logo: 'https://via.placeholder.com/200x80/1e293b/ffffff?text=WooCommerce',
      website: 'https://woocommerce.com'
    },
    {
      name: 'WPML',
      logo: 'https://via.placeholder.com/200x80/1e293b/ffffff?text=WPML',
      website: 'https://wpml.org'
    }
  ];

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join these amazing companies who trust WPSimplified to reach their target audience effectively.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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