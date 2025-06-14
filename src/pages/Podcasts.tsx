
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Calendar, Mic, Users } from 'lucide-react';

const Podcasts = () => {
  const podcastEpisodes = [
    {
      title: "Building WordPress Communities with Ahmad Anwer",
      guest: "Ahmad Anwer",
      date: "Dec 15, 2024",
      duration: "45:32",
      description: "Deep dive into community building, core contributions, and the future of WordPress development.",
      thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=300&fit=crop"
    },
    {
      title: "From Plugin Developer to Community Leader",
      guest: "Ankur Panchel",
      date: "Dec 8, 2024",
      duration: "52:18",
      description: "Journey from 500K plugin downloads to building successful WordPress products and communities.",
      thumbnail: "https://images.unsplash.com/photo-1�.464-1749280684-dccba630e2f6?w=400&h=300&fit=crop"
    },
    {
      title: "WordPress Performance Optimization Secrets",
      guest: "Mohammad Sajid Anwar",
      date: "Dec 1, 2024",
      duration: "38:45",
      description: "Advanced techniques for optimizing WordPress performance and scaling applications.",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop"
    },
    {
      title: "Content Marketing for WordPress Professionals",
      guest: "Yashvardhan Singh",
      date: "Nov 24, 2024",
      duration: "41:22",
      description: "Strategies for marketing WordPress services and building a personal brand in the community.",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      title: "The Future of WordPress Block Editor",
      guest: "Sarah Chen",
      date: "Nov 17, 2024",
      duration: "47:15",
      description: "Exploring the evolution of Gutenberg and what's coming next for WordPress content creation.",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop"
    },
    {
      title: "WordPress Security Best Practices",
      guest: "Alex Rodriguez",
      date: "Nov 10, 2024",
      duration: "35:50",
      description: "Essential security measures every WordPress developer and site owner should implement.",
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 wp-gradient-dark opacity-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-wp-teal/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-wp-blue/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <div className="inline-block px-4 py-2 bg-wp-teal/20 rounded-full mb-6">
              <span className="text-wp-teal font-semibold text-sm">WORDPRESS PODCAST</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-baloo font-bold text-white mb-6">
              WP Simplified <span className="text-gradient">Podcast</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              In-depth conversations with WordPress experts, developers, and community leaders. 
              Discover insights, stories, and strategies that shape the WordPress ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="wp-gradient text-slate-900 font-bold text-lg px-8 py-4 hover:scale-105 transition-transform duration-200">
                Listen to Latest Episode
              </Button>
              <Button variant="outline" className="border-wp-teal text-wp-teal hover:bg-wp-teal hover:text-slate-900 font-bold text-lg px-8 py-4">
                Be a Guest
              </Button>
            </div>
          </div>
        </section>

        {/* Podcast Stats */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-wp-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mic className="w-8 h-8 text-slate-900" />
                </div>
                <div className="text-3xl font-baloo font-bold text-white mb-2">50+</div>
                <div className="text-slate-300">Episodes</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-wp-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-slate-900" />
                </div>
                <div className="text-3xl font-baloo font-bold text-white mb-2">25K+</div>
                <div className="text-slate-300">Listeners</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-wp-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-slate-900" />
                </div>
                <div className="text-3xl font-baloo font-bold text-white mb-2">100K+</div>
                <div className="text-slate-300">Downloads</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-wp-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-slate-900" />
                </div>
                <div className="text-3xl font-baloo font-bold text-white mb-2">Weekly</div>
                <div className="text-slate-300">Episodes</div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Episodes */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-baloo font-bold text-white mb-12 text-center">
              Recent Episodes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {podcastEpisodes.map((episode, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
                  <CardContent className="p-0 flex flex-col md:flex-row">
                    <div className="relative md:w-48 h-48 md:h-auto">
                      <img 
                        src={episode.thumbnail} 
                        alt={episode.title}
                        className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-wp-teal rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 text-slate-900" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1">
                      <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {episode.date}
                        </span>
                        <span>{episode.duration}</span>
                      </div>
                      
                      <h3 className="text-xl font-baloo font-bold text-white mb-2 line-clamp-2">
                        {episode.title}
                      </h3>
                      
                      <p className="text-wp-teal font-semibold mb-3">
                        Guest: {episode.guest}
                      </p>
                      
                      <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                        {episode.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button className="wp-gradient text-slate-900 font-bold text-lg px-8 py-4 hover:scale-105 transition-transform duration-200">
                View All Episodes
              </Button>
            </div>
          </div>
        </section>

        {/* Be a Guest Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 bg-wp-teal rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mic className="w-10 h-10 text-slate-900" />
                </div>
                
                <h2 className="text-4xl font-baloo font-bold text-white mb-6">
                  Be a Guest on Our Podcast
                </h2>
                
                <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
                  Share your WordPress expertise, story, and insights with our community. 
                  We're always looking for passionate WordPress professionals to feature.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h3 className="font-baloo font-bold text-white text-lg mb-2">WordPress Experts</h3>
                    <p className="text-slate-300 text-sm">Developers, designers, and consultants</p>
                  </div>
                  <div>
                    <h3 className="font-baloo font-bold text-white text-lg mb-2">Community Leaders</h3>
                    <p className="text-slate-300 text-sm">Organizers, speakers, and contributors</p>
                  </div>
                  <div>
                    <h3 className="font-baloo font-bold text-white text-lg mb-2">Entrepreneurs</h3>
                    <p className="text-slate-300 text-sm">Agency owners and product creators</p>
                  </div>
                </div>
                
                <Button className="wp-gradient text-slate-900 font-bold text-lg px-8 py-4 hover:scale-105 transition-transform duration-200">
                  Apply to Be a Guest
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Podcasts;
