
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, List, Play, Mic, MessageCircle, Menu, X, Award } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Playlists', path: '/playlists', icon: List },
    { label: 'Videos', path: '/videos', icon: Play },
    { label: 'Podcasts', path: '/podcasts', icon: Mic },
    { label: 'Shorts', path: '/shorts', icon: Play },
    { label: 'Sponsors', path: '/sponsors', icon: Award },
    { label: 'Contact', path: '/contact', icon: MessageCircle },
  ];

  const isActiveRoute = (path: string) => location.pathname === path;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="relative h-10 w-28 rounded-lg overflow-hidden border border-slate-600 hover:border-wp-teal/70 transition-all duration-300 group flex-shrink-0"
              aria-label="WPSimplified Home"
              onClick={closeMenu}
            >
              <img
                src="/images/logo-white.png"
                alt="WPSimplified Logo"
                className="object-contain w-full h-full p-1.5 transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center space-x-1"
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
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg border transition-all duration-200 font-roboto font-medium text-sm ${
                      isActive
                        ? 'border-wp-teal text-white'
                        : 'border-transparent hover:border-wp-teal hover:text-wp-teal'
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

            {/* Subscribe Button - Desktop */}
            <div className="hidden lg:flex items-center">
              <Button
                variant="outline"
                size="sm"
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
              className="lg:hidden relative w-10 h-10 text-white hover:text-wp-teal p-2 focus:outline-none transition-all duration-300 rounded-lg hover:bg-slate-800 flex-shrink-0"
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
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-900 border-l border-slate-700 z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="mobile-menu"
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-700">
            <div className="h-8 w-20 rounded overflow-hidden">
              <img
                src="/images/logo-white.png"
                alt="WPSimplified Logo"
                className="object-contain w-full h-full"
              />
            </div>
            <button
              onClick={closeMenu}
              className="w-8 h-8 text-white hover:text-wp-teal p-1 transition-colors duration-200 rounded"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation Links - Tab Style */}
          <nav
            className="flex-1 px-3 py-6"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="grid grid-cols-2 gap-3">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = isActiveRoute(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex flex-col items-center justify-center px-4 py-6 rounded-2xl transition-all duration-300 font-roboto font-medium text-center min-h-[100px] ${
                      isActive
                        ? 'bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg scale-105'
                        : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:text-white hover:scale-102 border border-slate-700'
                    }`}
                    onClick={closeMenu}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <IconComponent
                      size={28}
                      className="w-7 h-7 mb-2 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-semibold">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Mobile Subscribe Button */}
          <div className="p-4 border-t border-slate-700">
            <Button variant="solid" size="lg" className="w-full" asChild>
              <a
                href="https://www.youtube.com/@wpsimplifiedbysunil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe to WPSimplified YouTube channel"
                onClick={closeMenu}
              >
                🔔 Subscribe to Channel
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
