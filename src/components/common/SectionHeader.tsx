import { ReactNode } from 'react';

interface SectionHeaderProps {
  badge?: {
    icon?: ReactNode;
    text: string;
  };
  title: string | ReactNode;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader = ({ badge, title, subtitle, centered = true }: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 ${centered ? '' : 'mb-4'}`}>
          {badge.icon}
          {badge.text}
        </div>
      )}
      
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        {title}
      </h2>
      
      {subtitle && (
        <p className={`text-lg text-muted-foreground leading-relaxed ${centered ? 'max-w-3xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;