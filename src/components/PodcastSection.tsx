
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PodcastSection = () => {
  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 animate-slide-in-left">
              <div>
                <h2 className="text-4xl md:text-5xl font-baloo font-bold text-white mb-4">
                  Be a Guest in My <span className="text-gradient">Podcast</span>
                </h2>
                <div className="w-24 h-1 wp-gradient rounded-full mb-6"></div>
              </div>
              
              <p className="text-xl text-slate-300 leading-relaxed">
                Join me on the <strong className="text-wp-teal">WP Simplified Podcast</strong> where we dive deep into 
                WordPress development, share success stories, and discuss the future of web development.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-wp-teal rounded-full mt-2"></div>
                  <span className="text-slate-300">Share your WordPress journey and expertise</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-wp-teal rounded-full mt-2"></div>
                  <span className="text-slate-300">Reach a growing audience of WordPress enthusiasts</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-wp-teal rounded-full mt-2"></div>
                  <span className="text-slate-300">Network with other WordPress professionals</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-wp-teal rounded-full mt-2"></div>
                  <span className="text-slate-300">Promote your projects and services</span>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-2xl font-baloo font-bold text-white mb-4">Who Should Apply?</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  WordPress developers, designers, agency owners, plugin creators, and anyone with 
                  valuable insights to share with the WordPress community.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button className="wp-gradient text-slate-900 font-bold hover:scale-105 transition-transform duration-200">
                      Apply to Be a Guest
                    </Button>
                  </Link>
                  <Link to="/podcasts">
                    <Button variant="outline" className="border-wp-teal text-wp-teal hover:bg-wp-teal hover:text-slate-900 font-bold">
                      Listen to Episodes
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Podcast Visual */}
            <div className="animate-fade-in">
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    {/* Podcast Icon */}
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-wp-teal to-wp-blue rounded-full flex items-center justify-center relative">
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-baloo font-bold text-white mb-2">WP Simplified Podcast</h3>
                      <p className="text-wp-teal font-semibold">WordPress Stories & Insights</p>
                    </div>

                    {/* Latest Episode */}
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <h4 className="font-baloo font-semibold text-white mb-2">Latest Episode</h4>
                      <p className="text-slate-300 text-sm mb-3">"Building WordPress Agencies from Scratch" with Jane Doe</p>
                      <div className="flex items-center justify-between text-slate-400 text-xs">
                        <span>45 min</span>
                        <span>2 days ago</span>
                      </div>
                    </div>

                    {/* Podcast Stats */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="text-center">
                        <div className="text-2xl font-baloo font-bold text-wp-teal mb-1">50+</div>
                        <div className="text-sm text-slate-300">Episodes</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-baloo font-bold text-wp-teal mb-1">10k+</div>
                        <div className="text-sm text-slate-300">Downloads</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
