
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Playlists', path: '/playlists' },
    { label: 'Shorts', path: '/shorts' },
    { label: 'Podcasts', path: '/podcasts' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActiveRoute = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/2a9794ed-a1b3-4e1c-b626-d3948009195f.png" 
              alt="WP Simplified" 
              className="h-8 w-auto"
            />
            <span className="font-baloo font-bold text-xl text-white">WP SIMPLIFIED</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-full transition-all duration-200 font-medium ${
                  isActiveRoute(item.path)
                    ? 'bg-wp-teal text-slate-900'
                    : 'text-slate-300 hover:text-wp-teal'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button className="wp-gradient text-slate-900 font-semibold hover:scale-105 transition-transform duration-200">
              Subscribe
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-full transition-all duration-200 font-medium ${
                    isActiveRoute(item.path)
                      ? 'bg-wp-teal text-slate-900'
                      : 'text-slate-300 hover:text-wp-teal'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="wp-gradient text-slate-900 font-semibold mt-4 w-full">
                Subscribe
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
