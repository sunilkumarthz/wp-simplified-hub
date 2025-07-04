import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Handshake, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SponsorsSection = () => {
  const stats = [
    { number: '100K+', label: 'Monthly Views' },
    { number: '50+', label: 'Countries' },
    { number: '15%', label: 'Engagement Rate' },
    { number: '4.9/5', label: 'Content Rating' },
  ];

  return (
    <>
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
              {' '}
              WPSimplified
            </span>
          </h2>

          <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8">
            Join industry leaders in sponsoring the most trusted WordPress
            education platform. Reach passionate developers and business owners
            who rely on our expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/sponsors" className="no-link-styles">
              <Button variant="solid" size="lg">
                <Handshake className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Explore Packages
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SponsorsSection;
