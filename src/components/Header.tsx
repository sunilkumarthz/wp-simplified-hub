
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, List, Play, Mic, MessageCircle, X } from 'lucide-react';

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
                  className={`flex items-center space-x-2 px-6 py-3 rounded-2xl transition-all duration-300 font-roboto font-medium focus-visible:ring-2 focus-visible:ring-wp-teal ring-offset-2 relative overflow-hidden ${
                    isActive
                      ? 'bg-gradient-to-r from-wp-teal to-wp-teal-dark text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105'
                      : 'text-white hover:bg-gradient-to-r hover:from-wp-teal hover:to-wp-teal-dark hover:text-white hover:shadow-lg hover:scale-105'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <IconComponent
                    size={16}
                    className="w-4 h-4 pointer-events-none"
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
              className="bg-gradient-to-r from-wp-teal to-wp-teal-dark hover:from-wp-teal-dark hover:to-wp-teal text-white font-bold px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden" 
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

          {/* Creative Mobile Menu Button */}
          <button
            className="lg:hidden relative w-10 h-10 text-white hover:text-wp-teal p-2 focus:outline-none transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`w-6 h-5 relative transform transition-all duration-300 ${isMenuOpen ? 'rotate-45' : ''}`}>
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-90 top-2' : 'top-0'}`}></span>
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 top-2 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-0 top-2' : 'top-4'}`}></span>
              </div>
            </div>
          </button>
        </div>

        {/* Creative Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-6 border-t border-slate-700/50">
            <nav
              className="flex flex-col space-y-3"
              role="navigation"
              aria-label="Mobile navigation"
            >
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = isActiveRoute(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-6 py-4 rounded-2xl transition-all duration-300 font-roboto font-medium focus-visible:ring-2 focus-visible:ring-wp-teal ring-offset-2 transform hover:scale-105 animate-fade-in relative overflow-hidden ${
                      isActive
                        ? 'bg-gradient-to-r from-wp-teal to-wp-teal-dark text-white font-semibold shadow-lg'
                        : 'text-white hover:bg-gradient-to-r hover:from-wp-teal hover:to-wp-teal-dark hover:text-white hover:shadow-lg'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <IconComponent
                      size={20}
                      className="w-5 h-5 pointer-events-none"
                      aria-hidden="true"
                    />
                    <span className="text-lg">{item.label}</span>
                  </Link>
                );
              })}
              <div className="pt-4">
                <Button 
                  className="w-full bg-gradient-to-r from-wp-teal to-wp-teal-dark hover:from-wp-teal-dark hover:to-wp-teal text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg relative overflow-hidden" 
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
