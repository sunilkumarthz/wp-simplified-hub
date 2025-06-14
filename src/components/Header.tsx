
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Videos', path: '/videos' },
    { label: 'Playlists', path: '/playlists' },
    { label: 'Shorts', path: '/shorts' },
    { label: 'Podcasts', path: '/podcasts' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActiveRoute = (path: string) => location.pathname === path;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // TODO: Implement search functionality
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/2a9794ed-a1b3-4e1c-b626-d3948009195f.png" 
              alt="WP Simplified" 
              className="h-10 w-auto"
            />
            <div className="flex flex-col">
              <span className="font-baloo font-bold text-2xl text-white leading-tight">WP SIMPLIFIED</span>
              <span className="font-roboto text-sm text-wp-teal -mt-1">by Sunil</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-full transition-all duration-200 font-roboto font-medium ${
                  isActiveRoute(item.path)
                    ? 'bg-wp-teal text-slate-900'
                    : 'text-slate-300 hover:text-wp-teal hover:bg-slate-800/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Search videos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 pr-10"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-wp-teal"
              >
                <Search size={20} />
              </button>
            </form>
            <Button className="wp-gradient text-slate-900 font-roboto font-semibold hover:scale-105 transition-transform duration-200">
              Subscribe
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
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-3 rounded-lg transition-all duration-200 font-roboto font-medium ${
                    isActiveRoute(item.path)
                      ? 'bg-wp-teal text-slate-900'
                      : 'text-slate-300 hover:text-wp-teal hover:bg-slate-800/50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <form onSubmit={handleSearch} className="relative">
                  <Input
                    type="text"
                    placeholder="Search videos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 pr-10"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-wp-teal"
                  >
                    <Search size={20} />
                  </button>
                </form>
                <Button className="wp-gradient text-slate-900 font-roboto font-semibold w-full">
                  Subscribe
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
