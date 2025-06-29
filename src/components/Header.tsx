
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, List, Play, Mic, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Playlists', path: '/playlists', icon: List },
    { label: 'Videos', path: '/videos', icon: Play },
    { label: 'Podcasts', path: '/podcasts', icon: Mic },
    { label: 'Shorts', path: '/shorts', icon: Play },
    { label: 'Contact', path: '/contact', icon: MessageCircle },
  ];

  const isActiveRoute = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="relative h-12 w-32 rounded-xl overflow-hidden border-2 border-slate-600 hover:border-wp-teal/70 transition-all duration-300 group hover:shadow-lg hover:shadow-wp-teal/20"
            aria-label="WPSimplified Home"
          >
            <img
              src="/images/logo-white.png"
              alt="WPSimplified Logo"
              className="object-contain w-full h-full p-2 transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-2"
            role="navigation"
            aria-label="Main navigation"
          >
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = isActiveRoute(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 font-roboto font-medium focus-visible:ring-2 focus-visible:ring-wp-teal ring-offset-2 ${
                    isActive
                      ? 'bg-wp-teal text-slate-900 font-semibold shadow-md'
                      : 'text-white hover:bg-wp-teal hover:text-slate-900 hover:shadow-sm'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <IconComponent
                    size={16}
                    className="w-4 h-4 pointer-events-none text-white"
                    aria-hidden="true"
                  />
                  <span className="text-white">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Subscribe Button */}
          <div className="hidden md:flex items-center">
            <Button className="font-roboto font-semibold text-white" asChild>
              <a
                href="https://www.youtube.com/@wpsimplifiedbysunil"
                target="_blank"
                className="text-white"
                rel="noopener noreferrer"
                aria-label="Subscribe to WPSimplified YouTube channel"
              >
                🔔 Subscribe
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-wp-teal p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden py-4 border-t border-slate-700"
          >
            <nav
              className="flex flex-col space-y-2"
              role="navigation"
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = isActiveRoute(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 font-roboto font-medium focus-visible:ring-2 focus-visible:ring-wp-teal ring-offset-2 ${
                      isActive
                        ? 'bg-wp-teal text-slate-900 font-semibold shadow-md'
                        : 'text-white hover:bg-wp-teal hover:text-slate-900 hover:shadow-sm'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <IconComponent
                      size={16}
                      className="w-4 h-4 pointer-events-none text-white"
                      aria-hidden="true"
                    />
                    <span className="text-white">{item.label}</span>
                  </Link>
                );
              })}
              <div className="pt-4">
                <Button className="font-roboto font-semibold w-full" asChild>
                  <a
                    href="https://www.youtube.com/@wpsimplifiedbysunil"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Subscribe to WPSimplified YouTube channel"
                  >
                    🔔 Subscribe
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
