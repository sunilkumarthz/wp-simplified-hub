interface SponsorLogoProps {
  name: string;
  logo: string;
  website?: string;
  featured?: boolean;
}

const SponsorLogo = ({ name, logo, website, featured = false }: SponsorLogoProps) => {
  const content = (
    <div
      className={`
      bg-card/50 border border-border/50 rounded-lg p-6
      transition-all duration-300 hover:scale-105 hover:bg-card/80 hover:shadow-lg
      ${featured ? 'ring-2 ring-primary/50' : ''}
    `}
    >
      <img
        src={logo}
        alt={`${name} logo`}
        className="w-full h-16 max-w-16 m-auto rounded-lg object-cover  transition-all duration-300"
      />
      <p className="text-center text-sm mt-2 font-medium">{name}</p>
    </div>
  );

  if (website) {
    return (
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={`Visit ${name} website`}
      >
        {content}
      </a>
    );
  }

  return content;
};

export default SponsorLogo;
