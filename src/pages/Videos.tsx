
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Clock, Eye } from 'lucide-react';

const Videos = () => {
  const videoCategories = [
    {
      title: "WordPress Basics",
      count: 25,
      description: "Complete guide for WordPress beginners"
    },
    {
      title: "Gutenberg Guide",
      count: 18,
      description: "Master the WordPress block editor"
    },
    {
      title: "WooCommerce Setup",
      count: 32,
      description: "Build your online store from scratch"
    },
    {
      title: "Plugin Development",
      count: 15,
      description: "Create custom WordPress plugins"
    },
    {
      title: "Theme Development",
      count: 22,
      description: "Build responsive WordPress themes"
    },
    {
      title: "Performance Optimization",
      count: 12,
      description: "Speed up your WordPress site"
    }
  ];

  const featuredVideos = [
    {
      title: "WordPress 6.4 Complete Tutorial",
      duration: "45:32",
      views: "12.5K",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
    },
    {
      title: "Building Custom Gutenberg Blocks",
      duration: "38:15",
      views: "8.2K",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop"
    },
    {
      title: "WooCommerce Advanced Setup",
      duration: "52:18",
      views: "15.3K",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
    },
    {
      title: "WordPress Security Best Practices",
      duration: "29:45",
      views: "9.1K",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop"
    },
    {
      title: "Custom Post Types & Fields",
      duration: "41:22",
      views: "11.8K",
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
    },
    {
      title: "WordPress API Development",
      duration: "35:50",
      views: "7.4K",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop"
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
            <h1 className="text-5xl md:text-6xl font-baloo font-bold text-white mb-6">
              WordPress <span className="text-gradient">Video Tutorials</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Comprehensive video tutorials covering everything from WordPress basics 
              to advanced development techniques. Learn at your own pace with step-by-step guides.
            </p>
            <Button className="wp-gradient text-slate-900 font-bold text-lg px-8 py-4 hover:scale-105 transition-transform duration-200">
              Watch Latest Videos
            </Button>
          </div>
        </section>

        {/* Video Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-baloo font-bold text-white mb-12 text-center">
              Video Categories
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoCategories.map((category, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-wp-teal rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-8 h-8 text-slate-900" />
                    </div>
                    <h3 className="text-2xl font-baloo font-bold text-white mb-2">
                      {category.title}
                    </h3>
                    <p className="text-wp-teal font-semibold mb-3">
                      {category.count} Videos
                    </p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Videos */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-baloo font-bold text-white mb-12 text-center">
              Featured Videos
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredVideos.map((video, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-wp-teal rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 text-slate-900" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-white text-xs flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {video.duration}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-baloo font-bold text-white mb-3 line-clamp-2">
                        {video.title}
                      </h3>
                      <div className="flex items-center text-slate-400 text-sm">
                        <Eye className="w-4 h-4 mr-1" />
                        {video.views} views
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button className="wp-gradient text-slate-900 font-bold text-lg px-8 py-4 hover:scale-105 transition-transform duration-200">
                View All Videos
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Videos;
