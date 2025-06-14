
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Search, Home, List, Play, Mic, MessageCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Playlists', path: '/playlists', icon: List },
    { label: 'Shorts', path: '/shorts', icon: Play },
    { label: 'Podcasts', path: '/podcasts', icon: Mic },
    { label: 'Contact', path: '/contact', icon: MessageCircle },
  ];

  const isActiveRoute = (path: string) => location.pathname === path;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-slate-800 rounded-lg p-2 border border-slate-700">
              <span className="font-baloo font-bold text-wp-teal text-sm">WP</span>
              <br />
              <span className="font-baloo font-bold text-white text-xs leading-none">SIMPLIFIED</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 font-roboto font-medium ${
                    isActiveRoute(item.path)
                      ? 'bg-wp-teal text-slate-900'
                      : 'text-slate-300 hover:text-wp-teal hover:bg-slate-800/50'
                  }`}
                >
                  <IconComponent size={18} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Subscribe Button */}
          <div className="hidden md:flex items-center">
            <Button className="wp-gradient text-slate-900 font-roboto font-semibold hover:scale-105 transition-transform duration-200">
              ▶ Subscribe
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-slate-300 hover:text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-800">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 font-roboto font-medium ${
                      isActiveRoute(item.path)
                        ? 'bg-wp-teal text-slate-900'
                        : 'text-slate-300 hover:text-wp-teal hover:bg-slate-800/50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <IconComponent size={18} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              <div className="pt-4">
                <Button className="wp-gradient text-slate-900 font-roboto font-semibold w-full">
                  ▶ Subscribe
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
