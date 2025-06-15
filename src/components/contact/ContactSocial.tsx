
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Youtube, Linkedin, Twitter, Github, Globe } from 'lucide-react';

const ContactSocial = () => {
  const socialLinks = [
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@wpsimplifiedbysunil',
      icon: Youtube,
      color: 'text-red-500 hover:text-red-400',
      bgColor: 'hover:bg-red-500/10',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sunilkumarthz/',
      icon: Linkedin,
      color: 'text-blue-500 hover:text-blue-400',
      bgColor: 'hover:bg-blue-500/10',
    },
    {
      name: 'Twitter/X',
      url: 'https://x.com/sunilkumarthz',
      icon: Twitter,
      color: 'text-slate-400 hover:text-slate-300',
      bgColor: 'hover:bg-slate-500/10',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/sunilkumarthz',
      icon: Github,
      color: 'text-gray-400 hover:text-gray-300',
      bgColor: 'hover:bg-gray-500/10',
    },
    {
      name: 'WordPress.org',
      url: 'https://profiles.wordpress.org/sunilkumarthz/',
      icon: Globe,
      color: 'text-wp-teal hover:text-wp-teal-light',
      bgColor: 'hover:bg-wp-teal/10',
    }
  ];

  return (
    <Card className="creative-card bg-slate-800/80 border-slate-700/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-baloo font-bold text-white">
          Connect with Me
        </CardTitle>
        <p className="text-slate-400 font-roboto text-sm">
          Follow me on social platforms for updates and insights
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.videourl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 min-w-0"
              >
                <div className={`flex flex-col items-center space-y-2 p-4 rounded-lg transition-all duration-300 ${social.bgColor} border border-transparent hover:border-slate-600/50 text-center`}>
                  <div className={`w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center transition-colors ${social.bgColor}`}>
                    <IconComponent className={`h-6 w-6 transition-colors ${social.color}`} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-white font-roboto group-hover:text-wp-teal transition-colors text-sm truncate">
                      {social.name}
                    </h4>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactSocial;
