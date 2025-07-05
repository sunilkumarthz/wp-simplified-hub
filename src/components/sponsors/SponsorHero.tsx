import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Handshake, Zap, Target, Users, TrendingUp } from 'lucide-react';

const SponsorHero = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-fade-in">
            <Handshake className="w-5 h-5" />
            Partnership Opportunities Available
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight animate-fade-in">
            Partner with{' '}
            <span className="block text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text animate-fade-in">
              WPSimplified
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto animate-fade-in">
            Join industry leaders in sponsoring the most trusted WordPress education platform. 
            Reach <span className="text-primary font-semibold">100,000+</span> passionate developers and business owners worldwide.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Users, label: 'Monthly Reach', value: '100K+' },
              { icon: TrendingUp, label: 'Engagement Rate', value: '15%' },
              { icon: Target, label: 'Countries', value: '50+' },
              { icon: Handshake, label: 'Success Rate', value: '98%' }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
            <Button
              variant="solid"
              size="lg"
              className="text-lg px-8 py-4 h-auto"
              onClick={() =>
                window.open(
                  'mailto:sponsor@wpsimplified.in?subject=Partnership Inquiry - Start Partnership',
                  '_blank'
                )
              }
            >
              <Zap className="w-6 h-6 mr-2" />
              Start Partnership
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 h-auto"
              onClick={() => window.open('/media-kit.pdf', '_blank')}
            >
              <Target className="w-6 h-6 mr-2" />
              View Media Kit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorHero;