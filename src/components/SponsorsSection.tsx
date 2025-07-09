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
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to <span className="text-primary">Accelerate</span> Your
            WordPress Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Join successful companies who trust WPSimplified to connect them
            with their ideal audience. Let's create something amazing together
            and drive real results for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              variant="solid"
              size="lg"
              className="text-lg px-8 py-4 h-auto"
              onClick={() =>
                window.open(
                  'mailto:sponsor@wpsimplified.in?subject=Partnership Inquiry - Become a Sponsor&body=Hi, I would like to become a sponsor for WPSimplified. Please provide more information about your partnership opportunities and next steps.',
                  '_blank'
                )
              }
            >
              <Award className="w-6 h-6 mr-2" />
              Become a Partner
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 h-auto"
              onClick={() =>
                window.open(
                  'mailto:sponsor@wpsimplified.in?subject=General Partnership Inquiry',
                  '_blank'
                )
              }
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SponsorsSection;
