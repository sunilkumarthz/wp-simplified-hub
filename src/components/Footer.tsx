
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Github, Twitter, Linkedin, Mail, Youtube, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Playlists', path: '/playlists' },
    { label: 'Podcasts', path: '/podcasts' },
    { label: 'Shorts', path: '/shorts' },
    { label: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: Github, url: 'https://github.com/sunilkumarthz', label: 'GitHub' },
    { icon: Twitter, url: 'https://x.com/sunilkumarthz', label: 'X' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/sunilkumarthz/', label: 'LinkedIn' },
    { icon: Globe, url: 'https://sunilkumarthz.com', label: 'Website' },
    { icon: Mail, url: 'mailto:hello@wpsimplified.in', label: 'Email' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 wp-gradient-dark opacity-20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-wp-teal/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-wp-blue/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/7296f4cd-1ccd-4537-9d84-dd45c7c019c4.png" 
                  alt="WPSimplified Logo" 
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-slate-400 font-roboto text-sm leading-relaxed max-w-xs">
                Empowering WordPress developers with cutting-edge tutorials, comprehensive playlists, and industry insights. Join thousands mastering WordPress development.
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-all duration-200 border border-slate-700"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-slate-400 hover:text-wp-teal" />
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

            {/* Join Community */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
              <h3 className="font-baloo font-bold text-white text-lg mb-4">Join the Community</h3>
              <p className="text-slate-400 font-roboto text-sm mb-6 leading-relaxed">
                Subscribe to our YouTube channel for the latest WordPress tutorials, tips, and industry updates delivered weekly.
              </p>
              <Button className="wp-gradient text-slate-900 font-roboto font-bold w-full hover:scale-105 transition-transform duration-200">
                📺 Subscribe Now
              </Button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-400 font-roboto text-sm text-center md:text-left">
                © {currentYear} WPSimplified by Sunil. Crafted with passion for the WordPress community.
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
