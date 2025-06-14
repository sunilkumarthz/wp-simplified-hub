
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/2a9794ed-a1b3-4e1c-b626-d3948009195f.png" 
                alt="WP Simplified" 
                className="h-8 w-auto"
              />
              <span className="font-baloo font-bold text-xl text-white">WP Simplified</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Simplifying WordPress, One Step at a Time. Making WordPress accessible 
              to everyone through comprehensive tutorials and community support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-baloo font-bold text-white text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-400 hover:text-wp-teal transition-colors">Home</Link></li>
              <li><Link to="/videos" className="text-slate-400 hover:text-wp-teal transition-colors">Videos</Link></li>
              <li><Link to="/playlists" className="text-slate-400 hover:text-wp-teal transition-colors">Playlists</Link></li>
              <li><Link to="/podcasts" className="text-slate-400 hover:text-wp-teal transition-colors">Podcasts</Link></li>
            </ul>
          </div>

          {/* Content */}
          <div>
            <h3 className="font-baloo font-bold text-white text-lg mb-4">Content</h3>
            <ul className="space-y-2">
              <li><Link to="/shorts" className="text-slate-400 hover:text-wp-teal transition-colors">YouTube Shorts</Link></li>
              <li><a href="https://www.youtube.com/@wpsimplifiedbysunil" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-wp-teal transition-colors">YouTube Channel</a></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-wp-teal transition-colors">Collaboration</Link></li>
              <li><a href="https://sunilkumarthz.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-wp-teal transition-colors">Personal Website</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-baloo font-bold text-white text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-slate-400 hover:text-wp-teal transition-colors">Contact Us</Link></li>
              <li><span className="text-slate-400">Alwar, Rajasthan</span></li>
              <li><a href="mailto:hello@wpsimplified.com" className="text-slate-400 hover:text-wp-teal transition-colors">hello@wpsimplified.com</a></li>
            </ul>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com/in/sunilkumarthz/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-wp-teal transition-colors">
                <span className="text-xl">💼</span>
              </a>
              <a href="https://x.com/sunilkumarthz" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-wp-teal transition-colors">
                <span className="text-xl">🐦</span>
              </a>
              <a href="https://github.com/sunilkumarthz" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-wp-teal transition-colors">
                <span className="text-xl">💻</span>
              </a>
              <a href="https://www.youtube.com/@wpsimplifiedbysunil" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-wp-teal transition-colors">
                <span className="text-xl">📺</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} WP Simplified by Sunil. All rights reserved. | Built with ❤️ for the WordPress Community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
