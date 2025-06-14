
import { Button } from '@/components/ui/button';

const SocialSection = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sunilkumarthz/',
      icon: '💼',
      color: 'hover:bg-blue-600',
      description: 'Professional networking'
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/sunilkumarthz',
      icon: '🐦',
      color: 'hover:bg-slate-700',
      description: 'Latest updates & thoughts'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/sunilkumarthz',
      icon: '💻',
      color: 'hover:bg-gray-700',
      description: 'Open source projects'
    },
    {
      name: 'WordPress.org',
      url: 'https://profiles.wordpress.org/sunilkumarthz/',
      icon: '🔧',
      color: 'hover:bg-blue-500',
      description: 'WordPress contributions'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@wpsimplifiedbysunil',
      icon: '📺',
      color: 'hover:bg-red-600',
      description: 'Video tutorials & content'
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-baloo font-bold text-white mb-4">
            Connect & <span className="text-gradient">Follow</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Stay updated with the latest WordPress tutorials, tips, and community activities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`bg-slate-800 border border-slate-700 rounded-lg p-6 transition-all duration-300 hover:border-wp-teal/50 hover:scale-105 ${social.color} group`}>
                  <div className="text-center space-y-3">
                    <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <h3 className="font-baloo font-bold text-white text-lg">
                      {social.name}
                    </h3>
                    <p className="text-slate-300 text-sm">
                      {social.description}
                    </p>
                    <div className="pt-2">
                      <span className="text-wp-teal text-sm font-semibold group-hover:text-white transition-colors duration-300">
                        Follow →
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg p-8 text-center border border-slate-600">
            <h3 className="text-2xl font-baloo font-bold text-white mb-4">
              Stay in the Loop
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Get notified about new tutorials, WordPress tips, and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-900 border border-slate-600 text-white placeholder-slate-400 focus:border-wp-teal focus:outline-none"
              />
              <Button className="wp-gradient text-slate-900 font-bold hover:scale-105 transition-transform duration-200">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
