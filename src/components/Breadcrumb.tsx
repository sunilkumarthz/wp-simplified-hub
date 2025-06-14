
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useEffect } from 'react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const Breadcrumb = () => {
  const location = useLocation();
  
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const pathnames = location.pathname.split('/').filter(x => x);
    
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', path: '/' }
    ];

    pathnames.forEach((name, index) => {
      const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
      const label = name.charAt(0).toUpperCase() + name.slice(1).replace('-', ' ');
      breadcrumbs.push({ label, path: routeTo });
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  // Generate JSON-LD for breadcrumbs
  useEffect(() => {
    if (breadcrumbs.length > 1) {
      const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.label,
          "item": `https://wpsimplified.in${crumb.path}`
        }))
      };

      // Remove existing breadcrumb JSON-LD
      const existingBreadcrumbScript = document.querySelector('script[data-breadcrumb-json]');
      if (existingBreadcrumbScript) {
        existingBreadcrumbScript.remove();
      }

      // Add new breadcrumb JSON-LD
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-breadcrumb-json', 'true');
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [location.pathname]);

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav className="bg-slate-800/30 border-b border-slate-700/50 py-3" aria-label="Breadcrumb">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm font-roboto">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-slate-400 mx-2" />
              )}
              {index === 0 && (
                <Home className="w-4 h-4 text-slate-400 mr-2" />
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-wp-teal font-medium" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  to={crumb.path}
                  className="text-slate-300 hover:text-wp-teal transition-colors"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
