
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Github, Twitter, Linkedin, Mail, Youtube, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Videos', path: '/videos' },
    { label: 'Playlists', path: '/playlists' },
    { label: 'Shorts', path: '/shorts' },
    { label: 'Podcasts', path: '/podcasts' },
    { label: 'Contact', path: '/contact' },
  ];

  const resources = [
    { label: 'YouTube Channel', url: 'https://www.youtube.com/@wpsimplifiedbysunil', external: true },
    { label: 'Personal Website', url: 'https://sunilkumarthz.com', external: true },
    { label: 'WordPress.org Profile', url: 'https://profiles.wordpress.org/sunilkumarthz/', external: true },
    { label: 'Community Events', url: '#', external: false },
  ];

  const socialLinks = [
    { icon: Github, url: 'https://github.com/sunilkumarthz', label: 'GitHub' },
    { icon: Twitter, url: 'https://x.com/sunilkumarthz', label: 'Twitter' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/sunilkumarthz/', label: 'LinkedIn' },
    { icon: Youtube, url: 'https://www.youtube.com/@wpsimplifiedbysunil', label: 'YouTube' },
    { icon: Mail, url: 'mailto:hello@wpsimplified.in', label: 'Email' },
    { icon: Globe, url: 'https://sunilkumarthz.com', label: 'Website' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 wp-gradient-dark opacity-20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-wp-teal/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-wp-blue/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/2a9794ed-a1b3-4e1c-b626-d3948009195f.png" 
                  alt="WP Simplified" 
                  className="h-10 w-auto"
                />
                <div className="flex flex-col">
                  <span className="font-baloo font-bold text-xl text-white leading-tight">WP SIMPLIFIED</span>
                  <span className="font-roboto text-sm text-wp-teal -mt-1">by Sunil</span>
                </div>
              </div>
              <p className="text-slate-400 font-roboto text-sm leading-relaxed">
                Empowering WordPress developers with cutting-edge tutorials, comprehensive playlists, and industry insights. Join thousands mastering WordPress development.
              </p>
              
              {/* Social Icons */}
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-wp-teal hover:scale-110 transition-all duration-200 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white group-hover:text-slate-900" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-baloo font-bold text-white text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="text-slate-400 hover:text-wp-teal transition-colors font-roboto text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-baloo font-bold text-white text-lg mb-6">Resources</h3>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    {resource.external ? (
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-400 hover:text-wp-teal transition-colors font-roboto text-sm"
                      >
                        {resource.label}
                      </a>
                    ) : (
                      <span className="text-slate-400 font-roboto text-sm">{resource.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-baloo font-bold text-white text-lg mb-6">Stay Updated</h3>
              <p className="text-slate-400 font-roboto text-sm mb-6 leading-relaxed">
                Subscribe to our YouTube channel for the latest WordPress tutorials, tips, and industry updates delivered weekly.
              </p>
              <Button className="wp-gradient text-slate-900 font-roboto font-bold w-full hover:scale-105 transition-transform duration-200">
                Subscribe Now
              </Button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-400 font-roboto text-sm text-center md:text-left">
                © {currentYear} WP Simplified by Sunil. Crafted with passion for the WordPress community.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
                <a href="#" className="text-slate-400 hover:text-wp-teal transition-colors font-roboto">Privacy Policy</a>
                <a href="#" className="text-slate-400 hover:text-wp-teal transition-colors font-roboto">Terms of Service</a>
                <a href="#" className="text-slate-400 hover:text-wp-teal transition-colors font-roboto">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
