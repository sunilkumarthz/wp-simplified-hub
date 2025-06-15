
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Mic, Play } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchAllPodcasts, type Podcast } from '@/services/api';

const PodcastSection = () => {
  const { data: podcasts = [], isLoading } = useQuery({
    queryKey: ['podcastsForSection'],
    queryFn: fetchAllPodcasts,
  });

  const latestPodcast = podcasts.length > 0 ? podcasts[0] : null;
  const totalEpisodes = podcasts.length;

  return (
    <section className="py-20 bg-slate-800/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-wp-teal/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-wp-teal-dark/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <h2 className="text-5xl md:text-6xl font-baloo font-bold text-white mb-6">
                  Be a Guest in My <span className="text-gradient">Podcast</span>
                </h2>
                <div className="w-24 h-1 wp-gradient rounded-full mb-8"></div>
              </div>
              
              <div className="bg-slate-700/30 p-6 rounded-xl border border-slate-600/30">
                <h3 className="text-2xl font-baloo font-bold text-wp-teal mb-4">
                  Simplifying WordPress, One Step at a Time.
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Welcome to <strong className="text-wp-teal">WPSimplified: The WordPress Creator Podcast</strong>—your 
                  weekly guide to mastering WordPress without the overwhelm. Hosted by Sunil, this series breaks down 
                  complex tools, features, and workflows into easy, actionable steps.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Join us as we simplify WordPress—one step at a time.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3 p-4 bg-slate-700/30 rounded-xl border border-slate-600/30">
                  <div className="w-3 h-3 bg-wp-teal rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300">Share your WordPress journey and expertise</span>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-slate-700/30 rounded-xl border border-slate-600/30">
                  <div className="w-3 h-3 bg-wp-teal rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300">Reach a growing audience of WordPress enthusiasts</span>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-slate-700/30 rounded-xl border border-slate-600/30">
                  <div className="w-3 h-3 bg-wp-teal rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300">Network with other WordPress professionals</span>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-slate-700/30 rounded-xl border border-slate-600/30">
                  <div className="w-3 h-3 bg-wp-teal rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300">Promote your projects and services</span>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-3xl font-baloo font-bold text-white mb-6">Who Should Apply?</h3>
                <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                  WordPress developers, designers, agency owners, plugin creators, and anyone with 
                  valuable insights to share with the WordPress community.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link to="/contact" className="no-link-styles">
                    <Button size="lg" className="font-semibold text-lg px-8">
                      Apply to Be a Guest
                    </Button>
                  </Link>
                  <Link to="/podcasts" className="no-link-styles">
                    <Button size="lg" variant="outline" className="font-semibold text-lg px-8">
                      Listen to Episodes
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Podcast Visual with Logo */}
            <div className="animate-fade-in">
              <Card className="bg-slate-800/80 border-slate-600/50">
                <CardContent className="p-10">
                  <div className="text-center space-y-8">
                    {/* Logo */}
                    <div className="flex justify-center mb-8">
                      <img 
                        src="/lovable-uploads/7296f4cd-1ccd-4537-9d84-dd45c7c019c4.png" 
                        alt="WPSimplified Logo" 
                        className="h-16 w-auto"
                      />
                    </div>

                    {/* Podcast Icon */}
                    <div className="relative">
                      <div className="w-40 h-40 mx-auto bg-gradient-to-br from-wp-teal to-wp-teal-dark rounded-full flex items-center justify-center relative pulse-glow">
                        <Mic className="w-20 h-20 text-white" />
                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-3xl font-baloo font-bold text-white mb-3">WP Simplified Podcast</h3>
                      <p className="text-wp-teal font-semibold text-lg">WordPress Stories & Insights</p>
                    </div>

                    {/* Latest Episode */}
                    {!isLoading && latestPodcast && (
                      <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/30">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-baloo font-semibold text-white text-lg">Latest Episode</h4>
                          <Play className="w-5 h-5 text-wp-teal" />
                        </div>
                        <p className="text-slate-300 mb-4 line-clamp-2">{latestPodcast.title}</p>
                        <div className="flex items-center justify-between text-slate-400 text-sm mb-4">
                          {latestPodcast.published_date && (
                            <span>{latestPodcast.published_date}</span>
                          )}
                          {latestPodcast.duration && (
                            <span>{latestPodcast.duration}</span>
                          )}
                        </div>
                        <a 
                          href={latestPodcast.videourl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="no-link-styles"
                        >
                          <Button size="sm" className="w-full">
                            Listen Now
                          </Button>
                        </a>
                      </div>
                    )}

                    {/* Podcast Stats */}
                    <div className="grid grid-cols-1 gap-6 pt-6">
                      <div className="text-center p-4 bg-slate-700/30 rounded-xl border border-slate-600/30">
                        <div className="text-3xl font-baloo font-bold text-wp-teal mb-2">{totalEpisodes}+</div>
                        <div className="text-sm text-slate-300">Episodes</div>
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
