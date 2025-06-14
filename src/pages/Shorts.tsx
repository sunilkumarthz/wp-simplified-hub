
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Clock } from 'lucide-react';

const Shorts = () => {
  const shortsData = [
    {
      title: "WordCamp Nepal 2025 BTS WordPress",
      duration: "0:30",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=400&fit=crop"
    },
    {
      title: "From 500K WP Plugin Downloads to 500B Builder Ankur Panchel",
      duration: "0:45",
      thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=400&fit=crop"
    },
    {
      title: "WordCamp Nepal Core Contribution | Ahmad Anwer",
      duration: "0:38",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=400&fit=crop"
    },
    {
      title: "Mohammad Sajid Anwar Senior Web Developer at Gurmany",
      duration: "0:52",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=400&fit=crop"
    },
    {
      title: "Yashvardhan Singh Content Marketing Strategist with",
      duration: "0:41",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=400&fit=crop"
    },
    {
      title: "WordPress Quick Tips #1",
      duration: "0:25",
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=400&fit=crop"
    },
    {
      title: "Gutenberg Block Development",
      duration: "0:55",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=400&fit=crop"
    },
    {
      title: "WordPress Security Tips",
      duration: "0:35",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=400&fit=crop"
    },
    {
      title: "WooCommerce Setup Guide",
      duration: "0:48",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=400&fit=crop"
    },
    {
      title: "WordPress Performance Hacks",
      duration: "0:42",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=400&fit=crop"
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
              Quick <span className="text-gradient">Shorts</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Bite-sized WordPress tutorials and insights. Quick tips, behind-the-scenes content, 
              and community highlights in under a minute.
            </p>
            <Button className="wp-gradient text-slate-900 font-bold text-lg px-8 py-4 hover:scale-105 transition-transform duration-200">
              Watch All Shorts
            </Button>
          </div>
        </section>

        {/* Shorts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {shortsData.map((short, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group aspect-[3/4]">
                  <CardContent className="p-0 h-full">
                    <div className="relative h-full">
                      <img 
                        src={short.thumbnail} 
                        alt={short.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 bg-wp-teal rounded-full flex items-center justify-center">
                          <Play className="w-6 h-6 text-slate-900" />
                        </div>
                      </div>
                      
                      {/* Duration */}
                      <div className="absolute top-2 right-2 bg-black/80 px-2 py-1 rounded text-white text-xs flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {short.duration}
                      </div>
                      
                      {/* Shorts Label */}
                      <div className="absolute top-2 left-2 bg-wp-teal px-2 py-1 rounded text-slate-900 text-xs font-bold">
                        Short
                      </div>
                      
                      {/* Title */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-semibold text-sm line-clamp-3 leading-tight">
                          {short.title}
                        </h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button className="wp-gradient text-slate-900 font-bold text-lg px-8 py-4 hover:scale-105 transition-transform duration-200">
                <span className="flex items-center">
                  Explore All Shorts
                  <span className="ml-2">→</span>
                </span>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Shorts;
