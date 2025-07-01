
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, List, Play, Mic, MessageCircle, Menu, X } from 'lucide-react';

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
            className="relative h-10 w-28 rounded-lg overflow-hidden border border-slate-600 hover:border-wp-teal/70 transition-all duration-300 group"
            aria-label="WPSimplified Home"
          >
            <img
              src="/images/logo-white.png"
              alt="WPSimplified Logo"
              className="object-contain w-full h-full p-1.5 transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-0.5"
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
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 font-roboto font-medium text-sm ${
                    isActive
                      ? 'bg-wp-teal text-white font-semibold'
                      : 'text-slate-300 hover:bg-wp-teal/10 hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <IconComponent
                    size={16}
                    className="w-4 h-4"
                    aria-hidden="true"
                  />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Subscribe Button */}
          <div className="hidden md:flex items-center">
            <Button 
              className="bg-wp-teal hover:bg-wp-teal-dark text-white font-bold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300" 
              asChild
            >
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

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-10 h-10 text-white hover:text-wp-teal p-2 focus:outline-none transition-all duration-300 rounded-lg hover:bg-slate-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 border-t border-slate-700/50">
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
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 font-roboto font-medium ${
                      isActive
                        ? 'bg-wp-teal text-white font-semibold'
                        : 'text-slate-300 hover:bg-wp-teal/10 hover:text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <IconComponent
                      size={20}
                      className="w-5 h-5"
                      aria-hidden="true"
                    />
                    <span className="text-base">{item.label}</span>
                  </Link>
                );
              })}
              <div className="pt-3">
                <Button 
                  className="w-full bg-wp-teal hover:bg-wp-teal-dark text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300" 
                  asChild
                >
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
        </div>
      </div>
    </header>
  );
};

export default Header;
