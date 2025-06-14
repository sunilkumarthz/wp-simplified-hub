
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const SocialSection = () => {
  const socialLinks = [
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@wpsimplifiedbysunil',
      icon: '📺',
      color: 'hover:bg-red-500/20 hover:border-red-400 hover:shadow-red-500/20',
      gradient: 'from-red-500 to-red-600',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sunilkumarthz/',
      icon: '💼',
      color: 'hover:bg-blue-600/20 hover:border-blue-500 hover:shadow-blue-500/20',
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/sunilkumarthz',
      icon: '🐦',
      color: 'hover:bg-slate-600/20 hover:border-slate-500 hover:shadow-slate-500/20',
      gradient: 'from-slate-600 to-slate-700',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/sunilkumarthz',
      icon: '💻',
      color: 'hover:bg-gray-600/20 hover:border-gray-500 hover:shadow-gray-500/20',
      gradient: 'from-gray-600 to-gray-700',
    },
    {
      name: 'WordPress.org',
      url: 'https://profiles.wordpress.org/sunilkumarthz/',
      icon: '🔧',
      color: 'hover:bg-blue-500/20 hover:border-blue-400 hover:shadow-blue-500/20',
      gradient: 'from-blue-500 to-blue-600',
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-wp-teal/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-wp-teal-dark/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-wp-teal/5 to-transparent rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-baloo font-bold text-white mb-6">
            Connect & <span className="text-gradient">Follow</span>
          </h2>
          <div className="w-24 h-1 wp-gradient rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Join our growing community across multiple platforms and stay updated with the latest WordPress insights
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Social Links in Single Row */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-16">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block animate-fade-in no-link-styles group`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${social.gradient} flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl ${social.color}`}>
                  <span className="text-3xl">{social.icon}</span>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-wp-teal rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse">
                    <ExternalLink className="w-3 h-3 text-white" />
                  </div>
                  {/* Tooltip */}
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <div className="bg-slate-800 text-white text-xs px-3 py-1 rounded-lg font-semibold whitespace-nowrap">
                      {social.name}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* YouTube Channel Promotion */}
          <div className="relative">
            <div className="bg-slate-800/80 border border-slate-600/50 rounded-2xl p-12 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-3xl">📺</span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-baloo font-bold text-white">Subscribe to My Channel</h3>
                    <p className="text-wp-teal font-semibold">Join 10,000+ WordPress learners</p>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                  Get the latest WordPress tutorials, tips, and insights delivered straight to your feed. 
                  New videos every week!
                </p>
                
                <a 
                  href="https://www.youtube.com/@wpsimplifiedbysunil" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="no-link-styles"
                >
                  <Button size="lg" className="font-semibold text-lg px-8 bg-red-600 hover:bg-red-700">
                    🔔 Subscribe Now
                  </Button>
                </a>
                
                <div className="flex items-center justify-center mt-6 text-slate-400 text-sm">
                  <span>🔥 New tutorials every week • 📚 In-depth guides • 🎯 Practical tips</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
