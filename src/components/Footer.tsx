
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 wp-gradient-dark opacity-30"></div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/2a9794ed-a1b3-4e1c-b626-d3948009195f.png" 
                  alt="WP Simplified" 
                  className="h-8 w-auto"
                />
                <span className="font-baloo font-bold text-xl text-white">WP SIMPLIFIED</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Empowering WordPress developers with cutting-edge tutorials, comprehensive playlists, and industry insights. Join thousands mastering WordPress development.
              </p>
              
              {/* Social Icons */}
              <div className="flex space-x-3">
                <a 
                  href="https://github.com/sunilkumarthz" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-wp-teal transition-colors"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://x.com/sunilkumarthz" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-wp-teal transition-colors"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/sunilkumarthz/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-wp-teal transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="mailto:hello@wpsimplified.in" 
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-wp-teal transition-colors"
                >
                  <Mail className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-baloo font-bold text-white text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-slate-400 hover:text-wp-teal transition-colors">Home</Link></li>
                <li><Link to="/playlists" className="text-slate-400 hover:text-wp-teal transition-colors">Playlists</Link></li>
                <li><Link to="/podcasts" className="text-slate-400 hover:text-wp-teal transition-colors">Podcasts</Link></li>
                <li><Link to="/shorts" className="text-slate-400 hover:text-wp-teal transition-colors">Shorts</Link></li>
                <li><Link to="/contact" className="text-slate-400 hover:text-wp-teal transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-baloo font-bold text-white text-lg mb-6">Resources</h3>
              <ul className="space-y-3">
                <li><a href="https://www.youtube.com/@wpsimplifiedbysunil" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-wp-teal transition-colors">YouTube Channel</a></li>
                <li><a href="https://sunilkumarthz.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-wp-teal transition-colors">Personal Website</a></li>
                <li><a href="https://profiles.wordpress.org/sunilkumarthz/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-wp-teal transition-colors">WordPress.org Profile</a></li>
                <li><span className="text-slate-400">Community Events</span></li>
              </ul>
            </div>

            {/* Join the Community */}
            <div>
              <h3 className="font-baloo font-bold text-white text-lg mb-6">Join the Community</h3>
              <p className="text-slate-400 text-sm mb-6">
                Subscribe to our YouTube channel for the latest WordPress tutorials, tips, and industry updates delivered weekly.
              </p>
              <Button className="wp-gradient text-slate-900 font-bold w-full hover:scale-105 transition-transform duration-200">
                Subscribe Now
              </Button>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © {currentYear} WPSimplified by Sunil. Crafted with passion for the WordPress community.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-wp-teal transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-wp-teal transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-wp-teal transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
