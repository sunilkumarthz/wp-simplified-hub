
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Search, Home, List, Play, Mic, MessageCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Videos', path: '/videos', icon: Play },
    { label: 'Playlists', path: '/playlists', icon: List },
    { label: 'Shorts', path: '/shorts', icon: Play },
    { label: 'Podcasts', path: '/podcasts', icon: Mic },
    { label: 'Contact', path: '/contact', icon: MessageCircle },
  ];

  const isActiveRoute = (path: string) => location.pathname === path;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/videos?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="relative h-12 w-32 rounded-xl overflow-hidden border border-white/20 hover:border-teal-500/50 transition-all duration-300 group" aria-label="WPSimplified Home">
            <img 
              src="/lovable-uploads/7296f4cd-1ccd-4537-9d84-dd45c7c019c4.png" 
              alt="WPSimplified Logo" 
              className="object-contain w-full h-full p-2"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = isActiveRoute(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 font-roboto font-medium focus-visible:ring-2 focus-visible:ring-teal-400 ring-offset-2 ${
                    isActive
                      ? 'bg-teal-600 text-white font-semibold shadow-md'
                      : 'bg-[#04D98B] text-slate-900 hover:bg-[#037F8C] hover:text-white hover:shadow-sm'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <IconComponent size={16} className="w-4 h-4 pointer-events-none" aria-hidden="true" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Search and Subscribe */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              {isSearchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center">
                  <Input
                    type="text"
                    placeholder="Search videos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                    autoFocus
                    aria-label="Search videos"
                  />
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="ml-2 text-slate-400 hover:text-white"
                    aria-label="Close search"
                  >
                    <X size={20} />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="text-slate-300 hover:text-[#04D98B] p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-200"
                  aria-label="Open search"
                >
                  <Search size={20} />
                </button>
              )}
            </div>

            {/* Subscribe Button */}
            <Button 
              className="font-roboto font-semibold"
              asChild
            >
              <a 
                href="https://youtube.com/@WPSimplified" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Subscribe to WPSimplified YouTube channel"
              >
                ▶ Subscribe
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-slate-300 hover:text-white p-2"
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
          <div id="mobile-menu" className="lg:hidden py-4 border-t border-slate-800">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search videos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 pr-12"
                  aria-label="Search videos"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-[#04D98B]"
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>
              </div>
            </form>

            <nav className="flex flex-col space-y-2" role="navigation" aria-label="Mobile navigation">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = isActiveRoute(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 font-roboto font-medium focus-visible:ring-2 focus-visible:ring-teal-400 ring-offset-2 ${
                      isActive
                        ? 'bg-teal-600 text-white font-semibold shadow-md'
                        : 'bg-[#04D98B] text-slate-900 hover:bg-[#037F8C] hover:text-white hover:shadow-sm'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <IconComponent size={16} className="w-4 h-4 pointer-events-none" aria-hidden="true" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              <div className="pt-4">
                <Button 
                  className="font-roboto font-semibold w-full"
                  asChild
                >
                  <a 
                    href="https://youtube.com/@WPSimplified" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Subscribe to WPSimplified YouTube channel"
                  >
                    ▶ Subscribe
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
