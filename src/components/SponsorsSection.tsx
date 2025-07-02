import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Handshake, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SponsorsSection = () => {
  const stats = [
    { number: '100K+', label: 'Monthly Views' },
    { number: '50+', label: 'Countries' },
    { number: '15%', label: 'Engagement Rate' },
    { number: '4.9/5', label: 'Content Rating' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-wp-teal rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-cyan-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-emerald-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Badge className="bg-gradient-to-r from-wp-teal to-cyan-400 text-white px-4 py-2 text-lg font-semibold animate-pulse">
              <Handshake className="w-5 h-5 mr-2" />
              Partnership Opportunities
            </Badge>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-baloo font-bold text-white mb-4">
            Partner with 
            <span className="text-transparent bg-gradient-to-r from-wp-teal via-cyan-400 to-emerald-400 bg-clip-text">
              {' '}WPSimplified
            </span>
          </h2>
          
          <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8">
            Join industry leaders in sponsoring the most trusted WordPress education platform. 
            Reach passionate developers and business owners who rely on our expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-slate-700/50 border-slate-600 hover:border-wp-teal/50 transition-all duration-300 text-center group hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-2xl md:text-3xl font-bold text-wp-teal mb-2 group-hover:scale-110 transition-transform">
                      {stat.number}
                    </div>
                    <div className="text-slate-300 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-wp-teal/20 to-cyan-400/20 border-wp-teal/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Award className="w-6 h-6 mr-3 text-wp-teal" />
                  Why Choose WPSimplified?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-slate-300">
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-wp-teal mr-3" />
                    High-quality educational content
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-wp-teal mr-3" />
                    Engaged WordPress community
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-wp-teal mr-3" />
                    Proven track record with sponsors
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: CTA */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-baloo font-bold text-white mb-6">
              Ready to Grow Your WordPress Business?
            </h3>
            <p className="text-slate-300 mb-8 text-lg">
              Flexible sponsorship packages starting from $500/month. 
              Custom solutions available for enterprise partners.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-wp-teal to-wp-teal-dark hover:from-wp-teal-dark hover:to-wp-teal text-white font-bold text-lg px-8 py-6 rounded-xl shadow-2xl hover:shadow-wp-teal/25 hover:scale-105 transition-all duration-300 group"
              >
                <Link to="/sponsors">
                  <Handshake className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Explore Packages
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-wp-teal text-wp-teal hover:bg-wp-teal hover:text-white font-semibold text-lg px-8 py-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
                onClick={() => window.open('mailto:sponsor@wpsimplified.in?subject=Partnership Inquiry', '_blank')}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;