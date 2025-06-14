
import { Button } from '@/components/ui/button';
import { ExternalLink, Mail, Heart } from 'lucide-react';

const SocialSection = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sunilkumarthz/',
      icon: '💼',
      color: 'hover:bg-blue-600/20 hover:border-blue-500',
      gradient: 'from-blue-600 to-blue-700',
      description: 'Professional networking & career updates'
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/sunilkumarthz',
      icon: '🐦',
      color: 'hover:bg-slate-600/20 hover:border-slate-500',
      gradient: 'from-slate-600 to-slate-700',
      description: 'Latest updates, thoughts & quick tips'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/sunilkumarthz',
      icon: '💻',
      color: 'hover:bg-gray-600/20 hover:border-gray-500',
      gradient: 'from-gray-600 to-gray-700',
      description: 'Open source projects & code samples'
    },
    {
      name: 'WordPress.org',
      url: 'https://profiles.wordpress.org/sunilkumarthz/',
      icon: '🔧',
      color: 'hover:bg-blue-500/20 hover:border-blue-400',
      gradient: 'from-blue-500 to-blue-600',
      description: 'WordPress contributions & plugins'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@wpsimplifiedbysunil',
      icon: '📺',
      color: 'hover:bg-red-500/20 hover:border-red-400',
      gradient: 'from-red-500 to-red-600',
      description: 'Video tutorials & live streams'
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-[#04D98B]/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#037F8C]/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#04D98B]/5 to-transparent rounded-full"></div>
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

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block animate-fade-in no-link-styles`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`creative-card bg-slate-800/50 border border-slate-700/50 p-8 transition-all duration-500 ${social.color} group`}>
                  <div className="text-center space-y-6">
                    {/* Icon with gradient background */}
                    <div className="relative">
                      <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${social.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                        <span className="text-3xl">{social.icon}</span>
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#04D98B] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse">
                        <ExternalLink className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-baloo font-bold text-white text-2xl mb-3 group-hover:text-[#04D98B] transition-colors duration-300">
                        {social.name}
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        {social.description}
                      </p>
                    </div>
                    
                    <div className="pt-2">
                      <span className="inline-flex items-center text-[#04D98B] text-sm font-semibold group-hover:text-white transition-all duration-300 bg-[#04D98B]/10 group-hover:bg-[#04D98B]/20 px-4 py-2 rounded-full">
                        Connect <ExternalLink className="w-4 h-4 ml-2" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Enhanced Newsletter Signup */}
          <div className="relative">
            <div className="creative-card bg-gradient-to-br from-slate-800/80 to-slate-700/80 p-12 text-center border border-slate-600/50">
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#04D98B] to-[#037F8C] rounded-2xl flex items-center justify-center mr-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-baloo font-bold text-white">Stay in the Loop</h3>
                    <p className="text-[#04D98B] font-semibold">Join 5,000+ WordPress enthusiasts</p>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                  Get exclusive WordPress tips, tutorial previews, and community updates delivered weekly to your inbox.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-2xl bg-slate-900/80 border border-slate-600 text-white placeholder-slate-400 focus:border-[#04D98B] focus:outline-none focus:ring-2 focus:ring-[#04D98B]/20 transition-all duration-300"
                  />
                  <Button size="lg" className="font-semibold px-8">
                    Subscribe Now
                  </Button>
                </div>
                
                <div className="flex items-center justify-center mt-6 text-slate-400 text-sm">
                  <Heart className="w-4 h-4 mr-2 text-red-400" />
                  <span>No spam, unsubscribe anytime</span>
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
