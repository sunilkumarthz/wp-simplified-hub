
import { Button } from '@/components/ui/button';
import { ExternalLink, Youtube, Linkedin, Twitter, Github, Globe } from 'lucide-react';

const SocialSection = () => {
  const socialLinks = [
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@wpsimplifiedbysunil',
      icon: Youtube,
      color: 'text-red-500 hover:text-red-400',
      bgColor: 'hover:bg-red-500/20',
      gradient: 'from-red-500 to-red-600',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sunilkumarthz/',
      icon: Linkedin,
      color: 'text-blue-500 hover:text-blue-400',
      bgColor: 'hover:bg-blue-600/20',
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/sunilkumarthz',
      icon: Twitter,
      color: 'text-slate-400 hover:text-slate-300',
      bgColor: 'hover:bg-slate-600/20',
      gradient: 'from-slate-600 to-slate-700',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/sunilkumarthz',
      icon: Github,
      color: 'text-gray-400 hover:text-gray-300',
      bgColor: 'hover:bg-gray-600/20',
      gradient: 'from-gray-600 to-gray-700',
    },
    {
      name: 'WordPress.org',
      url: 'https://profiles.wordpress.org/sunilkumarthz/',
      icon: Globe,
      color: 'text-wp-teal hover:text-wp-teal-light',
      bgColor: 'hover:bg-wp-teal/20',
      gradient: 'from-wp-teal to-wp-teal-dark',
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
          {/* Social Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block animate-fade-in no-link-styles group`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`relative p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl ${social.bgColor} text-center`}>
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${social.gradient} flex items-center justify-center group-hover:rotate-6 transition-transform duration-300`}>
                      <IconComponent className={`w-8 h-8 text-white`} />
                    </div>
                    <h3 className={`font-semibold text-white group-hover:${social.color.split(' ')[1]} transition-colors duration-300 text-sm`}>
                      {social.name}
                    </h3>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-wp-teal rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse">
                      <ExternalLink className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* YouTube Channel Promotion */}
          <div className="relative">
            <div className="bg-slate-800/80 border border-slate-600/50 rounded-2xl p-12 text-center backdrop-blur-sm">
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mr-4 group-hover:rotate-6 transition-transform duration-300">
                    <Youtube className="w-8 h-8 text-white" />
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
                  <Button size="lg" className="font-semibold text-lg px-8 bg-red-600 hover:bg-red-700 group">
                    <Youtube className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Subscribe Now
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
