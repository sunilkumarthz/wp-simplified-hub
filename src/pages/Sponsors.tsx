import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import SponsorHero from '@/components/sponsors/SponsorHero';
import SponsorsGrid from '@/components/sponsors/SponsorsGrid';

import SectionHeader from '@/components/common/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Award } from 'lucide-react';
import HeroBackground from '@/components/hero/HeroBackground';

const Sponsors = () => {
  const testimonials = [
    {
      name: 'Mayank Kumar',
      company: 'WP Tools Pro',
      quote:
        'Partnering with WPSimplified transformed our brand awareness. We saw a 300% increase in qualified leads within the first quarter!',
      role: 'Marketing Director',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face&auto=format&q=80',
    },
    {
      name: 'Satyam Vishwakarma',
      company: 'WP Tools Pro',
      quote:
        "The quality of engagement from Sunil's audience is exceptional. Best ROI we've seen from any marketing channel - highly recommend!",
      role: 'CEO',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face&auto=format&q=80',
    },
    {
      name: 'Jinendra Khobare',
      company: 'WordPress Pro Agency',
      quote:
        'Working with WPSimplified helped us reach our target audience authentically. The partnership has been incredibly valuable for our growth.',
      role: 'Founder',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face&auto=format&q=80',
    },
  ];

  return (
    <>
      <SEOHead
        title="Sponsor WPSimplified - Partner with WordPress Experts"
        description="Partner with WPSimplified to reach 100,000+ WordPress professionals. Flexible sponsorship packages for businesses of all sizes."
        keywords="WordPress sponsorship, developer marketing, WordPress advertising, tech partnership"
        url="https://wpsimplified.in/sponsors"
      />

      <div className="bg-slate-900">
        <Header />

        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <HeroBackground />
          {/* Hero Section */}
          <SponsorHero />

          {/* Final CTA Section */}
          <div className="py-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
            <div className="container mx-auto px-6 text-center">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Ready to <span className="text-primary">Accelerate</span> Your
                  WordPress Business?
                </h2>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                  Join successful companies who trust WPSimplified to connect
                  them with their ideal audience. Let's create something amazing
                  together and drive real results for your brand.
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
          </div>

          {/* Sponsor Logos */}
          <div className="py-12 bg-muted/50">
            <div className="container mx-auto px-6">
              <SponsorsGrid />
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="py-12 bg-muted/30">
            <div className="container mx-auto px-6">
              <SectionHeader
                badge={{
                  icon: <Star className="w-4 h-4" />,
                  text: 'Success Stories',
                }}
                title="What Our Partners Say"
                subtitle="Hear from successful companies who've achieved remarkable results partnering with WPSimplified"
              />

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <Card
                    key={index}
                    className="bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <blockquote className="text-muted-foreground italic mb-6 text-lg leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <div className="font-semibold text-foreground">
                            {testimonial.name}
                          </div>
                          <div className="text-primary text-sm">
                            {testimonial.role}
                          </div>
                          <div className="text-muted-foreground text-sm">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Sponsors;
